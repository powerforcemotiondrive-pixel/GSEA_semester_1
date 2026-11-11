/**
 * ENAC GSEA Semester 1 - General English (AG) Module 1 Session 3
 * 7-Page A4 PDF Lesson Worksheet Generator
 * Author: Phil PARRIS (Pedagogical Architect & Author)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const outputPath = path.join(docsDir, 'GSEA_S1_M1_AG_S3_Lesson_Worksheet.pdf');
const htmlTemplatePath = path.join(__dirname, 'ag_s3_worksheet_template.html');

if (!fs.existsSync(htmlTemplatePath)) {
  console.error("HTML template not found:", htmlTemplatePath);
  process.exit(1);
}

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!fs.existsSync(chromePath)) {
  console.error("Chrome executable not found at:", chromePath);
  process.exit(1);
}

console.log("Generating Semester 1 AG Module 1 Session 3 Lesson Worksheet PDF...");
const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPath}" "${htmlTemplatePath}"`;

execSync(cmd);
console.log("✓ PDF generated successfully at:", outputPath);

const stats = fs.statSync(outputPath);
console.log("File size:", stats.size, "bytes (" + (stats.size / 1024).toFixed(1) + " KB)");

// Verify page count via native macOS PDFKit
try {
  const oCmd = `osascript -l JavaScript -e '
    ObjC.import("PDFKit");
    const url = $.NSURL.fileURLWithPath("${outputPath}");
    const doc = $.PDFDocument.alloc.initWithURL(url);
    doc ? doc.pageCount : 0;
  '`;
  const pageCount = parseInt(execSync(oCmd).toString().trim(), 10);
  console.log(`Verified page count via PDFKit: ${pageCount} pages`);
  if (pageCount === 7) {
    console.log("✅ EXACT 7-PAGE INVARIANT VERIFIED (7/7 pages)");
  } else {
    console.error(`❌ PAGE COUNT MISMATCH: Expected 7 pages, got ${pageCount}`);
    process.exit(1);
  }
} catch (e) {
  console.error("Failed to verify page count via PDFKit:", e.message);
  process.exit(1);
}
