    function renderAas2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const forcesPrinciples = content.forcesPrinciples || {};
      const forces = forcesPrinciples.forces || [];
      const grammar = content.grammarClinic || {};
      const axesGame = content.axesGame || {};
      const axes = axesGame.axes || [];
      const roleplayCards = axesGame.roleplayCards || [];
      const stall = content.stallScenario || {};
      const closing = content.closingReview || {};

      const savedNote = (typeof window.getLessonNote === 'function') ? (window.getLessonNote('s1_m2_at_s1_notes') || '') : '';

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Canonical Action Bar (Rule 1.T) -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Aerodynamics &amp; Flight Principles</h3>
            </div>
            <a href="docs/GSEA_S1_M2_AT_S1_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="relative bg-slate-900">
              <img src="${hero.image || 'images/aas_m2card1.jpg'}" alt="${hero.title || 'Aerodynamics & Flight Principles'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/aas_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">FLIGHT PHYSICS &amp; AERODYNAMIC CONTROLS</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aerodynamics &amp; Flight Principles'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'The Four Forces of Flight, The Three Axes &amp; Aerodynamic Control Surfaces'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Flight Test Engineer &amp; ATCO</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900 font-mono">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Personal Notes Auto-Save Card -->
          <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl shadow-2xs space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wide font-mono">Personal Lesson Notes &amp; Spoken Reflections</span>
              <span class="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Auto-Saved Locally</span>
            </div>
            <textarea id="lesson-note-s1-m2-at-s1" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_at_s1_notes', this.value)" placeholder="Type your personal observations, newly mastered aerodynamic terms, and speaking self-reflection here..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-amber-400 focus:outline-none transition-all leading-relaxed">${savedNote}</textarea>
          </div>

          <!-- Part 1: Aviation News & Entry Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Principles Warm-Up'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up examining current aerospace headlines and testing foundational aerodynamic concepts.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Aviation News Prompts -->
            <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-2 shadow-2xs">
              <div class="text-[11px] font-bold text-slate-900 uppercase tracking-wider font-mono">
                Weekly Aviation Headlines &amp; Aerodynamic Innovations
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-slate-700 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid with Communicative Sentence Stems (Rule 1.V) -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800 font-mono uppercase tracking-wide">${(opening.diagnostic && opening.diagnostic.title) || 'Aerodynamics Vocabulary Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || 'Discuss each question in pairs before revealing the operational distinction:'}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between shadow-2xs">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Diagnostic Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1 leading-snug">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 border-l-3 border-l-amber-400 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-2xs mb-2">
                        <span class="font-bold text-slate-900 block font-mono text-[10px] uppercase">Operational Explanation:</span>
                        ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-${q.id}" onclick="window.toggleDiagnosticAnswer ? window.toggleDiagnosticAnswer(${q.id}) : document.getElementById('diagnostic-ans-${q.id}').classList.toggle('hidden')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Operational Distinction</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: Video Analysis: The Physics of Flight -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 2: Video Lab: The Four Forces of Flight in Action</h4>
                  <p class="text-[11px] text-slate-500">Video-guided listening analysis exploring aerodynamic equilibrium, vector opposition, and pressure differentials.</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Video Analysis</span>
            </div>

            <!-- Video Player (16:9 Frame styled like Teachers Hub Overview) -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide font-mono">Documentary Video: The Four Forces of Flight Simply Explained</span>
                <span class="text-[10px] font-mono text-slate-500">Acoustic Analysis &bull; FAA / Aeronautics</span>
              </div>
              <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
                <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/5ltjFEei3AI" title="The Four Forces of Flight Simply Explained" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div class="flex items-center justify-between pt-1 text-[11px]">
                <span class="text-[10px] text-slate-500 font-mono">Focus: Watch how lift, weight, thrust, and drag achieve equilibrium in steady flight.</span>
                <a href="https://www.youtube.com/watch?v=5ltjFEei3AI" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-bold text-[11px] inline-flex items-center gap-1">
                  <span>Watch on YouTube</span> ↗
                </a>
              </div>
            </div>

            <!-- Listening Checkpoints -->
            <div class="space-y-3 pt-2">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wide">Video Listening Checkpoints (Work in Pairs):</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="p-3 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Checkpoint 01</span>
                  <div class="text-xs font-bold text-slate-900">Static Pressure Differential</div>
                  <p class="text-[11.5px] text-slate-600 leading-snug">How does air acceleration over the curved upper surface create net upward force?</p>
                  <div id="video-cp-1" class="hidden text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 mt-1">
                    <strong>Acoustic Key:</strong> Faster air over the upper camber creates lower static pressure, producing upward suction.
                  </div>
                  <button type="button" onclick="document.getElementById('video-cp-1').classList.toggle('hidden')" class="no-print text-[10.5px] font-bold text-amber-600 hover:text-amber-800 cursor-pointer pt-1">
                    Toggle Explanation &rarr;
                  </button>
                </div>

                <div class="p-3 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Checkpoint 02</span>
                  <div class="text-xs font-bold text-slate-900">Cruise Equilibrium</div>
                  <p class="text-[11.5px] text-slate-600 leading-snug">In straight-and-level unaccelerated flight, which forces are equal and opposite?</p>
                  <div id="video-cp-2" class="hidden text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 mt-1">
                    <strong>Acoustic Key:</strong> Lift exactly equals Weight, and Thrust exactly equals Drag.
                  </div>
                  <button type="button" onclick="document.getElementById('video-cp-2').classList.toggle('hidden')" class="no-print text-[10.5px] font-bold text-amber-600 hover:text-amber-800 cursor-pointer pt-1">
                    Toggle Explanation &rarr;
                  </button>
                </div>

                <div class="p-3 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Checkpoint 03</span>
                  <div class="text-xs font-bold text-slate-900">Speed-Drag Inversion</div>
                  <p class="text-[11.5px] text-slate-600 leading-snug">What happens to induced drag as airspeed drops toward minimum flying speed?</p>
                  <div id="video-cp-3" class="hidden text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 mt-1">
                    <strong>Acoustic Key:</strong> Induced drag increases rapidly at low speeds because high AoA is needed to maintain lift.
                  </div>
                  <button type="button" onclick="document.getElementById('video-cp-3').classList.toggle('hidden')" class="no-print text-[10.5px] font-bold text-amber-600 hover:text-amber-800 cursor-pointer pt-1">
                    Toggle Explanation &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 3: Technical Reading & Gap-Fill Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 3: Airfoil Geometry &amp; Technical Gap-Fill Clinic</h4>
                  <p class="text-[11px] text-slate-500">Interactive gap-fill texts with revealable answers covering Bernoulli's principle, camber, chord line, and drag dynamics.</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Reading &amp; Syntax</span>
            </div>

            <!-- Gap-Fill 1 -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 shadow-2xs">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Gap-Fill Text 1: The Aerodynamic Mechanism of Lift</h5>
                <span class="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">Word Bank: [ camber • chord line • relative wind • lower static pressure • boundary layer • angle of attack • downwash ]</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                An aircraft wing is shaped as an aerodynamic airfoil with an asymmetrical curve known as the <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">camber</strong>. The straight reference line connecting the leading edge to the trailing edge is designated the <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">chord line</strong>. As the aircraft moves forward, oncoming airflow approaches the wing as the <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">relative wind</strong>. Due to the upper curve, air accelerates over the top surface, generating a zone of <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">lower static pressure</strong>. Simultaneously, the trailing edge deflects air downward as <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">downwash</strong>. In smooth flight, air adheres tightly in a microscopic <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">boundary layer</strong>. Exceeding the critical <strong class="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">angle of attack</strong> destroys this layer and causes an aerodynamic stall.
              </p>
            </div>

            <!-- Gap-Fill 2 -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 shadow-2xs">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Gap-Fill Text 2: Flight Equilibrium &amp; In-Flight Maneuvers</h5>
                <span class="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">Word Bank: [ equilibrium • differential deflection • roll • rudder • coordinated turn • elevator ]</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                In unaccelerated straight-and-level flight, the four forces achieve perfect <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">equilibrium</strong>. To initiate a bank, the pilot deflects the sidestick, causing <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">differential deflection</strong> of the ailerons, producing <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">roll</strong> around the longitudinal axis. The pilot must apply coordinated pressure to the <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">rudder</strong> to counteract adverse yaw and ensure a smooth <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">coordinated turn</strong>. Backpressure on the control column commands the <strong class="text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">elevator</strong> to increase pitch, compensating for the loss of vertical lift during the bank.
              </p>
            </div>

            <!-- Cause-and-Effect Grammar Table -->
            <div class="space-y-2 pt-1">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wide">Cause &amp; Effect Linguistic Formulas in Flight Physics</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1 shadow-2xs">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Formula 1: Zero Conditional (Scientific Invariant)</span>
                  <div class="text-xs font-bold text-slate-900">If / When + Present Simple &rarr; Present Simple</div>
                  <p class="text-[11.5px] text-slate-600 italic">"If angle of attack exceeds 16 degrees, the boundary layer separates."</p>
                </div>
                <div class="p-3 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1 shadow-2xs">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Formula 2: First Conditional (Operational Cause &amp; Effect)</span>
                  <div class="text-xs font-bold text-slate-900">Unless / If + Present Simple &rarr; Will / Must + Verb</div>
                  <p class="text-[11.5px] text-slate-600 italic">"Unless the pilot pushes the nose forward, the aircraft will stall."</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 4: Kinesthetic Blackboard Lab: 3-Person "Draw, Label & Pitch" Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 4: The Blackboard Vector Lab (Group of 3 Challenge)</h4>
                  <p class="text-[11px] text-slate-500">Collaborative board activity: 3-student teams draw an aircraft, label force vectors and 3 axes, and deliver a 60-second spoken flight control pitch.</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Board Lab &bull; Speaking</span>
            </div>

            <!-- Group of 3 Roles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                <span class="text-[10px] font-mono font-bold text-amber-700 uppercase">STUDENT 1 (Board)</span>
                <div class="text-xs font-bold text-slate-900">The Airframe &amp; Forces Draftsperson</div>
                <p class="text-[11.5px] text-slate-600 leading-snug">Draws a clean aircraft profile and wing cross-section on the board. Correctly places the 4 force vectors (Lift &uarr;, Weight &darr;, Thrust &rarr;, Drag &larr;) and identifies CG vs. CP.</p>
              </div>

              <div class="p-3.5 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                <span class="text-[10px] font-mono font-bold text-amber-700 uppercase">STUDENT 2 (Board)</span>
                <div class="text-xs font-bold text-slate-900">The Axes &amp; Controls Specialist</div>
                <p class="text-[11.5px] text-slate-600 leading-snug">Draws the 3 orthogonal axes (Longitudinal, Lateral, Vertical) through the CG and labels primary control surfaces: Ailerons (Roll), Elevators (Pitch), and Rudder (Yaw).</p>
              </div>

              <div class="p-3.5 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-1.5 shadow-2xs">
                <span class="text-[10px] font-mono font-bold text-amber-700 uppercase">STUDENT 3 (Floor)</span>
                <div class="text-xs font-bold text-slate-900">The Flight Test Presenter (60s Pitch)</div>
                <p class="text-[11.5px] text-slate-600 leading-snug">Delivers a 60-second spoken briefing to the class explaining how the aircraft responds when thrust exceeds drag, and how a coordinated bank is initiated.</p>
              </div>
            </div>

            <!-- Student B / Peer Observer Active-Listening Checklist (Rule 1.T) -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 shadow-2xs">
              <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Student B / Peer Observer Active-Listening Scoring Rubric</h5>
                <span class="text-[10px] font-mono text-slate-500">Peer Evaluation Standard</span>
              </div>
              <p class="text-xs text-slate-600">Seated students evaluate the board team against these 4 operational benchmarks:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <div><strong>1. Vector Precision:</strong> Weight is correctly anchored at CG, and Lift originates from CP.</div>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <div><strong>2. Control Mapping:</strong> Correct association between Ailerons/Roll, Elevator/Pitch, and Rudder/Yaw.</div>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <div><strong>3. Spoken Fluency:</strong> Presenter delivers the 60-second briefing without relying on written notes.</div>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <div><strong>4. Target Linkers:</strong> Accurate deployment of cause-and-effect connectors (<em>results in, leads to, whereas</em>).</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 5: The Lift Masterclass & Stall Recovery Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 5: The Lift Masterclass &amp; Stall Recovery Simulation</h4>
                  <p class="text-[11px] text-slate-500">Spoken presentation masterclass explaining lift generation in plain B2 English followed by crew communication during an aerodynamic stall warning.</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Masterclass &bull; Case Study</span>
            </div>

            <!-- The Lift Masterclass Box -->
            <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-2 shadow-2xs">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">The Lift Masterclass: How Wings Actually Work (Spoken Briefing)</h5>
                <span class="text-[10px] font-mono text-slate-500">Bernoulli &amp; Newton Combined</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                Work in pairs to deliver a 90-second spoken explanation of lift for a trainee controller using target stems:
                <em>"Due to the curved upper camber, airflow must accelerate, creating lower static pressure... Simultaneously, the trailing edge directs downwash downward, causing an equal and opposite upward reaction..."</em>
              </p>
              <div id="lift-script-ans" class="hidden p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic leading-relaxed">
                "Generating aerodynamic lift requires two complementary physical mechanisms. First, an airplane wing has a curved upper camber. When relative wind approaches the leading edge, air flowing over the curved top must accelerate compared to the flatter lower surface. According to Bernoulli’s principle, faster-moving air creates lower static pressure. This pressure difference creates a net upward suction force. Second, as the wing travels forward with a positive angle of attack, the lower surface deflects oncoming air downward. In accordance with Newton’s third law of motion, for every action there is an equal and opposite reaction: deflecting thousands of tons of air downward results in an equal upward force on the aircraft. Together, pressure differentials and downwash produce the total lift needed to overcome the aircraft's weight."
              </div>
              <button type="button" onclick="document.getElementById('lift-script-ans').classList.toggle('hidden')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600 hover:text-amber-800 cursor-pointer pt-1">
                <span>Reveal Model Spoken Masterclass Script</span> &rarr;
              </button>
            </div>

            <!-- Operational Stall Scenario -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 shadow-2xs">
              <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Flight Deck Scenario: High-Altitude Stall Recovery &amp; Tactical Crew Callouts</h5>
                <span class="text-[10px] font-mono text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Incident Analysis</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                A twin-engine transport at FL370 encounters severe clear-air turbulence and a sudden 30-knot headwind loss. Autothrottles advance to maximum continuous thrust, but airspeed decays from Mach 0.78 to Mach 0.71. The autopilot trims nose-up to maintain altitude until heavy aerodynamic buffeting begins and the primary stick shaker activates.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <strong class="text-slate-900 block font-mono text-[11px]">First Officer (Pilot Flying):</strong>
                  <p class="text-slate-600 leading-relaxed">Disconnect autopilot. Push sidestick forward below horizon to reduce angle of attack. Call out: <em>"STALL! DISCONNECTING AUTOPILOT! PUSHING NOSE DOWN!"</em></p>
                </div>
                <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <strong class="text-slate-900 block font-mono text-[11px]">Captain (Pilot Monitoring):</strong>
                  <p class="text-slate-600 leading-relaxed">Verify pitch attitude decreases. Verify wings level using rudder pedals. Advance thrust smoothly once buffet stops. Call out: <em>"PITCH NOSE DOWN CONFIRMED. AIRSPEED INCREASING."</em></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 6: Aerodynamics Taboo & 10-Question Mastery Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Aerodynamics Taboo &amp; 10-Question Final Mastery Challenge</h4>
                  <p class="text-[11px] text-slate-500">End-of-class communicative game (explaining terms without taboo words) and interactive 10-question multiple-choice mastery challenge.</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Games &bull; Quiz</span>
            </div>

            <!-- Taboo Game Cards -->
            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wide">Aerodynamics Taboo Cards (Describe Without Using the Forbidden Words!):</h5>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center text-xs">
                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 1</div>
                  <div class="font-black text-slate-900">STALL</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Drop • Speed • Crash</div>
                </div>

                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 2</div>
                  <div class="font-black text-slate-900">ANGLE OF ATTACK</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Pitch • Angle • Chord</div>
                </div>

                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 3</div>
                  <div class="font-black text-slate-900">RUDDER</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Tail • Turn • Yaw</div>
                </div>

                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 4</div>
                  <div class="font-black text-slate-900">INDUCED DRAG</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Lift • Wingtip • Slow</div>
                </div>

                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 5</div>
                  <div class="font-black text-slate-900">CAMBER</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Curve • Shape • Airfoil</div>
                </div>

                <div class="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Card 6</div>
                  <div class="font-black text-slate-900">AILERONS</div>
                  <div class="text-[9px] text-rose-600 font-bold uppercase">Forbidden:</div>
                  <div class="text-[10px] text-slate-500">Roll • Bank • Edge</div>
                </div>
              </div>
            </div>

            <!-- 10-Question Mastery Quiz Grid -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wide">10-Question Aerodynamics Mastery Challenge:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                ${[
                  { id: 1, q: "In unaccelerated steady-state level cruise, what is the vector relationship?", a: "Lift equals Weight, and Thrust equals Drag." },
                  { id: 2, q: "Angle of Attack is mathematically measured between which two lines?", a: "The wing's chord line and the oncoming relative airflow." },
                  { id: 3, q: "As aircraft forward airspeed accelerates, what happens to induced drag?", a: "Induced drag decreases sharply, while parasitic drag surges." },
                  { id: 4, q: "Which control surface controls pitch around the lateral axis?", a: "The elevators mounted on the horizontal stabilizer." },
                  { id: 5, q: "How do upward-curving winglets improve aircraft fuel efficiency?", a: "By diffusing high-pressure wingtip vortices, reducing induced drag by up to 5%." },
                  { id: 6, q: "Roll motion around the longitudinal axis is primarily produced by:", a: "Differential deflection of the trailing-edge ailerons." },
                  { id: 7, q: "An aerodynamic stall is triggered whenever an airfoil exceeds its:", a: "Critical angle of attack, causing boundary layer separation." },
                  { id: 8, q: "What primary cockpit input counteracts adverse yaw during a turn?", a: "Coordinated rudder pedal deflection in the direction of bank." },
                  { id: 9, q: "What is the primary operational effect of deploying flight spoilers in air?", a: "Dumps aerodynamic lift and increases drag for controlled descents." },
                  { id: 10, q: "What is the mandatory first pilot action upon stick-shaker stall activation?", a: "Apply forward sidestick pressure to reduce angle of attack below critical limit." }
                ].map(item => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 flex flex-col justify-between shadow-2xs">
                    <div>
                      <span class="text-[10px] font-mono font-bold text-slate-500 uppercase">Question ${item.id < 10 ? '0' + item.id : item.id}</span>
                      <p class="font-bold text-slate-900 mt-0.5 leading-snug">${item.q}</p>
                    </div>
                    <div>
                      <div id="quiz-ans-${item.id}" class="hidden p-2 bg-white border border-slate-200 border-l-3 border-l-emerald-500 rounded text-[11px] text-slate-700 mt-1">
                        &check; <strong>Operational Answer:</strong> ${item.a}
                      </div>
                      <button type="button" onclick="document.getElementById('quiz-ans-${item.id}').classList.toggle('hidden')" class="no-print text-[10.5px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer pt-0.5">
                        Toggle Answer &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Quick Link to Revision Flashcards -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <span class="text-[11px] text-slate-600">Review all 18 aerodynamic vocabulary terms and practice pronunciation flashcards.</span>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-2xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const videoLab = content.videoLab || {};
      const diagramLabeling = content.diagramLabeling || {};
      const externalParts = diagramLabeling.externalParts || [];
      const blackboardChallenge = diagramLabeling.blackboardChallenge || {};
      const gapFillClinic = content.gapFillClinic || {};
      const errorHunter = content.errorHunter || {};
      const closing = content.closingReview || {};
      const tabooCards = closing.tabooCards || [];
      const masteryQuiz = closing.masteryQuiz || [];

      const savedNote = (typeof window.getLessonNote === 'function') ? (window.getLessonNote('s1_m2_at_s2_notes') || '') : '';

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Canonical Action Bar (Rule 1.T) -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Aircraft Anatomy: Structure &amp; Systems'}</h3>
            </div>
            <a href="docs/GSEA_S1_M2_AT_S2_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div class="relative bg-slate-900">
              <img src="${hero.image || 'images/aas_m2card2.jpg'}" alt="${hero.title || 'Aircraft Anatomy'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/aas_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">AIRFRAME STRUCTURES &amp; SYSTEMS ANATOMY</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aircraft Anatomy: Structure &amp; Systems'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'External Airframe Components, Flight Deck Controls &amp; Pre-Flight Walkaround Inspections'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Line Maintenance Engineer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900 font-mono">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Personal Notes Auto-Save Card -->
          <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl shadow-2xs space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wide font-mono">Personal Lesson Notes &amp; Spoken Reflections</span>
              <span class="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Auto-Saved Locally</span>
            </div>
            <textarea id="lesson-note-s1-m2-at-s2" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_at_s2_notes', this.value)" placeholder="Type your personal observations, newly mastered anatomical terms, and speaking self-reflection here..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-amber-400 focus:outline-none transition-all leading-relaxed">${savedNote}</textarea>
          </div>

          <!-- Part 1: Aviation News & Entry Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News &amp; Session 1 Spot-Check'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up examining maintenance headlines and spot-checking aerodynamic concepts with sentence stems.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl space-y-2 shadow-2xs">
              <div class="text-[11px] font-bold text-slate-900 uppercase tracking-wider font-mono">
                Weekly Maintenance &amp; Structural News Headlines
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-slate-700 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Grid with Spoken Sentence Stems (Rule 1.V) -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800 font-mono uppercase tracking-wide">${(opening.diagnostic && opening.diagnostic.title) || 'Aerodynamics Review Diagnostic'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || 'Discuss in pairs using the spoken sentence stems before revealing:'}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between shadow-2xs">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Diagnostic Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1 leading-snug">${q.q}</p>
                      ${q.stem ? `<p class="text-[11px] font-mono text-amber-800 bg-amber-50/80 p-1.5 rounded border border-amber-200/60 mt-1.5">${q.stem}</p>` : ''}
                    </div>
                    <div>
                      <div id="diag-ans-s2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 border-l-3 border-l-amber-400 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-2xs mb-2">
                        <span class="font-bold text-slate-900 block font-mono text-[10px] uppercase">Operational Answer:</span>
                        ${q.answer}
                      </div>
                      <button type="button" onclick="document.getElementById('diag-ans-s2-${q.id}').classList.toggle('hidden')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Operational Distinction</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: Interactive Video Lab (Noticeboard Half-Width Style) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${videoLab.title || 'Activity 2: Interactive Video Lab — Modern Aircraft Anatomy &amp; Systems'}</h4>
                  <p class="text-[11px] text-slate-500">${videoLab.summary || 'Video analysis of commercial aircraft control surfaces and hydraulic redundancy alongside an operational debrief card.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Video Noticeboard</span>
            </div>

            ${renderActivityInstructions(videoLab, theme)}

            <!-- 2-Column Noticeboard Layout (Half-Width Player on Left, Debrief on Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              <!-- Left Column: Video Player (Half Width) -->
              <div class="lg:col-span-7 flex flex-col space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 font-mono">
                    AIRFRAME SYSTEMS • FLIGHT CONTROLS
                  </span>
                  <span class="text-[10.5px] text-slate-500 font-mono">Triple Hydraulic Redundancy</span>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  ${videoLab.videoTitle || 'How a Jet Airliner Works: Airframe, Flight Controls &amp; Systems'}
                </h4>
                <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
                  <iframe class="w-full h-full" src="${videoLab.videoUrl || 'https://www.youtube.com/embed/NZLbTuBDhJg'}" title="How a Jet Airliner Works: Airframe, Flight Controls &amp; Systems" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="flex items-center justify-between pt-1 text-[11px]">
                  <span class="text-[10px] text-slate-400 font-mono">${videoLab.channel || 'Animagraffs • 3D Aircraft Systems &amp; Engineering'}</span>
                  <a 
                    href="${videoLab.youtubeUrl || 'https://www.youtube.com/watch?v=NZLbTuBDhJg'}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-xs font-bold text-slate-800 hover:text-amber-600 inline-flex items-center gap-1 underline transition-colors cursor-pointer"
                    title="Watch on YouTube ↗"
                  >
                    <span>Watch on YouTube</span>
                    <span class="text-[10px]">&rarr;</span>
                  </a>
                </div>
              </div>

              <!-- Right Column: Operational Debrief & Guided Questions -->
              <div class="lg:col-span-5 flex flex-col justify-between space-y-3.5 bg-slate-50/90 rounded-xl p-4 sm:p-5 border border-slate-200">
                <div class="space-y-3">
                  <div class="border-b border-slate-200 pb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Operational Synopsis</span>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">Control Surface Architecture &amp; Actuation</h5>
                  </div>

                  <p class="text-xs text-slate-600 leading-relaxed">
                    ${videoLab.synopsis || 'An in-depth breakdown of how commercial jet airframes are constructed, how primary control surfaces create aerodynamic moments, and how triple-redundant hydraulic systems actuate them.'}
                  </p>

                  <!-- Key Technical Terms -->
                  <div class="space-y-1.5 pt-1">
                    <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wide font-mono block">Core Technical Concepts:</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${(videoLab.keyTerms || [
                        "Primary vs. Secondary Controls",
                        "Fly-By-Wire Actuation",
                        "Triple Hydraulic Redundancy",
                        "Differential Aileron Deflection",
                        "Boundary Layer Re-energization"
                      ]).map(t => `<span class="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white border border-slate-200 text-slate-800 shadow-2xs font-bold">${t}</span>`).join('')}
                    </div>
                  </div>

                  <!-- Guided Viewing Questions -->
                  <div class="space-y-2.5 pt-2 border-t border-slate-200">
                    <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wide font-mono block">Guided Spoken Discussion:</span>
                    ${(videoLab.questions || [
                      {
                        id: 1,
                        q: "Why do commercial aircraft use both inboard and outboard ailerons?",
                        answer: "Outboard ailerons provide high roll authority at low speeds (takeoff/landing), but are locked out at high cruise speeds to prevent wing twisting (aeroelastic torsion); high-speed roll is handled by inboard ailerons and roll spoilers."
                      },
                      {
                        id: 2,
                        q: "How do leading-edge slats prevent aerodynamic stall at high angles of attack?",
                        answer: "Slats open a slot allowing high-pressure air from beneath the wing to flow over the upper surface, re-energizing the boundary layer and keeping airflow attached at much higher angles of attack."
                      },
                      {
                        id: 3,
                        q: "What happens if an aircraft suffers a complete loss of hydraulic power?",
                        answer: "Modern airliners have triple redundant hydraulic circuits (e.g. Green, Blue, Yellow on Airbus). If all fail, a Ram Air Turbine (RAT) deploys automatically into the airstream to generate emergency hydraulic pressure for flight controls."
                      }
                    ]).map(vq => `
                      <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1.5 text-xs shadow-2xs">
                        <p class="font-bold text-slate-800">${vq.id}. ${vq.q}</p>
                        <div id="video-ans-${vq.id}" class="hidden p-2 bg-amber-50/80 border border-amber-200/80 rounded text-[11px] text-amber-950 leading-relaxed mt-1">
                          ${vq.answer}
                        </div>
                        <button type="button" onclick="document.getElementById('video-ans-${vq.id}').classList.toggle('hidden')" class="no-print inline-flex items-center gap-1 text-[10.5px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer">
                          <span>Toggle Technical Explanation</span> &rarr;
                        </button>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 3: Aircraft Blueprint Labeling & 3-Person Blackboard Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${diagramLabeling.title || 'Activity 3: In-Flight Aircraft Labeling &amp; 3-Person Blackboard Challenge'}</h4>
                  <p class="text-[11px] text-slate-500">${diagramLabeling.summary || 'Interactive blueprint diagram race and 3-person team blackboard drawing challenge.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Blueprint &amp; Board Lab</span>
            </div>

            ${renderActivityInstructions(diagramLabeling, theme)}

            <!-- Interactive Blueprint Container -->
            <div class="rounded-2xl border border-slate-700 bg-slate-900 p-3 sm:p-5 shadow-lg space-y-4 text-white overflow-hidden">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-indigo-500 text-white shadow-2xs font-mono">Interactive Blueprint</span>
                  <span class="text-xs font-bold text-slate-200">Twin-Engine Commercial Jetliner (In-Flight Dorsal Planform)</span>
                </div>
                <div class="no-print flex flex-wrap items-center gap-2">
                  <button type="button" id="airframe-mode-study-btn" onclick="window.setAirframeDiagramMode('study')" class="px-2.5 py-1 rounded text-xs font-bold transition-all bg-indigo-600 text-white shadow-xs cursor-pointer">
                    Study Mode (All Labeled)
                  </button>
                  <button type="button" id="airframe-mode-quiz-btn" onclick="window.setAirframeDiagramMode('quiz')" class="px-2.5 py-1 rounded text-xs font-bold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer">
                    Labeling Challenge (Test Yourself)
                  </button>
                  <button type="button" onclick="window.resetAirframeChallenge()" id="airframe-reset-btn" class="hidden px-2.5 py-1 rounded text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 cursor-pointer">
                    Reset Challenge
                  </button>
                </div>
              </div>

              <!-- SVG Viewport -->
              <div class="relative overflow-x-auto flex justify-center py-2">
                <svg viewBox="0 0 920 545" class="w-full h-auto max-w-4xl select-none" xmlns="http://www.w3.org/2000/svg" style="min-width: 650px;">
                  <!-- Background Blueprint Guide Lines -->
                  <g opacity="0.18">
                    <circle cx="460" cy="275" r="140" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
                    <circle cx="460" cy="275" r="230" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
                    <line x1="460" y1="20" x2="460" y2="525" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
                    <line x1="70" y1="275" x2="850" y2="275" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/>
                  </g>

                  <!-- Horizontal Stabilizers (Tailplane) -->
                  <g id="svg-horizontal-stabilizers">
                    <!-- Port Tailplane -->
                    <polygon points="446,438 290,472 292,488 450,482" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
                    <polygon points="350,478 292,488 350,487 450,482" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Starboard Tailplane -->
                    <polygon points="474,438 630,472 628,488 470,482" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
                    <polygon points="570,478 628,488 570,487 470,482" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
                  </g>

                  <!-- Main Wings -->
                  <g id="svg-wings">
                    <!-- Port Wing Body -->
                    <polygon points="440,215 105,308 105,328 330,322 440,318" fill="#334155" stroke="#475569" stroke-width="2"/>
                    <!-- Port Leading Edge Slat -->
                    <polygon points="440,215 105,308 107,314 440,224" fill="#64748b" stroke="#38bdf8" stroke-width="1"/>
                    <!-- Port Inboard Trailing Flap -->
                    <polygon points="440,318 330,322 328,310 440,305" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Port Outboard Aileron -->
                    <polygon points="225,324 105,328 108,319 225,316" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Port Roll Spoilers -->
                    <rect x="250" y="296" width="60" height="15" transform="rotate(7 280 300)" fill="#1e293b" stroke="#94a3b8" stroke-width="1" rx="2"/>
                    <!-- Port Winglet -->
                    <path d="M 105,300 L 98,285 L 105,328 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>

                    <!-- Starboard Wing Body -->
                    <polygon points="480,215 815,308 815,328 590,322 480,318" fill="#334155" stroke="#475569" stroke-width="2"/>
                    <!-- Starboard Leading Edge Slat -->
                    <polygon points="480,215 815,308 813,314 480,224" fill="#64748b" stroke="#38bdf8" stroke-width="1"/>
                    <!-- Starboard Inboard Trailing Flap -->
                    <polygon points="480,318 590,322 592,310 480,305" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Starboard Outboard Aileron -->
                    <polygon points="695,324 815,328 812,319 695,316" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Starboard Roll Spoilers -->
                    <rect x="610" y="296" width="60" height="15" transform="rotate(-7 640 300)" fill="#1e293b" stroke="#94a3b8" stroke-width="1" rx="2"/>
                    <!-- Starboard Winglet -->
                    <path d="M 815,300 L 822,285 L 815,328 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
                  </g>

                  <!-- Turbofan Engines & Pylons -->
                  <g id="svg-engines">
                    <!-- Port Engine -->
                    <rect x="325" y="215" width="8" height="30" fill="#475569" rx="2"/>
                    <rect x="312" y="235" width="34" height="62" rx="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
                    <ellipse cx="329" cy="235" rx="14" ry="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/>
                    <polygon points="320,297 338,297 329,308" fill="#f59e0b"/>
                    
                    <!-- Starboard Engine -->
                    <rect x="587" y="215" width="8" height="30" fill="#475569" rx="2"/>
                    <rect x="574" y="235" width="34" height="62" rx="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
                    <ellipse cx="591" cy="235" rx="14" ry="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/>
                    <polygon points="582,297 600,297 591,308" fill="#f59e0b"/>
                  </g>

                  <!-- Fuselage Main Body & Empennage -->
                  <g id="svg-fuselage">
                    <!-- Fuselage Shell -->
                    <path d="M 440,95 Q 460,45 480,95 L 480,435 Q 460,488 440,435 Z" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
                    <!-- Radome Boundary Curve -->
                    <path d="M 442,95 Q 460,102 478,95" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2"/>
                    <!-- Cockpit Windscreen -->
                    <polygon points="447,102 453,99 460,100 467,99 473,102 471,108 460,106 449,108" fill="#38bdf8"/>
                    <!-- Centerline Keel -->
                    <line x1="460" y1="95" x2="460" y2="440" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/>
                    <!-- Vertical Fin Dorsal Spine -->
                    <polygon points="457,400 463,400 462,485 458,485" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
                    <!-- Rudder Trailing Edge -->
                    <polygon points="458,445 462,445 461,485 459,485" fill="#f8fafc" stroke="#f59e0b" stroke-width="1.5"/>
                    <!-- APU Exhaust Nozzle -->
                    <circle cx="460" cy="488" r="3.5" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
                  </g>

                  <!-- Leader Lines to Callouts -->
                  <g stroke="#94a3b8" stroke-width="1.2" fill="none" opacity="0.85">
                    <!-- Left Leaders -->
                    <path d="M 460,68 L 300,47 L 220,47"/>
                    <path d="M 440,115 L 290,107 L 220,107"/>
                    <path d="M 460,165 L 300,167 L 220,167"/>
                    <path d="M 329,255 L 260,227 L 220,227"/>
                    <path d="M 260,260 L 250,287 L 220,287"/>
                    <path d="M 280,305 L 260,347 L 220,347"/>
                    
                    <!-- Right Leaders -->
                    <path d="M 460,310 L 630,227 L 700,227"/>
                    <path d="M 818,298 L 780,287 L 700,287"/>
                    <path d="M 750,324 L 740,347 L 700,347"/>
                    <path d="M 535,320 L 640,407 L 700,407"/>
                    <path d="M 555,465 L 640,467 L 700,467"/>
                    <path d="M 460,465 L 630,522 L 700,522"/>
                  </g>

                  <!-- Target Pin Dots on Aircraft Surface -->
                  <g fill="#38bdf8" stroke="#ffffff" stroke-width="1.5">
                    <circle cx="460" cy="68" r="4.5"/>
                    <circle cx="440" cy="115" r="4.5"/>
                    <circle cx="460" cy="165" r="4.5"/>
                    <circle cx="329" cy="255" r="4.5"/>
                    <circle cx="260" cy="260" r="4.5"/>
                    <circle cx="280" cy="305" r="4.5"/>
                    <circle cx="460" cy="310" r="4.5"/>
                    <circle cx="818" cy="298" r="4.5"/>
                    <circle cx="750" cy="324" r="4.5"/>
                    <circle cx="535" cy="320" r="4.5"/>
                    <circle cx="555" cy="465" r="4.5"/>
                    <circle cx="460" cy="465" r="4.5"/>
                  </g>

                  <!-- 12 Interactive Callout Badges -->
                  <!-- LEFT BADGES -->
                  <!-- 01: Radome -->
                  <g id="svg-callout-01" onclick="window.selectAirframePart('01', 'Radome (Nose Cone)')" class="cursor-pointer transition-all">
                    <rect x="20" y="25" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="32" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="50" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">01</text>
                    <text id="svg-part-text-01" data-real-name="Radome (Nose Cone)" x="58" y="44" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Radome (Nose Cone)</text>
                    <text x="58" y="58" font-family="sans-serif" font-size="9" fill="#94a3b8">Weather Radar Housing</text>
                  </g>

                  <!-- 02: Pitot-Static Probes -->
                  <g id="svg-callout-02" onclick="window.selectAirframePart('02', 'Pitot-Static Probes')" class="cursor-pointer transition-all">
                    <rect x="20" y="85" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="92" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="110" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">02</text>
                    <text id="svg-part-text-02" data-real-name="Pitot-Static Probes" x="58" y="104" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Pitot-Static Probes</text>
                    <text x="58" y="118" font-family="sans-serif" font-size="9" fill="#94a3b8">Dynamic &amp; Static Pressure</text>
                  </g>

                  <!-- 03: Fuselage -->
                  <g id="svg-callout-03" onclick="window.selectAirframePart('03', 'Fuselage')" class="cursor-pointer transition-all">
                    <rect x="20" y="145" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="152" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="170" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">03</text>
                    <text id="svg-part-text-03" data-real-name="Fuselage" x="58" y="164" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Fuselage</text>
                    <text x="58" y="178" font-family="sans-serif" font-size="9" fill="#94a3b8">Pressurized Cabin &amp; Hold</text>
                  </g>

                  <!-- 08: Engine Nacelle & Pylon -->
                  <g id="svg-callout-08" onclick="window.selectAirframePart('08', 'Engine Nacelle & Pylon')" class="cursor-pointer transition-all">
                    <rect x="20" y="205" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="212" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="230" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">08</text>
                    <text id="svg-part-text-08" data-real-name="Engine Nacelle & Pylon" x="58" y="224" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#f8fafc">Engine Nacelle &amp; Pylon</text>
                    <text x="58" y="238" font-family="sans-serif" font-size="9" fill="#94a3b8">Turbofan Housing &amp; Mount</text>
                  </g>

                  <!-- 04: Leading-Edge Slats -->
                  <g id="svg-callout-04" onclick="window.selectAirframePart('04', 'Leading-Edge Slats')" class="cursor-pointer transition-all">
                    <rect x="20" y="265" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="272" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="290" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">04</text>
                    <text id="svg-part-text-04" data-real-name="Leading-Edge Slats" x="58" y="284" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Leading-Edge Slats</text>
                    <text x="58" y="298" font-family="sans-serif" font-size="9" fill="#94a3b8">Wing Camber &amp; Stall Delay</text>
                  </g>

                  <!-- 07: Roll Spoilers & Speed Brakes -->
                  <g id="svg-callout-07" onclick="window.selectAirframePart('07', 'Roll Spoilers & Speed Brakes')" class="cursor-pointer transition-all">
                    <rect x="20" y="325" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="26" y="332" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="39" y="350" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">07</text>
                    <text id="svg-part-text-07" data-real-name="Roll Spoilers & Speed Brakes" x="58" y="344" font-family="sans-serif" font-size="10" font-weight="700" fill="#f8fafc">Roll Spoilers &amp; Brakes</text>
                    <text x="58" y="358" font-family="sans-serif" font-size="9" fill="#94a3b8">Lift Dumper &amp; Roll Assist</text>
                  </g>

                  <!-- RIGHT BADGES -->
                  <!-- 09: Main & Nose Landing Gear -->
                  <g id="svg-callout-09" onclick="window.selectAirframePart('09', 'Main & Nose Landing Gear')" class="cursor-pointer transition-all">
                    <rect x="705" y="205" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="212" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="230" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">09</text>
                    <text id="svg-part-text-09" data-real-name="Main & Nose Landing Gear" x="743" y="224" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#f8fafc">Landing Gear Assembly</text>
                    <text x="743" y="238" font-family="sans-serif" font-size="9" fill="#94a3b8">Oleo Struts &amp; Wheels</text>
                  </g>

                  <!-- 12: Winglets / Sharklets -->
                  <g id="svg-callout-12" onclick="window.selectAirframePart('12', 'Winglets / Sharklets')" class="cursor-pointer transition-all">
                    <rect x="705" y="265" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="272" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="290" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">12</text>
                    <text id="svg-part-text-12" data-real-name="Winglets / Sharklets" x="743" y="284" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Winglets / Sharklets</text>
                    <text x="743" y="298" font-family="sans-serif" font-size="9" fill="#94a3b8">Vortex Drag Reduction</text>
                  </g>

                  <!-- 06: Ailerons -->
                  <g id="svg-callout-06" onclick="window.selectAirframePart('06', 'Ailerons')" class="cursor-pointer transition-all">
                    <rect x="705" y="325" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="332" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="350" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">06</text>
                    <text id="svg-part-text-06" data-real-name="Ailerons" x="743" y="344" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Ailerons</text>
                    <text x="743" y="358" font-family="sans-serif" font-size="9" fill="#94a3b8">Differential Roll Control</text>
                  </g>

                  <!-- 05: Trailing-Edge Flaps -->
                  <g id="svg-callout-05" onclick="window.selectAirframePart('05', 'Trailing-Edge Flaps')" class="cursor-pointer transition-all">
                    <rect x="705" y="385" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="392" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="410" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">05</text>
                    <text id="svg-part-text-05" data-real-name="Trailing-Edge Flaps" x="743" y="404" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Trailing-Edge Flaps</text>
                    <text x="743" y="418" font-family="sans-serif" font-size="9" fill="#94a3b8">High Lift &amp; Drag Extenders</text>
                  </g>

                  <!-- 11: Horizontal Stabilizer & Elevators -->
                  <g id="svg-callout-11" onclick="window.selectAirframePart('11', 'Horizontal Stabilizer & Elevators')" class="cursor-pointer transition-all">
                    <rect x="705" y="445" width="195" height="44" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="452" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="470" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">11</text>
                    <text id="svg-part-text-11" data-real-name="Horizontal Stabilizer & Elevators" x="743" y="464" font-family="sans-serif" font-size="10" font-weight="700" fill="#f8fafc">Stabilizer &amp; Elevators</text>
                    <text x="743" y="478" font-family="sans-serif" font-size="9" fill="#94a3b8">Pitch Stability &amp; Control</text>
                  </g>

                  <!-- 10: Vertical Fin & Rudder -->
                  <g id="svg-callout-10" onclick="window.selectAirframePart('10', 'Vertical Fin & Rudder')" class="cursor-pointer transition-all">
                    <rect x="705" y="500" width="195" height="40" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                    <rect x="711" y="506" width="26" height="28" rx="5" fill="#4f46e5"/>
                    <text x="724" y="524" font-family="sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">10</text>
                    <text id="svg-part-text-10" data-real-name="Vertical Fin & Rudder" x="743" y="518" font-family="sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Vertical Fin &amp; Rudder</text>
                    <text x="743" y="531" font-family="sans-serif" font-size="9" fill="#94a3b8">Yaw Control &amp; Stability</text>
                  </g>
                </svg>
              </div>

              <!-- Blueprint Instructions & Tip -->
              <div class="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="text-indigo-400 font-bold">&bull;</span>
                  <span id="airframe-diagram-tip">Click any numbered pin or component badge on the blueprint to inspect its functional purpose and listen to native pronunciation.</span>
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="window.revealAllAirframeParts()" class="no-print text-[11px] font-bold text-indigo-400 hover:text-indigo-300 underline cursor-pointer">
                    Reveal All Labels
                  </button>
                </div>
              </div>

              <!-- Component Grid List -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-2 border-t border-slate-800">
                ${externalParts.map(part => `
                  <div id="airframe-card-${part.id}" onclick="window.selectAirframePart('${part.id}', '${part.name}')" class="airframe-component-card p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/80 hover:border-indigo-500/80 transition-all cursor-pointer space-y-1">
                    <div class="flex items-center justify-between gap-2">
                      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-700">${part.id}</span>
                      <button type="button" onclick="event.stopPropagation(); if (typeof speakWord === 'function') speakWord('${part.name}')" class="text-slate-400 hover:text-white" title="Listen to pronunciation">
                        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/></svg>
                      </button>
                    </div>
                    <div id="card-part-name-${part.id}" data-real-name="${part.name}" class="font-bold text-xs text-slate-200">${part.name}</div>
                    <div class="text-[10px] text-slate-400 line-clamp-1">${part.location}</div>
                    <div class="text-[10.5px] text-slate-300 leading-tight">${part.purpose}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 3-Person Team Blackboard Drawing Challenge -->
            <div class="p-5 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80 border border-indigo-200 rounded-2xl shadow-2xs space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
                <div class="flex items-center gap-2">
                  
                  <h5 class="text-xs sm:text-sm font-black text-indigo-950 uppercase tracking-wide font-mono">${blackboardChallenge.title || '3-Person Team Blackboard Drawing Challenge'}</h5>
                </div>
                <span class="text-[10px] font-mono font-bold bg-indigo-100 text-indigo-900 border border-indigo-300 px-2 py-0.5 rounded">Collaborative Board Lab</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">
                ${blackboardChallenge.instructions || 'In groups of 3, step up to the classroom board or a large flipchart. Divide responsibilities across the three specialized aviation roles:'}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                ${(blackboardChallenge.roles || []).map(r => `
                  <div class="p-3.5 bg-white border border-indigo-200/80 rounded-xl space-y-1.5 shadow-2xs">
                    <span class="text-xs font-black text-indigo-900 block font-mono">${r.role}</span>
                    <p class="text-[11.5px] text-slate-600 leading-relaxed">${r.task}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Part 4: Fully Interactive Technical Gap-Fill Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${gapFillClinic.title || 'Activity 4: Technical Gap-Fill Clinic: Flight Controls &amp; Pre-Flight Checks'}</h4>
                  <p class="text-[11px] text-slate-500">${gapFillClinic.summary || 'Interactive technical readings: select the accurate aerodynamic and structural terms from the dropdown menus.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Gap-Fill Clinic</span>
            </div>

            ${renderActivityInstructions(gapFillClinic, theme)}

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <!-- Text A: Flight Controls -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5 flex flex-col justify-between shadow-2xs">
                <div class="space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 font-mono">Text A: Primary vs. Secondary Flight Controls</h5>
                    <span id="gap-a-score" class="text-[11px] font-mono font-black text-indigo-600">Pending</span>
                  </div>
                  <!-- Word Bank Pills -->
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 font-mono block">Available Word Bank:</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${["differentially", "camber", "longitudinal", "attitude", "spoilers", "rudder", "ailerons"].map(w => `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 border border-slate-300 text-slate-800 font-bold">${w}</span>`).join('')}
                    </div>
                  </div>
                  <div class="text-xs text-slate-800 leading-relaxed space-y-2">
                    <p>
                      Modern commercial transport aircraft rely on two primary categories of aerodynamic surfaces to maneuver safely throughout the flight envelope. Primary flight controls manage the aircraft's 
                      <select id="gap-a-1" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 1. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      about its three axes. To control roll about the longitudinal axis, 
                      <select id="gap-a-2" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 2. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      deflect 
                      <select id="gap-a-3" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 3. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      on the outboard trailing edges of the wings. Pitch control about the lateral axis is governed by the elevators mounted to the horizontal stabilizer, ensuring 
                      <select id="gap-a-4" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 4. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      stability. Directional yaw control about the normal axis is commanded by the 
                      <select id="gap-a-5" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 5. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>,
                      hinged to the vertical fin. Conversely, secondary flight controls such as leading-edge slats and trailing-edge flaps alter wing 
                      <select id="gap-a-6" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 6. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      to generate the high lift required for low-speed takeoff and landing operations, while upper-wing 
                      <select id="gap-a-7" class="gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 7. Select term ]</option>
                        <option value="attitude">attitude</option>
                        <option value="ailerons">ailerons</option>
                        <option value="differentially">differentially</option>
                        <option value="longitudinal">longitudinal</option>
                        <option value="rudder">rudder</option>
                        <option value="camber">camber</option>
                        <option value="spoilers">spoilers</option>
                      </select>
                      deploy to dump lift and decelerate during rollout.
                    </p>
                  </div>
                </div>
                <!-- Controls Text A -->
                <div class="space-y-2 pt-2 border-t border-slate-200">
                  <div class="flex flex-wrap items-center gap-2">
                    <button type="button" onclick="window.checkGapFillAas2TextA()" class="no-print px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all cursor-pointer">
                      Check Answers (Text A)
                    </button>
                    <button type="button" onclick="window.resetGapFillAas2TextA()" class="no-print px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 cursor-pointer">
                      Reset
                    </button>
                    <button type="button" onclick="document.getElementById('gapfill-a-ans').classList.toggle('hidden')" class="no-print text-[11px] font-bold text-slate-500 hover:text-slate-800 underline cursor-pointer ml-auto">
                      Reveal Model Answers &rarr;
                    </button>
                  </div>
                  <div id="gapfill-a-ans" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 font-mono space-y-0.5">
                    <strong>Model Answers:</strong> [1] attitude &bull; [2] ailerons &bull; [3] differentially &bull; [4] longitudinal &bull; [5] rudder &bull; [6] camber &bull; [7] spoilers
                  </div>
                </div>
              </div>

              <!-- Text B: Exterior Walkaround -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5 flex flex-col justify-between shadow-2xs">
                <div class="space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 font-mono">Text B: Pre-Flight Exterior Walkaround</h5>
                    <span id="gap-b-score" class="text-[11px] font-mono font-black text-indigo-600">Pending</span>
                  </div>
                  <!-- Word Bank Pills -->
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 font-mono block">Available Word Bank:</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${["delamination", "pitot-static", "static wicks", "hydraulic", "radome", "oleo-pneumatic"].map(w => `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 border border-slate-300 text-slate-800 font-bold">${w}</span>`).join('')}
                    </div>
                  </div>
                  <div class="text-xs text-slate-800 leading-relaxed space-y-2">
                    <p>
                      Before every departure, the flight crew or licensed maintenance engineer must perform a rigorous 360-degree exterior walkaround. The inspection commences at the nose, verifying that the composite 
                      <select id="gap-b-1" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 1. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>
                      is free of bird strikes or hail damage and that all 
                      <select id="gap-b-2" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 2. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>
                      probes are clear of insect nests, ice, or protective covers. Moving aft along the fuselage, the engineer inspects the nose gear assembly, ensuring the 
                      <select id="gap-b-3" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 3. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>
                      strut extension is within limits and shows no signs of 
                      <select id="gap-b-4" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 4. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>
                      fluid leakage. Along the wings, trailing-edge control surfaces must be checked for free movement, and flexible 
                      <select id="gap-b-5" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 5. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>
                      on the trailing edges and wingtips must be intact to dissipate electrical charges. Finally, composite panels must be visually scanned for impact cracks or composite 
                      <select id="gap-b-6" class="gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer">
                        <option value="">[ 6. Select term ]</option>
                        <option value="delamination">delamination</option>
                        <option value="pitot-static">pitot-static</option>
                        <option value="static wicks">static wicks</option>
                        <option value="hydraulic">hydraulic</option>
                        <option value="radome">radome</option>
                        <option value="oleo-pneumatic">oleo-pneumatic</option>
                      </select>.
                    </p>
                  </div>
                </div>
                <!-- Controls Text B -->
                <div class="space-y-2 pt-2 border-t border-slate-200">
                  <div class="flex flex-wrap items-center gap-2">
                    <button type="button" onclick="window.checkGapFillAas2TextB()" class="no-print px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all cursor-pointer">
                      Check Answers (Text B)
                    </button>
                    <button type="button" onclick="window.resetGapFillAas2TextB()" class="no-print px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 cursor-pointer">
                      Reset
                    </button>
                    <button type="button" onclick="document.getElementById('gapfill-b-ans').classList.toggle('hidden')" class="no-print text-[11px] font-bold text-slate-500 hover:text-slate-800 underline cursor-pointer ml-auto">
                      Reveal Model Answers &rarr;
                    </button>
                  </div>
                  <div id="gapfill-b-ans" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 font-mono space-y-0.5">
                    <strong>Model Answers:</strong> [1] radome &bull; [2] pitot-static &bull; [3] oleo-pneumatic &bull; [4] hydraulic &bull; [5] static wicks &bull; [6] delamination
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 5: Technical Error Hunter (Spotting Aircraft Anatomy Mistakes) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${errorHunter.title || 'Activity 5: Technical Error Hunter: Spotting Aircraft Anatomy Mistakes'}</h4>
                  <p class="text-[11px] text-slate-500">${errorHunter.summary || 'Partner reading and error-finding workshop detecting factual fallacies in airframe descriptions with spoken corrections.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-wider shrink-0">Partner Error Hunter</span>
            </div>

            ${renderActivityInstructions(errorHunter, theme)}

            <div class="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-950 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                
                <span><strong>Partner Protocol:</strong> Student A reads the statement aloud. Student B listens, challenges the technical inaccuracy, explains why it is false, and formulates the correct statement. Then swap!</span>
              </div>
              <button type="button" onclick="window.toggleAllErrorCorrections()" class="no-print shrink-0 px-3 py-1.5 bg-white border border-amber-300 hover:bg-amber-100 rounded-lg text-xs font-bold text-amber-900 shadow-2xs cursor-pointer">
                Toggle All Corrections
              </button>
            </div>

            <!-- Error Cards Grid (8 Cards) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(errorHunter.statements || []).map(st => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between shadow-2xs">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">Statement 0${st.id} • Spot the Mistake</span>
                      <span class="text-xs">❌</span>
                    </div>
                    <p class="text-xs font-bold text-slate-900 italic leading-snug bg-white p-2.5 rounded-lg border border-slate-200">
                      ${st.falseStatement}
                    </p>
                  </div>
                  <div>
                    <div id="error-card-ans-${st.id}" class="hidden p-3 bg-white border border-emerald-200 border-l-4 border-l-emerald-500 rounded-lg text-xs space-y-2 shadow-2xs mb-2">
                      <div>
                        <span class="font-bold text-rose-700 block font-mono text-[10px] uppercase">The Technical Error:</span>
                        <p class="text-[11.5px] text-slate-700 leading-relaxed">${st.mistake}</p>
                      </div>
                      <div class="pt-1.5 border-t border-slate-100">
                        <span class="font-bold text-emerald-800 block font-mono text-[10px] uppercase">Accurate Spoken Correction:</span>
                        <p class="text-[11.5px] text-emerald-950 font-bold leading-relaxed">${st.correction}</p>
                      </div>
                    </div>
                    <button type="button" onclick="document.getElementById('error-card-ans-${st.id}').classList.toggle('hidden')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                      <span>Reveal Technical Correction</span> &rarr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 6: Aircraft Anatomy Taboo & 15-Question Technical Mastery Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-2xs font-mono" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Aircraft Anatomy Taboo &amp; 15-Question Technical Mastery Challenge'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || '12-card Taboo word game and multi-format 15-question plenary challenge consolidating structural terminology.'}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Games &amp; Mastery</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Taboo Word Challenge (12 Cards) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide font-mono">Aircraft Anatomy Taboo (12 Technical Terms)</h5>
                </div>
                <span class="text-[11px] text-slate-500">Describe the mystery term without pronouncing any of the 3 forbidden words!</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                ${tabooCards.map(tc => `
                  <div class="p-3 bg-white border border-slate-300 rounded-xl shadow-2xs flex flex-col justify-between space-y-2 hover:border-amber-400 transition-all">
                    <div class="space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 px-1 rounded border border-amber-200">#${tc.id}</span>
                        <button type="button" onclick="if (typeof speakWord === 'function') speakWord('${tc.term}')" class="text-slate-400 hover:text-slate-700 cursor-pointer" title="Listen">
                          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/></svg>
                        </button>
                      </div>
                      <div class="font-black text-xs sm:text-sm text-slate-900">${tc.term}</div>
                      <div class="text-[10px] font-mono text-slate-400">${tc.phonetic}</div>
                    </div>
                    <div class="pt-1.5 border-t border-slate-100 space-y-1">
                      <span class="text-[9px] font-mono font-bold text-rose-600 uppercase tracking-wider block">Forbidden Words:</span>
                      <div class="space-y-0.5">
                        ${tc.forbidden.map(fw => `<div class="text-[10.5px] font-semibold text-slate-600 line-through decoration-rose-400">&bull; ${fw}</div>`).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 15-Question Interactive Technical Mastery Quiz -->
            <div class="space-y-4 pt-3 border-t border-slate-200">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-900 text-white rounded-xl shadow-xs">
                <div class="flex items-center gap-2">
                  
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold font-mono">15-Question Multi-Format Technical Mastery Challenge</h5>
                    <p class="text-[10.5px] text-slate-300">Round 1: Error Buster &bull; Round 2: Motion Matcher &bull; Round 3: Pre-Flight Decisions</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="text-right">
                    <span class="text-[10px] font-mono text-slate-400 block uppercase">Mastery Score</span>
                    <span id="mastery-score-display" class="text-sm font-black font-mono text-amber-300">0 / 15</span>
                  </div>
                  <button type="button" onclick="window.resetMasteryQuiz()" class="no-print px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 cursor-pointer">
                    Reset Quiz
                  </button>
                </div>
              </div>

              <!-- Questions List -->
              <div class="space-y-3.5">
                ${masteryQuiz.map(mq => `
                  <div id="quiz-card-${mq.id}" class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 shadow-2xs">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200 pb-2">
                      <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">${mq.round} • Question ${mq.id}</span>
                      <span id="quiz-status-${mq.id}" class="text-[11px] font-bold text-slate-400 font-mono">Pending</span>
                    </div>
                    <p class="text-xs sm:text-sm font-bold text-slate-900 leading-snug">${mq.q}</p>
                    
                    <div class="space-y-1.5 pt-1">
                      ${mq.options.map((opt, optIdx) => `
                        <button 
                          type="button" 
                          id="quiz-btn-${mq.id}-${optIdx}" 
                          onclick="window.handleMasteryQuizSelect(${mq.id}, ${optIdx}, ${mq.correct})" 
                          class="quiz-option-btn-${mq.id} w-full text-left p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-800 transition-all flex items-start gap-2 cursor-pointer"
                        >
                          <span class="font-mono font-bold text-slate-400 shrink-0">${String.fromCharCode(65 + optIdx)}.</span>
                          <span class="leading-relaxed">${opt}</span>
                        </button>
                      `).join('')}
                    </div>

                    <!-- Explanation Card (Revealed upon selection) -->
                    <div id="quiz-exp-${mq.id}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed border space-y-1">
                      <span class="font-bold block font-mono text-[10px] uppercase">Technical Explanation:</span>
                      <p class="text-[11.5px]">${mq.explanation}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Vocabulary Flashcards Link -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <span class="text-[11px] text-slate-600">Review all 18 aircraft anatomy vocabulary terms and practice pronunciation flashcards.</span>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }


    // ==========================================
    // Interactive Gap-Fill Clinic Controllers (Part 4)
    // ==========================================
    window.checkGapFillAas2TextA = function() {
      const answers = {
        "gap-a-1": "attitude",
        "gap-a-2": "ailerons",
        "gap-a-3": "differentially",
        "gap-a-4": "longitudinal",
        "gap-a-5": "rudder",
        "gap-a-6": "camber",
        "gap-a-7": "spoilers"
      };
      let correctCount = 0;
      for (const [id, expected] of Object.entries(answers)) {
        const el = document.getElementById(id);
        if (!el) continue;
        const val = (el.value || '').trim().toLowerCase();
        if (val === expected) {
          correctCount++;
          el.className = 'gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-emerald-50 border-2 border-emerald-500 text-emerald-950 transition-all';
        } else {
          el.className = 'gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-rose-50 border-2 border-rose-400 text-rose-950 transition-all';
        }
      }
      const scoreEl = document.getElementById('gap-a-score');
      if (scoreEl) {
        scoreEl.textContent = correctCount + ' / 7 (' + Math.round((correctCount / 7) * 100) + '%)';
        scoreEl.className = 'text-[11px] font-mono font-black ' + (correctCount === 7 ? 'text-emerald-600' : 'text-amber-600');
      }
    };

    window.resetGapFillAas2TextA = function() {
      document.querySelectorAll('.gap-select-a').forEach(el => {
        el.value = '';
        el.className = 'gap-select-a px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer';
      });
      const scoreEl = document.getElementById('gap-a-score');
      if (scoreEl) {
        scoreEl.textContent = 'Pending';
        scoreEl.className = 'text-[11px] font-mono font-black text-indigo-600';
      }
      const ansBox = document.getElementById('gapfill-a-ans');
      if (ansBox) ansBox.classList.add('hidden');
    };

    window.checkGapFillAas2TextB = function() {
      const answers = {
        "gap-b-1": "radome",
        "gap-b-2": "pitot-static",
        "gap-b-3": "oleo-pneumatic",
        "gap-b-4": "hydraulic",
        "gap-b-5": "static wicks",
        "gap-b-6": "delamination"
      };
      let correctCount = 0;
      for (const [id, expected] of Object.entries(answers)) {
        const el = document.getElementById(id);
        if (!el) continue;
        const val = (el.value || '').trim().toLowerCase();
        if (val === expected) {
          correctCount++;
          el.className = 'gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-emerald-50 border-2 border-emerald-500 text-emerald-950 transition-all';
        } else {
          el.className = 'gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-rose-50 border-2 border-rose-400 text-rose-950 transition-all';
        }
      }
      const scoreEl = document.getElementById('gap-b-score');
      if (scoreEl) {
        scoreEl.textContent = correctCount + ' / 6 (' + Math.round((correctCount / 6) * 100) + '%)';
        scoreEl.className = 'text-[11px] font-mono font-black ' + (correctCount === 6 ? 'text-emerald-600' : 'text-amber-600');
      }
    };

    window.resetGapFillAas2TextB = function() {
      document.querySelectorAll('.gap-select-b').forEach(el => {
        el.value = '';
        el.className = 'gap-select-b px-2 py-1 rounded text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 transition-all cursor-pointer';
      });
      const scoreEl = document.getElementById('gap-b-score');
      if (scoreEl) {
        scoreEl.textContent = 'Pending';
        scoreEl.className = 'text-[11px] font-mono font-black text-indigo-600';
      }
      const ansBox = document.getElementById('gapfill-b-ans');
      if (ansBox) ansBox.classList.add('hidden');
    };

    // ==========================================
    // Technical Error Hunter Controller (Part 5)
    // ==========================================
    window.toggleAllErrorCorrections = function() {
      const cards = document.querySelectorAll('[id^="error-card-ans-"]');
      if (!cards.length) return;
      const anyHidden = Array.from(cards).some(c => c.classList.contains('hidden'));
      cards.forEach(c => {
        if (anyHidden) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    };

    // ==========================================
    // 15-Question Technical Mastery Quiz Controller (Part 6)
    // ==========================================
    window.masteryQuizState = {
      score: 0,
      answered: {}
    };

    window.handleMasteryQuizSelect = function(qId, selectedIdx, correctIdx) {
      if (!window.masteryQuizState) window.masteryQuizState = { score: 0, answered: {} };
      if (window.masteryQuizState.answered[qId]) return;
      window.masteryQuizState.answered[qId] = true;

      const isCorrect = (selectedIdx === correctIdx);
      if (isCorrect) {
        window.masteryQuizState.score++;
      }

      // Update status tag
      const statusEl = document.getElementById('quiz-status-' + qId);
      if (statusEl) {
        statusEl.textContent = isCorrect ? '✅ Correct' : '❌ Incorrect';
        statusEl.className = 'text-[11px] font-bold font-mono ' + (isCorrect ? 'text-emerald-600' : 'text-rose-600');
      }

      // Highlight options
      const buttons = document.querySelectorAll('.quiz-option-btn-' + qId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-100', 'cursor-pointer');
        btn.classList.add('cursor-default');
        if (idx === correctIdx) {
          btn.className = 'w-full text-left p-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-950 flex items-start gap-2';
        } else if (idx === selectedIdx && !isCorrect) {
          btn.className = 'w-full text-left p-2.5 rounded-lg border-2 border-rose-400 bg-rose-50 text-xs text-rose-950 flex items-start gap-2';
        } else {
          btn.className = 'w-full text-left p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-400 opacity-60 flex items-start gap-2';
        }
      });

      // Show explanation
      const expEl = document.getElementById('quiz-exp-' + qId);
      if (expEl) {
        expEl.classList.remove('hidden');
        expEl.className = 'p-2.5 rounded-lg text-xs leading-relaxed border space-y-1 ' + 
          (isCorrect ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/70 border-rose-200 text-rose-950');
      }

      // Update total score display
      const scoreEl = document.getElementById('mastery-score-display');
      if (scoreEl) {
        scoreEl.textContent = window.masteryQuizState.score + ' / 15';
      }
    };

    window.resetMasteryQuiz = function() {
      window.masteryQuizState = { score: 0, answered: {} };
      const scoreEl = document.getElementById('mastery-score-display');
      if (scoreEl) scoreEl.textContent = '0 / 15';

      document.querySelectorAll('[id^="quiz-status-"]').forEach(el => {
        el.textContent = 'Pending';
        el.className = 'text-[11px] font-bold text-slate-400 font-mono';
      });

      document.querySelectorAll('[id^="quiz-exp-"]').forEach(el => {
        el.classList.add('hidden');
      });

      document.querySelectorAll('[class*="quiz-option-btn-"]').forEach(btn => {
        btn.disabled = false;
        btn.className = 'quiz-option-btn-' + (btn.id.split('-')[2] || '1') + ' w-full text-left p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-800 transition-all flex items-start gap-2 cursor-pointer';
      });
    };


    function renderAas2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const fleetTaxonomy = content.fleetTaxonomy || {};
      const categories = fleetTaxonomy.categories || [];
      const comparativeClinic = content.comparativeClinic || {};
      const rules = comparativeClinic.rules || [];
      const fleetCommitteeSimulation = content.fleetCommitteeSimulation || {};
      const cases = fleetCommitteeSimulation.cases || [];
      const globalLandscapeDebate = content.globalLandscapeDebate || {};
      const topics = globalLandscapeDebate.topics || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Commercial Aircraft &amp; Airlines</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${hero.image || 'images/aas_m2card3.jpg'}" alt="Commercial Aircraft & Airlines" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/aas_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Commercial Aircraft Types &amp; Fleet Strategy</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Commercial Aircraft &amp; Airlines'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Commercial Aircraft Types, Aerospace Manufacturers &amp; Airline Business Models'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Airline Fleet Planner / Network Strategy Director</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: News & Session 2 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 2 Spot-Check'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Airline Fleet &amp; Order News</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s3-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s3-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Commercial Aircraft Classification -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fleetTaxonomy.title || 'Activity 2: Commercial Aircraft Classification Table'}</h4>
                  <p class="text-[11px] text-slate-500">${fleetTaxonomy.summary || 'Classify commercial passenger and freighter aircraft into operational categories.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Fleet Table</span>
            </div>

            ${renderActivityInstructions(fleetTaxonomy, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${categories.map(c => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <h5 class="font-bold text-sm text-slate-900 pb-1 border-b border-slate-200">${c.category}</h5>
                    <p class="text-xs text-indigo-900 font-bold mt-2">Examples: ${c.examples}</p>
                    <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mt-2">
                      <p><strong>Capacity:</strong> ${c.capacity}</p>
                      <p><strong>Range:</strong> ${c.range}</p>
                    </div>
                    <p class="text-[11px] text-slate-700 mt-2 leading-relaxed"><strong>Mission:</strong> ${c.typicalMission}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Comparative Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${comparativeClinic.title || 'Activity 3: Language Focus: Comparative &amp; Superlative Data'}</h4>
                  <p class="text-[11px] text-slate-500">${comparativeClinic.summary || 'Mastering modifiers and comparative structures to evaluate aircraft efficiency and fleet statistics.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Comparative Structures</span>
            </div>

            ${renderActivityInstructions(comparativeClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${rules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h5 class="text-xs font-bold text-slate-900 uppercase">${r.structure}</h5>
                  <p class="text-[10px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200">${r.formula}</p>
                  <p class="text-[11px] italic text-slate-700 pt-1">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Fleet Selection Committee Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fleetCommitteeSimulation.title || 'Activity 4: Airline Fleet Selection Committee Simulation'}</h4>
                  <p class="text-[11px] text-slate-500">${fleetCommitteeSimulation.summary || 'Pairs act as airline fleet planning directors preparing an aircraft purchase pitch for new routes.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Executive Pitch</span>
            </div>

            ${renderActivityInstructions(fleetCommitteeSimulation, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${cases.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1 border-b border-slate-200">${cs.title}</h5>
                    <p class="text-xs text-slate-600 mt-2"><strong>Network:</strong> ${cs.network}</p>
                    <div class="space-y-2 text-xs mt-3">
                      <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                        <strong class="text-indigo-900 block mb-0.5">Option A:</strong>
                        <p class="text-slate-700">${cs.optionA}</p>
                      </div>
                      <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                        <strong class="text-emerald-900 block mb-0.5">Option B:</strong>
                        <p class="text-slate-700">${cs.optionB}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Industry Debate -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${globalLandscapeDebate.title || 'Activity 5: Global Manufacturer Debate &amp; Industry Trends'}</h4>
                  <p class="text-[11px] text-slate-500">${globalLandscapeDebate.summary || 'Class debate exploring the Airbus-Boeing duopoly, supply chain bottlenecks, and the emergence of COMAC.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Industry Debate</span>
            </div>

            ${renderActivityInstructions(globalLandscapeDebate, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700">
              ${topics.map(tp => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <p class="font-medium">${tp}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 6: Wrap-up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Pronunciation Wrap-Up'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Consolidate the 18 commercial fleet terms and prepare for Session 4 Aviation Accidents.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${(closing.pronunciationFocus && closing.pronunciationFocus.length) ? `
              <div class="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-2">
                <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">Pronunciation &amp; Syllable Stress Focus:</span>
                <div class="flex flex-wrap gap-2 text-xs">
                  ${closing.pronunciationFocus.map(w => `<span class="px-2.5 py-1 bg-white rounded-lg border border-indigo-200 font-mono font-bold text-indigo-900 shadow-2xs">${w}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${(closing.checkpoints || ['Mastered 18 commercial aircraft & fleet planning terms', 'Practiced comparative modifiers in oral pitches', 'Completed syllable stress drills on aeronautical vocabulary']).map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const investigationLexis = content.investigationLexis || {};
      const vocabTerms = investigationLexis.terms || [];
      const pastNarrativesClinic = content.pastNarrativesClinic || {};
      const pastRules = pastNarrativesClinic.rules || [];
      const groupResearchSprint = content.groupResearchSprint || {};
      const caseStudies = groupResearchSprint.caseStudies || [];
      const presentationsDebrief = content.presentationsDebrief || {};
      const guidelines = presentationsDebrief.presentationGuidelines || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Significant Aviation Accidents &amp; Aircraft Types</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${hero.image || 'images/aas_m2card4.jpg'}" alt="Aviation Accidents & Aircraft Types" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/aas_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Accident Investigation &amp; Safety Revolution</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Significant Aviation Accidents &amp; Aircraft Types'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Landmark Air Accidents, Technical Causal Analysis &amp; The Evolution of Flight Safety'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Safety Investigator / Flight Safety Officer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: News & Session 3 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 3 Spot-Check'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Safety &amp; Investigation Briefs</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s4-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s4-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Investigation Vocabulary -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${investigationLexis.title || 'Activity 2: Accident Investigation Terminology &amp; Causal Chains'}</h4>
                  <p class="text-[11px] text-slate-500">${investigationLexis.summary || 'Learn and deploy specialized safety vocabulary used by investigation authorities.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Investigation Vocabulary</span>
            </div>

            ${renderActivityInstructions(investigationLexis, theme)}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${vocabTerms.map(lx => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h5 class="text-xs font-bold text-slate-900">${lx.term}</h5>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${lx.role}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Narrative Past Tenses -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${pastNarrativesClinic.title || 'Activity 3: Language Focus: Narrative Past Tenses &amp; Sequencers'}</h4>
                  <p class="text-[11px] text-slate-500">${pastNarrativesClinic.summary || 'Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Narrative Grammar</span>
            </div>

            ${renderActivityInstructions(pastNarrativesClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${pastRules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h5 class="text-xs font-bold text-slate-900 uppercase">${r.tense}</h5>
                  <p class="text-[10px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200">${r.formula}</p>
                  <p class="text-[11px] italic text-slate-700 pt-1">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: group research sprint -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${groupResearchSprint.title || 'Activity 4: 15-Minute Group Research &amp; Preparation Sprint'}</h4>
                  <p class="text-[11px] text-slate-500">${groupResearchSprint.summary || 'In small groups (3-4 students), select one historical accident case study. You have 15 minutes to research and structure your 5-minute briefing.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">15-Min Sprint</span>
            </div>

            ${renderActivityInstructions(groupResearchSprint, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${caseStudies.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="font-bold text-xs text-slate-900">${cs.title}</span>
                      <span class="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded" style="background-color: ${theme.accent};">0${cs.id}</span>
                    </div>
                    <p class="text-[11px] text-indigo-900 font-bold mt-2">Aircraft: ${cs.aircraft}</p>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed"><strong>Context:</strong> ${cs.context}</p>
                  </div>
                  <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded text-[10.5px] text-emerald-950 mt-2">
                    <strong>Permanent Safety Fix:</strong> ${cs.safetyOutcome}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Spoken Group Presentations -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${presentationsDebrief.title || 'Activity 5: Spoken Group Presentations &amp; Safety Debrief'}</h4>
                  <p class="text-[11px] text-slate-500">${presentationsDebrief.summary || 'Each group presents their accident analysis using whiteboard or bullet slides, followed by class Q&amp;A.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Class Presentations</span>
            </div>

            ${renderActivityInstructions(presentationsDebrief, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Presentation Rubric &amp; Delivery Rules:</h5>
              <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
                ${guidelines.map(g => `<li class="leading-relaxed">${g}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 6: FE2 Prep & Wrap-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Formative Evaluation 2 Prep'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${closing.fe2Preview ? `
              <div class="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">Session 5 Formative Evaluation 2 Format:</span>
                <p class="text-xs text-indigo-900 leading-relaxed">${closing.fe2Preview}</p>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${(closing.checkpoints || ['Mastered 18 accident investigation & safety terms', 'Coordinated past simple, continuous, and perfect in chronology', 'Confirmed FE2 partner, topic, and presentation structure']).map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE2 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // ==========================================
    // Interactive Airframe Diagram Controllers
    // ==========================================
    window.setAirframeDiagramMode = function(mode) {
      const studyBtn = document.getElementById('airframe-mode-study-btn');
      const quizBtn = document.getElementById('airframe-mode-quiz-btn');
      const resetBtn = document.getElementById('airframe-reset-btn');
      const tipEl = document.getElementById('airframe-diagram-tip');

      if (mode === 'study') {
        if (studyBtn) { studyBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-indigo-600 text-white shadow-xs cursor-pointer'; }
        if (quizBtn) { quizBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer'; }
        if (resetBtn) { resetBtn.classList.add('hidden'); }
        if (tipEl) { tipEl.textContent = 'Click any numbered pin or component badge on the blueprint to listen to pronunciation and inspect its functional purpose.'; }
        window.revealAllAirframeParts();
      } else {
        if (studyBtn) { studyBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer'; }
        if (quizBtn) { quizBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-indigo-600 text-white shadow-xs cursor-pointer'; }
        if (resetBtn) { resetBtn.classList.remove('hidden'); }
        if (tipEl) { tipEl.textContent = 'Challenge Mode: Click any [ ? ] badge on the blueprint to test your memory and reveal the aeronautical term.'; }
        window.resetAirframeChallenge();
      }
    };

    window.selectAirframePart = function(partId, partName) {
      if (typeof speakWord === 'function' && partName) {
        speakWord(partName);
      }
      window.revealAirframePart(partId);

      // Highlight corresponding card in the lower grid
      document.querySelectorAll('.airframe-component-card').forEach(c => {
        c.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50/60');
      });
      const targetCard = document.getElementById('airframe-card-' + partId);
      if (targetCard) {
        targetCard.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50/60');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    window.revealAirframePart = function(partId) {
      const textEl = document.getElementById('svg-part-text-' + partId);
      if (textEl && textEl.dataset.realName) {
        textEl.textContent = textEl.dataset.realName;
        textEl.setAttribute('fill', '#f8fafc');
      }
      const cardName = document.getElementById('card-part-name-' + partId);
      if (cardName && cardName.dataset.realName) {
        cardName.textContent = cardName.dataset.realName;
      }
    };

    window.revealAllAirframeParts = function() {
      document.querySelectorAll('[id^="svg-part-text-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = el.dataset.realName;
          el.setAttribute('fill', '#f8fafc');
        }
      });
      document.querySelectorAll('[id^="card-part-name-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = el.dataset.realName;
        }
      });
    };

    window.resetAirframeChallenge = function() {
      document.querySelectorAll('[id^="svg-part-text-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = '[ Click to Reveal ]';
          el.setAttribute('fill', '#fbbf24');
        }
      });
      document.querySelectorAll('[id^="card-part-name-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = 'Part ' + el.id.replace('card-part-name-', '') + ' [ ? ]';
        }
      });
    };


    // ==========================================
    // 15-Question Technical Mastery Quiz Controller
    // ==========================================
    window.masteryQuizState = {
      score: 0,
      answered: {}
    };

    window.handleMasteryQuizSelect = function(qId, selectedIdx, correctIdx) {
      if (window.masteryQuizState.answered[qId]) return;
      window.masteryQuizState.answered[qId] = true;

      const isCorrect = (selectedIdx === correctIdx);
      if (isCorrect) {
        window.masteryQuizState.score++;
      }

      // Update status tag
      const statusEl = document.getElementById('quiz-status-' + qId);
      if (statusEl) {
        statusEl.textContent = isCorrect ? '✅ Correct' : '❌ Incorrect';
        statusEl.className = 'text-[11px] font-bold font-mono ' + (isCorrect ? 'text-emerald-600' : 'text-rose-600');
      }

      // Highlight options
      const buttons = document.querySelectorAll('.quiz-option-btn-' + qId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-100', 'cursor-pointer');
        btn.classList.add('cursor-default');
        if (idx === correctIdx) {
          btn.className = 'w-full text-left p-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-950 flex items-start gap-2';
        } else if (idx === selectedIdx && !isCorrect) {
          btn.className = 'w-full text-left p-2.5 rounded-lg border-2 border-rose-400 bg-rose-50 text-xs text-rose-950 flex items-start gap-2';
        } else {
          btn.className = 'w-full text-left p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-400 opacity-60 flex items-start gap-2';
        }
      });

      // Show explanation
      const expEl = document.getElementById('quiz-exp-' + qId);
      if (expEl) {
        expEl.classList.remove('hidden');
        expEl.className = 'p-2.5 rounded-lg text-xs leading-relaxed border space-y-1 ' + 
          (isCorrect ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/70 border-rose-200 text-rose-950');
      }

      // Update total score display
      const scoreEl = document.getElementById('mastery-score-display');
      if (scoreEl) {
        scoreEl.textContent = window.masteryQuizState.score + ' / 15';
      }
    };

    window.resetMasteryQuiz = function() {
      window.masteryQuizState = { score: 0, answered: {} };
      const scoreEl = document.getElementById('mastery-score-display');
      if (scoreEl) scoreEl.textContent = '0 / 15';

      document.querySelectorAll('[id^="quiz-status-"]').forEach(el => {
        el.textContent = 'Pending';
        el.className = 'text-[11px] font-bold text-slate-400 font-mono';
      });

      document.querySelectorAll('[id^="quiz-exp-"]').forEach(el => {
        el.classList.add('hidden');
      });

      document.querySelectorAll('[class*="quiz-option-btn-"]').forEach(btn => {
        btn.disabled = false;
        btn.className = btn.className.replace(/border-2 border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-950/, 'border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-800 cursor-pointer')
          .replace(/border-2 border-rose-400 bg-rose-50 text-xs text-rose-950/, 'border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-800 cursor-pointer')
          .replace(/border border-slate-200 bg-slate-50 text-xs text-slate-400 opacity-60/, 'border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-800 cursor-pointer');
        btn.classList.add('hover:bg-slate-100', 'cursor-pointer');
      });
    };
