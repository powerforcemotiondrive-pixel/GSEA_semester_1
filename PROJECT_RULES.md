# GSEA SEMESTER 1 — PROJECT RULES & ARCHITECTURAL CONSTITUTION
**Course**: ENAC GSEA Semester 1 (Aeronautical & General English)  
**Coordinator & Instructor**: Phil PARRIS (LH/LAN)  
**Primary LMS Target**: ENAC Moodle / eCampus (SCORM 1.2 Package)  
**Repository**: `https://github.com/powerforcemotiondrive-pixel/GSEA_semester_1.git`  
**Last Updated**: October 2026

---

## 1. INVIOLABLE RULES FOR FUTURE AI AGENTS

Before modifying any file in this repository, any AI assistant MUST adhere to the following non-negotiable architectural constraints:

1. **NO EXTERNAL FRAMEWORKS OR HEAVY RUNTIMES**:
   - The platform is strictly built with **Plain HTML5, Vanilla JavaScript (ES6+), and locally compiled Tailwind CSS v4**.
   - Do NOT introduce React, Vue, Svelte, jQuery, Bootstrap, Lodash, or npm frontend runtime dependencies.
2. **STRICT RELATIVE PATHS (MOODLE COMPATIBILITY)**:
   - When unzipped in Moodle, files run from dynamic hashed subdirectories.
   - Root files must link CSS as `href="output.css"`. Subdirectories (`session1/`, `session2/`, etc.) must link CSS as `href="../output.css"`.
   - **NEVER use root-relative paths** (e.g., `/output.css` or `/images/...`) as they completely break when hosted inside an LMS.
3. **ZERO EXTERNAL CDNs / ZERO GOOGLE FONTS**:
   - The package must be 100% self-contained and offline-capable.
   - Do NOT load fonts from `fonts.googleapis.com` or icons from FontAwesome/unpkg/cdnjs.
   - All typography uses system font stacks (`font-sans`, `font-mono`). All icons are inline SVGs.
4. **DO NOT BREAK GOOGLE INGESTION (`mode: "no-cors"`)**:
   - The Google Form submission script in `portfolio.html` uses `fetch(..., { method: "POST", mode: "no-cors", ... })`.
   - **DO NOT change `mode: "no-cors"` to "cors"** and do not replace this dual-route architecture with a raw Google iframe.
5. **ALWAYS USE `npm run package` TO BUNDLE**:
   - Never manually zip the project folder. Always run `npm run package`.
   - This script minifies Tailwind CSS, validates all resources in `imsmanifest.xml`, and builds `dist/GSEA_Semester_1_SCORM.zip`.
6. **MANDATORY PRE-IMPLEMENTATION RESPONSE & APPROVAL GATE**:
   - ALL user questions, requests, and feature suggestions require a thorough review, report, and recommendation response from the AI assistant **BEFORE** implementing any changes.
   - The assistant must always conclude with an explicit prompt asking the user to **proceed or ignore/adjust** and await explicit confirmation before modifying any files.
7. **AUTOMATED DATED BACKUPS (`backup1` & `backup2`)**:
   - `backup1` creates a full dated zip archive into `~/Documents/moodle_backups/GSEA_semester_1/`.
   - `backup2` creates a full dated zip archive into `~/Documents/moodle_backups/GSEA_semester_2/`.
   - Automated via `scripts/backup.js` and executable directly via `npm run backup1` / `npm run backup2`.
8. **CROSS-PROJECT SYNCHRONIZATION (`Semester 1` <-> `Semester 2`)**:
   - Any new rules, operational guidelines, or shared tooling scripts must immediately be synchronized across both `GSEA_semester_1` and `GSEA_semester_2`.
9. **ATOMIC COMMIT & PUSH PROTOCOL**:
   - Whenever instructed to "Commit" or "Commit changes", the assistant automatically runs both `git commit` and `git push origin main` in a single step to keep remote GitHub repositories and GitHub Pages permanently up to date.
