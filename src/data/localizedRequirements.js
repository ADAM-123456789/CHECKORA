/**
 * Checkora Multilingual Data Store
 * Provides full translations for all 12 Compliance Requirements,
 * AI Chat Suggestions & Answers, and Company Information across all 7 languages.
 */

export const LOCALIZED_COMPANY_INFO = {
  en: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "Industrial Workplace Safety Standard 2026",
    auditDate: "March 2026",
    facilityType: "Heavy Mechanical & Fabrication Facility",
    location: "Plant 4 - Industrial Corridor",
  },
  hi: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "औद्योगिक कार्यस्थल सुरक्षा मानक 2026",
    auditDate: "मार्च 2026",
    facilityType: "भारी यांत्रिक और निर्माण सुविधा",
    location: "प्लांट 4 - औद्योगिक गलियारा",
  },
  ta: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "தொழில்துறை பணியிட பாதுகாப்பு தரநிலை 2026",
    auditDate: "மார்ச் 2026",
    facilityType: "கனரக இயந்திர உற்பத்தி வசதி",
    location: "ஆலை 4 - தொழில்துறை பகுதி",
  },
  ml: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "വ്യാവസായിക തൊഴിലിട സുരക്ഷാ മാനദണ്ഡം 2026",
    auditDate: "മാർച്ച് 2026",
    facilityType: "ഹെവി മെക്കാനിക്കൽ & ഫാബ്രിക്കേഷൻ കേന്ദ്രം",
    location: "പ്ലാന്റ് 4 - ഇൻഡസ്ട്രിയൽ കോറിഡോർ",
  },
  es: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "Norma de Seguridad en el Trabajo Industrial 2026",
    auditDate: "Marzo 2026",
    facilityType: "Planta de Fabricación Mecánica Pesada",
    location: "Planta 4 - Corredor Industrial",
  },
  fr: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "Norme de Sécurité sur le Lieu de Travail Industriel 2026",
    auditDate: "Mars 2026",
    facilityType: "Installation de Fabrication Mécanique Lourde",
    location: "Usine 4 - Couloir Industriel",
  },
  ar: {
    name: "Apex Manufacturing Pvt. Ltd.",
    standard: "معيار السلامة في أماكن العمل الصناعية 2026",
    auditDate: "مارس 2026",
    facilityType: "منشأة التصنيع الميكانيكي الثقيل",
    location: "المصنع 4 - الممر الصناعي",
  },
};

