#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'src', 'template.html');
const jsDir = path.join(rootDir, 'src', 'js');
const outputPath = path.join(rootDir, 'index.html');

function buildHtml() {
  console.log('🏗️  Compiling index.html from src/ modules...');

  // Verify data/course-data.js syntax and integrity
  const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
  if (fs.existsSync(courseDataPath)) {
    try {
      require(courseDataPath);
      console.log('  ✓ [data/course-data.js] Syntax and data structure verified.');
    } catch (err) {
      console.error(`✗ Fatal Error: Syntax or parsing error in ${courseDataPath}:`, err.message);
      process.exit(1);
    }
  }

  if (!fs.existsSync(templatePath)) {
    console.error(`✗ Error: Template not found at ${templatePath}`);
    process.exit(1);
  }

  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // Read all .js files in src/js sorted by numerical prefix
  const jsFiles = fs.readdirSync(jsDir)
    .filter(file => file.endsWith('.js'))
    .sort();

  console.log(`  Found ${jsFiles.length} source JS modules in src/js:`);

  // Pre-flight automated syntax guard: verify all JS files parse cleanly
  for (const file of jsFiles) {
    const filePath = path.join(jsDir, file);
    try {
      execSync(`node -c "${filePath}"`, { stdio: 'pipe' });
    } catch (err) {
      console.error(`\n❌ FATAL SYNTAX ERROR detected in module [src/js/${file}]:`);
      const errorMsg = err.stderr ? err.stderr.toString() : err.message;
      console.error(errorMsg);
      console.error(`🛑 BUILD ABORTED: index.html was NOT updated to protect production stability.`);
      console.error(`   Please fix the syntax error in src/js/${file} and retry.\n`);
      process.exit(1);
    }
  }

  let combinedJs = '';
  jsFiles.forEach(file => {
    const filePath = path.join(jsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`    ✓ [${file}] (${content.split('\n').length} lines)`);
    combinedJs += content;
  });

  const placeholder = '  <!-- INLINE_APP_SCRIPTS -->\n';
  if (!templateContent.includes(placeholder)) {
    console.error(`✗ Error: Placeholder '${placeholder}' not found in ${templatePath}`);
    process.exit(1);
  }

  const outputHtml = templateContent.replace(placeholder, combinedJs);

  fs.writeFileSync(outputPath, outputHtml, 'utf8');
  console.log(`✓ index.html successfully compiled (${outputHtml.split('\n').length} lines).\n`);
}

if (require.main === module) {
  buildHtml();
}

module.exports = buildHtml;

