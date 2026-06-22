// 18th Edition BS 7671 Exam Practice — app logic
(function () {
  "use strict";

  const PASS_PERCENT = 72;
  const MOCK_DURATION_SECONDS = 2 * 60 * 60; // 2:00:00

  // ---- DOM refs ----
  const setupScreen = document.getElementById("setupScreen");
  const quizScreen = document.getElementById("quizScreen");
  const resultsScreen = document.getElementById("resultsScreen");

  const topicFilter = document.getElementById("topicFilter");
  const countGrid = document.getElementById("countGrid");
  const startBtn = document.getElementById("startBtn");
  const selectionHint = document.getElementById("selectionHint");

  const qCounter = document.getElementById("qCounter");
  const quizTopic = document.getElementById("quizTopic");
  const quizTimer = document.getElementById("quizTimer");
  const progressFill = document.getElementById("progressFill");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const explanationBox = document.getElementById("explanationBox");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");
  const quitBtn = document.getElementById("quitBtn");

  const headerStats = document.getElementById("headerStats");
  const statTimer = document.getElementById("statTimer");

  const resultHeadline = document.getElementById("resultHeadline");
  const resultScore = document.getElementById("resultScore");
  const resultBreakdown = document.getElementById("resultBreakdown");
  const reviewList = document.getElementById("reviewList");
  const restartBtn = document.getElementById("restartBtn");

  // ---- state ----
  let state = {
    mode: null, // 'mock' | 'practice'
    count: null, // number | 'all'
    topic: "",
    quizQuestions: [],
    currentIndex: 0,
    selectedOptionIndex: null,
    answered: false,
    answers: [], // { question, selectedIndex, correct }
    timerInterval: null,
    secondsRemaining: MOCK_DURATION_SECONDS,
  };

  // ---- setup screen population ----
  function populateTopics() {
    const topics = Array.from(new Set(QUESTION_BANK.map((q) => q.topic))).sort();
    topics.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      topicFilter.appendChild(opt);
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function updateStartEnabled() {
    startBtn.disabled = !(state.mode && state.count);
    selectionHint.textContent = state.mode && state.count
      ? "Ready when you are."
      : "Pick a mode and question count to begin.";
  }

  document.querySelectorAll(".mode-card").forEach((btn) => {
    btn.addEventListener("click", () => {
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
    if (confirm("End the test now and see your score?")) {
      finishQuiz();
    }
  });
  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", nextQuestion);

  function showScreen(screen) {
    [setupScreen, quizScreen, resultsScreen].forEach((s) => s.classList.add("hidden"));
    screen.classList.remove("hidden");
  }

  function resetState() {
    clearInterval(state.timerInterval);
    state = {
      mode: null,
      count: null,
      topic: topicFilter.value,
      quizQuestions: [],
      currentIndex: 0,
      selectedOptionIndex: null,
      answered: false,
      answers: [],
      timerInterval: null,
      secondsRemaining: MOCK_DURATION_SECONDS,
    };
    document.querySelectorAll(".mode-card").forEach((b) => b.classList.remove("selected"));
    countGrid.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("selected"));
    updateStartEnabled();
    statTimer.textContent = "2:00:00";
  }

  // ---- start quiz ----
  function startQuiz() {
    const topic = topicFilter.value;
    let pool = topic ? QUESTION_BANK.filter((q) => q.topic === topic) : QUESTION_BANK.slice();
    pool = shuffle(pool);

    let n;
    if (state.count === "all") n = pool.length;
    else n = Math.min(state.count, pool.length);

    state.quizQuestions = pool.slice(0, n);
    state.currentIndex = 0;
    state.answers = [];

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

  // ---- render question ----
  function renderQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    state.selectedOptionIndex = null;
    state.answered = false;

    qCounter.textContent = `Q ${state.currentIndex + 1} / ${state.quizQuestions.length}`;
    quizTopic.textContent = q.topic;
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

    checkBtn.disabled = true;
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    nextBtn.textContent = state.currentIndex === state.quizQuestions.length - 1 ? "See Results →" : "Next Question →";
  }

  function selectOption(idx) {
    if (state.answered) return;
    state.selectedOptionIndex = idx;
    Array.from(optionsList.children).forEach((btn, i) => {
      btn.classList.toggle("selected", i === idx);
    });
    checkBtn.disabled = false;
  }

  function checkAnswer() {
    if (state.selectedOptionIndex === null || state.answered) return;
    state.answered = true;
    const q = state.quizQuestions[state.currentIndex];
    const correctIdx = q.correct;
    const isCorrect = state.selectedOptionIndex === correctIdx;

    Array.from(optionsList.children).forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctIdx) btn.classList.add("correct");
      if (i === state.selectedOptionIndex && !isCorrect) btn.classList.add("incorrect");
    });

    state.answers.push({
      question: q,
      selectedIndex: state.selectedOptionIndex,
      correct: isCorrect,
    });

    if (state.mode === "practice") {
      explanationBox.classList.remove("hidden");
      explanationBox.innerHTML = `<strong>${isCorrect ? "Correct." : "Not quite."}</strong> ${
        isCorrect ? "" : `Correct answer: ${q.options[correctIdx]}. `
      }${q.explanation ? `Reference: ${escapeHtml(q.explanation)}` : ""}`;
    }

    checkBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    if (state.currentIndex + 1 >= state.quizQuestions.length) {
      finishQuiz();
      return;
    }
    state.currentIndex++;
    renderQuestion();
  }

  // ---- results ----
  function finishQuiz() {
    clearInterval(state.timerInterval);
    showScreen(resultsScreen);

    const total = state.quizQuestions.length;
    const answeredCount = state.answers.length;
    const correctCount = state.answers.filter((a) => a.correct).length;
    const unanswered = total - answeredCount;
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = pct >= PASS_PERCENT;

    resultHeadline.textContent = passed ? "Pass — nice work ⚡" : "Below pass mark";
    resultScore.textContent = `${pct}% (${correctCount}/${total})`;
    resultScore.className = "result-score " + (passed ? "pass" : "fail");

    // topic breakdown
    const byTopic = {};
    state.answers.forEach((a) => {
      const t = a.question.topic;
      byTopic[t] = byTopic[t] || { correct: 0, total: 0 };
      byTopic[t].total++;
      if (a.correct) byTopic[t].correct++;
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

    // review list (incorrect first)
    reviewList.innerHTML = "";
    const sorted = state.answers.slice().sort((a, b) => Number(a.correct) - Number(b.correct));
    sorted.forEach((a) => {
      const item = document.createElement("div");
      item.className = "review-item " + (a.correct ? "" : "wrong");
      const yourAnswerText = a.question.options[a.selectedIndex];
      const correctAnswerText = a.question.options[a.question.correct];
      item.innerHTML = `
        <div class="rq">${escapeHtml(a.question.question)}</div>
        <div class="ra ${a.correct ? "you-right" : "you-wrong"}">Your answer: ${escapeHtml(yourAnswerText)}</div>
        ${a.correct ? "" : `<div class="ra you-right">Correct answer: ${escapeHtml(correctAnswerText)}</div>`}
        ${a.question.explanation ? `<div class="ref">Ref: ${escapeHtml(a.question.explanation)}</div>` : ""}
      `;
      reviewList.appendChild(item);
    });

    progressFill.style.width = "100%";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- init ----
  populateTopics();
  updateStartEnabled();
})();
