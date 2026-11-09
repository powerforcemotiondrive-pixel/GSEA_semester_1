#!/usr/bin/env node
/**
 * Automated External Link Validator for GSEA Portals
 * Tests all external URLs in data/course-data.js to prevent broken links (404/403/ERR)
 */
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');

if (!fs.existsSync(courseDataPath)) {
  console.log('No data/course-data.js found, skipping link verification.');
  process.exit(0);
}

const cd = require(courseDataPath);
const urls = [];

// Extract from all tracks and sessions
function extractUrls(root) {
  if (!root) return;
  for (const progKey of Object.keys(root)) {
    const prog = root[progKey];
    if (!prog || typeof prog !== 'object') continue;
    for (const modKey of Object.keys(prog)) {
      const mod = prog[modKey];
      if (!mod || !mod.sessions) continue;
      for (const sKey of Object.keys(mod.sessions)) {
        const sess = mod.sessions[sKey];
        if (!sess || !sess.materials) continue;
        const mat = sess.materials;
        (mat.articles || []).forEach((a, i) => {
          if (a.url && a.url.startsWith('http')) {
            urls.push({
              track: progKey,
              module: modKey,
              session: sKey,
              type: 'Article',
              title: a.heading || a.title || `Article ${i + 1}`,
              url: a.url
            });
          }
        });
        (mat.resources || mat.portals || []).forEach((r, i) => {
          if (r.url && r.url.startsWith('http')) {
            urls.push({
              track: progKey,
              module: modKey,
              session: sKey,
              type: 'Resource',
              title: r.name || r.title || `Resource ${i + 1}`,
              url: r.url
            });
          }
        });
      }
    }
  }
}

extractUrls(cd);

// Deduplicate URLs
const uniqueMap = new Map();
urls.forEach(item => {
  if (!uniqueMap.has(item.url)) {
    uniqueMap.set(item.url, []);
  }
  uniqueMap.get(item.url).push(item);
});

console.log(`🔍 [Link Validator] Checking ${uniqueMap.size} unique external URLs (${urls.length} references)...`);

function checkUrl(urlStr) {
  return new Promise((resolve) => {
    try {
      const u = new URL(urlStr);
      const mod = u.protocol === 'https:' ? https : http;
      const options = {
        method: 'GET',
        timeout: 6000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      };
      const req = mod.request(urlStr, options, (res) => {
        const status = res.statusCode;
        const ok = (status >= 200 && status < 400);
        res.resume();
        resolve({ url: urlStr, status, ok });
      });
      req.on('error', (err) => resolve({ url: urlStr, status: 'ERR', error: err.message, ok: false }));
      req.on('timeout', () => { req.destroy(); resolve({ url: urlStr, status: 'TIMEOUT', ok: false }); });
      req.end();
    } catch (e) {
      resolve({ url: urlStr, status: 'INVALID', error: e.message, ok: false });
    }
  });
}

(async () => {
  const results = [];
  const failures = [];

  for (const [urlStr, items] of uniqueMap.entries()) {
    const res = await checkUrl(urlStr);
    results.push(res);
    const ref = items[0];
    const prefix = `[S${ref.session} ${ref.type.toUpperCase()}]`;
    if (res.ok) {
      console.log(`  ✓ ${prefix} (${res.status}) ${ref.title.slice(0, 42)}`);
    } else {
      console.error(`  ✗ ${prefix} (${res.status}) ${ref.title.slice(0, 42)} -> ${urlStr}`);
      failures.push({ ...res, items });
    }
  }

  console.log(`\n======================================================`);
  console.log(`📊 Summary: ${results.length} URLs tested | ${results.length - failures.length} OK | ${failures.length} Issues`);
  console.log(`======================================================\n`);

  if (failures.length > 0) {
    console.warn(`⚠️ Warning: ${failures.length} external URL(s) returned non-OK status. Review and update to canonical endpoints.\n`);
  }
})();
