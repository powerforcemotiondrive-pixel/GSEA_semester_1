/**
 * Build Script for GSEA 2027 Refonte Presentation Slide Deck
 * Synchronizes:
 * - src/js/11-admin-hub.js (renderAdminRefonteTab)
 * - src/template.html (modal-tab-admin-refonte)
 * - src/js/03-core-deck.js (tab switching and routing)
 * - admin.html (tab-btn-refonte and section-refonte)
 * Author: Phil PARRIS (LH/LAN)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function generateRefonteHTML() {
  return `
    <div id="refonte-deck-wrapper" class="w-full max-w-[1350px] mx-auto space-y-5">
      <!-- Light, Professional Presentation Header -->
      <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">Department Presentation</span>
              <span class="text-xs font-bold text-slate-500">• LH / LAN</span>
            </div>
            <h1 class="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">GSEA 2027 Refonte</h1>
            <p class="text-xs text-slate-600 mt-0.5 font-medium">Presented by <strong class="text-slate-800">Phil PARRIS</strong> • Département LH / LAN • École Nationale de l'Aviation Civile</p>
          </div>
        </div>

        <!-- Top Right: ENAC Logo & View Controls -->
        <div class="flex items-center gap-3 flex-wrap">
          <!-- View Mode Toggle: Slide Show vs Continuous Document -->
          <div class="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center gap-1 text-xs font-bold">
            <button id="refonte-btn-mode-slides" onclick="window.switchRefonteView('slides')" class="px-3 py-1.5 rounded-lg transition-all cursor-pointer bg-white text-blue-700 shadow-xs flex items-center gap-1.5 font-bold">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Slide Show</span>
            </button>
            <button id="refonte-btn-mode-doc" onclick="window.switchRefonteView('doc')" class="px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span>Document</span>
            </button>
          </div>

          <!-- ENAC Logo Top Right -->
          <div class="bg-slate-900 px-3.5 py-1.5 rounded-xl flex items-center shadow-xs border border-slate-800 shrink-0">
            <img src="images/enac_logo_white.png" alt="ENAC" class="h-5.5 w-auto object-contain">
          </div>
        </div>
      </div>

      <!-- SLIDE NAVIGATION CONTROLS (Slide Show Mode) -->
      <div id="refonte-nav-bar" class="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xs flex items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2">
          <button id="refonte-btn-prev" onclick="window.prevRefonteSlide()" class="px-3 py-1.5 rounded-lg font-bold border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed">
            <span>&larr;</span> <span>Previous</span>
          </button>
          <button id="refonte-btn-next" onclick="window.nextRefonteSlide()" class="px-3 py-1.5 rounded-lg font-bold border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 shadow-xs transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed">
            <span>Next</span> <span>&rarr;</span>
          </button>
        </div>

        <!-- Jump Dots & Slide Counter -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5" id="refonte-dots-container">
            <!-- 6 Dots dynamically rendered -->
          </div>
          <span id="refonte-slide-counter" class="font-bold text-slate-600 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded">
            Slide 1 of 6
          </span>
        </div>

        <!-- Quick Topic Indicator -->
        <div class="hidden sm:flex items-center gap-1.5 text-slate-500 font-medium">
          <span id="refonte-slide-topic" class="font-bold text-slate-800">Refonte Timeline</span>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- SLIDES CONTAINER (Slide Show Mode: 1 visible at a time) -->
      <!-- ======================================================== -->
      <div id="refonte-slides-wrapper" class="space-y-6">

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 1: Refonte Timeline -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-0" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 1 • ROLLOUT TIMELINE</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">Refonte Timeline: Phased Cohort Deployment</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">Progressive curriculum rollout across active promotions: GSEA26A and GSEA25A</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              2 Cohorts in Parallel
            </span>
          </div>

          <!-- 4-Card Timeline Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Semester 1 Card -->
            <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2.5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-700 text-white">LIVE • V1.0</span>
                  <span class="text-xs font-bold text-slate-500">Autumn 2026</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-2">Semester 1</h3>
                <p class="text-xs font-bold text-emerald-900">Promotion GSEA26A</p>
                <div class="text-xs text-slate-700 space-y-1 mt-2">
                  <p>&bull; <strong>Status:</strong> Now running in Version 1 with GSEA26A.</p>
                  <p>&bull; <strong>Milestone:</strong> Module 1 complete (Travel &amp; Transport).</p>
                  <p>&bull; <strong>Current Phase:</strong> Module 2 active (Climate Crisis &amp; Sustainable Cities).</p>
                </div>
              </div>
              <div class="pt-2 border-t border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                89 Official Hours (Induction + AG + AT)
              </div>
            </div>

            <!-- Semester 2 Card -->
            <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2.5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-700 text-white">SPRING 2027</span>
                  <span class="text-xs font-bold text-slate-500">Scheduled</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-2">Semester 2</h3>
                <p class="text-xs font-bold text-blue-900">Promotion GSEA26A</p>
                <div class="text-xs text-slate-700 space-y-1 mt-2">
                  <p>&bull; <strong>Status:</strong> Will be implemented with GSEA26A in 2027.</p>
                  <p>&bull; <strong>Key Change:</strong> Major reduction of 32 classroom hours.</p>
                  <p>&bull; <strong>Tracks:</strong> General English (AG 16h) + Air Traffic English (AAS 16h: AFIS &amp; Ground).</p>
                  <p>&bull; <strong>Immersion:</strong> 4-week dedicated English immersion period.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-blue-200/80 text-[11px] font-semibold text-blue-800">
                32 Hours Total + 4 Weeks Immersion
              </div>
            </div>

            <!-- Semester 3 Card -->
            <div class="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2.5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-700 text-white">LIVE</span>
                  <span class="text-xs font-bold text-slate-500">2026–2027</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-2">Semester 3</h3>
                <p class="text-xs font-bold text-purple-900">Promotion GSEA25A</p>
                <div class="text-xs text-slate-700 space-y-1 mt-2">
                  <p>&bull; <strong>Status:</strong> Now running with GSEA25A.</p>
                  <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                  <p>&bull; <strong>Tracks:</strong> Technical English (AT 30h) only.</p>
                  <p>&bull; <strong>Focus:</strong> EASA regulatory documents &amp; MTF exam preparation.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-purple-200/80 text-[11px] font-semibold text-purple-800">
                30 Hours AT + End S3 MTF Test
              </div>
            </div>

            <!-- Semester 4 Card -->
            <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2.5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-700 text-white">2027</span>
                  <span class="text-xs font-bold text-slate-500">In Development</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-2">Semester 4</h3>
                <p class="text-xs font-bold text-amber-900">Promotion GSEA25A</p>
                <div class="text-xs text-slate-700 space-y-1 mt-2">
                  <p>&bull; <strong>Status:</strong> Will be implemented with GSEA25A in 2027.</p>
                  <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                  <p>&bull; <strong>Tracks:</strong> Professional English (AP 30h) + Pecha Kucha PFE (6h).</p>
                  <p>&bull; <strong>Graduation:</strong> Final internship defense &amp; exit validation.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-amber-200/80 text-[11px] font-semibold text-amber-800">
                36 Hours Total (30h AP + 6h PFE)
              </div>
            </div>
          </div>

          <!-- Bottom Summary Box -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
            <div>
              <strong class="font-bold text-slate-900">Strategic Curriculum Impact:</strong> Overall reduction of <strong>~92 classroom hours</strong> across the 2-year cycle, replacing passive lecture hours with high-density spoken workshops, continuous formative assessment, and self-directed digital study.
            </div>
            <span class="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 shrink-0">
              Total Streamlining: −92 Hours
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 2: The New Structure — Semester 1 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-1" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6 hidden">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 2 • THE NEW STRUCTURE</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">Semester 1 Architecture: Induction, AG &amp; AT</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">Foundational semester: 89 Total Hours (21h Induction + 34h General English + 34h Technical English)</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
              S1 = AG + AT (LV101E &amp; LV121E)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- LV130 Induction -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-800 text-white">LV130</span>
                <span class="text-xs font-bold text-slate-500">21 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Induction Course</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Comprehensive integration course establishing baseline oral confidence and cohort rapport:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>Cohort Introductions:</strong> Icebreaker communication activities &amp; team-building.</li>
                <li><strong>Interactive Lectures:</strong> Applied grammar, English phonetics, vocabulary acquisition, and fluency.</li>
                <li><strong>Diagnostic 1-on-1 Interviews:</strong> Spoken level testing to identify individual strengths and set personalized targets.</li>
              </ul>
            </div>

            <!-- LV101 General English -->
            <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-700 text-white">LV101</span>
                <span class="text-xs font-bold text-slate-500">34 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">General English (AG)</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Communicative fluency and global societal issues across 3 modules:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>Module Architecture:</strong> 4 &times; 2-hour interactive workshops per module focusing on spoken peer activities, vocabulary, and grammar.</li>
                <li><strong>Module Topics:</strong> 1. Travel, Transport &amp; Leisure; 2. Climate Crisis &amp; Sustainable Cities; 3. Global Aviation Dilemmas.</li>
                <li><strong>Formative Evaluation (FE):</strong> Small-group/paired spoken assessments at the end of each module with explicit A/B/C/D rubrics.</li>
              </ul>
            </div>

            <!-- LV121 Technical English -->
            <div class="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-700 text-white">LV121</span>
                <span class="text-xs font-bold text-slate-500">34 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Technical English (AT)</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Operational civil aviation fundamentals and technical communications:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>3 Thematic Modules:</strong> 1. Aerodrome &amp; Airport Infrastructure; 2. Aircraft Anatomy, Systems &amp; Maintenance; 3. Incident Briefings &amp; Radiotelephony.</li>
                <li><strong>Lesson Content:</strong> Technical diagram analysis, incident debriefings, and operational phraseology simulations.</li>
                <li><strong>FE Spoken Tutorials:</strong> Paired technical briefings with peer observation checklists.</li>
              </ul>
            </div>
          </div>

          <!-- DD&RS Integration Banner -->
          <div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-950">
            <div>
              <strong class="font-bold text-emerald-900">Integral DD&amp;RS Alignment:</strong> Fully compliant with the French Higher Education Sustainable Development &amp; Societal Responsibility framework (Label DD&amp;RS, Axes 1–5). Topics actively explore eco-mobility, renewable energy, airport bioswales, and carbon mitigation.
            </div>
            <span class="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10.5px] shrink-0">
              DD&amp;RS Axes 1 to 5
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 3: The New Structure — Semester 2 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-2" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6 hidden">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 3 • THE NEW STRUCTURE</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">Semester 2: Streamlining, Air Traffic &amp; Immersion</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">Curriculum Reduction of 32 Hours: 16h General English + 16h Aviation Safety + 4-Week Immersion</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              S2 = AG + AAS (Reduction of 32h)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- LVXXX AG 16h -->
            <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-700 text-white">LVXXX</span>
                <span class="text-xs font-bold text-slate-500">16 Hours (−18h)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">General English (AG)</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Streamlined single-module format centered on global affairs and active debate:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>1 Thematic Module:</strong> Current international events, media critique, and global debate preparation.</li>
                <li><strong>Autonomous Listening:</strong> Guided self-study listening comprehension program on eCampus.</li>
                <li><strong>Formative Evaluation:</strong> Session 8 paired communicative speaking challenge.</li>
              </ul>
            </div>

            <!-- LVXXX AAS 16h -->
            <div class="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-700 text-white">LVXXX</span>
                <span class="text-xs font-bold text-slate-500">16 Hours (−14h)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Aviation Safety &amp; Air Traffic (AAS)</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Introduction to operational Language Testing (LT) &amp; air traffic procedures:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>2 Modules:</strong> 1. AFIS (Aerodrome Flight Information Service); 2. Ground Operations (ATIS broadcasts, Apron control).</li>
                <li><strong>Self-Study:</strong> Preparatory Language Training (PLT) modules on eCampus.</li>
                <li><strong>Formative Evaluation:</strong> Session 8 simulated operational Language Testing (LT) assessment.</li>
              </ul>
            </div>

            <!-- 4-Week Immersion & TOEIC -->
            <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-700 text-white">MILESTONE</span>
                <span class="text-xs font-bold text-slate-500">4 Weeks</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Immersion &amp; TOEIC Benchmark</h3>
              <p class="text-xs text-slate-600 leading-relaxed">Real-world linguistic immersion followed by official certification:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li><strong>4-Week Immersion Course:</strong> Intensive linguistic immersion abroad or dedicated residential program.</li>
                <li><strong>Official TOEIC Test:</strong> Administered in Week 1 of Semester 3 (or end of immersion).</li>
                <li><strong>Target:</strong> Mandatory CEFR B2 level (785+ points) required for graduation. Retakes organized in students' own autonomous time.</li>
              </ul>
            </div>
          </div>

          <!-- Bottom Notice -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <p><strong>Pedagogical Rationale:</strong> The 32-hour classroom reduction creates dedicated space for the 4-week immersion course while transitioning students from general communicative fluency to operational air traffic phraseology.</p>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 4: The New Structure — Semesters 3 & 4 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-3" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6 hidden">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 4 • THE NEW STRUCTURE</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">Semesters 3 &amp; 4: Specialization &amp; Certification</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">Year 2 Policy: General English Discontinued • 100% Technical (AT) &amp; Professional (AP) Specialization</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
              S3: AT Only • S4: AP Only
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Semester 3: LV125E Technical English -->
            <div class="p-5 rounded-xl border border-purple-200 bg-purple-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-700 text-white">SEMESTER 3 • LV125E</span>
                <span class="text-xs font-bold text-slate-500">30 Hours (−30h)</span>
              </div>
              <h3 class="text-base font-black text-slate-900">Technical English (AT)</h3>
              <p class="text-xs text-slate-600 leading-relaxed font-semibold text-purple-950">Terminology Rule: Always designated as Technical English (AT), never "Aeronautical".</p>
              <ul class="text-xs text-slate-700 space-y-2 list-disc list-inside pt-1">
                <li><strong>Module 1: EASA Regulatory Documents (15h):</strong> Direct analysis of authentic EASA airworthiness directives and safety bulletins. Flipped lessons and FE group presentations in Session 7. LT self-study.</li>
                <li><strong>Module 2: MTF Examination Preparation (15h):</strong> Rigorous preparation for the civil aviation MTF exam. Authentic audio tests, diagnostic feedback, and LT self-study.</li>
                <li><strong>End of Semester 3 MTF Test:</strong> Mandatory language proficiency exam for all students; remains obligatory for official ENAC graduation.</li>
              </ul>
            </div>

            <!-- Semester 4: Professional English & PFE -->
            <div class="p-5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-700 text-white">SEMESTER 4 • LVXXX</span>
                <span class="text-xs font-bold text-slate-500">36 Hours (−30h)</span>
              </div>
              <h3 class="text-base font-black text-slate-900">Professional English (AP) &amp; Pecha Kucha</h3>
              <p class="text-xs text-slate-600 leading-relaxed font-semibold text-amber-950">Final engineering career readiness and internship defense:</p>
              <ul class="text-xs text-slate-700 space-y-2 list-disc list-inside pt-1">
                <li><strong>LVXXX: Professional English (30h):</strong> Workplace meetings, international collaboration, safety investigations, and technical report drafting (program in final development).</li>
                <li><strong>LVXXX: Pecha Kucha PFE Defense (6h):</strong> Structured oral defense coaching for the 20-slide &times; 20-second <em>Pecha Kucha</em> presentation of their Final Year Internship Project (PFE).</li>
                <li><strong>Exit Validation:</strong> Professional autonomy, cross-examination defense, and graduation clearance.</li>
              </ul>
            </div>
          </div>

          <!-- Quad-Semester Matrix Summary Table -->
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
              <thead class="bg-slate-100 text-slate-800 uppercase font-bold text-[10.5px]">
                <tr>
                  <th class="p-2.5 border-b border-slate-200">Semester</th>
                  <th class="p-2.5 border-b border-slate-200">Track Composition</th>
                  <th class="p-2.5 border-b border-slate-200">Total Timetable Hours</th>
                  <th class="p-2.5 border-b border-slate-200">Key Pedagogical Milestone</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td class="p-2.5 font-black text-slate-900">Semester 1</td>
                  <td class="p-2.5 font-bold text-blue-700">AG (LV101E) + AT (LV121E)</td>
                  <td class="p-2.5">89 Hours (21h Induction + 68h Core)</td>
                  <td class="p-2.5">Diagnostic Interview + 3 Formative Evaluations</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-black text-slate-900">Semester 2</td>
                  <td class="p-2.5 font-bold text-amber-700">AG (LV102E) + AAS (LV122E)</td>
                  <td class="p-2.5">32 Hours (−32h reduction)</td>
                  <td class="p-2.5">4-Week Immersion Course + AFIS/Ground LT</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-black text-slate-900">Semester 3</td>
                  <td class="p-2.5 font-bold text-purple-700">AT (LV125E only — zero AG)</td>
                  <td class="p-2.5">30 Hours (−30h reduction)</td>
                  <td class="p-2.5">EASA Regulatory Documents + Official MTF Exam</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-black text-slate-900">Semester 4</td>
                  <td class="p-2.5 font-bold text-emerald-700">AP (LVXXX only — zero AG)</td>
                  <td class="p-2.5">36 Hours (−30h reduction)</td>
                  <td class="p-2.5">Pecha Kucha Oral Defense for Internship (PFE)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 5: eCampus Delivery & Offline Architecture -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-4" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6 hidden">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 5 • DIGITAL INFRASTRUCTURE</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">eCampus Delivery &amp; Offline Architecture</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">Eco-conceived web standards with zero cloud dependencies and 100% offline disaster recovery</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
              HTML5 + Vanilla JS (100% Offline)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- eCampus Hubs & Forums -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-700 text-white">CENTRALIZED PORTALS</span>
              <h3 class="text-sm font-black text-slate-900">Semester Hubs &amp; Forums</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                All learning materials, worksheets, weekly schedules, and rubrics are hosted directly within unified semester hub portals.
              </p>
              <div class="text-xs text-slate-700 space-y-1.5 pt-1">
                <p>&bull; Retains standard institutional eCampus forums for all official announcements and teacher-student messaging.</p>
                <p>&bull; Clear weekly roadmap eliminates student confusion across multiple disconnected links.</p>
              </div>
            </div>

            <!-- Zero Cloud / Privacy -->
            <div class="p-4 rounded-xl border border-teal-200 bg-teal-50/40 space-y-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-teal-700 text-white">OPEN WEB STANDARDS</span>
              <h3 class="text-sm font-black text-slate-900">Zero Cloud Dependencies</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Constructed strictly with modern HTML5, compiled CSS, and vanilla JavaScript:
              </p>
              <div class="text-xs text-slate-700 space-y-1.5 pt-1">
                <p>&bull; <strong>No External CDNs:</strong> Zero external script calls or font downloads.</p>
                <p>&bull; <strong>Zero Tracking:</strong> Complete student privacy; no analytics or cookies.</p>
                <p>&bull; <strong>Ultra-Light Footprint:</strong> Entire semester package compiles under 40 MB, drastically reducing digital carbon footprints.</p>
              </div>
            </div>

            <!-- Offline Disaster Recovery -->
            <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-700 text-white">DISASTER RECOVERY</span>
              <h3 class="text-sm font-black text-slate-900">100% Offline Resilience</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Immune to campus Wi-Fi interruptions, LMS outages, or server downtime:
              </p>
              <div class="text-xs text-slate-700 space-y-1.5 pt-1">
                <p>&bull; <strong>USB Key Plug-and-Play:</strong> The complete interactive portal runs locally from any USB drive.</p>
                <p>&bull; <strong>Network Drive Storage:</strong> Can be stored directly on ENAC's internal <code class="px-1.5 py-0.2 bg-amber-100 rounded text-amber-950 font-bold">T://</code> drive for instant teacher classroom launch during Wi-Fi failures.</p>
              </div>
            </div>
          </div>

          <!-- Technical Specs Strip -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div>
              <span class="block text-base font-black text-blue-700">SCORM 1.2</span>
              <span class="text-[10.5px] text-slate-500 font-medium">Standard LMS Compatible</span>
            </div>
            <div>
              <span class="block text-base font-black text-emerald-700">Universal ISO</span>
              <span class="text-[10.5px] text-slate-500 font-medium">Windows &amp; PC Read-Only</span>
            </div>
            <div>
              <span class="block text-base font-black text-purple-700">Native DMG</span>
              <span class="text-[10.5px] text-slate-500 font-medium">Mac 1-Click Auto-Open</span>
            </div>
            <div>
              <span class="block text-base font-black text-amber-700">&lt; 40 MB</span>
              <span class="text-[10.5px] text-slate-500 font-medium">Complete Self-Contained Size</span>
            </div>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 6: Pedagogical Philosophy & Environmental Impact -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-5" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6 hidden">
          <div class="border-b border-slate-200 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">SLIDE 6 • PEDAGOGY &amp; SUSTAINABILITY</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-1">Pedagogical Philosophy &amp; Environmental Impact</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-0.5">L'Approche par Compétences: Building Operational Confidence, Eliminating Exam Stress &amp; Saving Paper</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              Zero-Print • Competency-Based
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Pedagogical Approach -->
            <div class="p-5 rounded-xl border border-blue-200 bg-blue-50/30 space-y-3">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-700 text-white">PEDAGOGICAL ARCHITECTURE</span>
              <h3 class="text-base font-black text-slate-900">L'Approche par Compétences (Competency-Driven)</h3>
              <div class="text-xs text-slate-700 space-y-2 leading-relaxed">
                <p>&bull; <strong>Grounded in TSEEAC Feedback:</strong> Designed directly around operational feedback from civil aviation technicians who need spontaneous speaking confidence rather than theoretical grammar memorization.</p>
                <p>&bull; <strong>Continuous Assessment (No Exams):</strong> Traditional high-stakes end-of-semester written exams are replaced with continuous formative evaluation (FE) in small groups or pairs.</p>
                <p>&bull; <strong>Building Confidence:</strong> Low-anxiety environment encouraging active peer interaction, immediate constructive teacher feedback, and personal learning reflection.</p>
                <p>&bull; <strong>Proactive Certification Success:</strong> Integrated preparation for the <strong>TOEIC</strong> (mandatory CEFR B2 benchmark) and the <strong>MTF</strong> (mandatory civil aviation graduation exam).</p>
              </div>
            </div>

            <!-- Environmental Benefits -->
            <div class="p-5 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-3">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-700 text-white">ENVIRONMENTAL &amp; ECO-DESIGN</span>
              <h3 class="text-base font-black text-slate-900">Environmental Benefits of our Structure</h3>
              <div class="text-xs text-slate-700 space-y-2 leading-relaxed">
                <p>&bull; <strong>Strict No-Print Approach:</strong> Digital worksheets, auto-saving textareas, and on-screen rubrics completely eliminate physical photocopies (~2,000 pages of paper saved per promotion).</p>
                <p>&bull; <strong>Printable PDFs Only on Demand:</strong> Clean 7-page A4 PDF worksheets are generated on demand via native PDF engines for students who genuinely require physical copies.</p>
                <p>&bull; <strong>Ultra-Low Energy Computing:</strong> Client-side rendering requires no active server infrastructure or compute cycles, minimizing server-farm energy consumption.</p>
                <p>&bull; <strong>Full DD&amp;RS Integration:</strong> Every module is linked to official French Higher Education ecological transition benchmarks.</p>
              </div>
            </div>
          </div>

          <!-- Concluding Callout -->
          <div class="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span class="font-bold text-amber-300 block mb-0.5">Modern, Sustainable, Communicative English Education:</span>
              A validated pedagogical platform empowering future ENAC technicians to communicate fluently, safely, and responsibly.
            </div>
            <div class="text-slate-300 font-mono text-[11px] shrink-0">
              ENAC LH / LAN • Phil PARRIS
            </div>
          </div>
        </div>

      </div>

      <!-- ======================================================== -->
      <!-- CONTINUOUS DOCUMENT VIEW (Hidden in Slide Mode) -->
      <!-- ======================================================== -->
      <div id="refonte-doc-wrapper" class="space-y-6 hidden">
        <!-- Rendered dynamically by JavaScript -->
      </div>
    </div>
  `;
}

// Pure JavaScript function string (no <script> tags) for src/js/11-admin-hub.js
function getRefontePureJS() {
  return `
    let __refonteSlide = 0;
    const __refonteTotalSlides = 6;
    let __refonteViewMode = 'slides';

    const __refonteSlideTopics = [
      "Refonte Timeline",
      "The New Structure: Semester 1",
      "The New Structure: Semester 2",
      "The New Structure: Semesters 3 & 4",
      "eCampus Delivery & Offline Architecture",
      "Pedagogical Philosophy & Environmental Impact"
    ];

    window.initRefonteDeck = function() {
      __refonteSlide = 0;
      __refonteViewMode = 'slides';
      renderRefonteDots();
      window.updateRefonteSlideDisplay();
      populateRefonteDocView();
    };

    function renderRefonteDots() {
      const container = document.getElementById('refonte-dots-container');
      if (!container) return;
      let html = '';
      for (let i = 0; i < __refonteTotalSlides; i++) {
        html += '<button onclick="window.goToRefonteSlide(' + i + ')" class="w-2.5 h-2.5 rounded-full transition-all cursor-pointer ' + (i === __refonteSlide ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400') + '" title="Slide ' + (i + 1) + ': ' + __refonteSlideTopics[i] + '"></button>';
      }
      container.innerHTML = html;
    }

    window.updateRefonteSlideDisplay = function() {
      for (let i = 0; i < __refonteTotalSlides; i++) {
        const el = document.getElementById('refonte-slide-' + i);
        if (el) {
          if (i === __refonteSlide) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        }
      }

      // Update counter & topic
      const counterEl = document.getElementById('refonte-slide-counter');
      if (counterEl) counterEl.textContent = 'Slide ' + (__refonteSlide + 1) + ' of ' + __refonteTotalSlides;

      const topicEl = document.getElementById('refonte-slide-topic');
      if (topicEl) topicEl.textContent = __refonteSlideTopics[__refonteSlide] || '';

      // Update prev/next button states
      const prevBtn = document.getElementById('refonte-btn-prev');
      if (prevBtn) prevBtn.disabled = (__refonteSlide === 0);

      const nextBtn = document.getElementById('refonte-btn-next');
      if (nextBtn) nextBtn.disabled = (__refonteSlide === __refonteTotalSlides - 1);

      renderRefonteDots();
    };

    window.nextRefonteSlide = function() {
      if (__refonteSlide < __refonteTotalSlides - 1) {
        __refonteSlide++;
        window.updateRefonteSlideDisplay();
      }
    };

    window.prevRefonteSlide = function() {
      if (__refonteSlide > 0) {
        __refonteSlide--;
        window.updateRefonteSlideDisplay();
      }
    };

    window.goToRefonteSlide = function(idx) {
      if (idx >= 0 && idx < __refonteTotalSlides) {
        __refonteSlide = idx;
        window.updateRefonteSlideDisplay();
      }
    };

    window.switchRefonteView = function(mode) {
      __refonteViewMode = mode;
      const slidesWrapper = document.getElementById('refonte-slides-wrapper');
      const navBar = document.getElementById('refonte-nav-bar');
      const docWrapper = document.getElementById('refonte-doc-wrapper');
      const btnSlides = document.getElementById('refonte-btn-mode-slides');
      const btnDoc = document.getElementById('refonte-btn-mode-doc');

      if (mode === 'doc') {
        if (slidesWrapper) slidesWrapper.classList.add('hidden');
        if (navBar) navBar.classList.add('hidden');
        if (docWrapper) docWrapper.classList.remove('hidden');
        if (btnDoc) {
          btnDoc.className = "px-3 py-1.5 rounded-lg transition-all cursor-pointer bg-white text-blue-700 shadow-xs flex items-center gap-1.5 font-bold";
        }
        if (btnSlides) {
          btnSlides.className = "px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold";
        }
      } else {
        if (slidesWrapper) slidesWrapper.classList.remove('hidden');
        if (navBar) navBar.classList.remove('hidden');
        if (docWrapper) docWrapper.classList.add('hidden');
        if (btnSlides) {
          btnSlides.className = "px-3 py-1.5 rounded-lg transition-all cursor-pointer bg-white text-blue-700 shadow-xs flex items-center gap-1.5 font-bold";
        }
        if (btnDoc) {
          btnDoc.className = "px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold";
        }
        window.updateRefonteSlideDisplay();
      }
    };

    function populateRefonteDocView() {
      const docWrapper = document.getElementById('refonte-doc-wrapper');
      if (!docWrapper) return;
      let html = '';
      for (let i = 0; i < __refonteTotalSlides; i++) {
        const slide = document.getElementById('refonte-slide-' + i);
        if (slide) {
          html += '<div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">' + slide.innerHTML + '</div>';
        }
      }
      docWrapper.innerHTML = html;
    }

    // Global Keyboard Handler for Arrow Left / Right
    document.addEventListener('keydown', function(e) {
      const wrapper = document.getElementById('refonte-deck-wrapper');
      if (!wrapper || wrapper.offsetParent === null) return;
      if (__refonteViewMode !== 'slides') return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        window.nextRefonteSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        window.prevRefonteSlide();
      } else if (e.key === 'Home') {
        window.goToRefonteSlide(0);
      } else if (e.key === 'End') {
        window.goToRefonteSlide(__refonteTotalSlides - 1);
      }
    });
  `;
}

// ========================================================
// 1. UPDATE src/js/11-admin-hub.js
// ========================================================
const adminHubPath = path.join(rootDir, 'src', 'js', '11-admin-hub.js');
let adminHubCode = fs.readFileSync(adminHubPath, 'utf8');

const startRefonteStr = 'function renderAdminRefonteTab(theme) {';
const startFeedbackStr = 'function renderAdminFeedbackTab(theme) {';
const endDataStr = '/* --- PORTFOLIO_SUMMARY_DATA_START --- */';

