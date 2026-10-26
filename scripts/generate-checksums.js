#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = path.resolve(__dirname, '..');
const outputFile = path.join(rootDir, 'CHECKSUMS.sha256');

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function scanFiles(dir, baseDir = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file.startsWith('.') || file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    const relPath = path.join(baseDir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanFiles(fullPath, relPath));
    } else {
      results.push(relPath);
    }
  }
  return results;
}

function generateChecksums() {
  const targetFiles = [
    'imsmanifest.xml',
    'COPYRIGHT.md',
    'index.html',
    'admin.html',
    'presentation.html',
    'portfolio.html',
    'immersion.html',
    'output.css'
  ];

  // Add data/ and images/
  if (fs.existsSync(path.join(rootDir, 'data'))) {
    scanFiles(path.join(rootDir, 'data'), 'data').forEach(f => targetFiles.push(f));
  }
  if (fs.existsSync(path.join(rootDir, 'images'))) {
    scanFiles(path.join(rootDir, 'images'), 'images').forEach(f => targetFiles.push(f));
  }

  const lines = [
    '# ============================================================================',
    '# ENAC GSEA English Learning Platform — Cryptographic SHA-256 Manifest',
    '# Author & Pedagogical Architect: Phil PARRIS (Département LH / LAN)',
    '# © 2026 Phil PARRIS. All Rights Reserved.',
    '# Generated: ' + new Date().toISOString(),
    '# ============================================================================',
    ''
  ];

  for (const relPath of targetFiles) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const hash = getFileHash(fullPath);
      lines.push(`${hash}  ${relPath}`);
    }
  }

  fs.writeFileSync(outputFile, lines.join('\n') + '\n', 'utf8');
  console.log(`✓ Generated cryptographic SHA-256 manifest (${lines.length - 8} files signed).`);
  return outputFile;
}

if (require.main === module) {
  generateChecksums();
}

module.exports = generateChecksums;

