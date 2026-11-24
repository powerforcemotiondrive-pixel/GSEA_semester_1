/**
 * Build Script for GSEA 2027 Refonte Presentation Slide Deck
 * Tightened Executive Design with Reduced Color Variation & Native Fullscreen Toggle
 * Synchronizes:
 * - src/js/11-admin-hub.js (renderAdminRefonteTab)
 * - admin.html (section-refonte)
 * Author: Phil PARRIS (LH/LAN)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function generateRefonteHTML() {
  return `
    <div id="refonte-deck-wrapper" class="w-full max-w-[1350px] mx-auto space-y-4">
      <!-- Executive Presentation Header -->
      <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">Department Presentation</span>
              <span class="text-xs font-bold text-slate-500">• LH / LAN</span>
            </div>
            <h1 class="text-base sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">GSEA 2027 Refonte</h1>
            <p class="text-xs text-slate-600 mt-0.5 font-medium">Presented by <strong class="text-slate-800">Phil PARRIS</strong> • Département LH / LAN • École Nationale de l'Aviation Civile</p>
          </div>
        </div>

        <!-- Top Right: View Controls, Fullscreen & ENAC Logo -->
        <div class="flex items-center gap-2.5 flex-wrap">
          <!-- View Mode Toggle: Slide Show vs Continuous Document -->
          <div class="bg-slate-100 p-0.5 rounded-lg border border-slate-200 flex items-center gap-1 text-xs font-bold">
            <button id="refonte-btn-mode-slides" onclick="window.switchRefonteView('slides')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold">
              <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Slide Show</span>
            </button>
            <button id="refonte-btn-mode-doc" onclick="window.switchRefonteView('doc')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span>Document</span>
            </button>
          </div>

          <!-- Native Fullscreen Toggle Button -->
          <button id="refonte-btn-fullscreen" onclick="window.toggleRefonteFullscreen()" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs shadow-xs" title="Toggle Fullscreen (F)">
            <svg id="refonte-fs-icon-enter" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            <svg id="refonte-fs-icon-exit" class="w-3.5 h-3.5 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9L4 4m0 0v4m0-4h4m6 6l5 5m0 0v-4m0 4h-4M9 15l-5 5m0 0v-4m0 4h4m11-9l-5-5m5 5v-4m0 4h-4"/></svg>
            <span id="refonte-fullscreen-label">Fullscreen</span>
          </button>

          <!-- ENAC Logo Top Right -->
          <div class="bg-slate-900 px-3 py-1.5 rounded-lg flex items-center shadow-xs border border-slate-800 shrink-0">
            <img src="images/enac_logo_white.png" alt="ENAC" class="h-5 w-auto object-contain">
          </div>
        </div>
      </div>

      <!-- SLIDE NAVIGATION CONTROLS (Slide Show Mode) -->
      <div id="refonte-nav-bar" class="bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-xs flex items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2">
          <button id="refonte-btn-prev" onclick="window.prevRefonteSlide()" class="px-3 py-1 rounded-lg font-bold border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed">
            <span>&larr;</span> <span>Previous</span>
          </button>
          <button id="refonte-btn-next" onclick="window.nextRefonteSlide()" class="px-3 py-1 rounded-lg font-bold border border-slate-800 bg-slate-900 text-white hover:bg-slate-800 shadow-xs transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed">
            <span>Next</span> <span>&rarr;</span>
          </button>
        </div>

        <!-- Jump Dots & Slide Counter -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5" id="refonte-dots-container">
            <!-- 6 Dots dynamically rendered -->
          </div>
          <span id="refonte-slide-counter" class="font-bold text-slate-700 font-mono text-[11px] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            Slide 1 of 6
          </span>
        </div>

        <!-- Quick Topic Indicator & Inline Fullscreen -->
        <div class="flex items-center gap-3">
          <span id="refonte-slide-topic" class="hidden sm:inline font-bold text-slate-800 text-xs">Refonte Timeline</span>
          <button onclick="window.toggleRefonteFullscreen()" class="px-2 py-0.5 rounded text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer" title="Toggle Fullscreen (Shortcut: F)">
            ⛶
          </button>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- SLIDES CONTAINER (Slide Show Mode: 1 visible at a time) -->
      <!-- ======================================================== -->
      <div id="refonte-slides-wrapper" class="space-y-4">

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 1: Refonte Timeline -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-0" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 1 • ROLLOUT TIMELINE</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Refonte Timeline: Phased Cohort Deployment</h2>
              <p class="text-xs text-slate-500 mt-0.5">Progressive curriculum rollout across active promotions: GSEA26A and GSEA25A</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              2 Cohorts in Parallel
            </span>
          </div>

          <!-- 4-Card Timeline Grid (Tightened Slate Theme) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <!-- Semester 1 Card -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LIVE • V1.0</span>
                  <span class="text-[11px] font-semibold text-slate-500">Autumn 2026</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-1.5">Semester 1</h3>
                <p class="text-xs font-bold text-slate-700">Promotion GSEA26A</p>
                <div class="text-xs text-slate-600 space-y-1 mt-1.5 leading-snug">
                  <p>&bull; <strong>Status:</strong> Now running in Version 1 with GSEA26A.</p>
                  <p>&bull; <strong>Milestone:</strong> Module 1 complete (Travel &amp; Transport).</p>
                  <p>&bull; <strong>Current Phase:</strong> Module 2 active (Climate &amp; Sustainable Cities).</p>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-200 text-[11px] font-mono font-bold text-slate-800">
                89 Hours (Induction + AG + AT)
              </div>
            </div>

            <!-- Semester 2 Card -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-800 text-white">SPRING 2027</span>
                  <span class="text-[11px] font-semibold text-slate-500">Scheduled</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-1.5">Semester 2</h3>
                <p class="text-xs font-bold text-slate-700">Promotion GSEA26A</p>
                <div class="text-xs text-slate-600 space-y-1 mt-1.5 leading-snug">
                  <p>&bull; <strong>Status:</strong> Will be implemented with GSEA26A in 2027.</p>
                  <p>&bull; <strong>Key Change:</strong> Reduction of 32 classroom hours.</p>
                  <p>&bull; <strong>Tracks:</strong> AG (16h) + AAS (16h: AFIS &amp; Ground).</p>
                  <p>&bull; <strong>Immersion:</strong> 4-week dedicated English immersion.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-200 text-[11px] font-mono font-bold text-slate-800">
                32 Hours Total + 4 Weeks Immersion
              </div>
            </div>

            <!-- Semester 3 Card -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LIVE</span>
                  <span class="text-[11px] font-semibold text-slate-500">2026–2027</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-1.5">Semester 3</h3>
                <p class="text-xs font-bold text-slate-700">Promotion GSEA25A</p>
                <div class="text-xs text-slate-600 space-y-1 mt-1.5 leading-snug">
                  <p>&bull; <strong>Status:</strong> Now running with GSEA25A.</p>
                  <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                  <p>&bull; <strong>Track:</strong> Technical English (AT 30h) only.</p>
                  <p>&bull; <strong>Focus:</strong> EASA regulatory documents &amp; MTF prep.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-200 text-[11px] font-mono font-bold text-slate-800">
                30 Hours AT + End S3 MTF Test
              </div>
            </div>

            <!-- Semester 4 Card -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-700 text-white">2027</span>
                  <span class="text-[11px] font-semibold text-slate-500">In Design</span>
                </div>
                <h3 class="text-sm font-black text-slate-900 mt-1.5">Semester 4</h3>
                <p class="text-xs font-bold text-slate-700">Promotion GSEA25A</p>
                <div class="text-xs text-slate-600 space-y-1 mt-1.5 leading-snug">
                  <p>&bull; <strong>Status:</strong> Will be implemented with GSEA25A in 2027.</p>
                  <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                  <p>&bull; <strong>Tracks:</strong> Professional English (AP 30h) + Pecha Kucha (6h).</p>
                  <p>&bull; <strong>Graduation:</strong> Final internship defense &amp; exit validation.</p>
                </div>
              </div>
              <div class="pt-2 border-t border-slate-200 text-[11px] font-mono font-bold text-slate-800">
                36 Hours Total (30h AP + 6h PFE)
              </div>
            </div>
          </div>

          <!-- Bottom Summary Box -->
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-slate-700">
            <div>
              <strong class="font-bold text-slate-900">Strategic Curriculum Impact:</strong> Overall reduction of <strong>~92 classroom hours</strong> across the 2-year cycle, replacing passive lecture hours with high-density spoken workshops, continuous formative assessment, and self-directed digital study.
            </div>
            <span class="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
              Total Streamlining: −92 Hours
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 2: The New Structure — Semester 1 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-1" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 hidden">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 2 • THE NEW STRUCTURE</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Semester 1 Architecture: Induction, AG &amp; AT</h2>
              <p class="text-xs text-slate-500 mt-0.5">Foundational semester: 89 Total Hours (21h Induction + 34h General English + 34h Technical English)</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
              S1 = AG + AT (LV101E &amp; LV121E)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <!-- LV130 Induction -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LV130</span>
                <span class="text-xs font-mono font-bold text-slate-600">21 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Induction Course</h3>
              <p class="text-xs text-slate-600 leading-snug">Integration course establishing oral confidence and cohort rapport:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>Cohort Introductions:</strong> Icebreaker spoken activities &amp; team-building.</li>
                <li><strong>Core Lectures:</strong> Applied grammar, phonetics, vocabulary, and fluency.</li>
                <li><strong>Diagnostic Interviews:</strong> 1-on-1 level testing to set personalized targets.</li>
              </ul>
            </div>

            <!-- LV101 General English -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LV101</span>
                <span class="text-xs font-mono font-bold text-slate-600">34 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">General English (AG)</h3>
              <p class="text-xs text-slate-600 leading-snug">Communicative fluency and global societal issues across 3 modules:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>Module Structure:</strong> 4 &times; 2-hour workshops focusing on spoken peer interaction.</li>
                <li><strong>Topics:</strong> 1. Travel &amp; Transport; 2. Climate &amp; Cities; 3. Aviation Dilemmas.</li>
                <li><strong>Formative Evaluation:</strong> Paired/small-group spoken tests with clear rubrics.</li>
              </ul>
            </div>

            <!-- LV121 Technical English -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LV121</span>
                <span class="text-xs font-mono font-bold text-slate-600">34 Hours</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Technical English (AT)</h3>
              <p class="text-xs text-slate-600 leading-snug">Operational aviation fundamentals and technical communication:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>3 Modules:</strong> 1. Aerodrome Ops; 2. Aircraft Anatomy; 3. Incident Briefings.</li>
                <li><strong>Lesson Content:</strong> Technical diagrams, debriefs, and phraseology practice.</li>
                <li><strong>FE Spoken Tutorials:</strong> Paired technical briefings with peer observations.</li>
              </ul>
            </div>
          </div>

          <!-- DD&RS Integration Banner -->
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-slate-700">
            <div>
              <strong class="font-bold text-slate-900">Integral DD&amp;RS Alignment:</strong> Fully compliant with French Higher Education Sustainable Development &amp; Societal Responsibility benchmarks (Label DD&amp;RS, Axes 1–5). Topics actively integrate eco-mobility, renewable infrastructure, and carbon mitigation.
            </div>
            <span class="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10.5px] font-mono shrink-0">
              DD&amp;RS Axes 1 to 5
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 3: The New Structure — Semester 2 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-2" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 hidden">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 3 • THE NEW STRUCTURE</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Semester 2: Streamlining, Air Traffic &amp; Immersion</h2>
              <p class="text-xs text-slate-500 mt-0.5">Curriculum Reduction of 32 Hours: 16h General English + 16h Aviation Safety + 4-Week Immersion</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
              S2 = AG + AAS (−32h)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <!-- LVXXX AG 16h -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LVXXX</span>
                <span class="text-xs font-mono font-bold text-slate-600">16 Hours (−18h)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">General English (AG)</h3>
              <p class="text-xs text-slate-600 leading-snug">Streamlined format centered on global affairs and active debate:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>1 Thematic Module:</strong> Current international events and global debate preparation.</li>
                <li><strong>Autonomous Listening:</strong> Guided self-study listening program on eCampus.</li>
                <li><strong>Formative Evaluation:</strong> Session 8 paired communicative speaking challenge.</li>
              </ul>
            </div>

            <!-- LVXXX AAS 16h -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LVXXX</span>
                <span class="text-xs font-mono font-bold text-slate-600">16 Hours (−14h)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Aviation Safety &amp; Air Traffic (AAS)</h3>
              <p class="text-xs text-slate-600 leading-snug">Introduction to Language Testing (LT) &amp; air traffic procedures:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>2 Modules:</strong> 1. AFIS; 2. Ground Operations (ATIS, Apron control).</li>
                <li><strong>Self-Study:</strong> Preparatory Language Training (PLT) modules on eCampus.</li>
                <li><strong>Formative Evaluation:</strong> Session 8 simulated Language Testing assessment.</li>
              </ul>
            </div>

            <!-- 4-Week Immersion & TOEIC -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">MILESTONE</span>
                <span class="text-xs font-mono font-bold text-slate-600">4 Weeks</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Immersion &amp; TOEIC Benchmark</h3>
              <p class="text-xs text-slate-600 leading-snug">Intensive homestay immersion in English-speaking destinations:</p>
              <ul class="text-xs text-slate-700 space-y-1 list-disc list-inside leading-snug">
                <li><strong>4-Week Homestay:</strong> 1 ENAC student per host family across certified partner cities.</li>
                <li><strong>TOEIC Benchmark:</strong> Minimum B2 level (785 pts) required for graduation.</li>
                <li><strong>Official Exam Window:</strong> Administered Week 1 of Semester 3 (or end of immersion). Retakes before graduation.</li>
              </ul>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
            <div>
              <strong class="font-bold text-slate-900">Pacing &amp; Efficiency:</strong> Reducing Semester 2 classroom contact by 32 hours prevents cognitive overload before students depart for the intensive 4-week immersion stay.
            </div>
            <span class="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
              Net Reduction: −32 Hours
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 4: The New Structure — Semesters 3 & 4 -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-3" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 hidden">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 4 • THE NEW STRUCTURE</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Semesters 3 &amp; 4: Specialized Technical &amp; Professional Mastery</h2>
              <p class="text-xs text-slate-500 mt-0.5">Complete Elimination of General English: Pure Technical &amp; Professional Focus (−60h Total Reduction)</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
              S3 = AT (30h) • S4 = AP (36h)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <!-- Semester 3 -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">SEMESTER 3 • LVXXX</span>
                <span class="text-xs font-mono font-bold text-slate-600">30 Hours (−30h Reduction)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Technical English (AT) — No General English</h3>
              <p class="text-xs text-slate-600 leading-snug">Rigorous preparation for operational document navigation and civil aviation qualification:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside leading-snug">
                <li><strong>Module 1 • EASA Documents:</strong> Deep reading and exploitation of official European regulatory texts, CS specifications, and safety directives. Flipped peer lessons in Session 7.</li>
                <li><strong>Module 2 • MTF Qualification Prep:</strong> Intensive exam strategy, practice drills, and mock tests for the French civil aviation qualification test.</li>
                <li><strong>Language Testing Self-Study:</strong> Continuous self-directed listening and vocabulary on eCampus.</li>
                <li><strong>End-of-Semester MTF Test:</strong> Mandatory qualification exam for all GSEA students; remains obligatory for diploma validation.</li>
              </ul>
            </div>

            <!-- Semester 4 -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">SEMESTER 4 • LVXXX</span>
                <span class="text-xs font-mono font-bold text-slate-600">36 Hours (−30h Reduction)</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Professional English (AP) &amp; Pecha Kucha PFE</h3>
              <p class="text-xs text-slate-600 leading-snug">Final stage polishing workplace presentation skills and career-launch communications:</p>
              <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside leading-snug">
                <li><strong>Professional English Course (30 Hours):</strong> International workplace correspondence, cross-cultural technical leadership, and engineering negotiations. Program currently in final design.</li>
                <li><strong>Pecha Kucha PFE Defense (6 Hours):</strong> 20 slides &times; 20 seconds fast-paced spoken defense format for the graduation end-of-studies project.</li>
                <li><strong>Exit Qualification:</strong> Final verification of B2/C1 operational fluency before civil aviation workplace entry.</li>
              </ul>
            </div>
          </div>

          <!-- Track Evolution Summary -->
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2 rounded bg-white border border-slate-200">
              <span class="text-[10px] font-bold text-slate-400 block font-mono">SEMESTER 1</span>
              <span class="font-black text-slate-800">AG + AT</span>
            </div>
            <div class="p-2 rounded bg-white border border-slate-200">
              <span class="text-[10px] font-bold text-slate-400 block font-mono">SEMESTER 2</span>
              <span class="font-black text-slate-800">AG + AAS</span>
            </div>
            <div class="p-2 rounded bg-white border border-slate-200">
              <span class="text-[10px] font-bold text-slate-400 block font-mono">SEMESTER 3</span>
              <span class="font-black text-slate-800">AT Only</span>
            </div>
            <div class="p-2 rounded bg-white border border-slate-200">
              <span class="text-[10px] font-bold text-slate-400 block font-mono">SEMESTER 4</span>
              <span class="font-black text-slate-800">AP + PFE</span>
            </div>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 5: eCampus & Technical Architecture -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-4" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 hidden">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 5 • INFRASTRUCTURE &amp; RESILIENCE</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Digital Architecture: SCORM Hubs, eCampus &amp; Offline Portability</h2>
              <p class="text-xs text-slate-500 mt-0.5">Modern, eco-designed web platform running completely self-contained both online and offline</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
              100% Offline • Zero CDN
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <!-- eCampus Integration -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">LMS INTEGRATION</span>
                <span class="text-xs font-mono font-bold text-slate-600">Standard SCORM 1.2</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Seamless eCampus Alignment</h3>
              <div class="text-xs text-slate-700 space-y-1.5 leading-snug">
                <p>&bull; <strong>Centralized Access:</strong> All learning modules, interactive worksheets, and multimedia dossiers are accessible directly through eCampus semester hubs.</p>
                <p>&bull; <strong>Standard Communication Channels:</strong> Teachers and students continue using established eCampus discussion forums for weekly notices, Q&amp;A, and assignment submissions.</p>
                <p>&bull; <strong>Lightweight Footprint:</strong> Zero database queries or dynamic server workloads; content loads instantly in any modern browser.</p>
              </div>
            </div>

            <!-- Zero-Dependency Architecture -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">OFFLINE RESILIENCE</span>
                <span class="text-xs font-mono font-bold text-slate-600">Zero Server Dependencies</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Pure HTML + Vanilla JavaScript Design</h3>
              <div class="text-xs text-slate-700 space-y-1.5 leading-snug">
                <p>&bull; <strong>Runs 100% Offline:</strong> Built with pure HTML5, Tailwind CSS, and vanilla JS. Requires zero external CDNs, API calls, or cloud servers.</p>
                <p>&bull; <strong>Network Failure Resilience:</strong> The entire package can be stored on a simple USB key or in the ENAC internal network drive (<code class="bg-slate-200 px-1 py-0.5 rounded font-mono text-[10px]">T://</code>). If campus Wi-Fi drops, teaching continues uninterrupted.</p>
                <p>&bull; <strong>Client-Side State Storage:</strong> Student notes, vocabulary mastery states, and quiz scores persist in browser localStorage without server sync.</p>
              </div>
            </div>
          </div>

          <!-- Eco-Design Callout -->
          <div class="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-slate-700">
            <div>
              <strong class="font-bold text-slate-900">Eco-Designed Digital Education:</strong> Eliminates continuous streaming data loads, third-party trackers, and dynamic database hits, resulting in an exceptionally low digital carbon footprint that fully embodies ENAC's environmental transition goals.
            </div>
            <span class="px-2 py-0.5 rounded bg-white text-slate-800 font-bold border border-slate-200 font-mono text-[10.5px] shrink-0">
              Low-Energy IT Architecture
            </span>
          </div>
        </div>

        <!-- -------------------------------------------------------- -->
        <!-- SLIDE 6: Pedagogy & Sustainability -->
        <!-- -------------------------------------------------------- -->
        <div id="refonte-slide-5" class="refonte-slide bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4 hidden">
          <div class="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">SLIDE 6 • PEDAGOGY &amp; SUSTAINABILITY</span>
              <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">Pedagogical Philosophy &amp; Environmental Impact</h2>
              <p class="text-xs text-slate-500 mt-0.5">L'Approche par Compétences: Building Operational Confidence, Eliminating Exam Stress &amp; Saving Paper</p>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
              Zero-Print • Competency-Based
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <!-- Pedagogical Approach -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">PEDAGOGICAL ARCHITECTURE</span>
                <span class="text-xs font-mono font-bold text-slate-600">L'Approche par Compétences</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Continuous Confidence-Building</h3>
              <div class="text-xs text-slate-700 space-y-1.5 leading-snug">
                <p>&bull; <strong>Grounded in TSEEAC Feedback:</strong> Designed directly around operational feedback from civil aviation technicians who need spontaneous speaking confidence rather than theoretical grammar memorization.</p>
                <p>&bull; <strong>Continuous Assessment (No Exams):</strong> Traditional high-stakes end-of-semester written exams are replaced with continuous formative evaluation (FE) in small groups or pairs.</p>
                <p>&bull; <strong>Building Confidence:</strong> Low-anxiety environment encouraging active peer interaction, immediate constructive teacher feedback, and personal learning reflection.</p>
                <p>&bull; <strong>Proactive Certification Success:</strong> Integrated preparation for the <strong>TOEIC</strong> (mandatory CEFR B2 benchmark) and the <strong>MTF</strong> (mandatory civil aviation graduation exam).</p>
              </div>
            </div>

            <!-- Environmental Benefits -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-white">ENVIRONMENTAL IMPACT</span>
                <span class="text-xs font-mono font-bold text-slate-600">Zero-Print Practice</span>
              </div>
              <h3 class="text-sm font-black text-slate-900">Environmental Benefits of our Structure</h3>
              <div class="text-xs text-slate-700 space-y-1.5 leading-snug">
                <p>&bull; <strong>Strict No-Print Approach:</strong> Digital worksheets, auto-saving textareas, and on-screen rubrics completely eliminate physical photocopies (~2,000 pages of paper saved per promotion).</p>
                <p>&bull; <strong>Printable PDFs Only on Demand:</strong> Clean 7-page A4 PDF worksheets are generated on demand via native PDF engines for students who genuinely require physical copies.</p>
                <p>&bull; <strong>Ultra-Low Energy Computing:</strong> Client-side rendering requires no active server infrastructure or compute cycles, minimizing server-farm energy consumption.</p>
                <p>&bull; <strong>Full DD&amp;RS Integration:</strong> Every module is linked to official French Higher Education ecological transition benchmarks.</p>
              </div>
            </div>
          </div>

          <!-- Concluding Callout -->
          <div class="p-3.5 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
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
      <div id="refonte-doc-wrapper" class="space-y-4 hidden">
        <!-- Rendered dynamically by JavaScript -->
      </div>
    </div>
  `;
}

function generateRefonteJS() {
  return `
    let __refonteSlide = 0;
    const __refonteTotalSlides = 6;
    let __refonteViewMode = 'slides';

    const __refonteSlideTopics = [
      "Refonte Timeline",
      "Semester 1 Architecture",
      "Semester 2 Streamlining",
      "Semesters 3 & 4 Specialization",
      "Digital Architecture & eCampus",
      "Pedagogy & Sustainability"
    ];

    window.initRefonteDeck = function() {
      __refonteSlide = 0;
      __refonteViewMode = 'slides';
      renderRefonteDots();
      window.updateRefonteSlideDisplay();
      populateRefonteDocView();
      setupRefonteFullscreenListener();
    };

    function renderRefonteDots() {
      const container = document.getElementById('refonte-dots-container');
      if (!container) return;
      let html = '';
      for (let i = 0; i < __refonteTotalSlides; i++) {
        html += '<button onclick="window.goToRefonteSlide(' + i + ')" class="w-2.5 h-2.5 rounded-full transition-all cursor-pointer ' + (i === __refonteSlide ? 'bg-slate-900 scale-125' : 'bg-slate-300 hover:bg-slate-400') + '" title="Slide ' + (i + 1) + ': ' + __refonteSlideTopics[i] + '"></button>';
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

      const counterEl = document.getElementById('refonte-slide-counter');
      if (counterEl) counterEl.textContent = 'Slide ' + (__refonteSlide + 1) + ' of ' + __refonteTotalSlides;

      const topicEl = document.getElementById('refonte-slide-topic');
      if (topicEl) topicEl.textContent = __refonteSlideTopics[__refonteSlide] || '';

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
          btnDoc.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold";
        }
        if (btnSlides) {
          btnSlides.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold";
        }
      } else {
        if (slidesWrapper) slidesWrapper.classList.remove('hidden');
        if (navBar) navBar.classList.remove('hidden');
        if (docWrapper) docWrapper.classList.add('hidden');
        if (btnSlides) {
          btnSlides.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold";
        }
        if (btnDoc) {
          btnDoc.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold";
        }
        window.updateRefonteSlideDisplay();
      }
    };

    function populateRefonteDocView() {
      const docWrapper = document.getElementById('refonte-doc-wrapper');
      if (!docWrapper) return;
      docWrapper.innerHTML = '';
      for (let i = 0; i < __refonteTotalSlides; i++) {
        const slide = document.getElementById('refonte-slide-' + i);
        if (slide) {
          const clone = slide.cloneNode(true);
          clone.id = 'refonte-doc-slide-' + i;
          clone.classList.remove('hidden');
          docWrapper.appendChild(clone);
        }
      }
    }

    // --- Native Fullscreen Controller ---
    window.toggleRefonteFullscreen = function() {
      const wrapper = document.getElementById('refonte-deck-wrapper');
      if (!wrapper) return;
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (wrapper.requestFullscreen) {
          wrapper.requestFullscreen();
        } else if (wrapper.webkitRequestFullscreen) {
          wrapper.webkitRequestFullscreen();
        } else if (wrapper.msRequestFullscreen) {
          wrapper.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    };

    function setupRefonteFullscreenListener() {
      const updateFsUI = () => {
        const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
        const label = document.getElementById('refonte-fullscreen-label');
        const iconEnter = document.getElementById('refonte-fs-icon-enter');
        const iconExit = document.getElementById('refonte-fs-icon-exit');
        const wrapper = document.getElementById('refonte-deck-wrapper');
        
        if (label) label.textContent = isFs ? 'Exit' : 'Fullscreen';
        if (iconEnter) iconEnter.classList.toggle('hidden', isFs);
        if (iconExit) iconExit.classList.toggle('hidden', !isFs);
        if (wrapper) {
          if (isFs) {
            wrapper.classList.add('bg-slate-100', 'p-6', 'overflow-y-auto', 'max-w-none', 'w-full', 'min-h-screen');
          } else {
            wrapper.classList.remove('bg-slate-100', 'p-6', 'overflow-y-auto', 'max-w-none', 'min-h-screen');
          }
        }
      };

      document.removeEventListener('fullscreenchange', updateFsUI);
      document.addEventListener('fullscreenchange', updateFsUI);
      document.removeEventListener('webkitfullscreenchange', updateFsUI);
      document.addEventListener('webkitfullscreenchange', updateFsUI);
    }

    // Keyboard Shortcuts (Arrow keys, Space, F, Esc)
    document.addEventListener('keydown', function(e) {
      const wrapper = document.getElementById('refonte-deck-wrapper');
      if (!wrapper) return;
      // If typing in input, ignore
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'f' || e.key === 'F') {
        window.toggleRefonteFullscreen();
        return;
      }
      if (__refonteViewMode !== 'slides') return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        window.nextRefonteSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        window.prevRefonteSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.goToRefonteSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        window.goToRefonteSlide(__refonteTotalSlides - 1);
      }
    });
  `;
}

function main() {
  const refonteHTML = generateRefonteHTML();
  const refonteJS = generateRefonteJS();

  // 1. Update src/js/11-admin-hub.js
  const adminHubPath = path.join(rootDir, 'src', 'js', '11-admin-hub.js');
  let adminHub = fs.readFileSync(adminHubPath, 'utf8');

  // Replace renderAdminRefonteTab
  const fnMarkerStart = 'function renderAdminRefonteTab(theme) {';
  const fnIdx = adminHub.indexOf(fnMarkerStart);
  if (fnIdx !== -1) {
    const fnBody = `function renderAdminRefonteTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      bodyEl.innerHTML = \`
        \${${JSON.stringify(refonteHTML)}}
      \`;

      if (window.initRefonteDeck) {
        window.initRefonteDeck();
      }
    }

    ${refonteJS}
`;
    // Find end of the refonte section in 11-admin-hub.js
    const endMarker = 'window.renderAdminRefonteTab = renderAdminRefonteTab;';
    const endIdx = adminHub.indexOf(endMarker, fnIdx);
    if (endIdx !== -1) {
      adminHub = adminHub.substring(0, fnIdx) + fnBody + '\n    ' + adminHub.substring(endIdx);
    } else {
      adminHub = adminHub.substring(0, fnIdx) + fnBody + '\n    window.renderAdminRefonteTab = renderAdminRefonteTab;\n';
    }
    fs.writeFileSync(adminHubPath, adminHub, 'utf8');
    console.log('✓ Updated src/js/11-admin-hub.js with tightened executive refonte presentation & fullscreen controller.');
  }

  // 2. Update admin.html (section-refonte)
  const adminHtmlPath = path.join(rootDir, 'admin.html');
  let adminHtml = fs.readFileSync(adminHtmlPath, 'utf8');

  const secStart = '<section id="section-refonte"';
  const secStartIdx = adminHtml.indexOf(secStart);
  if (secStartIdx !== -1) {
    const secTagClose = adminHtml.indexOf('>', secStartIdx);
    const secEndIdx = adminHtml.indexOf('</section>', secTagClose);
    if (secEndIdx !== -1) {
      adminHtml = adminHtml.substring(0, secTagClose + 1) + '\n' + refonteHTML + '\n      ' + adminHtml.substring(secEndIdx);
    }
  }

  // Also update the JS functions in admin.html
  const jsMarker = 'let __refonteSlide = 0;';
  const jsIdx = adminHtml.indexOf(jsMarker);
  if (jsIdx !== -1) {
    const jsEndMarker = '</script>';
    const jsEndIdx = adminHtml.indexOf(jsEndMarker, jsIdx);
    if (jsEndIdx !== -1) {
      adminHtml = adminHtml.substring(0, jsIdx) + refonteJS + '\n    ' + adminHtml.substring(jsEndIdx);
    }
  }

  fs.writeFileSync(adminHtmlPath, adminHtml, 'utf8');
  console.log('✓ Updated admin.html with tightened executive refonte presentation & fullscreen controller.');
}

main();
