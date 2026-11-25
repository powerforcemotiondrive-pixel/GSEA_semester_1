#!/usr/bin/env node
/**
 * scripts/import-presentation.js
 * Imports slide text from PRESENTATION.md and updates both admin.html and src/js/11-admin-hub.js
 */

const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../PRESENTATION.md');
if (!fs.existsSync(mdPath)) {
  console.error('Error: PRESENTATION.md not found at', mdPath);
  process.exit(1);
}

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Parse markdown into slide data
const slideSections = mdContent.split(/^## Slide /m).slice(1);
console.log(`Parsed ${slideSections.length} slides from PRESENTATION.md`);

const slidesData = slideSections.map((sec, idx) => {
  const lines = sec.split('\n');
  const headerLine = lines[0]; // e.g. "1: Refonte Timeline: Phased Cohort Deployment"
  const title = headerLine.replace(/^\d+:\s*/, '').trim();

  const getMeta = (prefix) => {
    const match = sec.match(new RegExp(`- \\*\\*${prefix}\\*\\*:\\s*(.*)`));
    return match ? match[1].trim() : '';
  };

  const badge = getMeta('Badge');
  const subtitle = getMeta('Subtitle');
  const pill = getMeta('Pill');

  return { idx, title, badge, subtitle, pill, raw: sec };
});

function updateHtmlFile(filePath, isEscaped) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content;

  slidesData.forEach((s) => {
    // Colors per slide
    const colors = ['orange', 'orange', 'sky', 'amber', 'indigo', 'emerald'];
    const color = colors[s.idx] || 'slate';

    // Update H2 title
    const q = isEscaped ? '\\"' : '"';
    const h2Pattern = new RegExp(
      `(<div id=${q}refonte-slide-${s.idx}${q}[\\s\\S]*?<h2 class=${q}text-base sm:text-xl font-black text-[a-z]+-600 mt-1${q}>)[\\s\\S]*?(<\\/h2>)`
    );
    if (h2Pattern.test(updated)) {
      updated = updated.replace(h2Pattern, `$1${s.title}$2`);
    }

    // Update subtitle if found
    if (s.subtitle) {
      const subPattern = new RegExp(
        `(<div id=${q}refonte-slide-${s.idx}${q}[\\s\\S]*?<p class=${q}text-\\[12px\\] text-slate-500 mt-0\\.5${q}>)[\\s\\S]*?(<\\/p>)`
      );
      if (subPattern.test(updated)) {
        updated = updated.replace(subPattern, `$1${s.subtitle}$2`);
      }
    }
  });

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✓ Updated presentation in: ${filePath}`);
  } else {
    console.log(`- No changes needed in: ${filePath}`);
  }
}

updateHtmlFile(path.join(__dirname, '../admin.html'), false);
updateHtmlFile(path.join(__dirname, '../src/js/11-admin-hub.js'), true);

console.log('✅ Presentation import complete. Rebuilding index.html...');
