/**
 * Build Script: Overhaul General English (AG) Module 3 (Sessions 1-4)
 * - Implements 4 Diverse Pedagogical Archetypes:
 *    - Session 1: Archetype A (Deep-Dive Crisis & Automation Audit Workshop)
 *    - Session 2: Archetype C (Collaborative Clean Mobility Design Sprint)
 *    - Session 3: Archetype B (The High-Stakes Algorithmic Oversight Inquiry & Debate Lab)
 *    - Session 4: Archetype D (Interactive Stations & Border Treaty Tournament)
 * - Strict 1:1 Parity with Weekly Calendars and Course Data (Rule 1.L & Rule 1.P)
 * - Eliminates AI Fatigue, Repetitive Widgets, and Ghost TOEIC Items
 * - Plain B2 English, Actionable Scenarios, Zero Pedagogical Jargon (Rule 1.I)
 */

const fs = require('fs');
const path = require('path');

const rootDir = '/Users/philparris/Documents/GSEA_semester_1';
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesAg3Path = path.join(rootDir, 'src', 'js', '07-templates-ag3.js');

console.log('🚀 Starting AG Module 3 Overhaul...');

const courseData = require(courseDataPath);
const ag3Sessions = courseData.ag['3'].sessions;

// ============================================================================
// 1. DATA DEFINITIONS FOR SESSIONS 1 TO 4
// ============================================================================

// --- SESSION 1: Everyday AI & Workplace Automation (Archetype A: Crisis & Audit Workshop) ---
ag3Sessions['1'].objectives = {
  title: "Session 1 Objectives - Everyday AI & Workplace Automation",
  summary: "By the end of this session, you will be able to evaluate workplace automation risks across critical operations, analyze the trade-offs between computational efficiency and cognitive deskilling, formulate Human-in-the-Loop (HITL) safeguards, and defend operational automation policies during a spoken town hall inquiry.",
  items: [
    { num: 1, title: "Conduct an Operational Automation Vulnerability Audit", description: "Assess six workplace workflows using an Urgency vs. Human Oversight Matrix to identify automation bottlenecks." },
    { num: 2, title: "Formulate Human-in-the-Loop (HITL) Protocols", description: "Collaborate in interdisciplinary trios to draft mandatory operational override thresholds for autonomous systems." },
    { num: 3, title: "Master Active vs. Passive Voice in Technical Risk Briefings", description: "Contrast automated processes ('The flight plan was recalculated') with executive human accountability ('The dispatcher authorized')." },
    { num: 4, title: "Lead a Spoken Workplace Town Hall Scrutiny Session", description: "Deliver an authoritative operational defense of algorithmic changes and respond to tough cross-examination from staff." }
  ]
};

ag3Sessions['1'].lessonPlan = {
  title: "Session 1 Lesson Plan - Everyday AI & Workplace Automation (2 Hours)",
  summary: "A 120-minute operational workshop moving from an automation risk audit to a high-stakes Human-in-the-Loop policy simulation, spoken town hall cross-examination, and active/passive technical phrasing clinic.",
  items: [
    {
      time: "00–25",
      title: "Part 1: Workplace Automation Vulnerability Audit (25 mins)",
      description: "Analyze six operational workflows (dispatch algorithms, automated passenger re-booking, biometric bag drops, predictive maintenance) and rank them on a Risk vs. Autonomy Matrix."
    },
    {
      time: "25–70",
      title: "Part 2: 'Human-in-the-Loop' (HITL) Policy Simulation (45 mins)",
      description: "Adopt specialized operational roles (Operations Director, Union Workforce Rep, AI Systems Architect) to manage 3 dynamic crisis injects involving algorithm hallucination and cascading system failure."
    },
    {
      time: "70–100",
      title: "Part 3: Spoken Workplace Town Hall & Cross-Examination (30 mins)",
      description: "Taskforce leads deliver a 3-minute spoken defense of their automation policy, followed by aggressive question-and-answer scrutiny from frontline employees."
    },
    {
      time: "100–120",
      title: "Part 4: Technical Phrasing Clinic & FE3 Alignment (20 mins)",
      description: "Drill precise Active vs. Passive constructions in incident reporting and calibrate spoken delivery against the Formative Evaluation 3 (FE3) criteria."
    }
  ]
};

