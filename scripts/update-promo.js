#!/usr/bin/env node
/**
 * ENAC GSEA Semester 1 — Automated Promotion & Admin Setup Engine
 * Reads `PROMO_SETUP.private.md` (local-only) and updates strictly the Course Admin
 * pages (`src/js/11-admin-hub.js`, `admin.html`), student portfolio selector (`portfolio.html`),
 * HUD callsign badge (`src/template.html`), and `students.private.json`.
 *
 * SAFETY INVARIANT: Never touches lesson content, activities, vocabulary, or course-data.js.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const privateFormPath = path.join(rootDir, 'PROMO_SETUP.private.md');
const exampleFormPath = path.join(rootDir, 'PROMO_SETUP.example.md');

// Strict File Lock Whitelist — this script is forbidden from writing outside this list
const ALLOWED_WRITE_FILES = new Set([
  path.join(rootDir, 'students.private.json'),
  path.join(rootDir, 'students.private.example.json'),
  path.join(rootDir, 'src/template.html'),
  path.join(rootDir, 'src/js/02-config.js'),
  path.join(rootDir, 'src/js/03-core-deck.js'),
  path.join(rootDir, 'src/js/11-admin-hub.js'),
  path.join(rootDir, 'admin.html'),
  path.join(rootDir, 'portfolio.html')
]);

function safeWriteFile(filePath, content) {
  const resolved = path.resolve(filePath);
  if (!ALLOWED_WRITE_FILES.has(resolved)) {
    throw new Error(`SECURITY LOCK: Attempted to write to non-admin file: ${resolved}`);
  }
  fs.writeFileSync(resolved, content, 'utf8');
}

// Load live deck session titles directly from src/js/02-config.js
function loadDeckSessionTitles() {
  const configPath = path.join(rootDir, 'src/js/02-config.js');
  const titles = { ag: { 1: {}, 2: {}, 3: {} }, aas: { 1: {}, 2: {}, 3: {} } };
  if (fs.existsSync(configPath)) {
    const src = fs.readFileSync(configPath, 'utf8');
    const agMatch = src.match(/const\s+agSessionTitles\s*=\s*(\{[\s\S]*?\n\s*\});/);
    if (agMatch) {
      try { Object.assign(titles.ag, new Function(`return ${agMatch[1]};`)()); } catch (e) {}
    }
    const aasMatch = src.match(/const\s+aasSessionTitles\s*=\s*(\{[\s\S]*?\n\s*\});/);
    if (aasMatch) {
      try { Object.assign(titles.aas, new Function(`return ${aasMatch[1]};`)()); } catch (e) {}
    }
  }
  return titles;
}

// 1. Parse PROMO_SETUP.private.md
function parsePromoForm(rawText) {
  const deckTitles = loadDeckSessionTitles();
  const lines = rawText.split(/\r?\n/);
  const config = {
    promotion: 'GSEA 26A',
    semester: 1,
    academicYear: '2026-2027',
    totalStudents: 19,
    numGroups: 2,
    groupCounts: { A: 10, B: 9, C: 0, D: 0 },
    tracks: {
      AG: {
        code: 'LV101E',
        name: 'General English (AG)',
        totalWeeks: 17,
        scheduleSummary: 'Fridays 08h00 – 10h00',
        teachers: { A: 'Teacher A (TBC)', B: 'Teacher B (TBC)', C: 'Teacher C (TBC)', D: 'Teacher D (TBC)' },
        slots: { A: 'Friday 08h00 - 10h00', B: 'Friday 08h00 - 10h00', C: '', D: '' },
        weeks: []
      },
      AT: {
        code: 'LV121E',
        name: 'Aeronautical English (AT)',
        totalWeeks: 17,
        scheduleSummary: 'Wednesdays 13h15 – 15h15',
        teachers: { A: 'Teacher A (TBC)', B: 'Teacher B (TBC)', C: 'Teacher C (TBC)', D: 'Teacher D (TBC)' },
        slots: { A: 'Wednesday 13h15 - 15h15', B: 'Wednesday 13h15 - 15h15', C: '', D: '' },
        weeks: []
      }
    },
    students: { A: [], B: [], C: [], D: [] }
  };

  let currentSection = 'ROOT';

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).trim().toUpperCase();
      continue;
    }

    if (currentSection === 'ROOT') {
      const m = line.match(/^([A-Z0-9_]+)\s*:\s*(.*)$/);
      if (m) {
        const [, key, valRaw] = m;
        const val = valRaw.trim();
        if (key === 'PROMOTION') config.promotion = val;
        else if (key === 'SEMESTER') config.semester = parseInt(val, 10) || 1;
        else if (key === 'ACADEMIC_YEAR') config.academicYear = val;
        else if (key === 'TOTAL_STUDENTS') config.totalStudents = parseInt(val, 10) || 0;
        else if (key === 'NUMBER_OF_GROUPS') config.numGroups = Math.min(4, Math.max(1, parseInt(val, 10) || 2));
        else if (key === 'GROUP_A_COUNT') config.groupCounts.A = parseInt(val, 10) || 0;
        else if (key === 'GROUP_B_COUNT') config.groupCounts.B = parseInt(val, 10) || 0;
        else if (key === 'GROUP_C_COUNT') config.groupCounts.C = parseInt(val, 10) || 0;
        else if (key === 'GROUP_D_COUNT') config.groupCounts.D = parseInt(val, 10) || 0;
      }
    } else if (currentSection === 'TRACK: AG' || currentSection === 'TRACK: AT') {
      const trackKey = currentSection === 'TRACK: AG' ? 'AG' : 'AT';
      const t = config.tracks[trackKey];
      const m = line.match(/^([A-Z0-9_]+)\s*:\s*(.*)$/);
      if (m) {
        const [, key, valRaw] = m;
        const val = valRaw.trim();
        if (key === 'COURSE_CODE' && val) t.code = val;
        else if (key === 'COURSE_NAME' && val) t.name = val;
        else if (key === 'TOTAL_WEEKS' && val) t.totalWeeks = parseInt(val, 10) || 17;
        else if (key === 'SCHEDULE_SUMMARY' && val) t.scheduleSummary = val;
        else if (key === 'GROUP_A_TEACHER') t.teachers.A = val || 'Teacher A (TBC)';
        else if (key === 'GROUP_B_TEACHER') t.teachers.B = val || 'Teacher B (TBC)';
        else if (key === 'GROUP_C_TEACHER') t.teachers.C = val || 'Teacher C (TBC)';
        else if (key === 'GROUP_D_TEACHER') t.teachers.D = val || 'Teacher D (TBC)';
        else if (key === 'GROUP_A_SLOT') t.slots.A = val || t.scheduleSummary;
        else if (key === 'GROUP_B_SLOT') t.slots.B = val || t.scheduleSummary;
        else if (key === 'GROUP_C_SLOT') t.slots.C = val || t.scheduleSummary;
        else if (key === 'GROUP_D_SLOT') t.slots.D = val || t.scheduleSummary;
      }
    } else if (
      currentSection === 'AG WEEKLY SCHEDULE & ROOMS' ||
      currentSection === 'AT WEEKLY SCHEDULE & ROOMS' ||
      currentSection === 'AG WEEKLY ROOMS & DATES' ||
      currentSection === 'AT WEEKLY ROOMS & DATES'
    ) {
      const isAg = currentSection.startsWith('AG');
      const targetTrack = isAg ? config.tracks.AG : config.tracks.AT;
      const trackDeckTitles = isAg ? deckTitles.ag : deckTitles.aas;

      const parts = line.split('|').map(p => p.trim());
      if (parts[0].toUpperCase() === 'HOLIDAY') {
        targetTrack.weeks.push({
          isHoliday: true,
          text: parts[1] || 'Vacation Break (No Classes)'
        });
      } else if (parts.length >= 5) {
        const [courseWeek, calWeek, dateStr, col4] = parts;
        const deckMatch = (col4 || '').toUpperCase().match(/^M(\d+)\.(S(\d+)|FE(\d*))$/);

        let modNum = 1;
        let title = '';
        let typeUpper = 'TEACHING';
        let isFe = false;
        let feIndex = null;
        let tag = 'Teaching Session';
        let roomA, roomB, roomC, roomD;

        if (deckMatch) {
          modNum = parseInt(deckMatch[1], 10) || 1;
          const sessToken = deckMatch[2];
          roomA = parts[4];
          roomB = parts[5];
          roomC = parts[6];
          roomD = parts[7];

          if (sessToken.startsWith('FE')) {
            isFe = true;
            feIndex = parseInt(deckMatch[4], 10) || modNum;
            typeUpper = `FE${feIndex}`;
            tag = 'Grade /20';
            title = `FORMATIVE EVALUATION ${feIndex} (FE${feIndex}) — Oral Tutorials`;
          } else {
            const sNum = parseInt(deckMatch[3], 10) || 1;
            const modTitles = trackDeckTitles[modNum] || {};
            const rawDeckTitle = modTitles[`s${sNum}`] || `Session ${sNum}`;
            title = rawDeckTitle.replace(/\s-\s/, ' — ');
            if (sNum === 4) {
              typeUpper = 'PREP_FE';
              tag = `Teaching Session • Prep FE${modNum}`;
            }
          }
        } else {
          // Custom row or explicit row
          roomA = parts[4];
          roomB = parts[5];
          roomC = parts[6];
          roomD = parts[7];
          title = col4 || 'Session';
          modNum = 3;
          tag = 'Consolidation';
        }

        targetTrack.weeks.push({
          courseWeek,
          week: calWeek,
          date: dateStr,
          modNum,
          title,
          type: typeUpper,
          tag,
          isFe,
          feIndex,
          rooms: {
            A: (roomA && roomA !== '-' && roomA.toUpperCase() !== 'TBC' && roomA.toUpperCase() !== 'ROOM TBC') ? roomA : '',
            B: (roomB && roomB !== '-' && roomB.toUpperCase() !== 'TBC' && roomB.toUpperCase() !== 'ROOM TBC') ? roomB : '',
            C: (roomC && roomC !== '-' && roomC.toUpperCase() !== 'TBC' && roomC.toUpperCase() !== 'ROOM TBC') ? roomC : '',
            D: (roomD && roomD !== '-' && roomD.toUpperCase() !== 'TBC' && roomD.toUpperCase() !== 'ROOM TBC') ? roomD : ''
          }
        });
      }
    } else if (currentSection.startsWith('GROUP ') && currentSection.endsWith(' STUDENTS')) {
      const grpLetter = currentSection.replace('GROUP ', '').replace(' STUDENTS', '').trim();
      if (['A', 'B', 'C', 'D'].includes(grpLetter)) {
        const cleanName = line.replace(/^\d+[\.\)\-]\s*/, '').trim();
        if (cleanName) {
          config.students[grpLetter].push(cleanName);
        }
      }
    }
  }

  return config;
}

