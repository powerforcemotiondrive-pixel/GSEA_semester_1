# ENAC GSEA English Platform — Teacher & Administrator Command Reference

A quick-reference guide for Phil PARRIS (Pedagogical Architect & Author) to manage the GSEA English learning decks, cohorts, student portfolios, backups, and deployments using natural AI chat commands or the terminal.

---

## 1. Quick Chat Commands Table

Type these exact phrases directly in chat with the Antigravity assistant:

| Command | Action Performed | What it Updates |
| :--- | :--- | :--- |
| **`Semester 1 Portfolio Summary`**<br>*(or `Semester 2` / `Semester 3`)* | **Cohort Portfolio Pulse Update**<br>Attach or paste the latest Google Sheet export CSV. | • Analyzes student reflections & keywords<br>• Extracts top grammar traps & FE readiness score<br>• Updates the "Portfolio Summary" tab in Card 08/09<br>• Rebuilds SCORM + ISO + DMG and pushes to GitHub |
| **`backup1`** | **Full Semester 1 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_1/` |
| **`backup2`** | **Full Semester 2 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_2/` |
| **`backup3`** | **Full Semester 3 Backup** | Bundles a dated full-project archive `.zip` into `/Documents/moodle_backups/GSEA_semester_3/` |
| **`Semester 1 Update`**<br>*(or `Semester 2` / `Semester 3`)* | **Cohort & Roster Reconfiguration**<br>Edits from `PROMO_SETUP.private.md`. | • Updates student rosters & FE oral rotas<br>• Synchronizes `index.html` & `admin.html`<br>• Updates `portfolio.html` student selector<br>• Rebuilds all 4 distribution packages & commits |
| **`Promo Admin: ...`** | **Inline Cohort Reconfiguration**<br>e.g. `Promo Admin: Promotion GSEA26A, Semester 1, Groups 2, A - 10 B - 9, Teachers AG 2 AT 2` | Same as above, but configured entirely inline in the chat prompt without editing markdown files. |
| **`Commit`**<br>*(or `Commit changes`)* | **Single-Step Remote Sync** | Atomically runs `git commit` AND `git push origin main` together, updating GitHub and GitHub Pages live. |

---

## 2. Detailed Workflows & Guides

### A. Updating the Learning Portfolio Summary Tab
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
   - It tallies keyword frequencies, highlights grammar pitfalls, and averages FE confidence scores.
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