10. **PLAIN ENGLISH & GLOBAL B2 ACCESSIBILITY (ZERO PEDAGOGICAL OR ACADEMIC JARGON)**:
    - **Language Lessons, Not Technical Instruction**: All sessions are communicative, spoken English lessons designed to build confidence, practical fluency, and real-world conversation skills. They are NOT theoretical linguistics lectures, teacher-training courses, or technical instruction sessions.
    - **Universal B2 Understandability**: All instructions—both student-facing worksheets and teacher notes—must use clear, simple, plain English easily understood by any B2 learner worldwide.
    - **Strictly Forbidden Academic / Linguistic Jargon**:
      - Never use pedagogical meta-labels or academic jargon such as: `"scaffolding phrases"`, `"pedagogical scaffolding"`, `"discourse markers"`, `"syntactic complexity"`, `"prepositional dependency"`, `"distractor patterns"`, `"subject-auxiliary inversion"`, `"concessive signposts"`, or `"opinion signposts"`.
      - Always replace with direct, human-friendly terms: `"Useful phrases"`, `"Useful storytelling words"`, `"Example story"`, `"Key phrases for expressing opinions"`, `"Connecting words"`, `"Sentence patterns"`.
    - **Simple, Actionable Steps**: Keep all task instructions concise, direct, and focused on spoken communication, peer interaction, and listening.

---

## 2. PEDAGOGICAL IDENTITY & DUAL-TRACK CURRICULUM

The platform hosts two parallel English curricula sharing a unified flight-deck interface:

### Track A: General English (AG • LV101E)
- **Schedule**: Wednesdays 13h15 – 15h15 (Start Week 44)
- **Modules**:
  - **Module 1 (Sessions 1–5)**: *Travel, Transport & Leisure*
  - **Module 2 (Sessions 6–10)**: *Weather & the Environment*
  - **Module 3 (Sessions 11–15)**: *New Technology*
- **Pedagogical Features**:
  - 4 weekly communicative lessons + 1 Formative Evaluation (FE) tutorial week per module.
  - Weekly TOEIC preparation reflections and Global Exam practice tracking.
  - Dedicated DDRS (Sustainable Development & Corporate Social Responsibility) sessions.

### Track B: Aeronautical English (AAS • LV121E)
- **Schedule**: Integrated Aeronautical Operations
- **Modules**:
  - **Module 1 (Sessions 1–5)**: *Aerodrome Operations & Ground Layout*
  - **Module 2 (Sessions 6–10)**: *Aircraft Structure, Systems & Aerodynamics*
  - **Module 3 (Sessions 11–15)**: *Aviation Safety, Security & Crisis Management*
- **Pedagogical Features**:
  - Standard ICAO phraseology and aeronautical technical communication.
  - **TOEIC fields are auto-muted/hidden** in AAS track (both in questions and ratings).

### Formative Evaluation (FE) Dynamic Rotation Roster
- **Milestones**: **FE1** (Week 48), **FE2** (Week 03), **FE3** (Week 08).
- **Format**: 30-minute oral evaluation tutorials in dynamic pairs/trios (2 hours total per group per FE).
- **19 Official Students**:
  - **Group A (10 students • 4 slots = 2h • 2 pairs + 2 trios)**:
    1. GRPA001
    2. GRPA002
    3. GRPA003
    4. GRPA004
    5. GRPA005
    6. GRPA006
    7. GRPA007
    8. GRPA008
    9. GRPA009
    10. GRPA010
  - **Group B (9 students • 4 slots = 2h • 3 pairs + 1 trio)**:
    1. GRPB001
    2. GRPB002
    3. GRPB003
    4. GRPB004
    5. GRPB005
    6. GRPB006
    7. GRPB007
    8. GRPB008
    9. GRPB009
- **Rotations**: Pairs and trios dynamically rotate for every FE milestone so students experience different partners and alternate between early and late slots. Complete rotas are rendered in `admin.html`.

---

## 3. ARCHITECTURE MAP & DIRECTORY SITEMAP

```
semester1_ag/
├── index.html                 # Main course deck & slide-over drawer host
├── portfolio.html             # Student Learning Portfolio & Google DB client
├── admin.html                 # Course administration, student rosters & FE rotas
├── output.css                 # Compiled minified Tailwind CSS v4 (63 KB)
├── imsmanifest.xml            # SCORM 1.2 manifest (126 verified offline resources)
├── GoogleAppsScript_Backend.js# Reference backend script for Google Cloud Web App
├── PROJECT_RULES.md           # This master architectural constitution
├── package.json               # Build scripts & Tailwind CLI configuration
│
├── data/
│   └── course-data.js         # Offline course content, vocabulary & TOEIC bank
├── images/                    # 37 web-optimized card images (1024px Web JPEG / PNG)
├── scripts/
│   ├── package-scorm.js       # SCORM build, CSS compile & manifest validator
│   ├── optimize-assets.js     # Automated image optimizer & weight reduction pipeline
│   └── extract-course-data.js # Automated data extractor & synchronizer
├── src/
│   └── input.css              # Tailwind v4 source stylesheet (@import "tailwindcss";)
├── dist/
│   └── GSEA_Semester_1_SCORM.zip # Final distribution package for Moodle (~7.4 MB)
│
├── session1/ ... session5/    # Individual lesson cards, objectives & reviews
└── ddrs.html ... ddrs3.html   # Sustainable Development & Mobility standalone cards
```

