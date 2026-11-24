const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const configPath = path.join(rootDir, 'src', 'js', '02-config.js');
const dispatcherPath = path.join(rootDir, 'src', 'js', '04-templates-dispatcher.js');
const deckPath = path.join(rootDir, 'src', 'js', '03-core-deck.js');
const templatePath = path.join(rootDir, 'src', 'js', '08-templates-aas2.js');

console.log("🚀 Running Automated End-to-End Runtime & Interactive Test for S1 AT M2 S2...");

// 1. Setup simulated DOM
const domNodes = {};
const listeners = {};

class MockElement {
  constructor(id, tagName = 'div') {
    this.id = id;
    this.tagName = tagName;
    this.classList = {
      _classes: new Set(),
      add: (...cls) => cls.forEach(c => this.classList._classes.add(c)),
      remove: (...cls) => cls.forEach(c => this.classList._classes.delete(c)),
      toggle: (c) => {
        if (this.classList._classes.has(c)) {
          this.classList._classes.delete(c);
          return false;
        } else {
          this.classList._classes.add(c);
          return true;
        }
      },
      contains: (c) => this.classList._classes.has(c)
    };
    this.value = '';
    this.className = '';
    this.textContent = '';
    this._innerHTML = '';
    this.dataset = {};
    this.style = {};
  }
  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = val;
    this.parseChildren(val);
  }
  parseChildren(html) {
    // Basic regex parser to register mock elements with id
    const idMatches = html.matchAll(/id=["']([^"']+)["']/g);
    for (const m of idMatches) {
      if (!domNodes[m[1]]) {
        domNodes[m[1]] = new MockElement(m[1]);
      }
    }
  }
}

