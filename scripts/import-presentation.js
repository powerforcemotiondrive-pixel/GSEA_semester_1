#!/usr/bin/env node
/**
 * scripts/import-presentation.js
 * Imports presentation content from PRESENTATION.md, updates admin.html,
 * and synchronizes src/js/11-admin-hub.js with 100% syntactic and structural parity.
 */

const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../PRESENTATION.md');
if (!fs.existsSync(mdPath)) {
  console.error('Error: PRESENTATION.md not found at', mdPath);
  process.exit(1);
}

const md = fs.readFileSync(mdPath, 'utf8');

// Parse markdown into slides
const slideSections = md.split(/^## Slide /m).slice(1);
console.log(`Parsed ${slideSections.length} slides from PRESENTATION.md`);

const slidesData = slideSections.map((sec, sIdx) => {
  const lines = sec.split('\n');
  const title = lines[0].replace(/^\d+:\s*/, '').trim();

  const getMeta = (prefix) => {
    const match = sec.match(new RegExp(`- \\*\\*${prefix}\\*\\*:\\s*(.*)`));
    return match ? match[1].trim() : '';
  };

  const badge = getMeta('Badge');
  const subtitle = getMeta('Subtitle');
  const pill = getMeta('Pill');

  const cardChunks = sec.split(/^### Card \d+:\s*/m).slice(1);
  const cards = cardChunks.map((cChunk) => {
    const cLines = cChunk.split('\n');
    const cTitle = cLines[0].trim();
    const getCardMeta = (prefix) => {
      const match = cChunk.match(new RegExp(`- \\*\\*${prefix}\\*\\*:\\s*(.*)`));
      return match ? match[1].trim() : '';
    };
    const tag = getCardMeta('Tag');
    const metric = getCardMeta('Metric');
    const desc = getCardMeta('Description');
    const footer = getCardMeta('Footer');

    const bulletMatch = cChunk.match(/\*\*Key Points\*\*:\s*([\s\S]*?)(?=\n- \*\*Footer\*\*|\n###|\n---|$)/);
    let bullets = [];
    if (bulletMatch) {
      bullets = bulletMatch[1].split('\n').filter(l => l.trim().startsWith('- ')).map(l => l.trim().substring(2));
    }
    return { cTitle, tag, metric, desc, footer, bullets };
  });

  return { sIdx, title, badge, subtitle, pill, cards };
});

function formatBulletToHtml(b, isLi) {
  let formatted = b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  if (isLi) {
    return `<li>${formatted}</li>`;
  } else {
    return `<p>&bull; ${formatted}</p>`;
  }
}

// 1. Update admin.html
const adminPath = path.join(__dirname, '../admin.html');
if (fs.existsSync(adminPath)) {
  let code = fs.readFileSync(adminPath, 'utf8');
  const orig = code;

  slidesData.forEach(slide => {
    const slideIdPattern = new RegExp(`id="refonte-slide-${slide.sIdx}"[\\s\\S]*?(?=id="refonte-slide-${slide.sIdx + 1}"|id="refonte-doc-wrapper")`);
    const match = code.match(slideIdPattern);
    if (!match) return;

    let slideHtml = match[0];

    // H2 Title
    slideHtml = slideHtml.replace(
      /(<h2 class="text-base sm:text-xl font-black text-[a-z]+-600 mt-1">)[\s\S]*?(<\/h2>)/,
      `$1${slide.title}$2`
    );

    // Subtitle
    if (slide.subtitle) {
      slideHtml = slideHtml.replace(
        /(<p class="text-\[12px\] text-slate-500 mt-0\.5">)[\s\S]*?(<\/p>)/,
        `$1${slide.subtitle}$2`
      );
    }

    // Cards
    const cardPattern = /<div class="p-(?:3\.5|4) rounded-xl border[\s\S]*?<\/div>\s*<\/div>/g;
    let cIdx = 0;
    slideHtml = slideHtml.replace(cardPattern, (cMatch) => {
      if (cIdx >= slide.cards.length) return cMatch;
      const cData = slide.cards[cIdx];
      cIdx++;

      let updatedCard = cMatch;

      if (cData.tag) {
        updatedCard = updatedCard.replace(
          /(<span class="px-2 py-0\.5 rounded text-\[9\.5px\][\s\S]*?>)[\s\S]*?(<\/span>)/,
          `$1${cData.tag}$2`
        );
      }

      if (cData.metric) {
        updatedCard = updatedCard.replace(
          /(<span class="text-xs font-mono font-bold[\s\S]*?>)[\s\S]*?(<\/span>)/,
          `$1${cData.metric}$2`
        );
      }

      if (cData.cTitle) {
        updatedCard = updatedCard.replace(
          /(<h3 class="text-xs font-black[\s\S]*?>)[\s\S]*?(<\/h3>)/,
          `$1${cData.cTitle}$2`
        );
      }

      if (cData.desc) {
        updatedCard = updatedCard.replace(
          /(<p class="text-\[11px\] text-slate-600[\s\S]*?>)[\s\S]*?(<\/p>)/,
          `$1${cData.desc}$2`
        );
      }

      if (cData.bullets && cData.bullets.length > 0) {
        if (updatedCard.includes('<ul')) {
          const listHtml = cData.bullets.map(b => '                    ' + formatBulletToHtml(b, true)).join('\n');
          updatedCard = updatedCard.replace(
            /(<ul[\s\S]*?>)[\s\S]*?(<\/ul>)/,
            `$1\n${listHtml}\n                  $2`
          );
        } else {
          const pListHtml = cData.bullets.map(b => '                    ' + formatBulletToHtml(b, false)).join('\n');
          updatedCard = updatedCard.replace(
            /(<div class="text-\[11px\] text-slate-700 space-y-1\.5 leading-tight">)[\s\S]*?(<\/div>\s*<div class="pt-2)/,
            `$1\n${pListHtml}\n                  $2`
          );
        }
      }

      if (cData.footer) {
        updatedCard = updatedCard.replace(
          /(<div class="pt-2 border-t[\s\S]*?>)[\s\S]*?(<\/div>)/,
          `$1\n                    ${cData.footer}\n                  $2`
        );
      }

      return updatedCard;
    });

    code = code.replace(match[0], () => slideHtml);
  });

  if (code !== orig) {
    fs.writeFileSync(adminPath, code, 'utf8');
    console.log(`✓ Synchronized presentation in admin.html`);
  }
}

// 2. Synchronize src/js/11-admin-hub.js directly from admin.html via JSON embedding
const hubPath = path.join(__dirname, '../src/js/11-admin-hub.js');
if (fs.existsSync(adminPath) && fs.existsSync(hubPath)) {
  const adminHtml = fs.readFileSync(adminPath, 'utf8');
  let hubJs = fs.readFileSync(hubPath, 'utf8');

  const startStyle = adminHtml.indexOf('<style>\n      .refonte-deck-container {');
  const endWrapper = adminHtml.indexOf('</section>', startStyle);

  if (startStyle !== -1 && endWrapper !== -1) {
    const slice = '\n    ' + adminHtml.slice(startStyle, endWrapper).trim() + '\n  ';
    const fnStart = hubJs.indexOf('function renderAdminRefonteTab(theme) {');
    const fnEnd = hubJs.indexOf('if (window.initRefonteDeck)', fnStart);

    if (fnStart !== -1 && fnEnd !== -1) {
      const jsonHtml = JSON.stringify(slice);
      const replacement = `function renderAdminRefonteTab(theme) {\n      const bodyEl = document.getElementById('modal-body');\n      if (!bodyEl) return;\n\n      bodyEl.innerHTML = \`\n        \${${jsonHtml}}\n      \`;\n\n      `;
      hubJs = hubJs.slice(0, fnStart) + replacement + hubJs.slice(fnEnd);
      fs.writeFileSync(hubPath, hubJs, 'utf8');
      console.log(`✓ Synchronized presentation in src/js/11-admin-hub.js (100% parity)`);
    }
  }
}

console.log('✅ Presentation import complete.');