ag3Sessions['1'].lessonContent = {
  hero: {
    title: "Everyday AI & Workplace Automation",
    subtitle: "Archetype A • Crisis & Automation Audit Workshop: Algorithmic Workflows, Human-in-the-Loop Safeguards & Spoken Town Hall Scrutiny",
    image: "images/ag_m3card1.jpg",
    badge: "AG Module 3 • Session 1 • Automation Audit"
  },
  auditDossier: {
    incidentTitle: "Algorithmic Drift & Cascading Dispatch Automation Failure",
    alertLevel: "LEVEL 2 OPERATIONAL VULNERABILITY ALERT",
    timeframe: "Immediate System Audit Mandate",
    summary: "Following the deployment of autonomous machine learning schedulers across regional hubs, operational data reveals recurring algorithmic hallucinations: automated re-routing software miscalculated alternate fuel reserves during weather diversions, while automated passenger rebooking stranded 1,400 transit passengers due to rigid algorithmic parameters.",
    workflows: [
      {
        id: "W1",
        title: "Automated Flight Dispatch & Fuel Load Optimization",
        desc: "Machine learning algorithms compute fuel burns using live weather feeds. Human dispatchers rubber-stamp recommendations with only 45 seconds of review.",
        risk: "Severe Risk of Cognitive Deskilling & Fuel Starvation",
        sector: "Flight Operations"
      },
      {
        id: "W2",
        title: "Dynamic Crew Rostering & Fatigue Prediction",
        desc: "Black-box AI models assign crew pairings based on predictive fatigue algorithms without considering unrecorded micro-delays or commuting stressors.",
        risk: "Acute Crew Burnout & Silent Non-Compliance",
        sector: "Human Resources"
      },
      {
        id: "W3",
        title: "Automated Irregular Operations (IROPS) Passenger Recovery",
        desc: "Autonomous bots issue rebooking vouchers during massive weather cancellations, creating conflicting gate assignments and stranded passenger clusters.",
        risk: "Reputational Collapse & Terminal Overcrowding",
        sector: "Customer Experience"
      },
      {
        id: "W4",
        title: "Predictive Airframe Component Health Monitoring",
        desc: "Sensor telemetry automatically flags hydraulic pump degradation. Maintenance teams face alert fatigue from an 18% false-positive warning rate.",
        risk: "Premature Maintenance Overhauls & Alert Fatigue",
        sector: "Engineering"
      },
      {
        id: "W5",
        title: "Biometric Self-Boarding E-Gate Supervision",
        desc: "One gate agent currently monitors 6 simultaneous automated biometric boarding lanes, creating vulnerability to piggybacking and manual override delays.",
        risk: "Physical Security Breach & Boarding Bottlenecks",
        sector: "Ground Operations"
      },
      {
        id: "W6",
        title: "AI-Generated Internal Safety Incident Summaries",
        desc: "Large language models summarize confidential pilot safety reports for executive dashboards, inadvertently scrubbing critical contextual nuances.",
        risk: "Loss of Critical Human Factors Insights",
        sector: "Safety Compliance"
      }
    ]
  },
  hitlSimulation: {
    roles: [
      {
        role: "Director of Flight Operations",
        badge: "Operational Leadership",
        mission: "Safeguard flight safety, demand rigid human verification thresholds, and resist unchecked cost-cutting automation.",
        keyPhrases: [
          "No algorithm can replace the legal command authority of...",
          "We must implement a mandatory fail-safe checkpoint whenever...",
          "The operational threshold for full manual override requires..."
        ]
      },
      {
        role: "Chief AI Systems Architect",
        badge: "Technical Engineering",
        mission: "Champion computational efficiency, explain model confidence intervals, and warn against excessive manual interference.",
        keyPhrases: [
          "Human dispatchers introduce inconsistent cognitive bias into...",
          "The predictive model demonstrates a 99.4% accuracy rate when...",
          "Frequent manual overrides degrade the system's ability to..."
        ]
      },
      {
        role: "Staff & Union Workforce Representative",
        badge: "Human Factors & Labor",
        mission: "Protect staff from cognitive overload and deskilling, defend workers' right to challenge automated decisions, and prevent punitive telemetry tracking.",
        keyPhrases: [
          "Frontline employees are experiencing acute cognitive burnout due to...",
          "Staff cannot be held legally liable for decisions dictated by...",
          "We demand rigorous training and clear ergonomic boundaries before..."
        ]
      }
    ],
    injects: [
      {
        time: "T+15m INJECT #1",
        title: "⚠️ Cloud Telemetry Outage",
        desc: "A fiber sever takes down the cloud prediction engine. Junior dispatchers discover they cannot manually calculate oceanic step-climbs without software assistance."
      },
      {
        time: "T+30m INJECT #2",
        title: "🚨 Algorithmic Discrimination Scandal",
        desc: "The crew rostering algorithm is leaked: it systematically assigned night shifts to junior personnel while shielding senior management from weekend duties."
      },
      {
        time: "T+45m INJECT #3",
        title: "📢 Breaking Union Walkout Threat",
        desc: "Ground staff threaten immediate industrial action unless management commits to a minimum of two human agents per four automated biometric lanes."
      }
    ]
  },
  townHall: {
    title: "Spoken Workplace Town Hall & Executive Scrutiny (30 mins)",
    instructions: "The Operational Taskforce presents their newly drafted Human-in-the-Loop Charter to frontline employees and journalists. Frontline staff pose tough, skeptical questions.",
    questions: [
      "If a junior dispatcher accepts an automated fuel calculation that results in a forced diversion, who will be held legally responsible: the dispatcher or the software vendor?",
      "How will the company guarantee that human staff do not lose their fundamental manual operational competence after years of AI automation?",
      "Why should ground personnel trust automated biometric gates when false-reject rates for passengers with mobility limitations exceed 12%?",
      "What concrete assurances can you provide that algorithmic productivity metrics will not be used punitively against individual workers?"
    ]
  }
};


// --- SESSION 2: Future Mobility & Clean Energy Transport (Archetype C: Mobility Design Sprint) ---
ag3Sessions['2'].objectives = {
  title: "Session 2 Objectives - Future Mobility & Clean Energy Transport",
  summary: "By the end of this session, you will be able to analyze competing zero-emission transport paradigms, evaluate the infrastructure trade-offs of hydrogen aviation and urban air mobility, apply high-level B2 language of predictive certainty, and negotiate a €100M Clean Corridor blueprint against stakeholder resistance.",
  items: [
    { num: 1, title: "Compare Competing Zero-Emission Transport Paradigms", description: "Analyze fixed-guideway high-speed transit vs. decentralized regional electric aviation across emissions, land take, and scalability." },
    { num: 2, title: "Master Future Forms & Predictive Certainty Phrasing", description: "Deploy graded modal phrases ('is bound to', 'is slated to', 'is highly improbable that') to express technical forecasts." },
    { num: 3, title: "Lead a €100M Clean Corridor Collaborative Design Sprint", description: "Balance capital allocation across hydrogen hubs, electric commuter fleets, vertiports, and high-speed rail links." },
    { num: 4, title: "Overcome Vocal Stakeholder Pushback in Spoken Pitches", description: "Defend your regional clean mobility transition plan against fiscal conservatives, rural advocates, and climate skeptics." }
  ]
};

ag3Sessions['2'].lessonPlan = {
  title: "Session 2 Lesson Plan - Future Mobility & Clean Energy Transport (2 Hours)",
  summary: "A 120-minute visual analysis and collaborative engineering sprint comparing competing clean mobility paradigms, budgeting €100M in regional decarbonization infrastructure, and defending transit choices against stakeholder resistance.",
  items: [
    {
      time: "00–35",
      title: "Part 1: Future Mobility Showcase • Comparative Visual Analysis (35 mins)",
      description: "Examine two competing future transit paradigms (Decentralized Regional Electric/eVTOL Air Mobility vs. Centralized High-Speed Rail & Megaprojects) using interactive spatial hotspots and a 3-stage spoken protocol."
    },
    {
      time: "35–90",
      title: "Part 2: €100M Clean Corridor Collaborative Design Sprint (55 mins)",
      description: "Teams allocate €100,000,000 across 5 breakthrough propulsion and infrastructure options to transform the 'South-West Trans-Regional Corridor' by 2035."
    },
    {
      time: "90–120",
      title: "Part 3: Spoken Regional Council Pitch & Policy Defense (30 mins)",
      description: "Planning duos deliver 3-minute investment pitches to the Regional Transport Authority, counter stakeholder objections, and vote on the winning corridor design."
    }
  ]
};

