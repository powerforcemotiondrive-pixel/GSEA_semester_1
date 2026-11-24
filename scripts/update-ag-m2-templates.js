/**
 * Update script for src/js/06-templates-ag2.js
 * Updates renderAg2LessonContentTabSession1 and renderAg2LessonContentTabSession2
 * with canonical PDF links, auto-saving textareas, zero timings, and varied activities.
 */

const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '..', 'src', 'js', '06-templates-ag2.js');
let fileContent = fs.readFileSync(templatePath, 'utf8');

const fn1Start = fileContent.indexOf("function renderAg2LessonContentTabSession1");
const fn2Start = fileContent.indexOf("function renderAg2LessonContentTabSession2");
const fn3Start = fileContent.indexOf("function renderAg2LessonContentTabSession3");

if (fn1Start === -1 || fn2Start === -1 || fn3Start === -1) {
  console.error("Could not find function markers in 06-templates-ag2.js");
  process.exit(1);
}

// Function 1 Implementation
const fn1Code = `function renderAg2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const videoLab = content.videoLab || {};
      const grammar = content.grammarClinic || {};
      const research = content.researchPitch || {};
      const taboo = content.vocabGame || {};
      const debate = content.debate || {};

      const savedNote = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('s1_m2_ag_s1_notes') : '';

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Action Bar with Official 7-Page PDF Link -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${ov.title || 'Extreme Weather & Atmospheric Hazards'}</h3>
            </div>
            <a href="docs/GSEA_S1_M2_AG_S1_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="\${ov.image || 'images/ag_m2card1.jpg'}" alt="\${ov.title || 'Extreme Weather'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">\${ov.badge || 'Session Overview • Extreme Weather & Atmospheric Hazards'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${ov.title || 'Extreme Weather & Atmospheric Hazards'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${ov.subtitle || 'Convective Microbursts, Runaway Surface Heating & Aerodrome Severe Weather Protocols'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Aviation Meteorology & Aerodrome Operations</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          \${typeof renderSessionBriefingBanner === 'function' ? renderSessionBriefingBanner(sessionData, theme) : ''}

          <!-- Personal Notes Auto-Save Card -->
          <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl shadow-2xs space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">Session 1 Personal Study & Speaking Notes</h4>
              </div>
              <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Auto-Saved Locally</span>
            </div>
            <textarea id="lesson-note-s1-m2-ag-s1" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_ag_s1_notes', this.value)" placeholder="Type your personal observations, severe weather vocabulary reflections, and speaking notes here..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-amber-400 focus:outline-none transition-all leading-relaxed">\${savedNote}</textarea>
          </div>

          <!-- Part 1: Extreme Weather News & Meteorological Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${opening.title || 'Part 1: Extreme Weather News & Meteorological Diagnostic'}</h4>
                  <p class="text-[11px] text-slate-500">\${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Opening Diagnostic</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(opening, theme) : ''}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Severe Climate Headlines & Global Meteorological Bulletins</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                \${(opening.newsPrompts || []).map(p => \`<li>\${p}</li>\`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid with Sentence Stems (Rule 1.V) -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">\${(opening.diagnostic && opening.diagnostic.title) || 'Meteorological Concepts Diagnostic Check'}</h5>
                <span class="text-[11px] text-slate-500">\${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Distinction 0\${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: \${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">\${q.q}</p>
                      \${q.prompt ? \`
                        <div class="mt-2 p-2 bg-blue-50/80 border border-blue-200 rounded-lg text-[11px] text-blue-900 font-medium">
                          <span class="font-bold text-blue-700">Sentence Stem:</span> "\${q.prompt}"
                        </div>
                      \` : ''}
                    </div>
                    <div class="space-y-2 pt-1">
                      <div id="ag2-spotcheck-ans-1-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        \${q.answer}
                      </div>
                      <button type="button" onclick="document.getElementById('ag2-spotcheck-ans-1-\${q.id}').classList.toggle('hidden'); this.textContent = document.getElementById('ag2-spotcheck-ans-1-\${q.id}').classList.contains('hidden') ? 'Reveal Model Answer' : 'Hide Answer';" class="w-full py-1.5 px-3 rounded-lg text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-all cursor-pointer">
                        Reveal Model Answer
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: Interactive Video Lab (Convective Microburst Dynamics) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${videoLab.title || 'Part 2: Interactive Video Lab — Convective Storms & Microburst Physics'}</h4>
                  <p class="text-[11px] text-slate-500">\${videoLab.summary || ''}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Video Noticeboard</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(videoLab, theme) : ''}

            <!-- 2-Column Noticeboard Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              <!-- Left Column: Video Player -->
              <div class="lg:col-span-7 flex flex-col space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 font-mono">
                    CONVECTIVE PHYSICS • ATMOSPHERIC WINDSHEAR
                  </span>
                  <span class="text-[10.5px] text-slate-500 font-mono">Low-Altitude Hazard</span>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  \${videoLab.videoTitle || 'Severe Convective Storms: Downburst Dynamics & Airport Windshear'}
                </h4>
                <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
                  <iframe class="w-full h-full" src="\${videoLab.videoUrl || 'https://www.youtube.com/embed/6_mH15N7fE8'}" title="Severe Convective Storms & Microbursts" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="flex items-center justify-between pt-1 text-[11px]">
                  <span class="text-[10px] text-slate-400 font-mono">\${videoLab.channel || 'Meteorology & Atmospheric Dynamics Lab'}</span>
                  <a href="\${videoLab.youtubeUrl || 'https://www.youtube.com/watch?v=6_mH15N7fE8'}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-slate-800 hover:text-amber-600 inline-flex items-center gap-1 underline transition-colors cursor-pointer">
                    <span>Watch on YouTube</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <!-- Right Column: Operational Synopsis & Debrief -->
              <div class="lg:col-span-5 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5">
                <div class="border-b border-slate-200 pb-2">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Operational Synopsis</span>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">Downburst Velocity & Vortex Ring Propagation</h5>
                  <p class="text-[11px] text-slate-600 leading-relaxed mt-1">
                    Convective downdrafts accelerate through evaporative cooling. When this descending air column slams into the runway surface, it curls into expanding vortex rings producing severe low-altitude windshear.
                  </p>
                </div>

                <div>
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Core Technical Concepts:</span>
                  <div class="flex flex-wrap gap-1.5">
                    \${(videoLab.concepts || []).map(c => \`
                      <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10.5px] font-medium text-slate-700 shadow-2xs font-mono">\${c}</span>
                    \`).join('')}
                  </div>
                </div>

                <div class="pt-2 border-t border-slate-200 space-y-2">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Guided Spoken Discussion:</span>
                  \${(videoLab.guidedQuestions || []).map((gq, idx) => \`
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1.5 text-xs shadow-2xs">
                      <p class="font-bold text-slate-900">\${gq.q}</p>
                      <button type="button" onclick="document.getElementById('ag-s1-gq-\${idx}').classList.toggle('hidden');" class="text-[10.5px] font-bold text-blue-600 hover:underline inline-block cursor-pointer">
                        Toggle Technical Explanation &rarr;
                      </button>
                      <div id="ag-s1-gq-\${idx}" class="hidden p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                        \${gq.answer}
                      </div>
                    </div>
                  \`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Part 3: Language Clinic (Causal Linkers & Conditionals) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${grammar.title || 'Part 3: Language Clinic — Formal Causal Linkers & Conditional Risk Formulas'}</h4>
                  <p class="text-[11px] text-slate-500">\${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Language Clinic</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(grammar, theme) : ''}

            <!-- Grammar Rules Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              \${(grammar.patterns || []).map(p => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 class="text-xs font-bold text-slate-900 font-mono">\${p.rule}</h5>
                  <div class="p-2 bg-white border border-slate-200 rounded-md font-mono text-[10.5px] text-blue-800">
                    \${p.formula}
                  </div>
                  <ul class="space-y-1 text-[11px] text-slate-600 pl-4 list-disc">
                    \${p.examples.map(ex => \`<li>\${ex}</li>\`).join('')}
                  </ul>
                </div>
              \`).join('')}
            </div>

            <!-- Interactive Drills -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Spoken Transformation Drills:</h5>
              \${(grammar.drills || []).map(drill => \`
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <p class="text-xs font-semibold text-slate-800"><span class="font-mono text-slate-500 font-bold">[\${drill.id}]</span> \${drill.prompt}</p>
                  <div id="ag2-s1-drill-\${drill.id}" class="hidden p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 font-medium">
                    \${drill.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('ag2-s1-drill-\${drill.id}').classList.toggle('hidden');" class="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
                    Check Phrasing &rarr;
                  </button>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 4: 3-Person Case Research & Pitch -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${research.title || 'Part 4: 3-Person Incident Dossier Research & Mitigation Pitch'}</h4>
                  <p class="text-[11px] text-slate-500">\${research.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Case Research</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(research, theme) : ''}

            <!-- 3 Real-World Case Dossiers -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              \${(research.dossiers || []).map(d => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono font-bold text-[10px]">\${d.id}</span>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900">\${d.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed"><strong class="text-slate-800">Context:</strong> \${d.context}</p>
                    <div class="p-2 bg-white border border-slate-200 rounded text-[10.5px] text-slate-700 font-mono leading-relaxed">
                      \${d.data}
                    </div>
                  </div>
                  <div class="p-2 bg-amber-50 border border-amber-200 rounded text-[10.5px] text-amber-900 font-medium">
                    <strong>Challenge:</strong> \${d.challenge}
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Peer Observer Active Listening Checklist (Student B) -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">\${research.rubric?.title || 'Peer Observer Active Listening Rubric (Student B)'}</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                \${(research.rubric?.criteria || []).map(c => \`
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                    <span class="font-bold text-slate-800 block">\${c.name}</span>
                    <span class="text-[11px] text-slate-600">\${c.target}</span>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Pitch Notes Area -->
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-700">Small Group 90-Second Briefing Outline & Action Plan:</label>
              <textarea id="ag-s1-pitch-notes" oninput="window.saveLessonNote && window.saveLessonNote('ag_s1_pitch_notes', this.value)" placeholder="Draft your 3-point briefing: 1. Root meteorological cause... 2. Cascading operational impact... 3. Immediate mitigation mandate..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed"></textarea>
            </div>
          </div>

          <!-- Part 5: Vocabulary Game: Extreme Weather Taboo -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${taboo.title || 'Part 5: Interactive Vocabulary Game — Extreme Weather Taboo'}</h4>
                  <p class="text-[11px] text-slate-500">\${taboo.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-amber-600 uppercase tracking-wider shrink-0 font-mono">Fluency Game</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(taboo, theme) : ''}

            <!-- 12 Taboo Cards Grid with IPA -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              \${(taboo.cards || []).map((card, idx) => \`
                <div class="p-3 bg-slate-50 border-2 border-slate-200 hover:border-amber-400 rounded-xl transition-all shadow-2xs space-y-2 text-center">
                  <div class="border-b border-slate-200 pb-1.5">
                    <span class="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Target Word #\${idx + 1}</span>
                    <h5 class="text-xs sm:text-sm font-black text-slate-900 leading-tight mt-0.5">\${card.word}</h5>
                    <span class="text-[10px] text-blue-700 font-mono block mt-0.5">\${card.ipa}</span>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[9px] font-bold uppercase tracking-wider text-rose-600 block">Forbidden Words:</span>
                    \${card.forbidden.map(f => \`
                      <span class="inline-block px-1.5 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 rounded text-[10px] font-bold mx-0.5">\${f}</span>
                    \`).join('')}
                  </div>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 6: Aerodrome Crisis Shutdown Debate -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${debate.title || 'Part 6: Aerodrome Crisis Shutdown Debate'}</h4>
                  <p class="text-[11px] text-slate-500">\${debate.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Formal Debate</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(debate, theme) : ''}

            <!-- 3 Debate Roles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              \${(debate.roles || []).map(r => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 border-b border-slate-200 pb-1.5 font-mono">\${r.title}</h5>
                  <p class="text-xs text-slate-700 leading-relaxed font-medium">\${r.stance}</p>
                  <div class="space-y-1 pt-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Mandatory Stance Points:</span>
                    <ul class="space-y-1 pl-4 list-disc text-[11px] text-slate-600 leading-relaxed">
                      \${r.keyPoints.map(kp => \`<li>\${kp}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <div class="space-y-1.5 pt-2">
              <label class="text-xs font-bold text-slate-700">Consensus Resolution & Multi-Stakeholder Verdict:</label>
              <textarea id="ag-s1-debate-verdict" oninput="window.saveLessonNote && window.saveLessonNote('ag_s1_debate_verdict', this.value)" placeholder="Record your committee's negotiated compromise: runway operating thresholds, ramp safety hold rules, and diversion limits..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed"></textarea>
            </div>
          </div>
        </div>
      \`;
    }`;

