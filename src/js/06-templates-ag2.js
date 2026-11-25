    function renderAg2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const visual = content.visualDebate || {};
      const grammar = content.grammarClinic || {};
      const task = content.decisionTask || {};
      const taboo = content.vocabGame || {};
      const debate = content.townHallDebate || {};

      const savedNote = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('s1_m2_ag_s1_notes') : '';
      const savedVerdict = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('ag_s1_debate_verdict') : '';

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Action Bar with Official 7-Page PDF Link -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Extreme Weather & Atmospheric Hazards'}</h3>
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
              <img src="${ov.image || 'images/ag_m2card1.jpg'}" alt="${ov.title || 'Extreme Weather'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session 01 • Communicative General English'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Extreme Weather & Atmospheric Hazards'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Climate Change, Extreme Weather & Community Resilience'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">${ov.targetLevel || 'CEFR B1/B2'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Key Themes:</span>
                <span class="text-slate-700">Climate Resilience • Spoken Fluency • Photo Debate • Taboo</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">DD&RS Alignment:</span>
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Axe 2 &amp; Axe 5</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Part 1: Warm-up & Personal Weather Stories -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 1</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${opening.title || 'Warm-up & Personal Storytelling'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Pair Interaction</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.headline || 'Think about the most extreme weather event you have personally experienced or witnessed in the news. Share your story with a partner.'}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  Key Discussion Prompts
                </h5>
                <ul class="text-xs text-amber-950 space-y-1.5 list-disc list-inside">
                  ${(opening.prompts || [
                    "What happened and how did people react?",
                    "Did public transport, flights, or electricity get cut off?",
                    "Do you think extreme weather events are becoming more frequent?"
                  ]).map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>

              <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  Sentence Starters for Storytelling
                </h5>
                <div class="space-y-1 text-xs text-blue-950">
                  ${(opening.sentenceStarters || [
                    "A few years ago, I remember experiencing...",
                    "What struck me most was how quickly...",
                    "The local community was completely unprepared for..."
                  ]).map(s => `<div class="italic">" ${s} "</div>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Part 2: 4-Photo Visual Description & Debate Lab -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 2</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${visual.title || '4-Photo Visual Description & Debate Lab'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-amber-600 font-bold uppercase tracking-wide">Photo Comparison</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${visual.subtitle || 'Work in pairs. Study the four contrasting scenes below. Describe what you see, identify the underlying environmental drivers, and debate the questions with your partner.'}</p>

            <!-- 2x2 Photo Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              ${(visual.photos || []).map((photo, pIdx) => `
                <div class="flex flex-col bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-all">
                  <div class="relative bg-slate-900 h-44 overflow-hidden group">
                    <img src="${(photo.file || photo.src || "images/ag_m2card1.jpg")}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null;this.src='images/ag_m2card1.jpg'">
                    <div class="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                      PHOTO ${photo.id || (pIdx + 1)}
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[9.5px] px-1.5 py-0.5 rounded">
                      ${photo.location || ''}
                    </div>
                  </div>
                  <div class="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 class="text-xs sm:text-sm font-bold text-slate-900">${photo.title}</h5>
                      <p class="text-xs text-slate-600 mt-1 leading-relaxed">${(photo.scene || photo.caption || "")}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-200/80 space-y-1.5 text-[11.5px]">
                      <div class="font-bold text-slate-700 flex items-center gap-1">
                        Guided Discussion Question:
                      </div>
                      <p class="text-blue-900 font-medium italic bg-blue-50/80 p-2 rounded border border-blue-200/60 leading-snug">
                        ${photo.debateQ || photo.question || 'How should cities adapt to prevent this catastrophe?'}
                      </p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Useful Language for Photo Comparison -->
            <div class="p-3.5 bg-slate-100/80 border border-slate-200 rounded-lg space-y-2 text-xs">
              <span class="font-bold text-slate-800 flex items-center gap-1.5">
                Useful Phrases for Contrasting &amp; Comparing Photos:
              </span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                ${(visual.sentenceFrames || [
                  "Whereas Photo 1 highlights extreme drought, Photo 2 shows the opposite catastrophe of flash flooding.",
                  "Both Photo 2 and Photo 3 demonstrate how vulnerable urban infrastructure is to sudden climate shocks.",
                  "In stark contrast to the first three photos, Photo 4 offers a hopeful look at technological adaptation.",
                  "What strikes me most about these images is the rapid acceleration of unpredictable weather."
                ]).map(f => `<div class="p-1.5 bg-white rounded border border-slate-200 italic">" ${f} "</div>`).join('')}
              </div>
            </div>

            <!-- Debate Prompt -->
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-amber-900">Paired Debate Question:</span>
              <p class="text-amber-950 font-medium leading-relaxed">${visual.debatePrompt || 'Which of these threats poses the greatest risk to modern society: sudden flash floods, prolonged heatwaves, or uncontrolled wildfires? Defend your position with two solid arguments.'}</p>
            </div>
          </div>

          <!-- Part 3: Spoken Language Clinic -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 3</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${grammar.title || 'Spoken Language Clinic: Expressing Stances & Polite Disagreement'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Communicative Clinic</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${grammar.subtitle || 'Expressing opinions with precision and tact is essential for collaborative problem-solving and professional debate.'}</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span class="text-blue-600 font-bold">1.</span> Stating Strong Viewpoints
                </h5>
                <ul class="text-xs text-slate-700 space-y-1.5">
                  ${(grammar.strongViewpoints || [
                    "I am convinced that climate adaptation must take priority over...",
                    "From an operational standpoint, it is clear that...",
                    "There is no denying that emergency funding is inadequate."
                  ]).map(v => `<li class="p-1.5 bg-white rounded border border-slate-200 italic">" ${v} "</li>`).join('')}
                </ul>
              </div>

              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span class="text-amber-600 font-bold">2.</span> Polite Disagreement
                </h5>
                <ul class="text-xs text-slate-700 space-y-1.5">
                  ${(grammar.politeDisagreement || [
                    "I see your point, but we also have to consider...",
                    "I am not entirely convinced that technology alone can...",
                    "While that may be true in theory, in practice it would..."
                  ]).map(d => `<li class="p-1.5 bg-white rounded border border-slate-200 italic">" ${d} "</li>`).join('')}
                </ul>
              </div>

              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span class="text-emerald-600 font-bold">3.</span> Balancing &amp; Conceding
                </h5>
                <ul class="text-xs text-slate-700 space-y-1.5">
                  ${(grammar.balancingPoints || [
                    "On the one hand..., but on the other hand...",
                    "Despite the high initial investment, the long-term benefits...",
                    "Even if we cut emissions today, we still need to adapt to..."
                  ]).map(b => `<li class="p-1.5 bg-white rounded border border-slate-200 italic">" ${b} "</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Part 4: Small-Group Decision Task: The €50M Climate Action Plan -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 4</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${task.title || 'Small-Group Decision Task: The €50M Climate Action Plan'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-emerald-600 font-bold uppercase tracking-wide">Group Negotiation</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${task.scenario || 'Your group forms the Regional Climate Resilience Taskforce. You have been awarded a fixed municipal budget of €50M. You must evaluate 5 competing investment projects and choose the best allocation.'}</p>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead class="bg-slate-100 text-slate-800 uppercase font-bold text-[10.5px]">
                  <tr>
                    <th class="p-2.5 border-b border-slate-200">Option</th>
                    <th class="p-2.5 border-b border-slate-200">Project Name</th>
                    <th class="p-2.5 border-b border-slate-200">Cost</th>
                    <th class="p-2.5 border-b border-slate-200">Primary Impact</th>
                    <th class="p-2.5 border-b border-slate-200">Key Trade-off</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700">
                  ${(task.options || [
                    { opt: "A", name: "Urban Bioswales & Sponge City Corridors", cost: "€20M", impact: "Absorbs 85% of flash flood runoff in city center", trade: "Requires removing 600 parking bays" },
                    { opt: "B", name: "Regional AI Early Warning Radar Network", cost: "€15M", impact: "Gives early storm detection alerts for severe downbursts", trade: "Does not stop physical damage to property" },
                    { opt: "C", name: "Cool Roofs & Shaded Pedestrian Canopies", cost: "€10M", impact: "Lowers urban heat island effect by 3.5°C", trade: "Limited direct benefit to rural outskirts" },
                    { opt: "D", name: "Aerial Drone Fire-Detection Fleet", cost: "€25M", impact: "Discovers forest fires within 90 seconds of ignition", trade: "High ongoing maintenance & battery renewal cost" },
                    { opt: "E", name: "Subsidized Home Heat Pumps & Insulation", cost: "€30M", impact: "Cuts household winter energy demand by 40%", trade: "Exceeds 50% of the entire regional budget" }
                  ]).map(row => `
                    <tr class="hover:bg-slate-50 transition-colors">
                      <td class="p-2.5 font-black text-slate-900">${row.opt}</td>
                      <td class="p-2.5 font-bold text-slate-800">${row.name}</td>
                      <td class="p-2.5 font-black text-blue-700">${row.cost}</td>
                      <td class="p-2.5 text-slate-600">${row.impact}</td>
                      <td class="p-2.5 text-amber-800 font-medium">${row.trade}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Peer Checklist & Active Listening Rubric -->
            <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  Peer Checklist &amp; Active Listening Rubric (Partner B Observer)
                </h5>
                <span class="text-[10px] font-bold text-amber-800 uppercase">Peer Evaluation</span>
              </div>
              <p class="text-[11px] text-amber-900 leading-relaxed">
                As Student A pitches their €50M budget allocation, Partner B assesses the proposal against the 3 criteria: Strategic Justification, Spoken Fluency, and Q&amp;A Defense.
              </p>
            </div>

            <!-- Group Notes Textarea -->
            <div class="space-y-1.5 pt-2">
              <label class="text-xs font-bold text-slate-700">Group Decision Notes &amp; Justification (€50M Allocation):</label>
              <textarea id="ag-s1-notes" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_ag_s1_notes', this.value)" placeholder="Record your group's selected combination, total cost, and why you eliminated the other options..." class="w-full h-24 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed">${savedNote}</textarea>
            </div>
          </div>

          <!-- Part 5: Interactive Spoken Game: Climate Buzzword Taboo -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 5</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${taboo.title || 'Interactive Spoken Game: Climate Buzzword Taboo'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-purple-600 font-bold uppercase tracking-wide">Lexical Agility</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${taboo.subtitle || 'Work in pairs. Describe the secret word to your partner WITHOUT saying the forbidden words. You have 45 seconds per card. Use circumlocution and synonyms!'}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              ${(taboo.cards || [
                { word: "Flash Flood", ipa: "/flæʃ flʌd/", forbidden: ["water", "rain", "river"] },
                { word: "Heat Island", ipa: "/hiːt ˈaɪlənd/", forbidden: ["hot", "city", "concrete"] },
                { word: "Drought", ipa: "/draʊt/", forbidden: ["dry", "rain", "water"] },
                { word: "Wildfire", ipa: "/ˈwaɪldfaɪər/", forbidden: ["forest", "burn", "tree"] },
                { word: "Resilience", ipa: "/rɪˈzɪliəns/", forbidden: ["strong", "bounce", "survive"] },
                { word: "Microburst", ipa: "/ˈmaɪkrəʊbɜːst/", forbidden: ["wind", "storm", "aircraft"] }
              ]).map(c => `
                <div class="p-3 bg-purple-50/60 border border-purple-200 rounded-xl space-y-2 text-center shadow-2xs hover:border-purple-300 transition-all">
                  <div>
                    <h5 class="text-xs sm:text-sm font-black text-purple-950 uppercase tracking-wide">${c.word}</h5>
                    <span class="text-[10px] text-purple-700 font-mono">${c.ipa}</span>
                  </div>
                  <div class="p-2 bg-white rounded-lg border border-purple-200/80 text-[11px] space-y-1">
                    <span class="text-[9.5px] font-bold uppercase text-red-600 tracking-wider">Forbidden Words</span>
                    <div class="flex flex-wrap items-center justify-center gap-1 font-bold text-slate-700">
                      ${c.forbidden.map(f => `<span class="px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 text-[10px]">❌ ${f}</span>`).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 6: Town Hall Public Debate -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 6</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${debate.title || 'Town Hall Public Debate: Who Pays for Climate Adaptation?'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-rose-600 font-bold uppercase tracking-wide">Plenary Debate</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${debate.scenario || 'The coastal and river communities of the region have suffered catastrophic flooding. The city council proposes a 5% environmental tax on all aviation, fuel, and corporate commerce to fund sea walls and flood barriers. Debate the policy across 3 assigned stakeholder groups.'}</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              ${(debate.roles || [
                {
                  title: "Role A: Coastal & Riverbank Residents",
                  stance: "Demands immediate public funding: Homeowners pay taxes and deserve immediate municipal flood barriers and sea walls.",
                  points: ["Homes are losing 50% of their value due to flood risks.", "Insurance companies are refusing to cover weather catastrophes.", "Human life and community heritage must take precedence over commercial profit."]
                },
                {
                  title: "Role B: Regional Chamber of Commerce & Airlines",
                  stance: "Opposes targeted business taxes: Extra taxes on aviation and local business will hurt economic growth and tourism.",
                  points: ["Aviation already pays carbon offset taxes under EU ETS.", "Extra local levies will force airlines to cancel routes and reduce jobs.", "The council should reallocate existing administrative budgets instead."]
                },
                {
                  title: "Role C: Environmental Youth Action Coalition",
                  stance: "Calls for polluter-pays principle & strict climate action: Demands heavy taxes on high-emission sectors.",
                  points: ["Fossil fuel companies and frequent flyers must pay for the damage they cause.", "Building higher walls is a temporary fix; we must reduce emissions at the source.", "Tax revenues must be ring-fenced strictly for green infrastructure."]
                }
              ]).map(role => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900">${role.title}</h5>
                    <p class="text-xs font-medium text-blue-900 bg-blue-50 p-2 rounded border border-blue-200/60 leading-snug">${role.stance}</p>
                  </div>
                  <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside pt-1">
                    ${(role.points || role.keyPoints || []).map(pt => `<li>${pt}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <!-- Consensus Verdict -->
            <div class="space-y-1.5 pt-2">
              <label class="text-xs font-bold text-slate-700">Town Hall Negotiated Consensus Compromise:</label>
              <textarea id="ag-s1-debate-verdict" oninput="window.saveLessonNote && window.saveLessonNote('ag_s1_debate_verdict', this.value)" placeholder="Record your committee's negotiated compromise: who pays, how much, and what accountability measures are put in place..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed">${savedVerdict}</textarea>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const visual = content.visualDebate || {};
      const grammar = content.grammarClinic || {};
      const game = content.vocabGame || {};
      const sprint = content.redesignChallenge || content.designSprint || {};
      const debate = content.publicDebate || content.policyDebate || {};

      const savedNote = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('s1_m2_ag_s2_notes') : '';
      const savedVerdict = (typeof window !== 'undefined' && window.loadLessonNote) ? window.loadLessonNote('ag_s2_debate_verdict') : '';

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Action Bar with Official 7-Page PDF Link -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Sustainable Cities & Low-Emission Mobility'}</h3>
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
              <img src="${ov.image || 'images/ag_m2card2.jpg'}" alt="${ov.title || 'Sustainable Cities'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session 02 • Communicative General English'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Sustainable Cities & Low-Emission Mobility'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Urban Living, Green Neighborhoods, The 15-Minute City & Car-Free Center Debate'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">${ov.targetLevel || 'CEFR B1/B2'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Key Themes:</span>
                <span class="text-slate-700">15-Minute City • Sustainable Mobility • Double Comparatives • Policy Debate</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">DD&RS Alignment:</span>
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Axe 2 &amp; Axe 3</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Part 1: Livable City Ranking & Diagnostic Warm-up -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 1</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${opening.title || 'Livable City Ranking & Diagnostic Warm-up'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Pair Discussion</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.prompt || 'Rank the following 5 factors of a truly livable city from 1 (most vital) to 5 (least vital). Compare your ranking with your partner and justify your top choice.'}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 pt-1">
              ${(opening.features || [
                { num: "A", title: "Dedicated Bike Lanes", desc: "Safe, segregated cycle paths across the entire metropolitan area." },
                { num: "B", title: "Accessible Green Parks", desc: "Public gardens & urban forests within a 5-minute walk of every home." },
                { num: "C", title: "Affordable Rapid Transit", desc: "Clean, frequent electric trams & metros running 24/7." },
                { num: "D", title: "Car-Free Shopping Streets", desc: "Pedestrianized high streets with outdoor dining & fresh air." },
                { num: "E", title: "Sponge City Drainage", desc: "Permeable pavements that prevent destructive urban flooding." }
              ]).map(f => `
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1 text-center">
                  <span class="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">Option ${f.num}</span>
                  <h5 class="text-xs font-bold text-slate-800 mt-1">${f.title}</h5>
                  <p class="text-[10.5px] text-slate-600 leading-tight">${f.desc}</p>
                </div>
              `).join('')}
            </div>

            <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-blue-900">Justifying Your Ranking:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-blue-950 italic">
                <div>"For me, having reliable public transit is far more essential than..."</div>
                <div>"I put car-free streets at the top because it immediately cuts noise and air pollution."</div>
              </div>
            </div>
          </div>

          <!-- Part 2: 4-Photo Visual Contrast & Debate Lab -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 2</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${visual.title || '4-Photo Visual Contrast & Debate Lab'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-amber-600 font-bold uppercase tracking-wide">Visual Contrast</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${visual.subtitle || 'Examine two contrasting visions of mobility and urban life: car-centric congestion vs. human-scale livability.'}</p>

            <!-- 2x2 Photo Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              ${(visual.photos || []).map((photo, pIdx) => `
                <div class="flex flex-col bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-all">
                  <div class="relative bg-slate-900 h-44 overflow-hidden group">
                    <img src="${(photo.file || photo.src || "images/ag_m2card1.jpg")}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null;this.src='images/ag_m2card2.jpg'">
                    <div class="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                      PHOTO ${photo.id || String.fromCharCode(65 + pIdx)}
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[9.5px] px-1.5 py-0.5 rounded">
                      ${photo.location || ''}
                    </div>
                  </div>
                  <div class="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 class="text-xs sm:text-sm font-bold text-slate-900">${photo.title}</h5>
                      <p class="text-xs text-slate-600 mt-1 leading-relaxed">${(photo.scene || photo.caption || "")}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-200/80 space-y-1.5 text-[11.5px]">
                      <div class="font-bold text-slate-700 flex items-center gap-1">
                        Guided Discussion Question:
                      </div>
                      <p class="text-blue-900 font-medium italic bg-blue-50/80 p-2 rounded border border-blue-200/60 leading-snug">
                        ${photo.debateQ || photo.question || 'What are the main social benefits of reclaiming street space for humans?'}
                      </p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Useful Contrast Stems -->
            <div class="p-3.5 bg-slate-100/80 border border-slate-200 rounded-lg space-y-2 text-xs">
              <span class="font-bold text-slate-800 flex items-center gap-1.5">
                Sentence Stems for Contrasting Urban Environments:
              </span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                ${(visual.sentenceFrames || [
                  "Photo A represents 20th-century car dependency, whereas Photo B shows how street space can be reclaimed.",
                  "The more space we dedicate to motorways, the more traffic congestion we generate.",
                  "Photo C illustrates high-speed rail as an intermodal alternative to short-haul domestic flights.",
                  "Photo D embodies the 15-minute city philosophy: daily necessities accessible on foot or by bike."
                ]).map(f => `<div class="p-1.5 bg-white rounded border border-slate-200 italic">" ${f} "</div>`).join('')}
              </div>
            </div>

            <!-- Debate Prompt -->
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-amber-900">Paired Debate Question:</span>
              <p class="text-amber-950 font-medium leading-relaxed">${visual.debatePrompt || 'Is the 15-minute city an idealistic dream only feasible for wealthy metropolitan centers, or can it be applied to suburbs and mid-sized towns?'}</p>
            </div>
          </div>

          <!-- Part 3: Spoken Language Clinic -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 3</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${grammar.title || 'Spoken Language Clinic: Proposing Solutions & Double Comparatives'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Language Clinic</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${grammar.subtitle || 'Use double comparatives (The more... the less...) and formal contrast connectors to express cause-and-effect relationships in urban planning.'}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span class="text-blue-600 font-bold">1.</span> Double Comparative Formulas:
                </h5>
                <p class="text-[11px] text-slate-600">Express proportional changes where one factor directly drives another:</p>
                <div class="space-y-1.5 text-xs text-slate-800">
                  <div class="p-2 bg-white rounded border border-slate-200 italic">"The <span class="text-blue-700 font-bold">denser</span> the transit network, the <span class="text-emerald-700 font-bold">fewer</span> cars enter the center."</div>
                  <div class="p-2 bg-white rounded border border-slate-200 italic">"The <span class="text-blue-700 font-bold">more</span> cycle lanes we build, the <span class="text-emerald-700 font-bold">safer</span> commuters feel."</div>
                  <div class="p-2 bg-white rounded border border-slate-200 italic">"The <span class="text-blue-700 font-bold">cheaper</span> the train tickets, the <span class="text-emerald-700 font-bold">more likely</span> passengers choose rail over air."</div>
                </div>
              </div>

              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span class="text-amber-600 font-bold">2.</span> Formal Contrast Connectors:
                </h5>
                <p class="text-[11px] text-slate-600">Balance competing priorities using whereas, nevertheless, and despite:</p>
                <div class="space-y-1.5 text-xs text-slate-800">
                  <div class="p-2 bg-white rounded border border-slate-200 italic"><span class="text-amber-800 font-bold">Whereas</span> cars consume 70% of street space, they transport under 30% of travelers.</div>
                  <div class="p-2 bg-white rounded border border-slate-200 italic"><span class="text-amber-800 font-bold">Despite</span> initial merchant resistance, pedestrian zones consistently boosted retail sales.</div>
                  <div class="p-2 bg-white rounded border border-slate-200 italic">Trams involve high upfront costs; <span class="text-amber-800 font-bold">nevertheless</span>, their lifetime emissions are unmatched.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 4: Vocabulary Game: Collocation Matcher & Mobility Pyramid -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 4</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${game.title || 'Interactive Vocabulary Game: Collocation Matcher & Mobility Pyramid'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-emerald-600 font-bold uppercase tracking-wide">Lexical Mastery</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${game.subtitle || 'Pair challenge: match compound urban mobility collocations and analyze the Sustainable Mobility Hierarchy.'}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <!-- Collocation Cards -->
              <div class="space-y-2">
                <h5 class="text-xs font-bold text-slate-800">10 Essential Urban Mobility Collocations:</h5>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  ${(game.collocations || [
                    { a: "Low-Emission", b: "Zone (LEZ)" },
                    { a: "Sponge City", b: "Architecture" },
                    { a: "Urban Heat", b: "Island Effect" },
                    { a: "15-Minute", b: "Neighborhood" },
                    { a: "Permeable", b: "Pavement" },
                    { a: "Active", b: "Mobility" },
                    { a: "Intermodal", b: "Transit Hub" },
                    { a: "Park-and-Ride", b: "Facility" },
                    { a: "Traffic", b: "Calming Scheme" },
                    { a: "High-Speed", b: "Rail Corridor" }
                  ]).map(pair => `
                    <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-center justify-between">
                      <span class="font-bold text-emerald-950">${pair.prefix || pair.a || ""}</span>
                      <span class="text-emerald-700 font-medium">${pair.suffix || pair.b || ""}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Sustainable Mobility Pyramid -->
              <div class="space-y-2">
                <h5 class="text-xs font-bold text-slate-800">The Sustainable Mobility Hierarchy:</h5>
                <div class="space-y-1.5 text-xs text-white">
                  <div class="p-2 rounded-lg bg-emerald-700 font-bold text-center shadow-xs">
                    1. Active Travel (Walking, Wheelchairs, Cycling) • 0 Emissions
                  </div>
                  <div class="p-2 rounded-lg bg-emerald-600 font-bold text-center shadow-xs">
                    2. Mass Public Transit (Electric Trams, Metros, Trains) • High Capacity
                  </div>
                  <div class="p-2 rounded-lg bg-amber-600 font-bold text-center shadow-xs">
                    3. Shared Micro-Mobility & Electric Buses • Flexible
                  </div>
                  <div class="p-2 rounded-lg bg-orange-600 font-bold text-center shadow-xs">
                    4. Shared Electric Vehicles & Carpooling • Lower Impact
                  </div>
                  <div class="p-2 rounded-lg bg-red-700 font-bold text-center shadow-xs">
                    5. Single-Occupancy Private Fossil Cars • Highest Impact
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part 5: Pair Urban Redesign Challenge -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 5</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${sprint.title || 'Pair Urban Redesign Challenge: The 15-Minute Airport District'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-blue-600 font-bold uppercase tracking-wide">Design Sprint</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${sprint.scenario || 'You and your partner are transport planners assigned to redesign an 8-lane highway corridor connecting the central airport terminal to the neighboring residential suburbs.'}</p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-lg space-y-1">
                <span class="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Intervention 1</span>
                <h5 class="text-xs font-bold text-blue-950">Lane Reallocation</h5>
                <p class="text-[11px] text-blue-900">Convert 4 car lanes into a segregated electric BRT (Bus Rapid Transit) and wide bi-directional cycle path.</p>
              </div>

              <div class="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1">
                <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">Intervention 2</span>
                <h5 class="text-xs font-bold text-emerald-950">Green Buffer &amp; Bioswales</h5>
                <p class="text-[11px] text-emerald-900">Plant a 10-meter urban forest canopy with permeable rain gardens to filter stormwater runoff and block highway noise.</p>
              </div>

              <div class="p-3 bg-purple-50/70 border border-purple-200 rounded-lg space-y-1">
                <span class="text-[10px] font-bold text-purple-800 uppercase tracking-wide">Intervention 3</span>
                <h5 class="text-xs font-bold text-purple-950">Multimodal Mobility Hub</h5>
                <p class="text-[11px] text-purple-900">Build a park-and-ride facility on the suburb border with 500 cargo e-bikes and express airport shuttles.</p>
              </div>
            </div>

            <!-- Peer Checklist & Active Listening Rubric -->
            <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  Peer Checklist &amp; Active Listening Rubric (Partner B Observer)
                </h5>
                <span class="text-[10px] font-bold text-amber-800 uppercase">Peer Evaluation</span>
              </div>
              <p class="text-[11px] text-amber-900 leading-relaxed">
                As Partner A presents their 90-second corridor redesign, Partner B acts as peer observer evaluating modal balance, use of double comparatives, and persuasive delivery.
              </p>
            </div>

            <!-- Notes Textarea -->
            <div class="space-y-1.5 pt-2">
              <label class="text-xs font-bold text-slate-700">Pair Pitch Notes (Prepare your 90-second proposal):</label>
              <textarea id="ag-s2-notes" oninput="window.saveLessonNote && window.saveLessonNote('s1_m2_ag_s2_notes', this.value)" placeholder="Outline your 3 key interventions, anticipated emission reductions, and how you handle commuter complaints..." class="w-full h-24 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed">${savedNote}</textarea>
            </div>
          </div>

          <!-- Part 6: Public Policy Debate -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md" style="background-color: ${theme.primary};">PART 6</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">${debate.title || 'High-Stakes Public Debate: The Car-Free City Center'}</h4>
              </div>
              <span class="text-[11px] font-semibold text-rose-600 font-bold uppercase tracking-wide">Public Debate</span>
            </div>
            <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-rose-900">Debate Motion:</span>
              <p class="text-rose-950 font-bold leading-relaxed">${debate.motion || '"This city should permanently ban private fossil-fueled vehicles from the entire central district within 18 months, reallocating all street parking to parks and bike paths."'}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              ${(debate.roles || [
                {
                  title: "Role A: Suburban Commuters & Delivery Association",
                  stance: "Strongly opposes a blanket ban: Suburban families rely on cars because public transit takes twice as long, and delivery drivers need road access.",
                  points: ["Suburban housing is affordable, but suburban transit is too slow.", "Elderly residents cannot easily cycle in bad weather.", "Delivery businesses will face heavy delays and fines."]
                },
                {
                  title: "Role B: Local Retailers & Restaurants",
                  stance: "Demands flexible compromise: Welcomes cleaner air but fears losing customers from outer suburbs who prefer driving.",
                  points: ["Car-free streets boost cafe foot traffic, but retail shops need vehicle access.", "We demand free perimeter park-and-ride shuttles.", "We need 30-minute commercial loading bays for deliveries."]
                },
                {
                  title: "Role C: Clean Air & Youth Climate Action Coalition",
                  stance: "Strongly supports the total ban: Car pollution causes asthma and greenhouse emissions. Streets must belong to people.",
                  points: ["70% of inner-city space is currently wasted on cars.", "European cities proved businesses thrive after pedestrianization.", "Trams, e-buses, and cargo bikes easily handle city deliveries."]
                }
              ]).map(role => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900">${role.title}</h5>
                    <p class="text-xs font-medium text-blue-900 bg-blue-50 p-2 rounded border border-blue-200/60 leading-snug">${role.stance}</p>
                  </div>
                  <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside pt-1">
                    ${(role.points || role.keyPoints || []).map(pt => `<li>${pt}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <!-- Consensus Resolution -->
            <div class="space-y-1.5 pt-2">
              <label class="text-xs font-bold text-slate-700">Negotiated Policy Resolution:</label>
              <textarea id="ag-s2-debate-verdict" oninput="window.saveLessonNote && window.saveLessonNote('ag_s2_debate_verdict', this.value)" placeholder="Draft the final compromise policy: perimeter parking, exempted vehicles, transit discounts, and phase-in timeline..." class="w-full h-20 p-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-all leading-relaxed">${savedVerdict}</textarea>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Building & Defending Environmental Arguments'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m2card3.jpg'}" alt="${ov.title || 'Building Arguments'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Environmental Argumentation & Policy'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Building & Defending Environmental Arguments'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Structuring Arguments, Linking Words, Polite Disagreement & Policy Debates'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Debate, Advocacy &amp; Technical Defense</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Environmental Policy News & Argument Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Environmental Policy News & Argument Warm-Up'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Environmental Policy &amp; Regulatory Debates</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Argumentation & Linking Words Quick Check'}</h5>
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
                      <div id="ag2-spotcheck-ans-3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-3-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(3, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Environmental Policy Dilemmas: Speed Sparring -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Environmental Policy Dilemmas: Speed Sparring'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Debate</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Advocacy:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Counter:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Gerunds vs. Infinitives & Connecting Words for Contrasting Ideas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Gerunds vs. Infinitives & Connecting Words for Contrasting Ideas'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Verb Complementation Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s3-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s3-${q.id}" onclick="window.toggleAg2QuizAnswer('s3-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Public Inquiry Hearing Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Public Inquiry Hearing Simulation'}</h4>
                  <p class="text-[11px] text-slate-500">Formal administrative inquiry and stakeholder Q&amp;A</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 3 Wrap-Up & FE2 Argument Defense -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Argument Defense'}</h4>
                  <p class="text-[11px] text-slate-500">Consolidation, phonetics, and portfolio check</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 3 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Biodiversity in Urban Areas & Transport Hubs'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative bg-slate-900">
              <img src="${ov.image || 'images/ag_m2card4.jpg'}" alt="${ov.title || 'Biodiversity'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.onerror=null;this.src='images/ag_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Biodiversity & Ecological Infrastructure'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Biodiversity in Urban Areas & Transport Hubs'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Nature-Based Solutions, Constructed Wetlands, Ecological Corridors & Wildlife Hazard Mitigation'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Ecological Engineering &amp; Aviation Safety</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          ${renderSessionBriefingBanner(sessionData, theme)}

          <!-- Activity 1: Aerodrome Ecology News & Diagnostic Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Airport Ecology News & Opening Warm-Up'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Transport Biodiversity &amp; Ecological News</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Ecological & Airport Vocabulary Quick Check'}</h5>
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
                      <div id="ag2-spotcheck-ans-4-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-4-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(4, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Biodiversity & Safety Dilemmas: Speed Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Biodiversity & Safety Dilemmas: Speed Survey'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Debate</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Ecological Argument:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Aviation Safety Concern:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Pronouns & Determiners in Technical English -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Pronouns & Determiners in Technical English'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Pronoun &amp; Determiner Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s4-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s4-${q.id}" onclick="window.toggleAg2QuizAnswer('s4-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Aerodrome Wildlife Hazard & Ecological Transition Committee -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Aerodrome Wildlife Hazard & Ecological Transition Committee'}</h4>
                  <p class="text-[11px] text-slate-500">Joint wildlife hazard mitigation and nature-based solutions committee</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 4 Wrap-Up & FE2 Launch Briefing -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Launch Briefing'}</h4>
                  <p class="text-[11px] text-slate-500">Final Formative Evaluation 2 checklist &amp; topic confirmation</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Formative Evaluation 2 (FE2) Launch &amp; Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Final Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
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
       GENERAL ENGLISH (AG) • MODULE 3 SESSIONS 1 TO 4 LESSON CONTENT
       ========================================================================= */

    window.toggleAg3SpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag3-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag3-spotcheck-btn-${sessNum}-${qId}`);
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

    window.toggleAg3QuizAnswer = function(id) {
      const el = document.getElementById(`ag3-quiz-ans-${id}`);
      const btn = document.getElementById(`ag3-quiz-btn-${id}`);
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

