#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const stagingDir = path.join(distDir, 'staging_iso');
const isoOutput = path.join(distDir, 'GSEA_Semester_1_Offline.iso');
const rootIso = path.join(rootDir, 'GSEA_Semester_1_Offline.iso');

console.log('💿 Starting GSEA Semester 1 Cross-Platform Read-Only ISO Packaging...\n');

// 1. Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 2. Compile self-contained index.html from src/ modules
const buildHtml = require('./build-html');
buildHtml();

// 3. Build minified Tailwind CSS
console.log('🎨 Compiling Tailwind CSS (minified)...');
try {
  execSync('npx @tailwindcss/cli -i ./src/input.css -o ./output.css --minify', {
    cwd: rootDir,
    stdio: 'inherit'
  });
  console.log('✓ output.css compiled successfully.\n');
} catch (err) {
  console.error('✗ Failed to compile Tailwind CSS:', err.message);
  process.exit(1);
}

// 4. Generate Cryptographic SHA-256 Manifest
const generateChecksums = require('./generate-checksums');
generateChecksums();

// 5. Create fresh staging directory
if (fs.existsSync(stagingDir)) {
  fs.rmSync(stagingDir, { recursive: true, force: true });
}
fs.mkdirSync(stagingDir, { recursive: true });

// 6. Files and directories to bundle in the ISO root (Source files and Git are omitted)
const includeList = [
  'imsmanifest.xml',
  'COPYRIGHT.md',
  'CHECKSUMS.sha256',
  'index.html',
  'output.css',
  'data',
  'images',
  'admin.html',
  'immersion.html',
  'portfolio.html',
  'presentation.html'
].filter(item => fs.existsSync(path.join(rootDir, item)));

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('📋 Staging compiled offline assets...');
for (const item of includeList) {
  copyRecursive(path.join(rootDir, item), path.join(stagingDir, item));
}

// 5b. Perform student name injection on staged files if students.private.json exists
const privateMapPath = path.join(rootDir, 'students.private.json');
let studentMap = {};
if (fs.existsSync(privateMapPath)) {
  try {
    const raw = fs.readFileSync(privateMapPath, 'utf8');
    studentMap = JSON.parse(raw);
    const count = Object.keys(studentMap).filter(k => !k.startsWith('_')).length;
    console.log(`🔒 Loaded private student mapping from students.private.json (${count} student mappings).`);
  } catch (err) {
    console.warn('⚠️ Warning: Failed to parse students.private.json:', err.message);
  }
}

const keys = Object.keys(studentMap).filter(k => !k.startsWith('_'));
if (keys.length > 0) {
  console.log('🔄 Injecting real student names into offline ISO package...');

  // Inject into index.html and admin.html
  for (const file of ['index.html', 'admin.html']) {
    const stagedFile = path.join(stagingDir, file);
    if (fs.existsSync(stagedFile)) {
      let content = fs.readFileSync(stagedFile, 'utf8');
      let replacedCount = 0;
      for (const key of keys) {
        const val = studentMap[key];
        // 1. In Roster table: display Name (ID), e.g. BEDU Titouan (GRPA001)
        const tableCellRegex = new RegExp(`>${key}<`, 'g');
        content = content.replace(tableCellRegex, `>${val} (${key})<`);

        // 2. In FE Rotas and slot schedules: display Name, e.g. "BEDU Titouan"
        const rotaSlotRegex = new RegExp(`"${key}"`, 'g');
        content = content.replace(rotaSlotRegex, `"${val}"`);

        replacedCount++;
      }
      fs.writeFileSync(stagedFile, content, 'utf8');
      console.log(`  ✓ ${file}: Injected names with IDs for ${replacedCount} identifiers.`);
    }
  }

  // Inject into portfolio.html: Keep value="GRPA001", show "BEDU Titouan (GRPA001)" in display text
  const stagedPortfolio = path.join(stagingDir, 'portfolio.html');
  if (fs.existsSync(stagedPortfolio)) {
    let portContent = fs.readFileSync(stagedPortfolio, 'utf8');
    let portReplacedCount = 0;
    for (const key of keys) {
      const val = studentMap[key];
      // Target only the option display text: <option value="GRPA001">GRPA001</option> -> <option value="GRPA001">BEDU Titouan (GRPA001)</option>
      const optRegex = new RegExp(`<option\\s+value="${key}">.*?<\\/option>`, 'g');
      portContent = portContent.replace(optRegex, `<option value="${key}">${val} (${key})</option>`);
      portReplacedCount++;
    }
    fs.writeFileSync(stagedPortfolio, portContent, 'utf8');
    console.log(`  ✓ portfolio.html: Injected display names with anonymous values for ${portReplacedCount} identifiers.`);
  }
}

