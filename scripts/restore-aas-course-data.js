#!/usr/bin/env node
/**
 * scripts/restore-aas-course-data.js
 * Restores courseData.aas['2'] and courseData.aas['3'] from baseline commit 724d84e.
 * Strictly preserves the UMD export wrapper and leaves AG Modules 1-3 untouched.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');

console.log('🔄 Loading current course-data.js...');
const currentCourseData = require(courseDataPath);

console.log('🔄 Extracting baseline course-data.js from commit 724d84e...');
const oldRaw = execSync('git show 724d84e:data/course-data.js', { maxBuffer: 15 * 1024 * 1024 }).toString();

// Parse baseline data
const context = { window: {}, self: {} };
context.self = context;
context.window = context;
vm.runInNewContext(oldRaw, context);
const oldCourseData = context.window.COURSE_DATA;

if (!oldCourseData || !oldCourseData.aas || !oldCourseData.aas['2'] || !oldCourseData.aas['3']) {
  console.error('❌ Failed to extract baseline AAS data from commit 724d84e!');
  process.exit(1);
}

// Restore AAS Modules 2 and 3
currentCourseData.aas['2'] = oldCourseData.aas['2'];
currentCourseData.aas['3'] = oldCourseData.aas['3'];

console.log('✓ Restored courseData.aas["2"] (Aircraft and Aerodynamics) with', Object.keys(currentCourseData.aas['2'].sessions).length, 'sessions.');
console.log('✓ Restored courseData.aas["3"] (Health, Meteorology, Safety & Security) with', Object.keys(currentCourseData.aas['3'].sessions).length, 'sessions.');

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

const serializedJson = JSON.stringify(currentCourseData, null, 2);
fs.writeFileSync(courseDataPath, header + serializedJson + footer, 'utf8');
console.log('✓ Successfully wrote updated data/course-data.js with UMD wrapper preserved.');

// Pre-flight test in browser VM context
const verifyContext = { window: {}, self: {} };
verifyContext.self = verifyContext;
verifyContext.window = verifyContext;
vm.runInNewContext(fs.readFileSync(courseDataPath, 'utf8'), verifyContext);

if (verifyContext.window.COURSE_DATA && verifyContext.window.COURSE_DATA.aas && verifyContext.window.COURSE_DATA.aas['2']) {
  console.log('✓ Pre-flight VM test passed: window.COURSE_DATA loaded cleanly with restored AAS track.');
} else {
  console.error('❌ Fatal error: window.COURSE_DATA failed to initialize in VM!');
  process.exit(1);
}