let targetStart = adminHubCode.indexOf(startRefonteStr);
if (targetStart === -1) {
  targetStart = adminHubCode.indexOf(startFeedbackStr);
}
const targetEnd = adminHubCode.indexOf(endDataStr);

if (targetStart !== -1 && targetEnd !== -1) {
  const newRefonteFn = `function renderAdminRefonteTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      bodyEl.innerHTML = \`
        \${${JSON.stringify(generateRefonteHTML())}}
      \`;

      if (window.initRefonteDeck) {
        window.initRefonteDeck();
      }
    }

    ${getRefontePureJS()}

    `;

  adminHubCode = adminHubCode.substring(0, targetStart) + newRefonteFn + adminHubCode.substring(targetEnd);
  fs.writeFileSync(adminHubPath, adminHubCode, 'utf8');
  console.log("✓ Updated src/js/11-admin-hub.js cleanly (pure JavaScript, no <script> tags).");
} else {
  console.error("Could not find start/end markers in 11-admin-hub.js");
}

// ========================================================
// 2. UPDATE src/template.html
// ========================================================
const templatePath = path.join(rootDir, 'src', 'template.html');
let templateHtml = fs.readFileSync(templatePath, 'utf8');

if (!templateHtml.includes('modal-tab-admin-refonte')) {
  templateHtml = templateHtml.replace(
    /<button data-tab="admin_feedback"[^>]*>.*?<\/button>/s,
    '<button data-tab="admin_refonte" id="modal-tab-admin-refonte" class="modal-tab-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer hidden">🚀 GSEA 2027 Refonte</button>'
  );
  fs.writeFileSync(templatePath, templateHtml, 'utf8');
  console.log("✓ Updated src/template.html (modal-tab-admin-refonte).");
}

