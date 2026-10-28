# ENAC GSEA English Semester 1 — AI Agent Guidelines & Architecture Rules

This repository houses the official **Semester 1 English Learning Portal and SCORM 1.2 Package** for ENAC (École Nationale de l'Aviation Civile). It serves as both the live learning interface for students and a reusable template platform for future cohorts and semesters.

---

## 1. System Architecture & Invariant Rules (Permanent)

These rules apply across all cohorts and must be strictly maintained during any modification or refactoring:

### A. SCORM 1.2 Strict Offline Self-Containment
- **Zero External Dependencies**: The package must run completely offline within LMS environments (ENAC Moodle / eCampus). Do not use external CDNs for scripts, fonts, icons, or stylesheets.
- **Asset Indexing**: All distributed assets (HTML, compiled CSS, local scripts, local images, audio, PDFs) must be tracked in `imsmanifest.xml`.
- **Packaging Integrity**: Every file listed in `imsmanifest.xml` must exist on disk. Use `npm run package` to automatically compile minified CSS, validate all manifest assets, and bundle `dist/GSEA_Semester_1_SCORM.zip`.

### B. Dual-File Admin Hub Synchronization
Course administration (student lists, teacher assignments, weekly schedules, and Formative Evaluation rotas) exists in **two interfaces**:
1. **In-Deck Slide-Over Drawer**: Embedded in `index.html` (triggered via Card 07).
2. **Standalone Admin Portal**: Located in `admin.html`.

> **CRITICAL RULE**: Whenever changes are made to timetables, session dates, room allocations, student pairings, or teacher assignments, both `index.html` and `admin.html` **must** be updated simultaneously to maintain complete parity.

### C. Build & Deployment Runbook
- **Source Architecture**:
  - The human-editable code lives cleanly in modular source files under `src/`:
    - `src/template.html`: Base application HTML shell
    - `src/js/01-scorm-engine.js`: SCORM 1.2 runtime API
    - `src/js/02-config.js`: Course & program configuration
    - `src/js/03-core-deck.js`: Navigation, deck state, themes, and audio controllers
    - `src/js/04-templates-dispatcher.js`: Lesson content & activity instruction dispatcher
    - `src/js/05-templates-mod1.js`: Module 1 lesson content (AAS & AG)
    - `src/js/06-templates-ag2.js`: Module 2 General English lesson content
    - `src/js/07-templates-ag3.js`: Module 3 General English lesson content
    - `src/js/08-templates-aas2.js`: Module 2 Aeronautical English lesson content
    - `src/js/09-templates-materials-ddrs.js`: Vocabulary revision, study materials, TOEIC, and DDRS tabs
    - `src/js/10-fe-guidelines.js`: Formative evaluation guidelines, rubrics, and criteria
    - `src/js/11-admin-hub.js`: Promotion rosters, timetables, rota schedules, and immersion hub
    - `src/js/12-footer-init.js`: Interactive quiz handlers and DOMContentLoaded initialization
- **Build & Package (Mandatory SCORM + `.iso` + `.dmg` Rebuild)**:
  - **CRITICAL RULE**: Every time code, content, or assets are updated, the `.iso` (`GSEA_Semester_X_Offline.iso`) and `.dmg` (`GSEA_Semester_X_Mac.dmg`) offline disk images **must** be rebuilt alongside the SCORM `.zip` package.
  - `npm run build`: Compiles `src/` modules into `index.html` and builds minified CSS.
  - `npm run package`:
  ```bash
  npm run package
  ```
  *(Automatically runs `package-scorm.js` AND `package-iso.js`: compiles `src/` into `index.html`, compiles Tailwind CSS v4 minified, validates manifest integrity, outputs the SCORM `.zip`, and rebuilds both the `.iso` and `.dmg` offline installers).*
  - `npm run package:iso`: Rebuilds the `.iso` and `.dmg` offline installers standalone.
- **Release Versioning**:
  - Main production code lives on branch `main`.
  - Production releases are tagged with `v1.2.0-live` (or semantic version increments) and pushed with:
    ```bash
    git push origin main --force --tags
    ```

### D. Mandatory Pre-Implementation Response & Approval Gate
- **No Direct Changes Without Prior Response**: ALL questions, requests, or suggested modifications from the user require a thorough review, report, and recommendation from the AI assistant **BEFORE** implementing any changes.
- **Proceed / Ignore Prompt**: Every proposal or review must conclude with an explicit prompt asking the user whether to **proceed or ignore/adjust** (e.g. *"Please let me know if you would like me to proceed with these changes, or ignore/adjust."*).
- **Explicit Confirmation Required**: The assistant must wait for explicit approval (such as *"Proceed"*, *"Approved"*, or further instructions) before modifying any codebase files.

### E. Automated Project Backups (`backup1`, `backup2` & `backup3`)
- **`backup1` Trigger**: Whenever the user sends `backup1`, the assistant immediately runs `npm run backup1` (or `node scripts/backup.js semester1`) to bundle a full dated archive into `/Users/philparris/Documents/moodle_backups/GSEA_semester_1/` and confirms the file path and archive size.
- **`backup2` Trigger**: Whenever the user sends `backup2`, the assistant immediately runs `npm run backup2` (or `node scripts/backup.js semester2`) to bundle a full dated archive into `/Users/philparris/Documents/moodle_backups/GSEA_semester_2/` and confirms the file path and archive size.
- **`backup3` Trigger**: Whenever the user sends `backup3`, the assistant immediately runs `npm run backup3` (or `node scripts/backup.js semester3`) to bundle a full dated archive into `/Users/philparris/Documents/moodle_backups/GSEA_semester_3/` and confirms the file path and archive size.
- **Archive Convention**: Archives are named `GSEA_Semester_X_backup_YYYY-MM-DD_HHmm.zip`, containing the full project source and compiled assets while omitting `node_modules` and `.git`.

### F. Cross-Project Rule, Feature & Tooling Synchronization (Tri-Project Invariant)
- **Mandatory Tri-Project Propagation**: Whenever an architectural rule, governance guideline, operational command (e.g. `backup1`/`backup2`/`backup3`), utility script, **shared platform feature, portfolio enhancement, or UI workflow improvement** is created or updated in any semester, the assistant MUST automatically evaluate and synchronize that improvement across all three repositories (`GSEA_semester_1`, `GSEA_semester_2`, and `GSEA_semester_3`) within the same session (omitting only content that is strictly semester-specific, such as module lesson topics).

### G. Automatic Atomic Commit & Push Protocol
- **Single-Step Remote Synchronization**: Whenever the user instructs the assistant to `"Commit"` or `"Commit changes"`, the assistant MUST automatically execute **both** `git commit` AND `git push origin main` together in one seamless step, ensuring GitHub and GitHub Pages stay continuously synchronized with local progress.

### H. Student Privacy, Pseudonymization & Offline Moodle Packaging Protocol
- **Strict Codebase Anonymity**: The Git codebase (`src/`, `admin.html`, `index.html`) must NEVER contain real student names or PII. All student rosters and FE evaluation rotas must use anonymous identifiers (`GRPA001`–`GRPA010`, `GRPB001`–`GRPB009`).
- **Private Mapping Security**: Real student names are stored exclusively in the local file `students.private.json`, which is permanently listed in `.gitignore` and must never be committed to Git. A placeholder template `students.private.example.json` is tracked by Git for onboarding.
- **Dual Packaging Pipelines**:
  1. `npm run package`: Generates `dist/GSEA_Semester_X_SCORM.zip` with 100% anonymous identifiers (safe for Git, GitHub Pages, and AI cloud pair-programming).
  2. `npm run package:moodle`: Automatically injects real student names from `students.private.json` strictly into the output zip `dist/GSEA_Semester_X_SCORM_MOODLE.zip` for direct upload to ENAC Moodle / eCampus, leaving working directory files completely anonymous.

### I. Plain English & Global B2 Accessibility (Zero Pedagogical or Academic Jargon)
- **Language Lessons, Not Technical Instruction**: All sessions are communicative, spoken English lessons designed to build confidence, practical fluency, and real-world conversation skills. They are NOT theoretical linguistics lectures, teacher-training courses, or technical instruction sessions.
- **Universal B2 Understandability**: All instructions—both student-facing worksheets and teacher notes—must use clear, simple, plain English easily understood by any B2 learner worldwide.
- **Strictly Forbidden Academic / Linguistic Jargon**:
  - Never use pedagogical meta-labels or academic jargon such as: `"scaffolding phrases"`, `"pedagogical scaffolding"`, `"discourse markers"`, `"syntactic complexity"`, `"prepositional dependency"`, `"distractor patterns"`, `"subject-auxiliary inversion"`, `"concessive signposts"`, or `"opinion signposts"`.
  - Always replace with direct, human-friendly terms: `"Useful phrases"`, `"Useful storytelling words"`, `"Example story"`, `"Key phrases for expressing opinions"`, `"Connecting words"`, `"Sentence patterns"`.
- **Simple, Actionable Steps**: Keep all task instructions concise, direct, and focused on spoken communication, peer interaction, and listening.

### J. Invisible Copyright & Cryptographic Authorship Integrity
- **Moral Rights & Authorship**: All materials are protected under French Intellectual Property law (Articles L.111-1 & L.121-1 CPI) with author attribution to **Phil PARRIS**.
- **100% Invisible On Screen**: No visible copyright notices or disclaimers clutter student or faculty UI. All protections reside under the hood via `<meta>` tags, HTML comment blocks, frozen JavaScript tokens (`window.__GSEA_PROGRAMME_AUTH`), root `COPYRIGHT.md`, and cryptographic `CHECKSUMS.sha256`.
- **INPI e-Soleau Archival Tool**: Run `npm run package:esoleau` to bundle the complete human-editable source tree into `dist/GSEA_Semester_X_INPI_eSoleau_YYYY-MM-DD.zip` for instant certified timestamping (*date certaine*) on [inpi.fr](https://www.inpi.fr).

### K. `Promo Admin` & `Semester X Update` Rapid Cohort & Faculty Configuration Protocol
- **`Semester X Update` Trigger (`PROMO_SETUP.private.md` — Auto-Repackage + Auto-Commit & Push)**: Whenever the user edits `PROMO_SETUP.private.md` and sends `Semester 1 Update`, `Semester 2 Update`, or `Semester 3 Update`, the assistant immediately:
  1. Runs `npm run promo:update` (`node scripts/update-promo.js && npm run package && npm run package:moodle`), which reads `PROMO_SETUP.private.md`, pulls live session titles from `src/js/02-config.js`, updates `students.private.json`, updates the bounded `ADMIN_PROMO_CONFIG` blocks in `src/js/11-admin-hub.js` and `admin.html`, updates `portfolio.html`, and rebuilds all 4 packages (`SCORM.zip`, `SCORM_MOODLE.zip`, `.iso`, `.dmg`).
  2. Automatically executes `git commit` AND `git push origin main` in the same step so the anonymized updates are immediately synchronized to GitHub.
- **Inline Trigger Shorthand (`Promo Admin`)**: Whenever the user sends a `Promo Admin` instruction (e.g., `Promo Admin: Promotion GSEA25A, Semester 3, Groups 3, A - 10 B - 10 C - 10, Teachers AG 0 AT 3 [optional teacher names]`), the assistant automatically updates all cohort, group, student roster, and faculty structures across the entire project.
- **Permanent Semester Track Invariants (Never Changes)**:
  - **Semester 1**: Always **AG** + **AT** (`LV101E` & `LV121E`)
  - **Semester 2**: Always **AG** + **AAS** (`LV102E` & `LV122E`)
  - **Semester 3**: Always **AT** only (`LV125E`, `AG` disabled) — **CRITICAL TERMINOLOGY RULE**: Never use `"Aeronautical English"` in Semester 3; always use **`Technical English`** or **`AT`**.
  - **Semester 4**: Always **AP** only (`AG` disabled)
- **Group Scaling (1 to 4 Groups Max: `A`, `B`, `C`, `D`)**:
  - Supports up to 4 groups (`Group A`, `Group B`, `Group C`, `Group D`).
  - Automatically generates anonymous student IDs (`GRPA001`–`GRPA0XX`, `GRPB001`–`GRPB0XX`, `GRPC001`–`GRPC0XX`, `GRPD001`–`GRPD0XX`), calculates total promotion headcount, and computes the FE pair/trio slot mix per group.
- **Teacher Assignments (`Teachers`)**:
  - Parses teacher counts per track (e.g., `Teachers AG 0 AT 3` or `Teachers AG 2 AT 2`) and optional teacher names per group (`A`, `B`, `C`, `D`).
  - If teacher names are omitted, defaults to clean placeholders (`Teacher A (TBC)`, `Teacher B (TBC)`, `Teacher C (TBC)`, `Teacher D (TBC)`).
  - If a track has `0` teachers (e.g., `AG 0` in Semester 3 or 4), its faculty card is omitted from the Class Groups & Teachers page.
- **Files Synchronized Automatically**:
  1. `src/template.html` (Flight Deck HUD callsign badge)
  2. `src/js/02-config.js` & `src/js/03-core-deck.js` (Admin card tag, description, and dock title)
  3. `src/js/11-admin-hub.js` (In-Deck Admin Hub: overview, faculty cards, and student group tables)
  4. `admin.html` (Standalone Admin Portal: overview, faculty cards, and student group tables)
  5. `portfolio.html` & `students.private.example.json` (Student `<optgroup>` selectors and private mapping template)
  6. Runs `npm run package` to rebuild `index.html`, `output.css`, the SCORM `.zip`, `.iso`, and `.dmg`.

### L. Calendar & Deck Session Title Parity Invariant (Cross-Semester Permanent Rule)
- **1:1 Strict Title Parity**: The lesson titles displayed in the weekly course calendar (`ADMIN_CALENDAR_SCHEDULES` in both `src/js/11-admin-hub.js` and `admin.html`) must **strictly mirror and maintain 1:1 parity** with the session titles and class titles in each deck card (`src/js/02-config.js`, `data/course-data.js`, and the digital worksheets).
- **Mandatory Dual-File Synchronization**: Whenever a session title is modified, refined, or retitled in any deck card, the corresponding calendar entries in both `src/js/11-admin-hub.js` and `admin.html` **must** be updated concurrently to match exactly.

---

## 2. Active Cohort Configuration (GSEA26A • 2026–2027)

*This section defines the active variables for the current cohort. Update this section when rotating students or semesters.*

### Courses & Timetable
- **Technical English (AT • LV121E)**
  - **Schedule**: Wednesdays 13h15 – 15h15 (2 Hours)
  - **Group A Teacher**: Tracy NEILL
  - **Group B Teacher**: Ally HEWETT
  - **Evaluation Dates**:
    - FE1: Wednesday 25 November 2026 (Week 48)
    - FE2: Wednesday 20 January 2027 (Week 03)
    - FE3: Wednesday 24 February 2027 (Week 08)
- **General English (AG • LV101E)**
  - **Schedule**: Fridays 08h00 – 10h00 (2 Hours)
  - **Group A Teacher**: Geri MIDDLETON
  - **Group B Teacher**: Penny WRIGHT
  - **Evaluation Dates**:
    - FE1: Friday 27 November 2026 (Week 48)
    - FE2: Friday 22 January 2027 (Week 03)
    - FE3: Friday 26 February 2027 (Week 08)

### Evaluation Structure
- **Slot Length**: 30 minutes per evaluation slot.
- **Session Capacity**: 4 slots per 2-hour session:
  - AT Slots: `13h15–13h45`, `13h45–14h15`, `14h15–14h45`, `14h45–15h15`
  - AG Slots: `08h00–08h30`, `08h30–09h00`, `09h00–09h30`, `09h30–10h00`
- **Slot Formats**: Alternating student pairs and trios rotated dynamically across FE1, FE2, and FE3 to ensure diverse peer interactions.

---

## 3. Cohort Upgrade & Scaling Guide (e.g., April Cohort / 3 Groups)

When onboarding a new cohort or scaling up from 2 groups to 3 groups (Group A, Group B, Group C):

1. **Update `AGENTS.md`**:
   - Update Section 2 with new student names, group counts, faculty, and timetables.
2. **Update Data Structures in `index.html` & `admin.html`**:
   - Add `groupC` into `ADMIN_GROUPS_DATA` with the third teacher and student roster.
   - Add `groupC` slot schedules into `ADMIN_ROTA_SCHEDULES` for FE1, FE2, and FE3.
   - In both files, extend the rota rendering loop to include a third group row block:
     ```html
     <!-- Group C Rows -->
     <tr class="bg-slate-50/80 font-bold text-slate-800 text-[11px]">
       <td colspan="4" class="py-2 px-3 tracking-wide uppercase bg-slate-100">
         Group C (${...})
       </td>
     </tr>
     ```
3. **Validate & Build**:
   - Run `npm run package` to ensure Tailwind styles and asset manifests remain 100% verified.