export const LOCALIZED_REQUIREMENTS = {
  en: [
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
  ],

  hi: [
    {
      id: "req-1",
      number: 1,
      title: "अग्निशामक यंत्र उपलब्धता",
      category: "अग्नि सुरक्षा",
      clause: "धारा 4.1.2 - पोर्टेबल अग्नि शमन प्रणाली",
      status: "Compliant",
      risk: "Low",
      requirement: "25 मीटर से अधिक नहीं के अंतराल पर पहुंच मार्गों के साथ प्रमाणित टाइप-एबीसी अग्निशामक यंत्र लगाए जाने चाहिए।",
      evidenceFound: "रिपोर्ट में पाया गया: प्लांट फ्लोर ऑडिट (पृष्ठ 4, तालिका 2) में 18 मीटर के अंतराल पर 14 टाइप-एबीसी अग्निशामक यंत्र दर्ज हैं।",
      whyProblem: "लागू नहीं - धारा 4.1.2 में निर्दिष्ट आवश्यकताओं को पूरी तरह से संतुष्ट करता है।",
      recommendedAction: "त्रैमासिक भौतिक जांच बनाए रखें और सुनिश्चित करें कि छेड़छाड़ सील बरकरार रहे।",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "अग्निशामक यंत्र निरीक्षण",
      category: "अग्नि सुरक्षा",
      clause: "धारा 4.1.8 - आवधिक हाइड्रोस्टैटिक और टैग निरीक्षण",
      status: "Missing",
      risk: "High",
      requirement: "सभी अग्निशामक यंत्रों का प्रत्येक 6 कैलेंडर महीनों में प्रमाणित विक्रेता द्वारा औपचारिक रखरखाव और प्रमाणन होना चाहिए।",
      evidenceFound: "रिपोर्ट में अगस्त 2025 के टैग का उल्लेख है। पिछला निरीक्षण 7 महीने से अधिक समय पहले हुआ था। कोई 2026 रिकॉर्ड नहीं मिला।",
      whyProblem: "अंतिम निरीक्षण 6 महीने से अधिक समय पहले हुआ था। समाप्त दबाव जांच से आग आपात स्थिति के दौरान विफलता का जोखिम बढ़ जाता है।",
      recommendedAction: "अधिकृत अग्नि शमन विक्रेता के साथ तत्काल पुन: प्रमाणन निरीक्षण निर्धारित करें और सभी भौतिक टैग लॉग अपडेट करें।",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "आपातकालीन निकास साइनेज",
      category: "निकासी और निकास",
      clause: "धारा 3.2.1 - प्रदीप्त निकास साइनेज",
      status: "Missing",
      risk: "High",
      requirement: "सभी प्राथमिक और माध्यमिक आपातकालीन निकासों में न्यूनतम 30 मीटर की दूरी से दिखाई देने वाले प्रदीप्त संकेत होने चाहिए।",
      evidenceFound: "अपलोड की गई कंपनी रिपोर्ट में कोई सहायक साक्ष्य नहीं मिला। वॉकथ्रू नोट्स में प्रकाशित साइनेज का उल्लेख नहीं है।",
      whyProblem: "प्रस्तुत साक्ष्य यह प्रदर्शित नहीं करते कि आपातकालीन निकास पर आवश्यक साइनेज है। ब्लैकआउट के दौरान यह हताहतों का कारण बन सकता है।",
      recommendedAction: "सभी निर्दिष्ट निकासों पर स्पष्ट रूप से दिखाई देने वाले प्रदीप्त आपातकालीन-निकास संकेत स्थापित करें और बैकअप सर्किट सत्यापित करें।",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "श्रमिक सुरक्षा प्रशिक्षण",
      category: "व्यावसायिक स्वास्थ्य",
      clause: "धारा 6.1.0 - अनिवार्य प्रेरण और खतरा प्रशिक्षण",
      status: "Compliant",
      risk: "Low",
      requirement: "उपकरण संचालन से पहले 100% कर्मचारियों को मूलभूत औद्योगिक सुरक्षा प्रशिक्षण पूरा करना चाहिए, जिसे सालाना नवीनीकृत किया जाए।",
      evidenceFound: "परिशिष्ट C में प्रशिक्षण मैट्रिक्स पुष्टि करता है कि 88 में से 88 ऑपरेटरों ने 2026 सुरक्षा रिफ्रेशर मॉड्यूल पूरा किया।",
      whyProblem: "लागू नहीं - सत्यापन योग्य उपस्थिति पत्रक के साथ पूर्ण कार्यबल प्रमाणन प्रलेखित है।",
      recommendedAction: "वार्षिक रिफ्रेशर क्रम जारी रखें और आगामी Q3 स्वचालित मशीनरी मॉड्यूल को एकीकृत करें।",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "विद्युत सुरक्षा निरीक्षण",
      category: "विद्युत प्रणाली",
      clause: "धारा 5.3.4 - उच्च-वोल्टेज सर्किट और वितरण ऑडिट",
      status: "Partial",
      risk: "Medium",
      requirement: "मुख्य विद्युत स्विचबोर्ड और वितरण पैनलों का द्विवार्षिक रूप से थर्मली इमेज और आर्क फ्लैश अनुपालन के लिए प्रमाणित होना चाहिए।",
      evidenceFound: "रखरखाव लॉग सारांश (पृष्ठ 12) में निरीक्षण का उल्लेख है, लेकिन थर्मोग्राफिक सर्वेक्षण चित्र और प्रमाणित इलेक्ट्रीशियन हस्ताक्षर गायब हैं।",
      whyProblem: "निरीक्षण का उल्लेख है लेकिन सहायक सत्यापन अधूरा है। असत्यापित स्विचगियर से आग और बिजली के झटके का खतरा रहता है।",
      recommendedAction: "लाइसेंस प्राप्त विद्युत ठेकेदार से औपचारिक थर्मोग्राफी रिपोर्ट प्राप्त करें और प्लांट सुरक्षा डोजियर में संलग्न करें।",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "प्राथमिक चिकित्सा किट",
      category: "आपातकालीन चिकित्सा",
      clause: "धारा 7.4.2 - चिकित्सा प्राथमिक प्रतिक्रिया स्टेशन",
      status: "Compliant",
      risk: "Low",
      requirement: "प्रत्येक उत्पादन क्षेत्र में पूरी तरह से सुसज्जित क्लास-बी प्राथमिक चिकित्सा किट स्थापित की जानी चाहिए और समाप्ति तिथियों के लिए मासिक रूप से सत्यापित की जानी चाहिए।",
      evidenceFound: "मासिक चेकलिस्ट 28 फरवरी 2026 को 6 स्टेशन बॉक्स की जांच की पुष्टि करती है। एंटीसेप्टिक्स और बर्न ड्रेसिंग की पुनः पूर्ति की गई।",
      whyProblem: "लागू नहीं - नियमित मासिक सत्यापन लॉग और आपूर्ति स्तर नियामक दिशानिर्देशों को पूरा करते हैं।",
      recommendedAction: "सुनिश्चित करें कि नियुक्त फर्स्ट-एडर अगस्त 2026 से पहले अपने सीपीआर प्रमाणपत्रों का नवीनीकरण करें।",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "व्यक्तिगत सुरक्षा उपकरण (PPE)",
      category: "श्रमिक सुरक्षा",
      clause: "धारा 2.1.5 - पीपीई अनुपालन",
      status: "Partial",
      risk: "Medium",
      requirement: "नियोक्ताओं को एएनएसआई-प्रमाणित हेलमेट, स्टील-टो जूते, आंखों की सुरक्षा और विशेष श्वसन उपकरण जारी लॉग के साथ प्रदान करने होंगे।",
      evidenceFound: "सभी सक्रिय कर्मियों को सुरक्षा हेलमेट और स्टील-टो जूते जारी किए गए हैं। हालांकि, ग्राइंडिंग बे के लिए रेस्पिरेटर फिट-टेस्ट रिकॉर्ड अनुपस्थित हैं।",
      whyProblem: "दस्तावेजी फिट-परीक्षण के बिना, ग्राइंडिंग क्षेत्र के श्रमिकों को सिलिका और धातु की धूल सांस में जाने का खतरा रहता है।",
      recommendedAction: "14 ग्राइंडिंग बे ऑपरेटरों के लिए औपचारिक फिट-परीक्षण आयोजित करें और व्यक्तिगत मास्क असाइनमेंट दस्तावेज करें।",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "आपातकालीन अभ्यास (ड्रिल)",
      category: "आपातकालीन तैयारी",
      clause: "धारा 3.5.1 - नकली निकासी अभ्यास",
      status: "Missing",
      risk: "High",
      requirement: "प्रत्येक 12 कैलेंडर महीनों में कम से कम एक बार पूरे कारखाने में आग और आपातकालीन निकासी अभ्यास आयोजित किया जाना चाहिए।",
      evidenceFound: "पिछले 12 महीनों के भीतर आयोजित किसी आपातकालीन निकासी अभ्यास का कोई साक्ष्य नहीं है। अंतिम अभ्यास नवंबर 2024 में हुआ था।",
      whyProblem: "संयंत्र कर्मियों में निकासी मार्गों, सभा स्थल रोल कॉल और समन्वय के हालिया व्यावहारिक अनुकरण का अभाव है।",
      recommendedAction: "अगले 14 दिनों के भीतर प्लांट-व्यापी आपातकालीन अभ्यास निर्धारित करें और समय तथा उपस्थिति दस्तावेज करें।",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "सुरक्षा अधिकारी की नियुक्ति",
      category: "शासन व अनुपालन",
      clause: "धारा 1.3.0 - नामित सुरक्षा नेतृत्व",
      status: "Compliant",
      risk: "Low",
      requirement: "50 से अधिक कर्मचारियों वाले विनिर्माण संयंत्रों में सीधे प्रबंधन को रिपोर्ट करने वाले प्रमाणित ईएचएस अधिकारी को नियुक्त किया जाना चाहिए।",
      evidenceFound: "रोजगार रिकॉर्ड पुष्टि करते हैं कि ओएसएचए-30 प्रमाणित ईएचएस लीड (आर. शर्मा) 2023 से पद पर हैं।",
      whyProblem: "लागू नहीं - स्टाफिंग और प्रमाणन शासनादेशों का प्रत्यक्ष अनुपालन।",
      recommendedAction: "निरंतर व्यावसायिक विकास घंटे और ऑडिट निरीक्षण बनाए रखें।",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "घटना और दुर्घटना रिकॉर्ड",
      category: "रिपोर्टिंग और ऑडिटिंग",
      clause: "धारा 8.2.0 - व्यावसायिक चोट और नियर-मिस रजिस्ट्री",
      status: "Partial",
      risk: "Low",
      requirement: "कार्यस्थल की सभी नियर-मिस घटनाओं और चोटों को एक केंद्रीकृत डिजिटल लेज़र में 24 घंटे के भीतर दर्ज किया जाना चाहिए।",
      evidenceFound: "गंभीर घटनाओं के लिए औपचारिक चोट लॉग रखा गया है, लेकिन नियर-मिस घटनाओं के लिए अनौपचारिक कागजी नोटों का उपयोग किया जाता है।",
      whyProblem: "नियर-मिस डेटा खंडित है, जो गंभीर दुर्घटनाओं से पहले मूल-कारण प्रवृत्ति विश्लेषण में बाधा डालता है।",
      recommendedAction: "कागजी नियर-मिस लॉग को केंद्रीकृत सुरक्षा पोर्टल में स्थानांतरित करें और साप्ताहिक समीक्षा अनिवार्य करें।",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "उपकरण और मशीन रखरखाव",
      category: "मशीनरी सुरक्षा",
      clause: "धारा 5.1.9 - निवारक मशीन सुरक्षा उपाय और इंटरलॉक",
      status: "Partial",
      risk: "Medium",
      requirement: "भारी हाइड्रोलिक प्रेस और सीएनसी मशीनरी का मासिक इंटरलॉक, लाइट-कर्टन और इमरजेंसी-स्टॉप सुरक्षा ऑडिट होना चाहिए।",
      evidenceFound: "स्टैम्पिंग प्रेस के रखरखाव लॉग पूरे हैं। हालांकि, सीएनसी इकाइयों 3 और 4 के लिए लाइट-कर्टन अंशांकन प्रमाण पत्र 45 दिनों से समाप्त हैं।",
      whyProblem: "अनकैलिब्रेटेड ऑप्टिकल लाइट कर्टेन मैनुअल लोडिंग चक्र के दौरान गंभीर चोट का खतरा पैदा करते हैं।",
      recommendedAction: "सीएनसी इकाइयों 3 और 4 पर सेंसर को पुन: कैलिब्रेट करें और अगली पाली संचालित करने से पहले सुरक्षा टैग जारी करें।",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "निकासी योजना आरेख",
      category: "निकासी और निकास",
      clause: "धारा 3.1.4 - फ्लोर आरेख और असेंबली पॉइंट",
      status: "Missing",
      risk: "Low",
      requirement: "निकासी पथ और असेंबली क्षेत्रों को प्रदर्शित करने वाले फ्लोर प्लान सभी सीढ़ियों और भवन प्रवेश द्वारों पर पोस्ट किए जाने चाहिए।",
      evidenceFound: "पार्किंग स्थल ए में असेंबली पॉइंट मौजूद हैं, लेकिन प्रवेश द्वार फ्लोर प्लान फीके हैं और हाल के विस्तार को नहीं दर्शाते।",
      whyProblem: "2025 गोदाम विस्तार को दर्शाने वाले अद्यतन निकासी पथ प्राथमिक सीढ़ी प्रवेश द्वारों से गायब हैं।",
      recommendedAction: "सभी 4 मुख्य सीढ़ी स्थानों पर नए गोदाम निकास को दर्शाने वाले अद्यतन 2026 वास्तुशिल्प मानचित्र प्रिंट और स्थापित करें।",
      priorityRank: 8,
      resolved: false
    }
  ],

  ta: [
    {
      id: "req-1",
      number: 1,
      title: "தீயணைப்பான் இருப்பு",
      category: "தீ பாதுகாப்பு",
      clause: "பிரிவு 4.1.2 - கையடக்க தீயணைப்பு அமைப்புகள்",
      status: "Compliant",
      risk: "Low",
      requirement: "25 மீட்டருக்கு மிகாமல் அணுகல் பாதைகளில் சான்றளிக்கப்பட்ட வகை-ABC தீயணைப்பான்கள் பொருத்தப்பட வேண்டும்.",
      evidenceFound: "அறிக்கையில் கண்டறியப்பட்டது: ஆலை தணிக்கை (பக்கம் 4, அட்டவணை 2) தளம் A & B இல் 14 வகை-ABC தீயணைப்பான்கள் 18 மீட்டர் இடைவெளியில் தடையற்ற அணுகலுடன் வைக்கப்பட்டுள்ளது.",
      whyProblem: "பொருந்தாது - பிரிவு 4.1.2 இல் குறிப்பிடப்பட்டுள்ள இடஞ்சார்ந்த தேவைகளை முழுமையாக பூர்த்தி செய்கிறது.",
      recommendedAction: "காலாண்டு உடல் பரிசோதனைகளை பராமரிக்கவும், முத்திரைகள் சேதமடையாமல் இருப்பதை உறுதி செய்யவும்.",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "தீயணைப்பான் ஆய்வு & மறுசான்றிதழ்",
      category: "தீ பாதுகாப்பு",
      clause: "பிரிவு 4.1.8 - குறிப்பிட்ட கால ஹைட்ரோஸ்டேடிக் ஆய்வு",
      status: "Missing",
      risk: "High",
      requirement: "அனைத்து தீயணைப்பான்களும் சான்றளிக்கப்பட்ட விற்பனையாளரால் ஒவ்வொரு 6 மாதங்களுக்கும் பராமரிப்புக்கு உட்படுத்தப்பட வேண்டும்.",
      evidenceFound: "அறிக்கையில் ஆகஸ்ட் 2025 தேதியிட்ட குறிச்சொற்கள் குறிப்பிடப்பட்டுள்ளன. கடைசி ஆய்வு 7 மாதங்களுக்கு முன்பு நடந்தது.",
      whyProblem: "கடைசி முறையான ஆய்வு 6 மாதங்களுக்கு முன்பு நடந்தது. காலாவதியான அழுத்தம் சோதனைகள் தீ விபத்துகளின் போது கருவி செயலிழக்கும் அபாயத்தை உயர்த்துகிறது.",
      recommendedAction: "அங்கீகரிக்கப்பட்ட விற்பனையாளருடன் அவசர மறு சான்றிதழ் ஆய்வைத் திட்டமிட்டு, குறிச்சொல் பதிவுகளைப் புதுப்பிக்கவும்.",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "அவசர வழி வெளியேறும் அடையாள பலகை",
      category: "வெளியேற்றம் & வழிகள்",
      clause: "பிரிவு 3.2.1 - ஒளிரும் வெளியேறும் அடையாளங்கள்",
      status: "Missing",
      risk: "High",
      requirement: "அனைத்து அவசர வழிகளிலும் குறைந்தபட்சம் 30 மீட்டர் தூரத்திலிருந்து தெரியும் வகையில் ஒளிரும் அடையாள பலகைகள் இருக்க வேண்டும்.",
      evidenceFound: "பதிவேற்றப்பட்ட நிறுவன அறிக்கையில் எந்த ஆதாரமும் கிடைக்கவில்லை. வெளியேறும் வழிகளில் விளக்குகள் இல்லை.",
      whyProblem: "சமர்ப்பிக்கப்பட்ட சான்றுகள் அவசர வழிகளில் தேவையான அடையாளங்கள் இருப்பதைக் காட்டவில்லை. மின்தடையின் போது இது ஆபத்தை விளைவிக்கும்.",
      recommendedAction: "அனைத்து நியமிக்கப்பட்ட வெளியேறும் வழிகளிலும் ஒளிரும் அவசர வெளியேறும் பலகைகளை உடனடியாக நிறுவவும்.",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "தொழிலாளர் பாதுகாப்பு பயிற்சி",
      category: "தொழில்சார் சுகாதாரம்",
      clause: "பிரிவு 6.1.0 - கட்டாய அடிப்படை பாதுகாப்பு பயிற்சி",
      status: "Compliant",
      risk: "Low",
      requirement: "இயந்திரங்களை இயக்குவதற்கு முன் 100% ஊழியர்களும் அடிப்படை தொழில்துறை பாதுகாப்பு பயிற்சியை முடித்திருக்க வேண்டும்.",
      evidenceFound: "இணைப்பு C இல் உள்ள பயிற்சி மேட்ரிக்ஸ் 88 ஆபரேட்டர்களில் 88 பேர் 2026 பாதுகாப்பு தொகுதிகளை முடித்ததை உறுதிப்படுத்துகிறது.",
      whyProblem: "பொருந்தாது - சரிபார்க்கக்கூடிய வருகை தாள்களுடன் முழு தொழிலாளர் சான்றிதழும் ஆவணப்படுத்தப்பட்டுள்ளது.",
      recommendedAction: "வருடாந்திர புத்துணர்ச்சி பயிற்சியை தொடரவும் மற்றும் வரவிருக்கும் Q3 இயந்திர தொகுதியை ஒருங்கிணைக்கவும்.",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "மின்சார பாதுகாப்பு ஆய்வு",
      category: "மின் அமைப்புகள்",
      clause: "பிரிவு 5.3.4 - உயர் மின்னழுத்த சுற்றுகள் தணிக்கை",
      status: "Partial",
      risk: "Medium",
      requirement: "முக்கிய மின் சுவிட்ச்போர்டுகள் மற்றும் விநியோக பேனல்கள் ஆண்டுக்கு இருமுறை வெப்பப் படம் மூலம் சான்றளிக்கப்பட வேண்டும்.",
      evidenceFound: "பராமரிப்பு சுருக்கத்தில் ஆய்வு குறிப்பிடப்பட்டுள்ளது, ஆனால் வெப்ப கணக்கெடுப்பு படங்கள் மற்றும் சான்றளிக்கப்பட்ட கையொப்பங்கள் விடுபட்டுள்ளன.",
      whyProblem: "ஆய்வு குறிப்பிடப்பட்டுள்ளது ஆனால் சரிபார்ப்பு முழுமையடையவில்லை. இது மின்சார அதிர்ச்சி மற்றும் தீ ஆபத்துகளை ஏற்படுத்துகிறது.",
      recommendedAction: "உரிமம் பெற்ற மின் ஒப்பந்தக்காரரிடமிருந்து முறையான வெப்ப வரைபட அறிக்கையைப் பெற்று பாதுகாப்பு கோப்பில் இணைக்கவும்.",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "முதலுதவி பெட்டி வசதி",
      category: "அவசர மருத்துவம்",
      clause: "பிரிவு 7.4.2 - மருத்துவ முதலுதவி நிலையங்கள்",
      status: "Compliant",
      risk: "Low",
      requirement: "ஒவ்வொரு உற்பத்தி மண்டலத்திலும் வகுப்பு-B முதலுதவி பெட்டிகள் நிறுவப்பட்டு மாதந்தோறும் சரிபார்க்கப்பட வேண்டும்.",
      evidenceFound: "பிப்ரவரி 28, 2026 அன்று 6 பெட்டிகள் சரிபார்க்கப்பட்டதை மாதாந்திர சரிபார்ப்புப் பட்டியல் உறுதிப்படுத்துகிறது.",
      whyProblem: "பொருந்தாது - வழக்கமான மாதாந்திர சரிபார்ப்பு பதிவு ஒழுங்குமுறை வழிகாட்டுதல்களை பூர்த்தி செய்கிறது.",
      recommendedAction: "நியமிக்கப்பட்ட முதலுதவியாளர்கள் ஆகஸ்ட் 2026 க்கு முன் தங்கள் CPR சான்றிதழ்களைப் புதுப்பிப்பதை உறுதிசெய்யவும்.",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "தனிநபர் பாதுகாப்பு உபகரணங்கள் (PPE)",
      category: "தொழிலாளர் பாதுகாப்பு",
      clause: "பிரிவு 2.1.5 - தனிநபர் பாதுகாப்பு உபகரண இணக்கம்",
      status: "Partial",
      risk: "Medium",
      requirement: "முதலாளிகள் ANSI-சான்றளிக்கப்பட்ட ஹெல்மெட்டுகள், காலணிகள் மற்றும் சுவாசக் கருவிகளை வழங்க வேண்டும்.",
      evidenceFound: "பாதுகாப்பு ஹெல்மெட் மற்றும் காலணிகள் வழங்கப்பட்டுள்ளன. இருப்பினும், அரைக்கும் பகுதிக்கான சுவாசக் கருவி பொருத்துதல் பதிவுகள் இல்லை.",
      whyProblem: "முறையான சுவாசக் கருவி பதிவுகள் இல்லாமல், தொழிலாளர்கள் அபாயகரமான தூசி மற்றும் புகையை சுவாசிக்கும் அபாயத்தில் உள்ளனர்.",
      recommendedAction: "14 அரைக்கும் பிரிவு தொழிலாளர்களுக்கு சுவாசக் கருவி சோதனை நடத்தி தனிப்பட்ட முகமூடி ஒதுக்கீட்டை ஆவணப்படுத்தவும்.",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "அவசர வெளியேற்ற பயிற்சி (Drill)",
      category: "அவசரகால தயார்நிலை",
      clause: "பிரிவு 3.5.1 - பாசாங்கு வெளியேற்றப் பயிற்சிகள்",
      status: "Missing",
      risk: "High",
      requirement: "ஒவ்வொரு 12 மாதங்களுக்கும் ஒரு முறையாவது ஆலை முழுவதும் அவசரகால தீ மற்றும் வெளியேற்ற பயிற்சி நடத்தப்பட வேண்டும்.",
      evidenceFound: "கடந்த 12 மாதங்களில் எந்த அவசர வெளியேற்றப் பயிற்சியும் நடத்தப்பட்டதற்கான ஆதாரம் இல்லை. கடைசி பயிற்சி நவம்பர் 2024 இல் நடந்தது.",
      whyProblem: "தொழிற்சாலை பணியாளர்களுக்கு வெளியேற்ற பாதைகள் மற்றும் ஒருங்கிணைப்பு பற்றிய சமீபத்திய நடைமுறை அனுபவம் இல்லை.",
      recommendedAction: "அடுத்த 14 நாட்களுக்குள் ஆலை தழுவிய அவசரகால பயிற்சியை திட்டமிட்டு வருகையை பதிவு செய்யவும்.",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "பாதுகாப்பு அதிகாரி நியமனம்",
      category: "நிர்வாகம்",
      clause: "பிரிவு 1.3.0 - நியமிக்கப்பட்ட பாதுகாப்பு தலைமை",
      status: "Compliant",
      risk: "Low",
      requirement: "50 க்கும் மேற்பட்ட பணியாளர்களைக் கொண்ட தொழிற்சாலைகள் சான்றளிக்கப்பட்ட EHS அதிகாரியை நியமிக்க வேண்டும்.",
      evidenceFound: "OSHA-30 சான்றளிக்கப்பட்ட EHS தலைவர் (ஆர். சர்மா) 2023 முதல் பணியில் இருப்பதை வேலைவாய்ப்பு பதிவுகள் உறுதிப்படுத்துகின்றன.",
      whyProblem: "பொருந்தாது - பணியாளர் மற்றும் சான்றிதழ் விதிமுறைகளுடன் நேரடி இணக்கம்.",
      recommendedAction: "தொடர்ச்சியான தொழில்முறை மேம்பாட்டு நேரம் மற்றும் தணிக்கை மேற்பார்வையை பராமரிக்கவும்.",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "விபத்து மற்றும் காயப் பதிவேடு",
      category: "அறிக்கையிடல்",
      clause: "பிரிவு 8.2.0 - காயங்கள் மற்றும் விபத்து பதிவேடு",
      status: "Partial",
      risk: "Low",
      requirement: "பணியிடத்தில் ஏற்படும் அனைத்து காயங்களும் 24 மணி நேரத்திற்குள் டிஜிட்டல் பதிவேட்டில் பதிவு செய்யப்பட வேண்டும்.",
      evidenceFound: "கடுமையான சம்பவங்களுக்கு முறையான பதிவு பராமரிக்கப்படுகிறது, ஆனால் சிறிய விபத்துகளுக்கு காகித குறிப்புகள் மட்டுமே உள்ளன.",
      whyProblem: "சிறு விபத்து தரவுகள் துண்டு துண்டாக உள்ளன, இது பெரிய விபத்துக்கள் நிகழும் முன் தடுப்பு நடவடிக்கைகளைத் தடுக்கிறது.",
      recommendedAction: "காகித பதிவுகளை மையப்படுத்தப்பட்ட பாதுகாப்பு தளத்திற்கு மாற்றி வாராந்திர மதிப்பாய்வை கட்டாயமாக்குங்கள்.",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "இயந்திரங்கள் மற்றும் உபகரண பராமரிப்பு",
      category: "இயந்திர பாதுகாப்பு",
      clause: "பிரிவு 5.1.9 - இயந்திர பாதுகாப்பு தடைகள் மற்றும் இன்டர்லாக்குகள்",
      status: "Partial",
      risk: "Medium",
      requirement: "கனரக ஹைட்ராலிக் இயந்திரங்கள் மற்றும் CNC இயந்திரங்கள் மாதாந்திர பாதுகாப்பு தணிக்கைகளுக்கு உட்படுத்தப்பட வேண்டும்.",
      evidenceFound: "பராமரிப்பு பதிவுகள் நிறைவடைந்துள்ளன. ஆனால் CNC அலகுகள் 3 மற்றும் 4 க்கான சென்சார் அளவுத்திருத்தம் 45 நாட்களாக காலாவதியாகியுள்ளது.",
      whyProblem: "அளவுத்திருத்தம் செய்யப்படாத ஒளியியல் உணரிகள் கடுமையான காயம் மற்றும் விபத்து அபாயங்களை உருவாக்குகின்றன.",
      recommendedAction: "CNC அலகுகளில் சென்சார்களை உடனடியாக மறுசீரமைத்து, அடுத்த பணி மாற்றத்திற்கு முன் பாதுகாப்பு குறிச்சொற்களை வழங்கவும்.",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "வெளியேற்ற வரைபட திட்டம்",
      category: "வெளியேற்றம் & வழிகள்",
      clause: "பிரிவு 3.1.4 - தரை வரைபடம் மற்றும் அசெம்பிளி பாயிண்ட்",
      status: "Missing",
      risk: "Low",
      requirement: "வெளியேறும் பாதைகளைக் காட்டும் தரைப்படங்கள் அனைத்து படிக்கட்டுகள் மற்றும் கட்டிட நுழைவாயில்களில் வைக்கப்பட வேண்டும்.",
      evidenceFound: "வாகன நிறுத்துமிடத்தில் கூட்ட இடம் உள்ளது, ஆனால் நுழைவாயில் தரைப்படங்கள் மங்கலாகி சமீபத்திய மாற்றங்களைக் காட்டவில்லை.",
      whyProblem: "2025 கிடங்கு விரிவாக்கத்தை பிரதிபலிக்கும் புதுப்பிக்கப்பட்ட வெளியேற்ற பாதைகள் நுழைவாயில்களில் இல்லை.",
      recommendedAction: "அனைத்து 4 பிரதான படிக்கட்டுகளிலும் புதிய வெளியேறும் வழிகளைக் காட்டும் புதுப்பிக்கப்பட்ட 2026 வரைபடங்களை நிறுவவும்.",
      priorityRank: 8,
      resolved: false
    }
  ],

  ml: [
    {
      id: "req-1",
      number: 1,
      title: "അഗ്നിശമന ഉപകരണ ലഭ്യത",
      category: "തീപിടുത്ത സുരക്ഷ",
      clause: "ഖണ്ഡിക 4.1.2 - പോർട്ടബിൾ അഗ്നിശമന സംവിധാനം",
      status: "Compliant",
      risk: "Low",
      requirement: "25 മീറ്ററിൽ കൂടാത്ത ഇടവേളകളിൽ സാക്ഷ്യപ്പെടുത്തിയ ടൈപ്പ്-എബിസി അഗ്നിശമന ഉപകരണങ്ങൾ സ്ഥാപിക്കണം.",
      evidenceFound: "റിപ്പോർട്ടിൽ കണ്ടെത്തി: പ്ലാന്റ് ഫ്ലോർ ഓഡിറ്റ് പ്രകാരം 18 മീറ്റർ ഇടവേളയിൽ 14 ടൈപ്പ്-എബിസി അഗ്നിശമന ഉപകരണങ്ങൾ സ്ഥാപിച്ചിട്ടുണ്ട്.",
      whyProblem: "ബാധകമല്ല - ഖണ്ഡിക 4.1.2 ലെ മാനദണ്ഡങ്ങൾ പൂർണ്ണമായി പാലിക്കുന്നു.",
      recommendedAction: "ത്രൈമാസ പരിശോധനകൾ തുടരുക, സുരക്ഷാ സീലുകൾ പരിശോധിച്ച് ഉറപ്പാക്കുക.",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "അഗ്നിശമന ഉപകരണ പരിശോധന",
      category: "തീപിടുത്ത സുരക്ഷ",
      clause: "ഖണ്ഡിക 4.1.8 - ആനുകാലിക പരിശോധനയും ടാഗും",
      status: "Missing",
      risk: "High",
      requirement: "എല്ലാ അഗ്നിശമന ഉപകരണങ്ങളും ഓരോ 6 മാസത്തിലും അംഗീകൃത ഏജൻസി പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നൽകണം.",
      evidenceFound: "റിപ്പോർട്ടിൽ ഓഗസ്റ്റ് 2025 ലെ ടാഗുകൾ കാണിക്കുന്നു. അവസാന പരിശോധന നടന്നിട്ട് 7 മാസത്തിലേറെയായി.",
      whyProblem: "അവസാന പരിശോധന കഴിഞ്ഞ് 6 മാസത്തിലേറെയായി. കാലാവധി കഴിഞ്ഞ ഉപകരണങ്ങൾ അടിയന്തര ഘട്ടങ്ങളിൽ പരാജയപ്പെടാൻ സാധ്യതയുണ്ട്.",
      recommendedAction: "ഉടൻ തന്നെ അംഗീകൃത വെണ്ടറുമായി പുനഃപരിശോധന നടത്തി പുതിയ ടാഗുകൾ ഘടിപ്പിക്കുക.",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "അടിയന്തര എക്സിറ്റ് സൈൻബോർഡുകൾ",
      category: "ഒഴിപ്പിക്കൽ & വഴികൾ",
      clause: "ഖണ്ഡിക 3.2.1 - പ്രകാശമുള്ള എക്സിറ്റ് അടയാളങ്ങൾ",
      status: "Missing",
      risk: "High",
      requirement: "എല്ലാ അടിയന്തര എക്സിറ്റുകളിലും കുറഞ്ഞത് 30 മീറ്റർ അകലെ നിന്ന് കാണാവുന്ന സ്വയം പ്രകാശിക്കുന്ന അടയാളങ്ങൾ ഉണ്ടായിരിക്കണം.",
      evidenceFound: "റിപ്പോർട്ടിൽ ഇതുസംബന്ധിച്ച തെളിവുകൾ ഒന്നും ലഭ്യമല്ല. എക്സിറ്റ് ബോർഡുകളെ കുറിച്ച് പരാമർശമില്ല.",
      whyProblem: "അടിയന്തര ഘട്ടങ്ങളിലോ പുക നിറഞ്ഞ സാഹചര്യങ്ങളിലോ ആളുകൾക്ക് വഴി കണ്ടെത്താൻ കഴിയാതെ അപകടം സംഭവിക്കാം.",
      recommendedAction: "എല്ലാ എക്സിറ്റുകളിലും വ്യക്തമായി കാണാവുന്ന പ്രകാശമുള്ള ബോർഡുകൾ സ്ഥാപിക്കുകയും ബാറ്ററി പരിശോധിക്കുകയും ചെയ്യുക.",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "തൊഴിലാളി സുരക്ഷാ പരിശീലനം",
      category: "തൊഴിൽ ആരോഗ്യം",
      clause: "ഖണ്ഡിക 6.1.0 - നിർബന്ധിത സുരക്ഷാ ഇൻഡക്ഷൻ",
      status: "Compliant",
      risk: "Low",
      requirement: "മെഷിനറി പ്രവർത്തിപ്പിക്കുന്നതിന് മുൻപ് 100% ജീവനക്കാരും അടിസ്ഥാന വ്യാവസായിക സുരക്ഷാ പരിശീലനം പൂർത്തിയാക്കണം.",
      evidenceFound: "പരിശീലന റെക്കോർഡ് പ്രകാരം 88 ഓപ്പറേറ്റർമാരും 2026 സുരക്ഷാ മൊഡ്യൂൾ വിജയകരമായി പൂർത്തിയാക്കി.",
      whyProblem: "ബാധകമല്ല - പൂർണ്ണമായ ജീവനക്കാരുടെ സാക്ഷ്യപത്രങ്ങൾ രേഖപ്പെടുത്തിയിട്ടുണ്ട്.",
      recommendedAction: "വാർഷിക പരിശീലന രീതി തുടരുകയും പുതിയ മെഷിനറി മൊഡ്യൂളുകൾ ഉൾപ്പെടുത്തുകയും ചെയ്യുക.",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "വൈദ്യുത സുരക്ഷാ പരിശോധന",
      category: "വൈദ്യുത സംവിധാനങ്ങൾ",
      clause: "ഖണ്ഡിക 5.3.4 - ഹൈ-വോൾട്ടേജ് സർക്യൂട്ട് ഓഡിറ്റ്",
      status: "Partial",
      risk: "Medium",
      requirement: "പ്രധാന സ്വിച്ച്ബോർഡുകളും ഡിസ്ട്രിബ്യൂഷൻ പാനലുകളും വർഷത്തിൽ രണ്ടുതവണ തെർമൽ ഇമേജിംഗ് നടത്തി സർട്ടിഫിക്കറ്റ് നേടണം.",
      evidenceFound: "പരിശോധന ലോഗിൽ പരാമർശിച്ചിട്ടുണ്ടെങ്കിലും തെർമോഗ്രാഫിക് ചിത്രങ്ങളോ സാക്ഷ്യപ്പെടുത്തിയ ഇലക്ട്രീഷ്യൻ ഒപ്പോ ഇല്ല.",
      whyProblem: "പരിശോധന പൂർണ്ണമല്ല. ഇത് ഷോർട്ട് സർക്യൂട്ടിനും തീപിടുത്തത്തിനും കാരണമായേക്കാം.",
      recommendedAction: "ലൈസൻസുള്ള ഇലക്ട്രിക്കൽ കോൺട്രാക്ടറിൽ നിന്ന് പരിശോധനാ റിപ്പോർട്ട് വാങ്ങി സുരക്ഷാ ഫയലിൽ സൂക്ഷിക്കുക.",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "പ്രഥമശുശ്രൂഷാ കിറ്റ് ലഭ്യത",
      category: "അടിയന്തര വൈദ്യസഹായം",
      clause: "ഖണ്ഡിക 7.4.2 - മെഡിക്കൽ റെസ്പോൺസ് സ്റ്റേഷൻ",
      status: "Compliant",
      risk: "Low",
      requirement: "ഓരോ ഉൽപ്പാദന മേഖലയിലും പൂർണ്ണമായി സജ്ജീകരിച്ച പ്രഥമശുശ്രൂഷാ കിറ്റുകൾ സ്ഥാപിക്കുകയും പരിശോധിക്കുകയും വേണം.",
      evidenceFound: "ഫെബ്രുവരി 28, 2026 ലെ റിപ്പോർട്ട് പ്രകാരം 6 ബോക്സുകളും പരിശോധിച്ചു മരുന്നുകൾ ഉറപ്പുവരുത്തിയിട്ടുണ്ട്.",
      whyProblem: "ബാധകമല്ല - പ്രതിമാസ പരിശോധനയും ആവശ്യമായ മരുന്നുകളും ഉറപ്പുവരുത്തിയിട്ടുണ്ട്.",
      recommendedAction: "പ്രഥമശുശ്രൂഷാ വളണ്ടിയർമാരുടെ സർട്ടിഫിക്കറ്റുകൾ ഓഗസ്റ്റ് 2026 ന് മുൻപ് പുതുക്കുക.",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "വ്യക്തിഗത സുരക്ഷാ ഉപകരണങ്ങൾ (PPE)",
      category: "തൊഴിലാളി സംരക്ഷണം",
      clause: "ഖണ്ഡിക 2.1.5 - പിപിഇ പാലിക്കൽ മാനദണ്ഡം",
      status: "Partial",
      risk: "Medium",
      requirement: "തൊഴിലാളികൾക്ക് ഹെൽമെറ്റ്, സുരക്ഷാ ബൂട്ടുകൾ, റെസ്പിറേറ്ററുകൾ എന്നിവ കൃത്യമായി വിതരണം ചെയ്യണം.",
      evidenceFound: "ഹെൽമെറ്റും ബൂട്ടുകളും നൽകിയിട്ടുണ്ട്. എന്നാൽ ഗ്രൈൻഡിങ് വിഭാഗത്തിലെ റെസ്പിറേറ്റർ ഫിറ്റ്-ടെസ്റ്റ് രേഖകൾ ലഭ്യമല്ല.",
      whyProblem: "റെസ്പിറേറ്റർ പരിശോധനയില്ലാത്തത് കാരണം തൊഴിലാളികൾ പൊടി ശ്വസിക്കാനുള്ള സാധ്യതയുണ്ട്.",
      recommendedAction: "14 ഗ്രൈൻഡിങ് തൊഴിലാളികൾക്ക് ഫിറ്റ്-ടെസ്റ്റിംഗ് നടത്തുകയും മാസ്കുകൾ ഉറപ്പാക്കുകയും ചെയ്യുക.",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "അടിയന്തര ഒഴിപ്പിക്കൽ മോക്ക് ഡ്രിൽ",
      category: "അടിയന്തര തയ്യാറെടുപ്പ്",
      clause: "ഖണ്ഡിക 3.5.1 - ഒഴിപ്പിക്കൽ മോക്ക് ഡ്രിൽ",
      status: "Missing",
      risk: "High",
      requirement: "വർഷത്തിൽ ഒരിക്കലെങ്കിലും മുഴുവൻ ഫാക്ടറിയും പങ്കെടുക്കുന്ന ഒഴിപ്പിക്കൽ മോക്ക് ഡ്രിൽ നടത്തണം.",
      evidenceFound: "കഴിഞ്ഞ 12 മാസത്തിനിടെ മോക്ക് ഡ്രിൽ നടത്തിയതിൻ്റെ രേഖകളില്ല. ഒടുവിൽ നടന്നത് നവംബർ 2024 ലാണ്.",
      whyProblem: "തൊഴിലാളികൾക്ക് അടിയന്തര ഘട്ടങ്ങളിൽ പെട്ടെന്ന് ഒഴിഞ്ഞുമാറാനുള്ള പ്രായോഗിക പരിശീലനം ലഭിച്ചിട്ടില്ല.",
      recommendedAction: "അടുത്ത 14 ദിവസത്തിനകം പ്ലാന്റിൽ മോക്ക് ഡ്രിൽ സംഘടിപ്പിക്കുകയും റിപ്പോർട്ട് തയ്യാറാക്കുകയും ചെയ്യുക.",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "സുരക്ഷാ ഓഫീസറുടെ നിയമനം",
      category: "ഭരണനിർവ്വഹണം",
      clause: "ഖണ്ഡിക 1.3.0 - സേഫ്റ്റി ലീഡർഷിപ്പ്",
      status: "Compliant",
      risk: "Low",
      requirement: "50-ലധികം ജീവനക്കാരുള്ള ഫാക്ടറികളിൽ സാക്ഷ്യപ്പെടുത്തിയ EHS ഓഫീസറെ നിയമിക്കണം.",
      evidenceFound: "OSHA-30 സർട്ടിഫൈഡ് EHS ഓഫീസർ (ആർ. ശർമ്മ) 2023 മുതൽ സേവനമനുഷ്ഠിക്കുന്നു.",
      whyProblem: "ബാധകമല്ല - ചട്ടപ്രകാരമുള്ള നിയമനം പൂർണ്ണമായും പാലിച്ചിട്ടുണ്ട്.",
      recommendedAction: "ഓഡിറ്റ് അവലോകനങ്ങൾ കൃത്യമായി മുന്നോട്ട് കൊണ്ടുപോകുക.",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "അപകട രേഖകളും രജിസ്റ്ററും",
      category: "റിപ്പോർട്ടിംഗ്",
      clause: "ഖണ്ഡിക 8.2.0 - അപകട രജിസ്റ്റർ സൂക്ഷിക്കൽ",
      status: "Partial",
      risk: "Low",
      requirement: "എല്ലാ അപകടങ്ങളും ചെറിയ പരിക്കുകളും 24 മണിക്കൂറിനകം ഡിജിറ്റൽ രജിസ്റ്ററിൽ രേഖപ്പെടുത്തണം.",
      evidenceFound: "വലിയ അപകടങ്ങൾക്ക് രജിസ്റ്റർ ഉണ്ടെങ്കിലും ചെറിയ വീഴ്ചകൾക്കായി കടലാസ് കുറിപ്പുകൾ മാത്രമാണ് ഉപയോഗിക്കുന്നത്.",
      whyProblem: "വിവരങ്ങൾ ഡിജിറ്റലായി സൂക്ഷിക്കാത്തത് കാരണം ഭാവിയിലെ വലിയ അപകടങ്ങൾ മുൻകൂട്ടി തടയാൻ സാധിക്കുന്നില്ല.",
      recommendedAction: "എല്ലാ അപകട രേഖകളും ഡിജിറ്റൽ പോർട്ടലിലേക്ക് മാറ്റുകയും പ്രതിവാര പരിശോധന നടത്തുകയും ചെയ്യുക.",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "യന്ത്രോപകരണങ്ങളുടെ മെയിന്റനൻസ്",
      category: "മെഷിനറി സുരക്ഷ",
      clause: "ഖണ്ഡിക 5.1.9 - മെഷീൻ സുരക്ഷാ ഇൻ്റർലോക്കുകൾ",
      status: "Partial",
      risk: "Medium",
      requirement: "പ്രസ്സ്, സിഎൻസി മെഷീനുകളുടെ സുരക്ഷാ സ്വിച്ചുകളും ലൈറ്റ് കർട്ടനുകളും പ്രതിമാസം പരിശോധിക്കണം.",
      evidenceFound: "പ്രസ്സുകൾ പരിശോധിച്ചിട്ടുണ്ട്. എന്നാൽ CNC മെഷീനുകൾ 3, 4 എന്നിവയുടെ ലൈറ്റ് കർട്ടൻ സർട്ടിഫിക്കറ്റ് 45 ദിവസമായി കാലഹരണപ്പെട്ടു.",
      whyProblem: "പരിശോധിക്കാത്ത ലൈറ്റ് കർട്ടനുകൾ ഗുരുതരമായ അപകടങ്ങൾക്ക് കാരണമായേക്കാം.",
      recommendedAction: "CNC യൂണിറ്റുകളിലെ സെൻസറുകൾ ഉടനടി റീകാലിബ്രേറ്റ് ചെയ്യുകയും സുരക്ഷാ ടാഗുകൾ നൽകുകയും ചെയ്യുക.",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "ഒഴിപ്പിക്കൽ പ്ലാൻ മാപ്പ്",
      category: "ഒഴിപ്പിക്കൽ & വഴികൾ",
      clause: "ഖണ്ഡിക 3.1.4 - ഫ്ലോർ ഡയഗ്രം പ്രദർശിപ്പിക്കൽ",
      status: "Missing",
      risk: "Low",
      requirement: "കെട്ടിടത്തിൽ നിന്നും പുറത്തുകടക്കാനുള്ള വഴികൾ വ്യക്തമാക്കുന്ന ഫ്ലോർ മാപ്പുകൾ എല്ലാ പ്രധാന വാതിലുകളിലും പ്രദർശിപ്പിക്കണം.",
      evidenceFound: "അസംബ്ലി പോയിന്റുകൾ ഉണ്ടെങ്കിലും പ്രവേശന കവാടങ്ങളിലെ മാപ്പുകൾ പഴയതാണ്, പുതിയ മാറ്റങ്ങൾ ഉൾപ്പെടുത്തിയിട്ടില്ല.",
      whyProblem: "പുതിയ വെയർഹൗസ് ഉൾപ്പെടുത്തിയുള്ള മാപ്പുകൾ പ്രധാന പ്രവേശന കവാടങ്ങളിൽ ലഭ്യമല്ല.",
      recommendedAction: "പുതിയ വാതിലുകൾ വ്യക്തമാക്കുന്ന 2026-ലെ മാപ്പുകൾ പ്രവേശന കവാടങ്ങളിൽ സ്ഥാപിക്കുക.",
      priorityRank: 8,
      resolved: false
    }
  ],

  es: [
    {
      id: "req-1",
      number: 1,
      title: "Disponibilidad de Extintores",
      category: "Seguridad contra Incendios",
      clause: "Sección 4.1.2 - Sistemas Portátiles de Supresión",
      status: "Compliant",
      risk: "Low",
      requirement: "Deben instalarse extintores certificados Tipo ABC a lo largo de las vías de acceso a intervalos no mayores a 25 metros.",
      evidenceFound: "Encontrado en el informe: La auditoría registra 14 extintores Tipo ABC distribuidos en los talleres A y B a intervalos de 18 metros con acceso despejado.",
      whyProblem: "N/A - Cumple totalmente con los requisitos espaciales y de tipo especificados en la Sección 4.1.2.",
      recommendedAction: "Mantener revisiones físicas trimestrales y verificar que los sellos permanezcan intactos.",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "Inspección de Extintores",
      category: "Seguridad contra Incendios",
      clause: "Sección 4.1.8 - Inspección Hidrostática y Certificación",
      status: "Missing",
      risk: "High",
      requirement: "Todos los extintores deben someterse a mantenimiento formal y certificación cada 6 meses por un proveedor autorizado.",
      evidenceFound: "El informe menciona etiquetas fechadas en agosto de 2025. La última inspección se realizó hace más de 7 meses. No hay registro de 2026.",
      whyProblem: "La última inspección fue hace más de 6 meses. Las revisiones vencidas elevan el riesgo de falla del equipo durante emergencias de incendio.",
      recommendedAction: "Programar de inmediato una inspección de recertificación de emergencia con un proveedor autorizado y actualizar los registros de etiquetas.",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "Señalización de Salidas de Emergencia",
      category: "Evacuación y Salidas",
      clause: "Sección 3.2.1 - Señalización Iluminada de Evacuación",
      status: "Missing",
      risk: "High",
      requirement: "Todas las salidas de emergencia deben contar con señalización iluminada visible desde una distancia mínima de 30 metros.",
      evidenceFound: "No se encontraron pruebas en el informe de la empresa. Las notas de recorrido no mencionan señalización iluminada ni circuitos de respaldo.",
      whyProblem: "Durante un corte de energía o evacuación con humo, las salidas sin iluminación provocan cuellos de botella y víctimas graves.",
      recommendedAction: "Instalar señales de salida de emergencia iluminadas en todas las puertas y verificar los circuitos de batería en la próxima inspección.",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "Capacitación en Seguridad de Trabajadores",
      category: "Salud Ocupacional",
      clause: "Sección 6.1.0 - Inducción y Capacitación Obligatoria",
      status: "Compliant",
      risk: "Low",
      requirement: "El 100% del personal de planta debe completar la capacitación básica en seguridad industrial antes de operar maquinaria, renovada anualmente.",
      evidenceFound: "La matriz de capacitación en el Apéndice C confirma que 88 de 88 operadores completaron los módulos de actualización de seguridad 2026.",
      whyProblem: "N/A - Certificación completa de la fuerza laboral documentada con listas de asistencia verificables.",
      recommendedAction: "Continuar la cadencia de actualización anual e integrar el módulo de maquinaria automatizada del próximo trimestre.",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "Inspección de Seguridad Eléctrica",
      category: "Sistemas Eléctricos",
      clause: "Sección 5.3.4 - Auditorías de Circuitos de Alta Tensión",
      status: "Partial",
      risk: "Medium",
      requirement: "Los tableros eléctricos principales deben ser inspeccionados térmicamente y certificados bianualmente contra arco eléctrico.",
      evidenceFound: "La inspección se menciona en el resumen del registro de mantenimiento, pero faltan las imágenes termográficas y las firmas de electricistas autorizados.",
      whyProblem: "Los tableros sin verificación completa conllevan riesgos potenciales de incendio y descargas eléctricas en la planta.",
      recommendedAction: "Obtener el informe formal de termografía firmado por el electricista autorizado e incorporarlo al expediente de seguridad.",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "Botiquín de Primeros Auxilios",
      category: "Emergencias Médicas",
      clause: "Sección 7.4.2 - Estaciones de Primeros Auxilios Médicos",
      status: "Compliant",
      risk: "Low",
      requirement: "Deben instalarse botiquines de primeros auxilios Clase B completamente abastecidos en cada zona de producción y revisarse mensualmente.",
      evidenceFound: "La lista mensual confirma 6 botiquines revisados el 28 de febrero de 2026 con antisépticos y vendas reabastecidos.",
      whyProblem: "N/A - El registro de verificación mensual y los niveles de suministros cumplen con las directrices regulatorias.",
      recommendedAction: "Asegurarse de que los socorristas designados renueven sus certificaciones de RCP antes de agosto de 2026.",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "Equipo de Protección Personal (EPP)",
      category: "Protección del Trabajador",
      clause: "Sección 2.1.5 - Cumplimiento de EPP",
      status: "Partial",
      risk: "Medium",
      requirement: "Los empleadores deben proporcionar cascos certificados por ANSI, botas con puntera de acero, protección ocular y equipo respiratorio con registro.",
      evidenceFound: "Se registran cascos y botas entregados al personal. Sin embargo, no hay registros de prueba de ajuste de respiradores para el área de esmerilado.",
      whyProblem: "Sin pruebas de ajuste documentadas, los trabajadores en el área de esmerilado están en riesgo de inhalar polvo de sílice y partículas metálicas.",
      recommendedAction: "Realizar pruebas de ajuste cuantitativas formales para los 14 operadores de esmerilado y documentar las asignaciones de mascarillas.",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "Simulacro de Evacuación",
      category: "Preparación ante Emergencias",
      clause: "Sección 3.5.1 - Ejercicios de Evacuación Simulada",
      status: "Missing",
      risk: "High",
      requirement: "Debe realizarse un simulacro documentado de evacuación en toda la instalación al menos una vez cada 12 meses.",
      evidenceFound: "No hay evidencia de simulacro de evacuación en los últimos 12 meses. El último ejercicio registrado tuvo lugar en noviembre de 2024.",
      whyProblem: "El personal de la planta carece de entrenamiento práctico reciente en rutas de evacuación y conteo en puntos de encuentro.",
      recommendedAction: "Programar y ejecutar un simulacro de evacuación en toda la planta dentro de los próximos 14 días y documentar la asistencia.",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "Oficial de Seguridad Ocupacional",
      category: "Gobernanza",
      clause: "Sección 1.3.0 - Liderazgo Designado de Seguridad",
      status: "Compliant",
      risk: "Low",
      requirement: "Las plantas con más de 50 empleados deben contar con un oficial certificado de EHS que reporte directamente a la gerencia.",
      evidenceFound: "Los registros confirman que un líder de EHS certificado por OSHA-30 (R. Sharma) ocupa el puesto desde 2023 con sesiones informativas mensuales.",
      whyProblem: "N/A - Cumplimiento directo con los requisitos de personal y certificación.",
      recommendedAction: "Mantener horas continuas de desarrollo profesional y supervisión de auditorías.",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "Registro de Incidentes y Accidentes",
      category: "Informes y Auditoría",
      clause: "Sección 8.2.0 - Registro de Lesiones Ocupacionales",
      status: "Partial",
      risk: "Low",
      requirement: "Todos los cuasi-accidentes, lesiones menores y pérdidas de tiempo deben registrarse dentro de las 24 horas en un sistema digital centralizado.",
      evidenceFound: "Se mantiene un registro formal para incidentes graves, pero se usan notas en papel para los cuasi-accidentes sin consolidación digital.",
      whyProblem: "Los datos de cuasi-accidentes están fragmentados, lo que impide un análisis proactivo de causas raíz antes de que ocurran accidentes graves.",
      recommendedAction: "Migrar los registros de incidentes en papel al portal centralizado de seguridad y exigir revisiones semanales de supervisores.",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "Mantenimiento Preventivo de Maquinaria",
      category: "Seguridad de Maquinaria",
      clause: "Sección 5.1.9 - Enclavamientos y Protecciones de Máquinas",
      status: "Partial",
      risk: "Medium",
      requirement: "Las prensas hidráulicas y máquinas CNC deben someterse a auditorías mensuales de enclavamientos, cortinas ópticas y paradas de emergencia.",
      evidenceFound: "Los registros de mantenimiento mecánico están completos. Sin embargo, los certificados de calibración de cortinas ópticas de CNC 3 y 4 vencieron hace 45 días.",
      whyProblem: "Las cortinas ópticas no calibradas generan riesgos críticos de atrapamiento y amputación durante los ciclos de carga manual.",
      recommendedAction: "Recalibrar los sensores de cortina óptica en las unidades CNC 3 y 4 y emitir etiquetas de autorización antes del siguiente turno.",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "Plano y Rutas de Evacuación",
      category: "Evacuación y Salidas",
      clause: "Sección 3.1.4 - Diagramas de Planta y Puntos de Encuentro",
      status: "Missing",
      risk: "Low",
      requirement: "Deben colocarse planos de planta actualizados que muestren las rutas de evacuación primarias/secundarias en todas las escaleras y entradas.",
      evidenceFound: "Los puntos de encuentro existen en el estacionamiento A, pero los planos de entrada están desgastados y carecen de las recientes ampliaciones.",
      whyProblem: "Faltan rutas de evacuación actualizadas que reflejen la ampliación del almacén de 2025 en los accesos de las escaleras principales.",
      recommendedAction: "Imprimir e instalar mapas de evacuación arquitectónicos 2026 actualizados en las 4 ubicaciones de escaleras principales.",
      priorityRank: 8,
      resolved: false
    }
  ],

  fr: [
    {
      id: "req-1",
      number: 1,
      title: "Disponibilité des Extincteurs",
      category: "Sécurité Incendie",
      clause: "Section 4.1.2 - Systèmes Portables d'Extinction",
      status: "Compliant",
      risk: "Low",
      requirement: "Des extincteurs certifiés de type ABC doivent être installés le long des voies d'accès à des intervalles ne dépassant pas 25 mètres.",
      evidenceFound: "Trouvé dans le rapport : L'audit d'usine recense 14 extincteurs de type ABC répartis dans les ateliers A et B à des intervalles de 18 mètres avec accès dégagé.",
      whyProblem: "N/A - Conforme pleinement aux exigences spatiales et typologiques spécifiées dans la Section 4.1.2.",
      recommendedAction: "Maintenir des contrôles physiques trimestriels et vérifier que les scellés restent intacts.",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "Inspection des Extincteurs",
      category: "Sécurité Incendie",
      clause: "Section 4.1.8 - Inspection Hydrostatique et Étiquetage",
      status: "Missing",
      risk: "High",
      requirement: "Tous les extincteurs doivent faire l'objet d'un entretien formel et d'une certification tous les 6 mois par un prestataire agréé.",
      evidenceFound: "Le rapport mentionne des étiquettes datant d'août 2025. La dernière inspection a eu lieu il y a plus de 7 mois. Aucun document de 2026 n'a été fourni.",
      whyProblem: "La dernière inspection remonte à plus de 6 mois. Des contrôles expirés augmentent le risque de défaillance en cas d'incendie.",
      recommendedAction: "Planifier immédiatement une inspection de recertification d'urgence auprès d'un fournisseur agréé et mettre à jour les registres.",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "Signalisation des Sorties de Secours",
      category: "Évacuation et Issues",
      clause: "Section 3.2.1 - Signalisation Lumineuse d'Évacuation",
      status: "Missing",
      risk: "High",
      requirement: "Toutes les issues de secours doivent comporter une signalisation éclairée visible à une distance minimale de 30 mètres.",
      evidenceFound: "Aucune preuve à l'appui dans le rapport d'entreprise. Les notes de visite ne mentionnent pas d'éclairage de sécurité.",
      whyProblem: "Lors d'une panne d'électricité ou d'une évacuation enfumée, des issues non éclairées provoquent des goulots d'étranglement et des accidents graves.",
      recommendedAction: "Installer des panneaux d'issue de secours éclairés sur toutes les portes désignées et vérifier les circuits d'alimentation de secours.",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "Formation à la Sécurité des Travailleurs",
      category: "Santé au Travail",
      clause: "Section 6.1.0 - Intégration et Formation Obligatoire",
      status: "Compliant",
      risk: "Low",
      requirement: "100 % du personnel d'atelier doit suivre une formation de base à la sécurité industrielle avant toute utilisation des machines, renouvelée chaque année.",
      evidenceFound: "La matrice de formation à l'annexe C confirme que 88 opérateurs sur 88 ont suivi les modules de recyclage sécurité 2026 avec attestations.",
      whyProblem: "N/A - Certification complète du personnel documentée avec feuilles d'émargement vérifiables.",
      recommendedAction: "Poursuivre le recyclage annuel et intégrer le module machines automatisées prévu au 3e trimestre.",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "Contrôle de Sécurité Électrique",
      category: "Systèmes Électriques",
      clause: "Section 5.3.4 - Audits des Tableaux Haute Tension",
      status: "Partial",
      risk: "Medium",
      requirement: "Les tableaux électriques principaux et secondaires doivent faire l'objet d'un contrôle thermographique semestriel certifié.",
      evidenceFound: "Le contrôle est mentionné dans le registre de maintenance, mais les thermogrammes et signatures d'électriciens qualifiés manquent.",
      whyProblem: "Un équipement électrique non vérifié présente des risques d'incendie et d'électrocution dans les ateliers.",
      recommendedAction: "Obtenir le rapport officiel de thermographie tamponné par l'électricien agréé et l'annexer au dossier de sécurité.",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "Trousses de Premiers Secours",
      category: "Urgences Médicales",
      clause: "Section 7.4.2 - Postes de Premiers Secours",
      status: "Compliant",
      risk: "Low",
      requirement: "Des trousses de premiers secours de classe B bien approvisionnées doivent être installées dans chaque zone et vérifiées chaque mois.",
      evidenceFound: "La fiche mensuelle confirme 6 postes vérifiés le 28 février 2026 avec réapprovisionnement en antiseptiques et pansements.",
      whyProblem: "N/A - Registre mensuel régulier et approvisionnement conforme aux directives réglementaires.",
      recommendedAction: "Veiller à ce que les secouristes désignés renouvellent leur certificat avant août 2026.",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "Équipements de Protection Individuelle (EPI)",
      category: "Protection des Travailleurs",
      clause: "Section 2.1.5 - Conformité des EPI",
      status: "Partial",
      risk: "Medium",
      requirement: "Les employeurs doivent fournir des casques certifiés, des chaussures de sécurité et des protections respiratoires avec fiches d'attribution.",
      evidenceFound: "Casques et chaussures sont bien consignés. Cependant, les fiches de contrôle d'ajustement des masques pour l'atelier de meulage sont absentes.",
      whyProblem: "Sans contrôle d'ajustement documenté, les travailleurs du meulage risquent d'inhaler des poussières de silice et de métaux fins.",
      recommendedAction: "Réaliser des tests d'ajustement quantitatifs pour les 14 meuleurs et consigner les affectations de masques.",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "Exercice d'Évacuation d'Urgence",
      category: "Préparation aux Urgences",
      clause: "Section 3.5.1 - Exercices d'Évacuation Simulés",
      status: "Missing",
      risk: "High",
      requirement: "Un exercice documenté d'évacuation générale doit être réalisé au moins une fois tous les 12 mois civils.",
      evidenceFound: "Aucune preuve d'exercice d'évacuation au cours des 12 derniers mois. Le dernier exercice enregistré date de novembre 2024.",
      whyProblem: "Le personnel de l'usine manque d'entraînement pratique récent sur les itinéraires d'évacuation et le rassemblement aux points de regroupement.",
      recommendedAction: "Organiser et exécuter un exercice d'évacuation dans les 14 prochains jours et consigner l'appel aux points de rassemblement.",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "Responsable Sécurité (EHS)",
      category: "Gouvernance",
      clause: "Section 1.3.0 - Direction Désignée de la Sécurité",
      status: "Compliant",
      risk: "Low",
      requirement: "Les usines de plus de 50 salariés doivent employer un responsable Hygiène et Sécurité certifié rattaché directement à la direction.",
      evidenceFound: "Les registres confirment qu'un responsable EHS certifié (R. Sharma) est en poste depuis 2023 avec réunions mensuelles.",
      whyProblem: "N/A - Conformité directe avec les exigences d'effectif et de qualification.",
      recommendedAction: "Maintenir la formation continue et la surveillance des audits.",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "Registre des Incidents et Accidents",
      category: "Rapports et Audits",
      clause: "Section 8.2.0 - Registre des Accidents et Presqu'accidents",
      status: "Partial",
      risk: "Low",
      requirement: "Tous les presqu'accidents et blessures doivent être enregistrés dans un registre numérique centralisé dans les 24 heures.",
      evidenceFound: "Un registre formel existe pour les accidents graves, mais des notes manuscrites informelles sont utilisées pour les presqu'accidents.",
      whyProblem: "Les données fragmentées empêchent l'analyse préventive des causes profondes avant la survenue d'accidents graves.",
      recommendedAction: "Transférer les fiches de presqu'accidents sur le portail centralisé de sécurité et exiger des revues hebdomadaires.",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "Maintenance des Équipements de Production",
      category: "Sécurité des Machines",
      clause: "Section 5.1.9 - Dispositifs de Verrouillage des Machines",
      status: "Partial",
      risk: "Medium",
      requirement: "Les presses hydrauliques et centres CNC doivent faire l'objet d'audits mensuels de leurs barrages immatériels et arrêts d'urgence.",
      evidenceFound: "La maintenance des presses est à jour. Toutefois, les certificats d'étalonnage des barrages immatériels des CNC 3 et 4 sont expirés depuis 45 jours.",
      whyProblem: "Des barrières optiques non calibrées créent des risques critiques d'écrasement lors du chargement manuel des pièces.",
      recommendedAction: "Recalibrer les cellules photoélectriques sur les CNC 3 et 4 et délivrer les vignettes de conformité avant la prochaine rotation.",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "Plan et Plans d'Évacuation",
      category: "Évacuation et Issues",
      clause: "Section 3.1.4 - Affichage des Plans et Points de Rassemblement",
      status: "Missing",
      risk: "Low",
      requirement: "Des plans d'évacuation architecturaux à fort contraste doivent être affichés dans toutes les cages d'escalier et entrées.",
      evidenceFound: "Les points de rassemblement existent sur le parking A, mais les plans aux entrées sont dégradés et n'intègrent pas l'extension 2025.",
      whyProblem: "Les voies d'évacuation actualisées intégrant l'extension du nouvel entrepôt ne sont pas affichées aux accès principaux.",
      recommendedAction: "Imprimer et installer les plans d'évacuation 2026 actualisés aux 4 accès principaux d'escaliers.",
      priorityRank: 8,
      resolved: false
    }
  ],

  ar: [
    {
      id: "req-1",
      number: 1,
      title: "توفر مطافئ الحريق",
      category: "السلامة من الحرائق",
      clause: "القسم 4.1.2 - أنظمة إطفاء الحرائق المحمولة",
      status: "Compliant",
      risk: "Low",
      requirement: "يجب تركيب عدد كافٍ من مطافئ الحريق المعتمدة من النوع ABC على طول ممرات الوصول على مسافات لا تتجاوز 25 متراً.",
      evidenceFound: "موجود في التقرير: سجل تدقيق أرضية المصنع يوضح وجود 14 مطفأة حريق من النوع ABC موزعة على مسافات 18 متراً مع ممرات واضحة دون أي عوائق.",
      whyProblem: "لا ينطبق - يلبي تماماً المتطلبات المكانية والنوعية المحددة في القسم 4.1.2.",
      recommendedAction: "الحفاظ على الفحوصات الدورية كل ثلاثة أشهر والتأكد من سلامة الأختام.",
      priorityRank: 9,
      resolved: false
    },
    {
      id: "req-2",
      number: 2,
      title: "فحص وصيانة مطافئ الحريق",
      category: "السلامة من الحرائق",
      clause: "القسم 4.1.8 - الفحص الهيدروستاتيكي الدوري وملصق الصلاحية",
      status: "Missing",
      risk: "High",
      requirement: "يجب أن تخضع جميع مطافئ الحريق لصيانة معتمدة وفحص دوري كل 6 أشهر بواسطة مزود معتمد لسلامة الحرائق.",
      evidenceFound: "يشير التقرير إلى أن ملصقات الفحص مؤرخة في أغسطس 2025. تم آخر فحص قبل أكثر من 7 أشهر، ولم يتم تقديم سجل للربع الأول من 2026.",
      whyProblem: "الفحوصات المنتهية تزيد من خطر تعطل معدات الإطفاء أثناء حالات الطوارئ الفعلية للحرائق.",
      recommendedAction: "جدولة فحص إعادة اعتماد عاجل فوراً مع مورد معتمد وتحديث جميع ملصقات الفحص الميدانية.",
      priorityRank: 2,
      resolved: false
    },
    {
      id: "req-3",
      number: 3,
      title: "لوحات مخارج الطوارئ المضيئة",
      category: "الإخلاء والمخارج",
      clause: "القسم 3.2.1 - إشارات مخارج الطوارئ المضيئة",
      status: "Missing",
      risk: "High",
      requirement: "يجب أن تحتوي جميع مخارج الطوارئ على لوحات إرشادية مضيئة ذاتياً أو مدعومة ببطاريات احتياطية مرئية من مسافة 30 متراً كحد أدنى.",
      evidenceFound: "لم يتم العثور على أي أدلة داعمة في تقرير الشركة. ملاحظات الفحص لا تذكر وجود لوحات مضيئة أو دوائر طوارئ.",
      whyProblem: "أثناء انقطاع التيار الكهربائي أو الإخلاء في وجود الدخان، تؤدي المخارج غير المضاءة إلى اختناقات وإصابات خطيرة.",
      recommendedAction: "تركيب لوحات مخارج طوارئ مضيئة واضحة عند جميع المخارج المحددة واختبار دوائر البطاريات الاحتياطية.",
      priorityRank: 1,
      resolved: false
    },
    {
      id: "req-4",
      number: 4,
      title: "تدريب العمال على السلامة الصناعية",
      category: "الصحة المهنية",
      clause: "القسم 6.1.0 - التدريب التعريفي والتوعية بالمخاطر",
      status: "Compliant",
      risk: "Low",
      requirement: "يجب على 100% من عمال صالة الإنتاج إكمال تدريب السلامة الصناعية الأساسي وتجديده سنوياً.",
      evidenceFound: "يؤكد مصفوفة التدريب إكمال 88 من أصل 88 عاملاً للوحدات التدريبية لعام 2026 مع سجلات درجات معتمدة.",
      whyProblem: "لا ينطبق - شهادات معتمدة لجميع القوى العاملة مع قوائم حضور موثقة.",
      recommendedAction: "مواصلة التدريب التنشيطي السنوي ودمج وحدة الآلات الآلية الجديدة للربع الثالث.",
      priorityRank: 10,
      resolved: false
    },
    {
      id: "req-5",
      number: 5,
      title: "فحص السلامة الكهربائية",
      category: "الأنظمة الكهربائية",
      clause: "القسم 5.3.4 - تدقيق دوائر الجهد العالي والتوزيع",
      status: "Partial",
      risk: "Medium",
      requirement: "يجب فحص لوحات المفاتيح الكهربائية الرئيسية ولوحات التوزيع بالأشعة الحرارية واعتمادها ضد الوميض القوسي مرتين سنوياً.",
      evidenceFound: "تم ذكر الفحص في سجل الصيانة، لكن الصور الحرارية وتوقيعات الكهربائيين المعتمدين مفقودة.",
      whyProblem: "المعدات الكهربائية غير المعتمدة بالكامل تنطوي على مخاطر محتملة لنشوب حرائق وصدمات كهربائية.",
      recommendedAction: "الحصول على التقرير الحراري المعتمد والمختوم من مقاول كهربائي مرخص وإرفاقه بملف السلامة.",
      priorityRank: 4,
      resolved: false
    },
    {
      id: "req-6",
      number: 6,
      title: "حقائب الإسعافات الأولية",
      category: "الطوارئ الطبية",
      clause: "القسم 7.4.2 - محطات الاستجابة الطبية الأولية",
      status: "Compliant",
      risk: "Low",
      requirement: "يجب تجهيز حقائب إسعافات أولية من الفئة B في كل منطقة إنتاج وفحص تواريخ الصلاحية شهرياً.",
      evidenceFound: "تؤكد القائمة الشهرية فحص 6 محطات في 28 فبراير 2026 مع تجديد المطهرات وضمادات الحروق.",
      whyProblem: "لا ينطبق - سجل التحقق الشهري ومستويات الإمدادات تلبي الإرشادات التنظيمية تماماً.",
      recommendedAction: "التأكد من تجديد المسعفين المعينين لشهادات الإنعاش القلبي الرئوي قبل أغسطس 2026.",
      priorityRank: 11,
      resolved: false
    },
    {
      id: "req-7",
      number: 7,
      title: "معدات الحماية الشخصية (PPE)",
      category: "حماية العمال",
      clause: "القسم 2.1.5 - الامتثال لمعدات الحماية الشخصية",
      status: "Partial",
      risk: "Medium",
      requirement: "يجب توفير خوذات وأحذية أمان معتمدة ونظارات واقية ومعدات تنفس متخصصة مع سجلات تسليم موثقة.",
      evidenceFound: "تم تسليم خوذات السلامة وأحذية الأمان لجميع العاملين، لكن سجلات اختبار ملاءمة أجهزة التنفس لمنطقة الجلخ مفقودة.",
      whyProblem: "بدون اختبار ملاءمة موثق، يظل عمال منطقة الجلخ عرضة لخطر استنشاق غبار السيليكا والجزيئات المعدنية الدقيقة.",
      recommendedAction: "إجراء اختبارات ملاءمة كمية معتمدة لـ 14 عاملاً في منطقة الجلخ وتوثيق تعيين الأقنعة.",
      priorityRank: 5,
      resolved: false
    },
    {
      id: "req-8",
      number: 8,
      title: "تمرين الإخلاء في حالات الطوارئ",
      category: "الاستعداد للطوارئ",
      clause: "القسم 3.5.1 - تمارين الإخلاء الوهمية",
      status: "Missing",
      risk: "High",
      requirement: "يجب إجراء تمرين إخلاء وهمي شامل وموثق للمنشأة مرة واحدة على الأقل كل 12 شهراً.",
      evidenceFound: "لا يوجد دليل على إجراء تمرين إخلاء خلال الـ 12 شهراً الماضية. كان آخر تمرين موثق في نوفمبر 2024.",
      whyProblem: "يفتقر العاملون إلى التدريب العملي الحديث على مسارات الإخلاء وإجراءات التجمع.",
      recommendedAction: "جدولة وتنفيذ تمرين إخلاء شامل للمصنع خلال الـ 14 يوماً القادمة وتوثيق زمن الإخلاء والحضور.",
      priorityRank: 3,
      resolved: false
    },
    {
      id: "req-9",
      number: 9,
      title: "تعيين مسؤول السلامة والصحة المهنية",
      category: "الحوكمة والقيادة",
      clause: "القسم 1.3.0 - القيادة المعتمدة للسلامة",
      status: "Compliant",
      risk: "Low",
      requirement: "يجب على المنشآت التي تضم أكثر من 50 موظفاً تعيين مسؤول معتمد للسلامة والبيئة يتبع مباشرة للإدارة.",
      evidenceFound: "تؤكد السجلات أن مسؤول سلامة معتمد من OSHA-30 (ر. شارما) يشغل المنصب منذ عام 2023 مع إحاطات شهرية منتظمة.",
      whyProblem: "لا ينطبق - امتثال مباشر وكامل لمتطلبات التوظيف والاعتماد المهني.",
      recommendedAction: "الحفاظ على ساعات التطوير المهني المستمر والرقابة الدورية على التدقيق.",
      priorityRank: 12,
      resolved: false
    },
    {
      id: "req-10",
      number: 10,
      title: "سجلات الحوادث والإصابات",
      category: "التقارير والتدقيق",
      clause: "القسم 8.2.0 - سجل الإصابات المهنية والحوادث الوشيكة",
      status: "Partial",
      risk: "Low",
      requirement: "يجب تسجيل جميع الحوادث الوشيكة والإصابات الطفيفة في سجل رقمي مركزي خلال 24 ساعة.",
      evidenceFound: "يتم الاحتفاظ بسجل رسمي للإصابات الخطيرة، لكن الحوادث الوشيكة تُسجل في مذكرات ورقية دون توثيق رقمي مركزي.",
      whyProblem: "تشتت بيانات الحوادث الوشيكة يعيق التحليل الاستباقي للأسباب الجذرية قبل وقوع حوادث كبرى.",
      recommendedAction: "ترحيل جميع سجلات الحوادث الوشيكة الورقية إلى البوابة الرقمية وإلزام المشرفين بمراجعتها أسبوعياً.",
      priorityRank: 7,
      resolved: false
    },
    {
      id: "req-11",
      number: 11,
      title: "الصيانة الوقائية للآلات والمعدات",
      category: "سلامة المعدات والآلات",
      clause: "القسم 5.1.9 - حواجز الآلات ومفاتيح الإيقاف في حالات الطوارئ",
      status: "Partial",
      risk: "Medium",
      requirement: "يجب أن تخضع مكابس التشكيل وآلات CNC لفحوصات دورية شهرية لأجهزة التعشيق والستائر الضوئية ومفاتيح الطوارئ.",
      evidenceFound: "سجلات صيانة المكابس مكتملة، لكن شهادات معايرة الستائر الضوئية لوحدات CNC رقم 3 و4 منتهية الصلاحية منذ 45 يوماً.",
      whyProblem: "الستائر الضوئية غير المعايرة تسبب مخاطر جسيمة بالسحق والبتر أثناء دورات التحميل اليدوي للقطع.",
      recommendedAction: "إعادة معايرة حساسات الستائر الضوئية على وحدات CNC فوراً وإصدار ملصقات الأمان قبل الوردية التالية.",
      priorityRank: 6,
      resolved: false
    },
    {
      id: "req-12",
      number: 12,
      title: "مخططات ومسارات الإخلاء المعمارية",
      category: "الإخلاء والمخارج",
      clause: "القسم 3.1.4 - مخططات الطوابق ونقاط التجمع",
      status: "Missing",
      risk: "Low",
      requirement: "يجب تثبيت مخططات واضحة ومعتمدة لمسارات الإخلاء الأولية والثانوية ونقاط التجمع عند جميع السلالم ومداخل المباني.",
      evidenceFound: "نقاط التجمع محددة في موقف السيارات، لكن المخططات عند المداخل باهتة ولا تتضمن التوسعات الحديثة لعام 2025.",
      whyProblem: "مسارات الإخلاء المحدثة الخاصة بتوسعة المستودع الجديد غير معروضة عند مداخل السلالم الرئيسية.",
      recommendedAction: "طباعة وتثبيت خرائط إخلاء معمارية محدثة لعام 2026 توضح المخارج الجديدة عند السلالم الأربعة الرئيسية.",
      priorityRank: 8,
      resolved: false
    }
  ]
};