ag3Sessions['2'].lessonContent = {
  hero: {
    title: "Future Mobility & Clean Energy Transport",
    subtitle: "Archetype C • Collaborative Clean Mobility Sprint: Hydrogen Propulsion, Regional Electric Aviation, eVTOL Vertiports & High-Speed Transit",
    image: "images/ag_m3card2.jpg",
    badge: "AG Module 3 • Session 2 • Design Sprint"
  },
  showcase: {
    modelA: {
      title: "Paradigm A: Decentralized Regional Air Mobility & eVTOL Vertiports",
      caption: "On-demand electric commuter aviation, zero-emission vertiport nodes on commercial rooftops, and point-to-point regional connectivity.",
      hotspots: [
        { id: 1, label: "Rooftop Vertiport Hub", desc: "Multi-pad vertiport infrastructure integrated into urban railway stations with ultra-fast megawatt battery chargers." },
        { id: 2, label: "19-Seat Regional Commuter Aircraft", desc: "Short-takeoff hybrid-electric aircraft connecting secondary regional towns bypassed by traditional high-speed rail networks." },
        { id: 3, label: "Liquid Hydrogen Refueling Rig", desc: "Cryogenic fuel storage facility supporting regional zero-emission fuel-cell flights under 800 km." },
        { id: 4, label: "Autonomous Fleet Swarm Dispatch", desc: "Centralized AI traffic management routing electric air taxis through segregated low-altitude urban air corridors." }
      ],
      spatialVocab: "point-to-point connectivity, localized noise footprint, cryogenic containment, low-altitude routing, agile infrastructure."
    },
    modelB: {
      title: "Paradigm B: High-Density High-Speed Electric Rail & Maglev Corridors",
      caption: "Mass-capacity intercity rail, subterranean downtown terminals, overhead catenary electrification, and heavy-duty freight integration.",
      hotspots: [
        { id: 1, label: "Subterranean Multi-Modal Terminal", desc: "Centralized transit hub processing 45,000 passengers per hour with direct seamless subway and light-rail connections." },
        { id: 2, label: "320 km/h High-Speed Trainsets", desc: "High-capacity electric rolling stock moving thousands of passengers simultaneously with zero localized atmospheric emissions." },
        { id: 3, label: "Linear Infrastructure Footprint", desc: "Fenced high-speed rail corridor requiring continuous land expropriation, extensive bridges, and deep mountain tunnels." },
        { id: 4, label: "Shared High-Volume Freight Rails", desc: "Dual-use track network allowing midnight electric freight trains to displace 120,000 diesel heavy trucks annually." }
      ],
      spatialVocab: "massive passenger throughput, fixed-guideway permanence, landscape fragmentation, catenary electrification, economies of scale."
    },
    spokenProtocol: [
      { step: "Stage 1 (Comparative Physics - 4 mins)", prompt: "Partner A argues the energetic and operational benefits of Model A; Partner B defends Model B using technical comparative structures ('Whereas rail demands massive initial civil engineering...', 'Electric aviation offers agile flexibility, yet...')." },
      { step: "Stage 2 (Capital Efficiency - 3 mins)", prompt: "Compare the 30-year lifecycle cost: civil land acquisition and tunneling vs. rapid battery replacement and airspace management infrastructure." },
      { step: "Stage 3 (The Regional Dilemma - 3 mins)", prompt: "If your province has €100M to spend, would you connect 2 major cities with a rail extension or 12 remote rural communities with regional electric flight hubs?" }
    ]
  },
  designSprint: {
    budget: "€100,000,000",
    corridorName: "The 2035 Trans-Regional Green Corridor (Toulouse – Pau – Bayonne – Bordeaux)",
    categories: [
      {
        name: "Green Hydrogen Production & Airport Fueling Rigs",
        costPerUnit: "€25M / regional hub",
        desc: "Construct localized water electrolysis plants and cryogenic liquid hydrogen storage facilities at secondary airports."
      },
      {
        name: "Intercity High-Speed Rail Modernization & Bypass",
        costPerUnit: "€35M / 20km section",
        desc: "Electrify and straighten regional track bottlenecks to elevate maximum train speeds from 140 km/h to 220 km/h."
      },
      {
        name: "Regional Electric Commuter Flight Fleet Subsidy",
        costPerUnit: "€20M / 5 aircraft",
        desc: "Subsidize airline acquisition of 19-seat hybrid-electric regional turboprops to restore discontinued rural routes."
      },
      {
        name: "Urban Air Mobility Vertiport Network & Charging",
        costPerUnit: "€15M / 3 vertiports",
        desc: "Build 3 city-center rooftop vertiports with multi-megawatt battery swapping stations for automated air ambulances and air taxis."
      },
      {
        name: "Multi-Modal Mobility Digital Ticketing & Rail-Air Links",
        costPerUnit: "€5M / full corridor integration",
        desc: "Deploy a single synchronized booking API and baggage-transfer system connecting high-speed trains directly to flights."
      }
    ],
    stakeholders: [
      {
        role: "The Fiscal Conservative Council Member",
        objection: "€100M is public taxpayers' money. Hydrogen aircraft are unproven technology. We should only invest in standard off-the-shelf electric buses."
      },
      {
        role: "The Rural Community Mayor",
        objection: "High-speed rail whizzes right through our villages without stopping. Electric commuter planes are luxury toys for business travelers. What about our local roads?"
      },
      {
        role: "The Deep Ecology Campaigner",
        objection: "eVTOL air taxis generate acoustic annoyance and consume 3 times more kilowatt-hours per passenger-kilometer than electric trains. They are an ecological distraction."
      },
      {
        role: "The Regional Airline Executive",
        objection: "If you fund rail modernization without subsidizing our clean fleet renewal, our airline will go bankrupt and regional aerospace jobs will disappear."
      }
    ]
  }
};


// --- SESSION 3: Technology Ethics & Automated Decisions in AI (Archetype B: Public Inquiry Hearing) ---
ag3Sessions['3'].objectives = {
  title: "Session 3 Objectives - Technology Ethics & Automated Decisions in AI",
  summary: "By the end of this session, you will be able to analyze ethical dilemmas surrounding predictive AI and algorithmic surveillance, cross-examine technical witness depositions under EU AI Act standards, deploy persuasive B2 argumentation strategies, and deliver a formal public inquiry verdict.",
  items: [
    { num: 1, title: "Evaluate High-Stakes Algorithmic Oversight Dossiers", description: "Scrutinize empirical evidence of automated profiling, false-positive biometric matches, and black-box decision models." },
    { num: 2, title: "Conduct Formal Spoken Witness Cross-Examinations", description: "Adopt inquiry roles (Judicial Commissioner, Chief Data Ethics Auditor, Biometric Defense Vendor, Civil Rights Litigator) to challenge witness vulnerabilities." },
    { num: 3, title: "Deploy Advanced B2 Inquiry Argumentation Structures", description: "Master partial concessions ('While I acknowledge the security imperatives...'), causation challenges, and constructive regulatory remedies." },
    { num: 4, title: "Deliver a Binding Public Inquiry Commission Ruling", description: "Formulate a majority judicial opinion balancing public security mandates against fundamental privacy rights." }
  ]
};

