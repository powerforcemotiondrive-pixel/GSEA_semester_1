#!/usr/bin/env node
/**
 * scripts/apply-plain-english-ag.js
 * Retires all academic jargon (lexis, operational automation, etc.)
 * in favor of plain B1/B2 English across AG Modules 2 & 3.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');

console.log('🔄 Loading course-data.js...');
const courseData = require(courseDataPath);

// ==========================================
// 1. UPDATE COURSE-DATA FOR AG MODULE 2 & 3
// ==========================================

const agUpdates = {
  "2": {
    "1": {
      objectives: {
        title: "Session 1 Objectives - Extreme Weather & Urban Climate Resilience",
        summary: "By the end of this session, you will be able to discuss severe weather news, use 'if' sentences to talk about weather risks, work in a team to protect city services during a storm, and give a short spoken update to the public.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Severe Weather & Storms", description: "Learn 8 useful words for heavy rain, heatwaves, flooding, and storm damage." },
          { num: 2, title: "Grammar Focus: 'If' Sentences for Weather Warnings", description: "Practice 1st and 2nd conditionals to talk about weather emergencies ('If winds exceed 100 km/h...')." },
          { num: 3, title: "Speaking Activity: City Emergency Taskforce", description: "Work in pairs to choose which city services (hospitals, trains, electricity) to protect first." },
          { num: 4, title: "Speaking Practice: Emergency Public Update", description: "Give a short, clear public safety broadcast and answer questions from classmates." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Extreme Weather & Storms", description: "Learn 8 essential weather words, check syllable stress, and complete the matching challenge.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • 'If' Sentences for Weather Warnings", description: "Spot the common speaking mistake, learn the clean B2 model, and complete 4 transformation sentences.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • City Emergency Taskforce", description: "Work with a partner to rank 6 city threats and respond to unexpected weather alerts.", part: "Part 3" },
        { title: "Part 4: Speaking Review & Discussion Feedback", description: "Check your pronunciation, give your partner speaking feedback, and prepare for FE2.", part: "Part 4" }
      ]
    },
    "2": {
      objectives: {
        title: "Session 2 Objectives - The 15-Minute Resilient City Blueprint",
        summary: "By the end of this session, you will be able to describe city neighborhoods and public transport, use prepositions of place and relative clauses, redesign a busy street in a group, and present your ideas to the class.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: City Design & Streets", description: "Learn 8 useful words for pedestrian areas, green spaces, bike lanes, and urban living." },
          { num: 2, title: "Grammar Focus: Describing Places & Locations", description: "Use prepositions ('adjacent to', 'within walking distance') and relative clauses ('where', 'which') with precision." },
          { num: 3, title: "Speaking Activity: Redesigning the City Center", description: "Look at two street photos, debate traffic vs. walking areas, and choose how to spend a €50M budget." },
          { num: 4, title: "Speaking Practice: Presenting City Ideas to the Council", description: "Present your redesigned street plan to the class and vote on the best design." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • City Design & Streets", description: "Learn 8 city architecture words, check syllable stress, and complete the photo matching challenge.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Describing Places & Locations", description: "Review spatial prepositions and relative pronouns; complete 4 sentence combination drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • Redesigning the City Center", description: "Compare the Barcelona Superblock to car sprawl, allocate the €50M budget, and answer resident questions.", part: "Part 3" },
        { title: "Part 4: Spoken City Council Pitch & Group Vote", description: "Deliver a short spoken pitch to the council panel and vote on the most livable project.", part: "Part 4" }
      ]
    },
    "3": {
      objectives: {
        title: "Session 3 Objectives - Environmental Ethics & The Public Inquiry Hearing",
        summary: "By the end of this session, you will be able to discuss environmental questions, express polite opinions and disagreement, participate in a mock public hearing, and evaluate arguments with a partner.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Environment & Public Debates", description: "Learn 8 useful words for environmental protection, construction projects, and community hearings." },
          { num: 2, title: "Grammar Focus: Expressing Opinions & Polite Disagreement", description: "Use polite and cautious phrases ('It seems likely that...', 'While I understand your point, I believe...')." },
          { num: 3, title: "Speaking Activity: The New Railway Public Debate", description: "Role-play a debate between rail engineers, environmentalists, local residents, and government officials." },
          { num: 4, title: "Speaking Practice: Asking Questions & Defending Your View", description: "Cross-examine witnesses, defend your position, and deliver a fair final decision." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Environment & Public Debates", description: "Learn 8 debate words, check syllable stress, and complete the matching challenge.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Expressing Opinions & Polite Disagreement", description: "Master cautious language ('hedging') and polite disagreement; complete 4 rephrasing drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • The New Railway Public Debate", description: "Role-play the Val-d'Or Rail Bypass hearing with sworn witness statements and cross-examination.", part: "Part 3" },
        { title: "Part 4: Speaking Review & Discussion Feedback", description: "Evaluate who made the most convincing argument and review tips for your speaking exam.", part: "Part 4" }
      ]
    },
    "4": {
      objectives: {
        title: "Session 4 Objectives - Airport Biodiversity & Ecological Coexistence",
        summary: "By the end of this session, you will be able to discuss wildlife management near airports, use modal verbs for rules and obligations, negotiate a land agreement in a group, and rehearse for your speaking evaluation.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Airport Nature & Wildlife", description: "Learn 8 useful words for bird hazard control, wildlife habitats, and airport green zones." },
          { num: 2, title: "Grammar Focus: Rules & Obligations (Must, Should, Have to)", description: "Express clear rules and safety requirements using modal verbs of obligation and necessity." },
          { num: 3, title: "Speaking Activity: The Airport & Wildlife Agreement", description: "Work in teams to negotiate an agreement between airport directors, biologists, and local farmers." },
          { num: 4, title: "Speaking Practice: FE2 Presentation Rehearsal", description: "Rehearse a 2-minute presentation with a partner and review the official evaluation criteria." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Airport Nature & Wildlife", description: "Learn 8 airport ecology terms, check syllable stress, and complete the matching drill.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Rules & Obligations (Must, Should, Have to)", description: "Practice modals of obligation, prohibition, and advice; complete 4 sentence transformation drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • The Airport & Wildlife Agreement", description: "Rotate through 3 airport stations, negotiate the 4-point ecological agreement, and ratify the accord.", part: "Part 3" },
        { title: "Part 4: Speaking Practice & FE2 Preparation", description: "Timed 2-minute presentation rehearsal with your partner against the official FE2 scoring criteria.", part: "Part 4" }
      ]
    }
  },

  "3": {
    "1": {
      objectives: {
        title: "Session 1 Objectives - Everyday AI & Workplace Automation",
        summary: "By the end of this session, you will be able to discuss computers and AI in the workplace, describe automated tasks using the passive voice, solve practical workplace automation problems with a partner, and answer challenging questions during a group meeting.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: AI & Computers in the Workplace", description: "Learn 8 useful words including machine learning, automated checks, human supervision, and data drift." },
          { num: 2, title: "Grammar Focus: Active & Passive Sentences in Tech", description: "Contrast automated system actions ('The flight was re-routed') with human decisions ('The manager approved')." },
          { num: 3, title: "Speaking Activity: Workplace Meeting: Using AI at Work", description: "Review 6 workplace situations where computers make decisions and set clear rules for human supervision." },
          { num: 4, title: "Speaking Practice: Answering Tough Questions About Technology", description: "Present your team's rules for safe AI use and answer skeptical questions from colleagues." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • AI & Computers in the Workplace", description: "Learn 8 technology terms, check pronunciation and syllable stress, and complete the matching challenge.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Active & Passive Sentences in Tech", description: "Spot the passive voice trap, study the clean B2 model, and complete 4 transformation sentences.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • Workplace Meeting: Using AI at Work", description: "Audit 6 workplace workflows, decide when humans must intervene, and resolve 3 live problem injects.", part: "Part 3" },
        { title: "Part 4: Speaking Practice & Discussion Review", description: "Present your AI safety rules to colleagues, answer tough questions, and prepare for FE3.", part: "Part 4" }
      ]
    },
    "2": {
      objectives: {
        title: "Session 2 Objectives - Future Mobility & Clean Energy Transport",
        summary: "By the end of this session, you will be able to discuss electric vehicles and clean energy transport, express degrees of certainty about the future (will, might, probably), plan a zero-emission transport route with a partner, and present your plan to the class.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Electric Vehicles & Future Transport", description: "Learn 8 useful words for electric aircraft, battery charging hubs, hydrogen power, and clean cities." },
          { num: 2, title: "Grammar Focus: Talking About the Future (Will, Might, Going to)", description: "Express future certainty and probability accurately ('will definitely', 'is likely to', 'might')." },
          { num: 3, title: "Speaking Activity: Planning a Green Transport Route", description: "Work in a team with €100M to design a clean travel connection between an airport and a city center." },
          { num: 4, title: "Speaking Practice: Presenting a Green Transport Idea", description: "Present your green travel route to the class and vote on the most realistic project." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Electric Vehicles & Future Transport", description: "Learn 8 clean energy terms, check syllable stress, and complete the transport matching drill.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Talking About the Future (Will, Might, Going to)", description: "Master predictive certainty and future probability; complete 4 sentence rephrasing drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • Planning a Green Transport Route", description: "Compare 3 clean vehicles, design the €100M transport route, and resolve 3 stakeholder challenges.", part: "Part 3" },
        { title: "Part 4: Group Presentation & Project Review", description: "Deliver a 3-minute group presentation to the council and review tips for your speaking exam.", part: "Part 4" }
      ]
    },
    "3": {
      objectives: {
        title: "Session 3 Objectives - Technology Ethics & Automated Decisions in AI",
        summary: "By the end of this session, you will be able to discuss technology ethics and digital privacy, use linking words to connect contrasting ideas, participate in a public hearing about smart cameras, and agree on fair technology rules.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Technology Ethics & Digital Privacy", description: "Learn 8 useful words for privacy protection, facial scans, unfair bias, and transparency." },
          { num: 2, title: "Grammar Focus: Linking Words (Although, However, In spite of)", description: "Connect contrasting points smoothly in discussions ('Although the technology is fast, we must...')." },
          { num: 3, title: "Speaking Activity: Public Hearing: Smart Cameras in Public", description: "Role-play a debate between police chiefs, software companies, privacy advocates, and passengers." },
          { num: 4, title: "Speaking Practice: Evaluating Arguments & Making Fair Rules", description: "Cross-examine speakers, defend your view, and decide which rules to enforce." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Technology Ethics & Digital Privacy", description: "Learn 8 digital ethics terms, check syllable stress, and complete the definition matching challenge.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Linking Words (Although, However, In spite of)", description: "Master contrast conjunctions and commas; complete 4 sentence combination drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • Public Hearing: Smart Cameras in Public", description: "Participate in the Project Argus-Eye hearing, give sworn witness testimony, and cross-examine.", part: "Part 3" },
        { title: "Part 4: Discussion Review & Argument Evaluation", description: "Weigh privacy vs. safety arguments and review speaking feedback with your partner.", part: "Part 4" }
      ]
    },
    "4": {
      objectives: {
        title: "Session 4 Objectives - Biometrics, Digital IDs & Passenger Journey",
        summary: "By the end of this session, you will be able to explain how digital passports and biometric airport gates work, use relative clauses to define technical equipment, negotiate passenger rights in a team, and rehearse for your final presentation.",
        items: [
          { num: 1, title: "Learn Key Vocabulary: Passports, Face Scans & Digital Travel", description: "Learn 8 useful words for digital passports, walkthrough gates, face recognition, and data privacy." },
          { num: 2, title: "Grammar Focus: Relative Clauses (Who, Which, That, Where)", description: "Define equipment and procedures accurately using defining and non-defining relative clauses." },
          { num: 3, title: "Speaking Activity: Agreeing on Airport Passenger Rules", description: "Work in a team to negotiate an international passenger charter on biometric data and opt-out rights." },
          { num: 4, title: "Speaking Practice: FE3 Final Presentation Practice & Sign-Off", description: "Deliver a timed 2-minute partner presentation dry run against the official FE3 scoring rubric." }
        ]
      },
      lessonPlanItems: [
        { title: "Part 1: Key Vocabulary • Passports, Face Scans & Digital Travel", description: "Learn 8 digital travel words, check syllable stress, and complete the passenger step drill.", part: "Part 1" },
        { title: "Part 2: Grammar Focus • Relative Clauses (Who, Which, That, Where)", description: "Master relative pronouns and comma placement; complete 4 sentence combination drills.", part: "Part 2" },
        { title: "Part 3: Speaking Activity • Agreeing on Airport Passenger Rules", description: "Rotate through 3 travel technology stations and negotiate the 5-point passenger charter.", part: "Part 3" },
        { title: "Part 4: FE3 Final Presentation Practice & Sign-Off", description: "Deliver a timed 2-minute presentation dry run with your partner against the official FE3 criteria.", part: "Part 4" }
      ]
    }
  }
};

// Apply to courseData.ag and top-level 2 & 3
for (const m of ["2", "3"]) {
  for (const s of ["1", "2", "3", "4"]) {
    const upd = agUpdates[m][s];
    if (courseData.ag[m] && courseData.ag[m].sessions[s]) {
      courseData.ag[m].sessions[s].objectives = upd.objectives;
      courseData.ag[m].sessions[s].lessonPlan.items = upd.lessonPlanItems;
    }
    if (courseData[m] && courseData[m].sessions && courseData[m].sessions[s]) {
      courseData[m].sessions[s].objectives = upd.objectives;
      courseData[m].sessions[s].lessonPlan.items = upd.lessonPlanItems;
    }
  }
}

// Serialize with UMD wrapper intact
const header = `/**
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

const footer = `;

  return courseData;
});
`;

fs.writeFileSync(courseDataPath, header + JSON.stringify(courseData, null, 2) + footer, 'utf8');
console.log('✓ Successfully updated data/course-data.js with plain B1/B2 English.');

// Pre-flight VM test
const context = { window: {}, self: {} };
context.self = context;
context.window = context;
vm.runInNewContext(fs.readFileSync(courseDataPath, 'utf8'), context);

if (context.window.COURSE_DATA && context.window.COURSE_DATA.ag) {
  console.log('✓ Pre-flight VM test passed: window.COURSE_DATA.ag verified.');
} else {
  console.error('❌ Fatal error: window.COURSE_DATA failed to initialize in VM!');
  process.exit(1);
}

// ==========================================
// 2. UPDATE TEMPLATES 06 AND 07
// ==========================================

const ag2Path = path.join(rootDir, 'src', 'js', '06-templates-ag2.js');
let ag2 = fs.readFileSync(ag2Path, 'utf8');

// Strip old 120 Minutes banners and replace headers
ag2 = ag2
  .replace(/<span>120 Minutes \(Vocabulary • Grammar • Simulation • Debrief\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(Visual Analysis • Budgeting • Council Pitch\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(Inquiry Lexis • Hedging Clinic • Cross-Exam Hearing\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(Eco-Tech Lexis • Regulatory Modals • Treaty Ratification\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  // Headers
  .replace(/Part 1: Severe Weather & Disaster Vulnerability Lexis/g, 'Part 1: Key Vocabulary • Extreme Weather & Storms')
  .replace(/Part 2: Grammar Clinic • Conditionals in Emergency Risk/g, "Part 2: Grammar Focus • 'If' Sentences for Weather Warnings")
  .replace(/Part 3: Civic Emergency Taskforce Simulation/g, 'Part 3: Speaking Activity • City Emergency Taskforce')
  .replace(/Part 4: Consolidation & Spoken Peer Feedback:/g, 'Part 4: Speaking Review & Discussion Feedback:')
  
  .replace(/Part 1: Urban Architecture & Spatial Vocabulary/g, 'Part 1: Key Vocabulary • City Design & Streets')
  .replace(/Part 2: Grammar Clinic • Spatial Prepositions & Relative Clauses/g, 'Part 2: Grammar Focus • Describing Places & Locations')
  .replace(/Part 3: Visual Photo Analysis & €50M Collaborative Design Sprint/g, 'Part 3: Speaking Activity • Redesigning the City Center')
  .replace(/Part 4: Spoken Council Pitch & Peer Vote:/g, 'Part 4: Spoken City Council Pitch & Group Vote:')

  .replace(/Part 1: Environmental Ethics & Inquiry Vocabulary/g, 'Part 1: Key Vocabulary • Environment & Public Debates')
  .replace(/Part 2: Grammar Clinic • Cautious Language \(Hedging\) & Concessions/g, 'Part 2: Grammar Focus • Expressing Opinions & Polite Disagreement')
  .replace(/Part 3: The Val-d'Or Rail Bypass Public Inquiry Hearing/g, 'Part 3: Speaking Activity • The New Railway Public Debate')
  .replace(/Part 4: Argumentative Debrief & Peer Review:/g, 'Part 4: Speaking Review & Discussion Feedback:')

  .replace(/Part 1: Airfield Eco-Engineering Vocabulary/g, 'Part 1: Key Vocabulary • Airport Nature & Wildlife')
  .replace(/Part 2: Grammar Clinic • Modals of Obligation, Prohibition & Necessity/g, 'Part 2: Grammar Focus • Rules & Obligations (Must, Should, Have to)')
  .replace(/Part 3: Interactive Stations & Land-Use Treaty Tournament/g, 'Part 3: Speaking Activity • The Airport & Wildlife Agreement')
  .replace(/Part 4: Formative Evaluation 2 \(FE2\) Oral Rehearsal:/g, 'Part 4: Speaking Practice & FE2 Preparation:');

fs.writeFileSync(ag2Path, ag2, 'utf8');
console.log('✓ Successfully updated src/js/06-templates-ag2.js with plain B1/B2 titles.');

const ag3Path = path.join(rootDir, 'src', 'js', '07-templates-ag3.js');
let ag3 = fs.readFileSync(ag3Path, 'utf8');

ag3 = ag3
  .replace(/<span>120 Minutes \(AI Lexis • Passive Voice • Town Hall Defense\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(Propulsion Lexis • Future Modals • Council Pitch\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(AI Ethics Lexis • Concessive Syntax • Tribunal Hearing\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  .replace(/<span>120 Minutes \(Biometric Lexis • Relative Clauses • FE3 Pitch Dry Run\)<\/span>/g, '<span>General English • B1/B2 Speaking Workshop</span>')
  // Headers
  .replace(/Part 1: Machine Learning & Operational Automation Lexis/g, 'Part 1: Key Vocabulary • AI & Computers in the Workplace')
  .replace(/Part 2: Grammar Clinic • Active vs\. Passive Voice in Tech/g, 'Part 2: Grammar Focus • Active & Passive Sentences in Tech')
  .replace(/Part 3: Automation Vulnerability Audit & Town Hall Simulation/g, 'Part 3: Speaking Activity • Workplace Meeting: Using AI at Work')
  .replace(/Part 4: Phrasing Review & FE3 Alignment:/g, 'Part 4: Speaking Practice & Discussion Review:')

  .replace(/Part 1: Clean Propulsion & Multi-Modal Transit Lexis/g, 'Part 1: Key Vocabulary • Electric Vehicles & Future Transport')
  .replace(/Part 2: Grammar Clinic • Future Forms & Predictive Certainty/g, 'Part 2: Grammar Focus • Talking About the Future (Will, Might, Going to)')
  .replace(/Part 3: Comparative Showcase & €100M Clean Corridor Sprint/g, 'Part 3: Speaking Activity • Planning a Green Transport Route')
  .replace(/Part 4: Council Vote & Feasibility Review:/g, 'Part 4: Group Presentation & Project Review:')

  .replace(/Part 1: AI Ethics & Regulatory Governance Lexis/g, 'Part 1: Key Vocabulary • Technology Ethics & Digital Privacy')
  .replace(/Part 2: Grammar Clinic • Complex Conjunctions & Concessions/g, 'Part 2: Grammar Focus • Linking Words (Although, However, In spite of)')
  .replace(/Part 3: The Project Argus-Eye Public Inquiry Hearing/g, 'Part 3: Speaking Activity • Public Hearing: Smart Cameras in Public')
  .replace(/Part 4: Regulatory Debrief & Argument Evaluation:/g, 'Part 4: Discussion Review & Argument Evaluation:')

  .replace(/Part 1: Biometric & Cryptographic Security Lexis/g, 'Part 1: Key Vocabulary • Passports, Face Scans & Digital Travel')
  .replace(/Part 2: Grammar Clinic • Relative Clauses & Technical Precision/g, 'Part 2: Grammar Focus • Relative Clauses (Who, Which, That, Where)')
  .replace(/Part 3: Interactive Stations & Passenger Charter Tournament/g, 'Part 3: Speaking Activity • Agreeing on Airport Passenger Rules')
  .replace(/Part 4: Formative Evaluation 3 \(FE3\) Oral Rehearsal:/g, 'Part 4: FE3 Final Presentation Practice & Sign-Off:');

fs.writeFileSync(ag3Path, ag3, 'utf8');
console.log('✓ Successfully updated src/js/07-templates-ag3.js with plain B1/B2 titles.');