---

## 4. COURSE ENGINE ARCHITECTURE (`index.html`)

### Separation of Engine vs. Content
- `index.html` acts as the presentation engine (navigation, keyboard shortcuts, modal management, drawer controls).
- **Course Content Lives in `data/course-data.js`**: Vocabulary lists, grammar tips, article texts, and TOEIC questions are loaded from `data/course-data.js`.
- **Cloning for Future Semesters**: To create Semester 2, you only need to clone this repository, update the JSON data in `data/course-data.js`, and leave the presentation engine intact.

### Slide-Over Portfolio Drawer Integration
- **Snug CAD Flight-Deck Width**: Constrained to `max-w-4xl` (896px) to match the portfolio card width exactly.
- **Unified Header**: The drawer header in `index.html` serves as the primary navigation bar. The duplicate banner inside `portfolio.html` is automatically hidden when embedded via CSS class `.in-drawer-mode`.
- **WebKit Mobile Collapse Fix**: Uses `h-full`, `min-h-0`, and `pl-0 sm:pl-10` to prevent drawer vertical collapse on iPad/WebKit browsers.
- **Bidirectional Track Synchronization**:
  ```javascript
  // When deck switches track, postMessage to portfolio iframe
  portfolioIframe.contentWindow.postMessage({ type: 'SET_TRACK', track: currentProgram }, '*');

  // When portfolio switches track, sync parent drawer header
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'SYNC_TRACK') setProgram(event.data.track);
  });
  ```

---

## 5. STUDENT PORTFOLIO ENGINE (`portfolio.html`)

### 1. Authentication & PIN Security
- Students select their name from a strict `<select>` dropdown containing the 19 registered students and enter their randomized 4-digit PIN.
- Verified against the `Students` tab in Google Sheets via the Apps Script Web App.
- Name matching is case-insensitive; PINs support leading-zero padding (`padStart(4, "0")`).

### 2. Dual-Route Ingestion Engine (High Throughput & Zero-Lock)
When a student submits or updates a reflection:
- **Route 1 (Primary: Google Forms Direct POST)**:
  - Submits via `mode: "no-cors"` with standard `URLSearchParams` to `GOOGLE_FORM_ACTION_URL`.
  - Treated by browsers as a simple HTML form submission. Never triggers CORS preflight and cannot be blocked by CORS headers.
  - Handles 19 simultaneous student submissions at the end of class without lock contention.
- **Route 2 (Fallback: Google Apps Script POST)**:
  - If Route 1 encounters network failure, falls back to direct POST to `SCRIPT_URL` with 30-second `LockService` queuing.

### 3. Deterministic In-Memory Deduplication (`logMap`)
- Google Sheets is an **append-only audit log**: initial drafts and edited revisions both remain safely timestamped in the sheet.
- When `portfolio.html` fetches logs, it deduplicates in memory using a composite key:
  ```javascript
  const logMap = new Map();
  rawLogs.forEach(entry => {
    const key = `${entry.track.toUpperCase()}_${getModuleKey(entry.module)}_${formatSessionNum(entry.session)}`;
    logMap.set(key, entry); // Newer rows overwrite older drafts
  });
  currentLoadedLogs = Array.from(logMap.values());
  ```
- Result: The checklist counts strictly 1 per session (e.g. 1/15), and the history renders only the latest revision.

### 4. Interactive Reflection Editing (`Edit ✏️`)
- Students can modify previously submitted reflections by clicking `Edit ✏️` in Section 4.
- Automatically selects the matching module and session, populates input fields with previous text, displays an amber `Edit Mode` banner, and adds a `Cancel` button.
- Optimistically updates local view and re-syncs with Google Sheets after a 4.5-second latency buffer.