ag3Sessions['3'].lessonPlan = {
  title: "Session 3 Lesson Plan - Technology Ethics & Automated Decisions in AI (2 Hours)",
  summary: "A 120-minute Oxford-style regulatory inquiry examining biometric surveillance, predictive passenger profiling, and algorithmic accountability under the European AI Act framework.",
  items: [
    {
      time: "00–20",
      title: "Part 1: Devil's Advocate Warm-Up • Tech Fallacy Rebuttals (20 mins)",
      description: "Quick-fire spoken counter-arguments refuting three common tech governance myths regarding facial recognition and algorithmic infallibility."
    },
    {
      time: "20–55",
      title: "Part 2: The High-Stakes Public Inquiry Dossier (35 mins)",
      description: "Analyze the official inquiry brief: Project 'Argus-Eye' (an automated AI profiling system deployed across 14 international border checkpoints)."
    },
    {
      time: "55–80",
      title: "Part 3: Spoken Inquiry Argumentation & Cross-Exam Clinic (25 mins)",
      description: "Practice high-level rhetorical patterns: concessions, challenging false equivalence, and formulating proportionate regulatory safeguards."
    },
    {
      time: "80–120",
      title: "Part 4: Oxford-Style Public Hearing & Commission Verdict (40 mins)",
      description: "Formal inquiry proceedings: witness depositions, 2-minute adversarial cross-examinations, commissioner deliberations, and delivery of the final binding verdict."
    }
  ]
};

ag3Sessions['3'].lessonContent = {
  hero: {
    title: "Technology Ethics & Automated Decisions in AI",
    subtitle: "Archetype B • Media & Debate Lab: The High-Stakes Public Inquiry into Algorithmic Profiling, Biometric Surveillance & the EU AI Act",
    image: "images/ag_m3card3.jpg",
    badge: "AG Module 3 • Session 3 • Debate Lab"
  },
  devilsAdvocate: [
    {
      claim: "If you have nothing to hide, you have nothing to fear from 24/7 facial recognition and biometric tracking at airports.",
      challenge: "Challenge this position: How does ubiquitous mass surveillance chill lawful civil liberties, and what happens when the algorithm makes a false-positive match?"
    },
    {
      claim: "Algorithms are purely mathematical; therefore, they are completely immune to human bias, prejudice, and emotional error.",
      challenge: "Challenge this position: How does training an AI on historical policing and border data inevitably institutionalize and amplify historical societal biases?"
    },
    {
      claim: "Regulating AI with strict laws like the EU AI Act will only strangle European innovation while American and Asian tech giants dominate the globe.",
      challenge: "Challenge this position: Why does strong regulatory trust and transparent explainability actually create a competitive global advantage for European enterprises?"
    }
  ],
  inquiryDossier: {
    projectName: "Project 'Argus-Eye': The Pan-European Predictive Border Neural Network",
    controversy: "An automated passenger risk-scoring AI deployed across 14 international transit hubs. The system scans facial micro-expressions, analyzes luggage purchase telemetry, and automatically assigns green, amber, or red detention flags to travelers before they reach customs.",
    witnesses: [
      {
        role: "Dr. Soraya Morales • Independent Algorithmic Ethics Auditor",
        stance: "Total Opposition • Demands Immediate System Moratorium",
        testimony: "Our independent audit revealed that Argus-Eye exhibits a 14.8% false-positive rate on non-Caucasian travelers. Its emotion-detection module conflates travel fatigue and stress with deception. It is an unscientific black-box violating Article 5 of the EU AI Act.",
        vulnerability: "Morales's audit methodology evaluated only 2,500 travelers and did not account for the latest neural network patch."
      },
      {
        role: "Viktor Lindholm • Chief Security Officer, Trans-Continental Border Agency",
        stance: "Full Defense • Cites Unprecedented Threat Neutralization",
        testimony: "Argus-Eye processes 250,000 travelers daily in under 2 seconds each. In six months, it intercepted 42 human-trafficking suspects and 110 fraudulent identity rings that human border guards completely missed. Shutting it down compromises European homeland security.",
        vulnerability: "Lindholm cannot explain the mathematical weighting behind the risk scores because the software is proprietary black-box code."
      },
      {
        role: "Hélène Dupont • Commercial Airline Passenger Coalition Lead",
        stance: "Conditional Reform • Demands Human-in-the-Loop Safeguards",
        testimony: "Passengers appreciate skipping 45-minute passport queues with biometric walkthroughs. However, when an amber flag occurs, travelers are subjected to humiliating cavity searches with zero right to know why the algorithm flagged them. We demand a guaranteed human appeals officer at every gate.",
        vulnerability: "Mandatory human appeals officers at every terminal will increase operating overhead by €45M annually, raising passenger airfare tickets."
      },
      {
        role: "Chief Justice Karen Sterling • European Inquiry Tribunal Chair",
        stance: "Judicial Arbiter • Mandating Evidence-Based Reconciliation",
        testimony: "The Commission must determine whether Project Argus-Eye falls under the 'Unacceptable Risk' tier (prohibited under EU law) or 'High-Risk' tier (permitted with strict conformity audits and human oversight). We require clear empirical standards, not speculative fear.",
        vulnerability: "Must deliver a consensus ruling enforceable across 27 sovereign member states with sharply divergent national security priorities."
      }
    ]
  },
  argumentClinic: {
    rules: [
      {
        title: "1. The Ethical Concession & Pivot",
        formula: "While I do not contest [the security value of X], it cannot justify [the systemic breach of Y].",
        example: "<em>While I do not contest the need to intercept traffickers</em>, that objective cannot justify deploying racially biased black-box algorithms across millions of innocent travelers."
      },
      {
        title: "2. The Burden-of-Proof Reversal",
        formula: "Before this technology is unleashed, the burden of proof rests entirely on [proponent] to demonstrate that [safety claim].",
        example: "<em>The burden of proof rests entirely on the agency</em> to demonstrate scientifically that micro-expression analysis is not pseudoscience."
      },
      {
        title: "3. Challenging False Dichotomies",
        formula: "It is a dangerous false dichotomy to suggest that we must sacrifice [fundamental right A] in order to preserve [security benefit B].",
        example: "<em>It is a dangerous false dichotomy to suggest</em> that Europeans must choose between civil privacy and physical aviation security."
      },
      {
        title: "4. The Constructive Regulatory Remedy",
        formula: "Rather than an outright ban or unregulated deployment, the legally proportionate remedy is [precise safeguard].",
        example: "<em>Rather than an outright ban</em>, <em>the legally proportionate remedy is</em> mandatory open-source algorithm auditing and immediate right-of-explanation for every flagged traveler."
      }
    ]
  }
};


