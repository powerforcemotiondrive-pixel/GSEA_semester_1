#!/usr/bin/env node
/**
 * ============================================================================
 * ENAC GSEA English Learning Platform — French INPI e-Soleau Archival Script
 * © 2026 Phil PARRIS. All Rights Reserved.
 *
 * Prepares a clean, timestamped archive of the human-editable source tree,
 * architecture documentation, and copyright manifest for official deposit
 * at the Institut National de la Propriété Industrielle (INPI - inpi.fr).
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure checksums are up to date
const generateChecksums = require('./generate-checksums');
generateChecksums();

const now = new Date();
const dateStr = now.toISOString().slice(0, 10);
const zipName = `GSEA_Semester_1_INPI_eSoleau_${dateStr}.zip`;
const zipOutput = path.join(distDir, zipName);

console.log('🏛️  Starting INPI e-Soleau Archival Packaging for Phil PARRIS...\n');

if (fs.existsSync(zipOutput)) {
  fs.unlinkSync(zipOutput);
}

// Items included in the legal deposit archive
const includeItems = [
  'COPYRIGHT.md',
  'CHECKSUMS.sha256',
  'README.md',
  'AGENTS.md',
  'package.json',
  'imsmanifest.xml',
  'src',
  'data',
  'images',
  'scripts',
  'admin.html',
  'presentation.html',
  'portfolio.html',
  'immersion.html'
].filter(item => fs.existsSync(path.join(rootDir, item)));

try {
  const cmd = `zip -r -q "${zipOutput}" ${includeItems.join(' ')} -x "*.DS_Store" "*node_modules*" "*.git*" "*students.private.json*" "*dist*"`;
  execSync(cmd, { cwd: rootDir, stdio: 'inherit' });

  const stats = fs.statSync(zipOutput);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  // Compute SHA-256 of the e-Soleau archive itself
  const archiveBuffer = fs.readFileSync(zipOutput);
  const archiveSha = crypto.createHash('sha256').update(archiveBuffer).digest('hex');

  console.log('✅ INPI e-Soleau archive created successfully!');
  console.log(`📍 Archive File: ${zipOutput} (${sizeMB} MB)`);
  console.log(`🔒 Archive SHA-256 Fingerprint: ${archiveSha}\n`);
  console.log('📋 Next steps to deposit at INPI (Institut National de la Propriété Industrielle):');
  console.log('  1. Go to https://www.inpi.fr and log into your e-Soleau portal.');
  console.log('  2. Click "Déposer une enveloppe Soleau" (approx. 15 €).');
  console.log(`  3. Upload the file: dist/${zipName}`);
  console.log('  4. Set title: "ENAC GSEA English Learning Platform — Semester 1 (Phil PARRIS)"');
  console.log('  5. Once submitted, download and retain the official INPI receipt with certified timestamp (date certaine).\n');
} catch (err) {
  console.error('✗ Failed to bundle e-Soleau archive:', err.message);
  process.exit(1);
}