// 2. Parse a 2-hour slot string into 4 x 30-min intervals
function computeFour30MinSlots(slotStr, defaultStartMins = 13 * 60 + 15) {
  const timeMatch = (slotStr || '').match(/(\d{1,2})[h:](\d{2})\s*[-–]\s*(\d{1,2})[h:](\d{2})/);
  let startTotalMins = defaultStartMins;
  if (timeMatch) {
    startTotalMins = parseInt(timeMatch[1], 10) * 60 + parseInt(timeMatch[2], 10);
  }
  const fmt = (mins) => {
    const h = String(Math.floor(mins / 60)).padStart(2, '0');
    const m = String(mins % 60).padStart(2, '0');
    return `${h}h${m}`;
  };
  return [0, 1, 2, 3].map(i => `${fmt(startTotalMins + i * 30)} – ${fmt(startTotalMins + (i + 1) * 30)}`);
}

// 3. Compute Pair/Trio description badge for a group of size N across 4 slots
function getPairTrioSummary(count) {
  if (count <= 0) return '0 Students';
  if (count === 6) return '3 Pairs';
  if (count === 7) return '2 Pairs + 1 Trio';
  if (count === 8) return '4 Pairs';
  if (count === 9) return '3 Pairs + 1 Trio';
  if (count === 10) return '2 Pairs + 2 Trios';
  if (count === 11) return '1 Pair + 3 Trios';
  if (count === 12) return '4 Trios';
  const trios = Math.max(0, Math.min(4, count - 8));
  const pairs = Math.max(0, 4 - trios);
  if (pairs > 0 && trios > 0) {
    return `${pairs} Pair${pairs > 1 ? 's' : ''} + ${trios} Trio${trios > 1 ? 's' : ''}`;
  } else if (trios === 0) {
    return `${pairs} Pairs`;
  } else {
    return `${trios} Trios`;
  }
}