// ========================================================
// 3. UPDATE src/js/03-core-deck.js
// ========================================================
const coreDeckPath = path.join(rootDir, 'src', 'js', '03-core-deck.js');
let coreDeckCode = fs.readFileSync(coreDeckPath, 'utf8');

if (!coreDeckCode.includes('adminRefonteTab')) {
  coreDeckCode = coreDeckCode.replace(
    "const adminFeedbackTab = document.getElementById('modal-tab-admin-feedback');",
    "const adminRefonteTab = document.getElementById('modal-tab-admin-refonte');\n      const adminFeedbackTab = document.getElementById('modal-tab-admin-feedback');"
  );
}

// In hiding tabs:
coreDeckCode = coreDeckCode.replace(
  /if \(adminFeedbackTab\) adminFeedbackTab\.classList\.add\('hidden'\);/g,
  "if (adminRefonteTab) adminRefonteTab.classList.add('hidden');\n        if (adminFeedbackTab) adminFeedbackTab.classList.add('hidden');"
);

// In showing tabs during admin session:
coreDeckCode = coreDeckCode.replace(
  "if (adminFeedbackTab) adminFeedbackTab.classList.remove('hidden');",
  "if (adminRefonteTab) adminRefonteTab.classList.remove('hidden');\n        if (adminFeedbackTab) adminFeedbackTab.classList.add('hidden');"
);

