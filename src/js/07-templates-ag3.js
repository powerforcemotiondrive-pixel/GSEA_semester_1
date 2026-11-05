    /* ==========================================================================
       GENERAL ENGLISH (AG) • MODULE 3 LESSON CONTENT TEMPLATES (SESSIONS 1 TO 4)
       - Archetype A (Session 1): Crisis & Automation Audit Workshop
       - Archetype C (Session 2): Collaborative Clean Mobility Design Sprint
       - Archetype B (Session 3): Media & Debate Lab (High-Stakes AI Regulatory Hearing)
       - Archetype D (Session 4): Interactive Stations & Border Treaty Tournament
       ========================================================================== */

    // --- SESSION 1: Everyday AI & Workplace Automation (Archetype A) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Everyday AI & Workplace Automation'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m3card1.jpg'}" alt="${hero.title || 'Everyday AI'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">${hero.badge || 'AG Module 3 • Session 1 • Automation Audit'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Everyday AI & Workplace Automation'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype A • Crisis & Automation Audit Workshop'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">Workplace Automation Audit & HITL Simulation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Operational Interaction Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Workplace Automation Vulnerability Audit (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-black text-xs flex items-center justify-center border border-blue-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Operational Automation Vulnerability Audit (25 mins)</h4>
                  <p class="text-xs text-slate-500">Scan critical workplace workflows, detect algorithmic drift, and rank operational risks on an Urgency Matrix.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">${dossier.alertLevel || 'VULNERABILITY ALERT'}</span>
            </div>

            <!-- Incident Overview Card -->
            <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="font-black text-blue-900 text-xs sm:text-sm">${dossier.incidentTitle}</h5>
                <span class="text-[11px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">${dossier.timeframe}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">${dossier.summary}</p>
            </div>

            <!-- Workflows Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Critical Operational Workflows Under Review (Pairs rank 1 to 6)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${workflows.map(w => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[11px] flex items-center justify-center">${w.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">${w.sector}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs mb-1">${w.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-2">${w.desc}</p>
                    <div class="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-100">
                      ⚠️ <strong>Risk:</strong> ${w.risk}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Spoken Prompt -->
            <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
              <span class="text-base shrink-0">🗣️</span>
              <p><strong>Pair Audit Protocol:</strong> Negotiate with your partner which TWO workflows must remain strictly under human control and which TWO can safely utilize automated machine learning. Justify your decisions using phrases of risk and causality (<em>"If dispatchers surrender cognitive oversight to the algorithm, the cascade failure will be..."</em>).</p>
            </div>
          </div>

          <!-- Part 2: HITL Emergency Policy Simulation (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: 'Human-in-the-Loop' (HITL) Emergency Policy Simulation (45 mins)</h4>
                  <p class="text-xs text-slate-500">Adopt interdisciplinary roles, resolve dynamic crisis injects, and formulate mandatory human override thresholds.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Tri-Party Simulation</span>
            </div>

            <!-- Roles Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Operational Roles (Trios or Pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                ${roles.map(r => `
                  <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs sm:text-sm">${r.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded">${r.badge}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed"><strong>Mission:</strong> ${r.mission}</p>
                    <div class="p-2.5 bg-white rounded-lg border border-slate-200">
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Useful phrases:</span>
                      <ul class="text-[11px] text-slate-700 space-y-0.5">
                        ${(r.keyPhrases || []).map(p => `<li>• <em>"${p}"</em></li>`).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Dynamic Crisis Injects -->
            <div class="p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-3">
              <h5 class="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>⚠️</span> Dynamic Crisis Injects (Introduced by the Teacher during negotiations)
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                ${injects.map(inj => `
                  <div class="p-3 bg-white border border-rose-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-black text-rose-700 block">${inj.time}</span>
                    <h6 class="font-bold text-slate-900 text-xs">${inj.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${inj.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Workplace Town Hall (30 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Spoken Workplace Town Hall & Executive Scrutiny (30 mins)</h4>
                  <p class="text-xs text-slate-500">Defend your department's automation charter under intense questioning from frontline employees.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Live Town Hall</span>
            </div>

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
              <h5 class="font-bold text-emerald-900 text-xs sm:text-sm">${townHall.title}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${townHall.instructions}</p>
            </div>

            <!-- Tough Town Hall Questions -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Staff & Journalist Interrogations (Classmate Q&A)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${(townHall.questions || []).map((q, idx) => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
                    <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">Q${idx + 1}</span>
                    <p class="text-xs text-slate-800 italic leading-relaxed">"${q}"</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 4: Technical Phrasing Clinic & Debrief (20 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Technical Phrasing Clinic (Active vs. Passive Voice):</span>
              <span class="ml-1">Contrast passive system reports (<em>"The parameters were adjusted by the neural net"</em>) with active human agency (<em>"The dispatcher authorized the override"</em>) to establish legal accountability.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 1 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 2: Future Mobility & Clean Energy Transport (Archetype C) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Future Mobility & Clean Energy Transport'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m3card2.jpg'}" alt="${hero.title || 'Future Mobility'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-teal-300 uppercase tracking-wider">${hero.badge || 'AG Module 3 • Session 2 • Design Sprint'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Future Mobility & Clean Energy Transport'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype C • Collaborative Clean Mobility Sprint'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Visual Analysis & €100M Clean Corridor Sprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Collaborative Engineering Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Clean Mobility Comparative Showcase (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-black text-xs flex items-center justify-center border border-teal-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Future Mobility Showcase • Comparative Transit Paradigms (35 mins)</h4>
                  <p class="text-xs text-slate-500">Compare decentralized electric commuter flight vs. high-density fixed-rail corridors across energy, land take, and scalability.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">Comparative Analysis</span>
            </div>

            <!-- Comparative Models Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <!-- Model A: Decentralized Electric/eVTOL Air Mobility -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="p-4 bg-teal-900 text-white">
                  <span class="text-[10px] font-black uppercase tracking-wider text-teal-300 block mb-1">Paradigm 01 • Decentralized Network</span>
                  <h5 class="font-black text-white text-xs sm:text-sm">${modelA.title}</h5>
                  <p class="text-[11px] text-teal-100 mt-1 leading-relaxed">${modelA.caption}</p>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Infrastructure Hotspots (Click to view details):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      ${(modelA.hotspots || []).map(h => `
                        <button type="button" onclick="document.getElementById('hotspot-m3-a-${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-teal-800 border border-teal-200 hover:bg-teal-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 ${h.label}
                        </button>
                      `).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      ${(modelA.hotspots || []).map(h => `
                        <div id="hotspot-m3-a-${h.id}" class="hidden p-2.5 bg-teal-50/80 border border-teal-200 rounded-lg text-[11px] text-teal-950 leading-relaxed">
                          <strong>${h.label}:</strong> ${h.desc}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Operational Lexis:</span> <em>${modelA.spatialVocab}</em>
                  </div>
                </div>
              </div>

              <!-- Model B: High-Density High-Speed Electric Rail -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="p-4 bg-indigo-900 text-white">
                  <span class="text-[10px] font-black uppercase tracking-wider text-indigo-300 block mb-1">Paradigm 02 • High-Density Corridor</span>
                  <h5 class="font-black text-white text-xs sm:text-sm">${modelB.title}</h5>
                  <p class="text-[11px] text-indigo-100 mt-1 leading-relaxed">${modelB.caption}</p>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Infrastructure Hotspots (Click to view details):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      ${(modelB.hotspots || []).map(h => `
                        <button type="button" onclick="document.getElementById('hotspot-m3-b-${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 ${h.label}
                        </button>
                      `).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      ${(modelB.hotspots || []).map(h => `
                        <div id="hotspot-m3-b-${h.id}" class="hidden p-2.5 bg-indigo-50/80 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 leading-relaxed">
                          <strong>${h.label}:</strong> ${h.desc}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Operational Lexis:</span> <em>${modelB.spatialVocab}</em>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3-Stage Spoken Comparative Protocol -->
            <div class="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-2.5">
              <h5 class="font-bold text-teal-950 text-xs sm:text-sm flex items-center gap-1.5">
                <span>🗣️</span> 3-Stage Spoken Comparative Protocol (Pair Discussion)
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${protocol.map(p => `
                  <div class="p-3 bg-white border border-teal-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-black text-teal-800 block">${p.step}</span>
                    <p class="text-[11px] text-slate-700 leading-relaxed">${p.prompt}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: €100M Clean Corridor Design Sprint (55 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Collaborative Clean Corridor Design Sprint (${sprint.budget}) (55 mins)</h4>
                  <p class="text-xs text-slate-500">Allocate public capital across 5 breakthrough mobility assets and defend your plan against stakeholder pushback.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">${sprint.budget} Fund</span>
            </div>

            <!-- Target Briefing -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Corridor Infrastructure Target:</span>
              <h5 class="font-black text-slate-900 text-xs sm:text-sm">${sprint.corridorName}</h5>
              <p class="text-[11px] text-slate-600 mt-1">Your regional engineering duo has <strong>€100,000,000</strong> to allocate across the 5 options below. No single project may receive more than €40M. Achieve the highest CO₂ reduction while maintaining regional equity.</p>
            </div>

            <!-- Categories Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Available Decarbonization Interventions (Select & Budget)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                ${categories.map((c, idx) => `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-black text-slate-500 uppercase">Option 0${idx + 1}</span>
                      <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">${c.costPerUnit}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs">${c.name}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${c.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Stakeholder Objections -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Stakeholder Resistance Clinic (Prepare Spoken Rebuttals)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${stakeholders.map(s => `
                  <div class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
                    <span class="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">${s.role}</span>
                    <p class="text-xs text-amber-950 italic">"${s.objection}"</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Regional Council Pitch (30 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Spoken Council Pitch (Part 3):</span>
              <span class="ml-1">Deliver a 3-minute spoken investment pitch to the Regional Transport Authority using phrases of predictive certainty (<em>"Hydrogen is bound to dominate short-haul corridors by 2035..."</em>).</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 2 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 3: Technology Ethics & Automated Decisions in AI (Archetype B) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m3card3.jpg'}" alt="${hero.title || 'Technology Ethics'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">${hero.badge || 'AG Module 3 • Session 3 • Debate Lab'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype B • Media & Debate Lab'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">High-Stakes Regulatory Public Inquiry Hearing</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Spoken Argumentation Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Devil's Advocate Warm-Up (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Devil's Advocate Warm-Up • Spoken Rebuttals (20 mins)</h4>
                  <p class="text-xs text-slate-500">Refute common AI governance fallacies with swift, evidence-backed spoken arguments.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Warm-Up Refutation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${devils.map((d, idx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span class="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Fallacy 0${idx + 1}</span>
                  <p class="text-xs text-slate-800 font-medium italic">"${d.claim}"</p>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Your Spoken Challenge:</span>
                    <p class="text-[11px] text-slate-600">${d.challenge}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 2: The Inquiry Dossier (Project Argus-Eye) (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: The Official Inquiry Brief • ${dossier.projectName} (35 mins)</h4>
                  <p class="text-xs text-slate-500">Examine witness depositions under EU AI Act standards and prepare targeted cross-examination challenges.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Hearing Dossier</span>
            </div>

            <!-- Controversy Summary -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1">
              <h5 class="font-bold text-indigo-950 text-xs sm:text-sm">Regulatory Allegation:</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${dossier.controversy}</p>
            </div>

            <!-- Witnesses Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Key Sworn Witnesses (Adopt a Deposition Role in Pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${witnesses.map(w => `
                  <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs sm:text-sm">${w.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">${w.stance}</span>
                    </div>
                    <p class="text-[11px] text-slate-700 leading-relaxed italic">"${w.testimony}"</p>
                    <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg">
                      <span class="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">Cross-Examination Flaw:</span>
                      <p class="text-[11px] text-rose-900">${w.vulnerability}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 3: Spoken Argumentation Clinic (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Spoken Regulatory Inquiry Clinic (25 mins)</h4>
                  <p class="text-xs text-slate-500">Deploy high-level B2 debate structures for legal and ethical hearings.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Argument Clinic</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${rules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h6 class="font-bold text-slate-900 text-xs">${r.title}</h6>
                  <p class="text-[11px] text-indigo-700 font-mono bg-indigo-50/60 p-1.5 rounded border border-indigo-100">${r.formula}</p>
                  <p class="text-[11px] text-slate-600 italic">${r.example}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 4: Oxford-Style Public Hearing (40 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Part 4: Public Hearing & Majority Commission Ruling (40 mins):</span>
              <span class="ml-1">The Tribunal convenes. Proponents and opponents cross-examine witnesses for 2 minutes each, followed by majority commissioner deliberations and delivery of the final binding verdict.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 3 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 4: Biometrics, Digital IDs & Passenger Journey (Archetype D) ---
    function renderAg3LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const paradox = content.borderParadox || {};
      const stations = content.stations || [];
      const treaty = content.treatyNegotiation || {};
      const parties = treaty.parties || [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m3card4.jpg'}" alt="${hero.title || 'Biometrics'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-purple-300 uppercase tracking-wider">${hero.badge || 'AG Module 3 • Session 4 • Interactive Stations'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype D • Interactive Stations & Negotiation Tournament'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">Stations Investigation & 3-Way Treaty Tournament</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Interactive Stations Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: The Contactless Border Paradox (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: The Contactless Border Paradox • Operational Briefing (20 mins)</h4>
                  <p class="text-xs text-slate-500">Unpack the tension between 10-second passenger throughput and permanent biometric cyber-vulnerability.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 shrink-0">Case Briefing</span>
            </div>

            <div class="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-2">
              <h5 class="font-black text-purple-950 text-xs sm:text-sm">${paradox.headline}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${paradox.context}</p>
              <div class="p-2.5 bg-white border border-purple-200 rounded-lg">
                <span class="text-[10px] font-bold text-purple-900 uppercase tracking-wider block mb-0.5">Core Operational Dilemma:</span>
                <p class="text-[11px] text-slate-700 font-medium">${paradox.dilemma}</p>
              </div>
            </div>
          </div>

          <!-- Part 2: Interactive Technology Stations (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Interactive Technology Stations (45 mins)</h4>
                  <p class="text-xs text-slate-500">Rotate through 3 specialized contactless engineering stations.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Station Rotation</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              ${stations.map(st => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-lg">${st.icon}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">${st.badge}</span>
                    </div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm">${st.title}</h5>
                    <div class="text-[10px] font-mono text-purple-700 bg-purple-50/70 px-2 py-1 rounded border border-purple-100">
                      <strong>Tech:</strong> ${st.coreTech}
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${st.keyInsight}</p>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Station Investigation Questions:</span>
                    <ul class="text-[11px] text-slate-700 space-y-1">
                      ${(st.discussionPrompts || []).map(dp => `<li>• ${dp}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 3: Tri-Party Treaty Negotiation (40 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Tri-Party Passenger Biometric Charter Tournament (40 mins)</h4>
                  <p class="text-xs text-slate-500">Negotiate a legally binding multilateral agreement establishing data sovereignty, retention caps, and opt-out rights.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Treaty Negotiation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${parties.map(p => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h6 class="font-black text-slate-900 text-xs sm:text-sm">${p.party}</h6>
                  <p class="text-[11px] text-slate-700 leading-relaxed"><strong>Priorities:</strong> ${p.priorities}</p>
                  <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                    <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Bargaining Chip:</span>
                    <p class="text-[11px] text-emerald-900">${p.bargainingChip}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 4: FE3 Final Rehearsal & Sign-Off (15 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Formative Evaluation 3 (FE3) Final Rehearsal:</span>
              <span class="ml-1">Conduct a 2-minute spoken pitch rehearsal with your FE3 partner. Confirm your chosen technical topic and slide outline with your teacher.</span>
            </div>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md shrink-0">✓ Ready for FE3 in Session 5</span>
          </div>
        </div>
      `;
    }
