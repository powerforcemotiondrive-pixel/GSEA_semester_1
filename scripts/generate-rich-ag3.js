/**
 * Generator script for src/js/07-templates-ag3.js
 * Implements the 4-Pillar Pedagogical Architecture across AG Module 3 (Sessions 1-4):
 *  - Pillar 1: Interactive Vocabulary & Phrase Builder (with Check Answers toggle)
 *  - Pillar 2: Concrete Grammar Clinic (Formula, Trap vs B2, 4-sentence drill with Show Solutions toggle)
 *  - Pillar 3: Core Communicative Archetype with Step-by-Step Instructions, Sentence Starters & Deliverables
 *  - Pillar 4: Consolidation, Peer Feedback & FE3 Alignment
 */

const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'js', '07-templates-ag3.js');

const code = `    /* ==========================================================================
       GENERAL ENGLISH (AG) • MODULE 3 LESSON CONTENT TEMPLATES (SESSIONS 1 TO 4)
       - 4-Pillar Pedagogical Architecture (Vocab, Grammar, Scenario, Debrief)
       - Interactive Check-Answer & Show-Solution Toggles
       - Step-by-Step Numbered Student Instructions & Teacher Notes
       ========================================================================== */

    // --- SESSION 1: Everyday AI & Workplace Automation (Audit Workshop) ---
    function renderAg3LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const dossier = content.auditDossier || {};
      const workflows = dossier.workflows || [];
      const sim = content.hitlSimulation || {};
      const roles = sim.roles || [];
      const injects = sim.injects || [];
      const townHall = content.townHall || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Everyday AI & Workplace Automation</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card1.jpg'}" alt="Everyday AI" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 1 • Automation Audit'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Everyday AI & Workplace Automation</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Algorithmic Workflows, Active vs. Passive Voice in Tech & Human-in-the-Loop Town Hall</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">4-Pillar Audit Workshop</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (AI Lexis • Passive Voice • Town Hall Defense)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Machine Learning & Operational Automation Lexis (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-black text-xs flex items-center justify-center border border-blue-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Machine Learning & Operational Automation Lexis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 core terms for AI systems, automated dispatch, and workforce interaction.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">al-go-RITH-mic drift (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The degradation of an AI model's accuracy over time as real-world conditions change.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">pre-DIC-tive te-LEM-e-try (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Automated sensor data transmitted in real-time to forecast mechanical breakdowns before they occur.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">hu-man-in-the-LOOP (HITL) (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A design model where autonomous software requires explicit human validation before critical execution.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">black-box MOD-el (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A machine learning system whose internal decision-making calculations cannot be explained by humans.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">cog-ni-tive de-SKILL-ing (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The loss of fundamental human operational skills caused by over-reliance on automated tools.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">hal-lu-ci-NA-tion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">When a generative AI model outputs convincing but factually false or dangerous operational advice.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">au-to-mat-ed FAIL-safe (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A backup mechanism that automatically reverts control to a safe state if software fails.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">false-POS-i-tive rate (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The percentage of safety or security alerts triggered by benign, non-threatening events.</div>
              </div>
            </div>

            <!-- Interactive Vocabulary Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Match Concept to Operational Consequence</span>
                <button type="button" onclick="toggleAgAnswer('m3s1-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-blue-700 border border-blue-300 rounded hover:bg-blue-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. Dispatchers who rely on automated fuel planners for years suffer from <strong>[_______________]</strong> when manual oceanic charts are required.</p>
                <p>2. Because the flight scheduling algorithm is a proprietary <strong>[_______________]</strong>, union representatives cannot verify why night shifts are distributed unevenly.</p>
                <p>3. To prevent catastrophic rebooking cascades, management mandated a <strong>[_______________]</strong> protocol requiring supervisor sign-off.</p>
                <p>4. Engine sensors transmit <strong>[_______________]</strong> every 30 seconds to flag hydraulic pump anomalies before departure.</p>
              </div>
              <div id="m3s1-vocab-answers" class="hidden p-3 bg-white border border-blue-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-blue-800 block">✓ Model Answers:</span>
                <div>1. <strong>cognitive deskilling</strong></div>
                <div>2. <strong>black-box model</strong></div>
                <div>3. <strong>human-in-the-loop (HITL)</strong></div>
                <div>4. <strong>predictive telemetry</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Active vs. Passive Voice in Tech (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Active vs. Passive Voice in Tech (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master the functional difference between automated process reporting (Passive) and human executive accountability (Active).</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5">
                <span class="font-bold text-blue-900 uppercase text-[10px] tracking-wider block">Passive Voice: Automated System Actions (Focus on Result)</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">Subject (Data/System) + was/were + Past Participle (+ by Agent)</p>
                <p class="text-slate-700">❌ <em>Trap: "The machine was calculate the alternate fuel route."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "The alternate flight plan was recalculated by the neural network in 45 milliseconds."</em></p>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">Active Voice: Human Executive Agency (Legal Responsibility)</span>
                <p class="font-mono text-indigo-800 bg-white p-1.5 rounded border border-indigo-100 text-[11px]">Human Officer + Active Verb + Direct Object</p>
                <p class="text-slate-700">❌ <em>Trap: "The manual override was made by the dispatcher." (Weak passive deflection)</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "The chief dispatcher authorized the manual override after spotting anomalous telemetry."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Voice Conversion Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Conversion Drill: Convert System Actions to Technical Passive</span>
                <button type="button" onclick="toggleAgAnswer('m3s1-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p><strong>Drill 1 (Active $\rightarrow$ Passive):</strong> "The autonomous bot rebooked 1,400 passengers onto conflicting flights."<br>
                <em>Convert to Passive:</em> "1,400 passengers ______________________________________________________________"</p>
                <p><strong>Drill 2 (Active $\rightarrow$ Passive):</strong> "Engineers deployed a patch to prevent algorithmic drift."<br>
                <em>Convert to Passive:</em> "A software patch ____________________________________________________________"</p>
                <p><strong>Drill 3 (Passive $\rightarrow$ Active):</strong> "The fuel load calculation was rubber-stamped by junior dispatchers without verification."<br>
                <em>Convert to Active:</em> "Junior dispatchers ___________________________________________________________"</p>
                <p><strong>Drill 4 (Passive $\rightarrow$ Active):</strong> "A complete operational walkout was threatened by the ground staff union."<br>
                <em>Convert to Active:</em> "The ground staff union ______________________________________________________"</p>
              </div>
              <div id="m3s1-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"1,400 passengers were rebooked onto conflicting flights by the autonomous bot."</em></div>
                <div>2. <em>"A software patch was deployed by engineers to prevent algorithmic drift."</em></div>
                <div>3. <em>"Junior dispatchers rubber-stamped the fuel load calculation without verification."</em></div>
                <div>4. <em>"The ground staff union threatened a complete operational walkout."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Automation Vulnerability Audit & Town Hall (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Automation Vulnerability Audit & Town Hall Simulation (45 mins)</h4>
                  <p class="text-xs text-slate-500">Audit 6 operational workflows, resolve dynamic crisis injects, and defend policies at a spoken town hall.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Simulation</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Review the 6 Operational Workflows below. In pairs, rank them from highest risk (requiring 100% human sign-off) to lowest risk (safe for full automation).</li>
                <li><strong>Step 2 (15 mins):</strong> Adopt departmental roles (*Operations Director, AI Systems Architect, Union Rep*). The teacher introduces 1 Crisis Inject. Formulate a 3-point Human-in-the-Loop policy.</li>
                <li><strong>Step 3 (15 mins):</strong> Convene the Spoken Town Hall: Department leads deliver a 2-minute defense of the policy and answer 2 unscripted questions from staff (classmates).</li>
                <li><strong>Step 4 (5 mins):</strong> Ratify the final 3 mandatory human override rules.</li>
              </ol>
            </div>

            <!-- Vulnerability Audit Dossier -->
            <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="font-black text-blue-900 text-xs sm:text-sm">\${dossier.incidentTitle}</h5>
                <span class="text-[11px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">\${dossier.alertLevel}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${dossier.summary}</p>
            </div>

            <!-- 6 Workflows Grid -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">6 Critical Workflows Under Review (Rank in Pairs):</span>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                \${workflows.map(w => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 hover:border-blue-300 transition-colors">
                    <div class="flex items-center justify-between">
                      <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[11px] flex items-center justify-center">\${w.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">\${w.sector}</span>
                    </div>
                    <h6 class="font-bold text-slate-900">\${w.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">\${w.desc}</p>
                    <div class="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-100">
                      ⚠️ \${w.risk}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Roles Grid & Sentence Starters -->
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Departmental Roles & Useful Phrases:</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                \${roles.map(r => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900">\${r.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded">\${r.badge}</span>
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

            <!-- Town Hall Questions -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <span class="text-xs font-bold text-emerald-950 uppercase tracking-wide block">Spoken Town Hall: Frontline Staff Questions (Classmate Q&A)</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                \${(townHall.questions || []).map((q, idx) => \`
                  <div class="p-2.5 bg-white border border-emerald-100 rounded-lg italic text-slate-800">
                    Q\${idx + 1}: "\${q}"
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Signed 3-Point Human-in-the-Loop Operational Charter.</span>
              <span class="font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Passive Drill Timing:</strong> Spend 15 minutes max on Pillar 2. Emphasize that in safety reports, passive voice avoids personal blame ("The file was corrupted") while active voice establishes legal command ("The Captain declared").</p>
                <p>• <strong>Crisis Inject:</strong> Activate Inject #2 (Algorithmic Discrimination) at T+20m of simulation to ignite debate between the AI Architect and Union Rep.</p>
                <p>• <strong>Debrief Check:</strong> Ensure every group formulates at least 3 concrete operational override rules before the class ends.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Phrasing Review & FE3 Alignment (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Phrasing Review & FE3 Alignment (25 mins):</span>
              <span class="ml-1">Conduct peer evaluations on passive voice precision and executive town hall delivery. Calibrate presentation plans against the Formative Evaluation 3 (FE3) scoring rubric.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 1 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 2: Future Mobility & Clean Energy Transport (Mobility Sprint) ---
    function renderAg3LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const showcase = content.showcase || {};
      const modelA = showcase.modelA || {};
      const modelB = showcase.modelB || {};
      const protocol = showcase.spokenProtocol || [];
      const sprint = content.designSprint || {};
      const categories = sprint.categories || [];
      const stakeholders = sprint.stakeholders || [];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Future Mobility & Clean Energy Transport</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card2.jpg'}" alt="Future Mobility" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-teal-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 2 • Design Sprint'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Future Mobility & Clean Energy Transport</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Hydrogen Aviation, eVTOL Vertiports, Predictive Certainty & €100M Clean Corridor Sprint</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">4-Pillar Design Sprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Propulsion Lexis • Future Modals • Council Pitch)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Clean Propulsion & Multi-Modal Transit Lexis (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-black text-xs flex items-center justify-center border border-teal-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Clean Propulsion & Multi-Modal Transit Lexis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 core engineering terms comparing alternative aviation propulsion with high-speed rail.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">LI-quid hy-dro-gen (LH2) (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Hydrogen cooled to -253°C to maximize volumetric energy density for regional flight.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">cry-o-GEN-ic con-tain-ment (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Heavily insulated spherical fuel tanks engineered to store liquid hydrogen safely under high pressure.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">wa-ter e-lec-TROL-y-sis (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Using renewable electricity to split water into green hydrogen and oxygen with zero carbon emissions.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">VER-ti-port (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A dedicated urban aviation node equipped with landing pads and high-power charging for electric air taxis.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">bat-te-ry-e-LEC-tric com-mu-ter (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A 9-to-19 seat regional aircraft powered solely by battery packs on routes under 400 km.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">cat-e-NAR-y e-lec-tri-fi-ca-tion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Overhead wire systems supplying high-voltage electric power continuously to high-speed trains.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">fixed-GUIDE-way (adj.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Transit operating exclusively on permanent physical tracks, rails, or elevated magnetic guideways.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">pay-load-RANGE pen-al-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The loss of passenger seating capacity or flight range caused by the heavy weight of battery packs.</div>
              </div>
            </div>

            <!-- Interactive Matching Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Match Technology to Operational Parameter</span>
                <button type="button" onclick="toggleAgAnswer('m3s2-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-teal-700 border border-teal-300 rounded hover:bg-teal-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. Storing fuel at -253°C requires specialized <strong>[_______________]</strong> inside the aircraft fuselage.</p>
                <p>2. Because heavy batteries reduce passenger capacity, electric commuter aircraft face an acute <strong>[_______________]</strong>.</p>
                <p>3. Unlike flexible air routes, high-speed rail requires permanent <strong>[_______________]</strong> infrastructure and continuous land expropriation.</p>
                <p>4. Urban rooftops can be converted into a multi-pad <strong>[_______________]</strong> equipped with megawatt fast chargers.</p>
              </div>
              <div id="m3s2-vocab-answers" class="hidden p-3 bg-white border border-teal-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-teal-800 block">✓ Model Answers:</span>
                <div>1. <strong>cryogenic containment</strong></div>
                <div>2. <strong>payload-range penalty</strong></div>
                <div>3. <strong>fixed-guideway</strong></div>
                <div>4. <strong>vertiport</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Future Forms & Predictive Certainty (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Future Forms & Predictive Certainty (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master calibrated expressions of technical confidence ('is bound to', 'is slated to', 'is unlikely to').</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-teal-50/70 border border-teal-200 rounded-xl space-y-1.5">
                <span class="font-bold text-teal-900 uppercase text-[10px] tracking-wider block">Graded Degrees of Future Certainty</span>
                <ul class="text-[11px] text-slate-700 space-y-1">
                  <li>• <strong>Certain / Inevitable (95%+):</strong> is bound to / is certain to / will undoubtedly</li>
                  <li>• <strong>Officially Scheduled (80%):</strong> is slated to / is scheduled to</li>
                  <li>• <strong>Probable / Likely (65%):</strong> is expected to / is likely to</li>
                  <li>• <strong>Improbable / Skeptical (15%):</strong> is highly unlikely to / is improbable that</li>
                </ul>
              </div>
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">Common Spoken Traps vs B2 Models</span>
                <p class="text-slate-700">❌ <em>Trap: "Hydrogen planes will maybe fly in 2035." (Weak, childish modal)</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Hydrogen turboprops are bound to enter regional service on routes under 800 km by 2035."</em></p>
                <p class="text-slate-700">❌ <em>Trap: "Batteries are impossible to power widebodies."</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Battery-electric widebodies are highly improbable before 2050 due to gravimetric density limits."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Forecast Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Forecast Drill: Express Technical Calibrated Certainty</span>
                <button type="button" onclick="toggleAgAnswer('m3s2-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. [Regional electric commuter aircraft / enter commercial service by 2030 / High confidence].<br>
                <em>Draft sentence with 'is slated to':</em> "Regional electric commuter aircraft ____________________________"</p>
                <p>2. [High-speed rail expansion / displace 60,000 short-haul flights annually / Inevitable].<br>
                <em>Draft sentence with 'is bound to':</em> "Modernizing the high-speed rail corridor _______________________"</p>
                <p>3. [Fully autonomous pilotless passenger airliners / win public certification by 2035 / Very doubtful].<br>
                <em>Draft sentence with 'is highly improbable that':</em> "It ____________________________________________________"</p>
                <p>4. [Rooftop vertiport noise / trigger residential protests in suburban centers / Probable].<br>
                <em>Draft sentence with 'is likely to':</em> "Acoustic emissions from rooftop vertiports ____________________"</p>
              </div>
              <div id="m3s2-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"Regional electric commuter aircraft are slated to enter commercial service by 2030."</em></div>
                <div>2. <em>"Modernizing the high-speed rail corridor is bound to displace 60,000 short-haul flights annually."</em></div>
                <div>3. <em>"It is highly improbable that pilotless passenger airliners will achieve certification by 2035."</em></div>
                <div>4. <em>"Acoustic emissions from rooftop vertiports are likely to trigger residential noise complaints."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Comparative Showcase & €100M Clean Corridor Sprint (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Comparative Showcase & €100M Clean Corridor Sprint (45 mins)</h4>
                  <p class="text-xs text-slate-500">Contrast two future transit paradigms, allocate €100M in public infrastructure, and pitch to the Council.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Design Sprint</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Contrast Paradigm A (Regional Air Mobility) vs. Paradigm B (High-Speed Rail) below. Discuss the 3-stage comparative protocol with your partner.</li>
                <li><strong>Step 2 (20 mins):</strong> You have €100,000,000 to decarbonize the South-West Corridor by 2035. Allocate funding across the 5 options in the budget table.</li>
                <li><strong>Step 3 (15 mins):</strong> Script spoken counter-arguments to 4 tough stakeholder objections using predictive certainty phrases (*"is bound to", "is slated to"*).</li>
              </ol>
            </div>

            <!-- Comparative Paradigms Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
              <!-- Paradigm A: Regional Air Mobility -->
              <div class="p-4 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-teal-900 uppercase text-[10px] tracking-wider">Paradigm 01 • Decentralized</span>
                  <span class="bg-white px-2 py-0.5 rounded border border-teal-200 text-teal-800 font-bold text-[10px]">Agile Nodes</span>
                </div>
                <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${modelA.title}</h6>
                <p class="text-slate-600">\${modelA.caption}</p>
                <div class="flex flex-wrap gap-1.5">
                  \${(modelA.hotspots || []).map(h => \`
                    <button type="button" onclick="toggleAgAnswer('m3s2-a-\${h.id}')" class="px-2 py-1 text-[11px] font-bold bg-white text-teal-800 border border-teal-200 hover:bg-teal-50 rounded cursor-pointer">
                      📍 \${h.label}
                    </button>
                  \`).join('')}
                </div>
                <div class="space-y-1">
                  \${(modelA.hotspots || []).map(h => \`
                    <div id="m3s2-a-\${h.id}" class="hidden p-2 bg-white border border-teal-200 rounded text-[11px] text-teal-950">
                      <strong>\${h.label}:</strong> \${h.desc}
                    </div>
                  \`).join('')}
                </div>
              </div>

              <!-- Paradigm B: High-Speed Rail -->
              <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider">Paradigm 02 • High-Density</span>
                  <span class="bg-white px-2 py-0.5 rounded border border-indigo-200 text-indigo-800 font-bold text-[10px]">Mass Transit</span>
                </div>
                <h6 class="font-black text-slate-900 text-xs sm:text-sm">\${modelB.title}</h6>
                <p class="text-slate-600">\${modelB.caption}</p>
                <div class="flex flex-wrap gap-1.5">
                  \${(modelB.hotspots || []).map(h => \`
                    <button type="button" onclick="toggleAgAnswer('m3s2-b-\${h.id}')" class="px-2 py-1 text-[11px] font-bold bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 rounded cursor-pointer">
                      📍 \${h.label}
                    </button>
                  \`).join('')}
                </div>
                <div class="space-y-1">
                  \${(modelB.hotspots || []).map(h => \`
                    <div id="m3s2-b-\${h.id}" class="hidden p-2 bg-white border border-indigo-200 rounded text-[11px] text-indigo-950">
                      <strong>\${h.label}:</strong> \${h.desc}
                    </div>
                  \`).join('')}
                </div>
              </div>
            </div>

            <!-- €100M Budget Worksheet -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wide block">€100,000,000 Clean Corridor Allocation Breakdown (Select in Pairs):</span>
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

            <!-- Stakeholder Objections -->
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
              <span><strong>Expected Deliverable:</strong> Completed €100M Clean Corridor Budget Worksheet + 3-Minute Regional Council Pitch.</span>
              <span class="font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Modal Accuracy:</strong> During pitches, challenge students who use vague modals like "might" or "maybe". Push for calibrated phrasing: "Hydrogen is slated to achieve 500 km range by 2032."</p>
                <p>• <strong>Budget Balance:</strong> Prevent groups from spending €100M on a single high-speed rail section without funding feeder connections to secondary towns.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Council Vote & Feasibility Review (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Council Vote & Feasibility Review (25 mins):</span>
              <span class="ml-1">Class votes on the most resilient regional corridor blueprint based on CO₂ reduction and rural equity. Calibrate presentation plans against the FE3 rubric.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 2 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 3: Technology Ethics & Automated Decisions in AI (Inquiry Lab) ---
    function renderAg3LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const devils = content.devilsAdvocate || [];
      const dossier = content.inquiryDossier || {};
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Technology Ethics & Automated Decisions in AI</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card3.jpg'}" alt="Technology Ethics" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 3 • Debate Lab'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Technology Ethics & Automated Decisions in AI</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Project Argus-Eye Public Hearing, Concessive Grammar & EU AI Act Regulatory Tribunal</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">4-Pillar Regulatory Inquiry</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (AI Ethics Lexis • Concessive Syntax • Tribunal Hearing)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: AI Ethics & Regulatory Governance Lexis (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: AI Ethics & Regulatory Governance Lexis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 essential terms under the European Union AI Act legal framework.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">bi-o-MET-ric pro-fil-ing (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Automated algorithmic analysis of physical traits to infer passenger risk, intent, or emotion.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">mi-cro-ex-PRES-sion a-nal-y-sis (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">High-speed facial scanning that attempts to detect deception from subconscious facial muscle twitches.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">con-FORM-i-ty as-sess-ment (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A mandatory legal audit proving an AI system meets fundamental European safety and human rights standards.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">high-risk AI tier (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Critical AI category (including border control and law enforcement) subject to strict EU oversight.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">al-go-RITH-mic o-pac-i-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The complete inability of human auditors to understand why a neural network reached a specific verdict.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">da-ta PROV-e-nance (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The documented origin, history, and training pedigree of datasets used to teach machine learning models.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">dis-pro-POR-tion-ate sur-veil-lance (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">Intrusive tracking of millions of innocent citizens to catch a statistically tiny number of suspects.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">stat-u-TOR-y REM-e-dy (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A legally enforceable right for an individual to challenge and overturn an automated AI decision.</div>
              </div>
            </div>

            <!-- Interactive Vocabulary Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Match Legal Terms to Regulatory Criteria</span>
                <button type="button" onclick="toggleAgAnswer('m3s3-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. AI systems deployed at international border control fall under the strict EU <strong>[_______________]</strong>.</p>
                <p>2. Travelers flagged by autonomous border algorithms must be granted a clear <strong>[_______________]</strong> to appeal to a human officer.</p>
                <p>3. Because the neural net cannot explain its reasoning, critics cite severe <strong>[_______________]</strong> as grounds for an operational ban.</p>
                <p>4. Commercial vendors must submit verified records of <strong>[_______________]</strong> to prove their datasets are free from racial bias.</p>
              </div>
              <div id="m3s3-vocab-answers" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Answers:</span>
                <div>1. <strong>high-risk AI tier</strong></div>
                <div>2. <strong>statutory remedy</strong></div>
                <div>3. <strong>algorithmic opacity</strong></div>
                <div>4. <strong>data provenance</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Complex Conjunctions & Concessions (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Complex Conjunctions & Concessions (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master formal concessive debate syntax ('notwithstanding', 'inasmuch as', 'whereas', 'even if').</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">Concessive Conjunctions in Formal Hearings</span>
                <ul class="text-[11px] text-slate-700 space-y-1">
                  <li>• <strong>Notwithstanding + Noun:</strong> In spite of (<em>"Notwithstanding the operational speed cited by vendors..."</em>)</li>
                  <li>• <strong>Inasmuch as + Clause:</strong> Since / Because of the fact that (<em>"Inasmuch as the model exhibits a 14% error rate..."</em>)</li>
                  <li>• <strong>Whereas + Clause:</strong> In contrast to the fact that (<em>"Whereas biometric gates process passengers in 2 seconds..."</em>)</li>
                  <li>• <strong>Even if + Clause:</strong> Conceding a hypothetical point (<em>"Even if the patch improves Caucasian recognition..."</em>)</li>
                </ul>
              </div>
              <div class="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1.5">
                <span class="font-bold text-rose-900 uppercase text-[10px] tracking-wider block">Common Spoken Traps vs B2 Models</span>
                <p class="text-slate-700">❌ <em>Trap: "Although it catches criminals, but it is illegal." (Double conjunction error)</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Notwithstanding its interception of traffickers, the software constitutes disproportionate mass surveillance."</em></p>
                <p class="text-slate-700">❌ <em>Trap: "Inasmuch as because the algorithm is private..." (Redundant repetition)</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "Inasmuch as the algorithm is proprietary black-box code, independent verification is legally impossible."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Concession Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Concession Drill: Combine Arguments with Formal Conjunctions</span>
                <button type="button" onclick="toggleAgAnswer('m3s3-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. [The system intercepted 42 human-trafficking rings / It violates Article 5 of the EU AI Act].<br>
                <em>Combine with 'Notwithstanding':</em> "Notwithstanding ____________________________________________________"</p>
                <p>2. [The emotion-detection module conflates travel fatigue with deception / It cannot be deployed lawfully].<br>
                <em>Combine with 'Inasmuch as':</em> "Inasmuch as ______________________________________________________"</p>
                <p>3. [Border security demands fast throughput / Human dignity requires clear appeals].<br>
                <em>Combine with 'Whereas':</em> "Whereas border security ____________________________________________"</p>
                <p>4. [Vendors update the neural net monthly / Racial error disparities persist].<br>
                <em>Combine with 'Even if':</em> "Even if vendors ____________________________________________________"</p>
              </div>
              <div id="m3s3-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"Notwithstanding its interception of 42 trafficking rings, Project Argus-Eye violates Article 5 of the EU AI Act."</em></div>
                <div>2. <em>"Inasmuch as the emotion-detection module conflates travel fatigue with deception, it cannot be deployed lawfully."</em></div>
                <div>3. <em>"Whereas border security demands high throughput, human dignity requires an unconditional right of appeal."</em></div>
                <div>4. <em>"Even if vendors update the neural net monthly, racial error disparities persist across international hubs."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Project Argus-Eye Public Inquiry Hearing (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: The Project Argus-Eye Public Inquiry Hearing (45 mins)</h4>
                  <p class="text-xs text-slate-500">Examine sworn depositions under EU AI Act standards, execute cross-examinations, and deliver the tribunal verdict.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Tribunal Hearing</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (10 mins):</strong> Review the Project Argus-Eye brief. Adopt 1 of 4 sworn witness roles (*Auditor, Security Chief, Passenger Lead, Tribunal Judge*).</li>
                <li><strong>Step 2 (15 mins):</strong> Prepare your sworn statement and hone 2 cross-examination questions targeting your opponent's explicit vulnerability using concessive clauses.</li>
                <li><strong>Step 3 (15 mins):</strong> Convene the Tribunal: Proponents and opponents cross-examine witnesses (2 minutes per witness).</li>
                <li><strong>Step 4 (5 mins):</strong> The Tribunal Chair delivers a majority ruling classifying Argus-Eye as Prohibited, High-Risk with HITL, or Fully Authorized.</li>
              </ol>
            </div>

            <!-- Project Argus-Eye Dossier -->
            <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs space-y-1">
              <span class="font-bold text-indigo-950 uppercase text-[10px] tracking-wider block">Official Inquiry Investigation:</span>
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
                      <strong>Cross-Exam Flaw:</strong> \${w.vulnerability}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Official 3-Point Commission Inquiry Ruling on Project Argus-Eye.</span>
              <span class="font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Strict Cross-Exam Timer:</strong> Enforce the 2-minute limit per cross-examination. Witnesses must answer directly without evading questions.</p>
                <p>• <strong>Conjunction Check:</strong> Challenge students who begin statements with "Because" or "So". Push for "Notwithstanding" and "Inasmuch as".</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: Regulatory Debrief & Review (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Regulatory Debrief & Argument Evaluation (25 mins):</span>
              <span class="ml-1">Evaluate your opponent on (1) Legal precision, (2) Effective deployment of concessive clauses, and (3) Professional courtroom composure. Calibrate prep for FE3.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 3 Complete • 120 mins</span>
          </div>
        </div>
      \`;
    }

    // --- SESSION 4: Biometrics, Digital IDs & Passenger Journey (Stations & Treaty) ---
    function renderAg3LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const paradox = content.borderParadox || {};
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Biometrics, Digital IDs & Passenger Journey</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/ag_m3card4.jpg'}" alt="Biometrics" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-purple-300 uppercase tracking-wider">\${hero.badge || 'AG Module 3 • Session 4 • Interactive Stations'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">Biometrics, Digital IDs & Passenger Journey</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">Contactless Walkthrough E-Gates, Zero-Knowledge Hashes, Biometric Charter & FE3 Rehearsal</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">4-Pillar Stations & Treaty</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Biometric Lexis • Relative Clauses • FE3 Pitch Dry Run)</span>
              </div>
            </div>
          </div>

          <!-- PILLAR 1: Biometric & Cryptographic Security Lexis (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200">P1</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 1: Biometric & Cryptographic Security Lexis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master 8 specialized terms covering frictionless travel and cryptographic data sovereignty.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 shrink-0">Vocabulary Drill</span>
            </div>

            <!-- Key Word Bank -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">ze-ro-know-ledge PROOF (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A cryptographic method proving a statement is true (e.g. valid visa) without revealing personal details.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">cryp-to-GRAPH-ic hash (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">A 512-bit irreversible mathematical string generated from facial geometry; cannot be reversed into a photo.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">hard-ware EN-clave (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">An isolated, encrypted chip on a passenger's smartphone protecting biometric credentials from malware.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">ste-re-o-SCOP-ic im-ag-ing (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">3D depth sensing that maps bone structure to prevent spoofing with 2D photos or high-res video screens.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">da-ta SOV-er-eign-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The legal principle that individual citizens own their biological data and control how it is shared.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">opt-out PRO-vi-sion (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">An unconditional legal right for travelers to refuse biometric boarding and use human passport desks without penalty.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">walk-through e-GATE (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">An open sensor corridor verifying credentials at normal walking pace (1.4 m/s) without barrier doors.</div>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="font-bold text-slate-900">in-ter-op-er-a-BIL-i-ty (n.)</div>
                <div class="text-[11px] text-slate-600 mt-0.5">The technical capability of digital IDs to function seamlessly across international border control systems.</div>
              </div>
            </div>

            <!-- Interactive Vocabulary Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Vocabulary Drill: Trace the Cryptographic Passenger Journey</span>
                <button type="button" onclick="toggleAgAnswer('m3s4-vocab-answers')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-purple-700 border border-purple-300 rounded hover:bg-purple-50 cursor-pointer">
                  [Show / Hide Answers]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. The walkthrough sensor captures facial bone geometry using 3D <strong>[_______________]</strong> to prevent photo spoofing.</p>
                <p>2. The facial image is immediately converted into an irreversible <strong>[_______________]</strong>, after which the raw image is purged.</p>
                <p>3. Passenger credentials reside securely inside an encrypted <strong>[_______________]</strong> on the traveler's personal smartphone.</p>
                <p>4. European law guarantees an unconditional <strong>[_______________]</strong> allowing travelers to choose traditional manual passport checks.</p>
              </div>
              <div id="m3s4-vocab-answers" class="hidden p-3 bg-white border border-purple-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-purple-800 block">✓ Model Answers:</span>
                <div>1. <strong>stereoscopic imaging</strong></div>
                <div>2. <strong>cryptographic hash</strong></div>
                <div>3. <strong>hardware enclave</strong></div>
                <div>4. <strong>opt-out provision</strong></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 2: Grammar Clinic • Relative Clauses & Precision (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">P2</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 2: Grammar Clinic • Relative Clauses & Technical Precision (25 mins)</h4>
                  <p class="text-xs text-slate-500">Master defining vs. non-defining relative clauses with relative pronouns ('which', 'who', 'whose', 'wherein').</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Grammar Clinic</span>
            </div>

            <!-- Formulas & Traps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1.5">
                <span class="font-bold text-purple-900 uppercase text-[10px] tracking-wider block">Defining vs Non-Defining Clauses</span>
                <ul class="text-[11px] text-slate-700 space-y-1">
                  <li>• <strong>Defining (Essential info, no commas):</strong> <em>"Passengers who choose biometric boarding save 40 minutes at security."</em></li>
                  <li>• <strong>Non-Defining (Extra info, requires commas):</strong> <em>"Biometric hashes, which are irreversible 512-bit strings, protect passenger data from database theft."</em></li>
                  <li>• <strong>Wherein / Whereby (Formal legal):</strong> <em>"A protocol wherein travelers retain full physical custody of their credentials."</em></li>
                </ul>
              </div>
              <div class="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1.5">
                <span class="font-bold text-rose-900 uppercase text-[10px] tracking-wider block">Common Punctuation Traps</span>
                <p class="text-slate-700">❌ <em>Trap: "The digital wallet which is stored on the phone it is safe." (Missing commas + double subject)</em></p>
                <p class="text-emerald-800 font-semibold">✅ <em>Correct: "The digital wallet, which is stored inside an encrypted hardware enclave, guarantees complete data sovereignty."</em></p>
              </div>
            </div>

            <!-- Interactive 4-Sentence Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Technical Combining Drill: Combine Statements with Relative Clauses</span>
                <button type="button" onclick="toggleAgAnswer('m3s4-grammar-solutions')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-700 border border-indigo-300 rounded hover:bg-indigo-50 cursor-pointer">
                  [Show / Hide Solutions]
                </button>
              </div>
              <div class="space-y-2 text-xs text-slate-700">
                <p>1. [Walkthrough e-gates verify facial geometry in 180 milliseconds. They process 45 passengers per minute].<br>
                <em>Combine with 'which':</em> "Walkthrough e-gates, ____________________________________________________"</p>
                <p>2. [Travelers value digital fast-tracks. Travelers may opt out at any time without penalty].<br>
                <em>Combine with 'who':</em> "Travelers ____________________________________________________________________"</p>
                <p>3. [The Zero-Knowledge protocol was audited by cybersecurity regulators. It protects passenger identity].<br>
                <em>Combine with 'which':</em> "The Zero-Knowledge protocol, __________________________________________"</p>
                <p>4. [Airports operate central biometric databases. Their databases face catastrophic hacking risks].<br>
                <em>Combine with 'whose':</em> "Airports ____________________________________________________________________"</p>
              </div>
              <div id="m3s4-grammar-solutions" class="hidden p-3 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 space-y-1">
                <span class="font-bold text-indigo-800 block">✓ Model Solutions:</span>
                <div>1. <em>"Walkthrough e-gates, which verify facial geometry in 180 milliseconds, process 45 passengers per minute."</em></div>
                <div>2. <em>"Travelers who value digital fast-tracks may opt out at any time without experiencing delays."</em></div>
                <div>3. <em>"The Zero-Knowledge protocol, which was audited by cybersecurity regulators, protects passenger identity."</em></div>
                <div>4. <em>"Airports whose operations rely on central biometric databases face catastrophic hacking risks."</em></div>
              </div>
            </div>
          </div>

          <!-- PILLAR 3: Interactive Stations & Biometric Charter Tournament (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">P3</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Pillar 3: Interactive Stations & Passenger Charter Tournament (45 mins)</h4>
                  <p class="text-xs text-slate-500">Rotate through 3 contactless technology stations, negotiate a 5-point Passenger Charter, and ratify the treaty.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Treaty Tournament</span>
            </div>

            <!-- Step-by-Step Instructions -->
            <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-blue-950 uppercase tracking-wider text-[10px] block">Step-by-Step Student Instructions:</span>
              <ol class="list-decimal pl-4 space-y-1 text-slate-700">
                <li><strong>Step 1 (20 mins):</strong> In duos, rotate through Stations 1, 2, and 3 below. Examine the core technology and answer the 2 investigation prompts per station.</li>
                <li><strong>Step 2 (20 mins):</strong> Form 3-party delegations (*Border Agency, Passenger Rights Federation, Cybersecurity Regulators*). Negotiate the 5 articles of the Contactless Passenger Charter.</li>
                <li><strong>Step 3 (5 mins):</strong> Ratify the Charter: Agree on mandatory data retention caps, opt-out protections, and €50M non-compliance penalties.</li>
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
                    <div class="text-[10px] font-mono text-purple-700 bg-purple-50/70 px-2 py-1 rounded border border-purple-100">
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
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Tri-Party Delegations (Negotiating 5 Key Charter Articles):</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                \${parties.map(p => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <h6 class="font-black text-slate-900">\${p.party}</h6>
                    <p class="text-[11px] text-slate-700 leading-relaxed"><strong>Priorities:</strong> \${p.priorities}</p>
                    <div class="p-2 bg-purple-50 border border-purple-200 rounded text-[11px] text-purple-950">
                      <strong>Bargaining Chip:</strong> \${p.bargainingChip}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Expected Deliverable -->
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span><strong>Expected Deliverable:</strong> Ratified International Contactless Passenger Sovereignty Charter.</span>
              <span class="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">Output Verified</span>
            </div>

            <!-- Collapsible Teacher Notes -->
            <details class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-950 cursor-pointer">
              <summary class="font-bold select-none flex items-center justify-between">
                <span>👨‍🏫 Teacher Facilitation & Timing Cue (Click to expand)</span>
                <span class="text-[11px] text-purple-600">▾</span>
              </summary>
              <div class="mt-2.5 pt-2.5 border-t border-purple-200/70 space-y-1.5 text-slate-700 leading-relaxed">
                <p>• <strong>Station Pacing:</strong> Rotate stations every 6–7 minutes. Ensure students understand how Zero-Knowledge Proofs differ from traditional passwords.</p>
                <p>• <strong>Charter Impasse:</strong> If the Border Agency and Passenger Rights Federation reach an impasse on hash retention (72 hrs vs 60 mins), guide them to compromise on 24 hours.</p>
                <p>• <strong>FE3 Rehearsal Priority:</strong> Protect the final 20 minutes for timed partner dry runs. Every student must practice their 2-minute pitch before leaving.</p>
              </div>
            </details>
          </div>

          <!-- PILLAR 4: FE3 Final Presentation Rehearsal & Sign-Off (25 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Pillar 4: Formative Evaluation 3 (FE3) Oral Rehearsal (25 mins):</span>
              <span class="ml-1">Deliver a 2-minute timed partner pitch dry run against the FE3 rubric. Confirm slide deck outlines and secure final teacher sign-off for the Session 5 evaluation.</span>
            </div>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md shrink-0">✓ Ready for FE3 in Session 5</span>
          </div>
        </div>
      \`;
    }
`;

fs.writeFileSync(targetPath, code, 'utf8');
console.log('✓ Successfully wrote enriched 4-pillar templates to src/js/07-templates-ag3.js');
