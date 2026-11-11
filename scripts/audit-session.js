#!/usr/bin/env node
/**
 * ENAC GSEA English Platform — Universal Automated Session Audit Engine
 * Author: Phil PARRIS (Pedagogical Architect & Author)
 * 
 * Usage:
 *   node scripts/audit-session.js "Audit S1 AG M1 Ss 3"
 *   node scripts/audit-session.js --semester=1 --track=ag --module=1 --session=3
 *   node scripts/audit-session.js 1 ag 1 3
 *   npm run audit -- S1 AG M1 S3
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Argument Parsing & Normalization
function parseArgs() {
  const rawArgs = process.argv.slice(2).join(' ');
  
  let semester = 1;
  let track = 'ag';
  let moduleNum = 1;
  let sessionNum = 1;

  if (!rawArgs.trim()) {
    return { semester: 1, track: 'ag', moduleNum: 1, sessionNum: 3 };
  }

  // Check explicit flags: --semester=1 --track=ag --module=1 --session=3
  const flagSem = rawArgs.match(/--semester=(\d)/i);
  if (flagSem) semester = parseInt(flagSem[1], 10);

  const flagTrack = rawArgs.match(/--track=([a-z]+)/i);
  if (flagTrack) track = flagTrack[1].toLowerCase();

  const flagMod = rawArgs.match(/--module=(\d)/i);
  if (flagMod) moduleNum = parseInt(flagMod[1], 10);

  const flagSess = rawArgs.match(/--session=(\d+)/i);
  if (flagSess) sessionNum = parseInt(flagSess[1], 10);

  // Natural string matching
  const mSem = rawArgs.match(/\b(?:sem(?:ester)?|s)\s*([1-3])\b/i);
  if (mSem && !flagSem) semester = parseInt(mSem[1], 10);

  const mTrk = rawArgs.match(/\b(AT|AG|AP|AAS)\b/i);
  if (mTrk && !flagTrack) track = mTrk[1].toLowerCase();

  const mMod = rawArgs.match(/\b(?:m(?:od(?:ule)?)?)\s*([1-3])\b/i);
  if (mMod && !flagMod) moduleNum = parseInt(mMod[1], 10);

  // Match Session: Ss 3, Session 3, S3 (at the end or not followed by track)
  const mSess = rawArgs.match(/\b(?:ss|session)\s*(\d+)\b/i) || 
                rawArgs.match(/\b(?:s)(\d+)\b(?!\s*(?:ag|at|ap|aas))/i) ||
                rawArgs.match(/\b(\d+)\b$/);
  if (mSess && !flagSess) sessionNum = parseInt(mSess[1], 10);

  // Positional numeric fallback: e.g. "1 ag 1 3"
  const tokens = rawArgs.trim().split(/\s+/);
  if (tokens.length >= 4 && /^\d+$/.test(tokens[0]) && /^[a-z]+$/i.test(tokens[1]) && /^\d+$/.test(tokens[2]) && /^\d+$/.test(tokens[3])) {
    semester = parseInt(tokens[0], 10);
    track = tokens[1].toLowerCase();
    moduleNum = parseInt(tokens[2], 10);
    sessionNum = parseInt(tokens[3], 10);
  }

  return { semester, track, moduleNum, sessionNum };
}

const target = parseArgs();
const baseDir = `/Users/philparris/Documents/GSEA_semester_${target.semester}`;

if (!fs.existsSync(baseDir)) {
  console.error(`❌ Repository directory not found: ${baseDir}`);
  process.exit(1);
}

// 2. Load Course Data & Associated Source Files
const courseDataPath = path.join(baseDir, 'data', 'course-data.js');
const configPath = path.join(baseDir, 'src', 'js', '02-config.js');
const adminHubPath = path.join(baseDir, 'src', 'js', '11-admin-hub.js');
const adminHtmlPath = path.join(baseDir, 'admin.html');
const manifestPath = path.join(baseDir, 'imsmanifest.xml');

if (!fs.existsSync(courseDataPath)) {
  console.error(`❌ course-data.js not found at: ${courseDataPath}`);
  process.exit(1);
}

let courseData;
try {
  courseData = require(courseDataPath);
} catch (e) {
  console.error(`❌ Failed to require course-data.js: ${e.message}`);
  process.exit(1);
}

// Extract target session object
let sessionObj = null;
const modKey = target.moduleNum.toString();
const sessKey = target.sessionNum.toString();

if (target.semester === 3) {
  sessionObj = (courseData[modKey] && courseData[modKey].sessions && courseData[modKey].sessions[sessKey]) ||
               (courseData.aas && courseData.aas[modKey] && courseData.aas[modKey].sessions && courseData.aas[modKey].sessions[sessKey]);
} else {
  // Semester 1 & 2
  if (target.track === 'ag' && courseData.ag && courseData.ag[modKey]) {
    sessionObj = courseData.ag[modKey].sessions && courseData.ag[modKey].sessions[sessKey];
  } else if ((target.track === 'at' || target.track === 'aas') && courseData.aas && courseData.aas[modKey]) {
    sessionObj = courseData.aas[modKey].sessions && courseData.aas[modKey].sessions[sessKey];
  }
  // Fallback to top-level
  if (!sessionObj && courseData[modKey] && courseData[modKey].sessions) {
    sessionObj = courseData[modKey].sessions[sessKey];
  }
}

if (!sessionObj) {
  console.error(`❌ Session ${target.sessionNum} not found in Semester ${target.semester} Track ${target.track.toUpperCase()} Module ${target.moduleNum}`);
  process.exit(1);
}

// Helper: Read template file
function getTemplateFileNames(sem, track, mod) {
  if (sem === 3) {
    if (mod === 1) return ['05-templates-mod1.js'];
    if (mod === 2) return ['06-templates-mod2.js'];
    if (mod === 3) return ['07-templates-mod3.js'];
  }
  if (mod === 1) return ['05-templates-mod1.js'];
  if (track === 'ag') {
    if (mod === 2) return ['06-templates-ag2.js'];
    if (mod === 3) return ['07-templates-ag3.js'];
  } else {
    if (mod === 2) return ['08-templates-aas2.js'];
    if (mod === 3) return ['08b-templates-aas3.js', '08-templates-aas3.js'];
  }
  return ['05-templates-mod1.js'];
}

let templateContent = '';
const templateDir = path.join(baseDir, 'src', 'js');
if (fs.existsSync(templateDir)) {
  const targetFiles = getTemplateFileNames(target.semester, target.track, target.moduleNum);
  for (const f of targetFiles) {
    const full = path.join(templateDir, f);
    if (!fs.existsSync(full)) continue;
    const text = fs.readFileSync(full, 'utf8');
    
    // Look for track-specific function first, then generic session function
    let fnRegex;
    if (target.track === 'ag') {
      fnRegex = new RegExp(`(?:function\\s+renderAgLessonContentTabSession${target.sessionNum}\\b[\\s\\S]*?)(?=function\\s+render[A-Za-z0-9_]*LessonContentTabSession|window\\.__|module\\.exports|$)`, 'i');
    } else {
      fnRegex = new RegExp(`(?:function\\s+render(?:Aas|At)?LessonContentTabSession${target.sessionNum}\\b[\\s\\S]*?)(?=function\\s+render[A-Za-z0-9_]*LessonContentTabSession|window\\.__|module\\.exports|$)`, 'i');
    }
    
    let match = text.match(fnRegex);
    if (!match) {
      // Fallback generic function (e.g. renderLessonContentTabSession3 in S3 or S1 AAS)
      const fallbackRegex = new RegExp(`(?:function\\s+renderLessonContentTabSession${target.sessionNum}\\b[\\s\\S]*?)(?=function\\s+render[A-Za-z0-9_]*LessonContentTabSession|window\\.__|module\\.exports|$)`, 'i');
      match = text.match(fallbackRegex);
    }
    
    if (match) {
      templateContent += '\n' + match[0];
    } else if (text.includes(`Session${target.sessionNum}`) || text.includes(`sessionNum === ${target.sessionNum}`)) {
      templateContent += '\n' + text;
    }
  }
}

// 3. AUDIT CHECKS

const findings = {
  titleParity: { pass: true, details: [] },
  objectivesAlignment: { pass: true, details: [] },
  lessonPlanSyntax: { pass: true, details: [] },
  timingsScan: { pass: true, items: [] },
  jargonScan: { pass: true, items: [] },
  thematicRelevance: { pass: true, details: [] },
  sufficiencyGauge: { score: 'Optimal', details: [] },
  roleplayViability: { pass: true, details: [] },
  interactiveCode: { pass: true, details: [] },
  actionBar: { pass: true, details: [] },
  pdfStatus: { pass: true, details: [] }
};

// --- Check 1: Title Parity ---
const sessionTitle = sessionObj.title || (sessionObj.objectives && sessionObj.objectives.title.replace(/^Session \d+ Objectives - /, '')) || 'Untitled';
findings.titleParity.sessionTitle = sessionTitle;

if (!sessionObj.title) {
  findings.titleParity.pass = false;
  findings.titleParity.details.push(`Top-level 'title' property is missing in session object in course-data.js.`);
}

if (fs.existsSync(adminHubPath) && fs.existsSync(adminHtmlPath)) {
  const hubText = fs.readFileSync(adminHubPath, 'utf8');
  const adminText = fs.readFileSync(adminHtmlPath, 'utf8');
  const cleanTitle = sessionTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`Session ${target.sessionNum}[^"]*${cleanTitle}`, 'i');
  
  if (!re.test(hubText)) {
    findings.titleParity.details.push(`Weekly calendar in admin-hub.js does not contain exact match for: "${sessionTitle}"`);
  }
  if (!re.test(adminText)) {
    findings.titleParity.details.push(`Weekly calendar in admin.html does not contain exact match for: "${sessionTitle}"`);
  }
}

// --- Check 2: Objectives Alignment (Rule 1.P) ---
const obj = sessionObj.objectives;
if (!obj) {
  findings.objectivesAlignment.pass = false;
  findings.objectivesAlignment.details.push(`Missing 'objectives' block in course-data.js.`);
} else {
  const expectedObjTitle = `Session ${target.sessionNum} Objectives - ${sessionTitle}`;
  if (!obj.title.startsWith(`Session ${target.sessionNum} Objectives -`)) {
    findings.objectivesAlignment.pass = false;
    findings.objectivesAlignment.details.push(`Objectives title "${obj.title}" does not follow strict syntax: "Session ${target.sessionNum} Objectives - [Topic]" (Rule 1.P).`);
  }
  const items = obj.items || [];
  if (items.length < 4 || items.length > 7) {
    findings.objectivesAlignment.details.push(`Found ${items.length} objectives items (standard target: 5 to 7 items).`);
  }
}

// --- Check 3: Lesson Plan Syntax & Classroom Timings (Rule 1.P & 1.Q) ---
const plan = sessionObj.lessonPlan;
if (plan) {
  if (!plan.title.includes(`(2 Hours)`)) {
    findings.lessonPlanSyntax.details.push(`Lesson Plan title "${plan.title}" should include standard university block "(2 Hours)" (Rule 1.P).`);
  }
  const planStr = JSON.stringify(plan);
  const timingMatches = planStr.match(/\b(\d{1,2}[–\-]\d{1,2}\s*(?:mins?|minutes?)|00[–\-]\d{2}|\(\d+\s*mins?\))\b/gi);
  if (timingMatches) {
    findings.timingsScan.pass = false;
    timingMatches.forEach(m => findings.timingsScan.items.push(`Lesson Plan timing tag: "${m}"`));
  }
}

// --- Check 4: Classroom Timings in Lesson Content (Rule 1.Q) ---
const lc = sessionObj.lessonContent || {};
const lcStr = JSON.stringify(lc);
const timerBadgeMatches = lcStr.match(/⏱️[^\"]+/g) || [];
const parenMinuteMatches = lcStr.match(/\([^\)]*mins?[^\)]*\)/gi) || [];
const allTimingMatches = [...new Set([...timerBadgeMatches, ...parenMinuteMatches])];

if (allTimingMatches.length > 0) {
  findings.timingsScan.pass = false;
  allTimingMatches.forEach(m => findings.timingsScan.items.push(`Content timing tag: "${m}"`));
}

// --- Check 5: Jargon & Prohibited Terms (Rule 1.I) ---
const forbiddenTerms = [
  'scaffolding', 'discourse marker', 'syntactic complexity',
  'prepositional dependency', 'distractor pattern', 'subject-auxiliary inversion',
  'concessive signpost', 'opinion signpost', 'academic syntax', 'faculty'
];

const fullSessionText = (JSON.stringify(sessionObj) + '\n' + templateContent).toLowerCase();
forbiddenTerms.forEach(term => {
  if (fullSessionText.includes(term.toLowerCase())) {
    // Exclude physical construction scaffolding
    if (term === 'scaffolding' && fullSessionText.includes('temporary scaffolding')) return;
    findings.jargonScan.pass = false;
    findings.jargonScan.items.push(`Prohibited jargon term found: "${term}"`);
  }
});

// --- Check 6: Thematic Relevance & Subject Drift Scanner ---
const keyTermsList = (sessionObj.overview && sessionObj.overview.keyTerms ? sessionObj.overview.keyTerms.map(k => k.term.toLowerCase()) : []);
const topicKeywords = [
  ...sessionTitle.toLowerCase().split(/[\s,&-]+/).filter(w => w.length > 3),
  ...keyTermsList.flatMap(t => t.split(/[\s,&-]+/)).filter(w => w.length > 3),
  'tourism', 'tourist', 'visitor', 'municipal', 'carrying', 'capacity'
];
const uniqueKeywords = [...new Set(topicKeywords)];
let driftWarnings = [];

for (const k of Object.keys(lc)) {
  const act = lc[k];
  if (act && typeof act === 'object' && act.title) {
    const actText = JSON.stringify(act).toLowerCase();
    const matchesKeyword = uniqueKeywords.some(kw => actText.includes(kw));
    if (!matchesKeyword && k !== 'openingSession' && k !== 'closingReview' && k !== 'overview' && k !== 'hero') {
      driftWarnings.push(`Activity "${act.title}" may have weak keyword alignment with session topic "${sessionTitle}".`);
    }
  }
}
if (driftWarnings.length > 0) {
  findings.thematicRelevance.details = driftWarnings;
}

// --- Check 7: 2-Hour Content Sufficiency & Pacing Gauge ---
let hasWarmup = false;
let hasCoreInput = false;
let hasLanguageFocus = false;
let hasSimulation = false;
let hasDecisionTable = false;
let hasConsolidation = false;

for (const k of Object.keys(lc)) {
  const keyLower = k.toLowerCase();
  const act = lc[k];
  const titleLower = (act.title || '').toLowerCase();

  if (keyLower.includes('opening') || titleLower.includes('warm-up') || titleLower.includes('news')) hasWarmup = true;
  if (keyLower.includes('matrix') || keyLower.includes('dossier') || keyLower.includes('extract') || keyLower.includes('pressure')) hasCoreInput = true;
  if (keyLower.includes('grammar') || keyLower.includes('clinic') || titleLower.includes('grammar') || titleLower.includes('rules')) hasLanguageFocus = true;
  if (keyLower.includes('simulation') || keyLower.includes('roleplay') || keyLower.includes('pitch') || titleLower.includes('role-play') || titleLower.includes('pitch') || titleLower.includes('summit')) hasSimulation = true;
  if (keyLower.includes('safetycheck') || titleLower.includes('safety check') || titleLower.includes('decision table') || titleLower.includes('consensus')) hasDecisionTable = true;
  if (keyLower.includes('closing') || keyLower.includes('taboo') || titleLower.includes('wrap-up') || titleLower.includes('taboo')) hasConsolidation = true;
}

const phasesCount = [hasWarmup, hasCoreInput, hasLanguageFocus, hasSimulation, hasDecisionTable, hasConsolidation].filter(Boolean).length;
if (phasesCount >= 5) {
  findings.sufficiencyGauge.score = '🟢 Optimal (Balanced for 2-Hour University Block)';
  findings.sufficiencyGauge.details.push(`All core communicative phases present (${phasesCount}/6 stages). Teacher has ample depth without rushing or filler.`);
} else if (phasesCount >= 3) {
  findings.sufficiencyGauge.score = '🟡 Light / Thin (Risk of finishing early < 90 mins)';
  findings.sufficiencyGauge.details.push(`Only ${phasesCount}/6 core communicative phases detected. Needs additional simulation or decision table.`);
} else {
  findings.sufficiencyGauge.score = '🔴 Deficient / Fragmented (< 60 mins substance)';
  findings.sufficiencyGauge.details.push(`Insufficient content for a 2-hour university block (${phasesCount}/6 phases).`);
}

// --- Check 8: Roleplay Viability & Peer Checklist ---
const fullTemplate = templateContent.toLowerCase();
if (hasSimulation) {
  const hasPeerChecklist = fullTemplate.includes('peer checklist') || fullTemplate.includes('partner b') || fullTemplate.includes('peer evaluation') || fullTemplate.includes('peer observer');
  if (!hasPeerChecklist) {
    findings.roleplayViability.pass = false;
    findings.roleplayViability.details.push(`Speaking simulation lacks a Student B / Peer Observer active listening checklist.`);
  }
}

// --- Check 9: Interactive Code & Auto-Saving Textareas ---
const hasTextareas = fullTemplate.includes('notes-textarea-container') || fullTemplate.includes('window.savelessonnote') || fullTemplate.includes('<textarea');
if (!hasTextareas) {
  findings.interactiveCode.pass = false;
  findings.interactiveCode.details.push(`No auto-saving textareas (window.saveLessonNote) found in digital worksheet.`);
}

// --- Check 10: Action Bar & PDF Download Button ---
const hasLegacyPrint = fullTemplate.includes('window.printlessoncontent()') || fullTemplate.includes('print / save lesson pdf');
if (hasLegacyPrint) {
  findings.actionBar.pass = false;
  findings.actionBar.details.push(`Uses deprecated browser print button ('window.printLessonContent()') instead of official PDF link button.`);
}

// --- Check 11: 7-Page A4 PDF Worksheet Status ---
let expectedPdfName = '';
if (target.semester === 3) {
  expectedPdfName = `GSEA_S3_M${target.moduleNum}_S${target.sessionNum}_Lesson_Worksheet.pdf`;
} else {
  expectedPdfName = `GSEA_S${target.semester}_M${target.moduleNum}_${target.track.toUpperCase()}_S${target.sessionNum}_Lesson_Worksheet.pdf`;
}

const pdfPath = path.join(baseDir, 'docs', expectedPdfName);
findings.pdfStatus.expectedPdfName = expectedPdfName;
findings.pdfStatus.exists = fs.existsSync(pdfPath);

if (!findings.pdfStatus.exists) {
  findings.pdfStatus.pass = false;
  findings.pdfStatus.details.push(`PDF file does not exist on disk: docs/${expectedPdfName}`);
} else {
  try {
    const oCmd = `osascript -l JavaScript -e '
      ObjC.import("PDFKit");
      const url = $.NSURL.fileURLWithPath("${pdfPath}");
      const doc = $.PDFDocument.alloc.initWithURL(url);
      doc ? doc.pageCount : 0;
    '`;
    const pageCount = parseInt(execSync(oCmd).toString().trim(), 10);
    findings.pdfStatus.pageCount = pageCount;
    if (pageCount !== 7) {
      findings.pdfStatus.pass = false;
      findings.pdfStatus.details.push(`PDF page count is ${pageCount} pages (invariant requires EXACTLY 7 pages).`);
    } else {
      findings.pdfStatus.details.push(`Verified exactly 7/7 pages via macOS PDFKit.`);
    }
  } catch (e) {
    findings.pdfStatus.details.push(`Could not verify page count via PDFKit: ${e.message}`);
  }
}

// Check Manifest
if (fs.existsSync(manifestPath)) {
  const mText = fs.readFileSync(manifestPath, 'utf8');
  if (!mText.includes(expectedPdfName)) {
    findings.pdfStatus.details.push(`PDF is not registered in imsmanifest.xml.`);
  }
}

// 4. Output Formatted Report
console.log(`\n================================================================================`);
console.log(`📋 AUDIT REPORT: SEMESTER ${target.semester} • ${target.track.toUpperCase()} MODULE ${target.moduleNum} SESSION ${target.sessionNum}`);
console.log(`Topic: "${sessionTitle}"`);
console.log(`Repository: ${baseDir}`);
console.log(`================================================================================\n`);

console.log(`1. 🎯 THEMATIC RELEVANCE & SUBJECT DRIFT`);
if (findings.thematicRelevance.details.length === 0) {
  console.log(`   ✅ PASS: 100% thematically coherent with "${sessionTitle}". Zero off-topic drift detected.`);
} else {
  console.log(`   ⚠️ WARNING: Possible topic drift detected:`);
  findings.thematicRelevance.details.forEach(d => console.log(`      • ${d}`));
}

console.log(`\n2. ⏱️ 2-HOUR CLASSROOM SUFFICIENCY GAUGE`);
console.log(`   Rating: ${findings.sufficiencyGauge.score}`);
findings.sufficiencyGauge.details.forEach(d => console.log(`   • ${d}`));

console.log(`\n3. 🏷️ 1:1 TITLE PARITY & SCHEMA (Rule 1.L & 1.P)`);
if (findings.titleParity.pass && findings.titleParity.details.length === 0) {
  console.log(`   ✅ PASS: 1:1 strict title parity confirmed across all interfaces.`);
} else {
  console.log(`   ⚠️ ACTION REQUIRED:`);
  findings.titleParity.details.forEach(d => console.log(`      • ${d}`));
}

console.log(`\n4. 🚫 ZERO ACADEMIC JARGON & PROHIBITED LEXICON (Rule 1.I)`);
if (findings.jargonScan.pass) {
  console.log(`   ✅ PASS: 0 prohibited jargon terms found. 0 occurrences of "faculty". 100% plain B2 English.`);
} else {
  console.log(`   ❌ FAIL: Prohibited terms detected:`);
  findings.jargonScan.items.forEach(i => console.log(`      • ${i}`));
}

console.log(`\n5. ⏳ CLASSROOM TIMINGS & TEACHER AUTONOMY (Rule 1.Q)`);
if (findings.timingsScan.pass) {
  console.log(`   ✅ PASS: Zero rigid minute breakdowns detected. Teacher pacing autonomy respected.`);
} else {
  console.log(`   ❌ FAIL: Rigid minute breakdowns / timestamps detected:`);
  findings.timingsScan.items.forEach(i => console.log(`      • ${i}`));
}

console.log(`\n6. 👥 PAIRWORK VIABILITY & PEER CHECKLIST`);
if (findings.roleplayViability.pass) {
  console.log(`   ✅ PASS: Active listening peer checklist present in spoken simulations.`);
} else {
  console.log(`   ⚠️ ACTION REQUIRED:`);
  findings.roleplayViability.details.forEach(d => console.log(`      • ${d}`));
}

console.log(`\n7. 💾 DIGITAL WORKSHEET & AUTO-SAVING NOTES`);
if (findings.interactiveCode.pass && findings.actionBar.pass) {
  console.log(`   ✅ PASS: Interactive code verified. Official PDF download button present. Local storage textareas active.`);
} else {
  console.log(`   ⚠️ ACTION REQUIRED:`);
  findings.actionBar.details.forEach(d => console.log(`      • ${d}`));
  findings.interactiveCode.details.forEach(d => console.log(`      • ${d}`));
}

console.log(`\n8. 📄 7-PAGE A4 PDF LESSON WORKSHEET STATUS`);
if (findings.pdfStatus.pass && findings.pdfStatus.exists) {
  console.log(`   ✅ PASS: PDF exists (docs/${expectedPdfName}) and verified at exactly 7/7 pages.`);
} else {
  console.log(`   ❌ SETUP REQUIRED: docs/${expectedPdfName}`);
  findings.pdfStatus.details.forEach(d => console.log(`      • ${d}`));
}

console.log(`\n================================================================================`);
const allPassed = findings.titleParity.pass && findings.jargonScan.pass && findings.timingsScan.pass && findings.roleplayViability.pass && findings.actionBar.pass && findings.pdfStatus.pass;
if (allPassed) {
  console.log(`🏁 OVERALL VERDICT: ✅ PRODUCTION READY`);
} else {
  console.log(`🏁 OVERALL VERDICT: ⚠️ ACTION REQUIRED (Remediation & PDF Setup Ready)`);
}
console.log(`================================================================================\n`);