export const LOCALIZED_AI_SUGGESTIONS = {
  en: [
    {
      id: "q1",
      question: "What are our high-risk issues?",
      answer: "Based on the Industrial Workplace Safety Standard 2026 analysis, Checkora identified 3 High-Risk critical issues:\n\n1. 🔴 Emergency Exit Signage (Missing) — No evidence found of clearly visible illuminated exit signs.\n2. 🔴 Fire Extinguisher Inspection (Missing) — Extinguisher maintenance tags are overdue by over 6 months.\n3. 🔴 Emergency Drill (Missing) — No plant-wide evacuation drill has been conducted in the past 12 months.\n\nAll three create life-safety liabilities during an emergency evacuation."
    },
    {
      id: "q2",
      question: "What should we fix first?",
      answer: "Based on the risk analysis, the highest-priority order to address compliance gaps is:\n\n1. 🔴 Verify and install emergency-exit signage at all primary egress doors.\n2. 🔴 Dispatch a certified fire suppression technician to inspect and tag all extinguishers.\n3. 🔴 Schedule a whole-facility emergency evacuation drill within 14 calendar days."
    },
    {
      id: "q3",
      question: "Why is emergency exit signage high risk?",
      answer: "Under Section 3.2.1, in the event of an electrical blackout or smoke accumulation during a plant emergency, lack of self-illuminated exit signage significantly elevates the hazard of trapped workers, bottlenecks, and evacuation casualties."
    },
    {
      id: "q4",
      question: "What requirements are missing?",
      answer: "There are 4 Missing requirements in your compliance profile:\n\n• Emergency Exit Signage (High Risk)\n• Fire Extinguisher Inspection (High Risk)\n• Emergency Evacuation Drill (High Risk)\n• Architectural Evacuation Plan Maps (Low Risk)\n\nRemediating these 4 items will elevate your compliance score from 67% to 100%."
    },
    {
      id: "q5",
      question: "Give me a summary.",
      answer: "Executive Compliance Summary:\n\n• Overall Compliance Score: 67% (8 of 12 statutory requirements satisfied or partial)\n• Breakdown: 4 Compliant, 4 Partial, 4 Missing\n• Risk Severity: 3 High Risk, 3 Medium Risk, 6 Low Risk\n• Top Strength: Safety Officer appointed and Worker Safety Inductions 100% complete."
    }
  ],

  hi: [
    {
      id: "q1",
      question: "हमारे उच्च जोखिम वाले मुद्दे क्या हैं?",
      answer: "औद्योगिक कार्यस्थल सुरक्षा मानक 2026 के विश्लेषण के आधार पर, Checkora ने 3 गंभीर उच्च-जोखिम वाले मुद्दों की पहचान की है:\n\n1. 🔴 आपातकालीन निकास साइनेज (अनुपस्थित) — प्रदीप्त निकास संकेतों का कोई साक्ष्य नहीं मिला।\n2. 🔴 अग्निशामक यंत्र निरीक्षण (अनुपस्थित) — रखरखाव टैग 6 महीने से अधिक समय से समाप्त हैं।\n3. 🔴 आपातकालीन अभ्यास (अनुपस्थित) — पिछले 12 महीनों में कोई निकासी अभ्यास नहीं किया गया।\n\nये तीनों आपातकालीन स्थिति में जीवन-सुरक्षा देनदारियां पैदा करते हैं।"
    },
    {
      id: "q2",
      question: "हमें पहले क्या ठीक करना चाहिए?",
      answer: "जोखिम विश्लेषण के आधार पर, सुधारात्मक कार्रवाई का सर्वोच्च प्राथमिकता क्रम:\n\n1. 🔴 सभी निकास द्वारों पर आपातकालीन-निकास संकेत स्थापित करें।\n2. 🔴 सभी अग्निशामक यंत्रों का निरीक्षण और प्रमाणन करने के लिए तकनीशियन भेजें।\n3. 🔴 14 दिनों के भीतर संयंत्र-व्यापी आपातकालीन अभ्यास आयोजित करें।"
    },
    {
      id: "q3",
      question: "आपातकालीन निकास साइनेज उच्च जोखिम क्यों है?",
      answer: "धारा 3.2.1 के तहत, बिजली गुल होने या धुएं के दौरान, प्रदीप्त संकेतों के अभाव में कर्मचारियों के फंसने और निकासी में बाधा उत्पन्न होने का गंभीर खतरा पैदा होता है।"
    },
    {
      id: "q4",
      question: "कौन सी आवश्यकताएं गायब हैं?",
      answer: "आपकी प्रोफ़ाइल में 4 अनुपस्थित आवश्यकताएं हैं:\n\n• आपातकालीन निकास साइनेज (उच्च जोखिम)\n• अग्निशामक यंत्र निरीक्षण (उच्च जोखिम)\n• आपातकालीन निकासी अभ्यास (उच्च जोखिम)\n• वास्तुशिल्प निकासी योजना (कम जोखिम)\n\nइन 4 का समाधान करने से आपका स्कोर 67% से 100% हो जाएगा।"
    },
    {
      id: "q5",
      question: "मुझे एक सारांश दें।",
      answer: "कार्यकारी अनुपालन सारांश:\n\n• कुल अनुपालन स्कोर: 67% (12 में से 8 आवश्यकताएं संतुष्ट या आंशिक)\n• वर्गीकरण: 4 अनुरूप, 4 आंशिक, 4 अनुपस्थित\n• जोखिम प्रोफाइल: 3 उच्च जोखिम, 3 मध्यम जोखिम, 6 कम जोखिम\n• प्रमुख ताकत: सुरक्षा अधिकारी नियुक्त और कर्मचारी प्रशिक्षण 100% पूर्ण।"
    }
  ],

  ta: [
    {
      id: "q1",
      question: "எங்கள் அதிக ஆபத்துள்ள பிரச்சனைகள் யாவை?",
      answer: "தொழில்துறை பாதுகாப்பு தரநிலை 2026 இன் படி, Checkora 3 முக்கியமான அதிக ஆபத்துக்களைக் கண்டறிந்துள்ளது:\n\n1. 🔴 அவசர வழி வெளியேறும் அடையாள பலகை (விடுபட்டவை) — ஒளிரும் வெளியேறும் பலகைகளுக்கான ஆதாரம் இல்லை.\n2. 🔴 தீயணைப்பான் ஆய்வு (விடுபட்டவை) — ஆய்வு குறிச்சொற்கள் 6 மாதங்களுக்கு மேலாக காலாவதியாகிவிட்டன.\n3. 🔴 அவசர வெளியேற்ற பயிற்சி (விடுபட்டவை) — கடந்த 12 மாதங்களில் எந்த பயிற்சியும் நடத்தப்படவில்லை.\n\nஇவை மூன்றும் அவசரகாலத்தில் கடுமையான உயிராபத்தை உருவாக்குகின்றன."
    },
    {
      id: "q2",
      question: "முதலில் நாம் எதை சரிசெய்ய வேண்டும்?",
      answer: "முன்னுரிமை அடிப்படையில் உடனடியாக சரிசெய்ய வேண்டிய வரிசை:\n\n1. 🔴 அனைத்து கதவுகளிலும் அவசர வெளியேறும் அடையாள பலகைகளை நிறுவவும்.\n2. 🔴 அனைத்து தீயணைப்பான்களையும் ஆய்வு செய்து குறிச்சொல் இட சான்றளிக்கப்பட்ட தொழில்நுட்ப வல்லுநரை அழைக்கவும்.\n3. 🔴 14 நாட்களுக்குள் ஆலை தழுவிய வெளியேற்ற பயிற்சியை திட்டமிட்டு நடத்தவும்."
    },
    {
      id: "q3",
      question: "அவசர வெளியேறும் பலகை ஏன் அதிக ஆபத்து?",
      answer: "பிரிவு 3.2.1 இன் படி, மின்தடை அல்லது தீ விபத்தின் போது, ஒளிரும் அடையாளங்கள் இல்லாதது தொழிலாளர்கள் வெளியேற முடியாமல் மாட்டிக்கொள்ளும் அபாயத்தை அதிகரிக்கிறது."
    },
    {
      id: "q4",
      question: "எந்த தேவைகள் விடுபட்டுள்ளன?",
      answer: "உங்கள் சுயவிவரத்தில் 4 விடுபட்ட தேவைகள் உள்ளன:\n\n• அவசர வெளியேறும் அடையாள பலகை (அதிக ஆபத்து)\n• தீயணைப்பான் ஆய்வு (அதிக ஆபத்து)\n• அவசர வெளியேற்ற பயிற்சி (அதிக ஆபத்து)\n• வெளியேற்ற வரைபடம் (குறைந்த ஆபத்து)\n\nஇவற்றை சரிசெய்வது உங்கள் மதிப்பெண்ணை 67% இலிருந்து 100% ஆக உயர்த்தும்."
    },
    {
      id: "q5",
      question: "ஒரு சுருக்கத்தை கொடுங்கள்.",
      answer: "நிர்வாக இணக்க சுருக்கம்:\n\n• ஒட்டுமொத்த இணக்க மதிப்பெண்: 67% (12 இல் 8 தேவைகள் நிறைவேற்றப்பட்டன)\n• நிலை விவரம்: 4 இணக்கமானது, 4 பகுதி, 4 விடுபட்டவை\n• அபாய விவரம்: 3 அதிக அபாயம், 3 நடுத்தர அபாயம், 6 குறைந்த அபாயம்\n• முக்கிய பலம்: பாதுகாப்பு அதிகாரி நியமனம் & 100% தொழிலாளர் பயிற்சி நிறைவு."
    }
  ],

  ml: [
    {
      id: "q1",
      question: "ഞങ്ങളുടെ ഉയർന്ന അപകടസാധ്യതയുള്ള പ്രശ്നങ്ങൾ എന്തൊക്കെയാണ്?",
      answer: "വ്യാവസായിക സുരക്ഷാ മാനദണ്ഡം 2026 വിശകലന പ്രകാരം Checkora 3 ഉയർന്ന അപകടസാധ്യതകൾ കണ്ടെത്തി:\n\n1. 🔴 എക്സിറ്റ് സൈൻബോർഡുകൾ (ഇല്ലാത്തത്) — പ്രകാശമുള്ള ബോർഡുകൾ സ്ഥാപിച്ചതിന് തെളിവില്ല.\n2. 🔴 അഗ്നിശമന ഉപകരണ പരിശോധന (ഇല്ലാത്തത്) — പരിശോധനാ കാലാവധി കഴിഞ്ഞിട്ട് 6 മാസത്തിലേറെയായി.\n3. 🔴 അടിയന്തര മോക്ക് ഡ്രിൽ (ഇല്ലാത്തത്) — കഴിഞ്ഞ 12 മാസമായി മോക്ക് ഡ്രിൽ നടന്നിട്ടില്ല.\n\nമൂന്നും അടിയന്തര ഘട്ടങ്ങളിൽ ജീവൻ അപകടത്തിലാക്കുന്ന ഘടകങ്ങളാണ്."
    },
    {
      id: "q2",
      question: "ഞങ്ങൾ ആദ്യം പരിഹരിക്കേണ്ടത് എന്താണ്?",
      answer: "മുൻഗണനാ ക്രമത്തിൽ ഉടനടി ചെയ്യേണ്ട കാര്യങ്ങൾ:\n\n1. 🔴 എല്ലാ വാതിലുകളിലും പ്രകാശമുള്ള എക്സിറ്റ് അടയാളങ്ങൾ സ്ഥാപിക്കുക.\n2. 🔴 അഗ്നിശമന ഉപകരണങ്ങൾ പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നേടുക.\n3. 🔴 14 ദിവസത്തിനകം പ്ലാന്റിൽ മോക്ക് ഡ്രിൽ സംഘടിപ്പിക്കുക."
    },
    {
      id: "q3",
      question: "എക്സിറ്റ് അടയാളങ്ങൾ എന്തുകൊണ്ട് ഉയർന്ന അപകടമാണ്?",
      answer: "വൈദ്യുതി നിലയ്ക്കുകയോ പുക നിറയുകയോ ചെയ്യുമ്പോൾ എക്സിറ്റ് ബോർഡുകൾ ഇല്ലെങ്കിൽ ആളുകൾ കുടുങ്ങിപ്പോകാനും അപകടങ്ങൾ സംഭവിക്കാനും വലിയ സാധ്യതയുണ്ട്."
    },
    {
      id: "q4",
      question: "ഏതൊക്കെ ആവശ്യകതകളാണ് ഇല്ലാത്തത്?",
      answer: "നിങ്ങളുടെ റിപ്പോർട്ടിൽ 4 കാര്യങ്ങളാണ് ഇല്ലാത്തതായി രേഖപ്പെടുത്തിയത്:\n\n• എക്സിറ്റ് സൈൻബോർഡുകൾ (ഉയർന്ന അപകടം)\n• അഗ്നിശമന പരിശോധന (ഉയർന്ന അപകടം)\n• മോക്ക് ഡ്രിൽ (ഉയർന്ന അപകടം)\n• ഫ്ലോർ എക്സിറ്റ് മാപ്പ് (കുറഞ്ഞ അപകടം)\n\nഇവ പരിഹരിച്ചാൽ നിങ്ങളുടെ സ്കോർ 67% ൽ നിന്ന് 100% ആകും."
    },
    {
      id: "q5",
      question: "ഒരു സംഗ്രഹം തരൂ.",
      answer: "എക്സിക്യൂട്ടീവ് അനുസരണ സംഗ്രഹം:\n\n• ആകെ അനുസരണ സ്കോർ: 67% (12 ൽ 8 കാര്യങ്ങൾ പാലിച്ചു)\n• തരംതിരിവ്: 4 അനുരൂപം, 4 ഭാഗികം, 4 ഇല്ലാത്തത്\n• അപകട നില: 3 ഉയർന്ന അപകടം, 3 മധ്യ അപകടം, 6 കുറഞ്ഞ അപകടം\n• പ്രധാന നേട്ടം: സുരക്ഷാ ഓഫീസർ നിയമനവും തൊഴിലാളി പരിശീലനവും 100% പൂർത്തിയായി."
    }
  ],

  es: [
    {
      id: "q1",
      question: "¿Cuáles son nuestros problemas de alto riesgo?",
      answer: "Según el análisis de la Norma de Seguridad 2026, Checkora identificó 3 problemas críticos de Alto Riesgo:\n\n1. 🔴 Señalización de Salida de Emergencia (Ausente) — Sin iluminación visible en salidas.\n2. 🔴 Inspección de Extintores (Ausente) — Etiquetas vencidas por más de 6 meses.\n3. 🔴 Simulacro de Evacuación (Ausente) — Sin simulacros en los últimos 12 meses.\n\nTodos crean riesgos para la vida humana durante una evacuación de emergencia."
    },
    {
      id: "q2",
      question: "¿Qué deberíamos corregir primero?",
      answer: "Orden de prioridad recomendado para abordar las brechas:\n\n1. 🔴 Instalar señalización iluminada en todas las puertas de salida de emergencia.\n2. 🔴 Enviar un técnico certificado para inspeccionar y recertificar todos los extintores.\n3. 🔴 Programar un simulacro de evacuación en toda la planta dentro de los próximos 14 días."
    },
    {
      id: "q3",
      question: "¿Por qué la señalización de salida es de alto riesgo?",
      answer: "Bajo la Sección 3.2.1, ante un corte eléctrico o presencia de humo, la falta de señalización iluminada genera riesgo crítico de trabajadores atrapados y cuellos de botella en la evacuación."
    },
    {
      id: "q4",
      question: "¿Qué requisitos están ausentes?",
      answer: "Hay 4 requisitos Ausentes en su perfil:\n\n• Señalización de Salida de Emergencia (Alto Riesgo)\n• Inspección de Extintores (Alto Riesgo)\n• Simulacro de Evacuación (Alto Riesgo)\n• Planos Arquitectónicos de Evacuación (Bajo Riesgo)\n\nRemediar estos 4 puntos aumentará su puntuación del 67% al 100%."
    },
    {
      id: "q5",
      question: "Dame un resumen ejecutivo.",
      answer: "Resumen Ejecutivo de Cumplimiento:\n\n• Puntuación General: 67% (8 de 12 requisitos satisfechos o parciales)\n• Clasificación: 4 Conformes, 4 Parciales, 4 Ausentes\n• Nivel de Riesgo: 3 Alto Riesgo, 3 Riesgo Medio, 6 Riesgo Bajo\n• Puntos Fuertes: Oficial de Seguridad nombrado y 100% de inducción de personal completada."
    }
  ],

  fr: [
    {
      id: "q1",
      question: "Quels sont nos problèmes à haut risque ?",
      answer: "Selon l'analyse de la Norme de Sécurité 2026, Checkora a identifié 3 problèmes critiques à Haut Risque :\n\n1. 🔴 Signalisation des Sorties de Secours (Manquant) — Absence de panneaux lumineux visibles.\n2. 🔴 Contrôle des Extincteurs (Manquant) — Étiquettes d'entretien expirées depuis plus de 6 mois.\n3. 🔴 Exercice d'Évacuation (Manquant) — Aucun exercice réalisé au cours des 12 derniers mois.\n\nTous créent des risques vitaux en cas d'urgence."
    },
    {
      id: "q2",
      question: "Que devrions-nous corriger en premier ?",
      answer: "Ordre de priorité recommandé pour remédier aux non-conformités :\n\n1. 🔴 Installer des panneaux d'issue de secours éclairés sur toutes les portes principales.\n2. 🔴 Faire intervenir un technicien certifié pour inspecter et valider tous les extincteurs.\n3. 🔴 Planifier un exercice d'évacuation dans les 14 prochains jours."
    },
    {
      id: "q3",
      question: "Pourquoi l'éclairage des sorties est-il à haut risque ?",
      answer: "Selon la Section 3.2.1, en cas de coupure de courant ou de fumée épaisse, le manque de signalisation lumineuse augmente fortement le danger de panique et de blocage des salariés."
    },
    {
      id: "q4",
      question: "Quelles sont les exigences manquantes ?",
      answer: "Il y a 4 exigences Manquantes dans votre dossier :\n\n• Signalisation des Sorties de Secours (Haut Risque)\n• Contrôle des Extincteurs (Haut Risque)\n• Exercice d'Évacuation (Haut Risque)\n• Plans d'Évacuation d'Étage (Faible Risque)\n\nCorriger ces 4 points portera votre score de conformité de 67% à 100%."
    },
    {
      id: "q5",
      question: "Donnez-moi un résumé.",
      answer: "Résumé Exécutif de Conformité :\n\n• Score Global : 67% (8 exigences sur 12 satisfaites ou partielles)\n• Répartition : 4 Conformes, 4 Partielles, 4 Manquantes\n• Profil de Risque : 3 Risque Élevé, 3 Risque Moyen, 6 Faible Risque\n• Point Fort : Responsable sécurité nommé et 100% des formations d'accueil réalisées."
    }
  ],

  ar: [
    {
      id: "q1",
      question: "ما هي القضايا ذات الخطورة العالية لدينا؟",
      answer: "بناءً على تحليل معيار السلامة الصناعية 2026، حدد Checkora ثلاث قضايا حرجة عالية الخطورة:\n\n1. 🔴 لوحات مخارج الطوارئ (مفقودة) — لا توجد إشارات مضيئة واضحة عند المخارج.\n2. 🔴 فحص مطافئ الحريق (مفقود) — ملصقات الفحص منتهية الصلاحية منذ أكثر من 6 أشهر.\n3. 🔴 تمرين الإخلاء (مفقود) — لم يتم إجراء أي تمرين إخلاء خلال الـ 12 شهراً الماضية.\n\nتتسبب هذه القضايا الثلاث في مخاطر جسيمة تهدد سلامة الأرواح أثناء الطوارئ."
    },
    {
      id: "q2",
      question: "ما الذي يجب أن نبدأ بإصلاحه أولاً؟",
      answer: "ترتيب الأولويات الموصى به لمعالجة الفجوات:\n\n1. 🔴 تركيب لوحات مخارج طوارئ مضيئة عند جميع الأبواب الرئيسية.\n2. 🔴 استدعاء فني معتمد لفحص وصيانة جميع مطافئ الحريق.\n3. 🔴 جدولة وتنفيذ تمرين إخلاء شامل للمصنع خلال 14 يوماً."
    },
    {
      id: "q3",
      question: "لماذا تعد لوحات مخارج الطوارئ خطراً كبيراً؟",
      answer: "وفقاً للقسم 3.2.1، عند انقطاع التيار الكهربائي أو انتشار الدخان، يؤدي غياب اللوحات المضيئة إلى احتجاز العمال واختناق ممرات الإخلاء مما يهدد بوقوع إصابات ووفيات."
    },
    {
      id: "q4",
      question: "ما هي المتطلبات المفقودة في تدقيقنا؟",
      answer: "هناك 4 متطلبات مفقودة في ملف الامتثال الخاص بك:\n\n• لوحات مخارج الطوارئ (خطر مرتفع)\n• فحص مطافئ الحريق (خطر مرتفع)\n• تمرين الإخلاء في الطوارئ (خطر مرتفع)\n• مخططات الإخلاء المعمارية (خطر منخفض)\n\nمعالجة هذه النقاط الأربع سترفع نسبة الامتثال من 67% إلى 100%."
    },
    {
      id: "q5",
      question: "أعطني ملخصاً تنفيذياً للامتثال.",
      answer: "الملخص التنفيذي للامتثال:\n\n• درجة الامتثال الإجمالية: 67% (8 من أصل 12 متطلباً مطابق أو جزئي)\n• التصنيف: 4 مطابق، 4 جزئي، 4 مفقود\n• شدة المخاطر: 3 مرتفع، 3 متوسط، 6 منخفض\n• أبرز نقاط القوة: تعيين مسؤول معتمد للسلامة، وتدريب 100% من العمال."
    }
  ]
};

export function getLocalizedRequirements(lang = 'en', resolvedMap = {}) {
  const reqs = LOCALIZED_REQUIREMENTS[lang] || LOCALIZED_REQUIREMENTS['en'];
  return reqs.map(r => {
    const isResolved = resolvedMap[r.id] ?? r.resolved;
    return {
      ...r,
      resolved: isResolved,
      status: isResolved ? 'Compliant' : r.status
    };
  });
}

export function getLocalizedCompanyInfo(lang = 'en') {
  return LOCALIZED_COMPANY_INFO[lang] || LOCALIZED_COMPANY_INFO['en'];
}

export function getLocalizedAiSuggestions(lang = 'en') {
  return LOCALIZED_AI_SUGGESTIONS[lang] || LOCALIZED_AI_SUGGESTIONS['en'];
}
