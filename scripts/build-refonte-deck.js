/**
 * Build Script for GSEA 2027 Refonte Presentation Slide Deck
 * - Drawer View: Normal 100% drawer width (zero drawer distortion)
 * - Fullscreen View:
 *   • Viewport Canvas: Semester 1 portal dot-matrix background (#f1f5f9 + radial-gradient dots)
 *   • Presentation Slide: Strictly 75% screen width centered (max-width: 1350px)
 *   • Proportioned slide canvas (min-h-[500px]) with zero black letterboxing
 * - Exactly ONE highlight color per slide (from Semester 1 deck):
 *   • Slide 1: Aviation Blue (#1d4ed8 / text-blue-600 / bg-blue-600)
 *   • Slide 2: Terracotta Orange (#ea580c / text-orange-600 / bg-orange-600)
 *   • Slide 3: Horizon Sky Blue (#0284c7 / text-sky-600 / bg-sky-600)
 *   • Slide 4: Runway Amber (#d97706 / text-amber-600 / bg-amber-600)
 *   • Slide 5: Digital Indigo (#4f46e5 / text-indigo-600 / bg-indigo-600)
 *   • Slide 6: Eco-Design Emerald (#059669 / text-emerald-600 / bg-emerald-600)
 * - Zero placeholders (LV102E, LV122E, LV125E, LV126E)
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
    <!-- Scoped Style: Normal width in drawer, 75% centered on Portal dot-matrix canvas in Fullscreen -->
    <style>
      .refonte-deck-container {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        background: transparent !important;
      }
      .refonte-inner-stage {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
      }

      /* Fullscreen Presentation Canvas */
      #refonte-deck-wrapper:fullscreen,
      #refonte-deck-wrapper:-webkit-full-screen,
      .refonte-deck-container.is-fullscreen {
        width: 100vw !important;
        height: 100vh !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        overflow-y: auto !important;
        background-color: #f1f5f9 !important;
        background-image: radial-gradient(rgba(0, 0, 0, 0.085) 1.25px, transparent 1.25px) !important;
        background-size: 20px 20px !important;
        padding: 1.5rem !important;
        box-sizing: border-box !important;
        display: flex !important;
        flex-direction: column !important;
      }

      #refonte-deck-wrapper::backdrop {
        background-color: #f1f5f9 !important;
        background-image: radial-gradient(rgba(0, 0, 0, 0.085) 1.25px, transparent 1.25px) !important;
        background-size: 20px 20px !important;
      }

      /* In Fullscreen: Presentation covers exactly 75% width centered HORIZONTALLY & VERTICALLY */
      .refonte-deck-container.is-fullscreen .refonte-inner-stage {
        width: 75% !important;
        max-width: 1350px !important;
        margin: auto !important; /* Perfect vertical & horizontal centering */
      }

      @media (max-width: 1024px) {
        .refonte-deck-container.is-fullscreen .refonte-inner-stage {
          width: 92% !important;
        }
      }
      @media (max-width: 768px) {
        .refonte-deck-container.is-fullscreen .refonte-inner-stage {
          width: 100% !important;
        }
      }
    </style>

    <div id="refonte-deck-wrapper" class="refonte-deck-container transition-all duration-200">
      <div class="refonte-inner-stage space-y-3.5">
        
        <!-- Unified, Compact Top Control Bar -->
        <div class="bg-white border border-slate-200 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xs flex flex-wrap items-center justify-between gap-2.5">
          
          <!-- Left: Identity -->
          <div class="flex items-center gap-2.5">
            <div class="bg-slate-900 px-2 py-1 rounded-md flex items-center shadow-xs border border-slate-800 shrink-0">
              <img src="images/enac_logo_white.png" alt="ENAC" class="h-4 w-auto object-contain">
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">LH / LAN</span>
                <span class="text-xs sm:text-sm font-black text-slate-900 tracking-tight">GSEA 2027 Refonte</span>
              </div>
              <p class="text-[10.5px] text-slate-500 hidden sm:block">Phil PARRIS &bull; D&eacute;partement Langues &amp; Humanit&eacute;s</p>
            </div>
          </div>

          <!-- Center: Slide Navigation -->
          <div class="flex items-center gap-2">
            <button id="refonte-btn-prev" onclick="window.prevRefonteSlide()" class="px-2.5 py-1 rounded-lg font-bold border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-1 text-[11px] disabled:opacity-30 disabled:cursor-not-allowed" title="Previous Slide (Left Arrow)">
              <span>&larr;</span> <span>Prev</span>
            </button>
            
            <div class="flex items-center gap-1.5 px-1 sm:px-2" id="refonte-dots-container">
              <!-- Dynamic Dots -->
            </div>
            
            <span id="refonte-slide-counter" class="font-bold text-slate-700 font-mono text-[10.5px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Slide 1 of 6
            </span>

            <button id="refonte-btn-next" onclick="window.nextRefonteSlide()" class="px-2.5 py-1 rounded-lg font-bold border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 shadow-xs transition-all cursor-pointer flex items-center gap-1 text-[11px] disabled:opacity-30 disabled:cursor-not-allowed" title="Next Slide (Right Arrow / Space)">
              <span>Next</span> <span>&rarr;</span>
            </button>
          </div>

          <!-- Right: Mode toggle & Fullscreen -->
          <div class="flex items-center gap-2">
            <div class="bg-slate-100 p-0.5 rounded-lg border border-slate-200 flex items-center gap-0.5 text-xs font-bold">
              <button id="refonte-btn-mode-slides" onclick="window.switchRefonteView('slides')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold text-[11px]">
                <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Slides</span>
              </button>
              <button id="refonte-btn-mode-doc" onclick="window.switchRefonteView('doc')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold text-[11px]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>Doc</span>
              </button>
            </div>

            <button id="refonte-btn-fullscreen" onclick="window.toggleRefonteFullscreen()" class="px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all cursor-pointer flex items-center gap-1.5 font-bold text-[11px] shadow-xs" title="Toggle Fullscreen (F)">
              <svg id="refonte-fs-icon-enter" class="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
              <svg id="refonte-fs-icon-exit" class="w-3 h-3 hidden text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9L4 4m0 0v4m0-4h4m6 6l5 5m0 0v-4m0 4h-4M9 15l-5 5m0 0v-4m0 4h4m11-9l-5-5m5 5v-4m0 4h-4"/></svg>
              <span id="refonte-fullscreen-label" class="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>

        <!-- ======================================================== -->
        <!-- SLIDES CANVAS WRAPPER                                   -->
        <!-- ======================================================== -->
        <div id="refonte-slides-wrapper" class="space-y-3.5">

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 1: Refonte Timeline (ONE COLOR: Aviation Blue)    -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-0" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between">
            <div class="space-y-3">
              <div class="border-b border-blue-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 font-mono">SLIDE 1 &bull; ROLLOUT TIMELINE</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Refonte Timeline: <span class="text-blue-600">Phased Cohort Deployment</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">Progressive curriculum rollout across active promotions: GSEA26A and GSEA25A</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  2 Cohorts in Parallel
                </span>
              </div>

              <!-- 4 Cards: Uniform Aviation Blue theme -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <!-- Semester 1 -->
                <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/20 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-blue-600 text-white font-mono">LIVE &bull; V1.0</span>
                      <span class="text-[10px] font-bold text-blue-500 font-mono">Autumn 2026</span>
                    </div>
                    <h3 class="text-xs font-black text-blue-900 mt-1.5">Semester 1</h3>
                    <p class="text-[11px] font-bold text-blue-600">Promotion GSEA26A</p>
                    <div class="text-[11px] text-slate-600 space-y-1 mt-1.5 leading-tight">
                      <p>&bull; <strong>Status:</strong> Now running in Version 1 with GSEA26A.</p>
                      <p>&bull; <strong>Milestone:</strong> Module 1 complete (Travel &amp; Transport).</p>
                      <p>&bull; <strong>Current Phase:</strong> Module 2 active (Climate &amp; Cities).</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-blue-100 text-[10.5px] font-mono font-bold text-blue-700">
                    89 Hours (Induction + AG + AT)
                  </div>
                </div>

                <!-- Semester 2 -->
                <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/20 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-blue-600 text-white font-mono">SPRING 2027</span>
                      <span class="text-[10px] font-bold text-blue-500 font-mono">Scheduled</span>
                    </div>
                    <h3 class="text-xs font-black text-blue-900 mt-1.5">Semester 2</h3>
                    <p class="text-[11px] font-bold text-blue-600">Promotion GSEA26A</p>
                    <div class="text-[11px] text-slate-600 space-y-1 mt-1.5 leading-tight">
                      <p>&bull; <strong>Status:</strong> Will be implemented with GSEA26A in 2027.</p>
                      <p>&bull; <strong>Key Change:</strong> Reduction of 32 classroom hours.</p>
                      <p>&bull; <strong>Tracks:</strong> AG (16h) + AAS (16h: AFIS &amp; Ground).</p>
                      <p>&bull; <strong>Immersion:</strong> 4-week dedicated English immersion.</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-blue-100 text-[10.5px] font-mono font-bold text-blue-700">
                    32 Hours Total + 4 Weeks Immersion
                  </div>
                </div>

                <!-- Semester 3 -->
                <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/20 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-blue-600 text-white font-mono">LIVE</span>
                      <span class="text-[10px] font-bold text-blue-500 font-mono">2026&ndash;2027</span>
                    </div>
                    <h3 class="text-xs font-black text-blue-900 mt-1.5">Semester 3</h3>
                    <p class="text-[11px] font-bold text-blue-600">Promotion GSEA25A</p>
                    <div class="text-[11px] text-slate-600 space-y-1 mt-1.5 leading-tight">
                      <p>&bull; <strong>Status:</strong> Now running with GSEA25A.</p>
                      <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                      <p>&bull; <strong>Track:</strong> Technical English (AT 30h) only.</p>
                      <p>&bull; <strong>Focus:</strong> EASA regulatory documents &amp; MTF prep.</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-blue-100 text-[10.5px] font-mono font-bold text-blue-700">
                    30 Hours AT + End S3 MTF Test
                  </div>
                </div>

                <!-- Semester 4 -->
                <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/20 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-blue-600 text-white font-mono">2027</span>
                      <span class="text-[10px] font-bold text-blue-500 font-mono">In Design</span>
                    </div>
                    <h3 class="text-xs font-black text-blue-900 mt-1.5">Semester 4</h3>
                    <p class="text-[11px] font-bold text-blue-600">Promotion GSEA25A</p>
                    <div class="text-[11px] text-slate-600 space-y-1 mt-1.5 leading-tight">
                      <p>&bull; <strong>Status:</strong> Will be implemented with GSEA25A in 2027.</p>
                      <p>&bull; <strong>Key Change:</strong> Reduction of 30 hours (zero General English).</p>
                      <p>&bull; <strong>Tracks:</strong> Professional English (AP 30h) + Pecha Kucha (6h).</p>
                      <p>&bull; <strong>Graduation:</strong> Final internship defense &amp; exit validation.</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-blue-100 text-[10.5px] font-mono font-bold text-blue-700">
                    36 Hours Total (30h AP + 6h PFE)
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 1 Callout -->
            <div class="p-3 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-blue-900">
              <div>
                <strong class="font-bold text-blue-900">Strategic Curriculum Impact:</strong>
                Overall reduction of <strong>~92 classroom hours</strong> across the 2-year cycle, replacing passive lecture hours with high-density spoken workshops, continuous formative assessment, and self-directed digital study.
              </div>
              <span class="font-mono font-bold text-white bg-blue-600 px-2.5 py-1 rounded-lg shrink-0">
                Total Streamlining: &minus;92 Hours
              </span>
            </div>
          </div>

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 2: Semester 1 Architecture (ONE COLOR: Orange)    -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-1" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between hidden">
            <div class="space-y-3">
              <div class="border-b border-orange-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-orange-100 text-orange-700 border border-orange-200 font-mono">SLIDE 2 &bull; THE CURRENT FOUNDATION</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Semester 1 Architecture: <span class="text-orange-600">Induction, AG &amp; AT</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">Building core conversational fluency, aviation terminology, and communicative confidence</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-orange-50 text-orange-700 border border-orange-200 font-mono">
                  Autumn 2026 &bull; Live V1.0
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- Induction -->
                <div class="p-4 rounded-xl border border-orange-200 bg-orange-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-orange-600 text-white font-mono">INDUCTION</span>
                    <span class="text-xs font-mono font-bold text-orange-600">5 Hours</span>
                  </div>
                  <h3 class="text-xs font-black text-orange-950">Intensive Cohort Onboarding</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Spoken fluency diagnosis, methodology orientation, and cohort cohesion:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Baseline Evaluation:</strong> Spoken fluency &amp; listening diagnosis.</li>
                    <li><strong>Methodology Briefing:</strong> Interactive, communicative workshops.</li>
                    <li><strong>Cohort Cohesion:</strong> Team communication &amp; peer pairing.</li>
                    <li><strong>Digital Orientation:</strong> Flight Deck and self-study platform tour.</li>
                  </ul>
                  <div class="pt-2 border-t border-orange-100 text-[10.5px] font-mono font-bold text-orange-700">
                    5h Induction &bull; 0 ECTS
                  </div>
                </div>

                <!-- LV101E AG -->
                <div class="p-4 rounded-xl border border-orange-200 bg-orange-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-orange-600 text-white font-mono">LV101E &bull; AG</span>
                    <span class="text-xs font-mono font-bold text-orange-600">42 Hours</span>
                  </div>
                  <h3 class="text-xs font-black text-orange-950">General English: 3 Thematic Modules</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Cultural perspective, debate, and spontaneous spoken interaction:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Module 1:</strong> Travel, Tourism &amp; Cultural Immersion (4 sessions).</li>
                    <li><strong>Module 2:</strong> Climate Change &amp; Sustainable Cities (4 sessions).</li>
                    <li><strong>Module 3:</strong> Cinema, Media &amp; Storytelling (3 sessions).</li>
                    <li><strong>Session 12:</strong> Formative Evaluation &bull; Peer challenge (1 session).</li>
                  </ul>
                  <div class="pt-2 border-t border-orange-100 text-[10.5px] font-mono font-bold text-orange-700">
                    42h &bull; Continuous Formative Assessment
                  </div>
                </div>

                <!-- LV121E AT -->
                <div class="p-4 rounded-xl border border-orange-200 bg-orange-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-orange-600 text-white font-mono">LV121E &bull; AT</span>
                    <span class="text-xs font-mono font-bold text-orange-600">42 Hours</span>
                  </div>
                  <h3 class="text-xs font-black text-orange-950">Technical English: 3 Aeronautical Modules</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Engineering fundamentals, aircraft systems, and operational safety:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Module 1:</strong> Airframe, Aerodynamics &amp; Propulsion (4 sessions).</li>
                    <li><strong>Module 2:</strong> Avionics, Cockpit &amp; Navigation (4 sessions).</li>
                    <li><strong>Module 3:</strong> Green Aviation &amp; Alternative Fuels (3 sessions).</li>
                    <li><strong>Session 12:</strong> Formative Evaluation &bull; Paired technical briefing.</li>
                  </ul>
                  <div class="pt-2 border-t border-orange-100 text-[10.5px] font-mono font-bold text-orange-700">
                    42h &bull; Continuous Formative Assessment
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 Callout -->
            <div class="p-3 rounded-xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-orange-900">
              <div>
                <strong class="font-bold text-orange-900">Pedagogical Foundation:</strong>
                Semester 1 establishes the intensive bedrock (89 hours total), developing confident speakers before the program pivots toward specialized autonomy in Semesters 2, 3, and 4.
              </div>
              <span class="font-mono font-bold text-white bg-orange-600 px-2.5 py-1 rounded-lg shrink-0">
                Cohort: GSEA26A &bull; 89 Hours Total
              </span>
            </div>
          </div>

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 3: Semester 2 (ONE COLOR: Horizon Sky Blue)       -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-2" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between hidden">
            <div class="space-y-3">
              <div class="border-b border-sky-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-200 font-mono">SLIDE 3 &bull; THE NEW STRUCTURE</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Semester 2: <span class="text-sky-600">Streamlining, Air Traffic &amp; Immersion</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">Curriculum Reduction of 32 Hours: 16h General English + 16h Aviation Safety + 4-Week Immersion</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                  Spring 2027 &bull; &minus;32h Reduction
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- LV102E AG 16h -->
                <div class="p-4 rounded-xl border border-sky-200 bg-sky-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-sky-600 text-white font-mono">LV102E &bull; AG</span>
                    <span class="text-xs font-mono font-bold text-sky-600">16 Hours (&minus;18h)</span>
                  </div>
                  <h3 class="text-xs font-black text-sky-950">General English (AG)</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Streamlined format centered on global affairs and active debate:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>1 Thematic Module:</strong> Current international events and global debate preparation.</li>
                    <li><strong>Autonomous Listening:</strong> Guided self-study listening program on eCampus.</li>
                    <li><strong>Formative Evaluation:</strong> Session 8 paired communicative speaking challenge.</li>
                  </ul>
                  <div class="pt-2 border-t border-sky-100 text-[10.5px] font-mono font-bold text-sky-700">
                    16h Contact &bull; 8 Sessions
                  </div>
                </div>

                <!-- LV122E AAS 16h -->
                <div class="p-4 rounded-xl border border-sky-200 bg-sky-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-sky-600 text-white font-mono">LV122E &bull; AAS</span>
                    <span class="text-xs font-mono font-bold text-sky-600">16 Hours (&minus;14h)</span>
                  </div>
                  <h3 class="text-xs font-black text-sky-950">Aviation Safety &amp; Air Traffic (AAS)</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Introduction to Language Testing (LT) &amp; air traffic procedures:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>2 Modules:</strong> 1. AFIS; 2. Ground Operations (ATIS, Apron control).</li>
                    <li><strong>Self-Study:</strong> Preparatory Language Training (PLT) modules on eCampus.</li>
                    <li><strong>Formative Evaluation:</strong> Session 8 simulated Language Testing assessment.</li>
                  </ul>
                  <div class="pt-2 border-t border-sky-100 text-[10.5px] font-mono font-bold text-sky-700">
                    16h Contact &bull; 8 Sessions
                  </div>
                </div>

                <!-- 4-Week Immersion & TOEIC -->
                <div class="p-4 rounded-xl border border-sky-200 bg-sky-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-sky-600 text-white font-mono">MILESTONE</span>
                    <span class="text-xs font-mono font-bold text-sky-600">4 Weeks</span>
                  </div>
                  <h3 class="text-xs font-black text-sky-950">Immersion &amp; TOEIC Benchmark</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Intensive homestay immersion in English-speaking destinations:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>4-Week Homestay:</strong> 1 ENAC student per host family across partner cities.</li>
                    <li><strong>TOEIC Benchmark:</strong> Minimum B2 level (785 pts) required for graduation.</li>
                    <li><strong>Official Exam Window:</strong> Administered Week 1 of Semester 3.</li>
                  </ul>
                  <div class="pt-2 border-t border-sky-100 text-[10.5px] font-mono font-bold text-sky-700">
                    4-Week Dedicated Homestay
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3 Callout -->
            <div class="p-3 rounded-xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-sky-900">
              <div>
                <strong class="font-bold text-sky-900">Pacing &amp; Efficiency:</strong>
                Reducing Semester 2 classroom contact by 32 hours prevents cognitive overload before students depart for the intensive 4-week immersion stay.
              </div>
              <span class="font-mono font-bold text-white bg-sky-600 px-2.5 py-1 rounded-lg shrink-0">
                Net Reduction: &minus;32 Hours
              </span>
            </div>
          </div>

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 4: Semesters 3 & 4 (ONE COLOR: Runway Amber)      -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-3" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between hidden">
            <div class="space-y-3">
              <div class="border-b border-amber-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200 font-mono">SLIDE 4 &bull; THE NEW STRUCTURE</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Semesters 3 &amp; 4: <span class="text-amber-600">Specialized Technical &amp; Professional Mastery</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">Complete Elimination of General English: Pure Technical &amp; Professional Focus (&minus;60h Total Reduction)</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200 font-mono">
                  S3 = AT (30h) &bull; S4 = AP (36h)
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- Semester 3 -->
                <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-amber-600 text-white font-mono">SEMESTER 3 &bull; LV125E</span>
                    <span class="text-xs font-mono font-bold text-amber-600">30 Hours (&minus;30h Reduction)</span>
                  </div>
                  <h3 class="text-xs font-black text-amber-950">Technical English (AT) &mdash; No General English</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Rigorous preparation for operational document navigation and civil aviation qualification:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Module 1 &bull; EASA Documents:</strong> Regulatory texts, CS specifications, and safety directives. Flipped peer lessons in Session 7.</li>
                    <li><strong>Module 2 &bull; MTF Qualification Prep:</strong> Intensive exam strategy, practice drills, and mock tests for the qualification test.</li>
                    <li><strong>Language Testing Self-Study:</strong> Continuous self-directed listening and vocabulary on eCampus.</li>
                    <li><strong>End-of-Semester MTF Test:</strong> Mandatory qualification exam for all GSEA students; remains obligatory.</li>
                  </ul>
                  <div class="pt-2 border-t border-amber-100 text-[10.5px] font-mono font-bold text-amber-700">
                    30h Technical English &bull; Zero General English
                  </div>
                </div>

                <!-- Semester 4 -->
                <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-amber-600 text-white font-mono">SEMESTER 4 &bull; LV126E</span>
                    <span class="text-xs font-mono font-bold text-amber-600">36 Hours (&minus;30h Reduction)</span>
                  </div>
                  <h3 class="text-xs font-black text-amber-950">Professional English (AP) &amp; Pecha Kucha PFE</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Final stage polishing workplace presentation skills and career-launch communications:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Professional English Course (30 Hours):</strong> International workplace correspondence, cross-cultural technical leadership, and engineering negotiations.</li>
                    <li><strong>Pecha Kucha PFE Defense (6 Hours):</strong> 20 slides &times; 20 seconds fast-paced spoken defense format for the graduation end-of-studies project.</li>
                    <li><strong>Exit Qualification:</strong> Final verification of B2/C1 operational fluency before civil aviation workplace entry.</li>
                  </ul>
                  <div class="pt-2 border-t border-amber-100 text-[10.5px] font-mono font-bold text-amber-700">
                    36h Total (30h AP + 6h Pecha Kucha PFE)
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 4 Callout -->
            <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-900">
              <div>
                <strong class="font-bold text-amber-900">Specialization Strategy:</strong>
                Second-year technicians focus entirely on real-world operational survival: mastering legal regulatory frameworks in S3 and delivering high-stakes project defenses in S4.
              </div>
              <span class="font-mono font-bold text-white bg-amber-600 px-2.5 py-1 rounded-lg shrink-0">
                Total S3+S4 Reduction: &minus;60 Hours
              </span>
            </div>
          </div>

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 5: Digital Architecture (ONE COLOR: Digital Indigo) -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-4" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between hidden">
            <div class="space-y-3">
              <div class="border-b border-indigo-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 border border-indigo-200 font-mono">SLIDE 5 &bull; DIGITAL ECOSYSTEM</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Digital Architecture: <span class="text-indigo-600">SCORM Hubs, eCampus &amp; Portability</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">Offline-first SCORM 1.2 packages, universal ISO disk images, and live Moodle integration</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                  Zero Server Cost &bull; 100% Offline
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- Pillar 1: SCORM Packages -->
                <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-indigo-600 text-white font-mono">SCORM 1.2</span>
                    <span class="text-xs font-mono font-bold text-indigo-600">eCampus LMS</span>
                  </div>
                  <h3 class="text-xs font-black text-indigo-950">Self-Contained SCORM 1.2</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Complete offline delivery embedded directly within ENAC Moodle:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Zero CDN Dependencies:</strong> All fonts, audio clips, and scripts reside locally inside the zip.</li>
                    <li><strong>LMS Integration:</strong> Tracks session completion, mastery score, and suspend_data progress.</li>
                    <li><strong>In-Deck Admin Hub:</strong> Instant access to timetables, evaluation rotas, and rubrics.</li>
                  </ul>
                  <div class="pt-2 border-t border-indigo-100 text-[10.5px] font-mono font-bold text-indigo-700">
                    SCORM 1.2 Compliant &bull; Self-Contained
                  </div>
                </div>

                <!-- Pillar 2: Cross-Platform ISO -->
                <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-indigo-600 text-white font-mono">PORTABILITY</span>
                    <span class="text-xs font-mono font-bold text-indigo-600">ISO &bull; DMG</span>
                  </div>
                  <h3 class="text-xs font-black text-indigo-950">Cross-Platform ISO &amp; DMG</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Drag-and-drop offline installers for home computers and USB thumb drives:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Windows PC:</strong> Universal Hybrid ISO (Joliet + UDF) mounts instantly as a virtual drive.</li>
                    <li><strong>Apple Mac:</strong> Native 1-click DMG auto-opens clean Finder window.</li>
                    <li><strong>100% Write-Protected:</strong> Tamper-proof read-only images guarantee asset integrity.</li>
                  </ul>
                  <div class="pt-2 border-t border-indigo-100 text-[10.5px] font-mono font-bold text-indigo-700">
                    Zero Installation &bull; 1-Click Launch
                  </div>
                </div>

                <!-- Pillar 3: Continuous Save Engine -->
                <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-indigo-600 text-white font-mono">AUTO-SAVE</span>
                    <span class="text-xs font-mono font-bold text-indigo-600">Client-Side</span>
                  </div>
                  <h3 class="text-xs font-black text-indigo-950">Continuous Learner Saves</h3>
                  <p class="text-[11px] text-slate-600 leading-snug">Instant persistence of student notes, quiz scores, and speech practice:</p>
                  <ul class="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-tight">
                    <li><strong>Zero Data Loss:</strong> All student answers persist in browser localStorage across reboots.</li>
                    <li><strong>Native Audio Engine:</strong> Offline Web Speech synthesis for vocabulary phonetics.</li>
                    <li><strong>Privacy Architecture:</strong> Real student identities never touch Git or external servers.</li>
                  </ul>
                  <div class="pt-2 border-t border-indigo-100 text-[10.5px] font-mono font-bold text-indigo-700">
                    100% Private &bull; Zero Cloud Dependency
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 5 Callout -->
            <div class="p-3 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-indigo-900">
              <div>
                <strong class="font-bold text-indigo-900">Technical Resilience:</strong>
                The entire platform operates identically online within eCampus or completely offline on student laptops during travel or immersion.
              </div>
              <span class="font-mono font-bold text-white bg-indigo-600 px-2.5 py-1 rounded-lg shrink-0">
                Zero License Fees &bull; Instant Deployment
              </span>
            </div>
          </div>

          <!-- -------------------------------------------------------- -->
          <!-- SLIDE 6: Pedagogy & Sustainability (ONE COLOR: Emerald)  -->
          <!-- -------------------------------------------------------- -->
          <div id="refonte-slide-5" class="refonte-slide bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between hidden">
            <div class="space-y-3">
              <div class="border-b border-emerald-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 font-mono">SLIDE 6 &bull; PEDAGOGY &amp; SUSTAINABILITY</span>
                  <h2 class="text-base sm:text-xl font-black text-slate-900 mt-1">
                    Pedagogical Philosophy &amp; <span class="text-emerald-600">Environmental Impact</span>
                  </h2>
                  <p class="text-[12px] text-slate-500 mt-0.5">L'Approche par Comp&eacute;tences: Building Operational Confidence, Eliminating Exam Stress &amp; Saving Paper</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                  Zero-Print &bull; Competency-Based
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- Pedagogical Approach -->
                <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-emerald-600 text-white font-mono">PEDAGOGICAL ARCHITECTURE</span>
                    <span class="text-xs font-mono font-bold text-emerald-600">Competency-Based</span>
                  </div>
                  <h3 class="text-xs font-black text-emerald-950">L'Approche par Comp&eacute;tences</h3>
                  <div class="text-[11px] text-slate-700 space-y-1.5 leading-tight">
                    <p>&bull; <strong>Grounded in TSEEAC Feedback:</strong> Designed directly around operational feedback from civil aviation technicians who need spontaneous speaking confidence rather than theoretical grammar memorization.</p>
                    <p>&bull; <strong>Continuous Assessment (No Exams):</strong> Traditional high-stakes end-of-semester written exams are replaced with continuous formative evaluation (FE) in small groups or pairs.</p>
                    <p>&bull; <strong>Building Confidence:</strong> Low-anxiety environment encouraging active peer interaction, immediate constructive teacher feedback, and personal learning reflection.</p>
                    <p>&bull; <strong>Proactive Certification Success:</strong> Integrated preparation for the <strong>TOEIC</strong> (mandatory CEFR B2 benchmark) and the <strong>MTF</strong> (mandatory civil aviation graduation exam).</p>
                  </div>
                  <div class="pt-2 border-t border-emerald-100 text-[10.5px] font-mono font-bold text-emerald-700">
                    Continuous Formative Evaluation &bull; Zero Exam Stress
                  </div>
                </div>

                <!-- Environmental Benefits -->
                <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-black bg-emerald-600 text-white font-mono">ENVIRONMENTAL IMPACT</span>
                    <span class="text-xs font-mono font-bold text-emerald-600">Zero-Print Practice</span>
                  </div>
                  <h3 class="text-xs font-black text-emerald-950">Environmental Benefits of our Structure</h3>
                  <div class="text-[11px] text-slate-700 space-y-1.5 leading-tight">
                    <p>&bull; <strong>Strict No-Print Approach:</strong> Digital worksheets, auto-saving textareas, and on-screen rubrics completely eliminate physical photocopies (~2,000 pages of paper saved per promotion).</p>
                    <p>&bull; <strong>Printable PDFs Only on Demand:</strong> Clean 7-page A4 PDF worksheets are generated on demand via native PDF engines for students who genuinely require physical copies.</p>
                    <p>&bull; <strong>Ultra-Low Energy Computing:</strong> Client-side rendering requires no active server infrastructure or compute cycles, minimizing server-farm energy consumption.</p>
                    <p>&bull; <strong>Full DD&amp;RS Integration:</strong> Every module is linked to official French Higher Education ecological transition benchmarks.</p>
                  </div>
                  <div class="pt-2 border-t border-emerald-100 text-[10.5px] font-mono font-bold text-emerald-700">
                    ~2,000 Sheets Saved / Promo &bull; DD&amp;RS Compliant
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 6 Callout -->
            <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-emerald-900">
              <div>
                <strong class="font-bold text-emerald-900">Modern, Sustainable, Communicative English Education:</strong>
                A validated pedagogical platform empowering future ENAC technicians to communicate fluently, safely, and responsibly.
              </div>
              <span class="font-mono font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shrink-0">
                ENAC LH / LAN &bull; Phil PARRIS
              </span>
            </div>
          </div>

        </div>

        <!-- ======================================================== -->
        <!-- CONTINUOUS DOCUMENT VIEW (Hidden in Slide Mode)          -->
        <!-- ======================================================== -->
        <div id="refonte-doc-wrapper" class="space-y-3.5 hidden">
          <!-- Rendered dynamically by JavaScript -->
        </div>
      </div>
    </div>
  `;
}

function generateRefonteJS() {
  return `
    var __refonteSlide = 0;
    var __refonteTotalSlides = 6;
    var __refonteViewMode = 'slides';
    var __refonteSlideTopics = [
      "Rollout Timeline",
      "Semester 1 Architecture",
      "Semester 2 Streamlining",
      "Semesters 3 & 4 Specialization",
      "Digital Architecture",
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
        html += '<button onclick="window.goToRefonteSlide(' + i + ')" class="w-2 h-2 rounded-full transition-all cursor-pointer ' + (i === __refonteSlide ? 'bg-slate-900 scale-125' : 'bg-slate-300 hover:bg-slate-400') + '" title="Slide ' + (i + 1) + ': ' + __refonteSlideTopics[i] + '"></button>';
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

      const btnPrev = document.getElementById('refonte-btn-prev');
      if (btnPrev) btnPrev.disabled = (__refonteSlide === 0);

      const btnNext = document.getElementById('refonte-btn-next');
      if (btnNext) btnNext.disabled = (__refonteSlide === __refonteTotalSlides - 1);

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
      const docWrapper = document.getElementById('refonte-doc-wrapper');
      const btnSlides = document.getElementById('refonte-btn-mode-slides');
      const btnDoc = document.getElementById('refonte-btn-mode-doc');

      if (mode === 'doc') {
        if (slidesWrapper) slidesWrapper.classList.add('hidden');
        if (docWrapper) docWrapper.classList.remove('hidden');
        if (btnDoc) btnDoc.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold text-[11px]";
        if (btnSlides) btnSlides.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold text-[11px]";
      } else {
        if (slidesWrapper) slidesWrapper.classList.remove('hidden');
        if (docWrapper) docWrapper.classList.add('hidden');
        if (btnSlides) btnSlides.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs flex items-center gap-1.5 font-bold text-[11px]";
        if (btnDoc) btnDoc.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900 flex items-center gap-1.5 font-bold text-[11px]";
        window.updateRefonteSlideDisplay();
      }
    };

    function populateRefonteDocView() {
      const docWrapper = document.getElementById('refonte-doc-wrapper');
      if (!docWrapper) return;
      let docHTML = '';
      for (let i = 0; i < __refonteTotalSlides; i++) {
        const slide = document.getElementById('refonte-slide-' + i);
        if (slide) {
          docHTML += '<div class="refonte-doc-card border border-slate-200 bg-white rounded-2xl p-5 sm:p-6 shadow-sm space-y-3.5">' + slide.innerHTML + '</div>';
        }
      }
      docWrapper.innerHTML = docHTML;
    }

    window.toggleRefonteFullscreen = function() {
      const wrapper = document.getElementById('refonte-deck-wrapper');
      if (!wrapper) return;

      if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) {
          wrapper.requestFullscreen().catch(err => console.warn('Fullscreen error:', err));
        } else if (wrapper.webkitRequestFullscreen) {
          wrapper.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(err => console.warn('Exit fullscreen error:', err));
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    };

    function setupRefonteFullscreenListener() {
      document.addEventListener('fullscreenchange', function() {
        const wrapper = document.getElementById('refonte-deck-wrapper');
        const iconEnter = document.getElementById('refonte-fs-icon-enter');
        const iconExit = document.getElementById('refonte-fs-icon-exit');
        const label = document.getElementById('refonte-fullscreen-label');
        if (!wrapper) return;

        if (document.fullscreenElement === wrapper) {
          wrapper.classList.add('is-fullscreen');
          if (iconEnter) iconEnter.classList.add('hidden');
          if (iconExit) iconExit.classList.remove('hidden');
          if (label) label.textContent = 'Exit';
        } else {
          wrapper.classList.remove('is-fullscreen');
          if (iconEnter) iconEnter.classList.remove('hidden');
          if (iconExit) iconExit.classList.add('hidden');
          if (label) label.textContent = 'Fullscreen';
        }
      });

      // Keyboard navigation (Arrow keys, Space, Home, End, PageUp, PageDown, F)
      document.addEventListener('keydown', function(e) {
        const wrapper = document.getElementById('refonte-deck-wrapper');
        if (!wrapper) return;
        
        // Guard against typing in form inputs
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

        // Active if in fullscreen or visible on page/drawer
        const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
        const isVisible = isFs || (wrapper.offsetParent !== null || wrapper.offsetWidth > 0 || wrapper.offsetHeight > 0);
        if (!isVisible) return;

        if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
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
    }
  `;
}

// -------------------------------------------------------------
// Update 11-admin-hub.js
// -------------------------------------------------------------
const adminHubPath = path.join(rootDir, 'src', 'js', '11-admin-hub.js');
let adminHubContent = fs.readFileSync(adminHubPath, 'utf8');

const refonteHTML = generateRefonteHTML();
const refonteJS = generateRefonteJS();

const renderAdminRefonteTabRegex = /function renderAdminRefonteTab\(theme\) \{[\s\S]*?renderAdminRefonteTab;/;
const newRenderAdminRefonteTab = `function renderAdminRefonteTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      bodyEl.innerHTML = \`
        \${${JSON.stringify(refonteHTML)}}
      \`;

      if (window.initRefonteDeck) {
        window.initRefonteDeck();
      }
    }
    window.renderAdminRefonteTab = renderAdminRefonteTab;`;

if (renderAdminRefonteTabRegex.test(adminHubContent)) {
  adminHubContent = adminHubContent.replace(renderAdminRefonteTabRegex, newRenderAdminRefonteTab);
} else {
  console.error('Could not find renderAdminRefonteTab in 11-admin-hub.js');
}

// Cleanly replace JS controller in 11-admin-hub.js
const jsMarker = 'var __refonteSlide = 0;';
const jsIdx = adminHubContent.indexOf(jsMarker);
if (jsIdx !== -1) {
  adminHubContent = adminHubContent.substring(0, jsIdx) + refonteJS + '\n';
} else {
  adminHubContent = adminHubContent.replace(
    /window\.renderAdminRefonteTab = renderAdminRefonteTab;/,
    `window.renderAdminRefonteTab = renderAdminRefonteTab;\n\n    ${refonteJS}\n`
  );
}

fs.writeFileSync(adminHubPath, adminHubContent, 'utf8');
console.log('✓ Updated src/js/11-admin-hub.js with normal drawer width & 75% fullscreen portal canvas.');

// -------------------------------------------------------------
// Update admin.html (Standalone Admin Portal)
// -------------------------------------------------------------
const adminHtmlPath = path.join(rootDir, 'admin.html');
let adminHtmlContent = fs.readFileSync(adminHtmlPath, 'utf8');

// Replace section-refonte in admin.html
const sectionRefonteRegex = /<section id="section-refonte"[\s\S]*?<\/section>/;
const newSectionRefonte = `<section id="section-refonte" class="hidden space-y-6">
${refonteHTML}
      </section>`;

if (sectionRefonteRegex.test(adminHtmlContent)) {
  adminHtmlContent = adminHtmlContent.replace(sectionRefonteRegex, newSectionRefonte);
} else {
  console.error('Could not find section-refonte in admin.html');
}

// Cleanly replace JS controller in admin.html
const adminHtmlMarker = 'var __refonteSlide = 0;';
const adminIdx = adminHtmlContent.indexOf(adminHtmlMarker);
if (adminIdx !== -1) {
  adminHtmlContent = adminHtmlContent.substring(0, adminIdx) + refonteJS + '\n    </script>\n</body>\n</html>\n';
}

fs.writeFileSync(adminHtmlPath, adminHtmlContent, 'utf8');
console.log('✓ Updated admin.html with normal drawer width & 75% fullscreen portal canvas.');
