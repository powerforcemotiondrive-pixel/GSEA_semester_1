#!/usr/bin/env python3
import json
import subprocess
import sys
import os

from data_mod1 import articles_mod1
from data_mod2 import articles_mod2
from data_mod3 import articles_mod3

all_articles = {}
all_articles.update(articles_mod1)
all_articles.update(articles_mod2)
all_articles.update(articles_mod3)

print(f"Loaded {len(all_articles)} total enriched articles.")

# Convert tuple keys to string for JSON serialization: "track_mod_sn_idx"
export_dict = {}
for (track, mod, sn, idx), art in all_articles.items():
    key = f"{track}_{mod}_{sn}_{idx}"
    export_dict[key] = art

export_path = os.path.join(os.path.dirname(__file__), "articles_to_apply.json")
with open(export_path, "w", encoding="utf-8") as f:
    json.dump(export_dict, f, indent=2, ensure_ascii=False)

print(f"Exported article payload to {export_path}")

# Node script to safely inject into data/course-data.js
node_script = """
const fs = require('fs');
const path = require('path');

const courseDataFile = path.resolve(__dirname, '../data/course-data.js');
const articlesPayload = require('./articles_to_apply.json');
const cd = require(courseDataFile);

let injectedCount = 0;

for (const [key, art] of Object.entries(articlesPayload)) {
  const [track, mod, sn, idxStr] = key.split('_');
  const idx = parseInt(idxStr, 10);

  // 1. Update cd[track][mod].sessions[sn].materials.articles[idx]
  if (cd[track] && cd[track][mod] && cd[track][mod].sessions && cd[track][mod].sessions[sn]) {
    const mat = cd[track][mod].sessions[sn].materials;
    if (mat && mat.articles && mat.articles[idx]) {
      Object.assign(mat.articles[idx], art);
      injectedCount++;
    }
  }

  // 2. If track === 'ag', also update legacy cd[mod].sessions[sn].materials.articles[idx]
  if (track === 'ag' && cd[mod] && cd[mod].sessions && cd[mod].sessions[sn]) {
    const matLegacy = cd[mod].sessions[sn].materials;
    if (matLegacy && matLegacy.articles && matLegacy.articles[idx]) {
      Object.assign(matLegacy.articles[idx], art);
    }
  }
}

console.log(`Successfully injected ${injectedCount} articles into course-data.js object.`);

// Write back with standard wrapper
const fileHeader = `/**
 * GSEA Semester 1 - General English & Technical English (AT)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const courseData = `;

const fileFooter = `;

  return courseData;
});
`;

fs.writeFileSync(courseDataFile, fileHeader + JSON.stringify(cd, null, 2) + fileFooter, 'utf8');
console.log('course-data.js saved successfully.');
"""

node_runner_path = os.path.join(os.path.dirname(__file__), "run_inject.js")
with open(node_runner_path, "w", encoding="utf-8") as f:
    f.write(node_script)

res = subprocess.run(["node", node_runner_path], capture_output=True, text=True)
print(res.stdout)
if res.stderr:
    print("Stderr:", res.stderr)

if res.returncode != 0:
    print("Injection failed!")
    sys.exit(res.returncode)

# Verify course-data.js syntax
res_syntax = subprocess.run(["node", "-c", os.path.join(os.path.dirname(__file__), "../data/course-data.js")], capture_output=True, text=True)
if res_syntax.returncode == 0:
    print("✓ data/course-data.js syntax validated successfully.")
else:
    print("✗ Syntax error in data/course-data.js:", res_syntax.stderr)
    sys.exit(res_syntax.returncode)

