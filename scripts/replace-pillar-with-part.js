#!/usr/bin/env node
/**
 * scripts/replace-pillar-with-part.js
 * Replaces all occurrences of "Pillar" with "Part" across Semester 1
 * Strictly preserves data structures and UMD export wrapper.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');

// 1. Process data/course-data.js
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
console.log('🔄 Processing data/course-data.js...');
let rawCourseData = fs.readFileSync(courseDataPath, 'utf8');

rawCourseData = rawCourseData
  .replace(/\bPillar 1\b/g, 'Part 1')
  .replace(/\bPillar 2\b/g, 'Part 2')
  .replace(/\bPillar 3\b/g, 'Part 3')
  .replace(/\bPillar 4\b/g, 'Part 4')
  .replace(/\bpillar 1\b/g, 'part 1')
  .replace(/\bpillar 2\b/g, 'part 2')
  .replace(/\bpillar 3\b/g, 'part 3')
  .replace(/\bpillar 4\b/g, 'part 4')
  .replace(/\bPILLAR 1\b/g, 'PART 1')
  .replace(/\bPILLAR 2\b/g, 'PART 2')
  .replace(/\bPILLAR 3\b/g, 'PART 3')
  .replace(/\bPILLAR 4\b/g, 'PART 4')
  .replace(/\b4-Pillar\b/g, '4-Part')
  .replace(/\b4-pillar\b/g, '4-part');

fs.writeFileSync(courseDataPath, rawCourseData, 'utf8');

// Verify course-data syntax and VM loading
const context = { window: {}, self: {} };
context.self = context;
context.window = context;
vm.runInNewContext(fs.readFileSync(courseDataPath, 'utf8'), context);
if (context.window.COURSE_DATA && context.window.COURSE_DATA.ag) {
  console.log('  ✓ [data/course-data.js] Verified syntax and browser VM loading.');
} else {
  console.error('❌ Error: course-data.js failed to load in VM!');
  process.exit(1);
}

// 2. Process JS modules in src/js
const jsFiles = [
  'src/js/03-core-deck.js',
  'src/js/04-templates-dispatcher.js',
  'src/js/06-templates-ag2.js',
  'src/js/07-templates-ag3.js',
  'src/js/08-templates-aas2.js',
  'src/js/08b-templates-aas3.js',
  'src/js/09-templates-materials-ddrs.js',
  'src/js/11-admin-hub.js'
];

jsFiles.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  const before = content;

  content = content
    .replace(/\bPillar 1\b/g, 'Part 1')
    .replace(/\bPillar 2\b/g, 'Part 2')
    .replace(/\bPillar 3\b/g, 'Part 3')
    .replace(/\bPillar 4\b/g, 'Part 4')
    .replace(/\bpillar 1\b/g, 'part 1')
    .replace(/\bpillar 2\b/g, 'part 2')
    .replace(/\bpillar 3\b/g, 'part 3')
    .replace(/\bpillar 4\b/g, 'part 4')
    .replace(/\bPILLAR 1\b/g, 'PART 1')
    .replace(/\bPILLAR 2\b/g, 'PART 2')
    .replace(/\bPILLAR 3\b/g, 'PART 3')
    .replace(/\bPILLAR 4\b/g, 'PART 4')
    .replace(/\b4-Pillar\b/g, '4-Part')
    .replace(/\b4-pillar\b/g, '4-part')
    .replace(/\b3-Pillar\b/g, '3-Part')
    .replace(/\b4 Core Pillars\b/g, '4 Core Areas');

  if (content !== before) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`  ✓ Updated ${relPath}`);
  }
});

console.log('✓ Successfully retired the term "Pillar" in favor of "Part 1..4" across Semester 1.');
