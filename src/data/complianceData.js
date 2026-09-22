export const COMPANY_INFO = {
  name: "Apex Manufacturing Pvt. Ltd.",
  standard: "Industrial Workplace Safety Standard 2026",
  auditDate: "March 2026",
  facilityType: "Heavy Mechanical & Fabrication Facility",
  location: "Plant 4 - Industrial Corridor",
  leadAuditor: "Checkora Compliance Engine v2.4",
  complianceScore: 67,
  totalRequirements: 12,
  summary: {
    compliant: 4,
    partial: 4,
    missing: 4,
    highRisk: 3,
    mediumRisk: 3,
    lowRisk: 6,
  }
};

export const INITIAL_REQUIREMENTS = [
  {
    id: "req-1",
    number: 1,
    title: "Fire Extinguisher Availability",
    category: "Fire Safety",
    clause: "Section 4.1.2 - Portable Fire Suppression Systems",
    status: "Compliant",
    risk: "Low",
    requirement: "Adequate numbers of certified Type-ABC fire extinguishers must be mounted along access pathways at intervals not exceeding 25 meters.",
    evidenceFound: "Found in report: Plant floor audit (page 4, table 2) records 14 Type-ABC fire extinguishers distributed across Shop Floors A & B at 18-meter intervals with clear unobstructed access.",
    whyProblem: "N/A - Fully satisfies the spatial and type requirements specified in Section 4.1.2.",
    recommendedAction: "Maintain quarterly physical checks and ensure tamper seals remain intact.",
    priorityRank: 9,
    resolved: false
  },
  {
    id: "req-2",
    number: 2,
    title: "Fire Extinguisher Inspection",
    category: "Fire Safety",
    clause: "Section 4.1.8 - Periodic Hydrostatic & Tag Inspection",
    status: "Missing",
    risk: "High",
    requirement: "All fire extinguishers must undergo formal maintenance and tag certification every 6 calendar months by a certified fire safety vendor.",
    evidenceFound: "Report mentions extinguisher tags dated August 2025. Last recorded inspection took place more than 7 months ago. No Q1 2026 recertification record was provided.",
    whyProblem: "Last formal inspection was more than 6 months ago. Expired pressure checks elevate the risk of equipment failure during active fire emergencies.",
    recommendedAction: "Immediately schedule an emergency re-certification inspection with an authorized fire suppression vendor and update all physical tag logs.",
    priorityRank: 2,
    resolved: false
  },
  {
    id: "req-3",
    number: 3,
    title: "Emergency Exit Signage",
    category: "Evacuation & Egress",
    clause: "Section 3.2.1 - Illuminated Egress Signage",
    status: "Missing",
    risk: "High",
    requirement: "All primary and secondary emergency exits must feature self-illuminated or battery-backed illuminated signage visible from a minimum distance of 30 meters.",
    evidenceFound: "No supporting evidence was found in the uploaded company report. Walkthrough notes do not mention lighted signage or emergency power circuits.",
    whyProblem: "The submitted evidence does not demonstrate that emergency exits have the required signage. During a power blackout or smoke-filled evacuation, unlit exits cause bottlenecks and casualties.",
    recommendedAction: "Install clearly visible illuminated emergency-exit signs at all designated exits and verify emergency backup battery circuits during the next safety inspection.",
    priorityRank: 1,
    resolved: false
  },
  {
    id: "req-4",
    number: 4,
    title: "Worker Safety Training",
    category: "Occupational Health",
    clause: "Section 6.1.0 - Mandatory Induction & Hazard Training",
    status: "Compliant",
    risk: "Low",
    requirement: "100% of shop floor staff must complete foundational industrial safety training prior to equipment operation, refreshed annually.",
    evidenceFound: "Training matrix in Appendix C confirms 88 of 88 floor operators completed the 2026 Safety Refresher Modules with documented test scores.",
    whyProblem: "N/A - Full workforce certification documented with verifiable attendance sheets.",
    recommendedAction: "Continue annual refresher cadence and integrate the upcoming Q3 automated machinery module.",
    priorityRank: 10,
    resolved: false
  },
  {
    id: "req-5",
    number: 5,
    title: "Electrical Safety Inspection",
    category: "Electrical Systems",
    clause: "Section 5.3.4 - High-Voltage Circuit & Distribution Audits",
    status: "Partial",
    risk: "Medium",
    requirement: "Main electrical switchboards and sub-distribution panels must be thermally imaged and certified for arc flash compliance bi-annually.",
    evidenceFound: "Inspection is mentioned in the maintenance log summary (page 12), but supporting thermographic survey images and certified electrician sign-offs are missing.",
    whyProblem: "Inspection is mentioned but supporting verification is incomplete. Unverified switchgear carries potential fire and electrical shock hazards.",
    recommendedAction: "Obtain the formal thermography report and stamped sign-off from the licensed electrical contractor and append to the plant safety dossier.",
    priorityRank: 4,
    resolved: false
  },
  {
    id: "req-6",
    number: 6,
    title: "First Aid Kit",
    category: "Emergency Medical",
    clause: "Section 7.4.2 - Medical First Response Stations",
    status: "Compliant",
    risk: "Low",
    requirement: "Fully stocked Class-B medical first aid kits must be installed in each production zone and verified monthly for expiry dates.",
    evidenceFound: "Monthly checklist confirms 6 station boxes checked on February 28, 2026. Antiseptics, burn dressings, and eye-wash bottles replenished.",
    whyProblem: "N/A - Regular monthly verification log and supply levels meet regulatory guidelines.",
    recommendedAction: "Ensure the appointed floor first-aiders renew their CPR certifications before August 2026.",
    priorityRank: 11,
    resolved: false
  },
  {
    id: "req-7",
    number: 7,
    title: "Personal Protective Equipment",
    category: "Worker Protection",
    clause: "Section 2.1.5 - Personal Protective Equipment (PPE) Compliance",
    status: "Partial",
    risk: "Medium",
    requirement: "Employers must provide ANSI-certified helmets, steel-toe boots, eye protection, and specialized respiratory gear with documented issue logs.",
    evidenceFound: "Safety helmets and steel-toe boots are logged as issued to all active personnel. However, particulate respirator fit-test records for the grinding bay are absent.",
    whyProblem: "Without documented respirator fit-testing, workers in the grinding area remain at risk of silica and fine metal dust inhalation.",
    recommendedAction: "Conduct formal quantitative fit-testing for the 14 grinding bay operators and document individual mask assignments.",
    priorityRank: 5,
    resolved: false
  },
  {
    id: "req-8",
    number: 8,
    title: "Emergency Drill",
    category: "Emergency Preparedness",
    clause: "Section 3.5.1 - Simulated Evacuation Exercises",
    status: "Missing",
    risk: "High",
    requirement: "A documented whole-facility fire and emergency evacuation drill must be conducted at minimum once every 12 calendar months.",
    evidenceFound: "No evidence of an emergency evacuation drill conducted within the past 12 months. The last logged exercise occurred in November 2024.",
    whyProblem: "Facility personnel lack recent practical simulation of evacuation routes, muster point roll calls, and warden coordination.",
    recommendedAction: "Schedule and execute a plant-wide emergency evacuation drill within the next 14 days, timing evacuation speed and documenting muster attendance.",
    priorityRank: 3,
    resolved: false
  },
  {
    id: "req-9",
    number: 9,
    title: "Safety Officer",
    category: "Governance",
    clause: "Section 1.3.0 - Designated Safety Leadership",
    status: "Compliant",
    risk: "Low",
    requirement: "Manufacturing plants with >50 employees must employ a certified Environmental Health & Safety (EHS) officer with direct reporting to plant management.",
    evidenceFound: "Employment records confirm an OSHA-30 certified EHS Lead (R. Sharma) has been in post since 2023 with monthly executive safety briefings.",
    whyProblem: "N/A - Direct compliance with staffing and certification mandates.",
    recommendedAction: "Maintain continuous professional development hours and audit oversight.",
    priorityRank: 12,
    resolved: false
  },
  {
    id: "req-10",
    number: 10,
    title: "Incident Records",
    category: "Reporting & Auditing",
    clause: "Section 8.2.0 - Occupational Injury & Near-Miss Registry",
    status: "Partial",
    risk: "Low",
    requirement: "All workplace near-misses, minor injuries, and lost-time accidents must be recorded within 24 hours in a centralized digital ledger.",
    evidenceFound: "Formal injury log is maintained for severe incidents, but informal paper notes are used for near-miss incidents without digital consolidation.",
    whyProblem: "Near-miss data is fragmented, hindering proactive root-cause trend analysis before serious accidents happen.",
    recommendedAction: "Migrate paper near-miss incident logs into the centralized safety portal and mandate weekly supervisor reviews.",
    priorityRank: 7,
    resolved: false
  },
  {
    id: "req-11",
    number: 11,
    title: "Equipment Maintenance",
    category: "Machinery Safety",
    clause: "Section 5.1.9 - Preventative Machine Safeguards & Interlocks",
    status: "Partial",
    risk: "Medium",
    requirement: "Heavy hydraulic stamping presses and CNC machinery must undergo monthly interlock, light-curtain, and emergency-stop switch safety audits.",
    evidenceFound: "Mechanical maintenance logs are complete for stamping presses. However, light-curtain calibration certificates for CNC units 3 and 4 have lapsed by 45 days.",
    whyProblem: "Uncalibrated optical light curtains create critical crush and amputation risks during manual loading cycles.",
    recommendedAction: "Recalibrate light-curtain sensors on CNC units 3 & 4 and issue safety clearance tags before operating next production shift.",
    priorityRank: 6,
    resolved: false
  },
  {
    id: "req-12",
    number: 12,
    title: "Evacuation Plan",
    category: "Evacuation & Egress",
    clause: "Section 3.1.4 - Floor Diagram Posting & Assembly Point Demarcation",
    status: "Missing",
    risk: "Low",
    requirement: "High-contrast architectural floor plans displaying primary/secondary egress paths and assembly muster areas must be posted at all stairwells and building entrances.",
    evidenceFound: "Assembly muster points exist in parking lot A, but building entrance floor plans are faded and lack recent building expansion modifications.",
    whyProblem: "Updated floor egress paths reflecting the 2025 warehouse extension are missing from primary stairwell entryways.",
    recommendedAction: "Print and install updated 2026 architectural egress maps showing the new warehouse exits at all 4 main stairwell locations.",
    priorityRank: 8,
    resolved: false
  }
];