// --- SESSION 4: Biometrics, Digital IDs & Passenger Journey (Archetype D: Stations & Treaty) ---
ag3Sessions['4'].objectives = {
  title: "Session 4 Objectives - Biometrics, Digital IDs & Passenger Journey",
  summary: "By the end of this session, you will be able to analyze seamless airport passenger processing technologies, evaluate data sovereignty and cryptographic security safeguards, negotiate a multilateral Passenger Rights & Biometric Sovereignty Treaty, and calibrate your speaking performance for the Session 5 Formative Evaluation 3 (FE3).",
  items: [
    { num: 1, title: "Examine Seamless Contactless Airport Architecture", description: "Rotate through three specialized technology stations covering walkthrough biometric tunnels, zero-knowledge proofs, and sovereign digital identity wallets." },
    { num: 2, title: "Evaluate Biometric Cyber-Vulnerabilities & Hash Encryption", description: "Analyze the operational difference between centralized facial image databases and decentralized cryptographic biometric hashes." },
    { num: 3, title: "Negotiate the Tri-Party Passenger Biometric Charter", description: "Represent competing delegations (Border Agencies, Passenger Advocacy Groups, Cybersecurity Regulators) to ratify a binding operational treaty." },
    { num: 4, title: "Confirm Formative Evaluation 3 (FE3) Speaking Readiness", description: "Review presentation scoring rubrics, rehearse 2-minute technical pitch summaries with a partner, and finalize FE3 topic approvals." }
  ]
};

ag3Sessions['4'].lessonPlan = {
  title: "Session 4 Lesson Plan - Biometrics, Digital IDs & Passenger Journey (2 Hours)",
  summary: "A 120-minute station-based workshop and treaty negotiation tournament analyzing contactless travel architectures, biometric data sovereignty, and culminating in full rehearsal for the Formative Evaluation 3 (FE3) presentations.",
  items: [
    {
      time: "00–20",
      title: "Part 1: The Contactless Border Paradox Briefing (20 mins)",
      description: "Examine the friction between frictionless 10-second passenger throughput and the catastrophic cyber risks of permanent biometric data theft."
    },
    {
      time: "20–65",
      title: "Part 2: Interactive Technology Stations (45 mins)",
      description: "Pairs rotate through 3 operational engineering clinics: Station 1 (Lidar & Walkthrough E-Gates), Station 2 (Zero-Knowledge Cryptographic Hashes), and Station 3 (Digital Wallets & IATA One ID Interoperability)."
    },
    {
      time: "65–105",
      title: "Part 3: Tri-Party Passenger Biometric Charter Tournament (40 mins)",
      description: "Delegations negotiate the terms of a legally binding 5-point international treaty establishing data retention limits, opt-out rights, and audit penalties."
    },
    {
      time: "105–120",
      title: "Part 4: Formative Evaluation 3 (FE3) Rehearsal & Sign-Off (15 mins)",
      description: "Verify presentation pairings, conduct a 2-minute rapid-fire pitch rehearsal against the FE3 rubric, and confirm readiness for the Session 5 evaluation."
    }
  ]
};

ag3Sessions['4'].lessonContent = {
  hero: {
    title: "Biometrics, Digital IDs & Passenger Journey",
    subtitle: "Archetype D • Interactive Stations & Negotiation Tournament: Contactless Airport Corridors, Biometric Sovereignty & FE3 Readiness",
    image: "images/ag_m3card4.jpg",
    badge: "AG Module 3 • Session 4 • Interactive Stations"
  },
  borderParadox: {
    headline: "The Frictionless Paradox: The 10-Second Curb-to-Gate Dream vs. Biometric Permanence",
    context: "Global international air travel is projected to reach 8 billion passengers annually. Traditional physical passport checks and paper boarding passes cannot scale to meet this volume without creating 3-hour airport queues. In response, international hubs are deploying seamless 'One ID' biometrics where a traveler's face serves as their passport, ticket, and credit card from curb to aircraft door. However, unlike a password or physical credit card that can be reissued if compromised, your biological face and iris cannot be changed if the central database is breached by state-sponsored hackers.",
    dilemma: "How can aviation authorities deliver seamless, high-throughput passenger movement while guaranteeing 100% cryptographic sovereignty and giving travelers an unpenalized right to opt out?"
  },
  stations: [
    {
      num: 1,
      title: "Station 1: High-Throughput Walkthrough Biometric Tunnels",
      icon: "🚶",
      badge: "Terminal Architecture",
      coreTech: "High-Speed Infrared Stereoscopy + Lidar Gait Analysis + Automated Turnstiles",
      keyInsight: "Passengers walk at a normal pace of 1.4 m/s through an open glass corridor without stopping or looking directly at cameras. Infrared sensors capture facial geometry and iris patterns in 180 milliseconds, validating credentials against the airline departure control manifest.",
      discussionPrompts: [
        "How do walkthrough biometric tunnels prevent tailgating or simultaneous double-entries without requiring physical barrier gates to slam shut?",
        "What backup operational protocol must activate within 5 seconds if a passenger wearing heavy cosmetic makeup or religious headwear is rejected?"
      ]
    },
    {
      num: 2,
      title: "Station 2: Zero-Knowledge Proofs & Biometric Hash Encryption",
      icon: "🔐",
      badge: "Cryptographic Security",
      coreTech: "Irreversible Mathematical Hashes + Decentralized Local Enclaves",
      keyInsight: "Instead of storing actual high-resolution photos of passenger faces in a central vulnerable database, the sensor converts facial measurements into a 512-bit encrypted mathematical hash. Once hashed, the original facial photo is purged immediately, making database theft completely useless to hackers.",
      discussionPrompts: [
        "Why is mathematical hashing exponentially safer than encrypting traditional JPEG or PNG facial image files on a centralized server?",
        "How does a Zero-Knowledge Proof allow an airport gate to verify that a passenger is 'over 18 and holds a valid visa' without revealing their name, exact birthdate, or nationality?"
      ]
    },
    {
      num: 3,
      title: "Station 3: Sovereign Digital Identity Wallets & IATA One ID",
      icon: "📱",
      badge: "Global Interoperability",
      coreTech: "W3C Verifiable Credentials + ICAO Digital Travel Credentials (DTC)",
      keyInsight: "The traveler holds their digital passport inside a secure hardware enclave on their personal smartphone. During airport transit, the phone shares temporary cryptographic tokens via short-range Ultra-Wideband (UWB) wireless, ensuring the passenger retains 100% physical ownership of their identity credentials at all times.",
      discussionPrompts: [
        "What happens if a passenger's smartphone battery dies or is lost during an international transit layover?",
        "How can sovereign digital wallets remain universally interoperable when passing between different national customs jurisdictions (e.g., EU Schengen vs. US CBP)?"
      ]
    }
  ],
  treatyNegotiation: {
    treatyTitle: "The International Contactless Passenger Sovereignty Charter (5 Key Articles)",
    parties: [
      {
        party: "Delegation A: International Airport Operators & Border Security Agency",
        priorities: "Demands minimum 98% passenger adoption of biometric e-gates to process 45 flights per hour. Rejects cumbersome paper backup lanes that cause terminal congestion. Demands right to retain biometric hashes for 72 hours for security auditing.",
        bargainingChip: "Controls terminal gate funding and automated fast-track access."
      },
      {
        party: "Delegation B: Global Airline Passenger Rights Federation",
        priorities: "Demands an absolute, non-penalized right for any passenger to opt out and use traditional human passport desks without experiencing delays. Insists that all biometric hashes must be mathematically purged within 60 minutes of aircraft takeoff.",
        bargainingChip: "Can mobilize consumer boycotts and file collective legal injunctions."
      },
      {
        party: "Delegation C: Cybersecurity & Data Protection Regulatory Authority",
        priorities: "Demands mandatory Zero-Knowledge cryptographic architecture. Any airport storing raw facial image files faces immediate €50M non-compliance fines. Demands unannounced annual penetration audits by white-hat hackers.",
        bargainingChip: "Holds the legal power to revoke operational licenses under the GDPR and EU AI Act."
      }
    ]
  }
};

