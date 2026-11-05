#!/usr/bin/env node
/**
 * scripts/remove-classroom-timings.js
 * Removes rigid classroom minute breakdowns across data and templates per Rule 1.Q
 * Retains UMD wrapper and operational aviation turnaround facts.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');

console.log('🔄 Loading course-data.js...');
const rawCourseData = fs.readFileSync(courseDataPath, 'utf8');

// Verify UMD wrapper exists
if (!rawCourseData.includes('root.COURSE_DATA = factory()')) {
  console.error('❌ Error: Universal browser wrapper missing from course-data.js!');
  process.exit(1);
}

const courseData = require(courseDataPath);

let cleanedTitles = 0;
let cleanedDescriptions = 0;
let cleanedSummaries = 0;

function cleanLessonPlan(lp) {
  if (!lp) return;

  if (lp.summary) {
    const origSummary = lp.summary;
    lp.summary = lp.summary
      .replace(/\b(?:A\s+)?120-minute\s+/gi, 'A ')
      .replace(/\b(?:A\s+)?2-block\s+/gi, '')
      .replace(/across the 2-hour lesson/gi, 'across the session')
      .replace(/2-hour\s+operational\s+workshop/gi, 'operational workshop')
      .replace(/2-hour\s+collaborative\s+design\s+sprint/gi, 'collaborative design sprint')
      .replace(/2-hour\s+public\s+inquiry\s+hearing/gi, 'public inquiry hearing')
      .replace(/2-hour\s+interactive\s+station\s+rotation/gi, 'interactive station rotation')
      .replace(/Pacing and breakdown across the 2-hour lesson\./gi, 'Structured sequence of learning stages. Pacing and depth are adapted by the teacher to class dynamics.');
    if (origSummary !== lp.summary) cleanedSummaries++;
  }

  if (Array.isArray(lp.items)) {
    lp.items.forEach((item, idx) => {
      // 1. Clean Title
      const origTitle = item.title;
      item.title = item.title
        .replace(/\s*\(\d+[\s–-]*\d*\s*mins?\)/gi, '')
        .replace(/\s*—\s*\d+\s*mins?/gi, '')
        .trim();
      if (origTitle !== item.title) cleanedTitles++;

      // 2. Set clean part badge and remove time
      item.part = `Part ${idx + 1}`;
      delete item.time;

      // 3. Clean Classroom Activity Minute Timing from Description
      if (item.description) {
        const origDesc = item.description;
        item.description = item.description
          .replace(/Opening\s+\d+-minute\s+warm-up:/gi, 'Opening warm-up:')
          .replace(/Final\s+\d+-minute\s+consolidation:/gi, 'Final consolidation:')
          .replace(/\b10-minute\s+warm-up\b/gi, 'warm-up')
          .replace(/\b10-minute\s+consolidation\b/gi, 'consolidation')
          .replace(/\b10-minute\s+vocabulary\s+review\b/gi, 'vocabulary review')
          .replace(/\b10-minute\s+vocabulary\s+wrap-up\b/gi, 'vocabulary wrap-up')
          .replace(/\b15-minute\s+group\s+research\s+sprint\b/gi, 'group research sprint')
          .replace(/\b2-minute\s+timed\s+partner\s+pitch\s+dry\s+runs\b/gi, 'partner pitch dry runs')
          .replace(/\b2-minute\s+timed\s+presentation\s+pitch\s+rehearsal\b/gi, 'presentation pitch rehearsal')
          .replace(/\b2-minute\s+rapid-fire\s+pitch\s+rehearsal\b/gi, 'rapid-fire pitch rehearsal')
          .replace(/\b2-minute\s+competitive\s+pitches\b/gi, 'competitive pitches')
          .replace(/\b3-minute\s+spoken\s+presentations\b/gi, 'spoken presentations')
          .replace(/\b3-minute\s+public\s+safety\s+broadcast\b/gi, 'public safety broadcast')
          .replace(/\b3-minute\s+public\s+emergency\s+broadcast\b/gi, 'public emergency broadcast')
          .replace(/Each\s+team\s+delivers\s+a\s+\d+-minute\s+presentation/gi, 'Each team delivers a spoken presentation')
          .replace(/Pairs\s+workshop\s+preparing\s+the\s+\d+[\s–-]*\d*\s*minute\s+Press\s+Briefing/gi, 'Pairs prepare their Press Briefing');

        if (origDesc !== item.description) cleanedDescriptions++;
      }
    });
  }
}

// Clean AG and AAS tracks
for (const track of ['ag', 'aas']) {
  if (courseData[track]) {
    for (const m of ['1', '2', '3']) {
      const mod = courseData[track][m];
      if (mod && mod.sessions) {
        for (const s of ['1', '2', '3', '4']) {
          if (mod.sessions[s] && mod.sessions[s].lessonPlan) {
            cleanLessonPlan(mod.sessions[s].lessonPlan);
          }
        }
      }
    }
  }
}

// Clean top-level 1, 2, 3 aliases
for (const m of ['1', '2', '3']) {
  const mod = courseData[m];
  if (mod && mod.sessions) {
    for (const s of ['1', '2', '3', '4']) {
      if (mod.sessions[s] && mod.sessions[s].lessonPlan) {
        cleanLessonPlan(mod.sessions[s].lessonPlan);
      }
    }
  }
}

console.log(`✓ Cleaned ${cleanedTitles} titles.`);
console.log(`✓ Cleaned ${cleanedDescriptions} descriptions.`);
console.log(`✓ Cleaned ${cleanedSummaries} summaries.`);

// Re-serialize with UMD wrapper intact
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

const serializedJson = JSON.stringify(courseData, null, 2);
fs.writeFileSync(courseDataPath, header + serializedJson + footer, 'utf8');
console.log('✓ Successfully wrote updated data/course-data.js with UMD wrapper preserved.');

// Pre-flight test in browser VM context
const context = { window: {}, self: {} };
context.self = context;
context.window = context;
vm.runInNewContext(fs.readFileSync(courseDataPath, 'utf8'), context);

if (context.window.COURSE_DATA && context.window.COURSE_DATA.ag) {
  console.log('✓ Pre-flight VM test passed: window.COURSE_DATA loaded cleanly.');
} else {
  console.error('❌ Fatal error: window.COURSE_DATA failed to initialize in VM!');
  process.exit(1);
}
