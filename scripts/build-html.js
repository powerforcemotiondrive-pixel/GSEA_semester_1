#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'src', 'template.html');
const jsDir = path.join(rootDir, 'src', 'js');
const outputPath = path.join(rootDir, 'index.html');
const adminPath = path.join(rootDir, 'admin.html');

/**
 * Pre-flight automated HTML attribute syntax validator:
 * Validates that every HTML tag attribute opened with =" has a matching closing " before >.
 * Strips dynamic ${...} interpolations to expose tag structure inside template literals.
 */
function validateHtmlAttributes(filePath) {
  if (!fs.existsSync(filePath)) return true;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const errors = [];

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    // Strip template expressions ${...} to isolate HTML tag structure
    const stripped = line.replace(/\$\{[^}]+\}/g, 'EXPR');
    // Match any tag where an attribute quote is opened with =" but unclosed before >
    const matches = stripped.match(/<[a-zA-Z0-9\-]+[^>]*\b[a-zA-Z0-9\-]+="[^"<>]*>/g);
    if (matches) {
      matches.forEach(tag => {
        errors.push({ line: idx + 1, snippet: tag.trim() });
      });
    }
  }

  if (errors.length > 0) {
    const relPath = path.relative(rootDir, filePath);
    console.error(`\n❌ FATAL HTML SYNTAX ERROR detected in [${relPath}]:`);
    errors.forEach(err => {
      console.error(`   Line ${err.line}: Unclosed attribute quote before '>'`);
      console.error(`   Snippet: ${err.snippet}`);
    });
    console.error(`🛑 BUILD ABORTED: index.html was NOT updated to protect production stability.`);
    console.error(`   Please fix the unclosed HTML attribute quote in ${relPath} and retry.\n`);
    return false;
  }
  return true;
}

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

    // HTML attribute syntax validation inside JS modules
    if (!validateHtmlAttributes(filePath)) {
      process.exit(1);
    }
  }

  // Pre-flight automated HTML validation on template and admin portal
  if (!validateHtmlAttributes(templatePath) || !validateHtmlAttributes(adminPath)) {
    process.exit(1);
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

