#!/usr/bin/env node
/**
 * scripts/generate-rich-aas2.js
 * Generates the rich 4-pillar HTML templates for Technical English (AAS) Module 2 (Sessions 1–4)
 * Strict subject adherence, deep aeronautical lexis, plain English, and zero minute timings (Rule 1.Q).
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outputPath = path.join(rootDir, 'src', 'js', '08-templates-aas2.js');

console.log('✈️  Generating rich AAS Module 2 templates (Sessions 1–4)...');

const fileContent = `/**
 * GSEA Semester 1 - Technical English (AAS/AT) Module 2 Templates
 * Aircraft and Aerodynamics (Sessions 1–4)
 * 4-Pillar Pedagogical Architecture:
 *   - Pillar 1: Interactive Aeronautical Lexis Bank (8 terms + syllable stress + matching challenge)
 *   - Pillar 2: Spoken Grammar Clinic (Rule + Error Correction + 4 Transformation Drills)
 *   - Pillar 3: Dynamic Communicative Simulation & Operational Dilemma
 *   - Pillar 4: Consolidation & Formative Evaluation 2 (FE2) Alignment
 * Strict Rule 1.Q Adherence: Zero minute breakdowns, pure pedagogical stage progression.
 * Strict Rule 1.I Adherence: Plain English instructions, zero academic jargon.
 * Author: Phil PARRIS (LH/LAN)
 */

/* ==========================================================================
   SESSION 1: Aerodynamics & Flight Principles
   ========================================================================== */
