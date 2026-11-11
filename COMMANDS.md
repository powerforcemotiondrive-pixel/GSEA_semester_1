# ENAC GSEA English Platform — Teacher & Administrator Command Reference

A quick-reference guide for Phil PARRIS (Pedagogical Architect & Author) to manage the GSEA English learning decks, cohorts, student portfolios, backups, and deployments using natural AI chat commands or the terminal.

---

## 1. Quick Chat Commands Table

Type these exact phrases directly in chat with the Antigravity assistant:

| Command | Action Performed | What it Updates |
| :--- | :--- | :--- |
| **`Semester 1 Dual Portfolio Update`**<br>*(or `Semester 1 Full Portfolio Update`)* | **Unified Dual-Portal Portfolio Update**<br>Attach or paste the latest Google Sheet export CSV. | • Ingests CSV once to update **both** Student Deck & Teachers Hub<br>• Updates Student deck Portfolio Summary tab (Card 08/09)<br>• Updates Teachers Hub Portfolio Analytics & Reflection Matrix<br>• Rebuilds all distribution packages across both repositories<br>• Atomically commits & pushes both repositories to GitHub |
| **`Semester 1 Portfolio Summary`**<br>*(or `Semester 2` / `Semester 3`)* | **Cohort Portfolio Pulse Update**<br>Attach or paste the latest Google Sheet export CSV. | • Analyzes student reflections & keywords<br>• Extracts top grammar traps & FE readiness score<br>• Updates the "Portfolio Summary" tab in Card 08/09<br>• Rebuilds SCORM + ISO + DMG and pushes to GitHub |
| **`backup1`** | **Full Semester 1 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_1/` |
| **`backup2`** | **Full Semester 2 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_2/` |
| **`backup3`** | **Full Semester 3 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_3/` |
| **`Semester 1 Update`**<br>*(or `Semester 2` / `Semester 3`)* | **Cohort & Roster Reconfiguration**<br>Edits from `PROMO_SETUP.private.md`. | • Updates student rosters & FE oral rotas<br>• Synchronizes `index.html` & `admin.html`<br>• Updates `portfolio.html` student selector<br>• Rebuilds all 4 distribution packages & commits |
| **`Promo Admin: ...`** | **Inline Cohort Reconfiguration**<br>e.g. `Promo Admin: Promotion GSEA26A, Semester 1, Groups 2, A - 10 B - 9, Teachers AG 2 AT 2` | Same as above, but configured entirely inline in the chat prompt without editing markdown files. |
| **`Media Update`** | **Weekly Media & Film Strip Update**<br>Attach or paste CSV with 5 links + statement. | • Updates Teachers Portal noticeboard & BBC articles<br>• Updates General Culture & Cinema (3 IMDb films)<br>• Rebuilds SCORM + ISO + DMG packages & commits |
| **`Commit`**<br>*(or `Commit changes`)* | **Single-Step Remote Sync** | Atomically runs `git commit` AND `git push origin main` together, updating GitHub and GitHub Pages live. |
| **`Audit S1/2/3 AT/AG/AP/AAS M1/2/3 Ss 1/2/3`**<br>*(e.g. `Audit S1 AG M1 Ss 3`, `Audit Semester 1 Mod 1 AG Ss 3`)* | **Automated Session Audit &amp; A4 PDF Worksheet Setup** | • 8-point automated audit of session quality<br>• Thematic relevance &amp; subject drift scan<br>• 2-Hour classroom sufficiency gauge<br>• Zero academic jargon &amp; zero timings scan<br>• Verifies &amp; sets up exact 7-page A4 PDF worksheet |

---

## 2. Detailed Workflows & Guides

### A. Unified Dual-Portal Portfolio Update (`Semester 1 Dual Portfolio Update`)
**When to use**: Whenever you download the latest Google Sheet responses containing student portfolio submissions and want to update **both** the student deck (`GSEA_semester_1`) and the teachers hub (`GSEA_teachers`) in a single step.

1. Open your live Google Sheet collecting student portfolio responses.
2. Click **File → Download → Comma Separated Values (.csv)**.
3. In chat, attach the CSV file (or paste its text) and send:
   ```text
   Semester 1 Dual Portfolio Update
   ```
4. **What happens automatically under the hood**:
   - Saves CSV to `GSEA_semester_1/data/portfolio-latest.csv` AND `GSEA_teachers/data/portfolio-s1-latest.csv` (both git-ignored).
   - **Student Deck (`GSEA_semester_1`)**: Runs `npm run portfolio:summary`, compiles buzzwords & grammar traps into Card 08/09, rebuilds all 4 packages (`SCORM.zip`, `SCORM_MOODLE.zip`, `.iso`, `.dmg`), and commits & pushes to GitHub.
   - **Teachers Hub (`GSEA_teachers`)**: Runs `npm run portfolio:s1`, updates `index.html` student reflection matrix, rebuilds all 3 packages (`SCORM.zip`, `.iso`, `.dmg`), and commits & pushes to GitHub.
   - Outputs a unified summary report with student submission totals, track breakdown (AT vs AG), and average FE scores.

---

### B. Updating the Learning Portfolio Summary Tab (Single Repo Only)
**When to use**: Every few weeks, after completing a module, or right before Formative Evaluations (FE1, FE2, FE3).

1. Open your live Google Sheet collecting student portfolio responses.
2. Click **File → Download → Comma Separated Values (.csv)**.
3. In the chat with the assistant, attach the CSV file (or paste its text) and send:
   ```text
   Semester 1 Portfolio Summary
   ```
4. **What happens under the hood**:
   - The CSV is saved locally to `data/portfolio-latest.csv` (strictly ignored by `.gitignore`).
   - The aggregation script parses all responses without exposing student PINs or PII.
   - **Anti-Bloat Synthesis Rule**: Keeps the summary curated and high-yield (capped at top 6–8 terms per track, 3–4 grammar traps, 3 reflections) with track-tagging for the 1-row mobile filter (`🌐 All` • `✈️ AT` • `🗣️ AG`), ensuring it never bloats and remains skimmable in under 60 seconds.
   - It updates `PORTFOLIO_SUMMARY_DATA` inside the deck and rebuilds all distribution packages.
   - It commits and pushes live to GitHub Pages automatically.

---

### B. Project Backups (`backup1`, `backup2`, `backup3`)
**When to use**: Before major curriculum overhauls, after finalizing an evaluation cycle, or at the end of each semester.

- Type **`backup1`**, **`backup2`**, or **`backup3`** in chat.
- Archives are saved to:
  - `/Users/philparris/Documents/moodle_backups/GSEA_semester_1/`
  - `/Users/philparris/Documents/moodle_backups/GSEA_semester_2/`
  - `/Users/philparris/Documents/moodle_backups/GSEA_semester_3/`
- Format: `GSEA_Semester_X_backup_YYYY-MM-DD_HHmm.zip` (clean source + assets, omitting `node_modules` and `.git`).

---

### C. Cohort Rotation & Promotion Setup (`Semester X Update`)
**When to use**: At the start of a new academic year or when rotating promotion groups/teachers.

1. Open `PROMO_SETUP.private.md` in the repository root.
2. Update the promotion name, group counts, student names, and assigned teachers.
3. Save the file and send in chat:
   ```text
   Semester 1 Update
   ```
4. **Automatic synchronization occurs across**:
   - `src/template.html` (HUD promotion badge)
   - `src/js/11-admin-hub.js` (In-deck admin drawer)
   - `admin.html` (Standalone admin portal)
   - `portfolio.html` (Student dropdown selector)
   - All 4 packages rebuilt (`SCORM.zip`, `SCORM_MOODLE.zip`, `.iso`, `.dmg`)
   - Auto-committed and pushed to GitHub.

---

### D. Automated Session Audit & A4 PDF Worksheet Setup (`Audit S... / Audit Semester ...`)
**When to use**: Whenever auditing lesson content, checking 2-hour classroom sufficiency, scanning for prohibited jargon or timestamps, or setting up the official 7-page A4 PDF worksheet.

1. Type in chat (or run in terminal):
   ```text
   Audit S1 AG M1 Ss 3
   ```
   *(or `Audit Semester 1 Mod 1 AG Ss 3`, `npm run audit -- "Audit S3 AT M1 S5"`)*
2. **What the audit engine validates**:
   - **Thematic Relevance & Subject Drift**: Analyzes key terms and exercise tasks to detect topic drift.
   - **2-Hour Classroom Sufficiency Gauge**: Verifies 6 communicative stages (`🟢 Optimal`, `🟡 Light`, or `🔴 Deficient`).
   - **1:1 Title Parity**: Validates strict title alignment across course data, admin hub, and standalone admin portal.
   - **Zero Jargon**: Enforces plain B2 English and flags prohibited pedagogical labels or the word "faculty".
   - **Zero Timings**: Enforces teacher pacing autonomy by flagging rigid minute breakdowns and timer emojis.
   - **Active Listening Checklist**: Validates peer checklists for speaking simulations.
   - **Digital Worksheet & Auto-Saving Notes**: Validates `window.saveLessonNote` textareas and official PDF download button.
   - **7-Page A4 PDF Worksheet**: Verifies exact 7/7 page count via macOS PDFKit and checks `imsmanifest.xml`.

---

## 3. Terminal & NPM Runbook (For Direct CLI Use)

If you prefer running commands directly in the terminal:

| Terminal Command | Purpose |
| :--- | :--- |
| `npm run build` | Compiles `src/` modules into `index.html` and builds minified Tailwind CSS. |
| `npm run package` | Builds `index.html`, minified CSS, validates manifest, and produces **SCORM `.zip`**, **`.iso`**, and **`.dmg`** (100% anonymized). |
| `npm run package:moodle` | Injects real student names from `students.private.json` strictly into `dist/GSEA_Semester_X_SCORM_MOODLE.zip` for Moodle upload. |
| `npm run package:iso` | Rebuilds the standalone `.iso` (Windows/Linux) and `.dmg` (macOS) offline installers. |
| `npm run package:esoleau` | Bundles clean human-editable source tree for INPI *date certaine* timestamping on [inpi.fr](https://www.inpi.fr). |
| `npm run promo:update` | Programmatic cohort updater parsing `PROMO_SETUP.private.md`. |
| `npm run backup1` / `2` / `3` | Triggers the dated project backup script. |

---

## 4. Architectural Rules & Invariants to Remember

1. **SCORM 1.2 Strict Offline Self-Containment (Rule 1.A)**:
   - Zero external CDNs or web fonts. Everything must work 100% offline inside ENAC Moodle / eCampus.
2. **Dual-File Parity (Rule 1.B & 1.L)**:
   - Changes to schedules, faculty, or session titles must always update both `src/js/11-admin-hub.js` AND `admin.html` in lockstep.
3. **Student Privacy Protocol (Rule 1.H)**:
   - The Git codebase (`src/`, `admin.html`, `index.html`) must NEVER contain real student names or security PINs.
   - Real names live exclusively in `students.private.json` and `PROMO_SETUP.private.md`, which are permanently git-ignored.

