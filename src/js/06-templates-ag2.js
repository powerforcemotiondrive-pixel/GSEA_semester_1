    /* ==========================================================================
       GENERAL ENGLISH (AG) • MODULE 2 LESSON CONTENT TEMPLATES (SESSIONS 1 TO 4)
       - Archetype A (Session 1): The Deep-Dive Crisis Workshop
       - Archetype C (Session 2): The Collaborative Design Sprint (Side-by-Side Visuals)
       - Archetype B (Session 3): The Media & Debate Lab
       - Archetype D (Session 4): Interactive Stations & Negotiation Tournament
       ========================================================================== */

    // --- SESSION 1: Extreme Weather & Urban Climate Resilience (Archetype A) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Extreme Weather & Urban Climate Resilience'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m2card1.jpg'}" alt="${hero.title || 'Extreme Weather'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-rose-300 uppercase tracking-wider">${hero.badge || 'AG Module 2 • Session 1 • Crisis Workshop'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Extreme Weather & Urban Climate Resilience'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype A • Deep-Dive Crisis Workshop'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">Emergency Taskforce Simulation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Spoken Interaction Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: The Emergency Weather Dossier (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 font-black text-xs flex items-center justify-center border border-rose-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: The Emergency Weather Dossier & Threat Analysis (25 mins)</h4>
                  <p class="text-xs text-slate-500">Scan regional alerts, evaluate infrastructure vulnerabilities, and rank the top civic hazards.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 shrink-0">${dossier.alertLevel || 'RED ALERT'}</span>
            </div>

            <!-- Incident Overview Card -->
            <div class="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="font-black text-rose-900 text-xs sm:text-sm">${dossier.incidentTitle || 'Severe Convective Supercell'}</h5>
                <span class="text-[11px] font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">${dossier.timeframe || 'T-minus 3 Hours'}</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">${dossier.summary || ''}</p>
            </div>

            <!-- Threat Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Acute Threat Assessment Grid (Rank 1 to 6 in pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${threats.map(t => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-rose-300 transition-colors">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[11px] flex items-center justify-center">${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">${t.sector}</span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-xs mb-1">${t.title}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${t.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Spoken Prompt -->
            <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
              <span class="text-base shrink-0">🗣️</span>
              <p><strong>Pair Negotiation Task:</strong> With your partner, rank Threats A to F in order of intervention urgency. You have emergency funding to address only THREE immediately. Justify your choices using phrases of probability and risk (<em>"If we fail to secure..., the knock-on impact will be..."</em>).</p>
            </div>
          </div>

          <!-- Part 2: Crisis Taskforce Simulation (45 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Civic Emergency Taskforce Simulation (45 mins)</h4>
                  <p class="text-xs text-slate-500">Adopt departmental roles, manage competing civic interests, and respond to live crisis injects.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Multi-Role Simulation</span>
            </div>

            <!-- Roles Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Taskforce Departmental Roles (Groups of 3 or 4)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
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

            <!-- Injects Timeline -->
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

          <!-- Part 3: Live Spoken Press Conference (30 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">03</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Live Spoken Press Briefing & Media Scrutiny (30 mins)</h4>
                  <p class="text-xs text-slate-500">Deliver an authoritative public broadcast and defend decisions against investigative journalists.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Live Spoken Q&A</span>
            </div>

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
              <h5 class="font-bold text-emerald-900 text-xs sm:text-sm">${press.title || 'Live Emergency Press Briefing'}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${press.instructions || ''}</p>
            </div>

            <!-- Tough Reporter Questions -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Investigative Reporter Questions (Classmate Q&A)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${(press.reporterQuestions || []).map((q, idx) => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
                    <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">Q${idx + 1}</span>
                    <p class="text-xs text-slate-800 italic leading-relaxed">"${q}"</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 4: Language Clinic & Debrief (20 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Spoken Language Clinic:</span>
              <span class="ml-1">Review pronunciation of key vocabulary (<em>resilience, infrastructure, containment, vulnerable</em>) and verify your FE2 speaking targets.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 1 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 2: The 15-Minute Resilient City Blueprint (Archetype C) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'The 15-Minute Resilient City Blueprint'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m2card2.jpg'}" alt="${hero.title || 'Urban Showcase'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-sky-300 uppercase tracking-wider">${hero.badge || 'AG Module 2 • Session 2 • Design Sprint'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'The 15-Minute Resilient City Blueprint'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype C • Collaborative Design Sprint'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">Visual Analysis & €50M Urban Redesign Sprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Visual & Collaborative Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Visual Photo Analysis (Option 1 Side-by-Side with Interactive Hotspots) (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 font-black text-xs flex items-center justify-center border border-sky-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: Urban Showcase • Side-by-Side Visual Photo Analysis (35 mins)</h4>
                  <p class="text-xs text-slate-500">Analyze contrasting urban typologies, examine spatial design elements, and practice precise B2 descriptive vocabulary.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 shrink-0">Photo Investigation</span>
            </div>

            <!-- Comparative Photo Display Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <!-- Photo A: Car Sprawl -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="relative">
                  <img src="${photoA.image || 'images/urban_car_sprawl.jpg'}" alt="Car Sprawl" class="w-full h-56 sm:h-64 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
                  <div class="absolute top-3 left-3 bg-rose-900/90 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                    Model A: Car-Centric Sprawl
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm mb-1">${photoA.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-3">${photoA.caption}</p>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Spatial Hotspots (Click to view vocabulary):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      ${(photoA.hotspots || []).map(h => `
                        <button type="button" onclick="document.getElementById('hotspot-desc-a-${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-rose-800 border border-rose-200 hover:bg-rose-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 ${h.label}
                        </button>
                      `).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      ${(photoA.hotspots || []).map(h => `
                        <div id="hotspot-desc-a-${h.id}" class="hidden p-2.5 bg-rose-50/80 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed">
                          <strong>${h.label}:</strong> ${h.desc}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Spatial Vocabulary:</span> <em>dominated by, bisected by, impermeable asphalt, pedestrian vacuum, traffic gridlock.</em>
                  </div>
                </div>
              </div>

              <!-- Photo B: Superblock -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col">
                <div class="relative">
                  <img src="${photoB.image || 'images/urban_superblock.jpg'}" alt="Superblock" class="w-full h-56 sm:h-64 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
                  <div class="absolute top-3 left-3 bg-emerald-900/90 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                    Model B: European Superblock
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="font-black text-slate-900 text-xs sm:text-sm mb-1">${photoB.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed mb-3">${photoB.caption}</p>
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Spatial Hotspots (Click to view vocabulary):</div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                      ${(photoB.hotspots || []).map(h => `
                        <button type="button" onclick="document.getElementById('hotspot-desc-b-${h.id}').classList.toggle('hidden')" class="px-2.5 py-1 text-[11px] font-bold bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 rounded-md transition-colors cursor-pointer text-left">
                          📍 ${h.label}
                        </button>
                      `).join('')}
                    </div>
                    <!-- Hotspots Descriptions Container -->
                    <div class="space-y-1.5">
                      ${(photoB.hotspots || []).map(h => `
                        <div id="hotspot-desc-b-${h.id}" class="hidden p-2.5 bg-emerald-50/80 border border-emerald-200 rounded-lg text-[11px] text-emerald-900 leading-relaxed">
                          <strong>${h.label}:</strong> ${h.desc}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-600">
                    <span class="font-bold text-slate-800">Spatial Vocabulary:</span> <em>reclaimed public realm, dappled shade canopy, permeable paving, active frontage, human-scale.</em>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3-Step Spoken Protocol -->
            <div class="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-2.5">
              <h5 class="font-bold text-sky-950 text-xs sm:text-sm flex items-center gap-1.5">
                <span>🗣️</span> 3-Stage Spoken Observation Protocol (Pair Discussion)
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${protocol.map(p => `
                  <div class="p-3 bg-white border border-sky-200 rounded-lg space-y-1">
                    <span class="text-[10px] font-black text-sky-800 block">${p.step}</span>
                    <p class="text-[11px] text-slate-700 leading-relaxed">${p.prompt}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: €50M Collaborative Design Sprint (55 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: Collaborative Urban Design Sprint (${sprint.budget || '€50,000,000'}) (55 mins)</h4>
                  <p class="text-xs text-slate-500">Transform a congested corridor into a 15-minute resilient district while managing budget constraints and stakeholder pushback.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">${sprint.budget} Budget</span>
            </div>

            <!-- Corridor Briefing -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Project Target Corridor:</span>
              <h5 class="font-black text-slate-900 text-xs sm:text-sm">${sprint.corridorName}</h5>
              <p class="text-[11px] text-slate-600 mt-1">Your urban planning team has <strong>€50,000,000</strong> to allocate across the 5 regeneration categories below. You cannot fund everything at 100%. Negotiate the optimal spending breakdown.</p>
            </div>

            <!-- Categories Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Available Regeneration Interventions (Select & Budget)</h5>
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

            <!-- Stakeholder Defense -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Stakeholder Pushback & Objection Clinic (Prepare Counter-Arguments)</h5>
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

          <!-- Part 3: Spoken Blueprint Pitch & Review (30 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Spoken Blueprint Pitch (Part 3):</span>
              <span class="ml-1">Each planning duo delivers a 3-minute spoken proposal to the City Council. The class votes on the most resilient design.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 2 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 3: Environmental Ethics & The Public Inquiry Hearing (Archetype B) ---
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Environmental Ethics & The Public Inquiry Hearing'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m2card3.jpg'}" alt="${hero.title || 'Environmental Ethics'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${hero.badge || 'AG Module 2 • Session 3 • Debate Lab'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Environmental Ethics & The Public Inquiry Hearing'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype B • Media & Debate Lab'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Oxford-Style Public Inquiry Hearing</span>
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
                  <p class="text-xs text-slate-500">Practice swift, evidence-based refutation against common infrastructure fallacies.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Warm-Up Refutation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${devils.map((d, idx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span class="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Claim 0${idx + 1}</span>
                  <p class="text-xs text-slate-800 font-medium italic">"${d.claim}"</p>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Your Spoken Challenge:</span>
                    <p class="text-[11px] text-slate-600">${d.challenge}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 2: The Val-d'Or Public Inquiry Dossier (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">02</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 2: The Inquiry Dossier • ${dossier.projectName || 'Val-d\'Or Bypass'} (35 mins)</h4>
                  <p class="text-xs text-slate-500">Examine witness statements, evaluate economic vs ecological arguments, and spot cross-examination weaknesses.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">Hearing Dossier</span>
            </div>

            <!-- Controversy Summary -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1">
              <h5 class="font-bold text-indigo-950 text-xs sm:text-sm">The Strategic Dilemma:</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${dossier.controversy}</p>
            </div>

            <!-- Witnesses Grid -->
            <div>
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Key Witness Deponents (Adopt a Role in Pairs)</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${witnesses.map(w => `
                  <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex items-center justify-between">
                      <h6 class="font-black text-slate-900 text-xs sm:text-sm">${w.role}</h6>
                      <span class="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">${w.stance}</span>
                    </div>
                    <p class="text-[11px] text-slate-700 leading-relaxed italic">"${w.testimony}"</p>
                    <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg">
                      <span class="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">Cross-Examination Vulnerability:</span>
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
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Spoken Argumentation & Inquiry Clinic (25 mins)</h4>
                  <p class="text-xs text-slate-500">Deploy high-level B2 debate structures for formal hearings.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">Debate Clinic</span>
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

          <!-- Part 4: Oxford-Style Hearing Simulation (40 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Part 4: Public Inquiry Hearing & Verdict (40 mins):</span>
              <span class="ml-1">The Commission convenes. Proponents and opponents deliver 2-minute testimonies, cross-examine witnesses, and vote on the final routing verdict.</span>
            </div>
            <span class="text-slate-500 font-semibold shrink-0">Session 3 Complete • 120 mins</span>
          </div>
        </div>
      `;
    }

    // --- SESSION 4: Airport Biodiversity & Ecological Coexistence (Archetype D) ---
    function renderAg2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const paradox = content.meadowParadox || {};
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Airport Biodiversity & Ecological Coexistence'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/ag_m2card4.jpg'}" alt="${hero.title || 'Airport Biodiversity'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-teal-300 uppercase tracking-wider">${hero.badge || 'AG Module 2 • Session 4 • Interactive Stations'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Airport Biodiversity & Ecological Coexistence'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Archetype D • Interactive Stations & Negotiation Tournament'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Format:</span>
                <span class="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">Stations Investigation & 3-Way Treaty Tournament</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-700">Total Duration:</span>
                <span>120 Minutes (Interactive Stations Focus)</span>
              </div>
            </div>
          </div>

          <!-- Part 1: The Meadow Paradox (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-black text-xs flex items-center justify-center border border-teal-200">01</span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">Part 1: The Meadow Paradox • Operational Briefing (20 mins)</h4>
                  <p class="text-xs text-slate-500">Unpack Europe's accidental nature sanctuaries and the bird-strike safety dilemma.</p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">Case Briefing</span>
            </div>

            <div class="p-4 bg-teal-50/60 border border-teal-200 rounded-xl space-y-2">
              <h5 class="font-black text-teal-950 text-xs sm:text-sm">${paradox.headline}</h5>
              <p class="text-xs text-slate-700 leading-relaxed">${paradox.context}</p>
              <div class="p-2.5 bg-white border border-teal-200 rounded-lg">
                <span class="text-[10px] font-bold text-teal-900 uppercase tracking-wider block mb-0.5">Core Operational Dilemma:</span>
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
                  <p class="text-xs text-slate-500">Rotate through 3 specialized airfield eco-engineering solutions.</p>
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
                    <div class="text-[10px] font-mono text-indigo-700 bg-indigo-50/70 px-2 py-1 rounded border border-indigo-100">
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
                  <h4 class="font-bold text-slate-900 text-sm">Part 3: Tri-Party Land-Use Treaty Tournament (40 mins)</h4>
                  <p class="text-xs text-slate-500">Negotiate a legally binding zoning treaty for ${treaty.totalArea || '500 Hectares'}.</p>
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

          <!-- Part 4: FE2 Readiness & Treaty Sign-Off (15 mins) -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Formative Evaluation 2 (FE2) Alignment:</span>
              <span class="ml-1">Review the Module 2 presentation criteria with your teacher. Confirm your FE2 partner and chosen technical topic.</span>
            </div>
            <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md shrink-0">✓ Ready for FE2 in Session 5</span>
          </div>
        </div>
      `;
    }
