// 18th Edition (BS 7671:2018 + Amendment 2) practice question bank
// Built from the official 18th Edition sample test (Test 2) and matched answer/reference key.
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
    "explanation": "BS 7671:2018+A2 110.2 (ii), page 21"
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
    "explanation": "BS 7671:2018+A2 110.2 (v), page 21"
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
    "explanation": "BS 7671:2018+A2 132.16, page 26"
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
    "explanation": "BS 7671:2018+A2 Contents, page 127"
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
    "explanation": "BS 7671:2018+A2 Definitions - Voltage, Nominal , page 44"
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
    "explanation": "BS 7671:2018+A2 Figure 2.1, page 45"
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
    "explanation": "BS 7671:2018+A2 Section 313.1 (iv), page 55"
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
    "explanation": "BS 7671:2018+A2 Section 313.1, page 56"
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
    "explanation": "BS 7671:2018+A2 Figure 3.8, page 54"
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
    "explanation": "BS 7671:2018+A2 312.2.2.1, page 55"
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
    "explanation": "BS 7671:2018+A2 Figure 314.1, page 56"
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
    "explanation": "BS 7671:2018+A2 Section 332.2, page 57"
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
    "explanation": "BS 7671:2018+A2 Appendix 5, page 492"
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
    "explanation": "BS 7671:2018+A2 Section 444.4.1, page 110"
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
    "explanation": "BS 7671:2018+A2 Section 444.5.3, page 116"
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
    "explanation": "BS 7671:2018+A2 Section 432.1, page 94"
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
    "explanation": "BS 7671:2018+A2 Section 412.1.1, page 75"
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
    "explanation": "BS 7671:2018+A2 Knowledge"
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
    "explanation": "BS 7671:2018+A2 Table 41.5, page 70"
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
    "explanation": "BS 7671:2018+A2 Table 41.4, page 69"
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
    "explanation": "BS 7671:2018+A2 Table 41.4, page 70"
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
    "explanation": "BS 7671:2018+A2 Table 42.1, page 91"
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
    "explanation": "BS 7671:2018+A2 422.1.3, page 86"
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
    "explanation": "BS 7671:2018+A2 433.3.3, page 96"
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
    "explanation": "BS 7671:2018+A2 Part 2, page 39"
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
    "explanation": "BS 7671:2018+A2 443.4, page 107"
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
    "explanation": "BS 7671:2018+A2 442.1.1 (v), page 102"
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
    "explanation": "BS 7671:2018+A2 560.8.1 (iii), page 228"
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
    "explanation": "BS 7671:2018+A2 521.5.1, page 139"
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
    "explanation": "BS 7671:2018+A2 Part 2, page 37"
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
    "explanation": "BS 7671:2018+A2 514.13.1, page 136"
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
    "explanation": "BS 7671:2018+A2 514.13.1 (i), page 136"
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
    "explanation": "BS 7671:2018+A2 527.2.3, page 150"
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
    "explanation": "BS 7671:2018+A2 522.8.10, page 143"
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
    "explanation": "BS 7671:2018+A2 Appendix 4, Item 2.6, page 423"
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
    "explanation": "BS 7671:2018+A2 534.4.1.1 (i), page 164"
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
    "explanation": "BS 7671:2018+A2 Table 537.4, page 185"
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
    "explanation": "BS 7671:2018+A2 544.1.2, page 206"
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
    "explanation": "BS 7671:2018+A2 544.2.1, page 206"
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
    "explanation": "BS 7671:2018+A2 537.4.2.2 (ii), page 188"
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
    "explanation": "BS 7671:2018+A2 560.6.1, page 226"
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
    "explanation": "BS 7671:2018+A2 653.1, page 239"
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
    "explanation": "BS 7671:2018+A2 Table 64, page 234"
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
    "explanation": "BS 7671:2018+A2 644.5, page 238"
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
    "explanation": "BS 7671:2018+A2 643.1 paragraph 4, page 233"
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
    "explanation": "BS 7671:2018+A2 701.512.2, page 244"
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
    "explanation": "BS 7671:2018+A2 703.512.2, page 257"
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
    "explanation": "BS 7671:2018+A2 702.410.3.4.1, page 248"
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
    "explanation": "BS 7671:2018+A2 714.1, page 302"
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
    "explanation": "BS 7671:2018+A2 701.512.3, page 244"
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
    "explanation": "BS 7671:2018+A2 714.512.2.105, page 303"
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
    "explanation": "BS 7671:2018+A2 701.410.3.5, page 243"
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
    "explanation": "BS 7671:2018+A2 709.512.2.1.4, page 272"
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
    "explanation": "BS 7671:2018+A2 702.55.3, page 250"
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
    "explanation": "BS 7671:2018+A2 708.521.7.3, page 268"
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
    "explanation": "BS 7671:2018+A2 Table 4C1, page 443"
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
    "explanation": "BS 7671:2018+A2 Appendix 5, page 492"
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
    "explanation": "BS 7671:2018+A2 433.1.202 and 433.1.1, page 95"
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
    "explanation": "BS 7671:2018+A2 Appendix 5, page 446"
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
    "explanation": "BS 7671:2018+A2 Contents, page 533"
  }
];