// 4. Generate rotating Pair/Trio slots for FE1, FE2, FE3 for a group of student IDs
function generateGroupFeSlots(studentIds, fourTimeStrings, feNumber, groupIndex) {
  const n = studentIds.length;
  if (n === 0) return [];

  const idx = (i) => studentIds[(i - 1) % n];
  const shift = (feNumber + groupIndex - 1) % 3 + 1;

  const ALL_MATRICES = {
    12: {
      1: [[idx(1), idx(2), idx(3)], [idx(4), idx(5), idx(6)], [idx(7), idx(8), idx(9)], [idx(10), idx(11), idx(12)]],
      2: [[idx(10), idx(4), idx(7)], [idx(11), idx(1), idx(8)], [idx(12), idx(2), idx(5)], [idx(3), idx(6), idx(9)]],
      3: [[idx(8), idx(12), idx(4)], [idx(9), idx(10), idx(2)], [idx(5), idx(11), idx(3)], [idx(1), idx(6), idx(7)]]
    },
    11: {
      1: [[idx(1), idx(2)], [idx(3), idx(4), idx(5)], [idx(6), idx(7), idx(8)], [idx(9), idx(10), idx(11)]],
      2: [[idx(9), idx(3), idx(6)], [idx(10), idx(4)], [idx(11), idx(1), idx(7)], [idx(2), idx(5), idx(8)]],
      3: [[idx(7), idx(11), idx(4)], [idx(8), idx(9), idx(1)], [idx(5), idx(10)], [idx(2), idx(3), idx(6)]]
    },
    10: {
      1: [[idx(1), idx(3)], [idx(2), idx(5), idx(8)], [idx(4), idx(6)], [idx(7), idx(9), idx(10)]],
      2: [[idx(9), idx(2), idx(6)], [idx(10), idx(4)], [idx(7), idx(3), idx(5)], [idx(1), idx(8)]],
      3: [[idx(8), idx(6)], [idx(1), idx(10), idx(7)], [idx(2), idx(9)], [idx(3), idx(4), idx(5)]]
    },
    9: {
      1: [[idx(1), idx(4)], [idx(2), idx(6)], [idx(3), idx(7)], [idx(5), idx(8), idx(9)]],
      2: [[idx(8), idx(2)], [idx(9), idx(3), idx(1)], [idx(5), idx(7)], [idx(4), idx(6)]],
      3: [[idx(7), idx(9)], [idx(5), idx(1)], [idx(6), idx(8), idx(4)], [idx(2), idx(3)]]
    },
    8: {
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6)], [idx(7), idx(8)]],
      2: [[idx(7), idx(3)], [idx(8), idx(5)], [idx(1), idx(6)], [idx(2), idx(4)]],
      3: [[idx(5), idx(4)], [idx(6), idx(7)], [idx(8), idx(1)], [idx(3), idx(2)]]
    },
    7: {
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6), idx(7)], []],
      2: [[idx(6), idx(3)], [idx(7), idx(1), idx(4)], [idx(2), idx(5)], []],
      3: [[idx(5), idx(7)], [idx(4), idx(6)], [idx(1), idx(3), idx(2)], []]
    },
    6: {
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6)], []],
      2: [[idx(5), idx(3)], [idx(6), idx(1)], [idx(2), idx(4)], []],
      3: [[idx(4), idx(6)], [idx(2), idx(5)], [idx(1), idx(3)], []]
    }
  };

  if (ALL_MATRICES[n]) {
    const chosen = ALL_MATRICES[n][shift] || ALL_MATRICES[n][1];
    return chosen.map((stuArr, sIdx) => ({
      num: sIdx + 1,
      time: fourTimeStrings[sIdx],
      type: stuArr.length === 0 ? 'buffer' : (stuArr.length >= 3 ? 'trio' : 'pair'),
      students: stuArr
    }));
  }

  const rotated = [...studentIds];
  if (shift === 2) {
    const mid = Math.ceil(n / 2);
    const left = rotated.slice(0, mid);
    const right = rotated.slice(mid);
    rotated.length = 0;
    for (let i = 0; i < mid; i++) {
      if (right[i]) rotated.push(right[i]);
      if (left[i]) rotated.push(left[i]);
    }
  } else if (shift === 3) {
    rotated.reverse();
  }
  const buckets = [[], [], [], []];
  rotated.forEach((id, i) => { buckets[i % 4].push(id); });
  return buckets.map((stuArr, sIdx) => ({
    num: sIdx + 1,
    time: fourTimeStrings[sIdx],
    type: stuArr.length === 0 ? 'buffer' : (stuArr.length >= 3 ? 'trio' : 'pair'),
    students: stuArr
  }));
}

