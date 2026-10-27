# ==========================================================================
# ENAC GSEA — SEMESTER 1 PROMOTION & ADMIN SETUP FORM (TEMPLATE)
# ==========================================================================
# INSTRUCTIONS:
# 1. Edit the values in `PROMO_SETUP.private.md` (which stays 100% local
#    on your Mac and is never uploaded to GitHub).
# 2. Save the file (`Cmd + S`) and type in chat:  Semester 1 Update
#    (or run `npm run promo:update` in the terminal).
# 3. Session titles are pulled automatically from the main course deck
#    (`src/js/02-config.js`). This update ONLY touches Admin & Roster pages.
# ==========================================================================

PROMOTION: GSEA26A
SEMESTER: 1
ACADEMIC_YEAR: 2026-2027
TOTAL_STUDENTS: 19
NUMBER_OF_GROUPS: 2

# --------------------------------------------------------------------------
# 1. GROUP SIZES (Supports 1 to 4 Groups: A, B, C, D)
# --------------------------------------------------------------------------
GROUP_A_COUNT: 10
GROUP_B_COUNT: 9
GROUP_C_COUNT: 0
GROUP_D_COUNT: 0

# --------------------------------------------------------------------------
# 2A. TRACK 1: GENERAL ENGLISH (AG • LV101E) — 17 WEEKS
# --------------------------------------------------------------------------
[TRACK: AG]
COURSE_CODE: LV101E
COURSE_NAME: General English (AG)
TOTAL_WEEKS: 17
SCHEDULE_SUMMARY: Fridays 08h00 – 10h00

GROUP_A_TEACHER: Teacher A (TBC)
GROUP_A_SLOT: Friday 08h00 - 10h00

GROUP_B_TEACHER: Teacher B (TBC)
GROUP_B_SLOT: Friday 08h00 - 10h00

GROUP_C_TEACHER: 
GROUP_C_SLOT: 

GROUP_D_TEACHER: 
GROUP_D_SLOT: 

# --------------------------------------------------------------------------
# AG WEEKLY SCHEDULE & ROOM ALLOCATIONS PER GROUP (17 Weeks)
# Format: Week# | CalWeek | Date | Deck Card | Grp A Room | Grp B Room | Grp C Room | Grp D Room
# --------------------------------------------------------------------------
[AG WEEKLY SCHEDULE & ROOMS]
W01 | W44 | Fri 30 Oct | M1.S1  | TBC | TBC | - | -
W02 | W45 | Fri 06 Nov | M1.S2  | TBC | TBC | - | -
W03 | W46 | Fri 13 Nov | M1.S3  | TBC | TBC | - | -
W04 | W47 | Fri 20 Nov | M1.S4  | TBC | TBC | - | -
W05 | W48 | Fri 27 Nov | M1.FE1 | TBC | TBC | - | -
W06 | W49 | Fri 04 Dec | M2.S1  | TBC | TBC | - | -
W07 | W50 | Fri 11 Dec | M2.S2  | TBC | TBC | - | -
HOLIDAY | 🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)
W08 | W01 | Fri 08 Jan | M2.S3  | TBC | TBC | - | -
W09 | W02 | Fri 15 Jan | M2.S4  | TBC | TBC | - | -
W10 | W03 | Fri 22 Jan | M2.FE2 | TBC | TBC | - | -
W11 | W04 | Fri 29 Jan | M3.S1  | TBC | TBC | - | -
W12 | W05 | Fri 05 Feb | M3.S2  | TBC | TBC | - | -
W13 | W06 | Fri 12 Feb | M3.S3  | TBC | TBC | - | -
W14 | W07 | Fri 19 Feb | M3.S4  | TBC | TBC | - | -
W15 | W08 | Fri 26 Feb | M3.FE3 | TBC | TBC | - | -
W16 | W09 | Fri 05 Mar | REVIEW | TBC | TBC | - | -
W17 | W10 | Fri 12 Mar | EXAM   | TBC | TBC | - | -

# --------------------------------------------------------------------------
# 2B. TRACK 2: TECHNICAL / AERONAUTICAL ENGLISH (AT • LV121E) — 17 WEEKS
# --------------------------------------------------------------------------
[TRACK: AT]
COURSE_CODE: LV121E
COURSE_NAME: Technical English (AT)
TOTAL_WEEKS: 17
SCHEDULE_SUMMARY: Wednesdays 13h15 – 15h15

GROUP_A_TEACHER: Teacher A (TBC)
GROUP_A_SLOT: Wednesday 13h15 - 15h15

GROUP_B_TEACHER: Teacher B (TBC)
GROUP_B_SLOT: Wednesday 13h15 - 15h15

GROUP_C_TEACHER: 
GROUP_C_SLOT: 

GROUP_D_TEACHER: 
GROUP_D_SLOT: 

# --------------------------------------------------------------------------
# AT WEEKLY SCHEDULE & ROOM ALLOCATIONS PER GROUP (17 Weeks)
# Format: Week# | CalWeek | Date | Deck Card | Grp A Room | Grp B Room | Grp C Room | Grp D Room
# --------------------------------------------------------------------------
[AT WEEKLY SCHEDULE & ROOMS]
W01 | W44 | Wed 28 Oct | M1.S1  | TBC | TBC | - | -
W02 | W45 | Wed 04 Nov | M1.S2  | TBC | TBC | - | -
W03 | W46 | Wed 11 Nov | M1.S3  | TBC | TBC | - | -
W04 | W47 | Wed 18 Nov | M1.S4  | TBC | TBC | - | -
W05 | W48 | Wed 25 Nov | M1.FE1 | TBC | TBC | - | -
W06 | W49 | Wed 02 Dec | M2.S1  | TBC | TBC | - | -
W07 | W50 | Wed 09 Dec | M2.S2  | TBC | TBC | - | -
HOLIDAY | 🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)
W08 | W01 | Wed 06 Jan | M2.S3  | TBC | TBC | - | -
W09 | W02 | Wed 13 Jan | M2.S4  | TBC | TBC | - | -
W10 | W03 | Wed 20 Jan | M2.FE2 | TBC | TBC | - | -
W11 | W04 | Wed 27 Jan | M3.S1  | TBC | TBC | - | -
W12 | W05 | Wed 03 Feb | M3.S2  | TBC | TBC | - | -
W13 | W06 | Wed 10 Feb | M3.S3  | TBC | TBC | - | -
W14 | W07 | Wed 17 Feb | M3.S4  | TBC | TBC | - | -
W15 | W08 | Wed 24 Feb | M3.FE3 | TBC | TBC | - | -
W16 | W09 | Wed 03 Mar | REVIEW | TBC | TBC | - | -
W17 | W10 | Wed 10 Mar | EXAM   | TBC | TBC | - | -

# --------------------------------------------------------------------------
# 3. STUDENT NAMES PER GROUP (Format: LASTNAME Firstname)
# --------------------------------------------------------------------------

[GROUP A STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname
10. LASTNAME Firstname

[GROUP B STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname

[GROUP C STUDENTS]

[GROUP D STUDENTS]