// ============================================================================
// 2. WRITE UPDATED COURSE DATA
// ============================================================================

fs.writeFileSync(courseDataPath, 'const courseData = ' + JSON.stringify(courseData, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = courseData;\n}\n', 'utf8');
console.log('✓ Successfully synchronized data/course-data.js for AG Module 3 Sessions 1-4');

// ============================================================================
// 3. GENERATE src/js/07-templates-ag3.js
// ============================================================================

const ag3TemplatesCode = `    /* ==========================================================================
       GENERAL ENGLISH (AG) • MODULE 3 LESSON CONTENT TEMPLATES (SESSIONS 1 TO 4)
       - Archetype A (Session 1): Crisis & Automation Audit Workshop
       - Archetype C (Session 2): Collaborative Clean Mobility Design Sprint
       - Archetype B (Session 3): Media & Debate Lab (High-Stakes AI Regulatory Hearing)
       - Archetype D (Session 4): Interactive Stations & Border Treaty Tournament
       ========================================================================== */

    // --- SESSION 1: Everyday AI & Workplace Automation (Archetype A) ---
    function renderAg3LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const dossier = content.auditDossier || {};
      const workflows = dossier.workflows || [];
      const sim = content.hitlSimulation || {};
      const roles = sim.roles || [];
      const injects = sim.injects || [];
      const townHall = content.townHall || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Everyday AI & Workplace Automation'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card1.jpg'}" alt="\${hero.title || 'Everyday AI'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 1 • Automation Audit'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Everyday AI & Workplace Automation'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Archetype A • Crisis & Automation Audit Workshop'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">Workplace Automation Audit & HITL Simulation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Operational Interaction Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Workplace Automation Vulnerability Audit (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-black text-xs flex items-center justify-center border border-blue-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Operational Automation Vulnerability Audit (25 mins)</h4>
                  <p class="text-xs text-slate-500">Scan critical workplace workflows, detect algorithmic drift, and rank operational risks on an Urgency Matrix.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">\${dossier.alertLevel || 'VULNERABILITY ALERT'}</span>
            </div>

            <!-- Incident Overview Card -->
            <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="font-black text-blue-900 text-xs sm:text-sm">\${dossier.incidentTitle}</h5>
                <span class="text-[11px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">\${dossier.timeframe}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${dossier.summary}</p>
            </div>

            <!-- Workflows Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Critical Operational Workflows Under Review (Pairs rank 1 to 6)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${workflows.map(w => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[11px] flex items-center justify-center">\${w.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">\${w.sector}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs mb-1">\${w.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-2">\${w.desc}</p>
                    <div class="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-100">
                      ⚠️ <strong>Risk:</strong> \${w.risk}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Spoken Prompt -->
            <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
              <span class="text-base shrink-0">🗣️</span>
              <p><strong>Pair Audit Protocol:</strong> Negotiate with your partner which TWO workflows must remain strictly under human control and which TWO can safely utilize automated machine learning. Justify your decisions using phrases of risk and causality (<em>"If dispatchers surrender cognitive oversight to the algorithm, the cascade failure will be..."</em>).</p>
            </div>
          </div>

          <!-- Part 2: HITL Emergency Policy Simulation (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: 'Human-in-the-Loop' (HITL) Emergency Policy Simulation (45 mins)</h4>
                  <p class="text-xs text-slate-500">Adopt interdisciplinary roles, resolve dynamic crisis injects, and formulate mandatory human override thresholds.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Tri-Party Simulation</span>
            </div>

            <!-- Roles Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Operational Roles (Trios or Pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                \${roles.map(r => \`
                  <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${r.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded">\${r.badge}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed"><strong>Mission:</strong> \${r.mission}</p>
                    <div class="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Useful phrases:</span>
                      <ul class="text-[11px] text-slate-700 space-y-0.5">
                        \${(r.keyPhrases || []).map(p => \`<li>• <em>"\${p}"</em></li>\`).join('')}
                      </ul>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Dynamic Crisis Injects -->
            <div class="p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-3">
              <h5 class="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>⚠️</span> Dynamic Crisis Injects (Introduced by the Teacher during negotiations)
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                \${injects.map(inj => \`
                  <div class="p-3 bg-white border border-rose-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-black text-rose-700 block">\${inj.time}</span>
                    <h6 class="font-bold text-slate-900 text-xs">\${inj.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${inj.desc}</p>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Workplace Town Hall (30 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Spoken Workplace Town Hall & Executive Scrutiny (30 mins)</h4>
                  <p class="text-xs text-slate-500">Defend your department's automation charter under intense questioning from frontline employees.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Live Town Hall</span>
            </div>

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
              <h5 class="font-bold text-emerald-900 text-xs sm:text-sm">\${townHall.title}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">\${townHall.instructions}</p>
            </div>

            <!-- Tough Town Hall Questions -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Staff & Journalist Interrogations (Classmate Q&A)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${(townHall.questions || []).map((q, idx) => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
                    <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">Q\${idx + 1}</span>
                    <p class="text-xs text-slate-800 italic leading-relaxed">"\${q}"</p>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 4: Technical Phrasing Clinic & Debrief (20 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Technical Phrasing Clinic (Active vs. Passive Voice):</span>
              <span class="ml-1">Contrast passive system reports (<em>"The parameters were adjusted by the neural net"</em>) with active human agency (<em>"The dispatcher authorized the override"</em>) to establish legal accountability.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 1 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 2: Future Mobility & Clean Energy Transport (Archetype C) ---
    function renderAg3LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const showcase = content.showcase || {};
      const modelA = showcase.modelA || {};
      const modelB = showcase.modelB || {};
      const protocol = showcase.spokenProtocol || [];
      const sprint = content.designSprint || {};
      const categories = sprint.categories || [];
      const stakeholders = sprint.stakeholders || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Future Mobility & Clean Energy Transport'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card2.jpg'}" alt="\${hero.title || 'Future Mobility'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-teal-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 2 • Design Sprint'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Future Mobility & Clean Energy Transport'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Archetype C • Collaborative Clean Mobility Sprint'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Visual Analysis & €100M Clean Corridor Sprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Collaborative Engineering Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Clean Mobility Comparative Showcase (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-black text-xs flex items-center justify-center border border-teal-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Future Mobility Showcase • Comparative Transit Paradigms (35 mins)</h4>
                  <p class="text-xs text-slate-500">Compare decentralized electric commuter flight vs. high-density fixed-rail corridors across energy, land take, and scalability.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">Comparative Analysis</span>
            </div>

            <!-- Comparative Models Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <!-- Model A: Decentralized Electric/eVTOL Air Mobility -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="p-4 bg-teal-900 text-white">
                  <span class="text-[10px] font-black uppercase tracking-wider text-teal-300 block mb-1">Paradigm 01 • Decentralized Network</span>
                  <h5 class="font-black text-white text-xs sm:text-sm">\${modelA.title}</h5>
                  <p class="text-[11px] text-teal-100 mt-1 leading-relaxed">\${modelA.caption}</p>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Infrastructure Hotspots (Click to view details):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      \${(modelA.hotspots || []).map(h => \`
                        <button type="button" onclick="document.getElementById('hotspot-m3-a-\${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-teal-800 border border-teal-200 hover:bg-teal-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 \${h.label}
                        </button>
                      \`).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      \${(modelA.hotspots || []).map(h => \`
                        <div id="hotspot-m3-a-\${h.id}" class="hidden p-2.5 bg-teal-50/80 border border-teal-200 rounded-lg text-[11px] text-teal-950 leading-relaxed">
                          <strong>\${h.label}:</strong> \${h.desc}
                        </div>
                      \`).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Operational Lexis:</span> <em>\${modelA.spatialVocab}</em>
                  </div>
                </div>
              </div>

              <!-- Model B: High-Density High-Speed Electric Rail -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="p-4 bg-indigo-900 text-white">
                  <span class="text-[10px] font-black uppercase tracking-wider text-indigo-300 block mb-1">Paradigm 02 • High-Density Corridor</span>
                  <h5 class="font-black text-white text-xs sm:text-sm">\${modelB.title}</h5>
                  <p class="text-[11px] text-indigo-100 mt-1 leading-relaxed">\${modelB.caption}</p>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Infrastructure Hotspots (Click to view details):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      \${(modelB.hotspots || []).map(h => \`
                        <button type="button" onclick="document.getElementById('hotspot-m3-b-\${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 \${h.label}
                        </button>
                      \`).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      \${(modelB.hotspots || []).map(h => \`
                        <div id="hotspot-m3-b-\${h.id}" class="hidden p-2.5 bg-indigo-50/80 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 leading-relaxed">
                          <strong>\${h.label}:</strong> \${h.desc}
                        </div>
                      \`).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Operational Lexis:</span> <em>\${modelB.spatialVocab}</em>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3-Stage Spoken Comparative Protocol -->
            <div class="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-2.5">
              <h5 class="font-bold text-teal-950 text-xs sm:text-sm flex items-center gap-1.5">
                <span>🗣️</span> 3-Stage Spoken Comparative Protocol (Pair Discussion)
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                \${protocol.map(p => \`
                  <div class="p-3 bg-white border border-teal-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-black text-teal-800 block">\${p.step}</span>
                    <p class="text-[11px] text-slate-700 leading-relaxed">\${p.prompt}</p>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: €100M Clean Corridor Design Sprint (55 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Collaborative Clean Corridor Design Sprint (\${sprint.budget}) (55 mins)</h4>
                  <p class="text-xs text-slate-500">Allocate public capital across 5 breakthrough mobility assets and defend your plan against stakeholder pushback.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">\${sprint.budget} Fund</span>
            </div>

            <!-- Target Briefing -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Corridor Infrastructure Target:</span>
              <h5 class="font-black text-slate-900 text-xs sm:text-sm">\${sprint.corridorName}</h5>
              <p class="text-[11px] text-slate-600 mt-1">Your regional engineering duo has <strong>€100,000,000</strong> to allocate across the 5 options below. No single project may receive more than €40M. Achieve the highest CO₂ reduction while maintaining regional equity.</p>
            </div>

            <!-- Categories Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Available Decarbonization Interventions (Select & Budget)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                \${categories.map((c, idx) => \`
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-black text-slate-500 uppercase">Option 0\${idx + 1}</span>
                      <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">\${c.costPerUnit}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs">\${c.name}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${c.desc}</p>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Stakeholder Objections -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Stakeholder Resistance Clinic (Prepare Spoken Rebuttals)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${stakeholders.map(s => \`
                  <div class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
                    <span class="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">\${s.role}</span>
                    <p class="text-xs text-amber-950 italic">"\${s.objection}"</p>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Regional Council Pitch (30 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Spoken Council Pitch (Part 3):</span>
              <span class="ml-1">Deliver a 3-minute spoken investment pitch to the Regional Transport Authority using phrases of predictive certainty (<em>"Hydrogen is bound to dominate short-haul corridors by 2035..."</em>).</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 2 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 3: Technology Ethics & Automated Decisions in AI (Archetype B) ---
    function renderAg3LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const devils = content.devilsAdvocate || [];
      const dossier = content.inquiryDossier || {};
      const witnesses = dossier.witnesses || [];
      const clinic = content.argumentClinic || {};
      const rules = clinic.rules || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card3.jpg'}" alt="\${hero.title || 'Technology Ethics'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 3 • Debate Lab'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Archetype B • Media & Debate Lab'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">High-Stakes Regulatory Public Inquiry Hearing</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Spoken Argumentation Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Devil's Advocate Warm-Up (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Devil's Advocate Warm-Up • Spoken Rebuttals (20 mins)</h4>
                  <p class="text-xs text-slate-500">Refute common AI governance fallacies with swift, evidence-backed spoken arguments.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Warm-Up Refutation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              \${devils.map((d, idx) => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span class="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Fallacy 0\${idx + 1}</span>
                  <p class="text-xs text-slate-800 font-medium italic">"\${d.claim}"</p>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Your Spoken Challenge:</span>
                    <p class="text-[11px] text-slate-600">\${d.challenge}</p>
                  </div>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 2: The Inquiry Dossier (Project Argus-Eye) (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: The Official Inquiry Brief • \${dossier.projectName} (35 mins)</h4>
                  <p class="text-xs text-slate-500">Examine witness depositions under EU AI Act standards and prepare targeted cross-examination challenges.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Hearing Dossier</span>
            </div>

            <!-- Controversy Summary -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1">
              <h5 class="font-bold text-indigo-950 text-xs sm:text-sm">Regulatory Allegation:</h5>
              <p class="text-xs text-slate-700 leading-relaxed">\${dossier.controversy}</p>
            </div>

            <!-- Witnesses Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Key Sworn Witnesses (Adopt a Deposition Role in Pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                \${witnesses.map(w => \`
                  <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${w.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">\${w.stance}</span>
                    </div>
                    <p class="text-[11px] text-slate-700 leading-relaxed italic">"\${w.testimony}"</p>
                    <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg">
                      <span class="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">Cross-Examination Flaw:</span>
                      <p class="text-[11px] text-rose-900">\${w.vulnerability}</p>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Argumentation Clinic (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Spoken Regulatory Inquiry Clinic (25 mins)</h4>
                  <p class="text-xs text-slate-500">Deploy high-level B2 debate structures for legal and ethical hearings.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Argument Clinic</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              \${rules.map(r => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h6 class="font-bold text-slate-900 text-xs">\${r.title}</h6>
                  <p class="text-[11px] text-indigo-700 font-mono bg-indigo-50/60 p-1.5 rounded border border-indigo-100">\${r.formula}</p>
                  <p class="text-[11px] text-slate-600 italic">\${r.example}</p>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 4: Oxford-Style Public Hearing (40 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Part 4: Public Hearing & Majority Commission Ruling (40 mins):</span>
              <span class="ml-1">The Tribunal convenes. Proponents and opponents cross-examine witnesses for 2 minutes each, followed by majority commissioner deliberations and delivery of the final binding verdict.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 3 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 4: Biometrics, Digital IDs & Passenger Journey (Archetype D) ---
    function renderAg3LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const paradox = content.borderParadox || {};
      const stations = content.stations || [];
      const treaty = content.treatyNegotiation || {};
      const parties = treaty.parties || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card4.jpg'}" alt="\${hero.title || 'Biometrics'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-purple-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 4 • Interactive Stations'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Archetype D • Interactive Stations & Negotiation Tournament'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">Stations Investigation & 3-Way Treaty Tournament</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Interactive Stations Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: The Contactless Border Paradox (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: The Contactless Border Paradox • Operational Briefing (20 mins)</h4>
                  <p class="text-xs text-slate-500">Unpack the tension between 10-second passenger throughput and permanent biometric cyber-vulnerability.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 shrink-0">Case Briefing</span>
            </div>

            <div class="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-2">
              <h5 class="font-black text-purple-950 text-xs sm:text-sm">\${paradox.headline}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">\${paradox.context}</p>
              <div class="p-2.5 bg-white border border-purple-200 rounded-lg">
                <span class="text-[10px] font-bold text-purple-900 uppercase tracking-wider block mb-0.5">Core Operational Dilemma:</span>
                <p class="text-[11px] text-slate-700 font-medium">\${paradox.dilemma}</p>
              </div>
            </div>
          </div>

          <!-- Part 2: Interactive Technology Stations (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Interactive Technology Stations (45 mins)</h4>
                  <p class="text-xs text-slate-500">Rotate through 3 specialized contactless engineering stations.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Station Rotation</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              \${stations.map(st => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-lg">\${st.icon}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">\${st.badge}</span>
                    </div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm">\${st.title}</h5>
                    <div class="text-[10px] font-mono text-purple-700 bg-purple-50/70 px-2 py-1 rounded border border-purple-100">
                      <strong>Tech:</strong> \${st.coreTech}
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${st.keyInsight}</p>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Station Investigation Questions:</span>
                    <ul class="text-[11px] text-slate-700 space-y-1">
                      \${(st.discussionPrompts || []).map(dp => \`<li>• \${dp}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 3: Tri-Party Treaty Negotiation (40 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Tri-Party Passenger Biometric Charter Tournament (40 mins)</h4>
                  <p class="text-xs text-slate-500">Negotiate a legally binding multilateral agreement establishing data sovereignty, retention caps, and opt-out rights.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Treaty Negotiation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              \${parties.map(p => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${p.party}</h6>
                  <p class="text-[11px] text-slate-700 leading-relaxed"><strong>Priorities:</strong> \${p.priorities}</p>
                  <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                    <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Bargaining Chip:</span>
                    <p class="text-[11px] text-emerald-900">\${p.bargainingChip}</p>
                  </div>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 4: FE3 Final Rehearsal & Sign-Off (15 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Formative Evaluation 3 (FE3) Final Rehearsal:</span>
              <span class="ml-1">Conduct a 2-minute spoken pitch rehearsal with your FE3 partner. Confirm your chosen technical topic and slide outline with your teacher.</span>
            </div>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md shrink-0">✓ Ready for FE3 in Session 5</span>
          </div>
        </div>
      \`;
    }
`;

fs.writeFileSync(templatesAg3Path, ag3TemplatesCode, 'utf8');
console.log('✓ Successfully wrote refreshed, non-formulaic templates to src/js/07-templates-ag3.js');

