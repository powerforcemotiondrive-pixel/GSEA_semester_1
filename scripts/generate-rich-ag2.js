/**
 * Generator script for src/js/06-templates-ag2.js
 * Implements the 4-Pillar Pedagogical Architecture across AG Module 2 (Sessions 1-4):
 *  - Pillar 1: Interactive Vocabulary & Phrase Builder (with Check Answers toggle)
 *  - Pillar 2: Concrete Grammar Clinic (Formula, Trap vs B2, 4-sentence drill with Show Solutions toggle)
 *  - Pillar 3: Core Communicative Archetype with Step-by-Step Instructions, Sentence Starters & Deliverables
 *  - Pillar 4: Consolidation, Peer Feedback & FE2 Alignment
 */

const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'js', '06-templates-ag2.js');

const code = `    /* ==========================================================================
       GENERAL ENGLISH (AG) • MODULE 2 LESSON CONTENT TEMPLATES (SESSIONS 1 TO 4)
       - 4-Pillar Pedagogical Architecture (Vocab, Grammar, Scenario, Debrief)
       - Interactive Check-Answer & Show-Solution Toggles
       - Step-by-Step Numbered Student Instructions & Teacher Notes
       ========================================================================== */

    // --- HELPER FUNCTION: Toggle Visibility for Answer Reveals ---
    function toggleAgAnswer(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('hidden');
    }

    // --- SESSION 1: Extreme Weather & Urban Climate Resilience (Crisis Workshop) ---
    function renderAg2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const dossier = content.dossier || {};
      const threats = dossier.threats || [];
      const taskforce = content.taskforce || {};
      const roles = taskforce.roles || [];
      const injects = taskforce.injects || [];
      const press = content.pressConference || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Extreme Weather & Urban Climate Resilience</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m2card1.jpg'}" alt="Extreme Weather" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-rose-300 uppercase tracking-wider">\${hero.badge || 'AG Module 2 • Session 1 • Crisis Workshop'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Extreme Weather & Urban Climate Resilience</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Atmospheric Rivers, Convective Heat Domes & Civic Emergency Taskforce Simulation</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">4-Pillar Crisis Workshop</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Vocabulary • Grammar • Simulation • Debrief)</span>
              </div>
            </div>
          </div>

          <!-- ================================================================== -->
          <!-- PILLAR 1: Severe Weather & Disaster Vulnerability Lexis (25 mins)  -->
          <!-- ================================================================== -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 font-black text-xs flex items-center justify-center border border-rose-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Severe Weather & Disaster Vulnerability Lexis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 essential operational terms and complete the interactive threat-matching challenge.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Essential Vocabulary & Syllable Stress:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">in-un-DA-tion (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">Overwhelming flooding of land or subway tunnels by rising storm water.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">con-VEC-tive storm (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">Violent localized storm driven by rapid rising of warm, moist air.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">at-mos-PHER-ic river (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">A narrow airborne corridor of concentrated water vapor carrying torrential rain.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">re-TEN-tion basin (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">An engineered artificial reservoir built to catch and slowly release flood runoff.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">cas-CAD-ing failure (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">A chain reaction where failure in one system (e.g. power) causes failures in others (water, hospitals).</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">VUL-ner-a-bil-i-ty threshold (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">The exact tipping point at which infrastructure can no longer absorb environmental shock.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">con-TAIN-ment dike (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">An embankment built around chemical depots to prevent toxic runoff into rivers.</div>
                </div>
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="font-bold text-slate-900">UR-ban heat dome (n.)</div>
                  <div class="text-[11px] text-slate-600 mt-0.5">High-pressure atmospheric ridge that traps stifling 40°C+ heat over metropolitan cities.</div>
                </div>
              </div>
            </div>

            <!-- Interactive Matching Challenge -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Challenge: Match Term to Scenario</span>
                <button type="button" onclick="toggleAgAnswer('m2s1-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-rose-700 border border-rose-300 rounded hover:bg-rose-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. When an electrical substation fails, cutting power to water filtration pumps and hospital backup circuits, the city suffers a <strong>[_______________]</strong>.</p>
                <p>2. A narrow corridor of tropical moisture dumped 120 mm of rain over the valley within 2 hours, confirming the arrival of an <strong>[_______________]</strong>.</p>
                <p>3. To prevent industrial chemicals from entering the drinking reservoir, engineers reinforced the concrete <strong>[_______________]</strong>.</p>
                <p>4. Subway platform flooding occurs whenever rainfall rates breach the drainage system's <strong>[_______________]</strong>.</p>
              </div>
              <div id="m2s1-vocab-answers" class="hidden p-3 bg-white border border-rose-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-rose-800 block">✓ Model Answers:</span>
                <div>1. <strong>cascading failure</strong></div>
                <div>2. <strong>atmospheric river</strong></div>
                <div>3. <strong>containment dike</strong></div>
                <div>4. <strong>vulnerability threshold</strong></div>
              </div>
            </div>
          </div>

          <!-- ================================================================== -->
          <!-- PILLAR 2: Grammar Clinic • Conditionals in Emergency Risk (25 mins)-->
          <!-- ================================================================== -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Conditionals in Emergency Risk (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 1st (Real) and 2nd (Hypothetical) conditionals to express acute risks and preventive safeguards.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Grammar Rules & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1.5">
                <span class="font-bold text-rose-900 uppercase text-[10px] tracking-wider block">1st Conditional (Real Operational Risk)</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">If + Present Simple, will / must / should + Verb</p>
                <p class="text-slate-700">❌ <em>Trap: "If the water will rise, we must to close the subway."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "If floodwaters breach Station République, the transit director must halt all trains immediately."</em></p>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">2nd Conditional (Hypothetical Safeguard / What-If)</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">If + Past Simple, would / could + Verb</p>
                <p class="text-slate-700">❌ <em>Trap: "If the city had more budget, it will build a dike."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "If we reinforced the hospital rooftop generators, intensive care would withstand a Category 2 gust."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Transformation Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Transformation Drill: Construct Risk Conditionals</span>
                <button type="button" onclick="toggleAgAnswer('m2s1-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p><strong>Prompt 1 (1st Cond):</strong> [Rainfall exceeds 90mm / retention ponds overflow / Widebody flights must divert].<br>
                <em>Draft your conditional:</em> "If rainfall ____________________________________________________________________"</p>
                <p><strong>Prompt 2 (1st Cond):</strong> [Cellular networks experience congestion / emergency SMS broadcast fails].<br>
                <em>Draft your conditional:</em> "Unless priority bandwidth ____________________________________________________"</p>
                <p><strong>Prompt 3 (2nd Cond):</strong> [The city install automated flood gates / subway platforms stay dry].<br>
                <em>Draft your conditional:</em> "If the transit authority ______________________________________________________"</p>
                <p><strong>Prompt 4 (2nd Cond):</strong> [Chemical storage depot breach containment dikes / reservoir face contamination].<br>
                <em>Draft your conditional:</em> "If the chemical containment dikes ______________________________________________"</p>
              </div>
              <div id="m2s1-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"If rainfall exceeds 90 mm, retention ponds will overflow and widebody flights must divert."</em></div>
                <div>2. <em>"Unless priority bandwidth is assigned to emergency services, cellular SMS broadcasts will fail."</em></div>
                <div>3. <em>"If the transit authority installed automated flood gates, subway platforms would remain completely dry."</em></div>
                <div>4. <em>"If the chemical containment dikes ruptured, the municipal reservoir would face toxic leachate contamination."</em></div>
              </div>
            </div>
          </div>

          <!-- ================================================================== -->
          <!-- PILLAR 3: Emergency Taskforce Simulation & Press Briefing (45 mins)-->
          <!-- ================================================================== -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Civic Emergency Taskforce Simulation (45 mins)</h4>
                  <p class="text-xs text-slate-500">Adopt departmental roles, rank 6 acute threats, resolve live injects, and lead a press conference.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Simulation</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Review the Red Alert Dossier below. Form pairs or trios and assign one departmental role each (*Chief of Staff, Transit Director, Hospital Lead, Communications Officer*).</li>
                <li><strong>Step 2 (15 mins):</strong> Negotiate the Threat Grid. You have budget to protect only THREE sectors immediately. Defend your sector using required 1st and 2nd conditionals.</li>
                <li><strong>Step 3 (10 mins):</strong> The teacher activates one Dynamic Crisis Inject. Formulate a 3-point emergency response within 3 minutes.</li>
                <li><strong>Step 4 (10 mins):</strong> Deliver a live 3-minute Press Briefing to the class (journalists) and answer 2 unscripted questions.</li>
              </ol>
            </div>

            <!-- Red Alert Dossier Overview -->
            <div class="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="font-black text-rose-900 text-xs sm:text-sm">\${dossier.incidentTitle || 'Convective Supercell Storm Hesper'}</h5>
                <span class="text-[11px] font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">\${dossier.alertLevel || 'RED ALERT'}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${dossier.summary}</p>
            </div>

            <!-- Threat Grid (6 Threats) -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">6 Acute Threats Under Review (Select Top 3 in Pairs):</span>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                \${threats.map(t => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-rose-300 transition-colors">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[11px] flex items-center justify-center">\${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">\${t.sector}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs mb-1">\${t.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${t.desc}</p>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Roles Grid & Sentence Starters -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Departmental Roles & Useful Phrases:</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${roles.map(r => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs">\${r.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">\${r.badge}</span>
                    </div>
                    <p class="text-[11px] text-slate-600"><strong>Mission:</strong> \${r.mission}</p>
                    <div class="p-2 bg-white rounded border border-slate-200">
                      <span class="text-[10px] font-bold uppercase text-indigo-700 block mb-0.5">Useful Phrasing Starters:</span>
                      <ul class="text-[11px] text-slate-700 space-y-0.5">
                        \${(r.keyPhrases || []).map(p => \`<li>• <em>"\${p}"</em></li>\`).join('')}
                      </ul>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Press Conference Questions -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <span class="text-xs font-bold text-emerald-950 uppercase tracking-wide block">Live Press Briefing: Investigative Journalist Questions (Classmate Q&A)</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                \${(press.reporterQuestions || []).map((q, idx) => \`
                  <div class="p-2.5 bg-white border border-emerald-100 rounded-lg italic text-slate-800">
                    Q\${idx + 1}: "\${q}"
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Completed 3-point Emergency Directive signed by all taskforce members.</span>
              <span class="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Pacing:</strong> Keep Pillar 1 vocabulary brisk (15 mins max). Encourage students to pronounce 'con-VEC-tive' and 'in-un-DA-tion' aloud.</p>
                <p>• <strong>Grammar Guard:</strong> During Step 2 of the simulation, circulate and check that students use <em>"If + Present, will"</em> instead of <em>"If + will"</em>.</p>
                <p>• <strong>Inject Trigger:</strong> Introduce Inject #1 at T+15m to force the Health Lead and Transit Director into direct negotiation over power reserves.</p>
              </div>
            </details>
          </div>

          <!-- ================================================================== -->
          <!-- PILLAR 4: Consolidation, Peer Feedback & FE2 Prep (25 mins)        -->
          <!-- ================================================================== -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Consolidation & Spoken Peer Feedback (25 mins):</span>
              <span class="ml-1">Rate your partner on (1) Fluency under pressure, (2) Correct conditional structures, and (3) Deployment of disaster lexis. Confirm your chosen FE2 presentation topic.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 1 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 2: The 15-Minute Resilient City Blueprint (Design Sprint) ---
    function renderAg2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const showcase = content.urbanShowcase || {};
      const photoA = showcase.photoA || {};
      const photoB = showcase.photoB || {};
      const protocol = showcase.spokenProtocol || [];
      const sprint = content.redesignSprint || {};
      const categories = sprint.categories || [];
      const stakeholders = sprint.stakeholders || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">The 15-Minute Resilient City Blueprint</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m2card2.jpg'}" alt="Urban Blueprint" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-sky-300 uppercase tracking-wider">\${hero.badge || 'AG Module 2 • Session 2 • Design Sprint'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">The 15-Minute Resilient City Blueprint</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Side-by-Side Spatial Photo Analysis, Relative Clauses & €50M Collaborative Urban Redesign</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">4-Pillar Design Sprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Visual Analysis • Budgeting • Council Pitch)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Urban Architecture & Spatial Vocabulary (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 font-black text-xs flex items-center justify-center border border-sky-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Urban Architecture & Spatial Vocabulary (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 core spatial terms and examine contrasting urban design typologies.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">per-me-a-ble paving (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Porous paving stone allowing rainwater to soak directly into natural aquifers.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">ac-tive fron-tage (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Ground-floor shopfronts, doors, and café windows that face and animate the street.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">su-per-block (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A 3x3 block urban grid where interior streets are pedestrianized and cars restricted to 10 km/h.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">BIO-swale (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A gently sloped vegetated ditch designed to absorb and naturally filter stormwater runoff.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">ur-ban heat is-land (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Metropolitan area significantly warmer than rural surroundings due to asphalt and concrete.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">mi-cro-mo-BIL-i-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Small, lightweight transport options (bicycles, cargo bikes, e-scooters) for short trips.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">re-claimed pub-lic realm (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Former vehicular roadway converted into social parks, play areas, and tree canopies.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">tran-sit-o-ri-en-ted (adj.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Urban development planned within a 5-minute walk of high-frequency train or tram stations.</div>
              </div>
            </div>

            <!-- Interactive Vocabulary Gap-Fill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Complete Urban Design Statements</span>
                <button type="button" onclick="toggleAgAnswer('m2s2-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-sky-700 border border-sky-300 rounded hover:bg-sky-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. By replacing asphalt gutters with a vegetated <strong>[_______________]</strong>, stormwater is absorbed before flooding occurs.</p>
                <p>2. Barcelona's <strong>[_______________]</strong> model redirects arterial traffic around exterior streets, liberating 70% of interior roads for people.</p>
                <p>3. Installing light-colored <strong>[_______________]</strong> instead of black tar lowers surface summer heat by 5°C and eliminates the urban heat island effect.</p>
                <p>4. Ground-floor storefronts and outdoor restaurant dining create <strong>[_______________]</strong>, making streets feel safer and more vibrant.</p>
              </div>
              <div id="m2s2-vocab-answers" class="hidden p-3 bg-white border border-sky-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-sky-800 block">✓ Model Answers:</span>
                <div>1. <strong>bioswale</strong></div>
                <div>2. <strong>superblock</strong></div>
                <div>3. <strong>permeable paving</strong></div>
                <div>4. <strong>active frontage</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Spatial Prepositions & Relative Clauses (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Spatial Prepositions & Relative Clauses (25 mins)</h4>
                  <p class="text-xs text-slate-500">Construct non-defining relative clauses with spatial prepositions ('flanked by', 'adjacent to', 'bisected by').</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formula & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1.5">
                <span class="font-bold text-sky-900 uppercase text-[10px] tracking-wider block">Rule: Non-Defining Relative Clauses (Extra Detail)</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">Noun, which + Verb Phrase, Main Verb...</p>
                <p class="text-slate-700">❌ <em>Trap: "The central boulevard that was built in 1960 it has too many cars."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "The central boulevard, which was originally a six-lane arterial road, is now bisected by a green light-rail corridor."</em></p>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">Spatial Prepositions for Urban Architecture</span>
                <ul class="text-[11px] text-slate-700 space-y-1">
                  <li>• <strong>Flanked by:</strong> Having something on both lateral sides (<em>"flanked by deciduous plane trees"</em>).</li>
                  <li>• <strong>Bisected by:</strong> Divided into two distinct parts (<em>"bisected by an elevated concrete flyover"</em>).</li>
                  <li>• <strong>Adjacent to:</strong> Directly next to or touching (<em>"adjacent to the subterranean rail hub"</em>).</li>
                </ul>
              </div>
            </div>

            <!-- Interactive 4-Sentence Combining Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Combining Drill: Combine Planning Statements</span>
                <button type="button" onclick="toggleAgAnswer('m2s2-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p><strong>Drill 1:</strong> [The former surface parking lot absorbs intense solar heat. It has been replaced by a shaded public square.]<br>
                <em>Combine with 'which':</em> "The former surface parking lot, __________________________________________________"</p>
                <p><strong>Drill 2:</strong> [The central tram corridor operates at 99% punctuality. It is flanked by flowering bioswales.]<br>
                <em>Combine with 'which':</em> "The central tram corridor, ____________________________________________________"</p>
                <p><strong>Drill 3:</strong> [The residential quarter is bisected by a high-speed ring road. It suffers from acute noise pollution.]<br>
                <em>Combine with 'which':</em> "The residential quarter, ____________________________________________________"</p>
                <p><strong>Drill 4:</strong> [The subterranean mobility station offers 500 secure bike docks. It is located adjacent to the metro terminus.]<br>
                <em>Combine with 'which':</em> "The subterranean mobility station, ____________________________________________"</p>
              </div>
              <div id="m2s2-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"The former surface parking lot, which previously absorbed intense solar heat, has been replaced by a shaded public square."</em></div>
                <div>2. <em>"The central tram corridor, which is flanked by flowering bioswales, operates at 99% punctuality."</em></div>
                <div>3. <em>"The residential quarter, which is bisected by a high-speed ring road, suffers from acute acoustic noise pollution."</em></div>
                <div>4. <em>"The subterranean mobility station, which is located adjacent to the metro terminus, offers 500 secure bike docks."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Option 1 Visual Analysis & €50M Design Sprint (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Visual Photo Analysis & €50M Collaborative Design Sprint (45 mins)</h4>
                  <p class="text-xs text-slate-500">Examine comparative photos, allocate the €50M budget across 5 categories, and counter stakeholder resistance.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Design Sprint</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Click the interactive spatial hotspots below both photos. Complete the 3-stage spoken observation protocol with your partner.</li>
                <li><strong>Step 2 (20 mins):</strong> You have €50,000,000 to regenerate 'The Boulevard Carnot Mixed Zone'. Allocate funding across the 5 categories in the budget table.</li>
                <li><strong>Step 3 (15 mins):</strong> Review the 4 Stakeholder Objections. Script clear spoken counter-arguments using relative clauses and spatial prepositions.</li>
              </ol>
            </div>

            <!-- Option 1 Side-by-Side Photo Analysis -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <!-- Photo A: Car Sprawl -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="relative">
                  <img src="\${photoA.image || 'images/urban_car_sprawl.jpg'}" alt="Car Sprawl" class="w-full h-52 sm:h-60 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
                  <div class="absolute top-3 left-3 bg-rose-900/90 text-white text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
                    Model A: Car-Centric Sprawl
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm mb-1">\${photoA.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-3">\${photoA.caption}</p>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Interactive Hotspots (Click to inspect):</span>
                    <div class="flex flex-wrap gap-1.5 mb-2">
                      \${(photoA.hotspots || []).map(h => \`
                        <button type="button" onclick="toggleAgAnswer('hotspot-a-\${h.id}')" class="px-2 py-1 text-[11px] font-bold bg-white text-rose-800 border border-rose-200 hover:bg-rose-50 rounded cursor-pointer">
                          📍 \${h.label}
                        </button>
                      \`).join('')}
                    </div>
                    <div class="space-y-1">
                      \${(photoA.hotspots || []).map(h => \`
                        <div id="hotspot-a-\${h.id}" class="hidden p-2 bg-rose-50 border border-rose-200 rounded text-[11px] text-rose-950">
                          <strong>\${h.label}:</strong> \${h.desc}
                        </div>
                      \`).join('')}
                    </div>
                  </div>
                  <div class="p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-600">
                    <strong>Vocabulary:</strong> <em>asphalt heat island, vehicular congestion, pedestrian vacuum, flyover ramp.</em>
                  </div>
                </div>
              </div>

              <!-- Photo B: Superblock -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="relative">
                  <img src="\${photoB.image || 'images/urban_superblock.jpg'}" alt="Superblock" class="w-full h-52 sm:h-60 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
                  <div class="absolute top-3 left-3 bg-emerald-900/90 text-white text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
                    Model B: European Superblock
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm mb-1">\${photoB.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-3">\${photoB.caption}</p>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Interactive Hotspots (Click to inspect):</span>
                    <div class="flex flex-wrap gap-1.5 mb-2">
                      \${(photoB.hotspots || []).map(h => \`
                        <button type="button" onclick="toggleAgAnswer('hotspot-b-\${h.id}')" class="px-2 py-1 text-[11px] font-bold bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 rounded cursor-pointer">
                          📍 \${h.label}
                        </button>
                      \`).join('')}
                    </div>
                    <div class="space-y-1">
                      \${(photoB.hotspots || []).map(h => \`
                        <div id="hotspot-b-\${h.id}" class="hidden p-2 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-950">
                          <strong>\${h.label}:</strong> \${h.desc}
                        </div>
                      \`).join('')}
                    </div>
                  </div>
                  <div class="p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-600">
                    <strong>Vocabulary:</strong> <em>reclaimed public space, protected cycle track, permeable stone pavers, active frontage.</em>
                  </div>
                </div>
              </div>
            </div>

            <!-- €50M Budget Allocation Worksheet -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wide block">€50,000,000 Budget Allocation Breakdown (Select & Justify in Pairs):</span>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                \${categories.map((c, idx) => \`
                  <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-slate-500 text-[10px]">OPTION 0\${idx + 1}</span>
                      <span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">\${c.costPerUnit}</span>
                    </div>
                    <h6 class="font-bold text-slate-900">\${c.name}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${c.desc}</p>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Stakeholder Resistance Clinic -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Stakeholder Pushback (Prepare Spoken Rebuttals):</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                \${stakeholders.map(s => \`
                  <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                    <span class="font-bold text-amber-900 uppercase text-[10px] tracking-wider block">\${s.role}</span>
                    <p class="italic text-amber-950">"\${s.objection}"</p>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Completed €50M Budget Worksheet + 3-Minute Spoken Blueprint Pitch.</span>
              <span class="font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Visual Hotspots:</strong> Have students take turns clicking the hotspots and reading the definitions aloud before discussing the Mayor's Dilemma.</p>
                <p>• <strong>Budget Constraint:</strong> Strictly enforce the €50M limit. If a team funds €30M in active mobility, they cannot fund full housing without making compromises.</p>
                <p>• <strong>Pitch Guard:</strong> Ensure each duo uses at least two non-defining relative clauses during their council pitch.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Spoken City Council Pitch & Vote (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Spoken Council Pitch & Peer Vote (25 mins):</span>
              <span class="ml-1">Each planning duo presents a 3-minute pitch to the City Council. The class votes on the winning design based on ecological resilience and economic fairness.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 2 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 3: Environmental Ethics & The Public Inquiry (Debate Lab) ---
    function renderAg2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const devils = content.devilsAdvocate || [];
      const dossier = content.dossier || {};
      const witnesses = dossier.witnesses || [];
      const clinic = content.argumentClinic || {};
      const rules = clinic.rules || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Environmental Ethics & The Public Inquiry Hearing</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m2card3.jpg'}" alt="Inquiry Hearing" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">\${hero.badge || 'AG Module 2 • Session 3 • Debate Lab'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Environmental Ethics & The Public Inquiry Hearing</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Val-d'Or Rail Bypass Controversy, Diplomatic Hedging & Oxford-Style Tribunal Hearing</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">4-Pillar Debate Lab</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Inquiry Lexis • Hedging Clinic • Cross-Exam Hearing)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Environmental Ethics & Public Inquiry Vocabulary (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Environmental Ethics & Inquiry Vocabulary (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 formal legal and ecological debate terms.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">em-PIR-i-cal ev-i-dence (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Objective, measurable data verified by observation rather than theoretical speculation.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">peat-land AQ-ui-fer (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A subterranean geological formation of organic water-logged peat storing millions of tons of carbon.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">car-bon se-ques-TRA-tion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The long-term natural capture and biological storage of atmospheric carbon in peat and wetlands.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">pro-por-tion-AL-i-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The legal balance between the severity of an infrastructure action and the environmental harm caused.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">u-ni-LAT-er-al mor-a-TO-ri-um (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A legally binding temporary freeze or halt placed on construction works by an authority.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">mit-i-GA-tion hi-er-ar-chy (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The required environmental sequence: first avoid harm, then minimize, and finally offset.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">so-cio-ec-o-NOM-ic fall-out (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The adverse economic consequences (e.g. job losses, transit congestion) suffered by regional towns.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">ir-re-VERS-i-ble deg-ra-DA-tion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Permanent destruction of an ecosystem that cannot be regenerated within human generations.</div>
              </div>
            </div>

            <!-- Collocation Matching Challenge -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Collocation Challenge: Match Verb to Noun</span>
                <button type="button" onclick="toggleAgAnswer('m2s3-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-amber-700 border border-amber-300 rounded hover:bg-amber-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. <strong>[sever / impose / sequester / present]</strong> empirical evidence to support the claim.</p>
                <p>2. <strong>[sever / impose / sequester / present]</strong> a unilateral moratorium on heavy earthworks.</p>
                <p>3. <strong>[sever / impose / sequester / present]</strong> 450,000 tons of carbon beneath natural peat bogs.</p>
                <p>4. <strong>[sever / impose / sequester / present]</strong> subterranean aquifers with an elevated railway embankment.</p>
              </div>
              <div id="m2s3-vocab-answers" class="hidden p-3 bg-white border border-amber-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-amber-800 block">✓ Model Answers:</span>
                <div>1. <strong>present</strong> empirical evidence</div>
                <div>2. <strong>impose</strong> a unilateral moratorium</div>
                <div>3. <strong>sequester</strong> 450,000 tons of carbon</div>
                <div>4. <strong>sever</strong> subterranean aquifers</div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Cautious Language (Hedging) & Concessions (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Cautious Language (Hedging) & Concessions (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master formal hedging patterns and diplomatic concessions for adversarial public hearings.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5">
                <span class="font-bold text-amber-900 uppercase text-[10px] tracking-wider block">1. The Partial Concession Formula</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">While I concede that [Point A is true], empirical data demonstrates [Point B].</p>
                <p class="text-slate-700">❌ <em>Trap: "You are wrong. Trains are bad for nature."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "While I concede that rail transit cuts highway emissions, bisecting a protected wetland is completely disproportionate."</em></p>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">2. Challenging False Equivalence</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">With respect, that conflates [Minor Issue X] with [Irreversible Catastrophe Y].</p>
                <p class="text-slate-700">❌ <em>Trap: "You only care about trees, not workers."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "With respect, that conflates short-term delivery delays with multi-generational ecosystem collapse."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Hedging Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Rewrite Drill: Convert Blunt Statements into Diplomatic B2 Rebuttals</span>
                <button type="button" onclick="toggleAgAnswer('m2s3-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p><strong>Blunt 1:</strong> "Highway traffic is terrible, but we cannot destroy this forest."<br>
                <em>Rewrite with 'While I concede':</em> "While I concede that highway traffic ____________________________________"</p>
                <p><strong>Blunt 2:</strong> "Digging a tunnel is too expensive and stupid."<br>
                <em>Rewrite with 'Even if we accept':</em> "Even if we accept that tunneling costs ________________________________"</p>
                <p><strong>Blunt 3:</strong> "You are comparing small business profits with clean drinking water!"<br>
                <em>Rewrite with 'With respect, that conflates':</em> "With respect, that conflates ____________________________"</p>
                <p><strong>Blunt 4:</strong> "Stop building surface rails. Upgrade existing lines instead."<br>
                <em>Rewrite with 'Rather than... a far more sustainable alternative would be':</em> "Rather than ________________"</p>
              </div>
              <div id="m2s3-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"While I concede that highway congestion is severe, the environmental cost of destroying this forest is irreversible."</em></div>
                <div>2. <em>"Even if we accept that deep tunneling inflates capital costs, it remains the only viable ecological compromise."</em></div>
                <div>3. <em>"With respect, that conflates short-term commercial delivery margins with the permanent protection of the municipal drinking reservoir."</em></div>
                <div>4. <em>"Rather than paving over protected peatlands, a far more sustainable alternative would be modernizing the existing northern rail corridor."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Oxford-Style Public Inquiry Hearing (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: The Val-d'Or Rail Bypass Public Inquiry Hearing (45 mins)</h4>
                  <p class="text-xs text-slate-500">Examine 4 witness depositions, execute targeted cross-examinations, and deliver the tribunal verdict.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Public Hearing</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Review the Val-d'Or Rail Bypass dossier. Form pairs and assign one of the 4 sworn witness roles (*Biologist, Chamber of Commerce, Commuter Union, Judicial Arbiter*).</li>
                <li><strong>Step 2 (15 mins):</strong> Prepare your 2-minute sworn testimony. Note your witness's explicit 'Cross-Examination Flaw' and prepare your defense using hedging formulas.</li>
                <li><strong>Step 3 (15 mins):</strong> Convene the Tribunal: Proponents and opponents cross-examine each deponent (2 minutes per witness).</li>
                <li><strong>Step 4 (5 mins):</strong> The Judicial Commissioners deliberate and deliver a majority ruling on surface rail vs tunnel vs moratorium.</li>
              </ol>
            </div>

            <!-- Controversy Summary -->
            <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs space-y-1">
              <span class="font-bold text-indigo-950 uppercase text-[10px] tracking-wider block">Official Inquiry Controversy:</span>
              <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${dossier.projectName}</h6>
              <p class="text-slate-700 leading-relaxed">\${dossier.controversy}</p>
            </div>

            <!-- Witness Cards Grid -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Sworn Witness Deponents (Adopt a Role in Pairs):</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                \${witnesses.map(w => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900">\${w.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">\${w.stance}</span>
                    </div>
                    <p class="text-[11px] text-slate-700 italic">"\${w.testimony}"</p>
                    <div class="p-2 bg-rose-50 border border-rose-200 rounded text-[11px] text-rose-950">
                      <strong>Cross-Exam Vulnerability:</strong> \${w.vulnerability}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Completed Written Public Inquiry Verdict signed by Commissioners.</span>
              <span class="font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Formality Cue:</strong> Encourage students to maintain formal courtroom decorum ("Mr. Commissioner", "With respect to the witness").</p>
                <p>• <strong>Cross-Exam Focus:</strong> Push the cross-examiners to target the specific vulnerabilities listed on the cards (e.g. €850M tunnel cost vs €120M annual trucking delays).</p>
                <p>• <strong>Debrief:</strong> Praise students who successfully deployed the 'Partial Concession' formula during live rebuttals.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Argumentative Debrief & Peer Review (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Argumentative Debrief & Peer Review (25 mins):</span>
              <span class="ml-1">Rate your opponent on (1) Diplomatic tone, (2) Evidence-based argumentation, and (3) Use of hedging expressions. Check progress for FE2 in Session 5.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 3 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 4: Airport Biodiversity & Ecological Coexistence (Interactive Stations) ---
    function renderAg2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const paradox = content.meadowParadox || {};
      const stations = content.stations || [];
      const treaty = content.treatyNegotiation || {};
      const parties = treaty.parties || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Airport Biodiversity & Ecological Coexistence</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m2card4.jpg'}" alt="Airport Biodiversity" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-teal-300 uppercase tracking-wider">\${hero.badge || 'AG Module 2 • Session 4 • Interactive Stations'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Airport Biodiversity & Ecological Coexistence</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">The Meadow Paradox, 3 Eco-Engineering Stations & Tri-Party Perimeter Treaty Tournament</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">4-Pillar Stations & Treaty</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Eco-Tech Lexis • Regulatory Modals • Treaty Ratification)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Airfield Eco-Engineering Vocabulary (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-black text-xs flex items-center justify-center border border-teal-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Airfield Eco-Engineering Vocabulary (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 specialized airfield ecology and safety terms.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">mea-dow PAR-a-dox (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Airports accidentally becoming endangered nature sanctuaries due to perimeter fences and absence of hunting.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">bird-strike mit-i-ga-tion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Tactics designed to prevent birds from colliding with aircraft engines during takeoff and landing.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">a-vi-an 3D ra-dar (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Specialized scanning radar tracking bird flock altitudes and flight trajectories around runway approaches.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">long-grass POL-i-cy (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Maintaining airfield grass at exactly 20–30 cm so flocking birds cannot spot ground predators or rodents.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">pro-py-lene GLY-col (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Chemical anti-icing fluid sprayed on wings in winter; creates oxygen-depleting runoff if untreated.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">con-STRUC-ted reed bed (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Engineered gravel wetlands where marsh reeds naturally break down aircraft de-icing chemicals.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">an-ti-glare pho-to-vol-TA-ic (adj.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Solar panels treated with anti-reflective coating to prevent hazardous optical glare to pilots on final approach.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">bi-o-di-VER-si-ty cor-ri-dor (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A continuous strip of natural vegetation allowing wildlife to migrate safely between fragmented reserves.</div>
              </div>
            </div>

            <!-- Interactive Vocabulary Gap-Fill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Complete Eco-Engineering Statements</span>
                <button type="button" onclick="toggleAgAnswer('m2s4-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-teal-700 border border-teal-300 rounded hover:bg-teal-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. By maintaining perimeter grass at 25 cm under the <strong>[_______________]</strong>, flocking starlings avoid runway buffers.</p>
                <p>2. Winter de-icing runoff containing <strong>[_______________]</strong> is routed through gravel reed beds to neutralize chemical toxicity.</p>
                <p>3. Airfield safety teams use <strong>[_______________]</strong> to detect migrating geese flocks 15 km before they cross the approach path.</p>
                <p>4. Installing <strong>[_______________]</strong> solar arrays produces clean power without blinding pilots during landing flare.</p>
              </div>
              <div id="m2s4-vocab-answers" class="hidden p-3 bg-white border border-teal-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-teal-800 block">✓ Model Answers:</span>
                <div>1. <strong>long-grass policy</strong></div>
                <div>2. <strong>propylene glycol</strong></div>
                <div>3. <strong>avian 3D radar</strong></div>
                <div>4. <strong>anti-glare photovoltaic</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Modals of Obligation & Necessity (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Modals of Obligation, Prohibition & Necessity (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master graded modal verbs ('are mandated to', 'is strictly prohibited from', 'should') in aviation regulations.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-teal-50/70 border border-teal-200 rounded-xl space-y-1.5">
                <span class="font-bold text-teal-900 uppercase text-[10px] tracking-wider block">Graded Regulatory Modals</span>
                <ul class="text-[11px] text-slate-700 space-y-1">
                  <li>• <strong>Mandatory Obligation (100%):</strong> must / are mandated to / is required to</li>
                  <li>• <strong>Strict Prohibition (0%):</strong> must not / is strictly prohibited from + -ing / are forbidden to</li>
                  <li>• <strong>Strong Recommendation:</strong> should / are strongly advised to / ought to</li>
                  <li>• <strong>Discretionary Permission:</strong> may / are authorized to</li>
                </ul>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">Common Spoken Traps vs B2 Models</span>
                <p class="text-slate-700">❌ <em>Trap: "Airport staff don't must let birds near runway."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Airfield wildlife teams are mandated to maintain zero tolerance for flocking birds within 3 km of the threshold."</em></p>
                <p class="text-slate-700">❌ <em>Trap: "Solar contractors are prohibited to cause glare."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Contractors are strictly prohibited from installing panels without certified anti-glare coatings."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Regulatory Modal Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Regulatory Drill: Select the Correct Regulatory Modal</span>
                <button type="button" onclick="toggleAgAnswer('m2s4-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. Runway inspection teams <strong>[must / may / are prohibited from]</strong> log grass height measurements twice weekly during migratory seasons.</p>
                <p>2. Agricultural contractors <strong>[are strictly prohibited from / should / must]</strong> spraying chemical insecticides on perimeter safety buffers.</p>
                <p>3. Solar engineering consortiums <strong>[are required to / may / ought to]</strong> submit glare simulation analyses to the Civil Aviation Authority prior to construction.</p>
                <p>4. Airport wildlife units <strong>[are authorized to / must not / should]</strong> deploy acoustic distress sirens only when birds approach the active runway centerline.</p>
              </div>
              <div id="m2s4-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <strong>must</strong> (Mandatory regulatory safety duty)</div>
                <div>2. <strong>are strictly prohibited from</strong> (Prohibition + gerund)</div>
                <div>3. <strong>are required to</strong> (Formal institutional obligation)</div>
                <div>4. <strong>are authorized to</strong> (Conditional discretionary permission)</div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Interactive Stations & Treaty Tournament (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Interactive Stations & Land-Use Treaty Tournament (45 mins)</h4>
                  <p class="text-xs text-slate-500">Rotate through 3 specialized eco-engineering stations, negotiate 500 hectares of perimeter land, and ratify the Accord.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Treaty Tournament</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (20 mins):</strong> In duos, rotate through Stations 1, 2, and 3 below. Read the core technology and answer the 2 investigation prompts per station.</li>
                <li><strong>Step 2 (20 mins):</strong> Form 3-party delegations (*Airport Operations, Wildlife Trust, Clean Energy Consortium*). Negotiate the zoning of 500 hectares of perimeter land using regulatory modals.</li>
                <li><strong>Step 3 (5 mins):</strong> Ratify the Airport Ecological Accord: Confirm exact hectare allocations for Safety Buffers, Solar Arrays, and Wetland Sanctuaries.</li>
              </ol>
            </div>

            <!-- 3 Interactive Technology Stations -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-3.5 text-xs">
              \${stations.map(st => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-lg">\${st.icon}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">\${st.badge}</span>
                    </div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm">\${st.title}</h5>
                    <div class="text-[10px] font-mono text-indigo-700 bg-indigo-50/70 px-2 py-1 rounded border border-indigo-100">
                      <strong>Tech:</strong> \${st.coreTech}
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${st.keyInsight}</p>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Station Investigation Questions:</span>
                    <ul class="text-[11px] text-slate-700 space-y-1">
                      \${(st.discussionPrompts || []).map(dp => \`<li>• \${dp}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- 3 Treaty Delegations -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Tri-Party Delegations (500 Hectares at Stake):</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                \${parties.map(p => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <h6 class="font-black text-slate-900">\${p.party}</h6>
                    <p class="text-[11px] text-slate-700 leading-relaxed"><strong>Priorities:</strong> \${p.priorities}</p>
                    <div class="p-2 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-950">
                      <strong>Bargaining Chip:</strong> \${p.bargainingChip}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Signed Tri-Party Airport Perimeter Land-Use Accord (500 ha breakdown).</span>
              <span class="font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Station Rotation:</strong> Give students 6–7 minutes per station. Ensure they note down at least one technical insight per station.</p>
                <p>• <strong>Negotiation Rules:</strong> Insist that Flight Safety must retain 150 ha minimum for obstacle-free zones; Clean Energy wants 150 ha minimum; Wildlife Trust wants 120 ha minimum.</p>
                <p>• <strong>FE2 Verification:</strong> Spend the final 20 minutes confirming that every student has locked in their presentation partner and topic for Session 5.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Formative Evaluation 2 (FE2) Final Rehearsal & Sign-Off (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Formative Evaluation 2 (FE2) Oral Rehearsal (25 mins):</span>
              <span class="ml-1">Deliver a 2-minute timed partner pitch dry run against the FE2 rubric. Verify slide outlines and get final teacher sign-off for Session 5.</span>
            </div>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md shrink-0">✓ Ready for FE2 in Session 5</span>
          </div>
        </div>
      \`;
    }
`;

fs.writeFileSync(targetPath, code, 'utf8');
console.log('✓ Successfully wrote enriched 4-pillar templates to src/js/06-templates-ag2.js');

