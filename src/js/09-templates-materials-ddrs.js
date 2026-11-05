    function renderRevisionTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const rev = sessionData.revision || { terms: [], summary: '' };
      const sessionTerms = Array.isArray(rev) ? rev : (rev.terms || sessionData.vocabulary || []);
      const masteredList = getMasteredTerms(modalState.modNum, modalState.sessionNum);
      const isGrid = modalState.flashcardMode === 'grid';
      modalState.vocabScope = modalState.vocabScope || 'session';

      // Gather module terms across all sessions in this module
      const modCourse = getActiveModalCourseData();
      let moduleTerms = [];
      if (modCourse && modCourse.sessions) {
        const sKeys = Object.keys(modCourse.sessions).sort((a,b) => parseInt(a) - parseInt(b));
        sKeys.forEach(sNum => {
          const s = modCourse.sessions[sNum];
          const sRev = s.revision || {};
          const sTerms = Array.isArray(sRev) ? sRev : (sRev.terms || s.vocabulary || []);
          sTerms.forEach(t => {
            moduleTerms.push({ ...t, sessionNum: sNum });
          });
        });
      }
      if (moduleTerms.length === 0) {
        moduleTerms = sessionTerms.map(t => ({ ...t, sessionNum: modalState.sessionNum }));
      }

      const activeTerms = (modalState.vocabScope === 'module' && isGrid)
        ? moduleTerms
        : sessionTerms.map(t => ({ ...t, sessionNum: modalState.sessionNum }));

      const currentSearch = (modalState.vocabSearch || '').trim().toLowerCase();

      let innerContent = '';
      if (isGrid) {
        innerContent = `
          <!-- Real-Time Search & Scope Controls -->
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2.5">
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              
              <!-- Search Input -->
              <div class="relative flex-1">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <input type="text" id="vocab-search-input" value="${modalState.vocabSearch || ''}" oninput="window.filterVocabCards(this.value)" placeholder="Search ${activeTerms.length} terms or definitions in real-time..." class="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400">
                ${modalState.vocabSearch ? `
                  <button type="button" onclick="window.clearVocabSearch()" class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer" title="Clear search">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                ` : ''}
              </div>

              <!-- Scope Toggle (This Session vs All Module 1) -->
              <div class="flex items-center gap-2 shrink-0">
                <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-[11px] font-bold select-none">
                  <button type="button" onclick="window.setVocabScope('session')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer ${modalState.vocabScope !== 'module' ? 'bg-white shadow-xs text-blue-600' : 'text-slate-500 hover:text-slate-800'}">This Session (${sessionTerms.length})</button>
                  <button type="button" onclick="window.setVocabScope('module')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer ${modalState.vocabScope === 'module' ? 'bg-white shadow-xs text-blue-600' : 'text-slate-500 hover:text-slate-800'}">Module 1 (${moduleTerms.length})</button>
                </div>
                <span id="vocab-match-count" class="text-[11px] font-mono text-slate-500 hidden sm:inline shrink-0">${activeTerms.length} terms</span>
              </div>

            </div>
          </div>

          <!-- Empty Search State -->
          <div id="vocab-empty-banner" class="hidden p-8 bg-white border border-slate-200 rounded-xl text-center text-slate-500 text-xs space-y-2">
            <svg class="w-8 h-8 mx-auto text-slate-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path stroke-linecap="round" d="M9 11h4"/></svg>
            <p>No vocabulary terms found matching your search.</p>
            <button type="button" onclick="window.clearVocabSearch()" class="px-3 py-1 text-xs font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md transition-all cursor-pointer">Clear Search Filter</button>
          </div>

          <!-- Cards Grid -->
          <div id="vocab-cards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${activeTerms.map(t => {
              const isMastered = masteredList.includes(t.term);
              const termLower = (t.term || '').toLowerCase();
              const defLower = (t.definition || '').toLowerCase();
              const matches = !currentSearch || termLower.includes(currentSearch) || defLower.includes(currentSearch);
              return `
                <div class="vocab-card bg-white border ${isMastered ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-slate-200'} rounded-xl p-3 flex flex-col justify-between shadow-xs transition-all ${matches ? '' : 'hidden'}" data-term="${termLower.replace(/"/g, '&quot;')}" data-def="${defLower.replace(/"/g, '&quot;')}">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 gap-1.5">
                      <div class="flex items-center gap-1.5 truncate">
                        <button type="button" onclick="speakWord('${t.term.replace(/'/g, "\\'")}')" title="Pronounce word" class="hover:scale-110 active:scale-95 transition-all text-slate-400 hover:text-slate-700 cursor-pointer flex items-center justify-center"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg></button>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-800 truncate">${t.term}</h4>
                      </div>
                      <span class="text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 shadow-xs" style="background-color: ${theme.accent};">${modalState.vocabScope === 'module' ? `S${t.sessionNum} • ${t.num}` : t.num}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-2">${t.definition}</p>
                  </div>
                  <div class="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900 select-none">
                      <input type="checkbox" ${isMastered ? 'checked' : ''} onchange="handleMasteredToggle('${t.term.replace(/'/g, "\\'")}')" class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                      <span>${isMastered ? 'Mastered ✓' : 'Mark Learned'}</span>
                    </label>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // Flashcard Trainer View (Always uses current session terms)
        const terms = sessionTerms;
        if (terms.length === 0) {
          innerContent = `<div class="p-4 bg-white rounded-xl text-center text-slate-500 text-xs">No terms available.</div>`;
        } else {
          const currentTerm = terms[modalState.flashcardIdx] || terms[0];
          const isMastered = masteredList.includes(currentTerm.term);
          innerContent = `
            <div class="flex flex-col items-center gap-4 py-2">
              <div class="w-full max-w-xl h-64 flashcard-perspective cursor-pointer select-none" onclick="toggleFlashcardFlip()">
                <div id="flashcard-inner" class="flashcard-inner ${modalState.flashcardFlipped ? 'flipped' : ''}">
                  
                  <!-- Front Side -->
                  <div class="flashcard-front bg-white border border-slate-200 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center">
                    <div class="w-full flex justify-between items-center text-xs text-slate-400 font-mono">
                      <span>Card ${modalState.flashcardIdx + 1} of ${terms.length}</span>
                      <span class="px-2 py-0.5 rounded text-white font-bold" style="background-color: ${theme.accent};">0${currentTerm.num}</span>
                    </div>
                    
                    <div class="space-y-2 my-auto">
                      <h3 class="text-2xl font-black text-slate-800 tracking-tight">${currentTerm.term}</h3>
                      <button type="button" onclick="event.stopPropagation(); speakWord('${currentTerm.term.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer">
                        <span>Pronounce</span>
                      </button>
                    </div>

                    <div class="text-[11px] text-slate-400 flex items-center gap-1">
                      <span>Click anywhere to flip ↷</span>
                    </div>
                  </div>

                  <!-- Back Side -->
                  <div class="flashcard-back bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center">
                    <div class="w-full flex justify-between items-center text-xs text-slate-400 font-mono">
                      <span class="text-slate-300 font-bold">${currentTerm.term}</span>
                      <span class="px-2 py-0.5 rounded bg-white/20 text-white font-bold">Definition</span>
                    </div>

                    <div class="my-auto px-2">
                      <p class="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">${currentTerm.definition}</p>
                    </div>

                    <div class="text-[11px] text-slate-400 flex items-center gap-1">
                      <span>Click to flip back ↶</span>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="w-full max-w-xl flex items-center justify-between gap-3">
                <button type="button" onclick="prevFlashcard()" ${modalState.flashcardIdx === 0 ? 'disabled' : ''} class="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
                  ← Prev
                </button>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="handleMasteredToggle('${currentTerm.term.replace(/'/g, "\\'")}')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${isMastered ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'}">
                    ${isMastered ? '✓ Mastered' : '+ Mark Mastered'}
                  </button>
                </div>
                <button type="button" onclick="nextFlashcard()" ${modalState.flashcardIdx === terms.length - 1 ? 'disabled' : ''} class="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
                  Next →
                </button>
              </div>
            </div>
          `;
        }
      }

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Curriculum Vocabulary (${sessionTerms.length} Terms)</span>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs font-semibold text-slate-700">${masteredList.length} of ${sessionTerms.length} mastered</span>
                <div class="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-500 rounded-full transition-all duration-300" style="width: ${(masteredList.length / (sessionTerms.length || 1)) * 100}%"></div>
                </div>
              </div>
            </div>

            <!-- View Mode Switch -->
            <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs font-bold select-none">
              <button type="button" onclick="setFlashcardMode('grid')" class="px-3 py-1 rounded-md transition-all cursor-pointer ${isGrid ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'}">Full List</button>
              <button type="button" onclick="setFlashcardMode('flashcards')" class="px-3 py-1 rounded-md transition-all cursor-pointer ${!isGrid ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'}">Flashcards</button>
            </div>
          </div>

          ${innerContent}
        </div>
      `;
    }

    window.filterVocabCards = function(query) {
      modalState.vocabSearch = query;
      const q = (query || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.vocab-card');
      let matchCount = 0;
      cards.forEach(card => {
        const term = card.getAttribute('data-term') || '';
        const def = card.getAttribute('data-def') || '';
        const matches = !q || term.includes(q) || def.includes(q);
        card.classList.toggle('hidden', !matches);
        if (matches) matchCount++;
      });
      const counter = document.getElementById('vocab-match-count');
      if (counter) counter.textContent = q ? `Showing ${matchCount} of ${cards.length}` : `${cards.length} terms`;
      const emptyBanner = document.getElementById('vocab-empty-banner');
      if (emptyBanner) emptyBanner.classList.toggle('hidden', matchCount > 0);
    };

    window.clearVocabSearch = function() {
      modalState.vocabSearch = '';
      const input = document.getElementById('vocab-search-input');
      if (input) input.value = '';
      window.filterVocabCards('');
    };

    window.setVocabScope = function(scope) {
      modalState.vocabScope = scope;
      renderModalBody();
    };

    function renderMaterialsTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const mat = sessionData.materials || { videos: [], articles: [], grammar: {}, resources: [] };
      const vids = mat.videos || [];
      const articles = mat.articles || [];
      const grammar = mat.grammar || {};
      const res = mat.resources || [];

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Section 1: Curated Videos Grid -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Video Viewers &amp; Analysis (${vids.length})</h3>
              </div>
              <span class="text-[11px] text-slate-500">Subtitled on YouTube</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${vids.map((v, i) => {
                const title = v.title || `Video ${i + 1}`;
                const watchUrl = v.watchUrl || (v.videoId ? `https://www.youtube.com/watch?v=${v.videoId}` : (v.url || '#'));
                const embedUrl = v.embedUrl || (v.videoId ? `https://www.youtube-nocookie.com/embed/${v.videoId}` : '');
                const caption = v.caption || v.summary || '';
                return `
                <div class="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between shadow-xs">
                  <div>
                    <div class="flex items-center justify-between gap-1 pb-1.5 border-b border-slate-100 text-xs">
                      <span class="font-bold text-slate-800 truncate" title="${title}">Video ${i + 1}: ${title.replace(/^Video \d+:\s*/, '')}</span>
                      <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 px-2 py-0.5 rounded-full shrink-0 no-underline transition-all">Watch ↗</a>
                    </div>
                    <div class="aspect-video w-full my-2 bg-slate-900 rounded-lg overflow-hidden border border-slate-200">
                      ${embedUrl ? `<iframe class="w-full h-full" src="${embedUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `
                        <div class="w-full h-full flex flex-col items-center justify-center p-4 text-center text-slate-300 space-y-1.5">
                          <svg width="28" height="28" fill="currentColor" class="text-rose-500" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                          <span class="text-xs font-bold text-white line-clamp-1">${v.channel || 'Technical Video Briefing'}</span>
                          <span class="text-[10px] text-slate-400">${v.duration || 'Briefing Video'}</span>
                        </div>
                      `}
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${caption}</p>
                  </div>
                </div>
              `;}).join('')}
            </div>
          </div>

          <!-- Section 2: Featured News & Current Affairs Articles -->
          ${articles.length > 0 ? `
            <div>
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Featured News &amp; Current Affairs (${articles.length})</h3>
                </div>
                <span class="text-[11px] text-slate-500">Industry Reports &amp; Case Studies</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${articles.map(a => `
                  <article class="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                    <div>
                      <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-100 text-xs">
                        <span class="font-bold text-[11px]" style="color: ${theme.primary};">${a.topic || 'Case Study'}</span>
                        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">${a.sourceTag || 'Analysis'}</span>
                      </div>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug mt-2">${a.heading}</h4>
                      <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2">${a.snippet}</p>
                    </div>
                    <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span class="text-[11px] text-slate-400">${a.readTime || 'Estimated read: 4-5 mins'}</span>
                      <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs hover:opacity-95 transition-all no-underline" style="background-color: ${theme.primary};">
                        <span>Read Article</span>
                        <span>→</span>
                      </a>
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Section 3: Curated Web Resources & References -->
          ${res.length > 0 ? `
            <div>
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Curated Web Resources &amp; References (${res.length})</h3>
                </div>
                <span class="text-[11px] text-slate-500">Authoritative Industry Portals</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                ${res.map(r => `
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="p-3.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs transition-all flex flex-col justify-between group no-underline">
                    <div>
                      <div class="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span class="truncate pr-1">${r.tag}</span>
                        <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400">↗</span>
                      </div>
                      <h4 class="text-xs font-bold text-slate-800 mt-1">${r.name}</h4>
                      <p class="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">${r.desc}</p>
                    </div>
                    <div class="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold" style="color: ${theme.primary};">
                      <span>Visit Portal</span>
                      <span>→</span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Section 4: Full Grammar Descriptions & Explanations -->
          ${grammar.formula ? `
            <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
              <!-- Header with Title & Level Badge -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                  <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${grammar.title || 'Grammar Focus'}</h3>
                </div>
                <span class="text-[10px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">${grammar.badge || 'B1–B2 Grammar Focus'}</span>
              </div>

              <!-- Sentence Pattern Banner -->
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center space-y-1">
                <div class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">${grammar.patternTitle || 'Sentence Pattern'}</div>
                <div class="font-mono font-extrabold text-xs sm:text-sm text-slate-900 leading-relaxed" style="color: ${theme.primary};">
                  ${grammar.formula}
                </div>
              </div>

              <!-- Rules & Usage Breakdown -->
              ${grammar.rules && grammar.rules.length > 0 ? `
                <div class="space-y-2 pt-1">
                  <h4 class="text-xs font-extrabold text-slate-700 uppercase tracking-wider">${grammar.rulesTitle || 'When to Use It'}</h4>
                  <div class="space-y-2">
                    ${grammar.rules.map(rule => `
                      <div class="p-2.5 rounded-lg bg-slate-50/70 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                        ${rule}
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Crucial TOEIC Trap Alert -->
              ${grammar.trap ? `
                <div class="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed shadow-xs">
                  ${grammar.trap}
                </div>
              ` : ''}

              <!-- Authentic Workplace & Aviation Examples -->
              ${grammar.examples && grammar.examples.length > 0 ? `
                <div class="space-y-2 pt-2 border-t border-slate-100">
                  <h4 class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">${grammar.examplesTitle || 'Workplace & Industry Examples'}</h4>
                  <div class="space-y-2">
                    ${grammar.examples.map(ex => `
                      <div class="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200/70 text-xs text-slate-800 flex items-start gap-2.5 leading-relaxed">
                        <span class="font-black text-emerald-600 text-xs">✓</span>
                        <div>${ex}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    function renderToeicTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const rawQuestions = (sessionData.materials && sessionData.materials.toeicQuestions && sessionData.materials.toeicQuestions.length > 0)
        ? sessionData.materials.toeicQuestions
        : (sessionData.materials && sessionData.materials.toeic ? [sessionData.materials.toeic] : []);

      const questions = rawQuestions.map(q => {
        if (!q) return { options: [] };
        const stem = q.stem || q.question || '';
        const options = (q.options || []).map(opt => {
          if (typeof opt === 'string') {
            const m = opt.match(/^([A-D])\)\s*(.*)$/);
            return m ? { letter: m[1], text: m[2] } : { letter: '', text: opt };
          }
          return opt;
        });
        const correctLetter = q.correctLetter || 'A';
        const matchingOpt = options.find(o => o.letter === correctLetter);
        const correctText = q.correctText || (matchingOpt ? matchingOpt.text : '');
        const analysis = q.analysis || q.explanation || '';
        const strategy = q.strategy || '';
        return {
          id: q.id,
          stem,
          options,
          correctLetter,
          correctText,
          analysis,
          strategy
        };
      });

      const totalQs = questions.length;
      if (modalState.toeicIdx < 0) modalState.toeicIdx = 0;
      if (modalState.toeicIdx >= totalQs && totalQs > 0) modalState.toeicIdx = totalQs - 1;

      const currentIdx = modalState.toeicIdx || 0;
      const currentQ = questions[currentIdx] || { options: [] };
      const selected = modalState.toeicAnswers ? modalState.toeicAnswers[currentIdx] : null;
      const isAnswered = selected !== undefined && selected !== null;
      const isCorrect = isAnswered && (selected === currentQ.correctLetter);

      // Cumulative drill stats
      let answeredCount = 0;
      let correctCount = 0;
      questions.forEach((q, idx) => {
        const ans = modalState.toeicAnswers ? modalState.toeicAnswers[idx] : null;
        if (ans !== undefined && ans !== null) {
          answeredCount++;
          if (ans === q.correctLetter) correctCount++;
        }
      });
      const allAnswered = (totalQs > 0 && answeredCount === totalQs);
      const scorePercent = totalQs > 0 ? Math.round((correctCount / totalQs) * 100) : 0;

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <!-- Drill Control Bar & Question Stepper -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${(sessionData.materials && sessionData.materials.quizTitle) || 'TOEIC Practice Test • Reading Part 5'}</span>
                <div class="text-xs text-slate-500 mt-0.5">${(sessionData.materials && sessionData.materials.quizSubtitle) || 'Target pace: ~30 seconds per item'}</div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md ${answeredCount > 0 ? 'bg-slate-100 text-slate-700' : 'bg-slate-50 text-slate-400 border border-slate-200'}">
                  Score: ${correctCount} / ${totalQs}
                </span>
                <button type="button" onclick="resetToeicQuiz()" class="text-[11px] font-semibold text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer">
                  Reset Drill
                </button>
              </div>
            </div>

            <!-- Question Pills 1-5 -->
            <div class="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
              <span class="text-xs font-bold text-slate-600 mr-1">Questions:</span>
              ${questions.map((q, idx) => {
                const ans = modalState.toeicAnswers ? modalState.toeicAnswers[idx] : null;
                const isCur = idx === currentIdx;
                let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                let indicator = `Q${idx + 1}`;
                if (ans !== undefined && ans !== null) {
                  if (ans === q.correctLetter) {
                    btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-xs';
                    indicator = `✓ ${idx + 1}`;
                  } else {
                    btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold shadow-xs';
                    indicator = `✗ ${idx + 1}`;
                  }
                } else if (isCur) {
                  btnStyle = 'border-2 text-slate-900 font-black bg-slate-100';
                }
                const ringClass = isCur ? 'ring-2 ring-offset-1 ring-slate-800 scale-105' : '';
                return `
                  <button type="button" onclick="jumpToeicQuestion(${idx})" class="px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${btnStyle} ${ringClass}">
                    ${indicator}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Active Question Card -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div class="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span class="font-bold text-slate-700 uppercase tracking-wider">Question ${currentIdx + 1} of ${totalQs}</span>
              ${isAnswered ? `
                <span class="font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">
                  ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
              ` : `
                <span class="text-slate-400">Select the best option</span>
              `}
            </div>

            <p class="text-sm font-semibold text-slate-800 leading-relaxed mt-3">${currentQ.stem}</p>

            <!-- 4 Multiple Choice Options -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
              ${(currentQ.options || []).map(opt => {
                let optClass = 'bg-white border-slate-200 hover:border-slate-300 text-slate-700';
                if (isAnswered) {
                  if (opt.letter === currentQ.correctLetter) {
                    optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                  } else if (opt.letter === selected) {
                    optClass = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                  } else {
                    optClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }
                return `
                  <button type="button" onclick="handleToeicSelect('${opt.letter}')" ${isAnswered ? 'disabled' : ''} class="flex items-center gap-2 p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${optClass}">
                    <span class="font-bold text-slate-400">(${opt.letter})</span>
                    <span>${opt.text}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Answer Feedback & Analysis -->
          ${isAnswered ? `
            <div class="p-4 bg-white border ${isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-amber-200 bg-amber-50/20'} rounded-xl shadow-xs space-y-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded text-xs font-extrabold ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                  ${isCorrect ? '✓ Correct Answer: (' + currentQ.correctLetter + ') ' + currentQ.correctText : '✗ Incorrect • Correct Answer is (' + currentQ.correctLetter + ') ' + currentQ.correctText}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>${(sessionData.materials && sessionData.materials.quizTitle) ? 'Operational Analysis & Safety Rule:' : 'Grammar Rationale:'}</strong> ${currentQ.analysis}
              </p>
              ${currentQ.strategy ? `
                <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed">
                  <strong>📌 ${(sessionData.materials && sessionData.materials.quizTitle) ? 'Operational Rule & Recommendation:' : 'TOEIC Strategy Rule:'}</strong> ${currentQ.strategy}
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
              Select an option above to check your operational decision and view safety analysis.
            </div>
          `}

          <!-- Prev / Next Navigation -->
          <div class="flex items-center justify-between pt-2">
            <button type="button" onclick="prevToeicQuestion()" ${currentIdx === 0 ? 'disabled' : ''} class="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
              Previous Question
            </button>
            <span class="text-xs text-slate-500">Question ${currentIdx + 1} of ${totalQs}</span>
            <button type="button" onclick="nextToeicQuestion()" ${currentIdx === totalQs - 1 ? 'disabled' : ''} class="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
              Next Question
            </button>
          </div>

          ${allAnswered ? `
            <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-2">
              <h4 class="text-sm font-extrabold text-emerald-900">Drill Completed!</h4>
              <p class="text-xs text-emerald-800">
                You scored <strong>${correctCount} / ${totalQs}</strong> (${scorePercent}%). Your score has been recorded for this session.
              </p>
            </div>
          ` : ''}
        </div>
      `;
    }

    function renderToeicGuideTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      bodyEl.innerHTML = `
        <div class="space-y-6 text-slate-800">

          <!-- 1. Header Banner & Exam Structure Quick-Card -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs font-black text-sm" style="background-color: ${theme.primary};">
                  ETS
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs" style="background-color: ${theme.accent};">Official Guide</span>
                    <h3 class="text-sm sm:text-base font-extrabold text-slate-900">TOEIC® Listening &amp; Reading Strategy Guide</h3>
                  </div>
                  <p class="text-xs text-slate-500 mt-0.5">Practical Examination Methodology, Timing, Question Types, Grammar Rules &amp; CEFR Scales</p>
                </div>
              </div>
              <button type="button" onclick="switchModalTab('toeic')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:shadow-md transition-all cursor-pointer self-stretch sm:self-auto justify-center" style="background-color: ${theme.accent};">
                <span>Try Session TOEIC Practice</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

            <!-- 3-Part Summary Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Total Examination</span>
                <div class="text-base font-black text-slate-900">2 Hours • 200 Questions</div>
                <p class="text-[11px] text-slate-600 leading-snug">Paper &amp; pencil multiple choice test with bubble answer sheet. Maximum score: <strong>990 points</strong>.</p>
              </div>
              <div class="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl space-y-1">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">Listening Section</span>
                <div class="text-base font-black text-blue-950">45 Mins • 100 Questions</div>
                <p class="text-[11px] text-blue-900 leading-snug">Parts 1 to 4 • <strong>495 points max</strong>. Fast paced audio recorded by native speakers (US, UK, Canadian, Australian).</p>
              </div>
              <div class="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1">
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700">Reading Section</span>
                <div class="text-base font-black text-amber-950">75 Mins • 100 Questions</div>
                <p class="text-[11px] text-amber-900 leading-snug">Parts 5 to 7 • <strong>495 points max</strong>. Autonomous time management: speed through P5/P6 to preserve time for P7.</p>
              </div>
            </div>

            <!-- Benchmark Callout -->
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-3 text-xs text-emerald-950">
              <div class="flex items-center gap-2">
                <span class="text-base">🎯</span>
                <span><strong>ENAC Graduation Benchmark:</strong> Minimum <strong>785 points (CEFR B2)</strong> required for degree validation. Targeting <strong>850–945+ (B2/C1)</strong> for international career mobility.</span>
              </div>
            </div>
          </div>

          <!-- 2. Listening Section Tactics & Traps (Parts 1 to 4) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.primary};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">1. Listening Section Tactics &amp; Traps (Parts 1–4 • 45 Mins)</h4>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              
              <!-- Part 1: Photos -->
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-white px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                  <span class="text-[11px] font-bold text-slate-500">6 Photographs</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Which sentence describes what you see?</h5>
                <ul class="text-[11.5px] text-slate-600 space-y-1.5 list-disc list-inside">
                  <li><strong>Progressive difficulty:</strong> Starts simply with present continuous actions (<em>"she is speaking on the phone"</em>), then introduces specialized objects (<em>broom, sweeping, shore, drawer, wheelbarrow, eyeglasses</em>).</li>
                  <li><strong>Passive voice constructions:</strong> Watch out for passive forms (<em>"some pictures have been hung on the wall"</em>, <em>"the equipment is being serviced"</em>).</li>
                  <li><strong>Photos with no people:</strong> Usually test prepositions of place and objects (<em>"boats are being dragged along the shore"</em>).</li>
                </ul>
              </div>

              <!-- Part 2: Question & Response -->
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-white px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                  <span class="text-[11px] font-bold text-slate-500">25 Questions / Statements</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">The First-Word &amp; Trap Elimination Rule</h5>
                <ul class="text-[11.5px] text-slate-600 space-y-1.5 list-disc list-inside">
                  <li><strong>WH- Question:</strong> If opening with <em>When, Where, Why, What, Whose, How long</em>, the answer <strong>cannot</strong> be "Yes" or "No".</li>
                  <li><strong>Auxiliary Question:</strong> If starting with <em>Is it, Can you, Will they, Should we, Have you...</em>, expect an affirmative (<em>yes, sure, okay</em>) or negation (<em>no, not yet, never</em>).</li>
                  <li><strong>The Repetition Trap:</strong> If you hear the same or a similar-sounding word in the answer as in the question, <strong>it is almost always a trap!</strong> (e.g. <em>board meeting</em> &rarr; distractor: <em>"he was bored"</em>).</li>
                  <li><strong>Homophones &amp; Similar Words:</strong> <em>sale/sail</em>, <em>shore/sure</em>, <em>compete/complete</em>. Listen carefully for <strong>When</strong> vs. <strong>Where</strong>!</li>
                  <li><strong>Indirect / Obscure Answers:</strong> 4 to 5 questions are indirect (e.g. <em>"Is there enough room in your car?" &rarr; "We're taking the shuttle bus"</em>). Don't panic; guess and move on!</li>
                </ul>
              </div>

              <!-- Part 3: Conversations -->
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-white px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                  <span class="text-[11px] font-bold text-slate-500">39 Questions (13 Dialogues &times; 3 Qs)</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">The 40-Second Preview Strategy</h5>
                <ul class="text-[11.5px] text-slate-600 space-y-1.5 list-disc list-inside">
                  <li><strong>The Golden Routine:</strong> While instructions play, read the first 3 questions and options. As you listen, place a light pencil dot next to your choice. While the speaker reads the questions aloud (40s gap!), darken your bubble sheet and <strong>immediately use the remaining time to read the NEXT 3 questions</strong>.</li>
                  <li><strong>Never fall behind:</strong> Answers are in chronological order. If you miss one, guess immediately and protect your preview lead!</li>
                  <li><strong>Exact words:</strong> Unlike Part 2, in Parts 3 &amp; 4 hearing a word that is printed in your booklet is usually the <strong>correct</strong> answer.</li>
                  <li><strong>Visual graphics:</strong> Charts and price lists at the end are simple data-matching; identify the row/column mentioned.</li>
                </ul>
              </div>

              <!-- Part 4: Short Talks -->
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-white px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                  <span class="text-[11px] font-bold text-slate-500">30 Questions (10 Monologues &times; 3 Qs)</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Monologue Formats &amp; Keyword Anticipation</h5>
                <ul class="text-[11.5px] text-slate-600 space-y-1.5 list-disc list-inside">
                  <li><strong>Preview questions first:</strong> Apply the exact same 40-second preview technique as Part 3.</li>
                  <li><strong>Core monologue types:</strong>
                    <div class="pl-2 pt-0.5 text-slate-500">
                      &bull; <strong>Announcements:</strong> airport gate changes, rail delays, plant safety warnings.<br>
                      &bull; <strong>Recordings:</strong> corporate telephone voicemail, automated service menus.<br>
                      &bull; <strong>Commercials / Marketing:</strong> promotional sales, product rollouts.<br>
                      &bull; <strong>Broadcasts:</strong> weather updates, business news reports.
                    </div>
                  </li>
                  <li>Identify the speaker, purpose, and required next action in the first 2 sentences.</li>
                </ul>
              </div>

            </div>
          </div>

          <!-- 3. Reading Section Strategy & Timing (Parts 5 to 7) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.accent};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">2. Reading Section Strategy &amp; Time Budget (Parts 5–7 • 75 Mins)</h4>
            </div>

            <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-950">
                <span>⏱️ <strong>Pacing Guideline:</strong> Spend ~30 seconds per item on Parts 5 &amp; 6 (total ~25 mins) to protect at least <strong>45–50 minutes</strong> for the long texts in Part 7!</span>
                <span class="font-mono font-bold text-[11px] bg-white px-2 py-0.5 rounded border border-amber-300 shrink-0">Part 5 &amp; 6: ~30s / item</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>If choices share the same root &rarr; GRAMMAR</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 leading-relaxed">
                    Options: <em>(A) interest (B) interests (C) interested (D) interesting</em>.<br>
                    <strong>Strategy:</strong> <u>Do NOT read the whole sentence!</u> Check only the words immediately preceding and following the gap (e.g. <em>the/a + [adjective] + noun</em>, <em>preposition + V-ing</em>).
                  </p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>If choices are 4 different words &rarr; VOCABULARY</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 leading-relaxed">
                    Options: <em>(A) develop (B) raise (C) open (D) complete</em>.<br>
                    <strong>Strategy:</strong> Read the full sentence to comprehend context, business collocations, and prepositions that follow the verb.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. High-Frequency Grammar Rules & Shortcuts -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.primary};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">3. Essential High-Frequency TOEIC Grammar Rules</h4>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">

              <!-- Rule 1: Correlatives & Conjunctions -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">1. Correlative Conjunctions &amp; Pairings</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  &bull; <code>whether ... or</code> (suggests a choice between options)<br>
                  &bull; <code>either ... or</code> &nbsp;|&nbsp; <code>neither ... nor</code><br>
                  <em>Example:</em> "Please indicate on the envelope <strong>whether</strong> you prefer regular <strong>or</strong> deluxe processing."
                </p>
              </div>

              <!-- Rule 2: Future Time Clauses -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">2. Future Time Clauses ("Will" Prohibition)</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  Never use <code>will</code> directly after time conjunctions: <em>as soon as, before, until, when, after</em>.<br>
                  <em>Correct:</em> "<strong>When you arrive</strong>, I will leave." (NOT <em>"When you will arrive"</em>).
                </p>
              </div>

              <!-- Rule 3: Pronouns -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">3. Pronoun Cases &amp; Reflexives</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  &bull; Possessive determiner + noun: <em>his car / her car / their car</em><br>
                  &bull; Object pronoun: <em>belongs to him / to her / to them</em><br>
                  &bull; Possessive pronoun (alone): <em>it is his / it is hers / it is theirs</em><br>
                  &bull; Reflexives for self/alone: <em>themselves</em>, <em>by herself</em>.
                </p>
              </div>

              <!-- Rule 4: Comparatives & Superlatives -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">4. Comparatives, Superlatives &amp; Quantifiers</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  &bull; <code>than</code> &rarr; requires comparative (<em>bigger than</em>)<br>
                  &bull; <code>even</code> + comparative (<em>even more meetings</em>)<br>
                  &bull; <code>the most / the least</code> &rarr; superlatives preceded by <strong>the</strong>. Note: <em>most people</em> (without "the") = la plupart des gens.<br>
                  &bull; <em>many / few</em> + countable nouns &bull; <em>much / little</em> + uncountable nouns.
                </p>
              </div>

              <!-- Rule 5: Conjunction vs Preposition -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">5. Conjunctions vs. Prepositions</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  &bull; <code>while</code> (+ clause with verb) vs. <code>during</code> (+ noun only)<br>
                  &bull; <code>although / though</code> (+ clause) vs. <code>despite / in spite of</code> (+ noun or V-ing)<br>
                  &bull; <code>However,</code> | <code>Moreover,</code> | <code>Nevertheless,</code> &rarr; followed by a comma.<br>
                  &bull; <code>since</code> = either time (<em>depuis</em> + present perfect) or cause (<em>puisque</em>)<br>
                  &bull; <code>besides</code> (<em>en plus</em>) vs. <code>beside</code> (<em>&agrave; c&ocirc;t&eacute; de</em>).
                </p>
              </div>

              <!-- Rule 6: Preposition + Gerund -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">6. Prepositions Followed by Verb + ING</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  All prepositions require <code>verb + ing</code> (<em>before speaking</em>, <em>without asking</em>).<br>
                  <strong>Watch out for "to" as a preposition:</strong><br>
                  &bull; <em>I look forward to <strong>hearing</strong> from you</em><br>
                  &bull; <em>In addition to <strong>doing</strong> something</em><br>
                  (contrast with infinitive of purpose: <em>in order to do</em>).
                </p>
              </div>

              <!-- Rule 7: Adjectives -ed vs -ing -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">7. Adjectives: -ED vs. -ING</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  &bull; <code>-ed</code> describes how someone <strong>feels</strong>: <em>"I was interested in the presentation"</em>.<br>
                  &bull; <code>-ing</code> describes the thing or situation <strong>causing</strong> the feeling: <em>"The presentation was interesting"</em>.
                </p>
              </div>

              <!-- Rule 8: Word Length Shortcut & Part of Speech -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                <strong class="text-slate-900 block font-bold">8. Word Length &amp; Part of Speech Shortcut</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  When guessing completely unfamiliar word forms:<br>
                  &bull; <strong>Longest word</strong> &rarr; usually the <strong>NOUN</strong> (<em>deliberation</em>)<br>
                  &bull; <strong>Shortest word</strong> &rarr; usually the <strong>VERB</strong> (<em>deliberate</em>)<br>
                  &bull; <strong>Ending in -ly</strong> &rarr; <strong>ADVERB</strong> (<em>deliberately</em>)<br>
                  &bull; <strong>Remaining form</strong> &rarr; <strong>ADJECTIVE</strong> (<em>deliberate, reflective</em>)<br>
                  &bull; <strong>Compound verbs:</strong> Adverbs fit between auxiliaries: <em>"must [definitely] have done"</em>.
                </p>
              </div>

              <!-- Rule 9: Person Noun vs Thing Noun -->
              <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5 md:col-span-2">
                <strong class="text-slate-900 block font-bold">9. Person Noun vs. Concept/Thing Noun</strong>
                <p class="text-slate-600 leading-relaxed text-[11.5px]">
                  TOEIC frequently asks you to choose between a person (agent) and an abstract concept:<br>
                  &bull; <em>advisor / adviser</em> (person) vs. <em>advice</em> (uncountable noun)<br>
                  &bull; <em>researcher</em> (person, needs article: <em>a researcher</em>) vs. <em>researchers</em> (plural + have) vs. <em>research</em> (field).<br>
                  <em>Example:</em> "The financial <strong>advisor</strong> suggested an international fund" (only a person can suggest!).
                </p>
              </div>

            </div>
          </div>

          <!-- 5. Part 7 Comprehension Tactics (Skimming & Scanning) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.primary};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">4. Part 7 Reading Comprehension (Skimming &amp; Scanning)</h4>
            </div>

            <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3 text-xs">
              <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-blue-950 font-bold">
                🔄 The Reverse Strategy: Always read the questions BEFORE reading the passage!
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <h5 class="font-bold text-slate-900">📖 Skimming (Reading for Gist &amp; Purpose)</h5>
                  <p class="text-slate-600 leading-relaxed text-[11.5px]">
                    Read quickly to grasp the main ideas. Check the title, first sentence of each paragraph, and the closing sentence.<br>
                    <strong>Ask yourself:</strong> What is the document? Who is it for? What is the main objective?<br>
                    <strong>What NOT to do:</strong> Do NOT read every single word. Do NOT stop for unknown vocabulary.
                  </p>
                </div>

                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <h5 class="font-bold text-slate-900">🔍 Scanning (Searching for Specific Facts)</h5>
                  <p class="text-slate-600 leading-relaxed text-[11.5px]">
                    Read carefully to pinpoint targeted facts: dates, times, prices, personal names, phone numbers, or flight/order codes.<br>
                    <strong>How to scan:</strong> Know exactly what keyword you are looking for before glancing at the text. Use headings and bullet points as visual anchors.<br>
                    <strong>What NOT to do:</strong> Do not continue reading once you locate the needed detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. CEFR Benchmark & Score Mapping Table -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.accent};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">5. TOEIC Score Scale &amp; CEFR Level Benchmarks</h4>
            </div>

            <div class="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-xs">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th class="py-2.5 px-3 w-20">CEFR</th>
                    <th class="py-2.5 px-3 w-32">TOEIC Score</th>
                    <th class="py-2.5 px-3">Proficiency &amp; Workplace Competencies</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-[11.5px]">
                  <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 font-black text-slate-500">A1</td>
                    <td class="py-2 px-3 font-mono font-bold text-slate-600">120 &ndash; 224</td>
                    <td class="py-2 px-3 text-slate-600">Beginner: Can introduce oneself and ask/answer basic questions in familiar contexts.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 font-black text-slate-500">A2</td>
                    <td class="py-2 px-3 font-mono font-bold text-slate-600">225 &ndash; 549</td>
                    <td class="py-2 px-3 text-slate-600">Elementary: Can describe basic background and exchange simple direct information on familiar topics.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 font-black text-blue-600">B1</td>
                    <td class="py-2 px-3 font-mono font-bold text-blue-700">550 &ndash; 784</td>
                    <td class="py-2 px-3 text-slate-700">Intermediate: Understands the main points in clear standard speech and workplace texts on familiar matters.</td>
                  </tr>
                  <tr class="bg-emerald-50/70 border-l-4 border-emerald-500 font-medium">
                    <td class="py-2.5 px-3 font-black text-emerald-800">B2 🎯</td>
                    <td class="py-2.5 px-3 font-mono font-black text-emerald-800">785 &ndash; 944</td>
                    <td class="py-2.5 px-3 text-emerald-950">
                      <strong>Independent User (ENAC Graduation Benchmark):</strong> Understands complex technical and business texts. Interacts with spontaneity and fluency in professional meetings and discussions.
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 font-black text-purple-600">C1</td>
                    <td class="py-2 px-3 font-mono font-bold text-purple-700">945 &ndash; 990</td>
                    <td class="py-2 px-3 text-slate-700">Autonomous / Proficient: Expresses ideas fluently without searching for expressions. Grasps implicit meanings and complex professional nuance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom Action Switcher to Practice Drill -->
          <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-slate-700">Ready to put these strategies into practice?</p>
              <p class="text-[11px] text-slate-500">Test your grammatical accuracy and timing on this session's official Reading Part 5 question drill.</p>
            </div>
            <button type="button" onclick="switchModalTab('toeic')" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white shadow-xs hover:shadow-md transition-all cursor-pointer" style="background-color: ${theme.primary};">
              <span>Open TOEIC Practice Drill</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

        </div>
      `;
    }

    function renderDdrsTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      const modCourse = getActiveModalCourseData();
      const ddrs = modCourse.ddrs || { items: [], axes: [] };
      const items = (ddrs.items && ddrs.items.length > 0) ? ddrs.items : (ddrs.axes || []);

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <!-- Official Framework Banner -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official National Framework (Conférence des Grandes Écoles)</span>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">${ddrs.summary || 'Le Référentiel National DD&RS structure les engagements écologiques, sociétaux et éthiques selon 5 axes stratégiques et leurs domaines transversaux d\'application.'}</p>
            <div class="mt-3 text-xs text-slate-500 pt-2 border-t border-slate-100 font-semibold">
              Includes 5 Strategic Axes &amp; 7 Cross-Functional Competency Tags
            </div>
          </div>

          <!-- All 12 Items (Axes 1-5 + Tags 6-12) -->
          <div class="space-y-2.5">
            ${items.map(item => {
              const isMuted = !!item.isMuted;
              if (isMuted) {
                return `
                  <div class="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl opacity-45 space-y-1 transition-opacity hover:opacity-75" title="Non pertinent pour ce module (inactif)">
                    <div class="flex items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="bg-slate-300 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded">${item.badge || 'TAG'}</span>
                        <span class="text-xs font-bold text-slate-400">${item.num}</span>
                        <h4 class="text-xs sm:text-sm font-medium text-slate-600">${item.title}</h4>
                      </div>
                      <span class="text-[10px] uppercase font-semibold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Not active in Mod ${modalState.modNum}</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed pl-1">${item.desc}</p>
                  </div>
                `;
              } else {
                return `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${item.badge || 'AXE'}</span>
                      <span class="text-xs font-black" style="color: ${theme.primary};">${item.num}</span>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h4>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed pl-1">${item.desc}</p>
                  </div>
                `;
              }
            }).join('')}
          </div>
        </div>
      `;
    }


    // DIGITAL STUDENT NOTEPAD TAB & CLIENT-SIDE EXPORT CONTROLLERS
    // ============================================================================

    window.handleNotepadInput = function(val) {
      const progKey = modalState.program || currentProgram || "at";
      const storageKey = "gsea_" + progKey + "_m" + modalState.modNum + "_s" + modalState.sessionNum + "_general_notes";
      try {
        localStorage.setItem(storageKey, val);
      } catch (e) {
        window.__GSEA_NOTES_CACHE = window.__GSEA_NOTES_CACHE || {};
        window.__GSEA_NOTES_CACHE[storageKey] = val;
      }
      window.updateNotepadStats(val);
      const indicator = document.getElementById("notepad-save-indicator");
      if (indicator) {
        indicator.innerHTML = `<svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span class="text-emerald-600">Saved locally</span>`;
      }
    };

    window.updateNotepadStats = function(text) {
      const statsEl = document.getElementById("notepad-stats");
      if (!statsEl) return;
      const clean = (text || "").trim();
      const words = clean ? clean.split(/\s+/).length : 0;
      const chars = (text || "").length;
      statsEl.textContent = words + " words • " + chars + " characters";
    };

    window.insertNotepadHeader = function(headerText) {
      const ta = document.getElementById("session-notepad-textarea");
      if (!ta) return;
      const divider = "\n\n--- [ " + headerText + " ] ---\n• ";
      const start = ta.selectionStart || ta.value.length;
      const end = ta.selectionEnd || ta.value.length;
      ta.value = ta.value.substring(0, start) + divider + ta.value.substring(end);
      ta.focus();
      ta.selectionStart = ta.selectionEnd = start + divider.length;
      window.handleNotepadInput(ta.value);
    };

    window.importWorksheetNotesToNotepad = function() {
      const sNum = modalState.sessionNum;
      const rpNote = window.getLessonNote ? window.getLessonNote(sNum, "roleplay") : "";
      const sfNote = window.getLessonNote ? window.getLessonNote(sNum, "safety") : "";
      if (!rpNote.trim() && !sfNote.trim()) {
        alert("No in-worksheet activity notes recorded for this session yet.");
        return;
      }
      let appendText = "\n\n=== [ Imported from Worksheet Activities ] ===";
      if (rpNote.trim()) appendText += "\n• Negotiation / Spoken Task:\n" + rpNote.trim();
      if (sfNote.trim()) appendText += "\n• Safety Decision / Fix-It Plan:\n" + sfNote.trim();

      const ta = document.getElementById("session-notepad-textarea");
      if (ta) {
        ta.value = (ta.value ? ta.value + "\n" : "") + appendText;
        window.handleNotepadInput(ta.value);
        ta.scrollTop = ta.scrollHeight;
      }
    };

    window.copyNotepadNotes = function() {
      const ta = document.getElementById("session-notepad-textarea");
      if (!ta || !ta.value.trim()) {
        alert("Your notepad is currently empty.");
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(() => {
          const btnText = document.getElementById("copy-btn-text");
          if (btnText) {
            btnText.textContent = "✓ Copied!";
            setTimeout(() => { btnText.textContent = "📋 Copy All"; }, 2000);
          }
        }).catch(() => {
          ta.select();
          document.execCommand("copy");
        });
      } else {
        ta.select();
        document.execCommand("copy");
      }
    };

    window.downloadNotepadNotes = function() {
      const ta = document.getElementById("session-notepad-textarea");
      const text = ta ? ta.value : "";
      if (!text.trim()) {
        alert("Your notepad is currently empty.");
        return;
      }
      const progKey = (modalState.program || currentProgram || "at").toUpperCase();
      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};
      const sessionTitle = (sessionData.objectives && sessionData.objectives.title) || ("Session " + modalState.sessionNum);
      const timestamp = new Date().toLocaleString();

      const fileContent = "=======================================================\n" +
        "ENAC GSEA • " + progKey + " MODULE " + modalState.modNum + " • SESSION " + modalState.sessionNum + "\n" +
        sessionTitle + "\n" +
        "Date: " + timestamp + "\n" +
        "=======================================================\n\n" +
        text + "\n\n" +
        "=======================================================\n" +
        "End of Student Notes • Saved from ENAC Learning Deck\n";

      const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
      const filename = "GSEA_" + progKey + "_M" + modalState.modNum + "_Session" + modalState.sessionNum + "_Notes.txt";
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    };

    window.printNotepadNotes = function() {
      const ta = document.getElementById("session-notepad-textarea");
      const text = ta ? ta.value : "";
      if (!text.trim()) {
        alert("Your notepad is currently empty.");
        return;
      }
      const progKey = (modalState.program || currentProgram || "at").toUpperCase();
      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};
      const sessionTitle = (sessionData.objectives && sessionData.objectives.title) || ("Session " + modalState.sessionNum);
      const timestamp = new Date().toLocaleDateString();

      const printWindow = window.open("", "_blank", "width=800,height=900");
      if (!printWindow) {
        window.print();
        return;
      }
      printWindow.document.write(
        "<!DOCTYPE html><html><head><title>Notes - " + sessionTitle + "</title>" +
        "<style>" +
        "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }" +
        ".header { border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 24px; }" +
        ".badge { display: inline-block; background: #0284c7; color: #fff; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }" +
        "h1 { font-size: 20px; margin: 0 0 6px 0; color: #0f172a; }" +
        ".meta { font-size: 12px; color: #64748b; font-family: monospace; }" +
        ".notes-content { font-size: 14px; white-space: pre-wrap; background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: monospace; }" +
        ".footer { margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; }" +
        "</style></head><body>" +
        "<div class=\"header\">" +
        "<div class=\"badge\">ENAC GSEA • " + progKey + " Module " + modalState.modNum + " • Session " + modalState.sessionNum + "</div>" +
        "<h1>" + sessionTitle + "</h1>" +
        "<div class=\"meta\">Printed: " + timestamp + " • Student Study Notes</div>" +
        "</div>" +
        "<div class=\"notes-content\">" + text.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</div>" +
        "<div class=\"footer\">ENAC GSEA English Learning Portal • Student Digital Notes</div>" +
        "<script>window.onload = function() { window.print(); }<\/script></body></html>"
      );
      printWindow.document.close();
    };

    window.clearNotepadNotes = function() {
      if (!confirm("Are you sure you want to clear your notes for this session? This cannot be undone.")) return;
      const progKey = modalState.program || currentProgram || "at";
      const storageKey = "gsea_" + progKey + "_m" + modalState.modNum + "_s" + modalState.sessionNum + "_general_notes";
      try {
        localStorage.removeItem(storageKey);
      } catch (e) {}
      window.__GSEA_NOTES_CACHE = window.__GSEA_NOTES_CACHE || {};
      window.__GSEA_NOTES_CACHE[storageKey] = "";
      const ta = document.getElementById("session-notepad-textarea");
      if (ta) ta.value = "";
      window.updateNotepadStats("");
      const indicator = document.getElementById("notepad-save-indicator");
      if (indicator) {
        indicator.innerHTML = `<span class="text-slate-400">Notes cleared</span>`;
      }
    };

    function renderNotepadTab(sessionData, theme) {
      const bodyEl = document.getElementById("modal-body");
      if (!bodyEl) return;
      const progKey = modalState.program || currentProgram || "at";
      const storageKey = "gsea_" + progKey + "_m" + modalState.modNum + "_s" + modalState.sessionNum + "_general_notes";
      let savedNotes = "";
      try {
        savedNotes = localStorage.getItem(storageKey) || (window.__GSEA_NOTES_CACHE && window.__GSEA_NOTES_CACHE[storageKey]) || "";
      } catch (e) {
        savedNotes = (window.__GSEA_NOTES_CACHE && window.__GSEA_NOTES_CACHE[storageKey]) || "";
      }

      const sessionTitle = (sessionData.objectives && sessionData.objectives.title) || ("Session " + modalState.sessionNum);
      const progConfig = (typeof PROGRAMS_CONFIG !== "undefined" && (PROGRAMS_CONFIG[progKey] || PROGRAMS_CONFIG.at)) || { name: "Technical English", code: "AT" };

      // Check if this session has any recorded worksheet notes
      const sNum = modalState.sessionNum;
      const hasWorksheetNotes = Boolean(
        window.getLessonNote && (window.getLessonNote(sNum, "roleplay") || window.getLessonNote(sNum, "safety"))
      );

      bodyEl.innerHTML = `
        <div class="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          <!-- Header Card with Action Toolbar -->
          <div class="p-3 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3 border-b border-slate-100 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
              <div>
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-bold text-white uppercase tracking-wider shadow-xs" style="background-color: ${theme.primary};">
                    ${progConfig.code || "AT"} • M${modalState.modNum} • S${modalState.sessionNum}
                  </span>
                  <span class="text-[11px] sm:text-xs font-bold text-slate-400">Digital Notepad</span>
                </div>
                <h3 class="text-sm sm:text-lg font-black text-slate-800 leading-snug">${sessionTitle}</h3>
              </div>

              <!-- Quick Action Toolbar -->
              <div class="flex items-center flex-wrap gap-1 sm:gap-1.5 shrink-0">
                <button type="button" onclick="window.copyNotepadNotes()" id="btn-copy-notepad" class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs">
                  <svg class="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  <span id="copy-btn-text">📋 Copy</span>
                </button>
                <button type="button" onclick="window.downloadNotepadNotes()" class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-700 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs">
                  <svg class="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  <span>💾 Download</span>
                </button>
                <button type="button" onclick="window.printNotepadNotes()" class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs">
                  <svg class="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                  <span class="hidden sm:inline">🖨️ Print / PDF</span>
                  <span class="sm:hidden">🖨️ Print</span>
                </button>
                <button type="button" onclick="window.clearNotepadNotes()" class="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs" title="Clear notes for this session">
                  <svg class="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <!-- Compact Storage Notice Callout (Mobile-optimized) -->
            <div class="p-2.5 sm:p-3.5 bg-amber-50 border border-amber-200/90 rounded-xl text-amber-950 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2.5">
              <span class="text-sm sm:text-base shrink-0 mt-0.5">⚠️</span>
              <div class="space-y-0.5 sm:space-y-1">
                <div class="flex items-center justify-between gap-1">
                  <span class="font-bold uppercase tracking-wider text-[10px] sm:text-[11px] text-amber-800">Local Browser Storage Notice</span>
                  <span class="text-[9.5px] text-amber-700/80 font-mono sm:hidden">Private</span>
                </div>
                <p>
                  Notes are stored <strong>locally in this browser</strong>. They are private to this device and never uploaded to the school network.
                </p>
                <p class="text-amber-900/80 text-[10.5px] sm:text-[11px]">
                  <strong>Warning:</strong> Clearing cookies or using Private/Incognito mode erases notes. On shared computers, click <strong>"💾 Download"</strong> or <strong>"📋 Copy"</strong> before leaving class to save a copy!
                </p>
              </div>
            </div>

            <!-- Quick Section Heading Inserters (Desktop & Mobile Wrapped) -->
            <div class="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center flex-wrap gap-1 sm:gap-1.5 text-xs">
              <span class="text-[10.5px] sm:text-[11px] font-bold text-slate-500 mr-0.5">Quick Add:</span>
              <button type="button" onclick="window.insertNotepadHeader('Key Vocabulary &amp; Definitions')" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-[10.5px] sm:text-[11px] font-semibold transition-all cursor-pointer">+ Vocabulary</button>
              <button type="button" onclick="window.insertNotepadHeader('Useful Phrasing &amp; Sentence Patterns')" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-[10.5px] sm:text-[11px] font-semibold transition-all cursor-pointer">+ Phrasing</button>
              <button type="button" onclick="window.insertNotepadHeader('Role-Play &amp; Spoken Practice Notes')" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-[10.5px] sm:text-[11px] font-semibold transition-all cursor-pointer">+ Spoken Notes</button>
              <button type="button" onclick="window.insertNotepadHeader('Questions for Teacher / FE Prep')" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-[10.5px] sm:text-[11px] font-semibold transition-all cursor-pointer">+ FE Questions</button>
              ${hasWorksheetNotes ? `
                <button type="button" onclick="window.importWorksheetNotesToNotepad()" class="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-md text-[10.5px] sm:text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1">
                  <span>📥 Import Worksheet Notes</span>
                </button>
              ` : ""}
            </div>
          </div>

          <!-- Notepad Typing Surface with Keyboard Auto-Scroll -->
          <div class="relative bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
            <textarea id="session-notepad-textarea"
              oninput="window.handleNotepadInput(this.value)"
              rows="10"
              class="w-full min-h-[180px] sm:min-h-[300px] p-3 sm:p-4 text-xs sm:text-sm font-sans text-slate-800 leading-relaxed bg-transparent resize-y outline-none placeholder-slate-400 select-text"
              placeholder="Start typing your notes for this session here...&#10;&#10;Suggestions:&#10;• Write down useful phrases heard during pair discussions&#10;• Record new vocabulary with definitions and pronunciation notes&#10;• Draft answers for the spoken speaking tasks and scenarios&#10;• List questions to ask during the tutorial or Formative Evaluation"
            >${savedNotes}</textarea>

            <!-- Bottom Status Bar -->
            <div class="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border-t border-slate-100 text-[10.5px] sm:text-[11px] font-mono text-slate-500 select-none">
              <div id="notepad-save-indicator" class="flex items-center gap-1.5 text-emerald-600 font-bold">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span>Saved locally</span>
              </div>
              <div id="notepad-stats" class="text-slate-500">
                0 words • 0 characters
              </div>
            </div>
          </div>
        </div>
      `;

      // Update initial stats
      window.updateNotepadStats(savedNotes);

      // Prevent deck keyboard shortcuts & auto-scroll into view when keyboard opens on mobile
      const ta = document.getElementById("session-notepad-textarea");
      if (ta) {
        ta.addEventListener("keydown", (e) => e.stopPropagation());
        ta.addEventListener("focus", () => {
          setTimeout(() => {
            ta.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
        });
      }
    }
