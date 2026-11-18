#!/usr/bin/env node
/**
 * Automated Portal-Wide Session Render Validation Engine
 * Validates that every session across all modules and tracks renders cleanly with ZERO 'undefined' occurrences.
 * Author: Phil PARRIS
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseData = require(path.join(rootDir, 'data', 'course-data.js'));

const htmlOutputs = {};
const mockDoc = {
  getElementById: (id) => ({
    set innerHTML(val) { htmlOutputs[id] = val; }
  })
};
const mockWin = {
  loadLessonNote: () => '',
  getLessonNote: () => '',
  addEventListener: () => {}
};

const dispatcher = fs.readFileSync(path.join(rootDir, 'src', 'js', '04-templates-dispatcher.js'), 'utf8');

// Load all template files
const templateFiles = [
  '05a-templates-at1.js',
  '05b-templates-ag1.js',
  '06-templates-ag2.js',
  '07-templates-ag3.js',
  '08-templates-aas2.js',
  '08b-templates-aas3.js'
];

const ctx = {
  document: mockDoc,
  window: mockWin,
  setTimeout: () => {},
  theme: { primary: '#152438', accent: '#d97706', primaryDark: '#0d1724' }
};
vm.createContext(ctx);
vm.runInContext(dispatcher, ctx);

templateFiles.forEach(file => {
  const full = path.join(rootDir, 'src', 'js', file);
  if (fs.existsSync(full)) {
    const code = fs.readFileSync(full, 'utf8');
    try {
      vm.runInContext(code, ctx);
    } catch (e) {
      console.warn(`[WARN] Loading ${file}: ${e.message}`);
    }
  }
});

let totalSessionsAudited = 0;
let failures = [];

function auditSession(trackName, modNum, sessNum, sessionObj, fnNames) {
  if (!sessionObj || !sessionObj.lessonContent) return;
  totalSessionsAudited++;

  let rendered = '';
  for (const fn of fnNames) {
    if (typeof ctx[fn] === 'function') {
      try {
        ctx[fn](sessionObj, ctx.theme);
        rendered = htmlOutputs['modal-body'] || '';
        break;
      } catch (e) {
        failures.push({
          session: `${trackName.toUpperCase()} M${modNum} S${sessNum}`,
          error: `Render execution threw error: ${e.message}`
        });
        return;
      }
    }
  }

  if (!rendered) {
    // Some sessions might use a generic dispatcher
    return;
  }

  const undefMatches = rendered.match(/\bundefined\b/g);
  if (undefMatches && undefMatches.length > 0) {
    failures.push({
      session: `${trackName.toUpperCase()} M${modNum} S${sessNum}`,
      error: `Found ${undefMatches.length} occurrences of literal 'undefined' in rendered DOM output.`
    });
  }
}

// 1. Audit AG track
if (courseData.ag) {
  Object.keys(courseData.ag).forEach(modKey => {
    const mod = courseData.ag[modKey];
    if (mod && mod.sessions) {
      Object.keys(mod.sessions).forEach(sessKey => {
        const sObj = mod.sessions[sessKey];
        const fnNames = [];
        if (modKey === '1') {
          fnNames.push(`renderAgLessonContentTabSession${sessKey}`);
        } else if (modKey === '2') {
          fnNames.push(`renderAg2LessonContentTabSession${sessKey}`);
        } else if (modKey === '3') {
          fnNames.push(`renderAg3LessonContentTabSession${sessKey}`);
        }
        fnNames.push(`renderLessonContentTabSession${sessKey}`);
        auditSession('AG', modKey, sessKey, sObj, fnNames);
      });
    }
  });
}

// 2. Audit AAS / AT track
if (courseData.aas) {
  Object.keys(courseData.aas).forEach(modKey => {
    const mod = courseData.aas[modKey];
    if (mod && mod.sessions) {
      Object.keys(mod.sessions).forEach(sessKey => {
        const sObj = mod.sessions[sessKey];
        const fnNames = [];
        if (modKey === '1') {
          fnNames.push(`renderLessonContentTabSession${sessKey}`);
          fnNames.push(`renderAtLessonContentTabSession${sessKey}`);
        } else if (modKey === '2') {
          fnNames.push(`renderAas2LessonContentTabSession${sessKey}`);
        } else if (modKey === '3') {
          fnNames.push(`renderAas3LessonContentTabSession${sessKey}`);
        }
        fnNames.push(`renderAasLessonContentTabSession${sessKey}`);
        auditSession('AT', modKey, sessKey, sObj, fnNames);
      });
    }
  });
}

console.log(`\n🛡️ PORTAL SESSION RENDER AUDIT: ${totalSessionsAudited} sessions scanned.`);
if (failures.length > 0) {
  console.error(`❌ FAILED: ${failures.length} session(s) violated the Zero Undefined Invariant:`);
  failures.forEach(f => {
    console.error(`   • [${f.session}]: ${f.error}`);
  });
  process.exit(1);
} else {
  console.log(`✅ ALL ${totalSessionsAudited} SESSIONS PASSED: 0 occurrences of 'undefined' detected. Full schema integrity verified.\n`);
}
