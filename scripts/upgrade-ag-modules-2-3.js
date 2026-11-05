/**
 * Upgrade Script: Enrich General English (AG) Modules 2 & 3
 * - Implements the 4-Pillar Pedagogical Architecture across all 8 sessions:
 *    - Pillar 1: Interactive Vocabulary & Phrase Builder (with instant check-answers toggle)
 *    - Pillar 2: Concrete Grammar Clinic & Sentence Mechanics (with interactive transformation drills)
 *    - Pillar 3: Core Communicative Archetype / Scenario with numbered step-by-step steps & sentence frames
 *    - Pillar 4: Consolidation, Peer Feedback & Formative Evaluation alignment
 * - Preserves UMD export wrapper in data/course-data.js (root.COURSE_DATA = factory())
 * - Updates src/js/06-templates-ag2.js and src/js/07-templates-ag3.js
 * - Plain B2 English, zero pedagogical jargon (Rule 1.I)
 */

const fs = require('fs');
const path = require('path');

const rootDir = '/Users/philparris/Documents/GSEA_semester_1';
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesAg2Path = path.join(rootDir, 'src', 'js', '06-templates-ag2.js');
const templatesAg3Path = path.join(rootDir, 'src', 'js', '07-templates-ag3.js');

console.log('🚀 Starting Comprehensive AG Modules 2 & 3 Enrichment...');

const courseData = require(courseDataPath);

// ============================================================================
// 1. ENRICH COURSE DATA FOR AG MODULE 2 (SESSIONS 1 TO 4)
// ============================================================================

// --- SESSION 1: Extreme Weather & Urban Climate Resilience ---
courseData.ag['2'].sessions['1'].objectives = {
  title: "Session 1 Objectives - Extreme Weather & Urban Climate Resilience",
  summary: "By the end of this session, you will be able to evaluate severe weather disaster briefings, deploy precise B2 vocabulary of meteorological hazards, apply conditionals to formulate emergency risk assessments, lead a civic emergency taskforce simulation, and deliver an authoritative spoken press briefing under media scrutiny.",
  items: [
    { num: 1, title: "Master Severe Weather & Infrastructure Vulnerability Lexis", description: "Define and apply 8 essential terms including atmospheric river, inundation, storm surge, and cascading failure." },
    { num: 2, title: "Deploy Conditionals for Emergency Risk Assessment (Grammar Clinic)", description: "Construct real and hypothetical conditional sentences (1st and 2nd conditionals) to link meteorological alerts directly to civic countermeasures." },
    { num: 3, title: "Lead a Civic Emergency Taskforce Simulation (Pillar 3)", description: "Adopt departmental roles in pairs to negotiate an Urgency-Impact Matrix and respond to live crisis injects." },
    { num: 4, title: "Deliver a Spoken Emergency Press Conference", description: "Present an authoritative 3-minute public safety broadcast and defend decisions against tough investigative reporter questions." }
  ]
};

