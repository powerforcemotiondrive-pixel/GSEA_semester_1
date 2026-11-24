    /* ==========================================================================
       GENERAL ENGLISH (AG) MODULE 1 - INTERACTIVE LESSON CONTENT RENDERERS
       ========================================================================== */

    window.toggleAgSpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag-spotcheck-btn-${sessNum}-${qId}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleAgQuizAnswer = function(id) {
      const el = document.getElementById(`ag-quiz-ans-${id}`);
      const btn = document.getElementById(`ag-quiz-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Explanation</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer &amp; Explanation</span> &rarr;';
      }
    };

    window.toggleAgPracticeAnswer = function(id) {
      const el = document.getElementById(`ag-prac-ans-${id}`);
      const btn = document.getElementById(`ag-prac-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Model Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Model Answer</span> &rarr;';
      }
    };

    window.toggleAgTabooCard = function(id) {
      const el = document.getElementById(`ag-taboo-card-${id}`);
      const btn = document.getElementById(`ag-taboo-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Forbidden Words</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Forbidden Words</span> &rarr;';
      }
    };

    function renderAgLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const collocations = content.collocationsClinic || {};
      const grammar = content.grammarClinic || {};
      const rolePlay = content.rolePlay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Introduction &amp; Travel Anecdotes</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m1card1.jpg'}" alt="${ov.title || 'Introduction & Travel Anecdotes'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m1card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Travel & Transport'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Introduction & Travel Anecdotes'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Travel Stories, Flight Disruptions & Sustainable Mobility'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">European Travel &amp; Sustainable Mobility</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Personal Travel Anecdotes -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Travel Anecdotes — My Most Memorable Trip'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Personal Anecdote</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Useful Words for Your Story -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Useful Words for Your Story:</span>
              <div class="flex flex-wrap gap-1.5">
                ${(opening.storyWords || ['suddenly', 'unexpectedly', 'out of the blue', 'to my relief', 'in the end', 'as luck would have it']).map(w => `
                  <span class="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs">${w}</span>
                `).join('')}
              </div>
            </div>

            <!-- Useful Phrases for Telling Your Story -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Useful Phrases for Telling Your Story:</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-1.5">
                  <strong class="text-[10px] font-black uppercase tracking-wider text-sky-700 block">Starting Your Story</strong>
                  ${((opening.storyPhrases && opening.storyPhrases.start) || ['A couple of years ago, I went on a trip to...', 'It all started when I was traveling to...']).map(p => `
                    <p class="text-slate-700 italic">&ldquo;${p}&rdquo;</p>
                  `).join('')}
                </div>
                <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-1.5">
                  <strong class="text-[10px] font-black uppercase tracking-wider text-amber-700 block">What Happened (The Glitch)</strong>
                  ${((opening.storyPhrases && opening.storyPhrases.event) || ['Everything was going well until...', 'Before we knew it, we realized that...']).map(p => `
                    <p class="text-slate-700 italic">&ldquo;${p}&rdquo;</p>
                  `).join('')}
                </div>
                <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-1.5">
                  <strong class="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">How It Ended (Resolution)</strong>
                  ${((opening.storyPhrases && opening.storyPhrases.ending) || ['To my relief, everything worked out when...', 'Looking back now, it was an unforgettable experience.']).map(p => `
                    <p class="text-slate-700 italic">&ldquo;${p}&rdquo;</p>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Example Story -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5">
              <div class="flex items-center gap-2">
                
                <h5 class="text-xs font-bold text-amber-950 uppercase tracking-wider">Example Story</h5>
              </div>
              <p class="text-xs text-amber-900/95 leading-relaxed italic">
                &ldquo;${opening.modelStory || 'Two summers ago, my friends and I took a train from Munich to Salzburg. Everything was going smoothly until our train stopped in the countryside because of an engine problem. Before we knew it, we had missed our connection! Luckily, a friendly local passenger helped us find a bus, and we reached our hostel just in time. Looking back now, it turned an ordinary trip into a fun adventure.'}&rdquo;
              </p>
            </div>

            <!-- Quick Travel Distinction Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Quick Travel Distinction Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-1-${q.id}" onclick="window.toggleAgSpotCheckAnswer(1, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Global Travel Dilemmas Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Global Travel Dilemmas: Speed Discussion'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Key Phrases for Expressing Opinions Box -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">Key Phrases for Expressing Opinions (Use in Spoken Discussions):</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                ${(survey.signposts || []).map(s => `<div class="p-2 bg-white rounded border border-slate-200 font-medium italic">${s}</div>`).join('')}
              </div>
            </div>

            <!-- 4 Travel Dilemmas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <span class="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                      <span class="text-[11px] font-bold text-slate-400">Dilemma 0${t.id}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900">${t.statement}</h5>
                    <div class="grid grid-cols-1 gap-1.5 mt-2.5 text-[11px]">
                      <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded text-emerald-900">
                        <strong class="block text-emerald-800">Support:</strong> ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/70 border border-rose-200 rounded text-rose-900">
                        <strong class="block text-rose-800">Counter-argument:</strong> ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="p-2.5 bg-amber-50/60 border border-amber-200 rounded-lg text-[11px] text-amber-900 font-medium">
                    ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic: Collocations & Idioms -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${collocations.title || 'Activity 3: Language Focus: Essential Travel Collocations & Idioms'}</h4>
                  <p class="text-[11px] text-slate-500">${collocations.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Vocabulary in Action</span>
            </div>

            ${renderActivityInstructions(collocations, theme)}

            <!-- Collocations & Idioms Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(collocations.items || []).map(item => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-2">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">${item.term}</span>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">${item.type}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-1.5 leading-relaxed">${item.meaning}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-700 italic">
                    ${item.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Quiz Challenge -->
            ${collocations.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">${collocations.challenge.title}</h5>
                  <span class="text-[11px] text-orange-800 font-medium">${collocations.challenge.instructions}</span>
                </div>
                <div class="space-y-2.5">
                  ${(collocations.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s1-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s1-${q.id}" onclick="window.toggleAgQuizAnswer('s1-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Grammar Clinic: Narrative Tenses & Inversion -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Narrative Tenses & Storytelling'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Practice Challenge -->
            ${grammar.practice ? `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Story Sequencing Practice: Combine Your Ideas</h5>
                <div class="space-y-3">
                  ${(grammar.practice || []).map(p => `
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-2">
                      <p class="text-xs font-semibold text-slate-800">Task: ${p.prompt}</p>
                      <div id="ag-prac-ans-s1-${p.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900 font-medium">
                        ${p.answer}
                      </div>
                      <button type="button" id="ag-prac-btn-s1-${p.id}" onclick="window.toggleAgPracticeAnswer('s1-${p.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Show Model Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: Role-Play Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rolePlay.title || 'Activity 5: Role-Play Simulation: Flight Delay & Missing a Connection'}</h4>
                  <p class="text-[11px] text-slate-500">${rolePlay.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Role-Play Simulation</span>
            </div>

            ${renderActivityInstructions(rolePlay, theme)}

            <!-- Scenario Box -->
            <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
              <strong>Scenario:</strong> ${rolePlay.scenario}
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(rolePlay.roles || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1.5 border-b border-slate-200">${r.role}</h5>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.instructions}</p>
                    <div class="mt-3 space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Useful Phrases:</span>
                      <ul class="space-y-1 pl-4 list-disc text-[11px] text-slate-700">
                        ${(r.usefulPhrases || []).map(ph => `<li>${ph}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${rolePlay.task}</p>
          </div>

          <!-- Activity 6: vocabulary wrap-up & Exit Ticket -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: vocabulary wrap-up & Exit Ticket'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Reflection</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">30 Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Reflection Prompts -->
            <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-2">
              <h5 class="text-xs sm:text-sm font-bold text-orange-950">Personal Study Log &amp; Exit Ticket</h5>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-orange-900/90 leading-relaxed">
                ${(closing.reflectionPrompts || []).map(rp => `<li>${rp}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    }

    function renderAgLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const timeline = content.timelineClash || {};
      const corridor = content.corridorPitch || {};
      const grammar = content.grammarClinic || {};
      const caseStudy = content.caseStudy || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Evolution of Transport &amp; Sustainable Mobility</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m1card2.jpg'}" alt="${ov.title || 'Evolution of Transport'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m1card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Transport Evolution & Green Mobility'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Evolution of Transport & Sustainable Mobility'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Modal Shift, High-Speed Rail & Lower Carbon Journeys'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Multi-Modal Corridors &amp; Campus Mobility</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Green Transport News & Vocabulary Review -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Green Transport News & Session 1 Review'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Green Mobility News Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 1 Vocabulary Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-2-${q.id}" onclick="window.toggleAgSpotCheckAnswer(2, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Timeline Clash -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${timeline.title || 'Activity 2: The Timeline Clash: 4 Epochs of Transport'}</h4>
                  <p class="text-[11px] text-slate-500">${timeline.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Historical Analysis</span>
            </div>

            ${renderActivityInstructions(timeline, theme)}

            <!-- 4 Epochs Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(timeline.epochs || []).map(ep => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                      <span class="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide text-white" style="background-color: ${theme.primary};">${ep.era}</span>
                      <span class="text-[11px] font-bold text-slate-400">Epoch 0${ep.id}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${ep.title}</h5>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-[11px]">
                      <div class="p-2 bg-slate-50 rounded border border-slate-200">
                        <strong class="text-slate-800 block">Avg Speed:</strong> ${ep.speed}
                      </div>
                      <div class="p-2 bg-slate-50 rounded border border-slate-200">
                        <strong class="text-slate-800 block">Emissions:</strong> ${ep.emissions}
                      </div>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-2.5 leading-relaxed">${ep.impact}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong class="block mb-1 font-bold">Discussion Prompts:</strong>
              <ul class="space-y-1 list-disc pl-4">
                ${(timeline.discussionQuestions || []).map(dq => `<li>${dq}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 3: The Multi-Modal Corridor Pitch -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${corridor.title || 'Activity 3: The Multi-Modal Corridor Pitch: Rail vs. Air'}</h4>
                  <p class="text-[11px] text-slate-500">${corridor.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Corridor Pitch</span>
            </div>

            ${renderActivityInstructions(corridor, theme)}

            <!-- Corridors Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(corridor.corridors || []).map(c => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">${c.route}</span>
                      <span class="text-[10px] font-bold text-slate-500">${c.distance}</span>
                    </div>
                    <div class="space-y-2 mt-2.5 text-[11px]">
                      <div class="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-950">
                        <strong class="block text-emerald-800">🚄 Rail:</strong> ${c.train}
                      </div>
                      <div class="p-2 bg-sky-50 border border-sky-200 rounded text-sky-950">
                        <strong class="block text-sky-800">✈️ Flight:</strong> ${c.flight}
                      </div>
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 italic">
                    ${c.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Grammar Clinic: Cause, Effect & Comparisons -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Cause, Effect & Complex Comparisons'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s2-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s2-${q.id}" onclick="window.toggleAgQuizAnswer('s2-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: DDRS Case Study: Campus Travel Dilemma -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudy.title || 'Activity 5: DDRS Case Study: The Campus Travel Dilemma'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">DDRS Audit</span>
            </div>

            ${renderActivityInstructions(caseStudy, theme)}

            <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
              <strong>Scenario:</strong> ${caseStudy.scenario}
            </div>

            <!-- Options Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(caseStudy.options || []).map(opt => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1 border-b border-slate-200">${opt.option}</h5>
                    <div class="space-y-1 mt-2 text-[11px]">
                      <div class="flex justify-between text-slate-600"><span>Travel Time:</span> <strong>${opt.time}</strong></div>
                      <div class="flex justify-between text-slate-600"><span>Cost:</span> <strong>${opt.cost}</strong></div>
                      <div class="flex justify-between text-rose-700"><span>Carbon:</span> <strong>${opt.carbon}</strong></div>
                    </div>
                  </div>
                  <p class="text-[11px] text-slate-600 pt-2 border-t border-slate-200">${opt.prosCons}</p>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${caseStudy.task}</p>
          </div>

          <!-- Activity 6: vocabulary wrap-up & Taboo -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: vocabulary wrap-up & Taboo Fluency Challenge'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Fluency Game</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(closing.vocabWords && closing.vocabWords.length) || 30} Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Taboo Game Cards -->
            ${closing.tabooCards ? `
              <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">45-Second Taboo Fluency Challenge</h5>
                  <span class="text-[11px] text-orange-800">Describe the concept without saying the forbidden words!</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  ${(closing.tabooCards || []).map((tc, idx) => `
                    <div class="p-3 bg-white border border-orange-200 rounded-lg flex flex-col justify-between space-y-2">
                      <div>
                        <span class="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">Target Word</span>
                        <h6 class="text-xs font-black text-slate-900 mt-0.5">${tc.word}</h6>
                      </div>
                      <div>
                        <div id="ag-taboo-card-s2-${idx}" class="hidden p-2 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-900">
                          <strong class="block text-rose-800 mb-0.5">Forbidden:</strong>
                          ${tc.forbidden.join(', ')}
                        </div>
                        <button type="button" id="ag-taboo-btn-s2-${idx}" onclick="window.toggleAgTabooCard('s2-${idx}')" class="mt-2 w-full py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] font-bold text-slate-700 transition-all cursor-pointer">
                          <span>Show Forbidden</span> &rarr;
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    function renderAgLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const pressure = content.pressureMatrix || {};
      const policy = content.policyPitch || {};
      const grammar = content.grammarClinic || {};
      const simulation = content.simulation || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Overtourism &amp; Tourism Policy</h3>
            </div>
            <a href="docs/GSEA_S1_M1_AG_S3_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m1card3.jpg'}" alt="${ov.title || 'Overtourism'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m1card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Managing Tourism & City Life'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Overtourism & Tourism Policy'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Managing Visitor Numbers, Protecting Local Life & City Regulations'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Destination Stewardship &amp; Municipal Policy</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Tourism Policy News & Lexis Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Tourism Policy News & Session 2 Review'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">City Tourism Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 2 Vocabulary Quick Check: Transport Terms'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-3-${q.id}" onclick="window.toggleAgSpotCheckAnswer(3, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Destination Pressure Matrix -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${pressure.title || 'Activity 2: Destination Pressure & Visitor Capacity'}</h4>
                  <p class="text-[11px] text-slate-500">${pressure.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Capacity Comparison Table</span>
            </div>

            ${renderActivityInstructions(pressure, theme)}

            <!-- Destinations Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(pressure.destinations || []).map(d => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                      <h5 class="text-xs sm:text-sm font-black text-slate-900">${d.name}</h5>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${d.residents}</span>
                    </div>
                    <div class="mt-2 text-xs text-rose-700 font-bold">Annual Volume: ${d.visitors}</div>
                    <div class="p-2.5 bg-rose-50/60 border border-rose-200 rounded-lg text-[11px] text-rose-950 mt-2">
                      <strong class="block text-rose-900 mb-0.5">Key Impacts:</strong> ${d.issues}
                    </div>
                    <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 mt-2">
                      <strong class="block text-emerald-900 mb-0.5">Municipal Measures:</strong> ${d.actions}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${pressure.discussionPrompt}</p>
          </div>

          <!-- Activity 3: Municipal Policy Pitch to the Mayor -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${policy.title || 'Activity 3: Pitching New Tourism Policies to the Mayor'}</h4>
                  <p class="text-[11px] text-slate-500">${policy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Policy Pitch</span>
            </div>

            ${renderActivityInstructions(policy, theme)}

            <!-- Policies Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(policy.policies || []).map(pol => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 pb-1.5 border-b border-slate-200">${pol.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed">${pol.description}</p>
                  </div>
                  <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded text-[11px] text-rose-900">
                    <strong class="block text-rose-800">Business Objection:</strong> ${pol.objection}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Partner B Peer Feedback Checklist -->
            <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
                  <svg width="14" height="14" class="text-sky-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Partner B: Active Listening &amp; Peer Evaluation Checklist
                </span>
                <span class="text-[10px] text-sky-700 font-semibold">Check criteria met during the 2-minute pitch</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label class="flex items-start gap-2 p-2 bg-white rounded border border-sky-100 cursor-pointer hover:bg-sky-50/50">
                  <input type="checkbox" class="rounded text-sky-600 mt-0.5">
                  <span class="text-slate-800">Defended at least 2 municipal policy justifications (housing, crowd dispersal, ecology)</span>
                </label>
                <label class="flex items-start gap-2 p-2 bg-white rounded border border-sky-100 cursor-pointer hover:bg-sky-50/50">
                  <input type="checkbox" class="rounded text-sky-600 mt-0.5">
                  <span class="text-slate-800">Accurately used at least 3 target terms (carrying capacity, levy, resident backlash)</span>
                </label>
                <label class="flex items-start gap-2 p-2 bg-white rounded border border-sky-100 cursor-pointer hover:bg-sky-50/50">
                  <input type="checkbox" class="rounded text-sky-600 mt-0.5">
                  <span class="text-slate-800">Addressed commercial objections smoothly without abandoning policy goals</span>
                </label>
                <label class="flex items-start gap-2 p-2 bg-white rounded border border-sky-100 cursor-pointer hover:bg-sky-50/50">
                  <input type="checkbox" class="rounded text-sky-600 mt-0.5">
                  <span class="text-slate-800">Clear pacing, audible pronunciation, and natural eye contact</span>
                </label>
              </div>
            </div>

            <!-- Auto-Saving Notes -->
            <div class="notes-textarea-container pt-2">
              <label for="notes-ag-s3_policy" class="block text-xs font-bold text-slate-700 mb-1">Your Policy Pitch &amp; Compromise Notes:</label>
              <textarea id="notes-ag-s3_policy" oninput="window.saveLessonNote('ag-s3_policy', this.value)" placeholder="Draft your 2-minute policy pitch, anticipated commercial objections, and final amended compromise here..." class="w-full h-24 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"></textarea>
            </div>
          </div>

          <!-- Activity 4: Grammar Clinic: Causatives & Contrast Words -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Causatives & Contrast Words'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s3-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s3-${q.id}" onclick="window.toggleAgQuizAnswer('s3-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: DDRS Simulation: Isla Serena Water Crisis -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${simulation.title || 'Activity 5: DDRS Simulation: The Isla Serena Water Crisis'}</h4>
                  <p class="text-[11px] text-slate-500">${simulation.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Round-Table Simulation</span>
            </div>

            ${renderActivityInstructions(simulation, theme)}

            ${simulation.crisisBriefing ? `
              <!-- Isla Serena Crisis Briefing Card -->
              <div class="rounded-xl border border-sky-300 bg-sky-50/40 overflow-hidden shadow-xs space-y-3">
                <!-- Header Banner -->
                <div class="px-4 py-3 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white">Emergency Summit</span>
                    <span class="font-bold text-sm text-white">${simulation.crisisBriefing.title || 'Isla Serena Crisis Dossier'}</span>
                  </div>
                  <div class="text-[11px] text-slate-300 flex items-center gap-3">
                    <span><strong>Location:</strong> ${simulation.crisisBriefing.region || 'Isla Serena'}</span>
                    <span class="text-amber-400 font-bold"><strong>Status:</strong> ${simulation.crisisBriefing.peakSeason || 'Peak Drought'}</span>
                  </div>
                </div>

                <div class="p-4 space-y-3.5">
                  <!-- Situation Context -->
                  <div>
                    <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <svg width="14" height="14" class="text-sky-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Crisis Overview &amp; Infrastructure Dispute
                    </h5>
                    <p class="text-xs text-slate-700 leading-relaxed mt-1">
                      ${simulation.crisisBriefing.situation}
                    </p>
                  </div>

                  <!-- Key Metrics Grid -->
                  <div class="space-y-1.5">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <svg width="14" height="14" class="text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                      Key Crisis Metrics &amp; Parameters:
                    </h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      ${(simulation.crisisBriefing.keyMetrics || []).map(m => `
                        <div class="p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-0.5">
                          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">${m.label}</span>
                          <span class="text-xs font-black text-slate-900 block">${m.value}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(simulation.roles || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">${r.role}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed">${r.stance}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${simulation.task}</p>

            <!-- Activity 5 Decision Table: Emergency Water Allocation Accord -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Emergency Water Allocation Accord (Binding Consensus)</h5>
                <span class="text-[11px] text-slate-500 font-semibold">All 4 stakeholders must sign off</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr class="bg-slate-200/60 text-slate-800">
                      <th class="p-2 border border-slate-300 font-bold">Policy Domain</th>
                      <th class="p-2 border border-slate-300 font-bold">Initial Proposal</th>
                      <th class="p-2 border border-slate-300 font-bold">Agreed Compromise Measure</th>
                      <th class="p-2 border border-slate-300 font-bold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody class="text-slate-700">
                    <tr class="hover:bg-white">
                      <td class="p-2 border border-slate-300 font-bold">Hotel Swimming Pools &amp; Landscaping</td>
                      <td class="p-2 border border-slate-300">100% immediate shutdown during August</td>
                      <td class="p-2 border border-slate-300">Resorts convert pools to treated seawater; 40% reduction in garden irrigation</td>
                      <td class="p-2 border border-slate-300 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Agreed</span></td>
                    </tr>
                    <tr class="hover:bg-white">
                      <td class="p-2 border border-slate-300 font-bold">Household Drinking Water Quota</td>
                      <td class="p-2 border border-slate-300">Strict cap at 90 liters / resident / day</td>
                      <td class="p-2 border border-slate-300">Guaranteed base quota of 120 L/day; emergency desalination plant barge contracted</td>
                      <td class="p-2 border border-slate-300 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Agreed</span></td>
                    </tr>
                    <tr class="hover:bg-white">
                      <td class="p-2 border border-slate-300 font-bold">Airport Runway Expansion (+600m)</td>
                      <td class="p-2 border border-slate-300">Expropriate 12 hectares of agricultural land</td>
                      <td class="p-2 border border-slate-300">Runway extension cancelled; airport capped at existing narrow-body traffic with €15 eco-landing levy</td>
                      <td class="p-2 border border-slate-300 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Agreed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Auto-Saving Notes for Simulation -->
            <div class="notes-textarea-container pt-2">
              <label for="notes-ag-s3_simulation" class="block text-xs font-bold text-slate-700 mb-1">Your Stakeholder Position &amp; Negotiation Notes:</label>
              <textarea id="notes-ag-s3_simulation" oninput="window.saveLessonNote('ag-s3_simulation', this.value)" placeholder="Record your role's primary mandate, non-negotiable points, trade-offs offered, and final accord terms..." class="w-full h-24 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"></textarea>
            </div>
          </div>

          <!-- Activity 6: vocabulary wrap-up & Taboo -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: vocabulary wrap-up & Taboo Fluency Challenge'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Fluency Game</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(closing.vocabWords && closing.vocabWords.length) || 30} Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Taboo Game Cards -->
            ${closing.tabooCards ? `
              <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">45-Second Taboo Fluency Challenge</h5>
                  <span class="text-[11px] text-orange-800">Describe the concept without saying the forbidden words!</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  ${(closing.tabooCards || []).map((tc, idx) => `
                    <div class="p-3 bg-white border border-orange-200 rounded-lg flex flex-col justify-between space-y-2">
                      <div>
                        <span class="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">Target Word</span>
                        <h6 class="text-xs font-black text-slate-900 mt-0.5">${tc.word}</h6>
                      </div>
                      <div>
                        <div id="ag-taboo-card-s3-${idx}" class="hidden p-2 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-900">
                          <strong class="block text-rose-800 mb-0.5">Forbidden:</strong>
                          ${tc.forbidden.join(', ')}
                        </div>
                        <button type="button" id="ag-taboo-btn-s3-${idx}" onclick="window.toggleAgTabooCard('s3-${idx}')" class="mt-2 w-full py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] font-bold text-slate-700 transition-all cursor-pointer">
                          <span>Show Forbidden</span> &rarr;
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Auto-Saving Reflection Notes -->
            <div class="notes-textarea-container pt-2 space-y-2">
              <label for="notes-ag-s3_reflection" class="block text-xs font-bold text-slate-700">Personal Session Reflection &amp; Vocabulary Targets:</label>
              <textarea id="notes-ag-s3_reflection" oninput="window.saveLessonNote('ag-s3_reflection', this.value)" placeholder="Write down 3 new words mastered today, key pronunciation distinctions, and grammar patterns to revise..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"></textarea>
              <div class="flex justify-end">
                <button type="button" onclick="window.clearLessonNotes(['ag-s3_policy', 'ag-s3_simulation', 'ag-s3_reflection'])" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer">
                  <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  <span>Clear Session Notes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Restore auto-saved notes
      setTimeout(() => {
        ['ag-s3_policy', 'ag-s3_simulation', 'ag-s3_reflection'].forEach(id => {
          const el = document.getElementById('notes-' + id);
          if (el && window.loadLessonNote) {
            el.value = window.loadLessonNote(id) || '';
          }
        });
      }, 50);
    }

    function renderAgLessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const forensic = content.forensicAuditMatrix || content.forensicAudit || {};
      const grammar = content.grammarClinic || {};
      const workshop = content.researchSimulation || content.workshop || {};
      const investor = content.investorConsensusForum || content.investorForum || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Official PDF Action Bar (Zero Print-to-Teach / 100% Digital Download) -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Ecotourism &amp; Sustainable Destination Design</h3>
            </div>
            <a href="docs/GSEA_S1_M1_AG_S4_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m1card4.jpg'}" alt="${ov.title || 'Ecotourism & Sustainable Destination Design'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m1card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Ecotourism & Sustainable Destination Design'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Ecotourism & Sustainable Destination Design'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Responsible Travel, Fragile Ecosystems, Genuine Green Projects & Community Benefits'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Case Study Research Sprint &amp; 5-Minute Exposé</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Academic Block:</span>
                <span class="font-bold text-slate-900">2-Hour University Seminar</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Eco-Tourism News & Lexis Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Eco-Tourism News & Session 3 Spot-Check'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Eco-Tourism &amp; Decarbonization Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 3 Vocabulary Quick Check: Overtourism Terms'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-4-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-4-${q.id}" onclick="window.toggleAgSpotCheckAnswer(4, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Genuine Eco-Tourism vs. Greenwashing Evaluation Matrix -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${forensic.title || 'Activity 2: Genuine Eco-Tourism vs. Greenwashing Evaluation Matrix'}</h4>
                  <p class="text-[11px] text-slate-500">${forensic.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Forensic Audit</span>
            </div>

            ${renderActivityInstructions(forensic, theme)}

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(forensic.projects || []).map(proj => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1.5 border-b border-slate-100">${proj.name}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed"><strong>Claims:</strong> ${proj.claims}</p>
                    <div class="p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-700 mt-2 font-medium">
                      Revenue Retention: <strong>${proj.revenueRetention}</strong>
                    </div>
                  </div>
                  <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 font-bold">
                    Verdict: ${proj.verdict}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Greenwashing Checklist -->
            <div class="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1.5">
              <strong class="block font-bold">Greenwashing Audit Checklist:</strong>
              <ul class="space-y-1 list-disc pl-4 text-[11px]">
                ${(forensic.greenwashingChecklist || []).map(gc => `<li>${gc}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 3: Grammar Clinic: Mixed Conditionals & Purpose Clauses -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Grammar Focus: Mixed Conditionals & Purpose Clauses'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s4-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s4-${q.id}" onclick="window.toggleAgQuizAnswer('s4-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Small-Group Research Sprint: Global Sustainable Destination Case Studies -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${workshop.title || 'Activity 4: Small-Group Research Sprint: Global Sustainable Destination Case Studies'}</h4>
                  <p class="text-[11px] text-slate-500">${workshop.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Research Sprint (Pairs / Triads)</span>
            </div>

            ${renderActivityInstructions(workshop, theme)}

            <!-- Case Studies Grid with High-Resolution Photos -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(workshop.caseStudies || []).map(cs => `
                <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div class="relative h-44 sm:h-52 overflow-hidden bg-slate-900">
                      <img src="${cs.image}" alt="${cs.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" onerror="this.onerror=null;this.src='images/ag_m1card4.jpg'">
                      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-3.5">
                        <div>
                          <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500 text-white shadow-xs">${cs.tag}</span>
                          <h5 class="text-sm sm:text-base font-bold text-white mt-1 leading-snug">${cs.name}</h5>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 space-y-2.5 text-xs">
                      <div>
                        <span class="font-bold text-slate-800">Ecosystem &amp; Fragility:</span>
                        <p class="text-slate-600 mt-0.5 leading-relaxed">${cs.ecosystem}</p>
                      </div>
                      <div class="p-2.5 rounded-lg bg-red-50 border border-red-100">
                        <span class="font-bold text-red-950">Ecological Threat:</span>
                        <p class="text-red-900 mt-0.5 leading-relaxed">${cs.threat}</p>
                      </div>
                      <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                        <span class="font-bold text-emerald-950">Low-Impact Solution:</span>
                        <p class="text-emerald-900 mt-0.5 leading-relaxed">${cs.solution}</p>
                      </div>
                      <div class="p-2.5 rounded-lg bg-sky-50 border border-sky-100">
                        <span class="font-bold text-sky-950">Local Community Prosperity:</span>
                        <p class="text-sky-900 mt-0.5 leading-relaxed">${cs.communityBenefit}</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-700 italic">
                    <strong class="not-italic text-slate-900">Spoken Grammar Model:</strong> "${cs.sampleConditional}"
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1.5">
              <strong class="block font-bold">4-Point Case Study Research Checklist:</strong>
              <ul class="space-y-1 list-disc pl-4 text-[11px]">
                ${(workshop.blueprintChecklist || []).map(bc => `<li>${bc}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 5: 5-Minute Spoken Exposés & Investor/Stakeholder Defense -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${investor.title || 'Activity 5: 5-Minute Spoken Exposés & Investor/Stakeholder Defense'}</h4>
                  <p class="text-[11px] text-slate-500">${investor.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Spoken Exposé</span>
            </div>

            ${renderActivityInstructions(investor, theme)}

            <!-- Investor Board Challenge Questions -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Provocative Questions from the Sustainability Investment Board</h5>
                <span class="text-[11px] text-slate-500">Impromptu Defense</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                ${(investor.boardQuestions || []).map(bq => `
                  <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 font-medium italic shadow-2xs">
                    ${bq}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Student B / Peer Observer Active-Listening Evaluation Grid -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-indigo-950">Student B / Peer Observer Assessment Checklist</h5>
                  <p class="text-[11px] text-indigo-800/80 mt-0.5">Evaluate other teams during their 5-minute exposé using these 3 criteria:</p>
                </div>
                <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-600 text-white">Peer Evaluation</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                ${(investor.peerChecklist || []).map((crit, idx) => `
                  <div class="p-3 bg-white border border-indigo-200 rounded-lg space-y-1 shadow-2xs">
                    <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600">Criterion 0${idx + 1}</span>
                    <h6 class="text-xs font-bold text-slate-900">${crit.criterion}</h6>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${crit.question}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Interactive Auto-Saving Digital Notes Container -->
            <div class="notes-textarea-container p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <label for="ag-s4-notes" class="text-xs font-bold text-slate-800">📝 Your Case Study Briefing Notes &amp; Spoken Bullets (Auto-Saving)</label>
                <span class="text-[11px] text-slate-500" id="ag-s4-notes-status">Saved locally in browser</span>
              </div>
              <textarea id="ag-s4-notes" rows="4" placeholder="Draft your 4-point exposé notes here: 1. Ecosystem context... 2. Solution... 3. Community impact... 4. Mixed conditional..." oninput="window.saveLessonNote && window.saveLessonNote('ag-s4-notes', this.value)" class="w-full p-3 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
          </div>

          <!-- Activity 6: Vocabulary Wrap-Up & FE1 Readiness Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Wrap-Up & FE1 Readiness Check'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Evaluation Prep</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(closing.vocabWords && closing.vocabWords.length) || 18} Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- FE1 Readiness Checklist -->
            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 5 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Final Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2 shadow-2xs">
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }



    /* =========================================================================
       GENERAL ENGLISH (AG) • MODULE 2 SESSIONS 1 TO 4 LESSON CONTENT
       ========================================================================= */

    window.toggleAg2SpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag2-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag2-spotcheck-btn-${sessNum}-${qId}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &uarr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleAg2QuizAnswer = function(id) {
      const el = document.getElementById(`ag2-quiz-ans-${id}`);
      const btn = document.getElementById(`ag2-quiz-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Explanation</span> &uarr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer &amp; Explanation</span> &rarr;';
      }
    };