// In renderModalBody:
coreDeckCode = coreDeckCode.replace(
  "} else if (modalState.tab === 'admin_feedback') {",
  "} else if (modalState.tab === 'admin_refonte' || modalState.tab === 'admin_feedback') {"
);

fs.writeFileSync(coreDeckPath, coreDeckCode, 'utf8');
console.log("✓ Updated src/js/03-core-deck.js (admin_refonte handling).");

// ========================================================
// 4. UPDATE admin.html
// ========================================================
const adminHtmlPath = path.join(rootDir, 'admin.html');
let adminHtml = fs.readFileSync(adminHtmlPath, 'utf8');

// Replace tab-btn-feedback with tab-btn-refonte
adminHtml = adminHtml.replace(
  /<button onclick="switchAdminTab\('feedback'\)"[^>]*>.*?<\/button>/s,
  `<button onclick="switchAdminTab('refonte')" id="tab-btn-refonte" class="px-3.5 py-1.5 rounded-lg font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5 shrink-0">
        <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        <span>GSEA 2027 Refonte</span>
      </button>`
);

// Replace section-feedback or existing section-refonte
const secRefonteStart = '<section id="section-refonte"';
const secFeedStart = '<section id="section-feedback"';
const mainEnd = '</main>';

let secIdx = adminHtml.indexOf(secRefonteStart);
if (secIdx === -1) secIdx = adminHtml.indexOf(secFeedStart);