### 5. Session Availability & Double-Submission Guards
- Sessions already recorded are disabled in `<select id="sessionSelect">` with `(✓ Completed)`.
- Dropdown auto-advances to the first uncompleted session for the selected module.
- If all 5 sessions in a module are completed, a friendly completion badge appears.
- Immediate button locking (`btn.disabled = true`) on click prevents double-submissions.

### 6. Scoped Storage Keys & Shared Workstation Protection
- Drafts are auto-saved on every keystroke into `localStorage` (with `sessionStorage` fallback).
- Storage keys are strictly scoped per student and track: `gsea_draft_${encodeURIComponent(student)}_${currentTrack}`.
- Student B sitting at a shared lab PC never sees or overwrites Student A's draft.
- Selecting a new name or clicking "Sign Out" immediately wipes the PIN input and resets active logs.

### 7. XSS Sanitization & Print Stylesheet
- Every user-provided string is processed through `escapeHtml()` before rendering into the DOM.
- Print stylesheet (`@media print`) formats logged entries with clean page-breaks for students submitting paper or PDF portfolios to their tutor during FE sessions.

---

## 6. GOOGLE CLOUD & DATABASE CONFIGURATION

### Google Sheet Database (`GSEA_English_Portfolio_DB`)
- **Spreadsheet ID**: `1zNagUBMjubKsglB1BGLnfqwUSO09nn4iOo5VMcVqLD4`
- **Tabs**:
  1. `Students`: Column A = Student Full Name, Column B = 4-digit PIN.
  2. `Form Responses`: Timestamp, Student, PIN, Curriculum Track, Module, Session, Vocab, Content Review, Work On, Eval Help, Eval Rating, TOEIC Prep, TOEIC Rating.

### Mandatory Google Security Settings
1. **Google Sheet Sharing**: Must remain **Strictly Private (Restricted)** to Phil PARRIS's Google account. Students never connect directly to the sheet.
2. **Google Apps Script Web App Deployment**:
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone`
   - *Why*: Google runs the script with your administrator permissions, allowing it to securely query your private sheet and return clean JSON to the student.
3. **Google Form Settings**:
   - **"Restrict to domain users"**: **MUST BE OFF (UNCHECKED)**.
   - *Why*: If checked, Google blocks background fetch submissions from students in incognito, Safari, or on personal laptops with silent 403 errors.
   - **"Limit to 1 response"**: **MUST BE OFF (UNCHECKED)** so students can submit all 15 sessions and edits.
   - **"Collect email addresses"**: **Do not collect**.

---

## 7. SCORM 1.2 PACKAGING & LMS DEPLOYMENT PROTOCOL

### Packaging Command
To compile styles, validate manifest resources, and produce the final SCORM zip:
```bash
npm run package
```

### Packaging Script Operations (`scripts/package-scorm.js`)
1. Executes `npx @tailwindcss/cli -i ./src/input.css -o ./output.css --minify`.
2. Scans `imsmanifest.xml` and verifies that all 119 physical files exist on disk.
3. Bundles verified assets into `dist/GSEA_Semester_1_SCORM.zip` (39.18 MB) and creates an identical copy at root `./GSEA_Semester_1_SCORM.zip`.
4. Ignores `.DS_Store`, `node_modules`, `.git`, and development archives.

### Pre-Flight Verification Commands
To re-verify that the codebase has no rogue external scripts or links:
```bash
grep -rnE '<script[^>]+src="https?://' .   # Must return 0
grep -rnE '<link[^>]+href="https?://' .     # Must return 0
grep -rn "eval(" .                          # Must return 0
```

---

## 8. GIT RELEASE CONVENTIONS

### Commit Discipline
- Always commit working states after completing each discrete feature or fix.
- Use structured commit messages:
  - `feat: [feature description]`
  - `fix: [bug/issue resolved]`
  - `refactor: [cleanup without functional change]`
  - `docs: [documentation updates]`

### Freezing Live Releases
Before starting classroom teaching or making major changes, freeze the current release in Git:
```bash
git tag -a v1.0.0-live -m "Official Semester 1 Live Classroom Release"
git push origin v1.0.0-live
```
If future experiments or refactors ever cause issues, rollback to the live release immediately:
```bash
git checkout v1.0.0-live
```

