/**
 * scripts/restore-ag-modules-2-3.js
 * 
 * Restores General English (AG) Modules 2 & 3 to their exact pre-overhaul state (commit 65014a8)
 * while preserving:
 * 1. The Session Overview & Group Speaking Task objects
 * 2. Rule 1.Q (Zero classroom timings / Part 1..4 badges)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const BASE_COMMIT = '65014a8';

console.log(`🔄 Restoring AG Modules 2 & 3 from commit ${BASE_COMMIT}...`);

// Helper to clean titles
function cleanTitle(title) {
  if (!title || typeof title !== 'string') return title;
  return title
    .replace(/\s*\(\d+[\s–-]*\d*\s*mins?\)/gi, '')
    .replace(/\s*—\s*\d+\s*mins?/gi, '')
    .trim();
}

// Helper to clean descriptions and summaries
function cleanText(text) {
  if (!text || typeof text !== 'string') return text;
  return text
    .replace(/Opening\s+\d+-minute\s+warm-up:\s*/gi, 'Opening warm-up: ')
    .replace(/\b10-minute\s+opening:\s*/gi, 'Opening warm-up: ')
    .replace(/\b15-minute\s+opening:\s*/gi, 'Opening warm-up: ')
    .replace(/Final\s+\d+-minute\s+consolidation:\s*/gi, 'Final consolidation: ')
    .replace(/\b10-minute\s+warm-up\b/gi, 'warm-up')
    .replace(/\b10-minute\s+consolidation\b/gi, 'consolidation')
    .replace(/\b10-minute\s+vocabulary\s+review\b/gi, 'vocabulary review')
    .replace(/\b10-minute\s+vocabulary\s+wrap-up\b/gi, 'vocabulary wrap-up')
    .replace(/\b10-Minute\s+Vocabulary\s+Wrap-Up\b/gi, 'Vocabulary Wrap-Up')
    .replace(/\b15-minute\s+group\s+research\s+sprint\b/gi, 'group research sprint')
    .replace(/\b2-minute\s+timed\s+partner\s+pitch\s+dry\s+runs\b/gi, 'partner pitch dry runs')
    .replace(/\b2-minute\s+timed\s+presentation\s+pitch\s+rehearsal\b/gi, 'presentation pitch rehearsal')
    .replace(/\b2-minute\s+rapid-fire\s+pitch\s+rehearsal\b/gi, 'rapid-fire pitch rehearsal')
    .replace(/\b2-minute\s+competitive\s+pitches\b/gi, 'competitive pitches')
    .replace(/\b3-minute\s+spoken\s+presentations\b/gi, 'spoken presentations')
    .replace(/\b3-minute\s+public\s+safety\s+broadcast\b/gi, 'public safety broadcast')
    .replace(/\b3-minute\s+public\s+emergency\s+broadcast\b/gi, 'public emergency broadcast')
    .replace(/Each\s+team\s+delivers\s+a\s+\d+-minute\s+presentation/gi, 'Each team delivers a spoken presentation')
    .replace(/Pairs\s+workshop\s+preparing\s+the\s+\d+[\s–-]*\d*\s*minute\s+Press\s+Briefing/gi, 'Pairs prepare their Press Briefing')
    .replace(/Pacing and breakdown across the 2-hour lesson\./gi, 'Structured sequence of learning stages. Pacing and depth are adapted by the teacher to class dynamics.')
    .replace(/\b(?:A\s+)?120-minute\s+/gi, 'A ')
    .replace(/\b(?:A\s+)?2-block\s+/gi, '')
    .replace(/across the 2-hour lesson/gi, 'across the session')
    .replace(/2-hour\s+operational\s+workshop/gi, 'operational workshop')
    .replace(/2-hour\s+collaborative\s+design\s+sprint/gi, 'collaborative design sprint')
    .replace(/2-hour\s+public\s+inquiry\s+hearing/gi, 'public inquiry hearing')
    .replace(/2-hour\s+interactive\s+station\s+rotation/gi, 'interactive station rotation')
    .replace(/\s*•\s*120\s*mins\b/gi, '')
    .replace(/\s*\(15\s*mins\s*max\)/gi, '');
}

