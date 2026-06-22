// 18th Edition BS 7671 Exam Practice — app logic
(function () {
  "use strict";

  const PASS_PERCENT = 72;
  const MOCK_DURATION_SECONDS = 2 * 60 * 60; // 2:00:00
  const STORAGE_KEY = "bs7671_custom_questions";
  const HISTORY_KEY = "bs7671_history";
  const MISSED_KEY = "bs7671_missed_ids";

  // ---- DOM refs ----
  const setupScreen = document.getElementById("setupScreen");
  const quizScreen = document.getElementById("quizScreen");
  const resultsScreen = document.getElementById("resultsScreen");
  const manageScreen = document.getElementById("manageScreen");
  const historyScreen = document.getElementById("historyScreen");

  const manageQuestionsBtn = document.getElementById("manageQuestionsBtn");
  const backToSetupBtn = document.getElementById("backToSetupBtn");
  const customCountHint = document.getElementById("customCountHint");
  const newTopic = document.getElementById("newTopic");
  const topicSuggestions = document.getElementById("topicSuggestions");
  const newQuestionText = document.getElementById("newQuestionText");
  const newExplanation = document.getElementById("newExplanation");
  const saveQuestionBtn = document.getElementById("saveQuestionBtn");
  const addQuestionError = document.getElementById("addQuestionError");
  const customQuestionsList = document.getElementById("customQuestionsList");
  const exportQuestionsBtn = document.getElementById("exportQuestionsBtn");
  const importQuestionsBtn = document.getElementById("importQuestionsBtn");
  const importFileInput = document.getElementById("importFileInput");
  const importError = document.getElementById("importError");

  const historyBtn = document.getElementById("historyBtn");
  const historyCountHint = document.getElementById("historyCountHint");
  const backFromHistoryBtn = document.getElementById("backFromHistoryBtn");
  const lifetimeBreakdown = document.getElementById("lifetimeBreakdown");
  const historyList = document.getElementById("historyList");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const mistakesModeDesc = document.getElementById("mistakesModeDesc");

  const topicFilter = document.getElementById("topicFilter");
  const countGrid = document.getElementById("countGrid");
  const startBtn = document.getElementById("startBtn");
  const selectionHint = document.getElementById("selectionHint");

  const qCounter = document.getElementById("qCounter");
  const quizTopic = document.getElementById("quizTopic");
  const quizTimer = document.getElementById("quizTimer");
  const flagBtn = document.getElementById("flagBtn");
  const navigatorGrid = document.getElementById("navigatorGrid");
  const progressFill = document.getElementById("progressFill");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const explanationBox = document.getElementById("explanationBox");
  const prevBtn = document.getElementById("prevBtn");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");
  const quitBtn = document.getElementById("quitBtn");

  const statTimer = document.getElementById("statTimer");

  const resultHeadline = document.getElementById("resultHeadline");
  const resultScore = document.getElementById("resultScore");
  const resultBreakdown = document.getElementById("resultBreakdown");
  const reviewList = document.getElementById("reviewList");
  const restartBtn = document.getElementById("restartBtn");

  const ALL_SCREENS = [setupScreen, quizScreen, resultsScreen, manageScreen, historyScreen];

  // ---- state ----
  let state = {
    mode: null, // 'mock' | 'practice' | 'mistakes'
    count: null, // number | 'all'
    topic: "",
    quizQuestions: [],
    responses: [], // { selectedIndex, checked, correct, flagged }
    currentIndex: 0,
    timerInterval: null,
    secondsRemaining: MOCK_DURATION_SECONDS,
  };

  function showScreen(screen) {
    ALL_SCREENS.forEach((s) => s.classList.add("hidden"));
    screen.classList.remove("hidden");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- localStorage helpers ----
  function safeLoad(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function safeSave(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function loadCustomQuestions() { return safeLoad(STORAGE_KEY, []); }
  function saveCustomQuestions(list) { safeSave(STORAGE_KEY, list); }
  function loadHistory() { return safeLoad(HISTORY_KEY, []); }
  function saveHistory(list) { safeSave(HISTORY_KEY, list); }
  function loadMissedIds() { return safeLoad(MISSED_KEY, []); }
  function saveMissedIds(list) { safeSave(MISSED_KEY, list); }

  function getAllQuestions() {
    return QUESTION_BANK.concat(loadCustomQuestions());
  }

  function markMissed(id, wasCorrect) {
    let missed = loadMissedIds();
    if (wasCorrect) {
      missed = missed.filter((x) => x !== id);
    } else if (!missed.includes(id)) {
      missed.push(id);
    }
    saveMissedIds(missed);
  }

  // ---- setup screen population ----
  function populateTopics() {
    const topics = Array.from(new Set(getAllQuestions().map((q) => q.topic))).sort();
    topicFilter.innerHTML = '<option value="">All Topics</option>';
    topicSuggestions.innerHTML = "";
    topics.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      topicFilter.appendChild(opt);

      const dlOpt = document.createElement("option");
      dlOpt.value = t;
      topicSuggestions.appendChild(dlOpt);
    });
  }

  function updateCustomCountHint() {
    const n = loadCustomQuestions().length;
    customCountHint.textContent = n === 0
      ? "No custom questions added yet."
      : `${n} custom question${n === 1 ? "" : "s"} added — mixed into quizzes automatically.`;
  }

  function updateMistakesModeUI() {
    const n = loadMissedIds().length;
    const mistakesCard = document.querySelector('.mode-card[data-mode="mistakes"]');
    if (n === 0) {
      mistakesCard.setAttribute("disabled", "true");
      mistakesModeDesc.textContent = "No mistakes recorded yet — answer some questions first.";
    } else {
      mistakesCard.removeAttribute("disabled");
      mistakesModeDesc.textContent = `${n} question${n === 1 ? "" : "s"} you've previously gotten wrong.`;
    }
  }

  function updateHistoryCountHint() {
    const n = loadHistory().length;
    historyCountHint.textContent = n === 0
      ? "No attempts recorded yet."
      : `${n} attempt${n === 1 ? "" : "s"} recorded.`;
  }

  // ---- custom question management ----
  function renderCustomQuestionsList() {
    const list = loadCustomQuestions();
    customQuestionsList.innerHTML = "";
    if (list.length === 0) {
      customQuestionsList.innerHTML = '<p class="empty-note">You haven\'t added any questions yet.</p>';
      return;
    }
    list.slice().reverse().forEach((q) => {
      const item = document.createElement("div");
      item.className = "custom-q-item";
      item.innerHTML = `
        <div class="cq-body">
          <div class="cq-topic">${escapeHtml(q.topic)}</div>
          <div class="cq-text">${escapeHtml(q.question)}</div>
        </div>
        <button class="cq-delete" data-id="${q.id}">Delete</button>
      `;
      customQuestionsList.appendChild(item);
    });
    customQuestionsList.querySelectorAll(".cq-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        const updated = loadCustomQuestions().filter((q) => q.id !== id);
        saveCustomQuestions(updated);
        renderCustomQuestionsList();
        updateCustomCountHint();
        populateTopics();
      });
    });
  }

  function resetAddForm() {
    newTopic.value = "";
    newQuestionText.value = "";
    newExplanation.value = "";
    document.querySelectorAll(".new-option-input").forEach((i) => (i.value = ""));
    document.querySelector('input[name="newCorrect"][value="0"]').checked = true;
    addQuestionError.style.display = "none";
  }

  manageQuestionsBtn.addEventListener("click", () => {
    renderCustomQuestionsList();
    showScreen(manageScreen);
  });
  backToSetupBtn.addEventListener("click", () => showScreen(setupScreen));

  saveQuestionBtn.addEventListener("click", () => {
    const topic = newTopic.value.trim() || "Custom";
    const question = newQuestionText.value.trim();
    const optionInputs = Array.from(document.querySelectorAll(".new-option-input"));
    const options = optionInputs.map((i) => i.value.trim());
    const correctRadio = document.querySelector('input[name="newCorrect"]:checked');
    const correct = correctRadio ? Number(correctRadio.value) : 0;
    const explanation = newExplanation.value.trim();

    if (!question) {
      addQuestionError.textContent = "Please enter a question.";
      addQuestionError.style.display = "block";
      return;
    }
    if (options.some((o) => !o)) {
      addQuestionError.textContent = "Please fill in all 4 options.";
      addQuestionError.style.display = "block";
      return;
    }

    const list = loadCustomQuestions();
    const nextId = (Math.max(0, ...QUESTION_BANK.map((q) => q.id), ...list.map((q) => q.id)) || 0) + 1;
    list.push({ id: nextId, topic, question, options, correct, explanation });
    saveCustomQuestions(list);

    resetAddForm();
    renderCustomQuestionsList();
    updateCustomCountHint();
    populateTopics();
  });

  // ---- export / import ----
  exportQuestionsBtn.addEventListener("click", () => {
    const list = loadCustomQuestions();
    const blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bs7671-custom-questions.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  importQuestionsBtn.addEventListener("click", () => importFileInput.click());

  importFileInput.addEventListener("change", () => {
    const file = importFileInput.files[0];
    if (!file) return;
    importError.style.display = "none";
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed)) throw new Error("File must contain a JSON array of questions.");
        const existing = loadCustomQuestions();
        let nextId = (Math.max(0, ...QUESTION_BANK.map((q) => q.id), ...existing.map((q) => q.id)) || 0) + 1;
        const imported = [];
        parsed.forEach((q) => {
          if (
            q && typeof q.question === "string" && Array.isArray(q.options) && q.options.length === 4 &&
            typeof q.correct === "number" && q.correct >= 0 && q.correct <= 3
          ) {
            imported.push({
              id: nextId++,
              topic: typeof q.topic === "string" && q.topic ? q.topic : "Custom",
              question: q.question,
              options: q.options.map((o) => String(o)),
              correct: q.correct,
              explanation: typeof q.explanation === "string" ? q.explanation : "",
            });
          }
        });
        if (imported.length === 0) throw new Error("No valid questions found in that file.");
        saveCustomQuestions(existing.concat(imported));
        renderCustomQuestionsList();
        updateCustomCountHint();
        populateTopics();
      } catch (e) {
        importError.textContent = "Import failed: " + e.message;
        importError.style.display = "block";
      }
      importFileInput.value = "";
    };
    reader.readAsText(file);
  });

  // ---- history screen ----
  historyBtn.addEventListener("click", () => {
    renderHistoryScreen();
    showScreen(historyScreen);
  });
  backFromHistoryBtn.addEventListener("click", () => showScreen(setupScreen));
  clearHistoryBtn.addEventListener("click", () => {
    saveHistory([]);
    renderHistoryScreen();
    updateHistoryCountHint();
  });

  function renderHistoryScreen() {
    const history = loadHistory();

    const lifetime = {};
    history.forEach((h) => {
      Object.entries(h.topicBreakdown || {}).forEach(([topic, v]) => {
        lifetime[topic] = lifetime[topic] || { correct: 0, total: 0 };
        lifetime[topic].correct += v.correct;
        lifetime[topic].total += v.total;
      });
    });
    lifetimeBreakdown.innerHTML = "";
    if (Object.keys(lifetime).length === 0) {
      lifetimeBreakdown.innerHTML = '<p class="empty-note">Complete a quiz to see lifetime stats here.</p>';
    } else {
      Object.keys(lifetime).sort().forEach((t) => {
        const pct = Math.round((lifetime[t].correct / lifetime[t].total) * 100);
        const row = document.createElement("div");
        row.className = "topic-row";
        row.innerHTML = `<span>${escapeHtml(t)}</span><span>${lifetime[t].correct}/${lifetime[t].total} (${pct}%)</span>`;
        lifetimeBreakdown.appendChild(row);
      });
    }

    historyList.innerHTML = "";
    if (history.length === 0) {
      historyList.innerHTML = '<p class="empty-note">No attempts recorded yet.</p>';
      return;
    }
    history.slice().reverse().forEach((h) => {
      const item = document.createElement("div");
      item.className = "custom-q-item";
      const date = new Date(h.date);
      const dateStr = isNaN(date.getTime()) ? "" : date.toLocaleString();
      const modeLabel = h.mode === "mock" ? "Mock Exam" : h.mode === "mistakes" ? "Review Mistakes" : "Practice";
      item.innerHTML = `
        <div class="cq-body">
          <div class="cq-topic">${escapeHtml(modeLabel)}${h.topic ? " · " + escapeHtml(h.topic) : ""} · ${escapeHtml(dateStr)}</div>
          <div class="cq-text">${h.pct}% (${h.correct}/${h.total})${h.mode === "mock" ? (h.passed ? " — Pass" : " — Below pass mark") : ""}</div>
        </div>
      `;
      historyList.appendChild(item);
    });
  }

  function updateStartEnabled() {
    startBtn.disabled = !(state.mode && state.count);
    selectionHint.textContent = state.mode && state.count
      ? "Ready when you are."
      : "Pick a mode and question count to begin.";
  }

  document.querySelectorAll(".mode-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.hasAttribute("disabled")) return;
      document.querySelectorAll(".mode-card").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.mode = btn.dataset.mode;
      updateStartEnabled();
    });
  });

  countGrid.querySelectorAll(".count-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      countGrid.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      const c = btn.dataset.count;
      state.count = c === "all" ? "all" : parseInt(c, 10);
      updateStartEnabled();
    });
  });

  startBtn.addEventListener("click", startQuiz);
  restartBtn.addEventListener("click", () => {
    resetState();
    showScreen(setupScreen);
  });

  quitBtn.addEventListener("click", () => {
    if (quitBtn.dataset.armed === "true") {
      finishQuiz();
      quitBtn.dataset.armed = "false";
      quitBtn.textContent = "End & Score";
      return;
    }
    quitBtn.dataset.armed = "true";
    quitBtn.textContent = "Click again to confirm";
    setTimeout(() => {
      quitBtn.dataset.armed = "false";
      quitBtn.textContent = "End & Score";
    }, 4000);
  });

  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", nextQuestion);
  prevBtn.addEventListener("click", prevQuestion);
  flagBtn.addEventListener("click", toggleFlag);

  function resetState() {
    clearInterval(state.timerInterval);
    state = {
      mode: null,
      count: null,
      topic: topicFilter.value,
      quizQuestions: [],
      responses: [],
      currentIndex: 0,
      timerInterval: null,
      secondsRemaining: MOCK_DURATION_SECONDS,
    };
    document.querySelectorAll(".mode-card").forEach((b) => b.classList.remove("selected"));
    countGrid.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("selected"));
    updateStartEnabled();
    updateMistakesModeUI();
    statTimer.textContent = "2:00:00";
  }

  // ---- start quiz ----
  function startQuiz() {
    const topic = topicFilter.value;
    let basePool;
    if (state.mode === "mistakes") {
      const missed = new Set(loadMissedIds());
      basePool = getAllQuestions().filter((q) => missed.has(q.id));
    } else {
      basePool = getAllQuestions();
    }
    let pool = topic ? basePool.filter((q) => q.topic === topic) : basePool.slice();
    pool = shuffle(pool);

    if (pool.length === 0) {
      selectionHint.textContent = "No questions match that combination — try a different topic or mode.";
      return;
    }

    let n;
    if (state.count === "all") n = pool.length;
    else n = Math.min(state.count, pool.length);

    state.quizQuestions = pool.slice(0, n);
    state.responses = state.quizQuestions.map(() => ({ selectedIndex: null, checked: false, correct: null, flagged: false }));
    state.currentIndex = 0;

    if (state.mode === "mock") {
      quizTimer.classList.remove("hidden");
      state.secondsRemaining = MOCK_DURATION_SECONDS;
      startTimer();
    } else {
      quizTimer.classList.add("hidden");
      statTimer.textContent = "—";
    }

    showScreen(quizScreen);
    renderQuestion();
  }

  function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.secondsRemaining--;
      updateTimerDisplay();
      if (state.secondsRemaining <= 0) {
        clearInterval(state.timerInterval);
        finishQuiz();
      }
    }, 1000);
  }

  function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return [h, m, s].map((v, i) => (i === 0 ? String(v) : String(v).padStart(2, "0"))).join(":");
  }

  function updateTimerDisplay() {
    const t = formatTime(Math.max(state.secondsRemaining, 0));
    quizTimer.textContent = t;
    statTimer.textContent = t;
  }

  // ---- navigator ----
  function renderNavigator() {
    navigatorGrid.innerHTML = "";
    state.quizQuestions.forEach((_, idx) => {
      const r = state.responses[idx];
      const btn = document.createElement("button");
      btn.className = "nav-q-btn" +
        (idx === state.currentIndex ? " current" : "") +
        (r.checked ? " answered" : "") +
        (r.flagged ? " flagged" : "");
      btn.textContent = String(idx + 1);
      btn.addEventListener("click", () => goToQuestion(idx));
      navigatorGrid.appendChild(btn);
    });
  }

  function toggleFlag() {
    const r = state.responses[state.currentIndex];
    r.flagged = !r.flagged;
    flagBtn.classList.toggle("flagged", r.flagged);
    renderNavigator();
  }

  function goToQuestion(idx) {
    state.currentIndex = idx;
    renderQuestion();
  }

  // ---- render question ----
  function renderQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    const r = state.responses[state.currentIndex];

    qCounter.textContent = `Q ${state.currentIndex + 1} / ${state.quizQuestions.length}`;
    quizTopic.textContent = q.topic;
    flagBtn.classList.toggle("flagged", r.flagged);
    progressFill.style.width = `${(state.currentIndex / state.quizQuestions.length) * 100}%`;

    questionText.textContent = q.question;
    explanationBox.classList.add("hidden");
    explanationBox.innerHTML = "";

    optionsList.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span><span>${escapeHtml(opt)}</span>`;
      btn.addEventListener("click", () => selectOption(idx));
      optionsList.appendChild(btn);
    });

    prevBtn.disabled = state.currentIndex === 0;

    if (r.checked) {
      applyCheckedVisuals(q, r);
      checkBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      if (r.selectedIndex !== null) {
        optionsList.children[r.selectedIndex].classList.add("selected");
      }
      checkBtn.disabled = r.selectedIndex === null;
      checkBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
    }
    nextBtn.textContent = state.currentIndex === state.quizQuestions.length - 1 ? "See Results →" : "Next Question →";

    renderNavigator();
  }

  function applyCheckedVisuals(q, r) {
    Array.from(optionsList.children).forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add("correct");
      if (i === r.selectedIndex && !r.correct) btn.classList.add("incorrect");
    });
    if (state.mode !== "mock") {
      explanationBox.classList.remove("hidden");
      explanationBox.innerHTML = `<strong>${r.correct ? "Correct." : "Not quite."}</strong> ${
        r.correct ? "" : `Correct answer: ${escapeHtml(q.options[q.correct])}. `
      }${q.explanation ? `Reference: ${escapeHtml(q.explanation)}` : ""}`;
    }
  }

  function selectOption(idx) {
    const r = state.responses[state.currentIndex];
    if (r.checked) return;
    r.selectedIndex = idx;
    Array.from(optionsList.children).forEach((btn, i) => {
      btn.classList.toggle("selected", i === idx);
    });
    checkBtn.disabled = false;
  }

  function checkAnswer() {
    const q = state.quizQuestions[state.currentIndex];
    const r = state.responses[state.currentIndex];
    if (r.selectedIndex === null || r.checked) return;
    r.checked = true;
    r.correct = r.selectedIndex === q.correct;

    markMissed(q.id, r.correct);
    applyCheckedVisuals(q, r);

    checkBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    renderNavigator();
  }

  function nextQuestion() {
    if (state.currentIndex + 1 >= state.quizQuestions.length) {
      finishQuiz();
      return;
    }
    goToQuestion(state.currentIndex + 1);
  }

  function prevQuestion() {
    if (state.currentIndex === 0) return;
    goToQuestion(state.currentIndex - 1);
  }

  // ---- results ----
  function finishQuiz() {
    clearInterval(state.timerInterval);
    showScreen(resultsScreen);

    const total = state.quizQuestions.length;
    const answeredCount = state.responses.filter((r) => r.checked).length;
    const correctCount = state.responses.filter((r) => r.checked && r.correct).length;
    const unanswered = total - answeredCount;
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = pct >= PASS_PERCENT;

    resultHeadline.textContent = passed ? "Pass — nice work ⚡" : "Below pass mark";
    resultScore.textContent = `${pct}% (${correctCount}/${total})`;
    resultScore.className = "result-score " + (passed ? "pass" : "fail");

    const byTopic = {};
    state.quizQuestions.forEach((q, idx) => {
      const r = state.responses[idx];
      if (!r.checked) return;
      const t = q.topic;
      byTopic[t] = byTopic[t] || { correct: 0, total: 0 };
      byTopic[t].total++;
      if (r.correct) byTopic[t].correct++;
    });
    resultBreakdown.innerHTML = "";
    Object.keys(byTopic).sort().forEach((t) => {
      const row = document.createElement("div");
      row.className = "topic-row";
      row.innerHTML = `<span>${escapeHtml(t)}</span><span>${byTopic[t].correct}/${byTopic[t].total}</span>`;
      resultBreakdown.appendChild(row);
    });
    if (unanswered > 0) {
      const row = document.createElement("div");
      row.className = "topic-row";
      row.innerHTML = `<span>Unanswered</span><span>${unanswered}</span>`;
      resultBreakdown.appendChild(row);
    }

    reviewList.innerHTML = "";
    const pairs = state.quizQuestions
      .map((q, idx) => ({ q, r: state.responses[idx] }))
      .filter((p) => p.r.checked)
      .sort((a, b) => Number(a.r.correct) - Number(b.r.correct));
    pairs.forEach(({ q, r }) => {
      const item = document.createElement("div");
      item.className = "review-item " + (r.correct ? "" : "wrong");
      const yourAnswerText = q.options[r.selectedIndex];
      const correctAnswerText = q.options[q.correct];
      item.innerHTML = `
        <div class="rq">${escapeHtml(q.question)}</div>
        <div class="ra ${r.correct ? "you-right" : "you-wrong"}">Your answer: ${escapeHtml(yourAnswerText)}</div>
        ${r.correct ? "" : `<div class="ra you-right">Correct answer: ${escapeHtml(correctAnswerText)}</div>`}
        ${q.explanation ? `<div class="ref">Ref: ${escapeHtml(q.explanation)}</div>` : ""}
      `;
      reviewList.appendChild(item);
    });

    progressFill.style.width = "100%";

    // save attempt to history
    const history = loadHistory();
    history.push({
      date: new Date().toISOString(),
      mode: state.mode,
      topic: state.topic || "",
      total,
      correct: correctCount,
      pct,
      passed,
      topicBreakdown: byTopic,
    });
    saveHistory(history);
    updateHistoryCountHint();
    updateMistakesModeUI();
  }

  // ---- init ----
  populateTopics();
  updateStartEnabled();
  updateCustomCountHint();
  updateHistoryCountHint();
  updateMistakesModeUI();
})();