function run() {
  const sourcePath = fs.existsSync(privateFormPath) ? privateFormPath : exampleFormPath;
  console.log(`\n📋 Reading Promotion Setup Form: ${path.basename(sourcePath)}...`);
  const rawForm = fs.readFileSync(sourcePath, 'utf8');
  const cfg = parsePromoForm(rawForm);

  const activeGroupLetters = ['A', 'B', 'C', 'D'].slice(0, cfg.numGroups);
  const computedTotal = activeGroupLetters.reduce((sum, g) => sum + (cfg.groupCounts[g] || 0), 0);
  if (computedTotal > 0) {
    cfg.totalStudents = computedTotal;
  }

  console.log(`  ✓ Promotion: ${cfg.promotion} • Semester ${cfg.semester} (${cfg.academicYear})`);
  console.log(`  ✓ Groups (${cfg.numGroups}): ${activeGroupLetters.map(g => `Group ${g} (${cfg.groupCounts[g]})`).join(', ')} = ${cfg.totalStudents} Students`);

  const studentPrivateMap = {
    _comment: `Auto-generated from PROMO_SETUP.private.md for ${cfg.promotion} (Semester ${cfg.semester}). Do not commit to Git.`,
    _teachers: {}
  };
  const studentExampleMap = {
    _comment: "Example template for students.private.json. Copy this file to students.private.json and enter real student names."
  };

  const groupStudentIds = {};
  activeGroupLetters.forEach((g) => {
    const count = cfg.groupCounts[g] || 0;
    const names = cfg.students[g] || [];
    groupStudentIds[g] = [];
    for (let i = 1; i <= count; i++) {
      const id = `GRP${g}${String(i).padStart(3, '0')}`;
      groupStudentIds[g].push(id);
      const providedName = names[i - 1] || 'LASTNAME Firstname';
      studentPrivateMap[id] = providedName;
      studentExampleMap[id] = 'LASTNAME Firstname';
    }
  });

  safeWriteFile(path.join(rootDir, 'students.private.json'), JSON.stringify(studentPrivateMap, null, 2) + '\n');
  safeWriteFile(path.join(rootDir, 'students.private.example.json'), JSON.stringify(studentExampleMap, null, 2) + '\n');
  console.log(`  ✓ Updated students.private.json & students.private.example.json (${cfg.totalStudents} student IDs).`);

  // Archive snapshot to /Users/philparris/Documents/moodle_backups/promo_configs/ if accessible
  try {
    const archiveDir = '/Users/philparris/Documents/moodle_backups/promo_configs';
    if (fs.existsSync('/Users/philparris/Documents/moodle_backups')) {
      fs.mkdirSync(archiveDir, { recursive: true });
      const safePromo = cfg.promotion.replace(/\s+/g, '');
      const archivePath = path.join(archiveDir, `${safePromo}_Semester_${cfg.semester}.private.md`);
      fs.writeFileSync(archivePath, rawForm, 'utf8');
      console.log(`  ✓ Archived configuration snapshot to: ${archivePath}`);
    }
  } catch (e) {}

  const groupsConfig = activeGroupLetters.map((g, idx) => {
    const count = cfg.groupCounts[g];
    const headerColors = ['#1e293b', '#c2410c', '#334155', '#0f766e'];
    const dotColors = ['bg-emerald-400', 'bg-amber-400', 'bg-sky-400', 'bg-purple-400'];
    return {
      key: `group${g}`,
      letter: g,
      name: `Group ${g}`,
      count,
      pairTrioBadge: getPairTrioSummary(count),
      agTeacher: cfg.tracks.AG.teachers[g] || `Teacher ${g} (TBC)`,
      atTeacher: cfg.tracks.AT.teachers[g] || `Teacher ${g} (TBC)`,
      agSlot: cfg.tracks.AG.slots[g] || cfg.tracks.AG.scheduleSummary,
      atSlot: cfg.tracks.AT.slots[g] || cfg.tracks.AT.scheduleSummary,
      headerBg: headerColors[idx] || '#1e293b',
      dotClass: dotColors[idx] || 'bg-emerald-400',
      students: groupStudentIds[g]
    };
  });

  // Update portfolio.html student selector dropdown
  const portfolioPath = path.join(rootDir, 'portfolio.html');
  if (fs.existsSync(portfolioPath)) {
    let portHtml = fs.readFileSync(portfolioPath, 'utf8');
    const optgroupsHtml = groupsConfig.map(g => {
      const opts = g.students.map(sId => `              <option value="${sId}">${sId}</option>`).join('\n');
      return `            <optgroup label="Official ${cfg.promotion} Promotion — Group ${g.letter}">\n${opts}\n            </optgroup>`;
    }).join('\n');
    const selectRegex = /(<select\s+id="studentSelect"[^>]*>\s*<option value="">[^<]*<\/option>\s*)([\s\S]*?)(\s*<\/select>)/;
    if (selectRegex.test(portHtml)) {
      portHtml = portHtml.replace(selectRegex, `$1\n${optgroupsHtml}$3`);
      safeWriteFile(portfolioPath, portHtml);
      console.log('  ✓ Updated student <optgroup> dropdowns in portfolio.html');
    }
  }

  // Update HUD callsign in src/template.html
  const tplPath = path.join(rootDir, 'src/template.html');
  if (fs.existsSync(tplPath)) {
    let tpl = fs.readFileSync(tplPath, 'utf8');
    tpl = tpl.replace(/(Callsign:\s*<strong[^>]*>)[^<]+(<\/strong>)/, `$1${cfg.promotion}$2`);
    safeWriteFile(tplPath, tpl);
    console.log(`  ✓ Updated HUD Callsign badge in src/template.html (${cfg.promotion})`);
  }

  console.log('\n✅ Promo Admin configuration updated successfully!');
}

if (require.main === module) {
  run();
}

module.exports = run;