courseData.ag['2'].sessions['1'].lessonPlan = {
  title: "Session 1 Lesson Plan - Extreme Weather & Urban Climate Resilience (2 Hours)",
  summary: "A 120-minute operational syllabus combining disaster lexis drills, conditional grammar clinics, a 4-part emergency taskforce simulation, live spoken press conference, and FE2 alignment.",
  items: [
    { time: "00–25", title: "Pillar 1: Severe Weather & Disaster Vulnerability Lexis (25 mins)", description: "Analyze 8 core technical terms, examine real-world emergency bulletins, and complete the interactive vocabulary matching drill." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Conditionals for Emergency Risk (25 mins)", description: "Master 1st and 2nd conditionals in crisis management; complete 4 interactive risk assessment sentence transformations." },
    { time: "50–95", title: "Pillar 3: Emergency Taskforce Simulation & Press Conference (45 mins)", description: "Step-by-step roleplay: rank 6 acute threats, resolve dynamic crisis injects, and deliver a live spoken press conference under media scrutiny." },
    { time: "95–120", title: "Pillar 4: Pronunciation Clinic, Peer Review & FE2 Prep (25 mins)", description: "Drill syllable stress on multi-syllable terms, conduct peer fluency evaluations, and review FE2 presentation requirements." }
  ]
};

// --- SESSION 2: The 15-Minute Resilient City Blueprint ---
courseData.ag['2'].sessions['2'].objectives = {
  title: "Session 2 Objectives - The 15-Minute Resilient City Blueprint",
  summary: "By the end of this session, you will be able to analyze contrasting urban spatial typologies, apply precise B2 spatial prepositions and relative clauses, allocate a €50,000,000 regeneration budget across resilient city infrastructure, and pitch a collaborative urban design blueprint to a City Council panel.",
  items: [
    { num: 1, title: "Analyze Contrasting Urban Typologies (Photo Showcase)", description: "Contrast car-centric sprawl with European superblocks using interactive clickable hotspots and a 3-stage observation protocol." },
    { num: 2, title: "Master Spatial Prepositions & Relative Clauses (Grammar Clinic)", description: "Construct sophisticated descriptive sentences combining spatial markers ('flanked by', 'adjacent to') with non-defining relative clauses." },
    { num: 3, title: "Execute a €50M Collaborative Urban Design Sprint", description: "Allocate €50M across 5 resilient infrastructure categories while overcoming 4 tough stakeholder objections." },
    { num: 4, title: "Deliver a Spoken City Council Pitch & Peer Vote", description: "Present a 3-minute spoken proposal defending your duo's blueprint and participate in the class council vote." }
  ]
};

courseData.ag['2'].sessions['2'].lessonPlan = {
  title: "Session 2 Lesson Plan - The 15-Minute Resilient City Blueprint (2 Hours)",
  summary: "A 120-minute visual analysis and collaborative engineering sprint moving from spatial photo analysis to relative clause grammar drills, €50M budget allocation, stakeholder rebuttal clinic, and spoken council presentations.",
  items: [
    { time: "00–25", title: "Pillar 1: Urban Architecture & Spatial Vocabulary (25 mins)", description: "Master 8 key spatial design terms (permeable paving, active frontage, bioswale, superblock) with interactive visual matching." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Spatial Prepositions & Relative Clauses (25 mins)", description: "Punctuation and syntax rules for non-defining relative clauses; complete 4 sentence combining drills with instant feedback." },
    { time: "50–95", title: "Pillar 3: Photo Analysis & €50M Collaborative Design Sprint (45 mins)", description: "Step-by-step: analyze comparative photos, allocate the €50M budget across 5 categories, and script counter-arguments to 4 stakeholder objections." },
    { time: "95–120", title: "Pillar 4: Spoken City Council Pitch & Democratic Vote (25 mins)", description: "Duos deliver 3-minute spoken presentations to the City Council panel; class votes on the winning resilient blueprint." }
  ]
};

// --- SESSION 3: Environmental Ethics & The Public Inquiry Hearing ---
courseData.ag['2'].sessions['3'].objectives = {
  title: "Session 3 Objectives - Environmental Ethics & The Public Inquiry Hearing",
  summary: "By the end of this session, you will be able to analyze high-stakes infrastructure controversies, deploy diplomatic B2 hedging and concession formulas, conduct formal witness cross-examinations, and deliver a majority judicial commission ruling.",
  items: [
    { num: 1, title: "Master Environmental Ethics & Public Inquiry Lexis", description: "Define and apply 8 high-level terms including empirical evidence, carbon sequestration, proportionality, and peatland aquifer." },
    { num: 2, title: "Deploy Cautious Language (Hedging) & Concessions (Grammar Clinic)", description: "Construct formal argumentation sentences using partial concessions ('While I concede that...') and causality challenges." },
    { num: 3, title: "Conduct an Oxford-Style Public Inquiry Hearing", description: "Adopt sworn witness roles in the Val-d'Or Rail Bypass controversy and execute 2-minute adversarial cross-examinations." },
    { num: 4, title: "Formulate a Legally Binding Commission Ruling", description: "Synthesize economic and ecological evidence to deliver a formal majority tribunal verdict." }
  ]
};

courseData.ag['2'].sessions['3'].lessonPlan = {
  title: "Session 3 Lesson Plan - Environmental Ethics & The Public Inquiry Hearing (2 Hours)",
  summary: "A 120-minute formal inquiry lab moving from environmental lexis to cautious argumentation clinics, witness deposition analysis, Oxford-style cross-examinations, and tribunal deliberations.",
  items: [
    { time: "00–25", title: "Pillar 1: Environmental Ethics & Inquiry Vocabulary (25 mins)", description: "Examine 8 core debate terms; complete the interactive collocation matching challenge with instant answer reveal." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Cautious Language & Concessions (25 mins)", description: "Master diplomatic hedging formulas; rewrite 4 blunt statements into formal B2 inquiry arguments with check answers." },
    { time: "50–95", title: "Pillar 3: The Val-d'Or Rail Bypass Public Inquiry Hearing (45 mins)", description: "Step-by-step: examine 4 sworn witness briefs, prepare cross-examination questions, convene the hearing, and deliver the tribunal verdict." },
    { time: "95–120", title: "Pillar 4: Argumentative Debrief & Peer Rhetorical Review (25 mins)", description: "Peer evaluation on hedging accuracy, evidence presentation, and alignment with FE2 presentation criteria." }
  ]
};

// --- SESSION 4: Airport Biodiversity & Ecological Coexistence ---
courseData.ag['2'].sessions['4'].objectives = {
  title: "Session 4 Objectives - Airport Biodiversity & Ecological Coexistence",
  summary: "By the end of this session, you will be able to evaluate airfield eco-engineering solutions, deploy modals of obligation and necessity in regulatory contexts, negotiate a multilateral 500-hectare Airport Perimeter Treaty, and complete final preparation for Formative Evaluation 2 (FE2).",
  items: [
    { num: 1, title: "Examine Airfield Eco-Engineering Technologies", description: "Analyze 8 specialized terms including meadow paradox, avian 3D radar, long-grass policy, and constructed reed beds." },
    { num: 2, title: "Master Modals of Obligation, Prohibition & Necessity (Grammar Clinic)", description: "Apply graded modal verbs ('are mandated to', 'is strictly prohibited from', 'should') in airport safety regulations." },
    { num: 3, title: "Negotiate the Tri-Party Airport Perimeter Land-Use Treaty", description: "Represent competing delegations (Flight Safety, Wildlife Trust, Clean Energy Consortium) to zone 500 hectares of perimeter land." },
    { num: 4, title: "Complete Formative Evaluation 2 (FE2) Oral Rehearsal", description: "Conduct a 2-minute timed pitch rehearsal with your partner and verify slide outline approval with your teacher." }
  ]
};

courseData.ag['2'].sessions['4'].lessonPlan = {
  title: "Session 4 Lesson Plan - Airport Biodiversity & Ecological Coexistence (2 Hours)",
  summary: "A 120-minute station-based workshop and treaty tournament combining eco-engineering lexis, regulatory modal grammar, a 3-station rotation, treaty negotiation, and FE2 oral rehearsal.",
  items: [
    { time: "00–25", title: "Pillar 1: Airfield Eco-Engineering Vocabulary (25 mins)", description: "Explore the Meadow Paradox; complete the interactive 8-term technical summary gap-fill with instant answer reveals." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Modals of Obligation & Necessity (25 mins)", description: "Study regulatory modal formulas; complete 4 interactive gap-fill exercises matching modal strength to safety rules." },
    { time: "50–95", title: "Pillar 3: Interactive Stations & Land-Use Treaty Tournament (45 mins)", description: "Step-by-step: rotate through 3 technology stations, negotiate the 500-hectare zoning treaty, and sign the Tri-Party Accord." },
    { time: "95–120", title: "Pillar 4: FE2 Oral Presentation Rehearsal & Sign-Off (25 mins)", description: "Deliver 2-minute timed partner pitch dry runs against the FE2 rubric and confirm final teacher validation." }
  ]
};

// ============================================================================
// 2. ENRICH COURSE DATA FOR AG MODULE 3 (SESSIONS 1 TO 4)
// ============================================================================

// --- SESSION 1: Everyday AI & Workplace Automation ---
courseData.ag['3'].sessions['1'].objectives = {
  title: "Session 1 Objectives - Everyday AI & Workplace Automation",
  summary: "By the end of this session, you will be able to evaluate workplace automation risks across critical operations, analyze the trade-offs between computational efficiency and cognitive deskilling, apply the Passive Voice to describe automated system actions, formulate Human-in-the-Loop (HITL) safeguards, and defend operational automation policies during a spoken town hall inquiry.",
  items: [
    { num: 1, title: "Master Machine Learning & Operational Automation Lexis", description: "Define and apply 8 essential terms including algorithmic drift, predictive telemetry, human-in-the-loop, and black-box models." },
    { num: 2, title: "Deploy Active vs. Passive Voice in Technical Descriptions (Grammar Clinic)", description: "Contrast automated system outputs ('The flight plan was recalculated') with human executive agency ('The dispatcher authorized')." },
    { num: 3, title: "Conduct an Operational Automation Vulnerability Audit", description: "Assess 6 workplace workflows using an Urgency vs. Oversight Matrix and resolve 3 dynamic crisis injects." },
    { num: 4, title: "Lead a Spoken Workplace Town Hall Scrutiny Session", description: "Deliver an authoritative operational defense of algorithmic changes and respond to tough cross-examination from frontline staff." }
  ]
};

courseData.ag['3'].sessions['1'].lessonPlan = {
  title: "Session 1 Lesson Plan - Everyday AI & Workplace Automation (2 Hours)",
  summary: "A 120-minute operational workshop moving from automation lexis to active/passive voice grammar drills, a 6-workflow vulnerability audit, Human-in-the-Loop simulation, spoken town hall scrutiny, and FE3 alignment.",
  items: [
    { time: "00–25", title: "Pillar 1: Machine Learning & Operational Automation Lexis (25 mins)", description: "Analyze 8 key AI terms; complete the interactive concept-to-consequence matching drill with check answers." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Active vs. Passive Voice in Tech (25 mins)", description: "Master passive voice in system reporting vs active voice for human responsibility; complete 4 interactive conversion drills." },
    { time: "50–95", title: "Pillar 3: Automation Vulnerability Audit & Town Hall Simulation (45 mins)", description: "Step-by-step: rank 6 critical workflows, resolve 3 dynamic crisis injects, and lead a spoken town hall defense under employee scrutiny." },
    { time: "95–120", title: "Pillar 4: Technical Phrasing Review & FE3 Alignment (25 mins)", description: "Peer review on passive voice accuracy, calibrate spoken delivery against the FE3 presentation rubric, and confirm topics." }
  ]
};

// --- SESSION 2: Future Mobility & Clean Energy Transport ---
courseData.ag['3'].sessions['2'].objectives = {
  title: "Session 2 Objectives - Future Mobility & Clean Energy Transport",
  summary: "By the end of this session, you will be able to analyze competing zero-emission transport paradigms, evaluate the infrastructure trade-offs of hydrogen aviation and urban air mobility, apply high-level B2 language of predictive certainty, and negotiate a €100M Clean Corridor blueprint against stakeholder resistance.",
  items: [
    { num: 1, title: "Compare Competing Zero-Emission Transport Paradigms", description: "Contrast decentralized regional electric aviation with high-density fixed-guideway rail across emissions, land take, and scalability." },
    { num: 2, title: "Master Future Forms & Predictive Certainty (Grammar Clinic)", description: "Deploy graded modal phrases ('is bound to', 'is slated to', 'is highly improbable that') to express technical forecasts." },
    { num: 3, title: "Lead a €100M Clean Corridor Collaborative Design Sprint", description: "Allocate €100,000,000 across 5 breakthrough propulsion and infrastructure options to transform a regional corridor by 2035." },
    { num: 4, title: "Deliver a Spoken Regional Council Investment Pitch", description: "Defend your regional clean mobility transition plan against fiscal conservatives, rural advocates, and climate skeptics." }
  ]
};

courseData.ag['3'].sessions['2'].lessonPlan = {
  title: "Session 2 Lesson Plan - Future Mobility & Clean Energy Transport (2 Hours)",
  summary: "A 120-minute visual analysis and collaborative engineering sprint comparing competing clean mobility paradigms, practicing predictive certainty grammar, budgeting €100M in regional decarbonization infrastructure, and defending transit choices.",
  items: [
    { time: "00–25", title: "Pillar 1: Clean Propulsion & Multi-Modal Transit Lexis (25 mins)", description: "Master 8 alternative propulsion terms (cryogenic hydrogen, fuel-cell, vertiport, catenary electrification) with comparative analysis." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Future Forms & Predictive Certainty (25 mins)", description: "Calibrate expressions of technical confidence; complete 4 interactive technological forecasts with instant answer check." },
    { time: "50–95", title: "Pillar 3: Comparative Showcase & €100M Design Sprint (45 mins)", description: "Step-by-step: analyze comparative transit models, allocate €100M across 5 options, script stakeholder rebuttals, and pitch to the Council." },
    { time: "95–120", title: "Pillar 4: Council Vote & Feasibility Review (25 mins)", description: "Class votes on the most resilient corridor blueprint; peer feedback on predictive grammar and spoken persuasion." }
  ]
};

// --- SESSION 3: Technology Ethics & Automated Decisions in AI ---
courseData.ag['3'].sessions['3'].objectives = {
  title: "Session 3 Objectives - Technology Ethics & Automated Decisions in AI",
  summary: "By the end of this session, you will be able to analyze ethical dilemmas surrounding predictive AI and algorithmic surveillance, cross-examine technical witness depositions under EU AI Act standards, deploy complex conjunctions and concessive clauses, and deliver a formal public inquiry verdict.",
  items: [
    { num: 1, title: "Master AI Ethics & Regulatory Governance Lexis", description: "Define and apply 8 essential terms including biometric profiling, black-box model, false-positive rate, and conformity assessment." },
    { num: 2, title: "Deploy Complex Conjunctions & Concessive Clauses (Grammar Clinic)", description: "Construct formal legal debate sentences using 'notwithstanding', 'inasmuch as', 'whereas', and 'even if'." },
    { num: 3, title: "Conduct an Oxford-Style Public Inquiry Hearing (Project Argus-Eye)", description: "Adopt sworn witness roles in an automated border surveillance controversy and execute formal cross-examinations." },
    { num: 4, title: "Deliver a Legally Binding Commission Ruling", description: "Balance European homeland security mandates against fundamental civil privacy rights to issue a formal majority ruling." }
  ]
};

courseData.ag['3'].sessions['3'].lessonPlan = {
  title: "Session 3 Lesson Plan - Technology Ethics & Automated Decisions in AI (2 Hours)",
  summary: "A 120-minute Oxford-style regulatory inquiry examining biometric surveillance, predictive profiling, complex concessive grammar, sworn witness depositions, and tribunal deliberations under the EU AI Act.",
  items: [
    { time: "00–25", title: "Pillar 1: AI Ethics & Regulatory Governance Lexis (25 mins)", description: "Classify AI systems into EU AI Act risk tiers; complete the interactive 8-term ethical vocabulary drill with check answers." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Complex Conjunctions & Concessions (25 mins)", description: "Master high-level formal debate syntax; combine 4 pairs of arguments using concessive clauses with instant solution reveal." },
    { time: "50–95", title: "Pillar 3: The Project Argus-Eye Public Inquiry Hearing (45 mins)", description: "Step-by-step: analyze witness depositions, prepare targeted cross-examination challenges, convene the hearing, and deliver the verdict." },
    { time: "95–120", title: "Pillar 4: Regulatory Debrief & Argument Evaluation (25 mins)", description: "Peer review on argumentative rigor, formal register, and alignment with FE3 presentation standards." }
  ]
};

// --- SESSION 4: Biometrics, Digital IDs & Passenger Journey ---
courseData.ag['3'].sessions['4'].objectives = {
  title: "Session 4 Objectives - Biometrics, Digital IDs & Passenger Journey",
  summary: "By the end of this session, you will be able to analyze seamless airport passenger processing technologies, evaluate data sovereignty and cryptographic security safeguards, deploy defining and non-defining relative clauses with precision, negotiate a multilateral Passenger Rights & Biometric Sovereignty Treaty, and calibrate your speaking performance for the Session 5 Formative Evaluation 3 (FE3).",
  items: [
    { num: 1, title: "Master Biometric & Cryptographic Security Lexis", description: "Define and apply 8 specialized terms including zero-knowledge proof, cryptographic hash, hardware enclave, and data sovereignty." },
    { num: 2, title: "Master Defining vs. Non-Defining Relative Clauses (Grammar Clinic)", description: "Punctuate and construct precision technical sentences with relative pronouns ('which', 'who', 'whose', 'wherein')." },
    { num: 3, title: "Negotiate the Tri-Party Passenger Biometric Charter", description: "Represent competing delegations (Border Agencies, Passenger Advocacy Groups, Cybersecurity Regulators) to ratify a binding operational treaty." },
    { num: 4, title: "Execute Formative Evaluation 3 (FE3) Full Rehearsal", description: "Deliver a 2-minute timed presentation pitch rehearsal with your partner against the official FE3 scoring rubric." }
  ]
};

courseData.ag['3'].sessions['4'].lessonPlan = {
  title: "Session 4 Lesson Plan - Biometrics, Digital IDs & Passenger Journey (2 Hours)",
  summary: "A 120-minute station-based workshop and treaty tournament combining cryptographic lexis, relative clause grammar, a 3-station technology rotation, treaty negotiation, and FE3 presentation dry runs.",
  items: [
    { time: "00–25", title: "Pillar 1: Biometric & Cryptographic Security Lexis (25 mins)", description: "Trace the cryptographic passenger journey; complete the interactive 8-term data-flow ordering exercise with check answers." },
    { time: "25–50", title: "Pillar 2: Grammar Clinic • Relative Clauses & Precision (25 mins)", description: "Master comma placement and relative pronouns; complete 4 interactive sentence combination drills with instant solution reveal." },
    { time: "50–95", title: "Pillar 3: Interactive Stations & Biometric Charter Tournament (45 mins)", description: "Step-by-step: rotate through 3 technology stations, negotiate the 5-point Passenger Charter, and ratify the international treaty." },
    { time: "95–120", title: "Pillar 4: FE3 Final Presentation Rehearsal & Sign-Off (25 mins)", description: "2-minute timed partner pitch dry runs against the FE3 rubric and final teacher validation of slide decks and topic outlines." }
  ]
};

// ============================================================================
// 3. WRITE UPDATED COURSE DATA WITH INTACT UMD WRAPPER
// ============================================================================

const umdHeader = `/**
 * GSEA Semester 1 - General English & Technical English (AT)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const courseData = `;

const umdFooter = `;

  return courseData;
});
`;

fs.writeFileSync(courseDataPath, umdHeader + JSON.stringify(courseData, null, 2) + umdFooter, 'utf8');
console.log('✓ Successfully wrote enriched course data with intact UMD wrapper to data/course-data.js');