export const AI_SUGGESTIONS = [
  {
    id: "q1",
    question: "What are our high-risk issues?",
    answer: "Based on the Industrial Workplace Safety Standard 2026 analysis, Checkora identified 3 High-Risk critical issues:\n\n1. 🔴 Emergency Exit Signage (Missing) — No evidence found of clearly visible illuminated exit signs.\n2. 🔴 Fire Extinguisher Inspection (Missing) — Extinguisher maintenance tags are overdue by over 6 months.\n3. 🔴 Emergency Drill (Missing) — No plant-wide evacuation drill has been conducted in the past 12 months.\n\nAll three create life-safety liabilities during an emergency evacuation."
  },
  {
    id: "q2",
    question: "What should we fix first?",
    answer: "Based on the current analysis, the highest-priority issues are emergency-exit signage, fire-extinguisher inspection, and the missing emergency drill record. These were classified as high risk because the submitted evidence does not demonstrate that the requirements are satisfied.\n\nRecommended immediate order:\n1. Verify/install emergency-exit signs at all doors.\n2. Dispatch a certified technician to inspect and tag all fire extinguishers.\n3. Schedule a plant-wide evacuation drill within 14 days."
  },
  {
    id: "q3",
    question: "Why is emergency exit signage high risk?",
    answer: "The regulation requires clearly marked emergency exits, but no supporting evidence was found in the uploaded company report. Because this relates to emergency evacuation and safety, Checkora has classified it as high risk.\n\nUnder Section 3.2.1, in the event of an electrical failure or smoke accumulation, lack of illuminated exit pathways significantly elevates the hazard of trapped workers and evacuation bottlenecks."
  },
  {
    id: "q4",
    question: "What requirements are missing?",
    answer: "There are 4 Missing requirements in your compliance profile:\n\n• Emergency Exit Signage (High Risk) — Missing visible illuminated signage evidence.\n• Fire Extinguisher Inspection (High Risk) — Over 6 months since last formal certification.\n• Emergency Drill (High Risk) — No annual evacuation drill on record for the last 12 months.\n• Evacuation Plan (Low Risk) — Architectural floor evacuation maps at stairwells are outdated.\n\nRemediating these 4 items will increase your compliance score from 67% to 100%."
  },
  {
    id: "q5",
    question: "Give me a summary.",
    answer: "Executive Summary for Apex Manufacturing Pvt. Ltd.:\n\n• Overall Compliance: 67% Requirements Satisfied (8 of 12 requirements compliant or in progress)\n• Breakdown: 4 Compliant, 4 Partial, 4 Missing\n• Risk Profile: 3 High Risk, 3 Medium Risk, 6 Low Risk\n• Critical Life Safety Gaps: Emergency Exit Signage, Fire Extinguisher Recertification, and Annual Evacuation Drills.\n• Health & Governance Strengths: Safety Officer appointed, Worker Safety Induction 100% complete, and First Aid stations fully maintained."
  }
];

export const DEMO_FILES = {
  rules: {
    name: "Industrial_Workplace_Safety_Standard_2026.pdf",
    size: "2.4 MB",
    pages: 48,
    type: "Regulation / Standard",
    description: "Official National Occupational Safety & Health Administration standard covering structural, fire, egress, PPE, and mechanical safety."
  },
  report: {
    name: "Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf",
    size: "4.1 MB",
    pages: 32,
    type: "Company Inspection Audit",
    description: "Internal plant audit conducted by Apex Manufacturing EHS department covering Plant 4 operations, equipment checks, and incident logs."
  },
  image: {
    name: "Plant_4_BayB_Safety_Equipment.jpg",
    size: "1.8 MB",
    type: "Visual Photographic Evidence",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  }
};