function renderAas2LessonContentTabSession1(sessionData, theme) {
  const bodyEl = document.getElementById('modal-body');
  if (!bodyEl) return;

  bodyEl.innerHTML = \`
    <div class="space-y-6 printable-lesson-container text-left">
      <!-- HERO HEADER CARD -->
      <div class="p-5 bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-2xl shadow-sm border border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30">
            AAS Module 2 • Session 1 • Flight Physics
          </span>
          <span class="text-xs text-sky-200/80 font-medium">Technical English (AT)</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">Aerodynamics &amp; Flight Principles</h3>
        <p class="text-xs sm:text-sm text-sky-100/90 leading-relaxed mt-1.5 max-w-3xl">
          Master the four fundamental forces of flight, explore airflow dynamics across an aerofoil, and simulate flight deck recovery during an aerodynamic stall buffet.
        </p>
      </div>

      <!-- PILLAR 1: Target Lexis & Pronunciation -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Aerodynamic Lexis &amp; Pronunciation</h4>
            <p class="text-[11px] text-slate-500">8 essential terms for explaining airflow, lift generation, and flight equilibrium.</p>
          </div>
        </div>

        <!-- 8-WORD VOCABULARY GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">1. Camber</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˈkæm.bər/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The asymmetry between the upper and lower surfaces of an aerofoil.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">2. Angle of Attack</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˌæŋ.ɡəl əv əˈtæk/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The acute angle between the wing chord line and the oncoming relative airflow.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">3. Boundary Layer</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˈbaʊn.dər.i ˈleɪ.ər/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The thin layer of slower-moving air immediately adjacent to the aircraft skin.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">4. Stagnation Point</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/stæɡˈneɪ.ʃən pɔɪnt/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The point on the leading edge where local airflow velocity drops to zero.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">5. Induced Drag</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ɪnˈdjuːst dræɡ/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Aerodynamic drag generated as an inevitable by-product of creating lift.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">6. Aerodynamic Stall</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˌeə.rəʊ.daɪˈnæm.ɪk stɔːl/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Sudden reduction in lift caused by airflow separation above the critical angle of attack.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">7. Center of Pressure</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˈsen.tər əv ˈpreʃ.ər/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The theoretical point along the chord where the total aerodynamic force acts.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">8. Aspect Ratio</span>
              <span class="text-[10px] font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">/ˈæs.pekt ˈreɪ.ʃi.əʊ/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The ratio of the wingspan to the mean wing chord (high ratio = lower induced drag).</p>
          </div>
        </div>

        <!-- INTERACTIVE MATCHING CHALLENGE -->
        <div class="p-3.5 bg-sky-50/60 border border-sky-200/70 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-sky-600"></span>
              <span class="text-xs font-bold text-sky-950 uppercase tracking-wide">Interactive Check: Term Definition Matching</span>
            </div>
            <button onclick="const d = document.getElementById('aas2-s1-vocab-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer">
              [Show / Hide Answers]
            </button>
          </div>
          <p class="text-xs text-slate-600">Match each numbered scenario below to the correct technical aerodynamic term:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>A.</strong> The wingtip vortices curl inward, creating resistance that increases at low speeds.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>B.</strong> When pitch exceeds 16°, turbulent air tears away from the upper skin, causing shuddering.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>C.</strong> Long, slender glider wings produce very low induced drag compared to short fighter jet wings.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>D.</strong> As speed accelerates, the single point where aerodynamic forces concentrate shifts forward.</div>
          </div>
          <div id="aas2-s1-vocab-answers" class="hidden p-3 bg-white border border-sky-300 rounded-lg text-xs space-y-1 text-sky-950">
            <div>• <strong>A:</strong> <strong>Induced Drag</strong> (by-product of lift generation and wingtip vortex pressure differential).</div>
            <div>• <strong>B:</strong> <strong>Aerodynamic Stall</strong> (boundary layer separation above the critical angle of attack).</div>
            <div>• <strong>C:</strong> <strong>Aspect Ratio</strong> (wingspan squared divided by wing area).</div>
            <div>• <strong>D:</strong> <strong>Center of Pressure</strong> (point of resultant aerodynamic force).</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 2: Spoken Grammar Clinic -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Technical Grammar Clinic • Cause &amp; Effect in Flight Physics</h4>
            <p class="text-[11px] text-slate-500">Connecting physical actions to aerodynamic reactions with precision verbs and linkers.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-200 text-rose-900">
              ❌ Operational Trap (Common Mistake)
            </span>
            <p class="text-rose-950 font-medium">"Due to the pilot increased the pitch, the wing was stalled."</p>
            <p class="text-rose-800 text-[11px] leading-relaxed">
              <strong>Why it is wrong:</strong> <em>'Due to'</em> is a prepositional phrase and must be followed by a noun phrase, never by a full subject + verb clause.
            </p>
          </div>

          <div class="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">
              ✅ Professional B2 Model
            </span>
            <p class="text-emerald-950 font-bold">"Due to an abrupt pitch increase, airflow separated, resulting in an immediate stall."</p>
            <p class="text-emerald-800 text-[11px] leading-relaxed">
              <strong>Why it works:</strong> Uses <em>'Due to' + noun phrase</em>, followed by the main clause and a clean participle result clause (<em>'resulting in...'</em>).
            </p>
          </div>
        </div>

        <!-- 4 TRANSFORMATION DRILLS -->
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Speaking Drills: Rephrase into Professional Technical English</span>
            <button onclick="const d = document.getElementById('aas2-s1-grammar-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer">
              [Show / Hide Solutions]
            </button>
          </div>
          <ol class="space-y-2 text-xs text-slate-700 list-decimal list-inside">
            <li>The flaps extend. Therefore, the wing camber increases and lift rises. (Use: <em>'results in'</em>)</li>
            <li>Ice formed on the leading edge. Because of that, the boundary layer separated early. (Use: <em>'Due to'</em>)</li>
            <li>The aircraft flies faster. Consequently, parasite drag increases rapidly. (Use: <em>'As airspeed accelerates...'</em>)</li>
            <li>The pilot pulled the yoke back too hard. This caused the angle of attack to exceed 16 degrees. (Use: <em>'...leading to...'</em>)</li>
          </ol>
          <div id="aas2-s1-grammar-answers" class="hidden p-3 bg-white border border-slate-300 rounded-lg text-xs space-y-1 text-slate-900">
            <div>• <strong>1:</strong> Flap extension increases wing camber, <strong>resulting in</strong> higher lift at lower airspeeds.</div>
            <div>• <strong>2:</strong> <strong>Due to</strong> ice accretion on the leading edge, the boundary layer separated prematurely.</div>
            <div>• <strong>3:</strong> <strong>As airspeed accelerates</strong>, parasite drag rises proportionally to the square of velocity.</div>
            <div>• <strong>4:</strong> The pilot pulled back abruptly on the yoke, <strong>leading to</strong> an angle of attack exceeding 16 degrees.</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 3: Communicative Simulation & Operational Dilemma -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Communicative Simulation • High-Altitude Stall Recovery</h4>
            <p class="text-[11px] text-slate-500">Pair role-play: Captain &amp; First Officer respond to an unexpected high-altitude buffet alert.</p>
          </div>
        </div>

        <!-- SCENARIO BRIEFING -->
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            Operational Scenario Briefing: Flight Level 370
          </div>
          <p class="text-xs text-amber-950 leading-relaxed">
            You are cruising at FL370 over the Alps in moderate turbulence. Due to mountain wave updrafts, airspeed decays by 18 knots while pitch increases. Suddenly, the control column begins buffeting violently, and the stall warning audio alarm sounds: <em>"STALL! STALL!"</em>.
          </p>
        </div>

        <!-- ACTION STEPS -->
        <div class="p-3 bg-white border border-sky-200 rounded-xl space-y-2">
          <span class="text-xs font-bold uppercase tracking-wide text-sky-950">Student Instructions &amp; Action Steps</span>
          <ol class="space-y-1.5 text-xs text-slate-700 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 1 (Role Assignment):</strong> In pairs, assign <strong>Pilot Flying (PF)</strong> and <strong>Pilot Monitoring (PM)</strong>.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 2 (Diagnostic):</strong> PF calls out the stall symptoms (buffet, pitch attitude, decay in airspeed). PM cross-checks flight instruments.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 3 (Execute Standard Operating Procedure):</strong> PF explains every recovery action out loud: nose-down pitch input, roll wings level, thrust adjustment. PM reads the Stall Recovery Checklist.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 4 (ATC Radio Report):</strong> Deliver a clear, professional spoken PAN-PAN or MAYDAY radio broadcast to Air Traffic Control explaining the emergency descent.</span>
            </li>
          </ol>
        </div>

        <!-- USEFUL PHRASES BOX -->
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Useful Spoken Phrases for Flight Deck Handover</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div>• <em>"I have control — disconnecting autopilot and autothrottle."</em></div>
            <div>• <em>"Nose down elevator — reducing angle of attack immediately."</em></div>
            <div>• <em>"Wings level — checking airspeed trend and vertical speed."</em></div>
            <div>• <em>"Airflow reattached — stall warning clear, advancing thrust smoothly."</em></div>
          </div>
        </div>

        <!-- COLLAPSIBLE TEACHER TIPS -->
        <details class="group rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 transition-all text-xs">
          <summary class="flex items-center justify-between font-bold text-purple-950 cursor-pointer select-none">
            <span class="flex items-center gap-2">
              <span>👨‍🏫 Teacher Tips &amp; Speaking Prompts</span>
            </span>
            <span class="text-[11px] text-purple-700 font-semibold group-open:rotate-180 transition-transform duration-200">▾</span>
          </summary>
          <div class="mt-2 pt-2 border-t border-purple-200/80 text-purple-900 leading-relaxed pl-4 space-y-1">
            <p>• Encourage students to act out the sequence with physical flight deck gestures (calling out instruments, moving imaginary throttles).</p>
            <p>• Make sure the Pilot Monitoring challenges any incorrect impulse (e.g., pulling up to stop losing altitude).</p>
            <p>• Highlight the pronunciation of <em>'camber'</em>, <em>'buffet'</em> (/ˈbʌf.ɪt/), and <em>'aileron'</em> (/ˈeɪ.lə.rɒn/).</p>
          </div>
        </details>
      </div>

      <!-- PILLAR 4: Consolidation & FE2 Alignment -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-2">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.accent};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 4: Consolidation &amp; Formative Evaluation 2 (FE2) Alignment</h4>
            <p class="text-[11px] text-slate-500">Pair peer-check on technical explanation fluency.</p>
          </div>
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          <strong>Speaking Challenge:</strong> In pairs, take turns explaining how an aircraft wing generates lift using at least <strong>3 target terms</strong> from Pillar 1 (e.g., <em>camber</em>, <em>angle of attack</em>, <em>boundary layer</em>) without looking at your notes. Your partner gives feedback on clarity and technical accuracy.
        </p>
        <div class="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between text-xs">
          <span class="text-sky-900 font-semibold">Formative Evaluation 2 Checklist: Can you clearly explain the difference between lift and induced drag?</span>
          <span class="px-2 py-0.5 rounded font-bold text-sky-800 bg-white border border-sky-200">FE2 Target</span>
        </div>
      </div>
    </div>
  \`;
}

/* ==========================================================================
   SESSION 2: Aircraft Anatomy: Structure & Systems
   ========================================================================== */
function renderAas2LessonContentTabSession2(sessionData, theme) {
  const bodyEl = document.getElementById('modal-body');
  if (!bodyEl) return;

  bodyEl.innerHTML = \`
    <div class="space-y-6 printable-lesson-container text-left">
      <!-- HERO HEADER CARD -->
      <div class="p-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl shadow-sm border border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            AAS Module 2 • Session 2 • Airframe &amp; Systems
          </span>
          <span class="text-xs text-indigo-200/80 font-medium">Technical English (AT)</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">Aircraft Anatomy: Structure &amp; Systems</h3>
        <p class="text-xs sm:text-sm text-indigo-100/90 leading-relaxed mt-1.5 max-w-3xl">
          Identify major airframe components and flight control surfaces, master spatial defect reporting, and conduct a ramp walkaround inspection with a go/no-go dispatch dilemma.
        </p>
      </div>

      <!-- PILLAR 1: Target Lexis & Pronunciation -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Airframe Structural Lexis &amp; Pronunciation</h4>
            <p class="text-[11px] text-slate-500">8 key airframe, wing, and tail components used during ramp walkarounds and defect logging.</p>
          </div>
        </div>

        <!-- 8-WORD VOCABULARY GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">1. Empennage</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˌɑːm.pəˈnɑːʒ/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The complete tail assembly of an aircraft, including the vertical and horizontal stabilizers.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">2. Radome</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈreɪ.dəʊm/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The weatherproof aerodynamic nose cone enclosing the forward weather radar antenna.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">3. Pitot-Static Probe</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈpiː.təʊ ˈstæt.ɪk/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Fuselage-mounted sensors measuring dynamic and static air pressure for flight instruments.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">4. Leading-Edge Slat</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈliː.dɪŋ edʒ slæt/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Moveable aerodynamic surfaces extending forward from the wing leading edge to delay stalls.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">5. Trailing-Edge Flap</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈtreɪ.lɪŋ edʒ flæp/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">High-lift devices mounted on the rear of the wing that increase camber and drag for landing.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">6. Aileron</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈeɪ.lə.rɒn/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Primary flight control surface hinged on the outer trailing edge to control aircraft roll.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">7. Static Discharger</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/ˈstæt.ɪk dɪsˈtʃɑː.dʒər/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Wicks mounted on wing and tail trailing edges to bleed static electricity into the atmosphere.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">8. Hydraulic Actuator</span>
              <span class="text-[10px] font-mono text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">/haɪˈdrɒl.ɪk ˈæk.tʃu.eɪ.tər/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">A mechanical cylinder driven by high-pressure fluid to move heavy flight control surfaces.</p>
          </div>
        </div>

        <!-- AIRFRAME LOCATION MATCHING -->
        <div class="p-3.5 bg-indigo-50/60 border border-indigo-200/70 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span class="text-xs font-bold text-indigo-950 uppercase tracking-wide">Interactive Check: Airframe Location Drill</span>
            </div>
            <button onclick="const d = document.getElementById('aas2-s2-vocab-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-indigo-700 hover:text-indigo-900 hover:underline cursor-pointer">
              [Show / Hide Answers]
            </button>
          </div>
          <p class="text-xs text-slate-600">Where are these components physically located on a commercial airliner?</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>A.</strong> Positioned at the very front tip of the fuselage, fabricated from composite fiberglass.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>B.</strong> Located on the outboard trailing edge of each main wing.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>C.</strong> Protruding along the lower forward fuselage beneath the cockpit side windows.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>D.</strong> Thin metallic pins extending rearward from wingtips and elevator trailing edges.</div>
          </div>
          <div id="aas2-s2-vocab-answers" class="hidden p-3 bg-white border border-indigo-300 rounded-lg text-xs space-y-1 text-indigo-950">
            <div>• <strong>A:</strong> <strong>Radome</strong> (houses weather radar; non-metallic to allow radar waves to pass).</div>
            <div>• <strong>B:</strong> <strong>Ailerons</strong> (outer trailing edge; moves up on one wing and down on the other).</div>
            <div>• <strong>C:</strong> <strong>Pitot-Static Probes</strong> (forward fuselage airflow capture).</div>
            <div>• <strong>D:</strong> <strong>Static Dischargers</strong> (trailing edge static dissipation wicks).</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 2: Spoken Grammar Clinic -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Technical Grammar Clinic • Spatial Descriptions &amp; Defect Reporting</h4>
            <p class="text-[11px] text-slate-500">Mastering precise spatial prepositions when logging airframe maintenance findings.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-200 text-rose-900">
              ❌ Operational Trap (Vague Description)
            </span>
            <p class="text-rose-950 font-medium">"There is a crack into the left wing near the engine."</p>
            <p class="text-rose-800 text-[11px] leading-relaxed">
              <strong>Why it is wrong:</strong> <em>'into'</em> indicates directional motion, not static position. <em>'Near the engine'</em> is too imprecise for aircraft maintenance logging.
            </p>
          </div>

          <div class="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">
              ✅ Professional B2 Model
            </span>
            <p class="text-emerald-950 font-bold">"A 4-centimeter hairline crack was detected on the underside of the left engine pylon, adjacent to the fuel line."</p>
            <p class="text-emerald-800 text-[11px] leading-relaxed">
              <strong>Why it works:</strong> Combines exact dimensions, precise location (<em>'on the underside of'</em>), and relative spatial landmarks (<em>'adjacent to'</em>).
            </p>
          </div>
        </div>

        <!-- 4 TRANSFORMATION DRILLS -->
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Speaking Drills: Transform into Precise Maintenance Defect Logs</span>
            <button onclick="const d = document.getElementById('aas2-s2-grammar-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-indigo-700 hover:text-indigo-900 hover:underline cursor-pointer">
              [Show / Hide Solutions]
            </button>
          </div>
          <ol class="space-y-2 text-xs text-slate-700 list-decimal list-inside">
            <li>Oil is coming out from the bottom of engine 1. (Use: <em>'seepage observed on the underside of'</em>)</li>
            <li>One static wick on the right wing tip is broken off. (Use: <em>'missing static discharger on the trailing edge of'</em>)</li>
            <li>A bird hit the nose cone and dented it. (Use: <em>'impact dent noted on the forward radome'</em>)</li>
            <li>The door seal is not flat with the fuselage skin. (Use: <em>'not flush with the surrounding airframe'</em>)</li>
          </ol>
          <div id="aas2-s2-grammar-answers" class="hidden p-3 bg-white border border-slate-300 rounded-lg text-xs space-y-1 text-slate-900">
            <div>• <strong>1:</strong> Hydraulic oil seepage was observed <strong>on the underside of</strong> the number one engine cowling.</div>
            <div>• <strong>2:</strong> A missing static discharger was noted <strong>on the outboard trailing edge of</strong> the starboard wing.</div>
            <div>• <strong>3:</strong> A 10-cm bird-strike impact dent was identified <strong>on the forward radome</strong> surface.</div>
            <div>• <strong>4:</strong> The forward passenger entry door seal is <strong>not flush with</strong> the surrounding fuselage skin.</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 3: Communicative Simulation & Operational Dilemma -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Communicative Simulation • Ramp Walkaround &amp; MEL Dispatch</h4>
            <p class="text-[11px] text-slate-500">Pair role-play: Captain &amp; Chief Line Engineer resolve a pre-departure maintenance defect dilemma.</p>
          </div>
        </div>

        <!-- SCENARIO BRIEFING -->
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            Operational Walkaround Dilemma: 35 Minutes to Departure
          </div>
          <p class="text-xs text-amber-950 leading-relaxed">
            During the exterior walkaround inspection at Paris-CDG, the Captain discovers two issues: a missing static discharger on the right winglet, and a slow hydraulic fluid drip under the left main landing gear actuator. Boarding is underway with 180 passengers. The airline Minimum Equipment List (MEL) allows flight with one missing static wick, but hydraulic leaks require strict pressure tests.
          </p>
        </div>

        <!-- ACTION STEPS -->
        <div class="p-3 bg-white border border-indigo-200 rounded-xl space-y-2">
          <span class="text-xs font-bold uppercase tracking-wide text-indigo-950">Student Instructions &amp; Action Steps</span>
          <ol class="space-y-1.5 text-xs text-slate-700 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 1 (Roles):</strong> Pair up as <strong>Captain</strong> (focused on safety and schedule) and <strong>Line Maintenance Engineer</strong> (focused on airworthiness standards).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 2 (Defect Debrief):</strong> The Captain explains the two discoveries using precise spatial vocabulary (<em>'underside'</em>, <em>'adjacent'</em>, <em>'trailing edge'</em>).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 3 (MEL Cross-Check &amp; Triage):</strong> The Engineer consults the Minimum Equipment List (MEL) and Maintenance Manual. Decide whether the aircraft can be released under an MEL deferral, or if departure must be delayed for a seal replacement.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 4 (Technical Logbook Sign-Off):</strong> Script and speak the official handover sentence: <em>"Aircraft released under MEL Item 23-60... with condition that..."</em> or <em>"Aircraft grounded pending actuator seal replacement."</em></span>
            </li>
          </ol>
        </div>

        <!-- USEFUL PHRASES BOX -->
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Useful Spoken Phrases for Ramp Handover</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div>• <em>"I noticed a steady drip coming from the actuator B-nut connection."</em></div>
            <div>• <em>"According to the MEL Chapter 32, this is a 'No-Go' item unless leak rate is within limits."</em></div>
            <div>• <em>"We need to wipe the fitting and pressurize the Yellow hydraulic system for 5 minutes."</em></div>
            <div>• <em>"I'm signing off the technical logbook with a deferred maintenance entry."</em></div>
          </div>
        </div>

        <!-- COLLAPSIBLE TEACHER TIPS -->
        <details class="group rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 transition-all text-xs">
          <summary class="flex items-center justify-between font-bold text-purple-950 cursor-pointer select-none">
            <span class="flex items-center gap-2">
              <span>👨‍🏫 Teacher Tips &amp; Speaking Prompts</span>
            </span>
            <span class="text-[11px] text-purple-700 font-semibold group-open:rotate-180 transition-transform duration-200">▾</span>
          </summary>
          <div class="mt-2 pt-2 border-t border-purple-200/80 text-purple-900 leading-relaxed pl-4 space-y-1">
            <p>• Encourage students to act out the professional tension between on-time departure pressure and safety compliance.</p>
            <p>• Challenge pairs: <em>"What if weather en route includes severe thunderstorms? Does the missing static wick matter now?"</em></p>
            <p>• Check pronunciation of <em>'actuator'</em> (/ˈæk.tʃu.eɪ.tər/) and <em>'empennage'</em> (/ˌɑːm.pəˈnɑːʒ/).</p>
          </div>
        </details>
      </div>

      <!-- PILLAR 4: Consolidation & FE2 Alignment -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-2">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.accent};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 4: Consolidation &amp; Formative Evaluation 2 (FE2) Alignment</h4>
            <p class="text-[11px] text-slate-500">Pair peer-check on structural defect reporting precision.</p>
          </div>
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          <strong>Speaking Challenge:</strong> In pairs, one student selects an airframe component from Pillar 1 and describes an imaginary damage (dent, leak, crack, missing fastener) using spatial prepositions. The partner must identify the component and log it in standard aviation English.
        </p>
        <div class="p-3 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
          <span class="text-indigo-900 font-semibold">Formative Evaluation 2 Checklist: Can you describe damage on an aircraft using correct spatial prepositions?</span>
          <span class="px-2 py-0.5 rounded font-bold text-indigo-800 bg-white border border-indigo-200">FE2 Target</span>
        </div>
      </div>
    </div>
  \`;
}

/* ==========================================================================
   SESSION 3: Commercial Aircraft & Airlines
   ========================================================================== */
function renderAas2LessonContentTabSession3(sessionData, theme) {
  const bodyEl = document.getElementById('modal-body');
  if (!bodyEl) return;

  bodyEl.innerHTML = \`
    <div class="space-y-6 printable-lesson-container text-left">
      <!-- HERO HEADER CARD -->
      <div class="p-5 bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-2xl shadow-sm border border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            AAS Module 2 • Session 3 • Commercial Fleets
          </span>
          <span class="text-xs text-emerald-200/80 font-medium">Technical English (AT)</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">Commercial Aircraft &amp; Airlines</h3>
        <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mt-1.5 max-w-3xl">
          Classify commercial jetliners by payload-range envelopes, analyze seat-mile economics, and debate a €2 Billion airline fleet selection committee simulation.
        </p>
      </div>

      <!-- PILLAR 1: Target Lexis & Pronunciation -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Commercial Fleet Lexis &amp; Pronunciation</h4>
            <p class="text-[11px] text-slate-500">8 specialized industry terms for aircraft categories, economics, and operational range.</p>
          </div>
        </div>

        <!-- 8-WORD VOCABULARY GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">1. Narrowbody</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈnær.əʊˌbɒd.i/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">A single-aisle commercial aircraft carrying typically 100 to 240 passengers (e.g., A320, 737).</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">2. Widebody</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈwaɪdˌbɒd.i/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">A twin-aisle airliner designed for medium- to long-haul routes (e.g., A350, 787, 777).</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">3. Payload-Range Envelope</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈpeɪ.ləʊd reɪndʒ/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The operational trade-off curve between maximum cargo/passenger weight and flight distance.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">4. Seat-Mile Cost (CASM)</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/siːt maɪl kɒst/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Cost per Available Seat-Mile: the foundational metric of airline operating efficiency.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">5. Turboprop</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈtɜː.bəʊ.prɒp/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">A gas-turbine engine driving an external propeller, optimal for short regional hops (e.g., ATR 72).</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">6. Freighter Conversion</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈfreɪ.tər kənˈvɜː.ʃən/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Modifying retired passenger airliners with reinforced main-deck floors and cargo loading doors.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">7. Dispatch Reliability</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/dɪˈspætʃ rɪˌlaɪ.əˈbɪl.ə.ti/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Percentage of scheduled flights departing without maintenance-related delays or cancellations.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">8. ETOPS Certification</span>
              <span class="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">/ˈiː.tɒps ˌsɜː.tɪ.fɪˈkeɪ.ʃən/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Extended-range Twin-engine Operational Performance Standards: rules for flying over oceans.</p>
          </div>
        </div>

        <!-- FLEET CATEGORIZATION CHALLENGE -->
        <div class="p-3.5 bg-emerald-50/60 border border-emerald-200/70 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span class="text-xs font-bold text-emerald-950 uppercase tracking-wide">Interactive Check: Fleet Classification Drill</span>
            </div>
            <button onclick="const d = document.getElementById('aas2-s3-vocab-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer">
              [Show / Hide Answers]
            </button>
          </div>
          <p class="text-xs text-slate-600">Match each commercial aircraft model to its operational category:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>A. Airbus A350-900:</strong> 325 seats, 15,000 km range, twin-aisle carbon composite.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>B. ATR 72-600:</strong> 72 seats, 1,400 km range, unpaved runway capability.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>C. Boeing 737 MAX 8:</strong> 178 seats, single-aisle, 6,570 km range.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>D. Airbus A321P2F:</strong> Retired passenger airframe fitted with a main-deck cargo door.</div>
          </div>
          <div id="aas2-s3-vocab-answers" class="hidden p-3 bg-white border border-emerald-300 rounded-lg text-xs space-y-1 text-emerald-950">
            <div>• <strong>A:</strong> <strong>Widebody Long-Haul</strong> (high-capacity, high ETOPS rating).</div>
            <div>• <strong>B:</strong> <strong>Regional Turboprop</strong> (low CASM on short sectors under 500 km).</div>
            <div>• <strong>C:</strong> <strong>Narrowbody Medium-Haul</strong> (backbone of short/medium haul fleets).</div>
            <div>• <strong>D:</strong> <strong>Freighter Conversion</strong> (Passenger-to-Freighter repurposing).</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 2: Spoken Grammar Clinic -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Technical Grammar Clinic • Comparative &amp; Superlative Data Analysis</h4>
            <p class="text-[11px] text-slate-500">Comparing aircraft performance metrics with modifiers: substantially, marginally, significantly.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-200 text-rose-900">
              ❌ Operational Trap (Weak Comparison)
            </span>
            <p class="text-rose-950 font-medium">"The A321 is more better for fuel than old 757."</p>
            <p class="text-rose-800 text-[11px] leading-relaxed">
              <strong>Why it is wrong:</strong> Double comparative (<em>'more better'</em>) is grammatically incorrect and lacks technical precision.
            </p>
          </div>

          <div class="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">
              ✅ Professional B2 Model
            </span>
            <p class="text-emerald-950 font-bold">"The A321XLR burns substantially less fuel per seat-mile than legacy Boeing 757s on transatlantic secondary routes."</p>
            <p class="text-emerald-800 text-[11px] leading-relaxed">
              <strong>Why it works:</strong> Combines degree modifier (<em>'substantially'</em>) with precise unit of measurement (<em>'per seat-mile'</em>) and route context.
            </p>
          </div>
        </div>

        <!-- 4 TRANSFORMATION DRILLS -->
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Speaking Drills: Upgrade to Professional Fleet Comparisons</span>
            <button onclick="const d = document.getElementById('aas2-s3-grammar-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer">
              [Show / Hide Solutions]
            </button>
          </div>
          <ol class="space-y-2 text-xs text-slate-700 list-decimal list-inside">
            <li>The A350 has longer range than the 787-8. (Use: <em>'offers a significantly greater operational range'</em>)</li>
            <li>The 737 MAX burns a little less fuel than the 737 NG. (Use: <em>'marginally lower fuel consumption'</em>)</li>
            <li>Turboprops are much cheaper to operate on 300-km flights than regional jets. (Use: <em>'far more cost-effective'</em>)</li>
            <li>Fleet A and Fleet B have almost the same dispatch reliability (99.6% vs 99.5%). (Use: <em>'virtually identical'</em>)</li>
          </ol>
          <div id="aas2-s3-grammar-answers" class="hidden p-3 bg-white border border-slate-300 rounded-lg text-xs space-y-1 text-slate-900">
            <div>• <strong>1:</strong> The Airbus A350-900 <strong>offers a significantly greater operational range</strong> than the Boeing 787-8.</div>
            <div>• <strong>2:</strong> The new variant delivers <strong>marginally lower fuel consumption</strong> compared to previous generation airframes.</div>
            <div>• <strong>3:</strong> Turboprops are <strong>far more cost-effective</strong> on regional sectors under 300 km than comparable regional jets.</div>
            <div>• <strong>4:</strong> Both fleets maintain a <strong>virtually identical</strong> dispatch reliability rate of over 99.5%.</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 3: Communicative Simulation & Operational Dilemma -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Communicative Simulation • €2B Fleet Selection Committee</h4>
            <p class="text-[11px] text-slate-500">Boardroom simulation: Evaluate and select 20 new narrowbody airliners for a growing European carrier.</p>
          </div>
        </div>

        <!-- SCENARIO BRIEFING -->
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            Airline Boardroom Dilemma: €2,000,000,000 Fleet Order
          </div>
          <p class="text-xs text-amber-950 leading-relaxed">
            Your airline operates an all-Airbus A320 fleet of 45 aircraft. To expand into transatlantic secondary cities (e.g., Toulouse to Boston), the board has budgeted €2 Billion for 20 new aircraft. The committee is deadlocked between the <strong>Airbus A321XLR</strong> (higher range, pilot cross-crew qualification) and the <strong>Boeing 737 MAX 10</strong> (cheaper purchase price, aggressive discount, but requires establishing a new Boeing pilot and maintenance type-rating pool).
          </p>
        </div>

        <!-- ACTION STEPS -->
        <div class="p-3 bg-white border border-emerald-200 rounded-xl space-y-2">
          <span class="text-xs font-bold uppercase tracking-wide text-emerald-950">Student Instructions &amp; Action Steps</span>
          <ol class="space-y-1.5 text-xs text-slate-700 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 1 (Role Allocation):</strong> Form groups of 3 or 4: <strong>Chief Commercial Officer (CCO)</strong>, <strong>Chief Financial Officer (CFO)</strong>, <strong>Head of Flight Operations</strong>, and <strong>Director of Maintenance</strong>.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 2 (Data Defense):</strong> Each executive advocates for their priorities: CCO wants range and payload; CFO wants lowest acquisition cost; Flight Ops wants common pilot type-ratings; Maintenance wants single-supplier spare parts.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 3 (Boardroom Debate):</strong> Use comparative grammar modifiers (<em>'substantially lower'</em>, <em>'far more efficient'</em>) to debate the trade-offs.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 4 (Final Recommendation):</strong> Present a spoken 2-minute executive summary to the CEO announcing the final fleet decision.</span>
            </li>
          </ol>
        </div>

        <!-- USEFUL PHRASES BOX -->
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Useful Spoken Phrases for Boardroom Negotiation</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div>• <em>"Introducing a dual fleet will substantially increase our pilot training overhead."</em></div>
            <div>• <em>"However, the manufacturer is offering a 40% discount on airframe list price."</em></div>
            <div>• <em>"From a network perspective, the extra 700 nautical miles of range unlocks 6 new routes."</em></div>
            <div>• <em>"We recommend securing 15 firm orders with 5 purchase options."</em></div>
          </div>
        </div>

        <!-- COLLAPSIBLE TEACHER TIPS -->
        <details class="group rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 transition-all text-xs">
          <summary class="flex items-center justify-between font-bold text-purple-950 cursor-pointer select-none">
            <span class="flex items-center gap-2">
              <span>👨‍🏫 Teacher Tips &amp; Speaking Prompts</span>
            </span>
            <span class="text-[11px] text-purple-700 font-semibold group-open:rotate-180 transition-transform duration-200">▾</span>
          </summary>
          <div class="mt-2 pt-2 border-t border-purple-200/80 text-purple-900 leading-relaxed pl-4 space-y-1">
            <p>• Push the CFO role to emphasize financial risk while Flight Ops pushes pilot fatigue and licensing.</p>
            <p>• Encourage students to invent realistic airline names and route maps.</p>
            <p>• Check pronunciation of <em>'narrowbody'</em> and <em>'turboprop'</em>.</p>
          </div>
        </details>
      </div>

      <!-- PILLAR 4: Consolidation & FE2 Alignment -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-2">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.accent};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 4: Consolidation &amp; Formative Evaluation 2 (FE2) Alignment</h4>
            <p class="text-[11px] text-slate-500">Pair peer-check on comparative fleet presentation skills.</p>
          </div>
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          <strong>Speaking Challenge:</strong> In pairs, deliver a spoken 90-second comparison between two aircraft models of your choice. Use at least 2 degree modifiers (<em>'substantially'</em>, <em>'marginally'</em>) and one economic term (<em>'CASM'</em>, <em>'dispatch reliability'</em>).
        </p>
        <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
          <span class="text-emerald-900 font-semibold">Formative Evaluation 2 Checklist: Can you defend an operational aircraft choice using comparative metrics?</span>
          <span class="px-2 py-0.5 rounded font-bold text-emerald-800 bg-white border border-emerald-200">FE2 Target</span>
        </div>
      </div>
    </div>
  \`;
}

/* ==========================================================================
   SESSION 4: Significant Aviation Accidents & Aircraft Types
   ========================================================================== */
function renderAas2LessonContentTabSession4(sessionData, theme) {
  const bodyEl = document.getElementById('modal-body');
  if (!bodyEl) return;

  bodyEl.innerHTML = \`
    <div class="space-y-6 printable-lesson-container text-left">
      <!-- HERO HEADER CARD -->
      <div class="p-5 bg-gradient-to-r from-slate-900 to-rose-950 text-white rounded-2xl shadow-sm border border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30">
            AAS Module 2 • Session 4 • Investigation &amp; Safety
          </span>
          <span class="text-xs text-rose-200/80 font-medium">Technical English (AT)</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">Significant Aviation Accidents &amp; Aircraft Types</h3>
        <p class="text-xs sm:text-sm text-rose-100/90 leading-relaxed mt-1.5 max-w-3xl">
          Examine flight recorder data and causal chains in landmark aviation accidents, deploy narrative past tenses to establish timelines, and simulate a formal Accident Investigation Board hearing.
        </p>
      </div>

      <!-- PILLAR 1: Target Lexis & Pronunciation -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Accident Investigation Lexis &amp; Pronunciation</h4>
            <p class="text-[11px] text-slate-500">8 official technical terms used in accident investigation reports (BEA, NTSB, AAIB).</p>
          </div>
        </div>

        <!-- 8-WORD VOCABULARY GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">1. Cockpit Voice Recorder (CVR)</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/ˈkɒk.pɪt vɔɪs/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Crash-survivable audio recorder capturing crew speech, radio transmissions, and ambient sounds.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">2. Flight Data Recorder (FDR)</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/flaɪt ˈdeɪ.tə/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Electronic device logging hundreds of technical parameters: airspeed, altitude, pitch, thrust.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">3. Pitot Icing</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/ˈpiː.təʊ ˈaɪ.sɪŋ/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Blockage of airspeed probes by ice crystals, leading to conflicting or erroneous cockpit readings.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">4. Spatial Disorientation</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/dɪsˌɔː.ri.enˈteɪ.ʃən/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The inability of a pilot to correctly perceive aircraft attitude, altitude, or airspeed relative to Earth.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">5. CFIT</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/ˌsiː.ef.aɪˈtiː/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Controlled Flight Into Terrain: an airworthy aircraft flown unintentionally into ground or water.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">6. Causal Chain</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/ˈkɔː.zəl tʃeɪn/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">The linked sequence of mechanical, human, and organizational failures leading to an accident.</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">7. Safety Recommendation</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/ˌrek.ə.menˈdeɪ.ʃən/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">Formal advisory issued by investigators to prevent recurrence (never intended to assign blame).</p>
          </div>

          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-black text-xs text-slate-900">8. Airworthiness Directive</span>
              <span class="text-[10px] font-mono text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">/dɪˈrek.tɪv/</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-snug">A legally binding regulation issued by aviation authorities requiring mandatory aircraft modifications.</p>
          </div>
        </div>

        <!-- CAUSAL CHAIN MATCHING -->
        <div class="p-3.5 bg-rose-50/60 border border-rose-200/70 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span>
              <span class="text-xs font-bold text-rose-950 uppercase tracking-wide">Interactive Check: Accident Factor Identification</span>
            </div>
            <button onclick="const d = document.getElementById('aas2-s4-vocab-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-rose-700 hover:text-rose-900 hover:underline cursor-pointer">
              [Show / Hide Answers]
            </button>
          </div>
          <p class="text-xs text-slate-600">Match each investigative summary to its official classification:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>A.</strong> The captain believed the aircraft was climbing while it was actually descending into water.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>B.</strong> Both pilots followed a faulty glide slope signal on approach in fog into a mountain ridge.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>C.</strong> FAA mandates an immediate inspection of all engine fan blades within 20 flight cycles.</div>
            <div class="p-2 bg-white rounded-lg border border-slate-200"><strong>D.</strong> High-altitude convective ice blocked the speed sensors, triggering autopilot disconnect.</div>
          </div>
          <div id="aas2-s4-vocab-answers" class="hidden p-3 bg-white border border-rose-300 rounded-lg text-xs space-y-1 text-rose-950">
            <div>• <strong>A:</strong> <strong>Spatial Disorientation</strong> (vestibular illusion in night flying).</div>
            <div>• <strong>B:</strong> <strong>CFIT (Controlled Flight Into Terrain)</strong> (loss of situational awareness).</div>
            <div>• <strong>C:</strong> <strong>Airworthiness Directive (AD)</strong> (legally mandatory regulatory action).</div>
            <div>• <strong>D:</strong> <strong>Pitot Icing</strong> (sensor obstruction leading to unreliable airspeed).</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 2: Spoken Grammar Clinic -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Technical Grammar Clinic • Past Narrative Tenses in Accident Chronologies</h4>
            <p class="text-[11px] text-slate-500">Contrasting Past Simple, Past Continuous, and Past Perfect to establish chronological sequences.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-200 text-rose-900">
              ❌ Operational Trap (Tense Confusion)
            </span>
            <p class="text-rose-950 font-medium">"When the alarms sounded, the pilots were already deciding to go-around."</p>
            <p class="text-rose-800 text-[11px] leading-relaxed">
              <strong>Why it is wrong:</strong> Past Continuous (<em>'were deciding'</em>) incorrectly describes a completed prior decision. Use Past Perfect (<em>'had decided'</em>) for an action completed before another past event.
            </p>
          </div>

          <div class="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">
              ✅ Professional B2 Model
            </span>
            <p class="text-emerald-950 font-bold">"While the aircraft was cruising at FL350, the pitot probes iced over; the crew had not yet identified the discrepancy when the autopilot disconnected."</p>
            <p class="text-emerald-800 text-[11px] leading-relaxed">
              <strong>Why it works:</strong> Flawlessly interweaves background continuous state, sudden event, and prior condition using Past Perfect.
            </p>
          </div>
        </div>

        <!-- 4 TRANSFORMATION DRILLS -->
        <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Speaking Drills: Build Chronological Accident Timelines</span>
            <button onclick="const d = document.getElementById('aas2-s4-grammar-answers'); d.classList.toggle('hidden');" class="text-[11px] font-bold text-rose-700 hover:text-rose-900 hover:underline cursor-pointer">
              [Show / Hide Solutions]
            </button>
          </div>
          <ol class="space-y-2 text-xs text-slate-700 list-decimal list-inside">
            <li>The plane flew in storms. Then the speed sensors stopped working. (Use: <em>'While... was flying..., the sensors iced over.'</em>)</li>
            <li>First, the warning alarm sounded. Then the pilot pushed the control column forward. (Use: <em>'had already sounded before...'</em>)</li>
            <li>Maintenance forgot to remove the pitot cover before flight. This caused wrong readings during takeoff. (Use: <em>'...because ground crew had failed to...'</em>)</li>
            <li>The captain tried to recover the stall. At that exact time, the aircraft entered cloud. (Use: <em>'As the captain was attempting...'</em>)</li>
          </ol>
          <div id="aas2-s4-grammar-answers" class="hidden p-3 bg-white border border-slate-300 rounded-lg text-xs space-y-1 text-slate-900">
            <div>• <strong>1:</strong> <strong>While the aircraft was flying through</strong> convective turbulence, the speed sensors iced over.</div>
            <div>• <strong>2:</strong> The stall warning <strong>had already sounded</strong> before the pilot pushed the control column forward.</div>
            <div>• <strong>3:</strong> The instruments displayed erroneous data because the ground crew <strong>had failed to remove</strong> the pitot probe covers.</div>
            <div>• <strong>4:</strong> <strong>As the captain was attempting</strong> to recover from the stall, the aircraft entered thick cloud cover.</div>
          </div>
        </div>
      </div>

      <!-- PILLAR 3: Communicative Simulation & Operational Dilemma -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.primary};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Communicative Simulation • Accident Investigation Board Hearing</h4>
            <p class="text-[11px] text-slate-500">Public inquiry simulation: Present investigative findings and cross-examine flight operations on landmark safety lessons.</p>
          </div>
        </div>

        <!-- SCENARIO BRIEFING -->
        <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            Investigation Board Hearing: Landmark Case Review
          </div>
          <p class="text-xs text-amber-950 leading-relaxed">
            The national Air Accident Investigation Board has convened a special hearing into a landmark high-altitude upset event involving sensor icing, contradictory cockpit warnings, and crew response. The inquiry panel must determine the chronological sequence, assess crew resource management (CRM), and formulate binding safety recommendations.
          </p>
        </div>

        <!-- ACTION STEPS -->
        <div class="p-3 bg-white border border-rose-200 rounded-xl space-y-2">
          <span class="text-xs font-bold uppercase tracking-wide text-rose-950">Student Instructions &amp; Action Steps</span>
          <ol class="space-y-1.5 text-xs text-slate-700 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 1 (Role Allocation):</strong> Form groups of 4: <strong>Chief Technical Investigator</strong>, <strong>Aircraft Manufacturer Representative</strong>, <strong>Airline Chief Pilot</strong>, and <strong>Aviation Authority Regulator</strong>.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 2 (Chronology Presentation):</strong> The Chief Investigator opens the hearing, presenting the FDR timeline using accurate narrative past tenses (<em>'While the aircraft was cruising...', 'The crew had not noticed...'</em>).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 3 (Cross-Examination):</strong> The Regulator questions the Manufacturer about pitot tube heating design, and questions the Airline about simulator high-altitude stall training.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
              <span><strong>Step 4 (Safety Directive):</strong> The panel agrees on two official Safety Recommendations to prevent future occurrences.</span>
            </li>
          </ol>
        </div>

        <!-- USEFUL PHRASES BOX -->
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
          <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Useful Spoken Phrases for Investigation Hearing</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div>• <em>"According to FDR telemetry, the aircraft had entered the storm system 4 minutes earlier."</em></div>
            <div>• <em>"Why had the airline not mandated high-altitude manual handling simulator sessions?"</em></div>
            <div>• <em>"The evidence confirms that the crew were acting in accordance with standard checklists at the time."</em></div>
            <div>• <em>"We recommend an immediate Airworthiness Directive requiring probe replacement."</em></div>
          </div>
        </div>

        <!-- COLLAPSIBLE TEACHER TIPS -->
        <details class="group rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 transition-all text-xs">
          <summary class="flex items-center justify-between font-bold text-purple-950 cursor-pointer select-none">
            <span class="flex items-center gap-2">
              <span>👨‍🏫 Teacher Tips &amp; Speaking Prompts</span>
            </span>
            <span class="text-[11px] text-purple-700 font-semibold group-open:rotate-180 transition-transform duration-200">▾</span>
          </summary>
          <div class="mt-2 pt-2 border-t border-purple-200/80 text-purple-900 leading-relaxed pl-4 space-y-1">
            <p>• Remind students that accident investigation never seeks to blame individuals; its purpose is purely preventing future accidents.</p>
            <p>• Encourage students to cross-examine each other assertively but professionally.</p>
            <p>• Check pronunciation of <em>'causal'</em> (/ˈkɔː.zəl/) and <em>'disorientation'</em> (/dɪsˌɔː.ri.enˈteɪ.ʃən/).</p>
          </div>
        </details>
      </div>

      <!-- PILLAR 4: Consolidation & FE2 Full Rehearsal -->
      <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-2">
          <span class="w-2.5 h-5 rounded-xs" style="background-color: \${theme.accent};"></span>
          <div>
            <h4 class="font-bold text-slate-900 text-sm">Pillar 4: Formative Evaluation 2 (FE2) Full Rehearsal &amp; Sign-Off</h4>
            <p class="text-[11px] text-slate-500">Official preparation dry run for Session 5 Formative Evaluation.</p>
          </div>
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          <strong>FE2 Presentation Rehearsal:</strong> In pairs, deliver your 2-minute technical briefing to your partner. One student presents while the partner grades them against the 4 official evaluation criteria: <strong>Fluency &amp; Interaction</strong>, <strong>Technical Lexical Range</strong>, <strong>Grammatical Accuracy</strong>, and <strong>Pronunciation &amp; Stress</strong>.
        </p>
        <div class="p-3 bg-rose-50 rounded-xl border border-rose-100 flex items-center justify-between text-xs">
          <span class="text-rose-900 font-semibold">Formative Evaluation 2 Checklist: Have you verified your evaluation pairing, topic outline, and visual aid?</span>
          <span class="px-2 py-0.5 rounded font-bold text-rose-800 bg-white border border-rose-200">FE2 Ready</span>
        </div>
      </div>
    </div>
  \`;
}
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('✓ Successfully wrote ' + outputPath + ' (' + fileContent.split('\n').length + ' lines).');

