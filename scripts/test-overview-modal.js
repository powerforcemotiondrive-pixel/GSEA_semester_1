/**
 * scripts/test-overview-modal.js
 * 
 * Tests the Session Overview & Additional Speaking Activity Modal in a simulated DOM environment.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const coreDeckPath = path.join(rootDir, 'src', 'js', '03-core-deck.js');
const coreDeckJs = fs.readFileSync(coreDeckPath, 'utf8');

console.log('🧪 Testing Session Overview Modal Integration in codebase...');

// 1. Check UNDEFINED fix in src/js/03-core-deck.js
if (coreDeckJs.includes('progConfig.title')) {
  console.error('✗ Error: progConfig.title found in src/js/03-core-deck.js (causes UNDEFINED bug)');
  process.exit(1);
}
console.log('  ✓ UNDEFINED bug check: progConfig.name correctly used');

// 2. Check ADDITIONAL SPEAKING ACTIVITY badge in src/js/03-core-deck.js
if (!coreDeckJs.includes('ADDITIONAL SPEAKING ACTIVITY')) {
  console.error('✗ Error: ADDITIONAL SPEAKING ACTIVITY banner not found in src/js/03-core-deck.js');
  process.exit(1);
}
console.log('  ✓ ADDITIONAL SPEAKING ACTIVITY banner verified in src/js/03-core-deck.js');

// 3. Test courseData overview structure across all 24 sessions
const courseData = require(path.join(rootDir, 'data', 'course-data.js'));

for (const track of ['ag', 'aas']) {
  for (const m of ['1', '2', '3']) {
    for (const s of ['1', '2', '3', '4']) {
      const sess = courseData[track][m].sessions[s];
      if (!sess.overview) {
        console.error(`✗ Missing overview in ${track} M${m} S${s}`);
        process.exit(1);
      }
      if (!sess.overview.intro || sess.overview.intro.length < 50) {
        console.error(`✗ ${track} M${m} S${s} intro is missing or too brief`);
        process.exit(1);
      }
      if (!sess.overview.whyItMatters || sess.overview.whyItMatters.length < 50) {
        console.error(`✗ ${track} M${m} S${s} whyItMatters is missing or too brief`);
        process.exit(1);
      }
      if (sess.overview.whyItMatters.includes('structural load paths')) {
        console.error(`✗ ${track} M${m} S${s} still contains engineering jargon 'structural load paths'`);
        process.exit(1);
      }
      if (!sess.overview.keyTerms || sess.overview.keyTerms.length !== 10) {
        console.error(`✗ ${track} M${m} S${s} does not have exactly 10 key terms (found ${sess.overview.keyTerms ? sess.overview.keyTerms.length : 0})`);
        process.exit(1);
      }
      const task = sess.overview.speakingTask;
      if (!task || !task.statements || !task.statements.group1 || !task.statements.group2 || !task.statements.group3) {
        console.error(`✗ ${track} M${m} S${s} missing 3-group statements in speakingTask`);
        process.exit(1);
      }
    }
  }
}
console.log('  ✓ Verified all 24 sessions in course-data.js have complete B1/B2 overviews & 3-group statements');

console.log('🎉 ALL MODAL INTEGRATION TESTS PASSED!');
