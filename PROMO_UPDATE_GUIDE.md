# GSEA Course Admin — Semester 1 Promotion Update Guide

This guide explains how to set up a new promotion at the start of the semester—or make mid-semester changes to teachers, rooms, dates, or student lists—by editing **one single local file** (`PROMO_SETUP.private.md`).

> **Privacy Guarantee (GDPR / RGPD)**:
> - `PROMO_SETUP.private.md` stays **100% on your computer** (listed in `.gitignore`) and is never uploaded to GitHub.
> - **GitHub / Cloud mirror** automatically uses anonymous codes (`GRPA001`–`GRPA0XX`, `GRPB001`–`GRPB0XX`).
> - **Moodle SCORM (`GSEA_Semester_1_SCORM_MOODLE.zip`), Windows `.iso`, and Mac `.dmg`** automatically receive the real student and teacher names.

---

## Quick 3-Step Workflow

1. **Open** `PROMO_SETUP.private.md` in your editor.
2. **Edit** the details you want to change (Promotion name, Teachers, Class times, Weekly Dates/Rooms, or Student names) and **Save** (`Cmd + S`).
3. **Run the Update**:
   - **With the AI Assistant**: Type **`Semester 1 Update`** in the chat (this automatically updates the Admin pages, rebuilds the SCORM `.zip`, Moodle `.zip`, `.iso`, and `.dmg` packages, and commits & pushes the anonymized changes to GitHub).
   - **Or Manually in Terminal**: Run `npm run promo:update`.

---

## Field-by-Field Instructions

### 1. Promotion & Group Sizes
At the top of `PROMO_SETUP.private.md`, enter the promotion name, academic year, and how many students are in each group (supports **1 to 4 groups: A, B, C, D**):

```text
PROMOTION: GSEA26A
SEMESTER: 1
ACADEMIC_YEAR: 2026-2027
TOTAL_STUDENTS: 19
NUMBER_OF_GROUPS: 2

GROUP_A_COUNT: 10
GROUP_B_COUNT: 9
GROUP_C_COUNT: 0
GROUP_D_COUNT: 0
```

### 2. Dual-Track Configuration (`[TRACK: AG]` and `[TRACK: AT]`)
In Semester 1, both **General English (AG • LV101E)** and **Technical/Aeronautical English (AT • LV121E)** run for **17 weeks**. Enter the teacher name and 2-hour weekly class slot for each group under `[TRACK: AG]` and `[TRACK: AT]`.

### 3. Weekly Calendar Dates & Room Numbers per Group (`[AG WEEKLY SCHEDULE & ROOMS]` & `[AT WEEKLY SCHEDULE & ROOMS]`)
- `M1.S1`–`M1.S4`, `M2.S1`–`M2.S4`, and `M3.S1`–`M3.S4` automatically pull their live Session Titles directly from the main course deck (`src/js/02-config.js`).
- `M1.FE1`, `M2.FE2`, and `M3.FE3` mark the Formative Evaluation weeks.
- Leave rooms as `TBC` or `-` until known; once you type a room number (e.g. `B204`), a room badge (`Grp A: B204`) appears automatically on that week's calendar row and FE Rota header.

### 4. Student Names per Group
List the students in each group (`1.` to `N.`) in `LASTNAME Firstname` format under `[GROUP A STUDENTS]`, `[GROUP B STUDENTS]`, etc.