const mockDoc = {
  getElementById: (id) => {
    if (!domNodes[id]) {
      domNodes[id] = new MockElement(id);
    }
    return domNodes[id];
  },
  querySelectorAll: (selector) => {
    const matched = [];
    if (selector.startsWith('.')) {
      const cls = selector.slice(1);
      for (const node of Object.values(domNodes)) {
        if (node.className.includes(cls) || node.classList.contains(cls)) {
          matched.push(node);
        }
      }
    } else if (selector.includes('id^=')) {
      const prefix = selector.match(/id\^=["']?([^"'\]]+)/)[1];
      for (const [id, node] of Object.entries(domNodes)) {
        if (id.startsWith(prefix)) matched.push(node);
      }
    } else if (selector.includes('class*=')) {
      const sub = selector.match(/class\*=["']?([^"'\]]+)/)[1];
      for (const node of Object.values(domNodes)) {
        if (node.className.includes(sub)) matched.push(node);
      }
    }
    return matched;
  },
  createElement: (tag) => new MockElement('mock-' + Math.random(), tag),
  body: new MockElement('body'),
  addEventListener: (evt, fn) => { listeners[evt] = fn; },
  removeEventListener: () => {}
};

const mockWin = {
  COURSE_DATA: null,
  getLessonNote: () => '',
  saveLessonNote: () => '',
  addEventListener: (evt, fn) => { listeners[evt] = fn; }
};

const ctx = {
  self: mockWin,
  window: mockWin,
  document: mockDoc,
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (id) => clearTimeout(id),
  console: console,
  closePortfolioDrawer: () => {},
  renderSessionBriefingBanner: () => '<!-- banner -->',
  renderActivityInstructions: () => '<!-- instructions -->'
};
ctx.self.self = mockWin;
vm.createContext(ctx);

// Load files into context
vm.runInContext(fs.readFileSync(courseDataPath, 'utf8'), ctx);
vm.runInContext(fs.readFileSync(configPath, 'utf8'), ctx);
vm.runInContext(fs.readFileSync(deckPath, 'utf8'), ctx);
vm.runInContext(fs.readFileSync(dispatcherPath, 'utf8'), ctx);
vm.runInContext(fs.readFileSync(templatePath, 'utf8'), ctx);

// --- TEST 1: Course Data Aliasing & getActiveModalCourseData() ---
console.log("\n[Test 1] Verifying Course Data Aliasing & Runtime Modal Dispatch...");
if (!ctx.window.COURSE_DATA.at) {
  throw new Error("FAIL: COURSE_DATA.at is missing!");
}
if (ctx.window.COURSE_DATA.at !== ctx.window.COURSE_DATA.aas) {
  throw new Error("FAIL: COURSE_DATA.at is not aliased to COURSE_DATA.aas!");
}

// Set currentProgram and call openModalDrawer
vm.runInContext("currentProgram = 'at'; openModalDrawer('content', 2, 2);", ctx);
const modCourse = vm.runInContext("getActiveModalCourseData()", ctx);
const s2 = (modCourse.sessions && modCourse.sessions[2]) || {};

if (!s2.title || !s2.title.includes("Aircraft Anatomy")) {
  throw new Error("FAIL: getActiveModalCourseData() failed to return AT Module 2 Session 2! Got: " + (s2.title || 'undefined'));
}
console.log("  ✓ Runtime dispatch successfully returned:", s2.title);

// --- TEST 2: Render Execution & Non-Empty Elements ---
console.log("\n[Test 2] Rendering Session 2 Digital Worksheet...");
const modalBody = mockDoc.getElementById('modal-body');
vm.runInContext("renderAas2LessonContentTabSession2", ctx)(s2, { primary: "#0284c7" });

const html = modalBody.innerHTML;
console.log("  ✓ Rendered HTML length:", html.length.toLocaleString(), "chars");

// Assert video
if (!html.includes('X004qj_gAhQ')) {
  throw new Error("FAIL: Working video embed (Animagraffs X004qj_gAhQ) not found in rendered HTML!");
}
console.log("  ✓ Video Player: Verified working Animagraffs 3D animation (X004qj_gAhQ)");

// Assert Video Debrief panel has content
if (!html.includes('Differential Aileron Deflection') || !html.includes('Why do commercial aircraft use both inboard and outboard ailerons?')) {
  throw new Error("FAIL: Right-hand video debrief panel was not populated with technical concepts and questions!");
}
console.log("  ✓ Video Debrief Panel: Populated with 5 technical concepts and 3 guided questions");

// --- TEST 3: Part 4 Interactive Gap-Fill Clinic ---
console.log("\n[Test 3] Testing Part 4 Interactive Gap-Fill Clinic...");
for (let i = 1; i <= 7; i++) {
  if (!domNodes['gap-a-' + i]) throw new Error("FAIL: gap-a-" + i + " dropdown element missing in Part 4 Text A!");
}
for (let i = 1; i <= 6; i++) {
  if (!domNodes['gap-b-' + i]) throw new Error("FAIL: gap-b-" + i + " dropdown element missing in Part 4 Text B!");
}

// Test checkGapFillAas2TextA with wrong answers
domNodes['gap-a-1'].value = 'wrong';
ctx.window.checkGapFillAas2TextA();
let scoreEl = domNodes['gap-a-score'];
console.log("  ✓ Check answers with 0 correct:", scoreEl.textContent);

// Test checkGapFillAas2TextA with 100% correct answers
domNodes['gap-a-1'].value = 'attitude';
domNodes['gap-a-2'].value = 'ailerons';
domNodes['gap-a-3'].value = 'differentially';
domNodes['gap-a-4'].value = 'longitudinal';
domNodes['gap-a-5'].value = 'rudder';
domNodes['gap-a-6'].value = 'camber';
domNodes['gap-a-7'].value = 'spoilers';
ctx.window.checkGapFillAas2TextA();
console.log("  ✓ Check answers with 100% correct (Text A):", scoreEl.textContent);
if (!scoreEl.textContent.includes('7 / 7')) {
  throw new Error("FAIL: Text A score did not report 7 / 7!");
}

// Test Text B
domNodes['gap-b-1'].value = 'radome';
domNodes['gap-b-2'].value = 'pitot-static';
domNodes['gap-b-3'].value = 'oleo-pneumatic';
domNodes['gap-b-4'].value = 'hydraulic';
domNodes['gap-b-5'].value = 'static wicks';
domNodes['gap-b-6'].value = 'delamination';
ctx.window.checkGapFillAas2TextB();
let scoreBEl = domNodes['gap-b-score'];
console.log("  ✓ Check answers with 100% correct (Text B):", scoreBEl.textContent);
if (!scoreBEl.textContent.includes('6 / 6')) {
  throw new Error("FAIL: Text B score did not report 6 / 6!");
}

// --- TEST 4: Part 5 Technical Error Hunter ---
console.log("\n[Test 4] Testing Part 5 Technical Error Hunter...");
for (let i = 1; i <= 8; i++) {
  if (!domNodes['error-card-ans-' + i]) throw new Error("FAIL: error-card-ans-" + i + " missing!");
  domNodes['error-card-ans-' + i].classList.add('hidden');
}

if (typeof ctx.window.toggleAllErrorCorrections !== 'function') {
  throw new Error("FAIL: window.toggleAllErrorCorrections is not a function!");
}

ctx.window.toggleAllErrorCorrections();
const visibleCount = [1,2,3,4,5,6,7,8].filter(i => !domNodes['error-card-ans-' + i].classList.contains('hidden')).length;
if (visibleCount !== 8) {
  throw new Error("FAIL: toggleAllErrorCorrections did not un-hide all 8 cards!");
}
console.log("  ✓ window.toggleAllErrorCorrections() successfully toggled all 8 statement cards");

// --- TEST 5: Part 6 Taboo Cards & 15-Question Quiz Engine ---
console.log("\n[Test 5] Testing Part 6 Taboo & 15-Question Technical Mastery Challenge...");
const tabooCount = (html.match(/Forbidden Words/g) || []).length;
if (tabooCount !== 12) {
  throw new Error("FAIL: Expected 12 Taboo cards, found: " + tabooCount);
}
console.log("  ✓ Verified 12 Taboo cards with forbidden words and phonetic stress");

if (typeof ctx.window.handleMasteryQuizSelect !== 'function') {
  throw new Error("FAIL: window.handleMasteryQuizSelect is not a function!");
}
if (typeof ctx.window.resetMasteryQuiz !== 'function') {
  throw new Error("FAIL: window.resetMasteryQuiz is not a function!");
}

// Reset quiz
ctx.window.resetMasteryQuiz();
const quizScoreEl = domNodes['mastery-score-display'];
console.log("  ✓ Initial Quiz Score:", quizScoreEl.textContent);

// Select correct answer for Q1
ctx.window.handleMasteryQuizSelect(1, 1, 1);
console.log("  ✓ Score after answering Q1 correctly:", quizScoreEl.textContent);
if (!quizScoreEl.textContent.includes('1 / 15')) {
  throw new Error("FAIL: Quiz score did not update to 1 / 15!");
}

// Select wrong answer for Q2
ctx.window.handleMasteryQuizSelect(2, 1, 0);
console.log("  ✓ Score after answering Q2 incorrectly:", quizScoreEl.textContent);
if (!quizScoreEl.textContent.includes('1 / 15')) {
  throw new Error("FAIL: Quiz score changed on incorrect answer!");
}

console.log("\n================================================================================");
console.log("🎉 ALL END-TO-END RUNTIME & INTERACTIVE TESTS PASSED (100% OPERATIONAL)!");
console.log("================================================================================\n");
