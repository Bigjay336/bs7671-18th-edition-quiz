// 18th Edition (BS 7671:2018 + Amendment 2) practice question bank
// Built from the official 18th Edition sample test (Test 2) and matched answer/reference key.
// 'explanation' = plain-English reasoning; 'reference' = BS 7671 regulation citation.
const QUESTION_BANK = [
  {
    "id": 1,
    "topic": "Scope & Fundamental Principles",
    "question": "BS 7671 does not apply to",
    "options": [
      "Mains voltage alarm systems",
      "Railway signalling equipment",
      "Site-built switchboards",
      "Site fabricated cable enclosures"
    ],
    "correct": 1,
    "explanation": "BS 7671 covers most electrical installations, but Regulation 110.2 explicitly excludes certain specialist systems regulated elsewhere \u2014 including railway traction and signalling equipment, which fall under separate railway engineering standards rather than the wiring regulations.",
    "reference": "BS 7671:2018+A2 110.2 (ii), page 21"
  },
  {
    "id": 2,
    "topic": "Scope & Fundamental Principles",
    "question": "Which of the following installations is excluded from the scope of BS 7671?",
    "options": [
      "A permanent electrical installation in a caravan",
      "A temporary electrical installation on a construction site",
      "Equipment of mobile and fixed offshore installations",
      "Highway power supplies and street furniture"
    ],
    "correct": 2,
    "explanation": "Regulation 110.2 lists specific exclusions from scope, including equipment on mobile and fixed offshore installations (e.g. oil rigs), which are covered by separate offshore safety standards. Caravans, construction sites and street furniture are NOT excluded \u2014 each has its own dedicated section within BS 7671 (Sections 708, 704 and 715 respectively).",
    "reference": "BS 7671:2018+A2 110.2 (v), page 21"
  },
  {
    "id": 3,
    "topic": "Scope & Fundamental Principles",
    "question": "It should be verified that any addition to an existing installation has",
    "options": [
      "A similar wiring system to that used in the existing installation",
      "A supply separate from that of the existing installation",
      "Been treated as being entirely separate from the existing installation",
      "Not impaired the safety of the existing installation"
    ],
    "correct": 3,
    "explanation": "Regulation 132.16 requires that any addition or alteration to an installation must not impair the safety of what's already there \u2014 you must check things like earthing, protective device ratings and supply capacity can still safely support the addition, not simply match wiring style or add a separate supply.",
    "reference": "BS 7671:2018+A2 132.16, page 26"
  },
  {
    "id": 4,
    "topic": "Scope & Fundamental Principles",
    "question": "Which one of the following parts of BS 7671 contains greater detail of Selection and Erection of Equipment?",
    "options": [
      "Part 1",
      "Part 3",
      "Part 5",
      "Part 6"
    ],
    "correct": 2,
    "explanation": "BS 7671 is organised into Parts. Part 5, 'Selection and Erection of Equipment', is where the detailed requirements for wiring systems, switchgear, earthing arrangements and similar equipment-level decisions are set out (Chapters 51\u201356).",
    "reference": "BS 7671:2018+A2 Contents, page 127"
  },
  {
    "id": 5,
    "topic": "Definitions",
    "question": "What would an installation with a nominal voltage of 120 V AC between conductors be designated as?",
    "options": [
      "Extra-low voltage",
      "Low voltage",
      "Medium voltage",
      "Reduced voltage"
    ],
    "correct": 1,
    "explanation": "BS 7671 defines voltage bands. Extra-low voltage (ELV) covers up to 50V AC between conductors; anything above that \u2014 including 120V AC \u2014 falls into the Low Voltage (LV) band, which extends up to 1000V AC.",
    "reference": "BS 7671:2018+A2 Definitions - Voltage, Nominal , page 44"
  },
  {
    "id": 6,
    "topic": "Definitions",
    "question": "The conductor which connects together the MET and all exposed conductive parts is the",
    "options": [
      "Bonding conductor",
      "Circuit protective conductor",
      "Line conductor",
      "Protective bonding conductor"
    ],
    "correct": 1,
    "explanation": "The circuit protective conductor (cpc) is the conductor that connects exposed-conductive-parts of an installation back to the main earthing terminal (MET) for shock-protection purposes. A 'protective bonding conductor', by contrast, connects extraneous-conductive-parts \u2014 a different category of part \u2014 which is the distinction this question is testing.",
    "reference": "BS 7671:2018+A2 Figure 2.1, page 45"
  },
  {
    "id": 7,
    "topic": "Assessment of General Characteristics",
    "question": "Which of the following supply characteristics would need to be ascertained for an installation?",
    "options": [
      "Number of points of utilisation",
      "The external earth fault loop impedance",
      "The supply cable type",
      "The supply transformer type"
    ],
    "correct": 1,
    "explanation": "Regulation 313.1 requires the designer to establish key characteristics of the incoming supply, including the external earth fault loop impedance (Ze). This figure is essential later for calculating total loop impedance and confirming protective devices will disconnect within the required time. Cable/transformer type and number of points of utilisation are installation design matters, not supply characteristics obtained from the distributor.",
    "reference": "BS 7671:2018+A2 Section 313.1 (iv), page 55"
  },
  {
    "id": 8,
    "topic": "Assessment of General Characteristics",
    "question": "Which of the following is not a characteristic of the supply?",
    "options": [
      "Emergency switching",
      "External earth loop impedance Ze",
      "Frequency",
      "Nominal voltage"
    ],
    "correct": 0,
    "explanation": "Supply characteristics (Regulation 313.1) are things ascertained about the incoming supply itself \u2014 nominal voltage, frequency, prospective fault current, and external earth fault loop impedance (Ze). Emergency switching is a protective feature designed into the installation, not a characteristic of the supply.",
    "reference": "BS 7671:2018+A2 Section 313.1, page 56"
  },
  {
    "id": 9,
    "topic": "Assessment of General Characteristics",
    "question": "The earthing arrangement for the system shown is classified as",
    "options": [
      "TN",
      "TN-C-S",
      "TN-S",
      "TT"
    ],
    "correct": 2,
    "explanation": "TN-S systems use a separate metallic earth conductor (often the supply cable's sheath or armour) running all the way back to the source, giving a continuous earth fault path that's kept separate from the neutral along its entire route \u2014 unlike TN-C-S, where neutral and earth share a single combined (PEN) conductor for part of that route.",
    "reference": "BS 7671:2018+A2 Figure 3.8, page 54"
  },
  {
    "id": 10,
    "topic": "Assessment of General Characteristics",
    "question": "The electrical system in which all exposed-conductive-parts of an installation are connected to an earth electrode, which is electrically independent of the source earth, is",
    "options": [
      "TN-C",
      "TN-C-S",
      "TN-S",
      "TT"
    ],
    "correct": 3,
    "explanation": "A TT system is defined by the consumer earthing via their own local earth electrode, which is electrically independent of the supply's source earth. This arrangement is typical of rural overhead supplies where the distributor doesn't provide an earth terminal at the property.",
    "reference": "BS 7671:2018+A2 312.2.2.1, page 55"
  },
  {
    "id": 11,
    "topic": "Assessment of General Characteristics",
    "question": "Which one of the following ensures safe inspection, testing and maintenance for all installations?",
    "options": [
      "Division of the installation into circuits",
      "Protection of the installation by a 30 mA RCD",
      "Regular calibration of instrumentation",
      "Regular operational testing of an SPD"
    ],
    "correct": 0,
    "explanation": "Dividing an installation into separate circuits means a fault, test, or piece of maintenance on one circuit doesn't require the whole installation to be taken out of service, and faults can be isolated and traced more easily \u2014 this is the core safety rationale behind circuit division, distinct from RCD protection, instrument calibration, or SPD testing.",
    "reference": "BS 7671:2018+A2 Figure 314.1, page 56"
  },
  {
    "id": 12,
    "topic": "Assessment of General Characteristics",
    "question": "Which one of the following should consider measures to reduce the effects of EMI in an installation with regard to electromagnetic compatibility?",
    "options": [
      "The BSI",
      "The client or owner",
      "The designer",
      "The distributor"
    ],
    "correct": 2,
    "explanation": "Regulation 332.2 places responsibility for considering electromagnetic compatibility (EMC) on the designer of the installation, who must assess likely sources and victims of electromagnetic interference and build in suitable measures (e.g. bonding networks, cable segregation) at the design stage.",
    "reference": "BS 7671:2018+A2 Section 332.2, page 57"
  },
  {
    "id": 13,
    "topic": "Appendices & Tables",
    "question": "Where particular risks of fire exist in an area of high density occupation with difficult conditions of evacuation, the external influence code would be",
    "options": [
      "AD4",
      "BD3",
      "BD4",
      "CA1"
    ],
    "correct": 2,
    "explanation": "BS 7671's external influence codes (Appendix 5) use a structured classification; 'BD' codes describe conditions of evacuation in an emergency, with BD4 representing the most demanding combination \u2014 high density occupation together with difficult evacuation conditions \u2014 which calls for more stringent fire-related wiring measures.",
    "reference": "BS 7671:2018+A2 Appendix 5, page 492"
  },
  {
    "id": 14,
    "topic": "Protection for Safety",
    "question": "Which of the following is not considered as a potential source of electromagnetic disturbance?",
    "options": [
      "Electric fires",
      "Electric motors",
      "Lifts",
      "Rectifiers"
    ],
    "correct": 0,
    "explanation": "Recognised sources of electromagnetic disturbance generally involve switching, rapid current changes, or rectification \u2014 motors, lifts (motor starting/switching) and rectifiers (harmonics) are all known EMI sources. A simple resistive electric fire draws a steady current with no significant switching transients, so it isn't considered a notable disturbance source.",
    "reference": "BS 7671:2018+A2 Section 444.4.1, page 110"
  },
  {
    "id": 15,
    "topic": "Protection for Safety",
    "question": "Where measures are taken against electromagnetic disturbances, what are the minimum nominal dimensions of a flat cross section bonding ring network conductor?",
    "options": [
      "10mm x 5mm",
      "16mm x 8mm",
      "25mm x 3mm",
      "6mm x 4mm"
    ],
    "correct": 2,
    "explanation": "Regulation 444.5.3 (measures against electromagnetic disturbance) specifies a minimum flat conductor size of 25mm x 3mm for the bonding ring network used to control EMI, ensuring the network has adequate cross-section to be effective.",
    "reference": "BS 7671:2018+A2 Section 444.5.3, page 116"
  },
  {
    "id": 16,
    "topic": "Protection for Safety",
    "question": "Which of the following will provide overload protection?",
    "options": [
      "Circuit-breaker",
      "Disconnector",
      "Linked switch",
      "RCD"
    ],
    "correct": 0,
    "explanation": "Overload protection requires a device that responds to sustained current above a conductor's rated capacity \u2014 a circuit-breaker (or fuse) with a suitable time/current characteristic does this. RCDs respond to earth leakage imbalance, not overload, and a disconnector or linked switch only provides isolation, not automatic overcurrent detection.",
    "reference": "BS 7671:2018+A2 Section 432.1, page 94"
  },
  {
    "id": 17,
    "topic": "Protection for Safety",
    "question": "Which of the following is a method of fault protection?",
    "options": [
      "Insulation of live parts",
      "Placing out of reach",
      "Protection by double or reinforced insulation",
      "Protection by obstacles"
    ],
    "correct": 2,
    "explanation": "Fault protection covers measures that protect against electric shock if a single fault occurs (e.g. a live conductor contacting an exposed part). Double or reinforced insulation is one of the recognised fault-protection measures. Insulation of live parts, placing out of reach, and obstacles are all 'basic protection' measures \u2014 they guard against contact in normal conditions, not against a fault.",
    "reference": "BS 7671:2018+A2 Section 412.1.1, page 75"
  },
  {
    "id": 18,
    "topic": "Protection for Safety",
    "question": "A BS EN 61558-2-5 shaver socket is an example of protection by",
    "options": [
      "Barriers and enclosures",
      "Class I equipment",
      "Electrical separation",
      "Solid earthing"
    ],
    "correct": 2,
    "explanation": "A shaver supply unit built to BS EN 61558-2-5 contains an isolating transformer, giving 'electrical separation' \u2014 its output circuit is isolated from earth and the incoming supply, so a single fault on the output doesn't create a shock path back through the protective conductor.",
    "reference": "BS 7671:2018+A2 Knowledge"
  },
  {
    "id": 19,
    "topic": "Protection for Safety",
    "question": "If a circuit forming part of a 230 V TT system has an earth fault loop impedance value (Zs) of 500 \u03a9 the rated residual operating current of an RCD would need to be equal to or less than",
    "options": [
      "100 mA",
      "30 mA",
      "300 mA",
      "500 mA"
    ],
    "correct": 0,
    "explanation": "For a TT system, the touch-voltage limit under fault is 50V. With Zs = 500\u03a9, the maximum residual current that keeps the touch voltage at or below 50V is 50V \u00f7 500\u03a9 = 0.1A, i.e. 100mA \u2014 so the RCD's rated residual operating current must be 100mA or less.",
    "reference": "BS 7671:2018+A2 Table 41.5, page 70"
  },
  {
    "id": 20,
    "topic": "Protection for Safety",
    "question": "A 32A BS 88-2 fuse is used to protect a distribution circuit. What would the maximum permitted value of earth fault loop impedance (Zs) be?",
    "options": [
      "0.91\u03a9",
      "0.99\u03a9",
      "1.6\u03a9",
      "1.7\u03a9"
    ],
    "correct": 3,
    "explanation": "Table 41.4 lists the maximum earth fault loop impedance permitted for each device rating so that disconnection happens within the required time. For a 32A BS 88-2 fuse, that maximum value is 1.7\u03a9 \u2014 taken directly from the fuse's published time/current disconnection characteristic in the table.",
    "reference": "BS 7671:2018+A2 Table 41.4, page 69"
  },
  {
    "id": 21,
    "topic": "Protection for Safety",
    "question": "Which of the following types of fuse system is a BS88-2 fuse?",
    "options": [
      "B",
      "C",
      "D",
      "E"
    ],
    "correct": 3,
    "explanation": "This is simply BS 7671's own labelling convention for fuse types in its reference tables \u2014 BS 88-2 fuses are listed under fuse system 'E' in the standard's classification of common fuse types, alongside other lettered systems for different BS fuse standards.",
    "reference": "BS 7671:2018+A2 Table 41.4, page 70"
  },
  {
    "id": 22,
    "topic": "Protection for Safety",
    "question": "When using a non-metallic hand-held piece of equipment, the maximum temperature of any accessible part is",
    "options": [
      "30\u2103",
      "45\u2103",
      "55\u2103",
      "65\u2103"
    ],
    "correct": 3,
    "explanation": "Table 42.1 sets maximum touch temperatures by surface material, since metal conducts heat into skin faster than non-metal at the same temperature (raising burn risk). For non-metallic accessible parts of hand-held equipment, the permitted maximum is the most generous of the bands: 65\u00b0C.",
    "reference": "BS 7671:2018+A2 Table 42.1, page 91"
  },
  {
    "id": 23,
    "topic": "Protection for Safety",
    "question": "In a location where a particular risk of fire exists, any temperature cut-out device must",
    "options": [
      "Be at least IP5X",
      "Be reset automatically",
      "Be reset manually only",
      "Have no reset facility"
    ],
    "correct": 2,
    "explanation": "In locations with a particular fire risk, an automatic thermal cut-out that has tripped due to overheating must require deliberate manual resetting \u2014 this prevents the device silently and automatically re-energising equipment that overheated for a reason that hasn't been investigated.",
    "reference": "BS 7671:2018+A2 422.1.3, page 86"
  },
  {
    "id": 24,
    "topic": "Protection for Safety",
    "question": "Which one of the following is a situation where overload protection devices may be omitted for safety reasons?",
    "options": [
      "The supply circuit of a goods lift",
      "The supply to a burglar alarm panel",
      "The supply to a car park barrier",
      "The supply to a fire alarm"
    ],
    "correct": 3,
    "explanation": "Regulation 433.3 allows overload protection to be omitted where tripping on overload would create a greater danger than the overload itself \u2014 life-safety circuits such as a fire alarm supply are a recognised example, since continuity of supply matters more than nuisance-free overload tripping (short-circuit/fault protection is still required).",
    "reference": "BS 7671:2018+A2 433.3.3, page 96"
  },
  {
    "id": 25,
    "topic": "Definitions",
    "question": "What would an overload current result from?",
    "options": [
      "A disconnected conductor touching an exposed conductive part",
      "A motor running current exceeding the protective device rating",
      "Damage to the insulation between live conductors",
      "Penetration of a cable by a nail"
    ],
    "correct": 1,
    "explanation": "An overload is excess current in an otherwise healthy circuit \u2014 for example a motor labouring mechanically and drawing more running current than the circuit and its protective device are rated for. The other options describe fault conditions (insulation failure, a nail through a cable, a conductor touching an exposed part), which are short-circuits or earth faults, not overloads.",
    "reference": "BS 7671:2018+A2 Part 2, page 39"
  },
  {
    "id": 26,
    "topic": "Protection for Safety",
    "question": "Which of the following situations is not to be considered when considering overvoltage control?",
    "options": [
      "Damage to cultural heritage",
      "Interruption of public services",
      "Loss of human life",
      "Loss of livestock life"
    ],
    "correct": 3,
    "explanation": "Section 443 justifies mandatory surge/overvoltage protection by reference to specific consequences: loss of human life, interruption of public services, and damage to irreplaceable cultural heritage. Loss of livestock life isn't one of the criteria listed in that particular regulation, even though livestock safety is addressed elsewhere in BS 7671 (e.g. agricultural locations).",
    "reference": "BS 7671:2018+A2 443.4, page 107"
  },
  {
    "id": 27,
    "topic": "Protection for Safety",
    "question": "Which one of the following situations is likely to cause severe, temporary overvoltage in an installation?",
    "options": [
      "Loss of line conductor in a high voltage system",
      "Loss of line conductor in a low-voltage system",
      "Loss of neutral conductor in a low voltage system",
      "Loss of protective conductor in a high voltage system"
    ],
    "correct": 2,
    "explanation": "Losing the neutral conductor in a low voltage system \u2014 particularly a multi-phase distribution \u2014 unbalances the loads across phases and can cause the voltage on some phases to rise well above nominal, since the neutral point is no longer held at its expected potential. This is a recognised cause of severe, temporary overvoltage.",
    "reference": "BS 7671:2018+A2 442.1.1 (v), page 102"
  },
  {
    "id": 28,
    "topic": "Selection & Erection of Equipment",
    "question": "When selecting wiring systems for safety services, the type of cable that should be used in fire conditions should comply with the test requirements of",
    "options": [
      "BS 5467",
      "BS 6231",
      "BS EN 50200",
      "IEC 60331-1"
    ],
    "correct": 2,
    "explanation": "Cables supplying safety services (fire alarms, emergency lighting, sprinkler pumps etc.) need to keep working during a fire, so they must be tested to a standard that demonstrates fire resistance and circuit integrity under flame \u2014 BS EN 50200 is the specified fire test method for that purpose.",
    "reference": "BS 7671:2018+A2 560.8.1 (iii), page 228"
  },
  {
    "id": 29,
    "topic": "Selection & Erection of Equipment",
    "question": "To prevent circulating eddy currents in steel conduit, trunking or cable armouring",
    "options": [
      "All live conductors of a circuit must be contained in the same enclosure",
      "Line and neutral conductors are to be kept separate",
      "Only dc must be used",
      "The enclosures should be sufficiently earthed"
    ],
    "correct": 0,
    "explanation": "When all live conductors of a circuit (line and neutral together) run through the same steel enclosure, their magnetic fields largely cancel out. If they're split between separate steel enclosures, the uncancelled alternating magnetic field induces unwanted circulating (eddy) currents \u2014 and heating \u2014 in the surrounding ferrous metal.",
    "reference": "BS 7671:2018+A2 521.5.1, page 139"
  },
  {
    "id": 30,
    "topic": "Definitions",
    "question": "What does a device intended to cut off all voltage from an installation provide?",
    "options": [
      "Discrimination",
      "Emergency switching",
      "Functional switching",
      "Isolation"
    ],
    "correct": 3,
    "explanation": "Part 2 defines isolation as cutting off supply from all live conductors so equipment or an installation can be worked on with no electrical energy present. This is distinct from emergency switching or functional switching, which serve different purposes and don't necessarily disconnect every live conductor.",
    "reference": "BS 7671:2018+A2 Part 2, page 37"
  },
  {
    "id": 31,
    "topic": "Selection & Erection of Equipment",
    "question": "Where the main earth terminal is separate from main switchgear, a permanent label should be fixed in a visible position with the wording",
    "options": [
      "Danger Earth Connection - Do Not Remove",
      "Danger Electrical Connection - Do Not Remove",
      "Safety Earth Connection - Do Not Remove",
      "Safety Electrical Connection - Do Not Remove"
    ],
    "correct": 3,
    "explanation": "Regulation 514.13.1 specifies the exact, prescribed wording required on the warning label at a main earth terminal that's separate from the main switchgear: 'Safety Electrical Connection - Do Not Remove'. The 'Danger...' wording is used for different warning contexts elsewhere in BS 7671.",
    "reference": "BS 7671:2018+A2 514.13.1, page 136"
  },
  {
    "id": 32,
    "topic": "Selection & Erection of Equipment",
    "question": "A label marked with the words \u2018Safety Electrical Connection - Do Not Remove\u2019 must be fixed at or near the",
    "options": [
      "Connection to each earth electrode",
      "Control gear for discharge lighting",
      "Final circuit fuse",
      "Supply of the fire alarm circuits"
    ],
    "correct": 0,
    "explanation": "Per Regulation 514.13.1(i), this label must be fixed at the connection to each earth electrode (and other safety-critical bonding/earthing connections), so nobody working nearby later disturbs that connection without realising its importance.",
    "reference": "BS 7671:2018+A2 514.13.1 (i), page 136"
  },
  {
    "id": 33,
    "topic": "Selection & Erection of Equipment",
    "question": "A non flame propagating wiring system having a maximum internal cross-sectional area of 710 mm2",
    "options": [
      "Must be internally sealed",
      "Must be internally sealed if passing through a brick wall",
      "Need not be internally sealed",
      "Need only be sealed if passing through an insulating partition"
    ],
    "correct": 2,
    "explanation": "Regulation 527.2.3 exempts non-flame-propagating wiring enclosures from internal sealing where the internal cross-sectional area doesn't exceed 710mm\u00b2 \u2014 below this size, the risk of fire spreading through the enclosure's interior is considered low enough that sealing isn't mandatory (sealing at penetrations through fire-separating walls/floors is still a separate requirement).",
    "reference": "BS 7671:2018+A2 527.2.3, page 150"
  },
  {
    "id": 34,
    "topic": "Selection & Erection of Equipment",
    "question": "To what depth should cables that are placed directly in the ground be buried at?",
    "options": [
      "They should be buried not less than 0.75 m",
      "They should be buried not less than 1.5 m",
      "They should be buried sufficiently to allow easy access",
      "They should be buried sufficiently to avoid damage"
    ],
    "correct": 3,
    "explanation": "Rather than a single universal number, BS 7671 requires direct-buried cables to be laid at a depth \u2014 and with protection such as cable tiles or marker tape \u2014 sufficient to avoid damage from foreseeable ground disturbance. The right depth varies with how the ground above is used, so the regulation is performance-based rather than fixed.",
    "reference": "BS 7671:2018+A2 522.8.10, page 143"
  },
  {
    "id": 35,
    "topic": "Appendices & Tables",
    "question": "The derating factor to be applied to a cable passing directly through a 200 mm thermally filled cavity wall is",
    "options": [
      "0.51",
      "0.63",
      "0.78",
      "0.88"
    ],
    "correct": 1,
    "explanation": "This is a specific correction factor taken from Appendix 4's reference tables. A thermally filled cavity wall surrounds the cable with significant insulation, reducing its ability to shed heat, so its current-carrying capacity must be reduced \u2014 in this case to 63% of its unobstructed rating.",
    "reference": "BS 7671:2018+A2 Appendix 4, Item 2.6, page 423"
  },
  {
    "id": 36,
    "topic": "Selection & Erection of Equipment",
    "question": "Which of the following types of SPD are most suitable for installation at the origin of the supply to protect against overvoltage?",
    "options": [
      "Type0",
      "Type1",
      "Type3",
      "Type4"
    ],
    "correct": 1,
    "explanation": "Type 1 SPDs are built to handle the severe, high-energy transients associated with a direct or nearby lightning strike conducted into the installation, which is why they're installed at the origin of supply. Type 2 devices are typically used further downstream for switching transients, and Type 3 closer to sensitive equipment.",
    "reference": "BS 7671:2018+A2 534.4.1.1 (i), page 164"
  },
  {
    "id": 37,
    "topic": "Selection & Erection of Equipment",
    "question": "Which one of the following can be used as a device for emergency switching?",
    "options": [
      "20 A plug and socket-outlet",
      "Semiconductor devices",
      "Switched fused connection unit",
      "Unswitched fused connection unit"
    ],
    "correct": 2,
    "explanation": "An emergency switching device must interrupt supply directly and immediately with a single action, without relying on control circuitry that could introduce delay or failure. A switched fused connection unit provides that direct mechanical break; semiconductor devices and unswitched units don't meet this requirement for immediate, reliable interruption.",
    "reference": "BS 7671:2018+A2 Table 537.4, page 185"
  },
  {
    "id": 38,
    "topic": "Selection & Erection of Equipment",
    "question": "Where practical, the main protective equipotential bonding to the gas services in a building should be made within",
    "options": [
      "3m of the meter on the consumer\u2019s side",
      "3m of the meter on the supply side",
      "600mm of the meter on the consumer\u2019s side",
      "600mm of the meter on the supply side"
    ],
    "correct": 2,
    "explanation": "Regulation 544.1.2 requires the main bonding connection to the gas installation to be made as close as practicable to the point of entry \u2014 within 600mm of the meter outlet union, on the consumer's side of the meter, since it's the pipework inside the building that needs to be at the same potential as other earthed metalwork.",
    "reference": "BS 7671:2018+A2 544.1.2, page 206"
  },
  {
    "id": 39,
    "topic": "Selection & Erection of Equipment",
    "question": "The minimum CSA of a supplementary bonding conductor not protected against mechanical damage and run as a separate cable should be",
    "options": [
      "1.5 mm2",
      "2.5 mm2",
      "4.0 mm2",
      "6.0 mm2"
    ],
    "correct": 2,
    "explanation": "Regulation 544.2.1 sets a 4.0mm\u00b2 minimum cross-sectional area for a supplementary bonding conductor that's run as a separate cable without mechanical protection, giving it enough mechanical robustness given it isn't enclosed or otherwise shielded from damage.",
    "reference": "BS 7671:2018+A2 544.2.1, page 206"
  },
  {
    "id": 40,
    "topic": "Selection & Erection of Equipment",
    "question": "A firefighter's switch should comply with which of the following requirements?",
    "options": [
      "It musn't be more than 3.75m from the ground",
      "It must be electrically linked",
      "It must be in a locked location to prevent nuisance operation",
      "It should be at the main entrance to the building"
    ],
    "correct": 3,
    "explanation": "A firefighter's switch needs to be somewhere fire crews can quickly find and operate it on arrival \u2014 typically at the main entrance to the building, clearly marked and within a defined height range \u2014 rather than relying on detail like a maximum mounting height alone or an interlock mechanism.",
    "reference": "BS 7671:2018+A2 537.4.2.2 (ii), page 188"
  },
  {
    "id": 41,
    "topic": "Selection & Erection of Equipment",
    "question": "A source for a safety service should be supplied from a",
    "options": [
      "Capacitor",
      "DC motor",
      "Generator set",
      "Rectifier"
    ],
    "correct": 2,
    "explanation": "A safety service (emergency lighting, fire pumps, etc.) needs a genuinely independent energy source that keeps working if the normal supply fails \u2014 an engine-driven generator set provides that independence. Capacitors, DC motors and rectifiers either store negligible usable energy or still depend on an external supply to function, so they don't qualify as a standalone source.",
    "reference": "BS 7671:2018+A2 560.6.1, page 226"
  },
  {
    "id": 42,
    "topic": "Inspection & Testing",
    "question": "What is the name of the document that must be issued following the periodic inspection and testing of an electrical installation?",
    "options": [
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Minor Electrical Installation Works Certificate",
      "Periodic Inspection Report"
    ],
    "correct": 1,
    "explanation": "BS 7671 distinguishes certificates for new work (an Electrical Installation Certificate, or a Minor Works Certificate for smaller jobs) from the report produced when an existing installation is periodically reassessed for ongoing safety \u2014 that report is the Electrical Installation Condition Report (EICR).",
    "reference": "BS 7671:2018+A2 653.1, page 239"
  },
  {
    "id": 43,
    "topic": "Inspection & Testing",
    "question": "The test voltage to be used for an insulation resistance test between the lines of a 400 V three-phase circuit is",
    "options": [
      "1000Vdc",
      "250Vdc",
      "500Vdc",
      "750Vdc"
    ],
    "correct": 2,
    "explanation": "Table 64 sets insulation resistance test voltages by the circuit's nominal voltage band. Standard LV circuits up to 500V \u2014 which covers typical 230/400V installations \u2014 are tested at 500V DC, with a minimum acceptable result (commonly 1M\u03a9). Higher voltage installations use a higher test voltage.",
    "reference": "BS 7671:2018+A2 Table 64, page 234"
  },
  {
    "id": 44,
    "topic": "Inspection & Testing",
    "question": "By whom should an Electrical Installation Certificate be signed by?",
    "options": [
      "An electrician",
      "Competent persons",
      "The designer of the installation only",
      "The person ordering the inspection"
    ],
    "correct": 1,
    "explanation": "An Electrical Installation Certificate must be signed by the competent person(s) responsible for the design, construction, and inspection & testing of the work \u2014 potentially several different people, each signing for the part they're responsible for \u2014 not simply 'an electrician' in general, the designer alone, or the client who commissioned the work.",
    "reference": "BS 7671:2018+A2 644.5, page 238"
  },
  {
    "id": 45,
    "topic": "Inspection & Testing",
    "question": "Which one of the following tests does not need to be carried out in a specific order, in relation to other tests, during an initial verification?",
    "options": [
      "Continuity of conductors",
      "Earth fault loop impedance",
      "Insulation resistance",
      "Protection by SELV"
    ],
    "correct": 1,
    "explanation": "BS 7671's initial verification sequence requires dead tests before live tests, and within the dead tests there's a logical build-up (continuity, then insulation resistance, then polarity) since each depends on the previous one having passed safely. Earth fault loop impedance, performed once it's confirmed safe to apply a live test, doesn't have that same fixed dependency on the other listed tests.",
    "reference": "BS 7671:2018+A2 643.1 paragraph 4, page 233"
  },
  {
    "id": 46,
    "topic": "Special Installations & Locations",
    "question": "Electrical equipment installed in Zones 1 and 2 of a bathroom must have a minimum index of protection (IP rating) of",
    "options": [
      "IP2X",
      "IP4X",
      "IPX2",
      "IPX4"
    ],
    "correct": 3,
    "explanation": "Section 701 sets IP ratings for bathroom zones based on realistic water exposure. Zones 1 and 2, around baths and showers, require equipment rated at least IPX4 \u2014 protected against water splashed from any direction \u2014 reflecting the genuine risk of spray in those zones.",
    "reference": "BS 7671:2018+A2 701.512.2, page 244"
  },
  {
    "id": 47,
    "topic": "Special Installations & Locations",
    "question": "What is the minimum degree of protection that all equipment installed in hot air saunas should have?",
    "options": [
      "IP22",
      "IP3X",
      "IP4X",
      "IPX4"
    ],
    "correct": 3,
    "explanation": "Section 703 covers hot air saunas, which are high-humidity, condensation-prone environments. Equipment installed there must be rated at least IPX4 to resist moisture ingress from condensation and incidental water exposure.",
    "reference": "BS 7671:2018+A2 703.512.2, page 257"
  },
  {
    "id": 48,
    "topic": "Special Installations & Locations",
    "question": "Within Zones 0 and 1 of a swimming pool, a protective provision against electric shock should be by means of",
    "options": [
      "SELV",
      "non-conducting location",
      "obstacles",
      "placing out of reach"
    ],
    "correct": 0,
    "explanation": "Section 702 requires the strictest level of shock protection \u2014 SELV, using very low voltage with no exposed-conductive-parts connected to earth \u2014 in the most water-exposed pool zones (0 and 1), since a fault combined with wet skin or water immersion creates the highest possible shock risk. Lower-tier measures like obstacles or placing out of reach aren't adequate here.",
    "reference": "BS 7671:2018+A2 702.410.3.4.1, page 248"
  },
  {
    "id": 49,
    "topic": "Special Installations & Locations",
    "question": "Which one of the following is not classified as an outdoor lighting installation?",
    "options": [
      "A luminaire on an outside wall of a building, internally fed",
      "An illuminated road sign",
      "The illumination for an outdoor monument",
      "The lighting arrangement for an advertising panel"
    ],
    "correct": 0,
    "explanation": "Section 714 (outdoor lighting installations) covers fixtures supplied externally, such as street lighting or illuminated road signs fed from an external supply point. A wall-mounted luminaire fed from the building's own internal wiring is treated as part of the building's fixed installation, even though it's mounted outside, so it doesn't fall under this separate classification.",
    "reference": "BS 7671:2018+A2 714.1, page 302"
  },
  {
    "id": 50,
    "topic": "Special Installations & Locations",
    "question": "Which one of the following protective measures must be used for switches, not incorporated in equipment, in Zone 1 of a bathroom?",
    "options": [
      "Non-conducting location",
      "PELV",
      "Placing out of reach",
      "SELV"
    ],
    "correct": 3,
    "explanation": "Switches located in Zone 1 of a bathroom, where they aren't built into other equipment, must be supplied at SELV \u2014 the residual water-exposure risk in that zone is still significant enough that a mains-voltage switch mechanism would pose too great a shock hazard if water got in.",
    "reference": "BS 7671:2018+A2 701.512.3, page 244"
  },
  {
    "id": 51,
    "topic": "Special Installations & Locations",
    "question": "Outdoor lighting installations must be protected against the effects of external influences. Which one of the following is the minimum degree of protection permitted?",
    "options": [
      "IP22",
      "IP24",
      "IP33",
      "IP44"
    ],
    "correct": 2,
    "explanation": "Section 714 sets a baseline minimum ingress protection of IP33 for outdoor lighting equipment generally exposed to weather and minor solid object ingress, unless a particular installation calls for something higher.",
    "reference": "BS 7671:2018+A2 714.512.2.105, page 303"
  },
  {
    "id": 52,
    "topic": "Special Installations & Locations",
    "question": "In a bathroom, the protective measure of obstacles is",
    "options": [
      "Allowed in all zones",
      "Allowed in zone 2 only",
      "Allowed in zones 1 and 2",
      "Not allowed"
    ],
    "correct": 3,
    "explanation": "'Protection by obstacles' \u2014 barriers that prevent accidental but not deliberate contact \u2014 is considered too weak a measure for the heightened shock risk in bathrooms, where the presence of water makes any contact more dangerous. It's excluded outright from the permitted measures there.",
    "reference": "BS 7671:2018+A2 701.410.3.5, page 243"
  },
  {
    "id": 53,
    "topic": "Special Installations & Locations",
    "question": "What mechanical protection code should equipment on a pontoon in a marina, that is subject to impact to level AG2, have?",
    "options": [
      "IK08",
      "IP55",
      "IPX4",
      "IPX8"
    ],
    "correct": 0,
    "explanation": "AG2 is an Appendix 5 external influence code denoting a medium level of mechanical impact risk. The corresponding minimum protection under the separate IK (impact) classification system is IK08, which matches that level of impact energy.",
    "reference": "BS 7671:2018+A2 709.512.2.1.4, page 272"
  },
  {
    "id": 54,
    "topic": "Special Installations & Locations",
    "question": "What minimum classification of mechanical protection should electrical equipment in zones 0 and 1 of a fountain have?",
    "options": [
      "AG0",
      "AG1",
      "AG2",
      "AG3"
    ],
    "correct": 2,
    "explanation": "Section 702 classifies the impact risk around the wet zones of a fountain as AG2 (medium severity), reflecting realistic risks from people, debris, or maintenance activity near the fountain structure.",
    "reference": "BS 7671:2018+A2 702.55.3, page 250"
  },
  {
    "id": 55,
    "topic": "Special Installations & Locations",
    "question": "What is the minimum height of overhead conductors on caravan sites, when installed in vehicle movement areas?",
    "options": [
      "3.0m",
      "3.5m",
      "5.8m",
      "6.0m"
    ],
    "correct": 3,
    "explanation": "Section 708 requires overhead conductors to clear at least 6.0m above ground in areas where vehicles move on a caravan site, so that a caravan, motorhome, or its fittings (aerials, vents, raised features) can't contact a live overhead conductor.",
    "reference": "BS 7671:2018+A2 708.521.7.3, page 268"
  },
  {
    "id": 56,
    "topic": "Appendices & Tables",
    "question": "Which one of the following is the correct grouping factor for six circuits bunched on a surface?",
    "options": [
      "0.45",
      "0.55",
      "0.57",
      "0.69"
    ],
    "correct": 2,
    "explanation": "Table 4C1 provides grouping (rating) factors, since cables bundled together heat each other and need a reduced effective current rating as a result. For six circuits bunched together on a surface, the tabulated factor is 0.57 \u2014 reflecting how the derating becomes more severe as more circuits are grouped.",
    "reference": "BS 7671:2018+A2 Table 4C1, page 443"
  },
  {
    "id": 57,
    "topic": "Appendices & Tables",
    "question": "An external influence has a general category code of B. What does this code indicate?",
    "options": [
      "Capability",
      "Environment",
      "Temperature",
      "Utilisation"
    ],
    "correct": 3,
    "explanation": "BS 7671's external influence codes (Appendix 5) use a three-part code where the first letter sets the broad category: A = Environment, B = Utilisation, C = Construction of buildings. A code starting with 'B' therefore falls under 'Utilisation' \u2014 covering things like the capability of persons (BA) and conditions of evacuation (BD, as seen in question 13's BD4).",
    "reference": "BS 7671:2018+A2 Appendix 5, page 492"
  },
  {
    "id": 58,
    "topic": "Protection for Safety",
    "question": "A circuit is protected by a 20 A BS 3036 semi-enclosed fuse. What is the minimum permissible current rating (Iz) of a conductor protected by this fuse?",
    "options": [
      "20.0 A",
      "27.6 A",
      "29.4 A",
      "36.0 A"
    ],
    "correct": 1,
    "explanation": "BS 3036 semi-enclosed (rewireable) fuses have a much less precise time/current response than modern fuses or MCBs, so BS 7671 requires a larger safety margin between the fuse rating and the conductor's effective current-carrying capacity \u2014 a factor of 1.38. For a 20A fuse, that's 20 \u00d7 1.38 = 27.6A, ensuring the cable isn't damaged before the fuse reliably operates.",
    "reference": "BS 7671:2018+A2 433.1.202 and 433.1.1, page 95"
  },
  {
    "id": 59,
    "topic": "Appendices & Tables",
    "question": "Equipment is being installed that must be capable of being immersed in water and must withstand a temperature range of -5\u2103 to +40\u2103. What are the classification categories of external influences for this equipment?",
    "options": [
      "AA4 and AF3",
      "AA6 and AD5",
      "AD7 and AA4",
      "AK2 and AD7"
    ],
    "correct": 2,
    "explanation": "Appendix 5's external influence codes classify water exposure under 'AD' codes (AD7 specifically meaning immersion) and ambient temperature under 'AA' codes (AA4 covering a temperate band of roughly -5\u00b0C to +40\u00b0C). Equipment needing to handle both immersion and that temperature range is therefore classified AD7 and AA4.",
    "reference": "BS 7671:2018+A2 Appendix 5, page 446"
  },
  {
    "id": 60,
    "topic": "Appendices & Tables",
    "question": "Where can details on current-carrying capacity and voltage drop for busbar trunking and powertrack systems be found?",
    "options": [
      "Appendix 12",
      "Appendix 14",
      "Appendix 15",
      "Appendix 8"
    ],
    "correct": 3,
    "explanation": "Appendix 8 of BS 7671 deals specifically with busbar trunking and powertrack systems \u2014 covering their current-carrying capacity and voltage drop separately from the standard cable tables in Appendix 4, which only cover conventional cables and conductors.",
    "reference": "BS 7671:2018+A2 Contents, page 533"
  }
];