const mEndIdx = adminHtml.indexOf(mainEnd);

if (secIdx !== -1 && mEndIdx !== -1) {
  const newSection = `<section id="section-refonte" class="hidden space-y-6">
        ${generateRefonteHTML()}
      </section>

    `;
  adminHtml = adminHtml.substring(0, secIdx) + newSection + adminHtml.substring(mEndIdx);
}

// In switchAdminTab in admin.html:
if (!adminHtml.includes("refonte: document.getElementById('section-refonte')")) {
  adminHtml = adminHtml.replace(
    "feedback: document.getElementById('section-feedback')",
    "refonte: document.getElementById('section-refonte'),\n      feedback: document.getElementById('section-refonte')"
  );
  adminHtml = adminHtml.replace(
    "feedback: document.getElementById('tab-btn-feedback')",
    "refonte: document.getElementById('tab-btn-refonte'),\n      feedback: document.getElementById('tab-btn-refonte')"
  );
}

// Add script to admin.html before </body> if not present
if (!adminHtml.includes('__refonteSlide')) {
  adminHtml = adminHtml.replace('</body>', `<script>\n${getRefontePureJS()}\n</script>\n</body>`);
}

fs.writeFileSync(adminHtmlPath, adminHtml, 'utf8');
console.log("✓ Updated admin.html cleanly.");

console.log("✅ All files updated with GSEA 2027 Refonte presentation deck!");