// Add a helpful read-only instructions banner
const readmeContent = `======================================================================
ENAC GSEA SEMESTER 1 ENGLISH PORTAL — READ-ONLY OFFLINE EDITION
======================================================================

QUICK START:
Double-click "index.html" in this folder.

This is the ONLY file you need to open. 
The entire learning portal, interactive course modules, audio tracks,
course administration hub, and project presentation are all integrated
and accessible directly from inside index.html.

COMPATIBILITY:
- Windows 10 & 11 (PC): Automatically mounts as a Virtual DVD Drive.
- macOS (Mac): Automatically mounts as a Virtual CD-ROM volume.

WRITE PROTECTION:
This disc image is write-protected by the operating system for stability
and security. Contents cannot be modified, edited, or overwritten.

When finished, right-click the virtual drive and select "Eject".
======================================================================
`;
fs.writeFileSync(path.join(stagingDir, 'START_HERE.txt'), readmeContent, 'utf8');

// 6. Generate Hybrid ISO Image using native macOS hdiutil
console.log('🗜️  Generating Universal Hybrid ISO (Windows Joliet + Mac UDF/ISO)...');
if (fs.existsSync(isoOutput)) {
  fs.unlinkSync(isoOutput);
}
if (fs.existsSync(rootIso)) {
  fs.unlinkSync(rootIso);
}

try {
  // hdiutil makehybrid creates cross-platform ISO9660 + Joliet (Windows) + UDF image with Mac auto-open window
  const cmd = `hdiutil makehybrid -iso -joliet -udf -hfs -hfs-openfolder "${stagingDir}" -hfs-volume-name "GSEA_SEM1" -default-volume-name "GSEA_SEM1" -o "${isoOutput}" "${stagingDir}"`;
  execSync(cmd, { cwd: rootDir, stdio: 'inherit' });

  // Copy to root directory for convenient access
  fs.copyFileSync(isoOutput, rootIso);

  // Clean staging directory
  fs.rmSync(stagingDir, { recursive: true, force: true });

  // 7. Also generate a native compressed Apple DMG for instant 1-click mounting on macOS
  console.log('🍏 Generating Native Apple Mac DMG (Instant Finder window auto-open)...');
  const dmgOutput = path.join(distDir, 'GSEA_Semester_1_Mac.dmg');
  const rootDmg = path.join(rootDir, 'GSEA_Semester_1_Mac.dmg');
  if (fs.existsSync(dmgOutput)) fs.unlinkSync(dmgOutput);
  if (fs.existsSync(rootDmg)) fs.unlinkSync(rootDmg);

  execSync(`hdiutil convert "${isoOutput}" -format UDZO -o "${dmgOutput}"`, { cwd: rootDir, stdio: 'inherit' });
  fs.copyFileSync(dmgOutput, rootDmg);

  const stats = fs.statSync(isoOutput);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  const dmgStats = fs.statSync(dmgOutput);
  const dmgSizeMB = (dmgStats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n✅ Read-Only Packages created successfully!`);
  console.log(`📍 Universal ISO (Windows PC & Universal): ./GSEA_Semester_1_Offline.iso (${sizeMB} MB)`);
  console.log(`📍 Native Mac DMG (Mac 1-Click Auto-Open):  ./GSEA_Semester_1_Mac.dmg (${dmgSizeMB} MB)`);
  console.log(`🔒 Both are 100% write-protected and mount as read-only virtual drives.`);
  console.log(`🚀 Ready to drag & drop onto any USB key.`);
} catch (err) {
  console.error('✗ Failed to generate ISO image:', err.message);
  process.exit(1);
}

