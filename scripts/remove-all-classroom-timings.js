/**
 * scripts/remove-all-classroom-timings.js
 * 
 * Enforces Rule 1.Q (Teacher Autonomy & Zero Classroom Timings Invariant)
 * across data/course-data.js and all lesson template files:
 * 1. src/js/05-templates-mod1.js
 * 2. src/js/06-templates-ag2.js
 * 3. src/js/07-templates-ag3.js
 * 4. src/js/08-templates-aas2.js
 * 5. src/js/08b-templates-aas3.js
 * 6. data/course-data.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');

// Helper to clean titles and stage labels
function cleanTitle(title) {
  if (!title || typeof title !== 'string') return title;
  return title
    .replace(/\s*\(\d+[\s–-]*\d*\s*mins?\)/gi, '')
    .replace(/\s*—\s*\d+\s*mins?/gi, '')
    .replace(/\s*\(\s*([^)]*?)\s*-\s*\d+\s*mins?\s*\)/gi, ' ($1)')
    .trim();
}

// Helper to clean descriptions and summaries without touching whitespace/newlines
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

// ==========================================
// 1. CLEAN data/course-data.js
// ==========================================
console.log('🔄 Cleaning data/course-data.js...');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const courseData = require(courseDataPath);

let cdTitlesCleaned = 0;
let cdTextsCleaned = 0;

function cleanObjectDeep(obj) {
  if (!obj || typeof obj !== 'object') return;

  if (Array.isArray(obj)) {
    obj.forEach(item => cleanObjectDeep(item));
    return;
  }

  for (const key of Object.keys(obj)) {
    if (key === 'time' && typeof obj[key] === 'string' && /^\d{2}-\d{2}$/.test(obj[key])) {
      delete obj[key];
      cdTextsCleaned++;
    } else if (key === 'title' || key === 'stage' || key === 'step' || key === 'part') {
      if (typeof obj[key] === 'string') {
        const orig = obj[key];
        obj[key] = cleanTitle(obj[key]);
        if (orig !== obj[key]) cdTitlesCleaned++;
      }
    } else if (key === 'summary' || key === 'description' || key === 'notes' || key === 'teacherNotes') {
      if (typeof obj[key] === 'string') {
        const orig = obj[key];
        obj[key] = cleanText(obj[key]);
        if (orig !== obj[key]) cdTextsCleaned++;
      }
    } else if (typeof obj[key] === 'object') {
      cleanObjectDeep(obj[key]);
    }
  }
}

// Clean AG, AAS, and top-level modules
for (const track of ['ag', 'aas']) {
  if (courseData[track]) {
    for (const m of ['1', '2', '3']) {
      const mod = courseData[track][m];
      if (mod && mod.sessions) {
        for (const s of ['1', '2', '3', '4']) {
          cleanObjectDeep(mod.sessions[s]);
        }
      }
    }
  }
}

for (const m of ['1', '2', '3']) {
  const mod = courseData[m];
  if (mod && mod.sessions) {
    for (const s of ['1', '2', '3', '4']) {
      cleanObjectDeep(mod.sessions[s]);
    }
  }
}

// Write back with UMD wrapper
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
console.log(`  ✓ course-data.js: ${cdTitlesCleaned} titles/stages cleaned, ${cdTextsCleaned} texts cleaned.`);

// ==========================================
// 2. CLEAN ALL TEMPLATE FILES
// ==========================================
const templateFiles = [
  'src/js/05-templates-mod1.js',
  'src/js/06-templates-ag2.js',
  'src/js/07-templates-ag3.js',
  'src/js/08-templates-aas2.js',
  'src/js/08b-templates-aas3.js'
];

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

for (const relPath of templateFiles) {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) continue;

  console.log(`🔄 Processing ${relPath}...`);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace badges
  for (const r of badgeReplacements) {
    content = content.replace(r.from, r.to);
  }

  // 2. Strip (XX mins) from fallback strings in titles
  content = content.replace(/\s*\(\d+[\s–-]*\d*\s*mins?\)/gi, '');

  // 3. Clean 'Session X Complete • 120 mins'
  content = content.replace(/\s*•\s*120\s*mins/gi, '');

  // 4. Clean time descriptions and pacing notes
  content = cleanText(content);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ ${relPath} updated successfully.`);
}

console.log('✅ ALL CLASSROOM TIMING INDICATORS REMOVED ACROSS SEMESTER 1!');
