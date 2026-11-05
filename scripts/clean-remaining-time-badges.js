const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const filesToClean = [
  'src/js/06-templates-ag2.js',
  'src/js/07-templates-ag3.js',
  'src/js/08-templates-aas2.js',
  'src/js/08b-templates-aas3.js'
];

for (const relPath of filesToClean) {
  const filePath = path.join(rootDir, relPath);
  let content = fs.readFileSync(filePath, 'utf8');

  // Specific badge replacements
  content = content
    .replace(/>0-10m</g, '>Part 1<')
    .replace(/>55-100m</g, '>Part 4<')
    .replace(/>65-110m</g, '>Part 5<')
    .replace(/>75-110m</g, '>Part 5<')
    .replace(/>100-120m</g, '>Part 5<');

  // Also clean any phrases like "5-minute accident analysis"
  content = content
    .replace(/5-minute\s+accident\s+analysis/gi, 'accident analysis');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Cleaned remaining badges in ${relPath}`);
}