// Function 2 Implementation
const fn2Code = `function renderAg2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const videoLab = content.videoLab || {};
      const grammar = content.grammarClinic || {};
      const game = content.vocabGame || {};
      const sprint = content.designSprint || {};
      const policy = content.policyDebate || {};

      const savedNote = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('s1_m2_ag_s2_notes') : '';

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Action Bar with Official 7-Page PDF Link -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${ov.title || 'Sustainable Cities & Low-Emission Mobility'}</h3>
            </div>
            <a href="docs/GSEA_S1_M2_AG_S2_Lesson_Worksheet.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Lesson Worksheet (PDF)</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="\${ov.image || 'images/ag_m2card2.jpg'}" alt="\${ov.title || 'Sustainable Cities'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">\${ov.badge || 'Session Overview • Sustainable Cities & Urban Design'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${ov.title || 'Sustainable Cities & Low-Emission Mobility'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${ov.subtitle || 'Sponge Cities, Multimodal Transit Integration & 15-Minute Urban Districts'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Urban Civil Engineering & Sustainable Transportation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          \${typeof renderSessionBriefingBanner === 'function' ? renderSessionBriefingBanner(sessionData, theme) : ''}

          <!-- Personal Notes Auto-Save Card -->
          <div class="p-4 bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded-xl shadow-2xs space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">Session 2 Personal Study & Speaking Notes</h4>
              </div>
              <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Auto-Saved Locally</span>
            </div>
            <textarea id="lesson-note-s1-m2-ag-s2" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_ag_s2_notes', this.value)" placeholder="Type your personal observations, urban mobility collocations, and debate speaking notes here..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-amber-400 focus:outline-none transition-all leading-relaxed">\${savedNote}</textarea>
          </div>

          <!-- Part 1: Urban Innovation News & Oral Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${opening.title || 'Part 1: Urban Innovation News Scan & Oral Diagnostic'}</h4>
                  <p class="text-[11px] text-slate-500">\${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Opening Diagnostic</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(opening, theme) : ''}

            <!-- News Prompts -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-emerald-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-emerald-900">Sustainable Mobility & Urban Engineering Bulletins</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-emerald-900/90 leading-relaxed">
                \${(opening.newsPrompts || []).map(p => \`<li>\${p}</li>\`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid with Sentence Stems (Rule 1.V) -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">\${(opening.diagnostic && opening.diagnostic.title) || 'Urban Sustainability Concepts Diagnostic Check'}</h5>
                <span class="text-[11px] text-slate-500">\${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Concept 0\${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: \${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">\${q.q}</p>
                      \${q.prompt ? \`
                        <div class="mt-2 p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg text-[11px] text-emerald-900 font-medium">
                          <span class="font-bold text-emerald-700">Sentence Stem:</span> "\${q.prompt}"
                        </div>
                      \` : ''}
                    </div>
                    <div class="space-y-2 pt-1">
                      <div id="ag2-spotcheck-ans-2-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        \${q.answer}
                      </div>
                      <button type="button" onclick="document.getElementById('ag2-spotcheck-ans-2-\${q.id}').classList.toggle('hidden'); this.textContent = document.getElementById('ag2-spotcheck-ans-2-\${q.id}').classList.contains('hidden') ? 'Reveal Model Answer' : 'Hide Answer';" class="w-full py-1.5 px-3 rounded-lg text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-all cursor-pointer">
                        Reveal Model Answer
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 2: Interactive Video Lab (Sponge Cities & Flood Absorption) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${videoLab.title || 'Part 2: Interactive Video Lab — Sponge Cities & Urban Flood Resilience'}</h4>
                  <p class="text-[11px] text-slate-500">\${videoLab.summary || ''}</p>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">Video Noticeboard</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(videoLab, theme) : ''}

            <!-- 2-Column Noticeboard Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              <!-- Left Column: Video Player -->
              <div class="lg:col-span-7 flex flex-col space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-800 font-mono">
                    NATURE-BASED INFRASTRUCTURE • HYDROLOGY
                  </span>
                  <span class="text-[10.5px] text-slate-500 font-mono">Civil Engineering</span>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  \${videoLab.videoTitle || 'How Sponge Cities Absorb Rainwater & Prevent Flooding'}
                </h4>
                <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
                  <iframe class="w-full h-full" src="\${videoLab.videoUrl || 'https://www.youtube.com/embed/8mL25lC61Pc'}" title="How Sponge Cities Absorb Rainwater" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="flex items-center justify-between pt-1 text-[11px]">
                  <span class="text-[10px] text-slate-400 font-mono">\${videoLab.channel || 'Civil Engineering & Urban Planning Review'}</span>
                  <a href="\${videoLab.youtubeUrl || 'https://www.youtube.com/watch?v=8mL25lC61Pc'}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-slate-800 hover:text-emerald-600 inline-flex items-center gap-1 underline transition-colors cursor-pointer">
                    <span>Watch on YouTube</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <!-- Right Column: Operational Synopsis & Debrief -->
              <div class="lg:col-span-5 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5">
                <div class="border-b border-slate-200 pb-2">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Operational Synopsis</span>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">Hydrological Infiltration & Peak Delay</h5>
                  <p class="text-[11px] text-slate-600 leading-relaxed mt-1">
                    Sponge cities deploy bioretention basins, permeable concrete, and vegetated swales to absorb stormwater locally, attenuating flood crests and recharging groundwater reserves.
                  </p>
                </div>

                <div>
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Core Technical Concepts:</span>
                  <div class="flex flex-wrap gap-1.5">
                    \${(videoLab.concepts || []).map(c => \`
                      <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10.5px] font-medium text-slate-700 shadow-2xs font-mono">\${c}</span>
                    \`).join('')}
                  </div>
                </div>

                <div class="pt-2 border-t border-slate-200 space-y-2">
                  <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Guided Spoken Discussion:</span>
                  \${(videoLab.guidedQuestions || []).map((gq, idx) => \`
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1.5 text-xs shadow-2xs">
                      <p class="font-bold text-slate-900">\${gq.q}</p>
                      <button type="button" onclick="document.getElementById('ag-s2-gq-\${idx}').classList.toggle('hidden');" class="text-[10.5px] font-bold text-emerald-600 hover:underline inline-block cursor-pointer">
                        Toggle Technical Explanation &rarr;
                      </button>
                      <div id="ag-s2-gq-\${idx}" class="hidden p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                        \${gq.answer}
                      </div>
                    </div>
                  \`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Part 3: Language Clinic (Double Comparatives & Concessive Contrast) -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${grammar.title || 'Part 3: Language Clinic — Double Comparatives & Concessive Contrast'}</h4>
                  <p class="text-[11px] text-slate-500">\${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Language Clinic</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(grammar, theme) : ''}

            <!-- Grammar Rules Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              \${(grammar.patterns || []).map(p => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 class="text-xs font-bold text-slate-900 font-mono">\${p.rule}</h5>
                  <div class="p-2 bg-white border border-slate-200 rounded-md font-mono text-[10.5px] text-emerald-800">
                    \${p.formula}
                  </div>
                  <ul class="space-y-1 text-[11px] text-slate-600 pl-4 list-disc">
                    \${p.examples.map(ex => \`<li>\${ex}</li>\`).join('')}
                  </ul>
                </div>
              \`).join('')}
            </div>

            <!-- Interactive Drills -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Spoken Transformation Drills:</h5>
              \${(grammar.drills || []).map(drill => \`
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <p class="text-xs font-semibold text-slate-800"><span class="font-mono text-slate-500 font-bold">[\${drill.id}]</span> \${drill.prompt}</p>
                  <div id="ag2-s2-drill-\${drill.id}" class="hidden p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 font-medium">
                    \${drill.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('ag2-s2-drill-\${drill.id}').classList.toggle('hidden');" class="text-[11px] font-bold text-emerald-600 hover:underline cursor-pointer">
                    Check Phrasing &rarr;
                  </button>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Part 4: Vocabulary Game: Collocation Matcher & Mobility Pyramid -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${game.title || 'Part 4: Vocabulary Game — Collocation Matcher & Mobility Pyramid'}</h4>
                  <p class="text-[11px] text-slate-500">\${game.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-emerald-600 uppercase tracking-wider shrink-0 font-mono">Interactive Game</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(game, theme) : ''}

            <!-- 10 Compound Collocations Grid -->
            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wider">Step 1: Match 10 Compound Mobility Collocations</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                \${(game.collocations || []).map(c => \`
                  <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-2">
                    <div>
                      <span class="font-bold text-emerald-800">\${c.prefix}</span>
                      <span class="text-slate-400">+</span>
                      <span class="font-mono text-slate-900 font-medium">\${c.suffix}</span>
                    </div>
                    <span class="text-[10px] text-slate-500 italic shrink-0">\${c.def}</span>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- The Mobility Pyramid -->
            <div class="space-y-2 pt-2 border-t border-slate-200">
              <h5 class="text-xs font-bold text-slate-800 font-mono uppercase tracking-wider">Step 2: The Urban Sustainable Mobility Pyramid</h5>
              <div class="space-y-1.5">
                \${(game.pyramid?.tiers || []).map(t => \`
                  <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span class="font-bold font-mono text-slate-800 text-[11px]">\${t.level}: \${t.mode}</span>
                    <span class="text-[11px] text-slate-600">\${t.role}</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Part 5: Pair Urban Design Sprint -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${sprint.title || 'Part 5: Pair Urban Design Sprint — The 15-Minute Airport District'}</h4>
                  <p class="text-[11px] text-slate-500">\${sprint.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Design Sprint</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(sprint, theme) : ''}

            <!-- Design Brief Box -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="space-y-1">
                <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Site Location</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">\${sprint.brief?.location}</h5>
                <p class="text-[11px] text-slate-600"><strong class="text-slate-800">Current Status:</strong> \${sprint.brief?.currentStatus}</p>
                <p class="text-[11px] text-emerald-800 font-medium"><strong class="text-emerald-900">Project KPIs:</strong> \${sprint.brief?.targetKPIs}</p>
              </div>

              <div class="pt-2 border-t border-slate-200 space-y-1">
                <span class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Required Interventions:</span>
                <ul class="space-y-1 pl-4 list-disc text-[11px] text-slate-700">
                  \${(sprint.deliverables || []).map(d => \`<li>\${d}</li>\`).join('')}
                </ul>
              </div>
            </div>

            <!-- Peer Observer Checklist (Student B) -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">\${sprint.rubric?.title || 'Peer Observer Active Listening Rubric (Student B)'}</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                \${(sprint.rubric?.criteria || []).map(c => \`
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                    <span class="font-bold text-slate-800 block">\${c.name}</span>
                    <span class="text-[11px] text-slate-600">\${c.target}</span>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Pitch Notes Area -->
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-700">Pair 2-Minute Pitch Outline & Design Concept:</label>
              <textarea id="ag-s2-pitch-notes" oninput="window.saveLessonNote && window.saveLessonNote('ag_s2_pitch_notes', this.value)" placeholder="Draft your 3 corridor interventions: 1. Mass transit link... 2. Active mobility path... 3. Sponge drainage retrofit..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none transition-all leading-relaxed"></textarea>
            </div>
          </div>

          <!-- Part 6: Multi-Stakeholder Policy Debate & Technical Mastery Quiz -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs font-mono" style="background-color: \${theme.primary};">Part 6</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${policy.title || 'Part 6: Multi-Stakeholder Policy Debate & Technical Mastery Quiz'}</h4>
                  <p class="text-[11px] text-slate-500">\${policy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 font-mono">Debate &amp; Quiz</span>
            </div>

            \${typeof renderActivityInstructions === 'function' ? renderActivityInstructions(policy, theme) : ''}

            <!-- 3 Debate Stances -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              \${(policy.roles || []).map(r => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 border-b border-slate-200 pb-1.5 font-mono">\${r.title}</h5>
                  <p class="text-xs text-slate-700 leading-relaxed font-medium">\${r.stance}</p>
                  <div class="space-y-1 pt-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Key Policy Arguments:</span>
                    <ul class="space-y-1 pl-4 list-disc text-[11px] text-slate-600 leading-relaxed">
                      \${r.keyPoints.map(kp => \`<li>\${kp}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- 10-Question Technical Mastery Quiz -->
            <div class="pt-4 border-t border-slate-200 space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider font-mono">10-Question Technical Mastery Quiz</h5>
                <span class="text-[11px] text-slate-500 font-mono">Instant Self-Score</span>
              </div>
              <div class="space-y-3">
                \${(policy.quiz || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900"><span class="font-mono text-slate-500">Q\${q.id}.</span> \${q.q}</p>
                    <div class="space-y-1.5 pl-2">
                      \${q.options.map((opt, oIdx) => \`
                        <label class="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900">
                          <input type="radio" name="ag-m2-s2-quiz-\${q.id}" value="\${oIdx}" onchange="
                            const feedback = document.getElementById('ag-m2-s2-fb-\${q.id}');
                            feedback.classList.remove('hidden');
                            if (\${oIdx} === \${q.answer}) {
                              feedback.className = 'p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 font-medium';
                              feedback.innerHTML = '&#10004; Correct!';
                            } else {
                              feedback.className = 'p-2 bg-rose-50 border border-rose-200 rounded text-xs text-rose-900 font-medium';
                              feedback.innerHTML = '&#10008; Incorrect. Correct answer: ' + '\${q.options[q.answer].replace(/'/g, "\\\\\\'")}';
                            }
                          " class="text-emerald-600 focus:ring-emerald-500">
                          <span>\${opt}</span>
                        </label>
                      \`).join('')}
                    </div>
                    <div id="ag-m2-s2-fb-\${q.id}" class="hidden"></div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>
        </div>
      \`;
    }`;

// Replace function 1 and 2 in fileContent
const newContent = fileContent.slice(0, fn1Start) + fn1Code + '\n\n    ' + fn2Code + '\n\n    ' + fileContent.slice(fn3Start);

fs.writeFileSync(templatePath, newContent, 'utf8');
console.log("✅ Successfully replaced renderAg2LessonContentTabSession1 & renderAg2LessonContentTabSession2 in 06-templates-ag2.js!");