const badgeReplacements = [
  { from: />00-10m</g, to: '>Part 1<' },
  { from: />00-15m</g, to: '>Part 1<' },
  { from: />10-30m</g, to: '>Part 2<' },
  { from: />10-35m</g, to: '>Part 2<' },
  { from: />15-35m</g, to: '>Part 2<' },
  { from: />30-50m</g, to: '>Part 3<' },
  { from: />35-55m</g, to: '>Part 3<' },
  { from: />35-60m</g, to: '>Part 3<' },
  { from: />50-65m</g, to: '>Part 4<' },
  { from: />50-75m</g, to: '>Part 4<' },
  { from: />50-80m</g, to: '>Part 4<' },
  { from: />50-85m</g, to: '>Part 4<' },
  { from: />55-80m</g, to: '>Part 4<' },
  { from: />55-85m</g, to: '>Part 4<' },
  { from: />60-80m</g, to: '>Part 4<' },
  { from: />60-85m</g, to: '>Part 4<' },
  { from: />80-110m</g, to: '>Part 5<' },
  { from: />85-110m</g, to: '>Part 5<' },
  { from: />110-120m</g, to: '>Part 6<' }
];

// ==========================================
// 1. RESTORE TEMPLATE FILES
// ==========================================
for (const [relPath, label] of [
  ['src/js/06-templates-ag2.js', 'AG Module 2'],
  ['src/js/07-templates-ag3.js', 'AG Module 3']
]) {
  console.log(`  Restoring ${label} (${relPath}) from ${BASE_COMMIT}...`);
  let content = execSync(`git show ${BASE_COMMIT}:${relPath}`, { maxBuffer: 15 * 1024 * 1024 }).toString();

  // Replace legacy time badges with Part 1..4
  for (const r of badgeReplacements) {
    content = content.replace(r.from, r.to);
  }

  // Strip (XX mins) from fallback titles
  content = content.replace(/\s*\(\d+[\s–-]*\d*\s*mins?\)/gi, '');

  // Clean time pacing text
  content = cleanText(content);

  fs.writeFileSync(path.join(rootDir, relPath), content, 'utf8');
  console.log(`  ✓ ${relPath} written with clean Part badges and zero timings.`);
}

// ==========================================
// 2. RESTORE DATA IN data/course-data.js
// ==========================================
console.log('  Restoring course-data.js AG Modules 2 & 3 from ' + BASE_COMMIT + '...');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const currentCd = require(courseDataPath);

// Save current overview objects for AG Modules 2 and 3
const savedOverviews = {
  '2': {},
  '3': {}
};
for (const m of ['2', '3']) {
  for (const s of ['1', '2', '3', '4']) {
    if (currentCd.ag && currentCd.ag[m] && currentCd.ag[m].sessions && currentCd.ag[m].sessions[s]) {
      savedOverviews[m][s] = currentCd.ag[m].sessions[s].overview;
    }
  }
}

// Load baseline course-data from 65014a8
const rawOldCd = execSync(`git show ${BASE_COMMIT}:data/course-data.js`, { maxBuffer: 15 * 1024 * 1024 }).toString();
const context = { window: {}, self: {}, module: {} };
context.self = context;
context.window = context;
vm.runInNewContext(rawOldCd, context);
const oldCd = context.module.exports || context.window.COURSE_DATA;

function cleanSess(sess, m, s) {
  if (!sess) return;

  // Restore overview
  if (savedOverviews[m] && savedOverviews[m][s]) {
    sess.overview = savedOverviews[m][s];
  }

  // Clean lessonPlan
  if (sess.lessonPlan) {
    if (sess.lessonPlan.summary) {
      sess.lessonPlan.summary = cleanText(sess.lessonPlan.summary);
    }
    if (Array.isArray(sess.lessonPlan.items)) {
      sess.lessonPlan.items.forEach((item, idx) => {
        item.title = cleanTitle(item.title);
        item.part = `Part ${idx + 1}`;
        delete item.time;
        if (item.description) {
          item.description = cleanText(item.description);
        }
      });
    }
  }

  // Clean lessonContent
  if (sess.lessonContent && typeof sess.lessonContent === 'object') {
    for (const key of Object.keys(sess.lessonContent)) {
      const act = sess.lessonContent[key];
      if (act && typeof act === 'object') {
        if (act.title) act.title = cleanTitle(act.title);
        if (act.summary) act.summary = cleanText(act.summary);
      }
    }
  }
}

// Restore Module 2 and Module 3
for (const m of ['2', '3']) {
  if (oldCd.ag && oldCd.ag[m] && oldCd.ag[m].sessions) {
    for (const s of ['1', '2', '3', '4']) {
      cleanSess(oldCd.ag[m].sessions[s], m, s);
    }
    currentCd.ag[m] = oldCd.ag[m];
    // Keep top-level alias synchronized
    currentCd[m] = oldCd.ag[m];
  }
}

// Write back data/course-data.js with exact UMD wrapper
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

fs.writeFileSync(courseDataPath, header + JSON.stringify(currentCd, null, 2) + footer, 'utf8');
console.log('✓ Successfully restored AG Modules 2 & 3 in data/course-data.js while preserving overviews and Rule 1.Q.');

