/**
 * scripts/strip-icons.js
 * Automated CLI utility to strip decorative emojis and non-functional icons
 * across GSEA Semester projects.
 *
 * Usage:
 *   node scripts/strip-icons.js <semester> <track> <session>
 * Examples:
 *   node scripts/strip-icons.js 1 ag 1
 *   node scripts/strip-icons.js 1 at 2
 *   node scripts/strip-icons.js 1 mod1
 *   node scripts/strip-icons.js 1 all
 *   node scripts/strip-icons.js all
 */

const fs = require('fs');
const path = require('path');

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: node scripts/strip-icons.js <semester: 1|2|3|all> [track: ag|at|aas|all] [session: 1..N|all]");
  process.exit(1);
}

const semArg = args[0].toLowerCase().replace('semester', '');
const trackArg = (args[1] || 'all').toLowerCase();
const sessionArg = (args[2] || 'all').toLowerCase();

console.log(`🧹 Running Strip Decorative Icons: Semester=${semArg}, Track=${trackArg}, Session=${sessionArg}`);

// 1. Clean Universal Template Dispatcher (removes decorative emojis in briefing banners and badges)
function cleanDispatcher(filePath) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Remove emoji spans in session briefing banner
  const removals = [
    '<span class="text-xs">💡</span>',
    '<span class="text-xs">📌</span>',
    '<span class="text-xs">🎯</span>',
    '<span class="text-xs">🧭</span>',
    '<span>👨‍🏫 Teacher Tips &amp; Speaking Prompts</span>',
    '<span class="text-blue-400 font-bold">💻 In-Class:</span>',
    '<span class="text-indigo-400 font-bold">📄 Offline / Paper:</span>',
    '<span class="text-amber-400 font-bold">📚 Self-Study:</span>'
  ];

  const replacements = [
    '',
    '',
    '',
    '',
    '<span>Teacher Tips &amp; Speaking Prompts</span>',
    '<span class="text-blue-400 font-bold">In-Class:</span>',
    '<span class="text-indigo-400 font-bold">Offline / Paper:</span>',
    '<span class="text-amber-400 font-bold">Self-Study:</span>'
  ];

  removals.forEach((target, i) => {
    if (code.includes(target)) {
      code = code.replaceAll(target, replacements[i]);
      changed = true;
    }
  });

  // Ensure modeBadges strips emojis automatically
  if (code.includes('text = String(b || "");') && !code.includes('.replace(EMOJI_REGEX')) {
    code = code.replace(
      'text = String(b || "");',
      'text = String(b || "").replace(/[\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/gu, "").trim();'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`  ✓ Cleaned universal template dispatcher: ${filePath}`);
  }
}

// 2. Clean Target Session Template
function cleanSessionTemplate(filePath, sessionNum) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');
  let original = code;

  // Strip decorative book/document SVG before Example Story
  const bookSvgPattern = /<svg width="15" height="15" class="text-amber-600 shrink-0"[^>]*>[\s\S]*?<\/svg>/g;
  code = code.replace(bookSvgPattern, '');

  // Strip emojis in the targeted session function
  const funcRegex = new RegExp(`(function render\\w+Session${sessionNum}\\([\\s\\S]*?\\n\\s*\\})`, 'g');
  code = code.replace(funcRegex, (match) => {
    return match.replace(EMOJI_REGEX, '');
  });

  if (code !== original) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`  ✓ Cleaned session template: ${filePath} (Session ${sessionNum})`);
  }
}

// 3. Clean Course Data JSON/JS
function cleanCourseData(filePath, track, sessionNum) {
  if (!fs.existsSync(filePath)) return;
  let raw = fs.readFileSync(filePath, 'utf8');
  
  // Clean emojis in modeBadges array entries for the target
  const modeBadgeRegex = /"modeBadges":\s*\[([\s\S]*?)\]/g;
  let cleaned = raw.replace(modeBadgeRegex, (fullMatch, listContent) => {
    const cleanedContent = listContent.replace(EMOJI_REGEX, '').replace(/""\s*,?/g, '').trim();
    return `"modeBadges": [${cleanedContent}]`;
  });

  if (cleaned !== raw) {
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log(`  ✓ Cleaned course-data.js modeBadges in ${filePath}`);
  }
}

// Execution Router
cleanDispatcher('src/js/04-templates-dispatcher.js');

if (semArg === '1' || semArg === 'all') {
  cleanCourseData('data/course-data.js', trackArg, sessionArg);
  if (trackArg === 'ag' || trackArg === 'all') {
    cleanSessionTemplate('src/js/05b-templates-ag1.js', sessionArg === 'all' ? 1 : sessionArg);
  }
  if (trackArg === 'at' || trackArg === 'all') {
    cleanSessionTemplate('src/js/05a-templates-at1.js', sessionArg === 'all' ? 1 : sessionArg);
  }
}

console.log("✅ Strip complete.");
