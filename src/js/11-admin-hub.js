    function renderAdminGroupsTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-orange-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${theme.primary};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Promotion: GSEA26A • 19 Students
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fff7ed'}; border-color: ${theme.accent}30;">
                Official Rosters &amp; Faculty Assignments
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Class Groups, Assigned Teachers &amp; Course Timetables
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Official promotion structure for the academic semester. The GSEA26A promotion is divided into <strong>Group A (10 students)</strong> and <strong>Group B (9 students)</strong> for all General English (LV101E) and Aeronautical English (LV121E) classroom sessions. For oral Formative Evaluations (FE1, FE2, FE3), students follow dynamic rotating pairings and trios across exactly 4 slots of 30 minutes (2 hours total).
            </p>
          </div>

          <!-- Teaching Faculty & Timetable Card -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                Teaching Faculty &amp; Weekly Schedules
              </h4>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- General English LV101E -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-2xs">
                <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[11px] font-black" style="background-color: ${theme.primary};">LV101E</span>
                    <span class="text-xs font-bold text-slate-800">General English (AG)</span>
                  </div>
                  <span class="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Fridays 08h00 – 10h00</span>
                </div>
                <div class="space-y-2.5 text-xs">
                  <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span class="font-bold text-slate-700">Group A Teacher</span>
                    <span class="font-bold text-slate-900 bg-white px-2.5 py-1 rounded shadow-2xs border border-slate-200">Geri MIDDLETON</span>
                  </div>
                  <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span class="font-bold text-slate-700">Group B Teacher</span>
                    <span class="font-bold text-slate-900 bg-white px-2.5 py-1 rounded shadow-2xs border border-slate-200">Penny WRIGHT</span>
                  </div>
                </div>
              </div>

              <!-- Aeronautical English LV121E -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-2xs">
                <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[11px] font-black" style="background-color: ${theme.accent};">LV121E</span>
                    <span class="text-xs font-bold text-slate-800">Technical English (AT)</span>
                  </div>
                  <span class="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Wednesdays 13h15 – 15h15</span>
                </div>
                <div class="space-y-2.5 text-xs">
                  <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span class="font-bold text-slate-700">Group A Teacher</span>
                    <span class="font-bold text-slate-900 bg-white px-2.5 py-1 rounded shadow-2xs border border-slate-200">Tracy NEILL</span>
                  </div>
                  <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span class="font-bold text-slate-700">Group B Teacher</span>
                    <span class="font-bold text-slate-900 bg-white px-2.5 py-1 rounded shadow-2xs border border-slate-200">Ally HEWETT</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Coordination Note -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Course Coordination &amp; Administration: <strong>Phil PARRIS (LH/LAN)</strong> • <span class="font-mono text-slate-500 font-bold">v1.2.0</span>
              </span>
              <span class="text-slate-400 text-[11px]">Academic Year 2026–2027</span>
            </div>

            <!-- Pedagogical Transparency & AI Disclosure Notice -->
            <div class="p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start gap-2.5 text-xs text-slate-600 shadow-2xs">
              <svg class="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div class="space-y-0.5">
                <span class="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">Pedagogical Transparency Notice</span>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Selected exercises, case examples, and language drills used throughout this course have been developed with the aid of generative artificial intelligence. All exercises have been curated, verified, and finalized by the course instructor.
                </p>
              </div>
            </div>
          </div>

          <!-- Dynamic Rotation Callout Banner -->
          <div class="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-950 shadow-2xs">
            <svg class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div class="space-y-1">
              <span class="font-bold block">Dynamic Formative Evaluation (FE) Rotations:</span>
              <p class="text-[11px] text-amber-900 leading-relaxed">
                To ensure variety in group work and timeslot fairness, groups do <strong>not</strong> have fixed pairs or trios. Group A rotates across 2 pairs + 2 trios (4 slots = 2h), and Group B rotates across 3 pairs + 1 trio (4 slots = 2h). Every student experiences different peers and rotates between early and late slots across FE1 (W48), FE2 (W03), and FE3 (W08). Switch to the <strong>FE Tutorial Rotas</strong> tab to view your complete evaluation schedule.
              </p>
            </div>
          </div>

          <!-- Student Rosters (Side-by-Side Tables) -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Official Student Group Lists
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">19 Total Students</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Group A Table -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                <div class="p-3 text-white flex items-center justify-between" style="background-color: ${theme.primary};">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <h5 class="text-xs font-bold uppercase tracking-wider">Group A (10 Students)</h5>
                  </div>
                  <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono font-bold">2 Pairs + 2 Trios • 4 Slots</span>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr class="bg-slate-50 text-slate-500 border-b border-slate-200 text-[11px]">
                        <th class="py-2 px-3 w-10 font-bold">#</th>
                        <th class="py-2 px-3 font-bold">Student Identifier</th>
                        <th class="py-2 px-3 font-bold text-right">FE Rota</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">01</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA001</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">02</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA002</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">03</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA003</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">04</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA004</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">05</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA005</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">06</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA006</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">07</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA007</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">08</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA008</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">09</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA009</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">10</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPA010</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Group B Table -->
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                <div class="p-3 text-white flex items-center justify-between" style="background-color: ${theme.accentDark || theme.accent};">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                    <h5 class="text-xs font-bold uppercase tracking-wider">Group B (9 Students)</h5>
                  </div>
                  <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono font-bold">3 Pairs + 1 Trio • 4 Slots</span>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr class="bg-slate-50 text-slate-500 border-b border-slate-200 text-[11px]">
                        <th class="py-2 px-3 w-10 font-bold">#</th>
                        <th class="py-2 px-3 font-bold">Student Identifier</th>
                        <th class="py-2 px-3 font-bold text-right">FE Rota</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">01</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB001</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">02</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB002</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">03</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB003</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">04</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB004</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">05</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB005</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">06</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB006</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">07</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB007</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">08</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB008</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                      <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">09</td><td class="py-2 px-3 font-mono font-bold text-slate-800">GRPB009</td><td class="py-2 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Rotates per FE</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Academic Attendance & Student Instructions -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Student Attendance &amp; Classroom Expectations
            </h5>
            <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
              <li><strong>Punctuality:</strong> Arrive at least 5 minutes before scheduled class start times (13h15 Wed / 08h00 Fri).</li>
              <li><strong>Equipment:</strong> Bring your charged laptop or tablet to all sessions for interactive exercises and portfolio logging.</li>
              <li><strong>Absences:</strong> Any justified absence must be reported ahead of time to your assigned group teacher and to the course coordinator.</li>
            </ul>
          </div>
        </div>
      `;
    }

    const ADMIN_CALENDAR_SCHEDULES = {
      ag: {
        code: "LV101E",
        name: "General English (AG)",
        dayTime: "Fridays 08h00 – 10h00",
        faculty: "Geri MIDDLETON (Group A) & Penny WRIGHT (Group B)",
        modules: [
          {
            num: 1,
            title: "Module 1: Travel, Transport & Society",
            weeks: "Weeks 44 – 48",
            headerBg: "#1e293b",
            sessions: [
              { week: "W44", date: "Fri 30 Oct", title: "Session 1 — Introduction & Travel Anecdotes", tag: "Teaching Session", isFe: false },
              { week: "W45", date: "Fri 06 Nov", title: "Session 2 — Evolution of Transport", tag: "Teaching Session", isFe: false },
              { week: "W46", date: "Fri 13 Nov", title: "Session 3 — Overtourism", tag: "Teaching Session", isFe: false },
              { week: "W47", date: "Fri 20 Nov", title: "Session 4 — Sustainable and Eco-tourism", tag: "Teaching Session • Prep FE1", isFe: false },
              { week: "W48", date: "Fri 27 Nov", title: "FORMATIVE EVALUATION 1 (FE1) — Oral Tutorials", subtitle: "Fri 27 Nov • 30-min evaluation slots (Geri MIDDLETON / Penny WRIGHT)", tag: "Grade /20", isFe: true }
            ]
          },
          {
            num: 2,
            title: "Module 2: Weather, Environment & Ecological Transition",
            weeks: "Weeks 49 – Week 3",
            headerBg: "#1b382b",
            sessions: [
              { week: "W49", date: "Fri 04 Dec", title: "Session 1 — Extreme Weather & Atmospheric Hazards", tag: "Teaching Session", isFe: false },
              { week: "W50", date: "Fri 11 Dec", title: "Session 2 — Sustainable Cities & Low-Emission Mobility", tag: "Teaching Session", isFe: false },
              { isHoliday: true, text: "🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)" },
              { week: "W01", date: "Fri 08 Jan", title: "Session 3 — Building & Supporting Environmental Arguments", tag: "Teaching Session", isFe: false },
              { week: "W02", date: "Fri 15 Jan", title: "Session 4 — Biodiversity in Urban Areas & Transport Hubs", tag: "Teaching Session • Prep FE2", isFe: false },
              { week: "W03", date: "Fri 22 Jan", title: "FORMATIVE EVALUATION 2 (FE2) — Climate Resilience Redesign (Airport / City)", subtitle: "Fri 22 Jan • 30-min evaluation slots (Geri MIDDLETON / Penny WRIGHT)", tag: "Grade /20", isFe: true }
            ]
          },
          {
            num: 3,
            title: "Module 3: Innovation, Society & Emerging Technologies",
            weeks: "Weeks 4 – 8",
            headerBg: "#1a2238",
            sessions: [
              { week: "W04", date: "Fri 29 Jan", title: "Session 1 — Everyday AI & Workplace Automation", tag: "Teaching Session", isFe: false },
              { week: "W05", date: "Fri 05 Feb", title: "Session 2 — Future Mobility & Clean Energy Transport", tag: "Teaching Session", isFe: false },
              { week: "W06", date: "Fri 12 Feb", title: "Session 3 — Technology Ethics & Automated Decisions in AI", tag: "Teaching Session", isFe: false },
              { week: "W07", date: "Fri 19 Feb", title: "Session 4 — Biometrics, Digital IDs & Passenger Journey", tag: "Teaching Session • Prep FE3", isFe: false },
              { week: "W08", date: "Fri 26 Feb", title: "FORMATIVE EVALUATION 3 (FE3) — Emerging Technology Presentation (Aviation / Non-Aviation)", subtitle: "Fri 26 Feb • 30-min evaluation slots (Geri MIDDLETON / Penny WRIGHT)", tag: "Grade /20", isFe: true },
            ]
          }
        ]
      },
      aas: {
        code: "LV121E",
        name: "Technical English (AT)",
        dayTime: "Wednesdays 13h15 – 15h15",
        faculty: "Tracy NEILL (Group A) & Ally HEWETT (Group B)",
        modules: [
          {
            num: 1,
            title: "Module 1: Aerodromes, Air Traffic & Surface Operations",
            weeks: "Weeks 44 – 48",
            headerBg: "#1e293b",
            sessions: [
              { week: "W44", date: "Wed 28 Oct", title: "Session 1 — Introduction & Aviation Survey", tag: "Teaching Session", isFe: false },
              { week: "W45", date: "Wed 04 Nov", title: "Session 2 — Passenger Journey & Airfield Movement", tag: "Teaching Session", isFe: false },
              { week: "W46", date: "Wed 11 Nov", title: "Session 3 — Ground Operations & Turnaround", tag: "Teaching Session", isFe: false },
              { week: "W47", date: "Wed 18 Nov", title: "Session 4 — Jobs in Aviation", tag: "Teaching Session • Prep FE1", isFe: false },
              { week: "W48", date: "Wed 25 Nov", title: "FORMATIVE EVALUATION 1 (FE1) — Oral Tutorials", subtitle: "Wed 25 Nov • 30-min evaluation slots (Tracy NEILL / Ally HEWETT)", tag: "Grade /20", isFe: true }
            ]
          },
          {
            num: 2,
            title: "Module 2: Aircraft & Aerodynamics",
            weeks: "Weeks 49 – Week 3",
            headerBg: "#1b382b",
            sessions: [
              { week: "W49", date: "Wed 02 Dec", title: "Session 1 — Aerodynamics & Flight Principles", tag: "Teaching Session", isFe: false },
              { week: "W50", date: "Wed 09 Dec", title: "Session 2 — Aircraft Anatomy: Structure & Systems", tag: "Teaching Session", isFe: false },
              { isHoliday: true, text: "🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)" },
              { week: "W01", date: "Wed 06 Jan", title: "Session 3 — Commercial Aircraft & Airlines", tag: "Teaching Session", isFe: false },
              { week: "W02", date: "Wed 13 Jan", title: "Session 4 — Significant Aviation Accidents & Aircraft Types", tag: "Teaching Session • Prep FE2", isFe: false },
              { week: "W03", date: "Wed 20 Jan", title: "FORMATIVE EVALUATION 2 (FE2) — Aircraft & Airlines Profile", subtitle: "Wed 20 Jan • 30-min evaluation slots (Tracy NEILL / Ally HEWETT)", tag: "Grade /20", isFe: true }
            ]
          },
          {
            num: 3,
            title: "Module 3: Health, Meteorology, Safety & Security",
            weeks: "Weeks 4 – 8",
            headerBg: "#1a2238",
            sessions: [
              { week: "W04", date: "Wed 27 Jan", title: "Session 1 — Health & Human Factors in Aviation", tag: "Teaching Session", isFe: false },
              { week: "W05", date: "Wed 03 Feb", title: "Session 2 — Meteorology & Severe Weather in Aviation", tag: "Teaching Session", isFe: false },
              { week: "W06", date: "Wed 10 Feb", title: "Session 3 — Aviation Safety vs. Security: Airport & Aircraft Checks", tag: "Teaching Session", isFe: false },
              { week: "W07", date: "Wed 17 Feb", title: "Session 4 — Global Semester Review & 3-Team Quiz", tag: "Teaching Session • Prep FE3", isFe: false },
              { week: "W08", date: "Wed 24 Feb", title: "FORMATIVE EVALUATION 3 (FE3) — Aviation Current Events & Press Briefing", subtitle: "Wed 24 Feb • 30-min evaluation slots (Tracy NEILL / Ally HEWETT)", tag: "Grade /20", isFe: true }
            ]
          }
        ]
      }
    };

    window.adminCalendarState = window.adminCalendarState || {
      course: 'ag'
    };

    window.setAdminCalendarCourse = function(courseKey) {
      window.adminCalendarState.course = courseKey;
      const theme = modulesData[modalState.modNum - 1] || MODULE_THEMES[1];
      renderAdminCalendarTab(theme);
    };

    function renderAdminCalendarTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      const activeCalKey = window.adminCalendarState.course || 'ag';
      const calSched = ADMIN_CALENDAR_SCHEDULES[activeCalKey] || ADMIN_CALENDAR_SCHEDULES.ag;

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-orange-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${activeCalKey === 'ag' ? theme.primary : '#ea580c'};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Semester 1 Schedule • Start Week 44
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fff7ed'}; border-color: ${theme.accent}30;">
                ${calSched.code} (${calSched.dayTime})
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Weekly Course Calendar &amp; Evaluation Milestones
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Teaching sessions begin officially in <strong>Week 44</strong>. Each module runs for 4 consecutive teaching weeks followed by a dedicated Formative Evaluation (FE) tutorial week in 30-minute pair/trio slots.
            </p>
          </div>

          <!-- Course Calendar Track Switcher -->
          <div class="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-2xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">Select Course Track Calendar:</span>
                <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  <button type="button" onclick="setAdminCalendarCourse('ag')" class="px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${activeCalKey === 'ag' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                    General English (AG • LV101E)
                  </button>
                  <button type="button" onclick="setAdminCalendarCourse('aas')" class="px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${activeCalKey === 'aas' ? 'bg-orange-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                    Technical English (AT • LV121E)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Grid -->
          <div class="space-y-4">
            <!-- Active Track Schedule & Faculty Banner -->
            <div class="bg-slate-800 text-white p-3.5 sm:p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs border border-slate-700/60">
              <div class="flex items-center gap-3">
                <span class="px-2.5 py-1 rounded font-mono font-black text-xs ${activeCalKey === 'ag' ? 'bg-slate-700 text-amber-300 border border-amber-300/30' : 'bg-orange-700 text-amber-200 border border-amber-300/30'}">
                  ${calSched.code}
                </span>
                <div>
                  <h3 class="text-sm font-bold text-white">
                    ${calSched.name} — Weekly Schedule &amp; Milestones
                  </h3>
                  <p class="text-xs text-slate-300 mt-0.5">
                    ${calSched.dayTime} • Faculty: ${calSched.faculty}
                  </p>
                </div>
              </div>
              <span class="self-start sm:self-auto px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white/10 text-slate-200 border border-white/15">
                Weeks 44 – 08 • 3 Modules + 3 FEs
              </span>
            </div>

            ${calSched.modules.map(mod => `
              <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                <div class="p-3 text-white flex items-center justify-between" style="background-color: ${mod.headerBg};">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-xs uppercase tracking-wide">${mod.title}</span>
                  </div>
                  <span class="text-[11px] bg-white/20 px-2 py-0.5 rounded font-mono font-bold">${mod.weeks}</span>
                </div>
                <div class="divide-y divide-slate-100 text-xs">
                  ${mod.sessions.map(s => {
                    if (s.isHoliday) {
                      return `
                        <div class="p-2.5 bg-slate-100 text-slate-500 flex items-center justify-center gap-2 font-semibold text-[11px]">
                          <span>${s.text}</span>
                        </div>
                      `;
                    }
                    if (s.isFe) {
                      return `
                        <div class="p-3.5 flex items-center justify-between bg-amber-50/70 border-l-4 border-amber-500">
                          <div class="flex items-center gap-3">
                            <span class="px-2 py-1 rounded font-mono text-[10px] font-black text-white bg-amber-600">${s.week}</span>
                            <div>
                              <span class="font-bold text-amber-950 block">${s.title}</span>
                              <span class="text-amber-800 text-[11px]">${s.subtitle}</span>
                            </div>
                          </div>
                          <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-200 text-amber-900 border border-amber-300">${s.tag}</span>
                        </div>
                      `;
                    }
                    return `
                      <div class="p-3 flex items-center justify-between hover:bg-slate-50/70">
                        <div class="flex items-center gap-3">
                          <span class="px-2 py-1 rounded font-mono text-[10px] font-bold bg-slate-100 text-slate-700">${s.week}</span>
                          <div>
                            <span class="font-bold text-slate-800 block">${s.title}</span>
                            <span class="text-slate-500 text-[11px]">${s.date} • ${calSched.dayTime}</span>
                          </div>
                        </div>
                        <span class="text-slate-500 font-medium">${s.tag}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}

            <!-- Weeks 9–12 Wrap up -->
            <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
              <span class="font-medium">
                <strong>Weeks 9–12:</strong> Independent Portfolio Completion, TOEIC Verification &amp; Summative Examination Period.
              </span>
              <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700 font-mono">End of S1</span>
            </div>
          </div>
        </div>
      `;
    }

    const ADMIN_ROTA_SCHEDULES = {
      ag: {
        code: "LV101E",
        name: "General English (AG)",
        dayTime: "Fridays 08h00 – 10h00",
        roomNote: "Friday Session • 2 Hours (4 Slots of 30 min)",
        fes: {
          1: {
            title: "FE1 — Module 1 Oral Evaluation",
            week: "Week 48",
            dateStr: "Friday 27 November 2026",
            groupA: {
              teacher: "Geri MIDDLETON",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "pair", students: ["GRPA001", "GRPA002"] },
                { num: 2, time: "08h30 – 09h00", type: "pair", students: ["GRPA003", "GRPA004"] },
                { num: 3, time: "09h00 – 09h30", type: "trio", students: ["GRPA005", "GRPA006", "GRPA007"] },
                { num: 4, time: "09h30 – 10h00", type: "trio", students: ["GRPA008", "GRPA009", "GRPA010"] }
              ]
            },
            groupB: {
              teacher: "Penny WRIGHT",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "pair", students: ["GRPB001", "GRPB002"] },
                { num: 2, time: "08h30 – 09h00", type: "pair", students: ["GRPB003", "GRPB004"] },
                { num: 3, time: "09h00 – 09h30", type: "pair", students: ["GRPB005", "GRPB006"] },
                { num: 4, time: "09h30 – 10h00", type: "trio", students: ["GRPB007", "GRPB008", "GRPB009"] }
              ]
            }
          },
          2: {
            title: "FE2 — Module 2 Oral Evaluation",
            week: "Week 03",
            dateStr: "Friday 22 January 2027",
            groupA: {
              teacher: "Geri MIDDLETON",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "trio", students: ["GRPA008", "GRPA005", "GRPA003"] },
                { num: 2, time: "08h30 – 09h00", type: "pair", students: ["GRPA009", "GRPA006"] },
                { num: 3, time: "09h00 – 09h30", type: "pair", students: ["GRPA010", "GRPA002"] },
                { num: 4, time: "09h30 – 10h00", type: "trio", students: ["GRPA001", "GRPA004", "GRPA007"] }
              ]
            },
            groupB: {
              teacher: "Penny WRIGHT",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "pair", students: ["GRPB008", "GRPB001"] },
                { num: 2, time: "08h30 – 09h00", type: "trio", students: ["GRPB002", "GRPB003", "GRPB005"] },
                { num: 3, time: "09h00 – 09h30", type: "pair", students: ["GRPB004", "GRPB007"] },
                { num: 4, time: "09h30 – 10h00", type: "pair", students: ["GRPB006", "GRPB009"] }
              ]
            }
          },
          3: {
            title: "FE3 — Module 3 Oral Evaluation",
            week: "Week 08",
            dateStr: "Friday 26 February 2027",
            groupA: {
              teacher: "Geri MIDDLETON",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "pair", students: ["GRPA007", "GRPA009"] },
                { num: 2, time: "08h30 – 09h00", type: "trio", students: ["GRPA001", "GRPA005", "GRPA010"] },
                { num: 3, time: "09h00 – 09h30", type: "trio", students: ["GRPA002", "GRPA004", "GRPA008"] },
                { num: 4, time: "09h30 – 10h00", type: "pair", students: ["GRPA003", "GRPA006"] }
              ]
            },
            groupB: {
              teacher: "Penny WRIGHT",
              slots: [
                { num: 1, time: "08h00 – 08h30", type: "pair", students: ["GRPB003", "GRPB006"] },
                { num: 2, time: "08h30 – 09h00", type: "trio", students: ["GRPB001", "GRPB004", "GRPB009"] },
                { num: 3, time: "09h00 – 09h30", type: "pair", students: ["GRPB002", "GRPB007"] },
                { num: 4, time: "09h30 – 10h00", type: "pair", students: ["GRPB005", "GRPB008"] }
              ]
            }
          }
        }
      },
      aas: {
        code: "LV121E",
        name: "Technical English (AT)",
        dayTime: "Wednesdays 13h15 – 15h15",
        roomNote: "Wednesday Session • 2 Hours (4 Slots of 30 min)",
        fes: {
          1: {
            title: "FE1 — Module 1 Oral Evaluation",
            week: "Week 48",
            dateStr: "Wednesday 25 November 2026",
            groupA: {
              teacher: "Tracy NEILL",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "pair", students: ["GRPA001", "GRPA003"] },
                { num: 2, time: "13h45 – 14h15", type: "trio", students: ["GRPA002", "GRPA005", "GRPA008"] },
                { num: 3, time: "14h15 – 14h45", type: "pair", students: ["GRPA004", "GRPA006"] },
                { num: 4, time: "14h45 – 15h15", type: "trio", students: ["GRPA007", "GRPA009", "GRPA010"] }
              ]
            },
            groupB: {
              teacher: "Ally HEWETT",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "pair", students: ["GRPB001", "GRPB004"] },
                { num: 2, time: "13h45 – 14h15", type: "pair", students: ["GRPB002", "GRPB006"] },
                { num: 3, time: "14h15 – 14h45", type: "pair", students: ["GRPB003", "GRPB007"] },
                { num: 4, time: "14h45 – 15h15", type: "trio", students: ["GRPB005", "GRPB008", "GRPB009"] }
              ]
            }
          },
          2: {
            title: "FE2 — Module 2 Oral Evaluation",
            week: "Week 03",
            dateStr: "Wednesday 20 January 2027",
            groupA: {
              teacher: "Tracy NEILL",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "trio", students: ["GRPA009", "GRPA002", "GRPA006"] },
                { num: 2, time: "13h45 – 14h15", type: "pair", students: ["GRPA010", "GRPA004"] },
                { num: 3, time: "14h15 – 14h45", type: "trio", students: ["GRPA007", "GRPA003", "GRPA005"] },
                { num: 4, time: "14h45 – 15h15", type: "pair", students: ["GRPA001", "GRPA008"] }
              ]
            },
            groupB: {
              teacher: "Ally HEWETT",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "pair", students: ["GRPB008", "GRPB002"] },
                { num: 2, time: "13h45 – 14h15", type: "trio", students: ["GRPB009", "GRPB003", "GRPB001"] },
                { num: 3, time: "14h15 – 14h45", type: "pair", students: ["GRPB005", "GRPB007"] },
                { num: 4, time: "14h45 – 15h15", type: "pair", students: ["GRPB004", "GRPB006"] }
              ]
            }
          },
          3: {
            title: "FE3 — Module 3 Oral Evaluation",
            week: "Week 08",
            dateStr: "Wednesday 24 February 2027",
            groupA: {
              teacher: "Tracy NEILL",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "pair", students: ["GRPA008", "GRPA006"] },
                { num: 2, time: "13h45 – 14h15", type: "trio", students: ["GRPA001", "GRPA010", "GRPA007"] },
                { num: 3, time: "14h15 – 14h45", type: "pair", students: ["GRPA002", "GRPA009"] },
                { num: 4, time: "14h45 – 15h15", type: "trio", students: ["GRPA003", "GRPA004", "GRPA005"] }
              ]
            },
            groupB: {
              teacher: "Ally HEWETT",
              slots: [
                { num: 1, time: "13h15 – 13h45", type: "pair", students: ["GRPB007", "GRPB009"] },
                { num: 2, time: "13h45 – 14h15", type: "pair", students: ["GRPB005", "GRPB001"] },
                { num: 3, time: "14h15 – 14h45", type: "trio", students: ["GRPB006", "GRPB008", "GRPB004"] },
                { num: 4, time: "14h45 – 15h15", type: "pair", students: ["GRPB002", "GRPB003"] }
              ]
            }
          }
        }
      }
    };

    window.adminRotaState = window.adminRotaState || {
      course: 'ag',
      fe: 1
    };

    window.setAdminRotaCourse = function(courseKey) {
      window.adminRotaState.course = courseKey;
      const theme = modulesData[modalState.modNum - 1] || MODULE_THEMES[1];
      renderAdminRotaTab(theme);
    };

    window.setAdminRotaFe = function(feNum) {
      window.adminRotaState.fe = Number(feNum);
      const theme = modulesData[modalState.modNum - 1] || MODULE_THEMES[1];
      renderAdminRotaTab(theme);
    };

    function renderAdminRotaTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      const activeCourseKey = window.adminRotaState.course || 'ag';
      const activeFeNum = window.adminRotaState.fe || 1;
      const courseSched = ADMIN_ROTA_SCHEDULES[activeCourseKey] || ADMIN_ROTA_SCHEDULES.ag;
      const feData = courseSched.fes[activeFeNum] || courseSched.fes[1];

      const renderSlotStudents = (students) => {
        if (students.length === 2) {
          return `${students[0]} &amp; ${students[1]}`;
        }
        return `${students[0]}, ${students[1]} &amp; ${students[2]}`;
      };

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-orange-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${theme.primary};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Official Formative Evaluation Rota • GSEA26A
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fff7ed'}; border-color: ${theme.accent}30;">
                Dynamic Rotations • 4 Slots of 30 min (2 Hours)
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              30-Minute Oral Tutorial Timetables
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Every student group has an exact <strong>30-minute appointment slot</strong> with their assigned teacher. To guarantee fairness, pairings and trios rotate across FE1, FE2, and FE3, alternating early and late slots. Group A consists of <strong>2 pairs + 2 trios (10 students)</strong> and Group B consists of <strong>3 pairs + 1 trio (9 students)</strong>, precisely fitting 4 slots of 30 minutes (2 hours total).
            </p>
          </div>

          <!-- Interactive Filters Strip (Course Track Switcher) -->
          <div class="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-2xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <!-- Course Selector -->
              <div>
                <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">Select Course Track:</span>
                <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  <button type="button" onclick="setAdminRotaCourse('ag')" class="px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${activeCourseKey === 'ag' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                    General English (AG • LV101E)
                  </button>
                  <button type="button" onclick="setAdminRotaCourse('aas')" class="px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${activeCourseKey === 'aas' ? 'bg-orange-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                    Technical English (AT • LV121E)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Complete Semester 1 Rotation Matrix Table (All 3 FEs At a Glance) -->
          <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
            <div class="p-3.5 bg-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div class="flex items-center gap-2.5">
                <span class="px-2.5 py-1 rounded font-mono font-black text-white text-[11px] shadow-2xs" style="background-color: ${activeCourseKey === 'ag' ? theme.primary : theme.accent};">
                  ${courseSched.code}
                </span>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    ${courseSched.name} — Complete Semester Evaluation Schedule
                  </h4>
                  <p class="text-[11px] text-slate-300 font-medium">
                    ${courseSched.dayTime} • 30-min evaluation slots
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] sm:text-[11px] font-mono text-slate-300 font-bold bg-slate-700/80 px-2.5 py-1 rounded border border-slate-600/50">
                  FE1 (W48) • FE2 (W03) • FE3 (W08)
                </span>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px]">
                    <th class="py-2.5 px-3 font-bold w-24">Group &amp; Slot</th>
                    <th class="py-2.5 px-3 font-bold">FE1 (Week 48)</th>
                    <th class="py-2.5 px-3 font-bold">FE2 (Week 03)</th>
                    <th class="py-2.5 px-3 font-bold">FE3 (Week 08)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-700">
                  <!-- Group A Rows -->
                  <tr class="bg-slate-50/80 font-bold text-slate-800 text-[11px]">
                    <td colspan="4" class="py-2 px-3 tracking-wide uppercase bg-slate-100">
                      Group A (${activeCourseKey === 'ag' ? 'Fridays • Geri MIDDLETON' : 'Wednesdays • Tracy NEILL'})
                    </td>
                  </tr>
                  ${[0, 1, 2, 3].map(idx => `
                    <tr class="hover:bg-slate-50/70">
                      <td class="py-2.5 px-3 font-bold font-mono text-slate-800 whitespace-nowrap">
                        Slot ${idx + 1} (${courseSched.fes[1].groupA.slots[idx].time.split(' – ')[0]})
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[1].groupA.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[1].groupA.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[1].groupA.slots[idx].type.toUpperCase()}</span>
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[2].groupA.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[2].groupA.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[2].groupA.slots[idx].type.toUpperCase()}</span>
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[3].groupA.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[3].groupA.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[3].groupA.slots[idx].type.toUpperCase()}</span>
                      </td>
                    </tr>
                  `).join('')}

                  <!-- Group B Rows -->
                  <tr class="bg-slate-50/80 font-bold text-slate-800 text-[11px]">
                    <td colspan="4" class="py-2 px-3 tracking-wide uppercase bg-slate-100">
                      Group B (${activeCourseKey === 'ag' ? 'Fridays • Penny WRIGHT' : 'Wednesdays • Ally HEWETT'})
                    </td>
                  </tr>
                  ${[0, 1, 2, 3].map(idx => `
                    <tr class="hover:bg-slate-50/70">
                      <td class="py-2.5 px-3 font-bold font-mono text-slate-800 whitespace-nowrap">
                        Slot ${idx + 1} (${courseSched.fes[1].groupB.slots[idx].time.split(' – ')[0]})
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[1].groupB.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[1].groupB.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[1].groupB.slots[idx].type.toUpperCase()}</span>
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[2].groupB.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[2].groupB.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[2].groupB.slots[idx].type.toUpperCase()}</span>
                      </td>
                      <td class="py-2.5 px-3">
                        <span class="font-semibold block ${courseSched.fes[3].groupB.slots[idx].type === 'trio' ? 'text-amber-900 font-bold' : 'text-slate-800'}">
                          ${renderSlotStudents(courseSched.fes[3].groupB.slots[idx].students)}
                        </span>
                        <span class="text-[10px] text-slate-400 font-mono">${courseSched.fes[3].groupB.slots[idx].type.toUpperCase()}</span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Tutorial Day Preparation Rules -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Essential Checklist for Formative Evaluation Day
            </h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-3 bg-white border border-slate-200 rounded-lg">
                <strong class="text-slate-800 block font-bold mb-1">1. Arrive Early</strong>
                <p class="text-slate-600">Be outside the examination room 5 minutes before your scheduled start time.</p>
              </div>
              <div class="p-3 bg-white border border-slate-200 rounded-lg">
                <strong class="text-slate-800 block font-bold mb-1">2. Visual Supports</strong>
                <p class="text-slate-600">Have your slides or handouts ready to display immediately. Do not read from notes!</p>
              </div>
              <div class="p-3 bg-white border border-slate-200 rounded-lg">
                <strong class="text-slate-800 block font-bold mb-1">3. Vocabulary &amp; TOEIC</strong>
                <p class="text-slate-600">Have your vocabulary logs and completed TOEIC practice records open and ready for inspection.</p>
              </div>
              <div class="p-3 bg-white border border-slate-200 rounded-lg">
                <strong class="text-slate-800 block font-bold mb-1">4. Self-Critique Ready</strong>
                <p class="text-slate-600">Arrive with your personal strong points and weak points clearly thought through to discuss.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    const IMMERSION_CITIES = {
      cork: {
        id: 'cork',
        name: 'Cork',
        country: 'Ireland',
        tagline: 'The Rebel City & Ireland’s Culinary Capital',
        airportCode: 'EICK',
        airportName: 'Cork Airport',
        badgeColor: 'bg-emerald-700',
        flag: '🇮🇪',
        summary: 'Situated on the River Lee in Southwest Ireland, Cork is Ireland’s vibrant second-largest city. Renowned for its independent spirit, lively traditional music sessions in warm pubs, and friendly community atmosphere.',
        history: 'Founded in the 6th century by Saint Finbarr as a monastic settlement, Cork evolved through Viking raids and Anglo-Norman dominance into a fortified trading hub. The nearby port of Cobh was famously the final port of call for the Titanic in April 1912.',
        culture: 'Brimming with arts centers, live music, and Victorian architectural character. Home to University College Cork (UCC) with a rich student atmosphere and the famous Shandon Bells at St Anne’s Church.',
        food: 'The culinary capital of Ireland, anchored by the legendary 18th-century English Market. Famous for artisanal farm cheeses, spiced beef, fresh Atlantic oysters, and warm homemade soda bread with salted butter.',
        aviation: '<strong>Cork Airport (EICK):</strong> The principal international air gateway to Southern Ireland. Hosts modern terminal infrastructure and vital air traffic surveillance radars tracking westbound North Atlantic flight paths.',
        hostFamilyTip: 'Cork locals speak with a melodious, rising intonation and are celebrated for their warmth. A cup of tea is offered on arrival and throughout the day—always accept!'
      },
      dublin: {
        id: 'dublin',
        name: 'Dublin',
        country: 'Ireland',
        tagline: 'Historic Fair City & Global Aerospace Leasing Capital',
        airportCode: 'EIDW',
        airportName: 'Dublin Airport',
        badgeColor: 'bg-blue-700',
        flag: '🇮🇪',
        summary: 'Ireland’s historic capital city, straddling the River Liffey between Dublin Bay and the Dublin Mountains. A UNESCO City of Literature brimming with history, modern tech innovation, and bustling cultural life.',
        history: 'Established by Norse Vikings in 841 AD as a trading base, Dublin evolved into the center of British administration before becoming the capital of the Republic of Ireland. Home to Trinity College (founded in 1592) and the Book of Kells.',
        culture: 'Rich literary heritage honoring James Joyce, Oscar Wilde, and Samuel Beckett. Historic Georgian townhouses with iconic brightly painted doors, street buskers on Grafton Street, and historic pubs in Temple Bar.',
        food: 'Traditional Irish stew, Dublin coddle (slow-cooked sausages, bacon, and potatoes), soda farls, smoked salmon, and a cutting-edge contemporary cafe culture.',
        aviation: '<strong>Dublin Airport (EIDW):</strong> The corporate headquarters of Ryanair and Aer Lingus, and the undisputed global capital of aircraft leasing (managing over 50% of the world’s leased passenger airliner fleet). Features high-volume transatlantic pre-clearance and major MRO hangars.',
        hostFamilyTip: 'Public transport via the DART coastal train and Dublin Bus is seamless. Irish politeness is legendary—saying "Thank you" to the bus driver when stepping off is an essential local habit!'
      },
      manchester: {
        id: 'manchester',
        name: 'Manchester',
        country: 'United Kingdom',
        tagline: 'Capital of the North, Industrial Heritage & Music Legend',
        airportCode: 'EGCC',
        airportName: 'Manchester Airport & Runway Visitor Park',
        badgeColor: 'bg-rose-700',
        flag: '🇬🇧',
        summary: 'Located in North West England, Manchester is a dynamic metropolis celebrated worldwide for its industrial past, revolutionary engineering, passionate football heritage, and ground-breaking music scene.',
        history: 'The world’s first industrialized city ("Cottonopolis"). Site of the world’s first inter-city passenger railway (1830), the splitting of the atom by Ernest Rutherford in 1917, and the creation of the world’s first stored-program computer in 1948.',
        culture: 'World-famous musical birthplace of Oasis, The Smiths, Joy Division, and The Stone Roses. Home to the Science and Industry Museum, the National Football Museum, and the fierce rivalry between Manchester City and Manchester United.',
        food: 'Traditional Sunday roasts with Yorkshire puddings, Eccles cakes, Manchester Tart (pastry with raspberry jam, custard, and coconut), and the vibrant multicultural cuisine of the Curry Mile.',
        aviation: '<strong>Manchester Airport (EGCC):</strong> The UK’s busiest airport outside London, with twin parallel runways. Home to the Runway Visitor Park housing the preserved British Airways supersonic Concorde (G-BOAC) and RAF Nimrod maritime patrol aircraft.',
        hostFamilyTip: 'Mancunians are renowned for their quick wit, hospitality, and down-to-earth conversation. The yellow Metrolink tram network makes navigating between neighborhoods effortless.'
      },
      leeds: {
        id: 'leeds',
        name: 'Leeds',
        country: 'United Kingdom',
        tagline: 'Victorian Grandeur & The Cultural Heart of Yorkshire',
        airportCode: 'EGNM',
        airportName: 'Leeds Bradford Airport',
        badgeColor: 'bg-indigo-700',
        flag: '🇬🇧',
        summary: 'The commercial and cultural engine of West Yorkshire, set along the River Aire with the rugged Yorkshire Dales national park right on its doorstep. A thriving university hub known for shopping, arts, and friendly northern character.',
        history: 'Transformed during the Industrial Revolution from a medieval market town into a global leader in wool production, flax mills, and heavy locomotive manufacturing. Historic Kirkgate Market is where Marks & Spencer was founded as a penny bazaar in 1884.',
        culture: 'Magnificent Victorian architecture with ornate glass-canopied shopping arcades (Victoria Quarter), the world-class Royal Armouries national museum collection, Leeds Art Gallery, and a lively live music and theatre scene.',
        food: 'Authentic Yorkshire pudding, Wensleydale cheese, traditional fish & chips with mushy peas, and steaming mugs of Yorkshire Gold tea.',
        aviation: '<strong>Leeds Bradford Airport (EGNM):</strong> The highest commercial airport in the UK (elevation 681 feet / 208 m). Known for demanding meteorology and crosswind runway operations, and an active training hub for commercial flight academies and aeronautical apprentices.',
        hostFamilyTip: 'People in Yorkshire are famously honest, direct, and proud of their county ("God’s Own County"). A warm smile and polite greeting to shopkeepers and neighbors is standard etiquette.'
      },
      liverpool: {
        id: 'liverpool',
        name: 'Liverpool',
        country: 'United Kingdom',
        tagline: 'World Capital of Pop, Maritime Gateway & Royal Docks',
        airportCode: 'EGGP',
        airportName: 'Liverpool John Lennon Airport',
        badgeColor: 'bg-amber-700',
        flag: '🇬🇧',
        summary: 'Situated on the eastern side of the Mersey Estuary in North West England, Liverpool is an iconic maritime city renowned for its historic waterfront, maritime trade legacy, and unrivalled musical pedigree.',
        history: 'During the 18th and 19th centuries, Liverpool was one of the world’s preeminent trading ports, handling up to 40% of global mercantile commerce. Millions of European emigrants departed through Liverpool for the Americas.',
        culture: 'The official Guinness World Records "World Capital City of Pop"—the home of The Beatles, The Cavern Club, and the Merseybeat explosion. Features more museums and galleries than any UK city outside London, including Tate Liverpool.',
        food: 'Traditional "Scouse" (a hearty slow-cooked beef or lamb stew brought by Scandinavian sailors), Liverpool gin, artisan waterfront bakeries, and fresh seafood.',
        aviation: '<strong>Liverpool John Lennon Airport (EGGP):</strong> One of the UK’s oldest airports (formerly Speke Airport). The original 1930s Art Deco terminal and control tower have been preserved as a heritage aviation hotel with vintage propliners on the former apron.',
        hostFamilyTip: 'Liverpudlians ("Scousers") have an infectious sense of humor, distinct accent, and legendary friendliness. You’ll frequently hear "Sound" used to mean good, great, or okay!'
      },
      shoreham: {
        id: 'shoreham',
        name: 'Shoreham-by-Sea',
        country: 'United Kingdom',
        tagline: 'Historic Seaside Haven & Home of the UK’s Oldest Airport',
        airportCode: 'EGKA',
        airportName: 'Brighton City Airport (Shoreham Airport)',
        badgeColor: 'bg-teal-700',
        flag: '🇬🇧',
        summary: 'A charming coastal town in West Sussex nestled between the rolling chalk hills of the South Downs National Park and the English Channel, just 10 minutes west of vibrant Brighton.',
        history: 'An ancient port dating to Norman times with the 11th-century church of St Mary de Haura. Features historic houseboats lining the River Adur estuary and Victorian coastal fortifications.',
        culture: 'Relaxed coastal lifestyle with pebble beaches, windsurfing, kitesurfing, riverside cafes, and easy access to Brighton’s bohemian arts festivals, the Royal Pavilion, and pier.',
        food: 'Fresh English Channel seafood (Sussex crab, sea bass, Dover sole), traditional seaside cream teas with warm scones, strawberry jam, and clotted cream.',
        aviation: '<strong>Brighton City Airport / Shoreham Airport (EGKA):</strong> <em>The oldest continuously operating commercial airport in the United Kingdom</em>, founded in 1910! Features a stunning, world-renowned Grade II* listed Art Deco terminal building opened in 1936, active flight academies, and aircraft restoration facilities.',
        hostFamilyTip: 'A quiet, safe, and welcoming community with strong family traditions. Excellent direct train links to Brighton (12 minutes) and central London Victoria (70 minutes).'
      }
    };

    window.activeImmersionCity = window.activeImmersionCity || 'cork';

    window.setImmersionCity = function(cityKey) {
      window.activeImmersionCity = cityKey;
      const theme = modulesData[modalState.modNum - 1] || MODULE_THEMES[3];
      renderImmersionCitiesTab(theme);
    };

    function renderImmersionOverviewTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-700/80">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white bg-indigo-600/90 shadow-2xs">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                End of Semester 2 • 4-Week Immersion
              </span>
              <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/10 text-indigo-200 border border-white/15">
                TOEIC S3 Preparation
              </span>
            </div>
            <h3 class="text-base sm:text-xl font-bold tracking-tight text-white">
              GSEA English Immersion Program
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              At the conclusion of Semester 2, all GSEA students participate in an intensive 4-week English immersion program in the United Kingdom or Ireland. This trip serves as the capstone linguistic transition toward the official TOEIC examination scheduled at the start of Semester 3.
            </p>
          </div>

          <!-- 4 Core Pillars Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Pillar 1: Academic Pacing -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-100">
                <div class="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 font-black text-sm">
                  📚
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900">Intensive Language Classes</h4>
                  <span class="text-[10px] text-slate-400 font-medium">Mornings &amp; Afternoons</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Daily sessions in certified native partner language schools. Instruction targets advanced grammar in use, spontaneous conversation fluency, and systematic strategies for the upcoming <strong>TOEIC test</strong>.
              </p>
            </div>

            <!-- Pillar 2: Host Family Immersion -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-100">
                <div class="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 font-black text-sm">
                  🏠
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900">Host Family Homestay</h4>
                  <span class="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">1 ENAC Student per Family</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Students are accommodated with vetted local host families. Strict policy of <strong>one ENAC student per household</strong> guarantees non-stop English conversation at breakfast, dinner, and during family life.
              </p>
            </div>

            <!-- Pillar 3: Cultural Excursions -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-100">
                <div class="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 font-black text-sm">
                  🎭
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900">Cultural Immersion &amp; Visits</h4>
                  <span class="text-[10px] text-slate-400 font-medium">Heritage, History &amp; Society</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Guided city walking tours, museums, historic castles, live concerts, and regional excursions. Deepens practical vocabulary and socio-cultural awareness of modern Ireland and the United Kingdom.
              </p>
            </div>

            <!-- Pillar 4: Aviation Specific Visits -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-100">
                <div class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-black text-sm">
                  ✈️
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900">Aviation Specific Visits</h4>
                  <span class="text-[10px] text-slate-400 font-medium">Airports, Companies &amp; Museums</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Subject to local operational availability: behind-the-scenes tours of regional airports, aircraft maintenance facilities, flight academies, or aerospace heritage sites (such as Concorde in Manchester or the Art Deco terminal in Shoreham).
              </p>
            </div>
          </div>

          <!-- Direct CTA to Destination Guides -->
          <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div>
              <h5 class="text-xs sm:text-sm font-bold text-indigo-950">Explore Your 6 Potential Host Destinations</h5>
              <p class="text-xs text-indigo-800 mt-0.5">Discover the culture, history, food, and aviation links of Cork, Dublin, Manchester, Leeds, Liverpool, and Shoreham.</p>
            </div>
            <button type="button" onclick="switchModalTab('immersion_cities')" class="px-4 py-2 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all cursor-pointer shadow-xs self-start sm:self-auto shrink-0 flex items-center gap-1.5">
              <span>View City Guides</span>
              <span class="text-sm">→</span>
            </button>
          </div>
        </div>
      `;
    }

    function renderImmersionCitiesTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;

      const activeKey = window.activeImmersionCity || 'cork';
      const city = IMMERSION_CITIES[activeKey] || IMMERSION_CITIES.cork;

      bodyEl.innerHTML = `
        <div class="space-y-5">
          <!-- City Selector Bar -->
          <div class="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 shadow-2xs">
            <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">Select Immersion Destination:</span>
            <div class="flex flex-wrap gap-1.5">
              ${Object.keys(IMMERSION_CITIES).map(key => {
                const c = IMMERSION_CITIES[key];
                const isActive = (key === activeKey);
                return `
                  <button type="button" onclick="setImmersionCity('${key}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${isActive ? 'bg-slate-800 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'}">
                    <span>${c.flag}</span>
                    <span>${c.name}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Active City Showcase Card -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <!-- Header Banner -->
            <div class="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">${city.flag}</span>
                  <span class="text-xs font-black tracking-widest uppercase text-slate-300 font-mono">${city.country}</span>
                </div>
                <span class="px-2.5 py-1 rounded font-mono font-black text-xs bg-white/15 text-amber-300 border border-white/20">
                  ${city.airportCode} • ${city.airportName}
                </span>
              </div>
              <h3 class="text-lg sm:text-2xl font-bold tracking-tight text-white">${city.name}</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-medium mt-1">${city.tagline}</p>
              <p class="text-xs sm:text-sm text-slate-200/90 mt-3 leading-relaxed max-w-3xl">${city.summary}</p>
            </div>

            <!-- Content Grid (History, Culture, Food, Aviation) -->
            <div class="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- History -->
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div class="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                  <span class="text-base">🏛️</span>
                  <span>History &amp; Heritage</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${city.history}</p>
              </div>

              <!-- Culture -->
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div class="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                  <span class="text-base">🎭</span>
                  <span>Culture &amp; Daily Life</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${city.culture}</p>
              </div>

              <!-- Food -->
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div class="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                  <span class="text-base">🍲</span>
                  <span>Food, Markets &amp; Traditions</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${city.food}</p>
              </div>

              <!-- Aviation Connection -->
              <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-1.5">
                <div class="flex items-center gap-2 text-blue-950 font-bold text-xs uppercase tracking-wider">
                  <span class="text-base">✈️</span>
                  <span>Aviation &amp; Aerospace Connection</span>
                </div>
                <p class="text-xs text-blue-900 leading-relaxed">${city.aviation}</p>
              </div>
            </div>

            <!-- Host Family Homestay Callout -->
            <div class="mx-4 sm:mx-6 mb-4 sm:mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200/90 flex items-start gap-3">
              <span class="text-xl shrink-0 mt-0.5">🏠</span>
              <div class="text-xs">
                <strong class="text-amber-950 block font-bold mb-0.5">Homestay &amp; Living with Your Local Host Family:</strong>
                <p class="text-amber-900 leading-relaxed">${city.hostFamilyTip} Remember: <strong>strictly 1 ENAC student per host family</strong> to ensure genuine linguistic immersion!</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    window.__GSEA_GUIDE_LANG = window.__GSEA_GUIDE_LANG || 'en';

    window.setStudentGuideLang = function(lang) {
      window.__GSEA_GUIDE_LANG = lang;
      const theme = modulesData[modalState.modNum - 1];
      renderStudentGuideTab(theme, lang);
    };

    function renderStudentGuideTab(theme, lang) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const activeLang = lang || window.__GSEA_GUIDE_LANG || 'en';
      const isFr = (activeLang === 'fr');
      window.__GSEA_GUIDE_LANG = activeLang;

      bodyEl.innerHTML = `
        <div class="space-y-5">
          <!-- Top Header Banner -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs text-2xl" style="background-color: ${theme.primary};">
                <span>📘</span>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs" style="background-color: ${theme.accent};">${isFr ? 'GUIDE ÉTUDIANT' : 'STUDENT GUIDE'}</span>
                  <h3 class="text-base sm:text-lg font-extrabold text-slate-900">${isFr ? 'Comment Réussir en Anglais' : 'How to Succeed in English'}</h3>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">${isFr ? 'Conseils essentiels pour progresser régulièrement, réussir les évaluations formatives et valider le semestre' : 'Essential guidelines for continuous progress, formative evaluations &amp; success'}</p>
              </div>
            </div>

            <!-- In-Drawer Language Switcher Toggle -->
            <div class="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-inner self-stretch sm:self-auto justify-center gap-1">
              <button type="button" onclick="setStudentGuideLang('en')" class="px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${!isFr ? 'bg-white shadow-xs text-slate-900 border border-slate-300' : 'text-slate-500 hover:text-slate-800'}">🇬🇧 English</button>
              <button type="button" onclick="setStudentGuideLang('fr')" class="px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${isFr ? 'bg-white shadow-xs text-slate-900 border border-slate-300' : 'text-slate-500 hover:text-slate-800'}">🇫🇷 Français</button>
            </div>
          </div>

          <!-- Key Mindset Alert Box -->
          <div class="p-4 rounded-xl border border-blue-200/80 bg-blue-50/70 shadow-2xs flex items-start gap-3">
            <span class="text-xl shrink-0 mt-0.5">🎯</span>
            <div class="text-xs text-blue-900 space-y-1">
              <h4 class="font-extrabold text-blue-950 text-sm">${isFr ? 'Notre Priorité : Progression Continue &amp; Régulière' : 'Our Focus: Gradual &amp; Steady Improvement'}</h4>
              <p class="leading-relaxed">
                ${isFr 
                  ? 'Ce programme communicatif est spécialement conçu pour développer votre aisance, votre confiance à l\'oral et votre vocabulaire professionnel. Il n\'y a pas d\'examen écrit final stressant. Votre réussite repose sur un travail continu, une interaction active avec vos pairs et des progrès constants au fil des semaines.'
                  : 'This communicative programme is designed to build your spoken confidence, fluency, and professional vocabulary. There is no high-stress final written exam. Instead, your success is based on continuous effort, active peer interaction, and steady weekly improvement.'}
              </p>
            </div>
          </div>

          <!-- Section 1: Three Core Focus Areas -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="font-bold text-slate-900 text-sm">${isFr ? 'Trois Piliers Fondamentaux de l\'Année' : 'Three Core Areas for the Year'}</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div class="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span>📈</span>
                  <span>${isFr ? 'Progression Continue' : 'Continuous Progress'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Développer pas à pas vos compétences existantes sans interruption tout au long de l\'année.'
                    : 'Building on the competencies you already have, making steady and gradual progress week after week.'}
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div class="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span>🗣️</span>
                  <span>${isFr ? 'Évaluations Formatives' : 'Formative Evaluations'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Des oraux réguliers en binôme ou trinôme à la fin de chaque module pour mesurer vos progrès oraux et recevoir des conseils personnalisés.'
                    : 'Regular oral tutorials in pairs or trios at the end of each module to monitor speaking and receive individual guidance.'}
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div class="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span>📊</span>
                  <span>${isFr ? 'Auto-évaluation Active' : 'Self-Monitoring'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Noter vos réflexions dans votre Portfolio d\'Apprentissage afin de suivre votre propre trajectoire avec vos enseignants.'
                    : 'Logging your own progress in the digital Learning Portfolio so both you and your teachers can track your trajectory.'}
                </p>
              </div>
            </div>
          </div>

          <!-- Section 2: CRITICAL PORTFOLIO ALERT -->
          <div class="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 shadow-xs space-y-3">
            <div class="flex items-center gap-2 text-amber-950">
              <span class="text-xl">⚠️</span>
              <h4 class="font-black text-sm uppercase tracking-wide">${isFr ? 'Règle Obligatoire : Rédigez des remarques détaillées (Jamais de réponses en un seul mot !)' : 'Mandatory Rule: Detailed Portfolio Reflections (No One-Word Answers!)'}</h4>
            </div>
            <p class="text-xs sm:text-[12.5px] text-amber-900 leading-relaxed">
              ${isFr 
                ? 'Votre Portfolio d\'Apprentissage est suivi et vérifié régulièrement par le <strong>Professeur Référent (Phil PARRIS)</strong>, qui coordonne le soutien personnalisé avec vos enseignants en cas de besoin.'
                : 'Your digital Learning Portfolio is checked and monitored regularly by the <strong>Professeur Référent (Phil PARRIS)</strong>, who coordinates with your teachers to organize additional support whenever needed.'}
            </p>
            <div class="space-y-2.5 text-xs">
              <div class="p-3 rounded-xl bg-white border border-rose-200/90 space-y-1">
                <div class="text-rose-700 font-bold text-xs flex items-center gap-1.5">
                  <span>❌</span>
                  <span>${isFr ? 'N\'écrivez jamais de réponses en un seul mot' : 'Never write one-word answers'}</span>
                </div>
                <p class="text-slate-600 text-[11.5px] leading-relaxed">
                  ${isFr ? 'N\'écrivez PAS de termes vagues comme <em>"good"</em>, <em>"fine"</em>, <em>"ok"</em>, <em>"rien"</em> ou <em>"ras"</em>. Cela n\'apporte aucune information utile aux enseignants pour vous aider.' : 'Do NOT write simple words like <em>"good"</em>, <em>"fine"</em>, <em>"ok"</em>, <em>"nothing"</em>, or <em>"ras"</em>. These give your teachers zero information to help you.'}
                </p>
              </div>
              <div class="p-3 rounded-xl bg-white border border-emerald-200/90 space-y-1">
                <div class="text-emerald-700 font-bold text-xs flex items-center gap-1.5">
                  <span>✅</span>
                  <span>${isFr ? 'Rédigez toujours des remarques détaillées' : 'Always write detailed notes'}</span>
                </div>
                <p class="text-slate-700 text-[11.5px] leading-relaxed">
                  ${isFr ? 'Détaillez ce qui s\'est bien passé, les points de vocabulaire ou de grammaire qui ont posé difficulté, et ce que vous prévoyez de travailler avant la séance suivante.' : 'Explain exactly what went well, which specific vocabulary or grammar points were difficult, and what you will do before the next session to improve.'}
                </p>
              </div>
            </div>
          </div>

          <!-- Section 3: The 6 Spoken Competencies & TOEIC -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs">2</span>
                <h4 class="font-bold text-slate-900 text-sm">${isFr ? 'Les 6 Compétences Orales Clés (Test MTF) &amp; TOEIC' : 'The 6 Core Spoken Competencies (MTF Test) &amp; TOEIC'}</h4>
              </div>
              <span class="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">${isFr ? 'Évalué en S3' : 'Tested in S3'}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              ${isFr 
                ? 'Développez les 6 compétences fondamentales évaluées lors de l\'examen oral MTF en semestre 3, et suivez votre TOEIC sur GlobalExam :'
                : 'Track your growth in all 6 competencies tested during the oral MTF test, and monitor your TOEIC listening and reading via GlobalExam:'}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '1. Aisance Orale (Fluency)' : '1. Spoken Fluency'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Débit naturel, fluide et sans longues hésitations.' : 'Smooth, natural tempo without long hesitations.'}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '2. Interaction' : '2. Interaction'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Relances actives, écoute du partenaire et questions spontanées.' : 'Active turn-taking, asking questions, and responding to peers.'}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '3. Richesse Lexicale' : '3. Vocabulary Range'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Emploi du vocabulaire aéronautique et général précis.' : 'Using exact general and aviation technical terminology.'}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '4. Correction Grammaticale' : '4. Grammatical Control'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Structures claires, maîtrise des temps et connecteurs logiques.' : 'Clear sentence structures, tenses, and connecting words.'}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '5. Prononciation' : '5. Pronunciation'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Articulations intelligibles, accentuation et rythme naturel.' : 'Intelligible sounds, correct word stress, and natural rhythm.'}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? '6. Compréhension Orale' : '6. Listening Comprehension'}</strong>
                <p class="text-[11px] text-slate-600 leading-snug">${isFr ? 'Compréhension aisée des briefings, audios et consignes de l\'enseignant.' : 'Understanding spoken briefings, audios, and teacher instructions.'}</p>
              </div>
            </div>
          </div>

          <!-- Section 4: Formative Evaluations (FE) Rules -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="font-bold text-slate-900 text-sm">${isFr ? 'Déroulement des Évaluations Formatives (EF)' : 'Formative Evaluations (FE) — How They Work'}</h4>
            </div>
            <div class="space-y-2.5 text-xs text-slate-700">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <span class="text-base shrink-0">👥</span>
                <div>
                  <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? 'EF 1, EF 2 et EF 3 — Préparées en dehors des cours' : 'FE 1, FE 2, and FE 3 — Prepared Outside of Class'}</strong>
                  <p class="text-[11.5px] text-slate-600 leading-relaxed">
                    ${isFr 
                      ? 'Ces oraux de 30 minutes ont lieu à la fin de chaque module. Vous préparez votre sujet et votre support de manière autonome en binôme ou trinôme. Arrivez à l\'heure, participez activement et montrez ce que vous avez appris !'
                      : 'These 30-minute tutorials take place at the end of each module. You prepare your presentation and topics outside of class with your assigned partner or trio. Arrive on time, speak actively, and show what you have learned!'}
                  </p>
                </div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <span class="text-base shrink-0">🎓</span>
                <div>
                  <strong class="text-slate-900 block font-bold mb-0.5">${isFr ? 'EF Finale (Séance 17) — Séance de révision dédiée en classe' : 'Final FE (Class 17) — Revision Session in Class'}</strong>
                  <p class="text-[11.5px] text-slate-600 leading-relaxed">
                    ${isFr 
                      ? 'La dernière évaluation formative du semestre est préparée ensemble en classe lors d\'une séance de révision. Vous saurez exactement à quoi vous attendre — aucune mauvaise surprise !'
                      : 'The final formative evaluation at the end of the semester is prepared together in class during a dedicated revision session leading up to it. All students know exactly what to expect — no surprises!'}
                  </p>
                </div>
              </div>
            </div>
            <p class="text-[11px] text-slate-500 italic pl-1">
              ${isFr ? '* Ce cadre s\'applique aussi bien à l\'anglais général (AG) qu\'à l\'anglais technique (AT/AAS).' : '* This framework applies to both General English (AG) and Technical English (AT/AAS).'}
            </p>
          </div>

          <!-- Section 5: Using Class Space & Resources -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="font-bold text-slate-900 text-sm">${isFr ? 'Comment Utiliser les Espaces de Cours' : 'How to Use the Class Resource Workspace'}</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div class="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>📋</span>
                  <span>${isFr ? 'Plan de Cours &amp; Objectifs' : 'Lesson Plan &amp; Objectives'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'À consulter avant chaque séance pour connaître les objectifs et cibles communicatives visées.'
                    : 'Read this before each class to know the goals, key topics, and communicative targets for the session.'}
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div class="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>📖</span>
                  <span>${isFr ? 'Supports &amp; Activités de Cours' : 'Class Content &amp; Worksheets'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Les supports de communication orale en classe. <strong>Vous n\'avez PAS besoin de terminer tous les exercices en classe !</strong> La matière est riche pour alimenter les échanges oraux. Rien ne sera évalué en examen écrit.'
                    : 'The speaking materials you work on in class. <strong>You do NOT need to complete every single exercise in class!</strong> The materials are rich so you never run out of speaking topics. It is not tested in a written exam.'}
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div class="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>🔤</span>
                  <span>${isFr ? 'Vocabulaire Indispensable' : 'Vocabulary Revision'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Le lexique clé que vous <strong>devez impérativement réviser</strong> et réutiliser lors de vos prises de parole et évaluations formatives.'
                    : 'Essential vocabulary that you <strong>must revise</strong> and aim to use during your speaking activities and formative evaluations.'}
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div class="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>🔎</span>
                  <span>${isFr ? 'Ressources Complémentaires &amp; TOEIC' : 'Additional Materials &amp; TOEIC'}</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  ${isFr 
                    ? 'Des documents optionnels pour approfondir les sujets, accompagnés d\'un entraînement TOEIC hebdomadaire.'
                    : 'Optional extra resources for students who wish to explore the subject further, plus weekly TOEIC practice exercises to prepare for the test.'}
                </p>
              </div>
            </div>
          </div>

          <!-- Section 6: Evaluation & Questions -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <h4 class="font-bold text-slate-900 text-sm">${isFr ? 'Notation &amp; Validation GO / NO GO du Semestre' : 'Grading &amp; Semester GO / NO GO'}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                ${isFr 
                  ? 'Participation active en classe + portfolio complété et détaillé + évaluations formatives préparées composent votre note finale (/20) et la décision <strong>GO / NO GO</strong>.'
                  : 'Active class participation + detailed portfolio + prepared FEs combine into your final grade (/20) and semester <strong>GO / NO GO</strong>.'}
              </p>
              <div class="inline-flex items-center gap-2 text-[11px] text-slate-500 pt-0.5">
                <span>${isFr ? 'Maquette officielle :' : 'Official syllabus:'}</span>
                <button type="button" onclick="switchModalTab('sem_obj_en')" class="text-blue-600 hover:underline font-bold cursor-pointer">🇬🇧 English</button>
                <span>•</span>
                <button type="button" onclick="switchModalTab('sem_obj_fr')" class="text-blue-600 hover:underline font-bold cursor-pointer">🇫🇷 Français</button>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs shrink-0 space-y-0.5 self-stretch sm:self-auto">
              <div class="text-[10px] text-slate-500 uppercase font-mono font-bold">${isFr ? 'Des questions ou besoin d\'aide ?' : 'Questions or Support?'}</div>
              <div class="font-bold text-slate-900 text-xs">Phil PARRIS <span class="text-slate-500 font-normal">(Professeur Référent)</span></div>
              <a href="mailto:philip.parris@enac.fr" class="text-blue-600 hover:underline font-mono text-[11px] block">philip.parris@enac.fr</a>
            </div>
          </div>
        </div>
      `;
    }

    function renderSemesterObjectivesTab(lang, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const isAas = (modalState.program === 'aas' || currentProgram === 'aas');
      const isFr = (lang === 'fr');

      const agObjectivesEn = [
        {
          num: "01",
          badge: "Continuous Assessment",
          title: "Continuous Assessment & Autonomous Learning",
          desc: "Actively participate in weekly communicative tasks, role-plays, and self-evaluation logs in the Formative Learning Portfolio. Students will use ongoing formative feedback from teachers and peers to identify personal areas for growth and track their linguistic progression across Semester 1.",
          indicators: "Weekly speaking participation, peer-review collaboration, structured portfolio reflection entries."
        },
        {
          num: "02",
          badge: "Professional Development",
          title: "Professional Development & Public Speaking",
          desc: "Deliver well-structured, convincing oral presentations on contemporary society and mobility themes (such as sustainable tourism itineraries, sponge city engineering, or AI ethical audits). Students will use professional signposting, visual commentary, and an appropriate formal workplace register.",
          indicators: "Slide design with bullet cue points, formal transition phrases, confident audience engagement."
        },
        {
          num: "03",
          badge: "Vocabulary Range",
          title: "Vocabulary Building & Accuracy",
          desc: "Accurately recognize, pronounce, and employ an extensive range of B2 general, technical, and academic vocabulary related to transport evolution, sustainable mobility, urban climate resilience, tech ethics, and responsible innovation (DDRS).",
          indicators: "Active use of module vocabulary lists, word-family derivations, accurate collocations in discussion."
        },
        {
          num: "04",
          badge: "Spoken Fluency",
          title: "Spoken Fluency & Spontaneous Argumentation",
          desc: "Express viewpoints, construct balanced arguments, and defend positions smoothly and spontaneously during group discussions and debates, without noticeable strain or prolonged searching for expressions.",
          indicators: "Smooth turn-taking in debates, effective use of concession ('While it is true that...'), natural pacing."
        },
        {
          num: "05",
          badge: "Confidence",
          title: "Communicative Confidence & Autonomy",
          desc: "Interact with increased self-assurance in both routine and unfamiliar professional situations. Students will develop the confidence to initiate conversations, ask clarifying questions, justify decisions, and resolve communication breakdowns independently.",
          indicators: "Proactive contributions in class, resilient handling of impromptu questions, communicative poise."
        },
        {
          num: "06",
          badge: "TOEIC Strategy",
          title: "TOEIC Test Strategy & Performance Progression",
          desc: "Master essential test-taking strategies for the TOEIC Listening and Reading test, analyzing workplace dialogues, graphical data, and business documents under timed conditions to reach and exceed the target score progression toward the graduation benchmark.",
          indicators: "Skimming and scanning business texts, predicting listening answers, error elimination techniques."
        },
        {
          num: "07",
          badge: "Grammar & Accuracy",
          title: "Grammatical Accuracy & Structural Control",
          desc: "Apply key grammatical structures (modals of deduction, passive voice in technical descriptions, conditionals, relative clauses, and cohesive linkers) with sufficient control to communicate complex ideas clearly with minimal interference.",
          indicators: "Self-correction of verb tenses, accurate prepositional use, appropriate cautious language in professional claims."
        }
      ];

      const agObjectivesFr = [
        {
          num: "01",
          badge: "Contrôle Continu",
          title: "Contrôle continu et apprentissage autonome",
          desc: "Participer activement aux activités de communication hebdomadaires, aux mises en situation et au suivi réflexif du portfolio d'apprentissage. Exploiter les retours formatifs des enseignants et des pairs pour identifier ses axes d'amélioration et mesurer sa progression tout au long du semestre 1.",
          indicators: "Participation orale active, collaboration entre pairs, tenue rigoureuse du portfolio formatif."
        },
        {
          num: "02",
          badge: "Développement Professionnel",
          title: "Développement professionnel et prise de parole en public",
          desc: "Concevoir et présenter des exposés oraux structurés et convaincants sur des thématiques professionnelles et sociétales (itinéraires éco-responsables, résilience climatique, audit éthique de l'IA), en mobilisant les techniques de présentation et un registre d'anglais professionnel adapté.",
          indicators: "Diaporamas synthétiques, connecteurs de discours formels, contact visuel et aisance scénique."
        },
        {
          num: "03",
          badge: "Enrichissement du Vocabulaire",
          title: "Acquisition du vocabulaire et précision terminologique",
          desc: "Comprendre et réutiliser avec précision un vaste répertoire de vocabulaire de niveau B2 (général, technique et académique) couvrant l'évolution des transports, la mobilité durable, la transition écologique, l'éthique technologique et la démarche DD&RS.",
          indicators: "Réutilisation active du lexique de cours, dérivations lexicales, collocations professionnelles exactes."
        },
        {
          num: "04",
          badge: "Aisance Orale",
          title: "Aisance orale et argumentation spontanée",
          desc: "Exprimer des opinions nuancées, structurer une argumentation équilibrée et défendre une position avec fluidité et spontanéité lors d'échanges de groupe ou de débats, sans recherche marquée de vocabulaire ni hésitation prolongée.",
          indicators: "Prise de parole spontanée, gestion des concessions ('While it is true that...'), débit régulier."
        },
        {
          num: "05",
          badge: "Confiance & Autonomie",
          title: "Confiance en communication et autonomie",
          desc: "Interagir avec assurance dans des situations professionnelles courantes ou imprévues. Développer la confiance nécessaire pour initier un dialogue, demander des éclaircissements, justifier un choix et surmonter les blocages linguistiques avec autonomie.",
          indicators: "Initiative dans les prises de parole, réactivité face aux questions imprévues, aisance relationnelle."
        },
        {
          num: "06",
          badge: "Préparation TOEIC",
          title: "Méthodologie TOEIC et progression ciblée",
          desc: "Maîtriser les méthodologies et stratégies spécifiques des épreuves de compréhension orale et écrite du TOEIC (Listening & Reading), en traitant des documents professionnels en temps limité afin d'atteindre et dépasser les objectifs de score requis pour le diplôme.",
          indicators: "Lecture rapide (skimming/scanning), anticipation auditive, élimination des distracteurs."
        },
        {
          num: "07",
          badge: "Précision Grammaticale",
          title: "Précision grammaticale et maîtrise structurale",
          desc: "Mobiliser les structures grammaticales clés (modaux de déduction, voix passive technique, conditionnels, propositions relatives, marqueurs de cohérence) avec un degré de maîtrise suffisant pour exprimer des concepts complexes avec clarté.",
          indicators: "Autocorrection des temps verbaux, usage précis des prépositions, formulation prudente (cautious language)."
        }
      ];

      const aasObjectivesEn = [
        {
          num: "01",
          badge: "Aeronautical Vocabulary",
          title: "Aeronautical Technical Terminology",
          desc: "Accurately recognize, define, and employ standardized aviation vocabulary across aerodromes, runway designators, ground handling turnaround workflows, airframe anatomy, flight control axes, aerodynamics, meteorology, and safety/security systems.",
          indicators: "Precise naming of aircraft components, apron ground equipment, runway markings, and weather phenomena."
        },
        {
          num: "02",
          badge: "Continuous Assessment",
          title: "Continuous Assessment & Formative Evaluations",
          desc: "Demonstrate steady linguistic and technical progression through weekly operational case study analyses and three 30-minute oral formative evaluations (FE1 Airports, FE2 Aircraft/Airlines, FE3 Aviation Current Events Press Briefings).",
          indicators: "Collaborative pair presentations, adherence to evaluation rubrics, active engagement in Q&A rounds."
        },
        {
          num: "03",
          badge: "Aviation Culture",
          title: "General Aviation Culture & Operational Awareness",
          desc: "Demonstrate a broad understanding of the commercial aviation ecosystem, describing the roles of key stakeholders (airports, airlines, ground operations, and air traffic services), the main stages of commercial flight operations, and the fundamental importance of safety culture and environmental challenges in modern aviation.",
          indicators: "Accurate overview of airport and airline operations, clear description of the passenger and flight journey, active discussion of contemporary aviation challenges."
        },
        {
          num: "04",
          badge: "Technical Fluency",
          title: "Spoken Fluency & Technical Briefings",
          desc: "Deliver structured technical briefings, exterior pre-flight walkaround defect reports, and incident analyses smoothly and concisely, using accurate cause-and-effect connectors and technical linking words.",
          indicators: "Clear chronological sequencing, precise technical explanations, confident delivery without reading scripts."
        },
        {
          num: "05",
          badge: "Operational Confidence",
          title: "Communicative Confidence & Operational Problem-Solving",
          desc: "Communicate with increased composure and confidence in both routine and unexpected operational aviation situations. Students will develop the ability to explain delays, describe technical anomalies or operational disruptions, ask clarifying questions, check instructions, and resolve communication breakdowns smoothly.",
          indicators: "Proactive requests for clarification or confirmation, calm and clear reporting of unexpected situations or delays, effective interaction during group problem-solving exercises."
        },
        {
          num: "06",
          badge: "ICAO Standards",
          title: "ICAO Language Proficiency Dimensions (Level 4/5)",
          desc: "Consolidate communicative competencies directly aligned with the six ICAO rating dimensions: Pronunciation (readily intelligible), Structure (controlled basic and complex patterns), Vocabulary (varied and idiomatic), Fluency (natural tempo), Comprehension (accurate across all topics), and Interactions (immediate and appropriate responses).",
          indicators: "Operational intelligibility, prompt resolution of ambiguities, compliance with ICAO Doc 9835 criteria."
        }
      ];

      const aasObjectivesFr = [
        {
          num: "01",
          badge: "Lexique Aéronautique",
          title: "Terminologie technique aéronautique",
          desc: "Comprendre, définir et réutiliser avec rigueur le vocabulaire aéronautique standard relatif aux aérodromes, aux pistes, à l'assistance en escale, aux systèmes cellule, aux gouvernes de vol, à l'aérodynamique, à la météo et aux dispositifs de sécurité et de sûreté.",
          indicators: "Désignation exacte des éléments d'aéronef, des équipements de piste, du balisage et des aléas météo."
        },
        {
          num: "02",
          badge: "Contrôle Continu",
          title: "Contrôle continu et évaluations formatives",
          desc: "Valider une progression linguistique et technique régulière grâce aux études de cas hebdomadaires et à trois évaluations formatives orales de 30 minutes (EF1 Aéroports, EF2 Aéronefs/Compagnies, EF3 Conférence de presse d'actualité aéronautique).",
          indicators: "Présentations orales en binôme, respect des critères d'évaluation, participation active aux phases de questions."
        },
        {
          num: "03",
          badge: "Culture Aéronautique",
          title: "Culture aéronautique générale et environnement opérationnel",
          desc: "Comprendre et expliquer le fonctionnement global du secteur aéronautique : les rôles des principaux acteurs (aéroports, compagnies aériennes, assistance en escale, services de la navigation aérienne), les grandes étapes d'un vol commercial, ainsi que les principes fondamentaux de la culture de sécurité et des enjeux environnementaux de l'aviation moderne.",
          indicators: "Présentation claire des acteurs de l'écosystème aérien, description fluide du parcours passager et des opérations de vol, participation active aux débats sur les enjeux aéronautiques contemporains."
        },
        {
          num: "04",
          badge: "Fluidité Technique",
          title: "Aisance orale et synthèses techniques",
          desc: "Concevoir et présenter des exposés techniques, des signalements d'anomalies lors de la visite pré-vol et des retours d'expérience avec fluidité et concision, en maîtrisant les relations logiques de cause à effet et les connecteurs techniques.",
          indicators: "Chronologie claire des événements, explications techniques précises, restitution orale sans lecture de notes."
        },
        {
          num: "05",
          badge: "Confiance Opérationnelle",
          title: "Confiance en communication et résolution d'imprévus",
          desc: "Communiquer avec aisance et assurance lors d'échanges techniques et de situations opérationnelles courantes ou imprévues. Développer la capacité à décrire une anomalie, expliquer un retard, demander des éclaircissements, vérifier une information et surmonter les blocages linguistiques avec calme et clarté.",
          indicators: "Initiative pour demander des clarifications ou reformuler, explication sereine d'aléas ou de retards, collaboration efficace lors des résolutions de cas en groupe."
        },
        {
          num: "06",
          badge: "Standards OACI",
          title: "Critères de compétence linguistique OACI (Niveau 4/5)",
          desc: "Développer et consolider les compétences linguistiques opérationnelles selon les six critères de l'OACI : Prononciation (parfaitement intelligible), Structure (maîtrise des formes simples et complexes), Vocabulaire (étendu et approprié), Aisance (débit naturel), Compréhension (précise sur tous les sujets) et Interactions (réponses immédiates et pertinentes).",
          indicators: "Intelligibilité internationale, clarification immédiate des doutes, conformité aux exigences du Doc 9835 OACI."
        }
      ];

      const objectives = isAas 
        ? (isFr ? aasObjectivesFr : aasObjectivesEn)
        : (isFr ? agObjectivesFr : agObjectivesEn);

      const leadSentence = isFr 
        ? "À la fin du semestre 1, les étudiants seront capables de :"
        : "By the end of Semester 1, students will be able to:";

      const courseCode = isAas ? "LV121E • Technical English" : "LV101E • General English";
      const targetBenchmark = isAas 
        ? (isFr ? "Niveau B2 CECRL • Standard Opérationnel OACI Niveau 4/5" : "CEFR B2 Level • ICAO Operational Level 4/5 Benchmark")
        : (isFr ? "Niveau B2 CECRL • Utilisateur Indépendant Opérationnel" : "CEFR B2 Level • Independent Operational Proficiency");

      const switchBtnGuide = `<button type="button" onclick="switchModalTab('student_guide')" class="px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer text-slate-600 hover:text-slate-900">📘 Student Guide</button>`;
      const switchBtnEn = `<button type="button" onclick="switchModalTab('sem_obj_en')" class="px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${!isFr ? 'bg-white shadow-xs text-slate-900 border border-slate-300' : 'text-slate-500 hover:text-slate-800'}">🇬🇧 English</button>`;
      const switchBtnFr = `<button type="button" onclick="switchModalTab('sem_obj_fr')" class="px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${isFr ? 'bg-white shadow-xs text-slate-900 border border-slate-300' : 'text-slate-500 hover:text-slate-800'}">🇫🇷 Français</button>`;

      bodyEl.innerHTML = `
        <div class="space-y-5">
          <!-- Top Course Header & Language Switcher Banner -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs" style="background-color: ${theme.primary};">
                <span class="text-xl">🎯</span>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs" style="background-color: ${theme.accent};">${isAas ? 'AAS' : 'AG'}</span>
                  <h3 class="text-sm sm:text-base font-extrabold text-slate-900">${courseCode}</h3>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">${targetBenchmark}</p>
              </div>
            </div>

            <!-- In-Drawer Quick Language Toggle -->
            <div class="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-inner self-stretch sm:self-auto justify-center gap-1">
              ${switchBtnGuide}
              ${switchBtnEn}
              ${switchBtnFr}
            </div>
          </div>

          <!-- Lead Statement Box -->
          <div class="p-4 rounded-xl border border-blue-200/80 bg-blue-50/70 shadow-2xs flex items-start gap-3">
            <span class="text-xl shrink-0 mt-0.5">📌</span>
            <div>
              <h4 class="text-xs sm:text-sm font-extrabold text-blue-950">${leadSentence}</h4>
              <p class="text-[11.5px] sm:text-xs text-blue-900/90 leading-relaxed mt-1">
                ${isFr 
                  ? "Ces objectifs constituent le socle de compétences évalué en contrôle continu (50%) et lors des évaluations formatives (50%). Ils sont conçus pour garantir une compréhension transparente tant par les étudiants que par l'équipe pédagogique."
                  : "These core competencies define the learning trajectory evaluated through continuous assessment (50%) and formative evaluations (50%). They ensure complete transparent alignment between students, tutors, and external benchmarks."}
              </p>
            </div>
          </div>

          <!-- Structured Objectives Cards Grid -->
          <div class="space-y-3">
            ${objectives.map(item => `
              <div class="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-2">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span class="w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-[11px] text-white shrink-0 shadow-2xs" style="background-color: ${theme.primary};">${item.num}</span>
                    <h4 class="text-xs sm:text-sm font-bold text-slate-900 truncate">${item.title}</h4>
                  </div>
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 shrink-0">${item.badge}</span>
                </div>
                
                <p class="text-xs sm:text-[12.5px] text-slate-700 leading-relaxed font-normal pl-8.5">${item.desc}</p>
                
                <div class="ml-8.5 mt-1 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70 flex items-start gap-2 text-[11px] text-slate-600">
                  <span class="font-mono font-bold uppercase text-[9.5px] px-1 py-0.5 rounded bg-slate-200 text-slate-700 shrink-0 mt-0.5">${isFr ? 'Indicateurs' : 'Evidence'}</span>
                  <span class="leading-relaxed">${item.indicators}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Continuous Assessment & Evaluation Framework Callout -->
          <div class="p-4 rounded-xl bg-slate-100 border border-slate-300/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div class="space-y-1">
              <strong class="text-slate-900 block font-bold">${isFr ? 'Structure d\'Évaluation & Pondération' : 'Evaluation Weighting & Grade Architecture'}</strong>
              <p class="text-[11px] text-slate-500">${isFr ? 'Contrôle Continu (50%) : Participation, portfolio formatif, implication hebdomadaire • Évaluations Formatives (50%) : EF1, EF2, EF3.' : 'Continuous Assessment (50%): Weekly oral tasks, formative portfolio, active engagement • Formative Evaluations (50%): FE1, FE2, FE3 oral rotas.'}</p>
            </div>
            <span class="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 shrink-0">B2 Benchmark</span>
          </div>
        </div>
      `;
    }

    function renderAdminPresentationTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      let initialLang = 'en';
      try {
        const saved = localStorage.getItem('gsea_presentation_lang');
        if (saved === 'fr' || saved === 'en') initialLang = saved;
      } catch (e) {}

      bodyEl.innerHTML = `
        <style>
          .presentation-bilingual-container:not(.lang-fr) .lang-fr { display: none !important; }
          .presentation-bilingual-container.lang-fr .lang-en { display: none !important; }
        </style>
        <div id="presentation-hub-content" class="presentation-bilingual-container space-y-6 ${initialLang === 'fr' ? 'lang-fr' : ''}">
          <!-- Hero Overview Card -->
          <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-700">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-orange-300 bg-orange-500/20 border border-orange-400/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="lang-en">Faculty &amp; Colleague Executive Brief • Phil PARRIS (LH/LAN)</span>
                <span class="lang-fr">Synthèse Pédagogique &amp; Présentation Collègues • Phil PARRIS (LH/LAN)</span>
              </span>
              <div class="flex items-center gap-2">
                <!-- Language Switcher Pill -->
                <div class="flex items-center gap-1 bg-slate-800/90 p-0.5 rounded-lg border border-slate-600 select-none text-[11px] font-bold">
                  <button id="btn-drawer-lang-en" onclick="setDrawerPresentationLang('en')" class="px-2 py-0.5 rounded transition-all cursor-pointer ${initialLang === 'fr' ? 'text-slate-300 hover:text-white' : 'bg-orange-600 text-white shadow-xs font-bold'}">EN</button>
                  <button id="btn-drawer-lang-fr" onclick="setDrawerPresentationLang('fr')" class="px-2 py-0.5 rounded transition-all cursor-pointer ${initialLang === 'fr' ? 'bg-orange-600 text-white shadow-xs font-bold' : 'text-slate-300 hover:text-white'}">FR</button>
                </div>
                <a href="presentation.html" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-md transition-all cursor-pointer">
                  <span class="lang-en">Open Fullscreen Presentation Deck</span>
                  <span class="lang-fr">Diaporama Plein Écran</span>
                  <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
            <h3 class="text-base sm:text-xl font-black text-white tracking-tight">
              <span class="lang-en">GSEA English Programme 2026–2027 Overhaul (Refonte)</span>
              <span class="lang-fr">Refonte du Programme d'Anglais GSEA 2026–2027</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
              <span class="lang-en">Presented by <strong>Phil PARRIS</strong> — Professeur Référent GSEA, Département LH / LAN. A comprehensive pedagogical modernisation for future civil aviation safety technicians (TSEEAC). Built on modern web standards with zero cloud dependencies, it prioritizes spoken operational confidence, continuous oral evaluation, and student data protection within an eco-designed &lt; 7 MB package. Semester 1 serves as our validated foundation, with Semesters 2, 3, and 4 updated progressively throughout the academic year.</span>
              <span class="lang-fr">Présenté par <strong>Phil PARRIS</strong> — Professeur Référent GSEA, Département LH / LAN. Une modernisation pédagogique globale pour les futurs techniciens de l'aviation civile (TSEEAC). Fondé sur des standards web ouverts sans dépendance au cloud, il privilégie l'aisance orale opérationnelle, l'évaluation formative continue et la protection des données dans un format éco-conçu de moins de 7 Mo. Le Semestre 1 constitue notre socle validé, les Semestres 2, 3 et 4 étant enrichis progressivement tout au long de l'année.</span>
            </p>

            <!-- Metrics Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-700/80 text-center">
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span class="block text-base sm:text-lg font-black text-orange-400">
                  <span class="lang-en">68 hrs</span>
                  <span class="lang-fr">68 h</span>
                </span>
                <span class="text-[10px] text-slate-300 font-medium">
                  <span class="lang-en">Official Timetable</span>
                  <span class="lang-fr">Volume Horaire Officiel</span>
                </span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span class="block text-base sm:text-lg font-black text-emerald-400">
                  <span class="lang-en">~2,000</span>
                  <span class="lang-fr">~2 000</span>
                </span>
                <span class="text-[10px] text-slate-300 font-medium">
                  <span class="lang-en">Pages Paper Saved</span>
                  <span class="lang-fr">Feuilles de Papier Évitées</span>
                </span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span class="block text-base sm:text-lg font-black text-teal-400">
                  <span class="lang-en">&lt; 7 MB</span>
                  <span class="lang-fr">&lt; 7 Mo</span>
                </span>
                <span class="text-[10px] text-slate-300 font-medium">
                  <span class="lang-en">Self-Contained SCORM</span>
                  <span class="lang-fr">Module SCORM Autonome</span>
                </span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span class="block text-base sm:text-lg font-black text-purple-400">4</span>
                <span class="text-[10px] text-slate-300 font-medium">
                  <span class="lang-en">Formative Evaluations</span>
                  <span class="lang-fr">Évaluations Formatives</span>
                </span>
              </div>
            </div>
          </div>

          <!-- 4 Summary Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2.5">
              <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center">1</span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">
                  <span class="lang-en">Curriculum Dual-Track &amp; 120-Min Lesson Flow</span>
                  <span class="lang-fr">Double Cursus Pédagogique &amp; Déroulé des Séances (120 min)</span>
                </h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                <span class="lang-en">Unifies <strong>General English (AG • LV101E)</strong> and <strong>Technical English (AT • LV121E)</strong>. All sessions follow a predictable 4-phase Task-Based rhythm (News Warm-Up ➔ Language Focus ➔ Live Collaborative Simulation ➔ Pronunciation Wrap-Up), focusing strictly on spoken B2 fluency and de-escalation rather than theoretical engineering mechanics.</span>
                <span class="lang-fr">Harmonise <strong>l'Anglais Général (AG • LV101E)</strong> et <strong>l'Anglais Technique (AT • LV121E)</strong>. Chaque séance suit une structure progressive en 4 étapes (Point Actualité ➔ Apports Linguistiques ➔ Simulation Orale Interactive ➔ Bilan Phonétique), axée sur la fluidité orale B2 et les échanges professionnels, sans jargon théorique.</span>
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2.5">
              <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center">2</span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">
                  <span class="lang-en">Continuous Assessment &amp; Portfolios</span>
                  <span class="lang-fr">Contrôle Continu &amp; Portfolios Étudiants</span>
                </h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                <span class="lang-en">Replaces written exams with 3 continuous oral formative evaluations (FE1, FE2, FE3) in 30-minute rotating pairs and trios (4 slots = 100% capacity). Rubrics are 100% transparent. In parallel, students maintain digital portfolios logging key technical vocabulary, operations reviews, and personal communication goals.</span>
                <span class="lang-fr">Remplace les examens écrits par 3 évaluations formatives orales continues (EF1, EF2, EF3) en créneaux de 30 minutes avec binômes et trinômes tournants (4 créneaux = 100 % de la promotion). Les grilles sont transparentes. En parallèle, les étudiants tiennent un portfolio numérique consignant le vocabulaire technique, les bilans de séance et leurs objectifs de communication.</span>
              </p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2.5">
              <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center">3</span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">
                  <span class="lang-en">Moodle SCORM &amp; GDPR Data Protection</span>
                  <span class="lang-fr">Intégration Moodle SCORM &amp; Conformité RGPD</span>
                </h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                <span class="lang-en">Certified SCORM 1.2 package tracks progress and gradebook scores automatically with zero external CDNs. Solves student privacy (GDPR) via a dual-layer architecture: Git uses anonymous IDs (<code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">GRPA001</code>–<code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">GRPA010</code>), while real names live locally and are injected only on packaging for Moodle.</span>
                <span class="lang-fr">Module SCORM 1.2 certifié assurant la remontée automatique de progression et des notes sans aucun appel réseau externe. La confidentialité des données (RGPD) est garantie par une double architecture : le dépôt Git utilise des identifiants anonymes (<code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">GRPA001</code>–<code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">GRPA010</code>), les noms réels étant conservés localement et injectés uniquement lors de la génération du zip Moodle.</span>
              </p>
            </div>

            <!-- Card 4 -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2.5">
              <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center">4</span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800">
                  <span class="lang-en">DDRS Paper Savings &amp; Digital Sobriety</span>
                  <span class="lang-fr">Économies de Papier DD&amp;RS &amp; Sobriété Numérique</span>
                </h4>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                <span class="lang-en">Eliminates 1,700–2,200 printed pages of single-use worksheets per semester, directly supporting ENAC's DDRS sustainability commitments. Digital sobriety is engineered through an ultra-compact 6.95 MB bundle, native browser audio, and zero recurring server emissions.</span>
                <span class="lang-fr">Élimine 1 700 à 2 200 pages de photocopies jetables par semestre, en phase directe avec les engagements éco-responsables DD&amp;RS de l'ENAC. La sobriété numérique repose sur un livrable ultra-compact de moins de 7 Mo, de l'audio HTML5 natif et une empreinte serveur quasi-nulle.</span>
              </p>
            </div>

            <!-- Card 5 -->
            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2.5 col-span-1 md:col-span-2">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center">5</span>
                  <h4 class="text-xs sm:text-sm font-bold text-slate-800">
                    <span class="lang-en">Creation Workflow, AI Co-Design &amp; Multi-Semester Roadmap</span>
                    <span class="lang-fr">Démarche de Conception, Appui de l'IA &amp; Déploiement Multi-Semestres</span>
                  </h4>
                </div>
                <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  <span class="lang-en">Semesters 1, 2, 3 &amp; 4</span>
                  <span class="lang-fr">Semestres 1, 2, 3 &amp; 4</span>
                </span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
                <div>
                  <strong class="text-slate-800 block mb-1">
                    <span class="lang-en">Creation Workflow &amp; Iterative Discovery:</span>
                    <span class="lang-fr">Processus de Création &amp; Choix Techniques :</span>
                  </strong>
                  <span class="lang-en">Started from a hand-drawn paper sketch of the student cockpit, eliminating Moodle scroll fatigue. After exploring display options, landed on SCORM 1.2 / Single-File Display for a self-contained web app inside eCampus. Chose pure HTML5/JS for extreme lightness (&lt; 7 MB) and 10+ year longevity without fragile dependencies.</span>
                  <span class="lang-fr">Conçu initialement à partir d'un croquis papier du portail apprenant afin d'éviter le défilement lourd sur Moodle. Après analyse des modes d'intégration, le choix s'est porté sur le SCORM 1.2 autonome dans eCampus. Les standards HTML5/JS purs garantissent une légèreté extrême (&lt; 7 Mo) et une longévité de plus de 10 ans sans dépendance externe.</span>
                </div>
                <div>
                  <strong class="text-slate-800 block mb-1">
                    <span class="lang-en">AI Co-Design (Gemini) &amp; Multi-Semester Scaling:</span>
                    <span class="lang-fr">Appui de l'IA (Gemini) &amp; Déploiement Multi-Semestres :</span>
                  </strong>
                  <span class="lang-en">Fully leveraged AI coding agents (Gemini) to build the initial codebase and test relentlessly until rock-solid. Informed by Toulouse-Blagnac TSEEAC airport interviews and faculty pacing. These exact standards establish the blueprint for <strong>Semesters 2, 3, and 4</strong> updated progressively throughout 2026/2027.</span>
                  <span class="lang-fr">Développement itératif avec l'appui d'outils d'IA avancés (Gemini) pour bâtir l'architecture et tester rigoureusement chaque brique. Contenus ancrés dans les retours terrain des TSEEAC de Toulouse-Blagnac. Ce même socle technique et pédagogique servira de référence pour les <strong>Semestres 2, 3 et 4</strong> tout au long de l'année 2026/2027.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Downtime Contingency Strategy Box -->
          <div class="bg-orange-50/70 border-2 border-orange-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
                <h4 class="text-xs sm:text-sm font-bold text-orange-950 uppercase tracking-wide">
                  <span class="lang-en">Moodle Downtime Contingency Plan (3-Tier Fallback Strategy)</span>
                  <span class="lang-fr">Plan de Secours en Cas d'Indisponibilité Réseau (3 Niveaux de Repli)</span>
                </h4>
              </div>
              <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-200/70 text-orange-900">
                <span class="lang-en">Zero Lost Teaching Hours</span>
                <span class="lang-fr">Zéro Heure de Cours Perdue</span>
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3 bg-white border border-orange-200 rounded-lg shadow-2xs">
                <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span class="bg-orange-600 text-white text-[10px] px-1.5 py-0.5 rounded font-black">
                    <span class="lang-en">TIER 1</span>
                    <span class="lang-fr">NIVEAU 1</span>
                  </span>
                  <span>
                    <span class="lang-en">Local USB / Folder Launch</span>
                    <span class="lang-fr">Clé USB / Dossier Local</span>
                  </span>
                </div>
                <p class="text-[11px] text-slate-600">
                  <span class="lang-en">Launch <code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">index.html</code> directly from a flash drive or desktop folder on classroom PCs. Runs 100% offline with zero internet.</span>
                  <span class="lang-fr">Lancement direct de <code class="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded">index.html</code> depuis une clé USB ou le bureau d'un poste en salle. Fonctionne 100 % hors-ligne sans connexion internet.</span>
                </p>
              </div>
              <div class="p-3 bg-white border border-orange-200 rounded-lg shadow-2xs">
                <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span class="bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded font-black">
                    <span class="lang-en">TIER 2</span>
                    <span class="lang-fr">NIVEAU 2</span>
                  </span>
                  <span>
                    <span class="lang-en">Emergency Cloud Mirror</span>
                    <span class="lang-fr">Miroir en Ligne de Secours</span>
                  </span>
                </div>
                <p class="text-[11px] text-slate-600">
                  <span class="lang-en">Live anonymous mirror at <span class="font-mono text-[10px] text-blue-700 font-bold break-all">powerforcemotiondrive-pixel.github.io/GSEA_semester_1/</span> accessible on student phones or tablets via board link.</span>
                  <span class="lang-fr">Miroir en ligne anonyme accessible en quelques secondes sur <span class="font-mono text-[10px] text-blue-700 font-bold break-all">powerforcemotiondrive-pixel.github.io/GSEA_semester_1/</span> depuis les téléphones ou tablettes des étudiants.</span>
                </p>
              </div>
              <div class="p-3 bg-white border border-orange-200 rounded-lg shadow-2xs">
                <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span class="bg-slate-600 text-white text-[10px] px-1.5 py-0.5 rounded font-black">
                    <span class="lang-en">TIER 3</span>
                    <span class="lang-fr">NIVEAU 3</span>
                  </span>
                  <span>
                    <span class="lang-en">1-Click Printable Handouts</span>
                    <span class="lang-fr">Supports Imprimables en 1 Clic</span>
                  </span>
                </div>
                <p class="text-[11px] text-slate-600">
                  <span class="lang-en">Built-in print buttons on every lesson card generate clean paper worksheets or local PDF backups if student laptops run out of battery.</span>
                  <span class="lang-fr">Boutons d'impression intégrés sur chaque fiche de cours générant des fiches de travail claires ou des PDF locaux en cas de panne de batterie d'un ordinateur.</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Full Presentation Link Banner -->
          <div class="p-4 bg-slate-100 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div class="flex items-center gap-2.5">
              <svg class="w-5 h-5 text-orange-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>
                <span class="lang-en">Looking for the complete faculty presentation deck with detailed slide points and print view?</span>
                <span class="lang-fr">Vous souhaitez consulter le diaporama complet pour les collègues avec les points détaillés et le mode document ?</span>
              </span>
            </div>
            <a href="presentation.html" class="inline-flex items-center gap-1.5 font-bold text-white bg-slate-800 hover:bg-slate-900 px-3.5 py-1.5 rounded-lg shadow-xs transition-all cursor-pointer shrink-0">
              <span class="lang-en">Open Complete Presentation Deck →</span>
              <span class="lang-fr">Ouvrir le Diaporama Complet →</span>
            </a>
          </div>
        </div>
      `;
    }

    window.setDrawerPresentationLang = function(lang) {
      const container = document.getElementById('presentation-hub-content');
      const btnEn = document.getElementById('btn-drawer-lang-en');
      const btnFr = document.getElementById('btn-drawer-lang-fr');
      if (!container) return;
      if (lang === 'fr') {
        container.classList.add('lang-fr');
        if (btnFr) btnFr.className = "px-2 py-0.5 rounded transition-all cursor-pointer bg-orange-600 text-white shadow-xs font-bold";
        if (btnEn) btnEn.className = "px-2 py-0.5 rounded transition-all cursor-pointer text-slate-300 hover:text-white";
      } else {
        container.classList.remove('lang-fr');
        if (btnEn) btnEn.className = "px-2 py-0.5 rounded transition-all cursor-pointer bg-orange-600 text-white shadow-xs font-bold";
        if (btnFr) btnFr.className = "px-2 py-0.5 rounded transition-all cursor-pointer text-slate-300 hover:text-white";
      }
      try { localStorage.setItem('gsea_presentation_lang', lang); } catch (e) {}
    };

    
    function renderAdminSyllabusTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      let initialLang = 'en';
      try {
        const saved = localStorage.getItem('gsea_presentation_lang');
        if (saved === 'fr' || saved === 'en') initialLang = saved;
      } catch (e) {}

      bodyEl.innerHTML = `
<style>
      .syllabus-drawer-content:not(.lang-fr) .lang-fr { display: none !important; }
      .syllabus-drawer-content.lang-fr .lang-en { display: none !important; }
      .syllabus-drawer-content:not(.track-at) .track-at-only { display: none !important; }
      .syllabus-drawer-content.track-at .track-ag-only { display: none !important; }
    </style>
    <div id="syllabus-drawer-content" class="syllabus-drawer-content syllabus-bilingual-container space-y-6">
      
      <!-- Top Action & Filter Header Banner -->
      <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs text-2xl bg-slate-900">
            <span>📋</span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-blue-600 shadow-2xs">SYLLABUS</span>
              <h3 class="text-base sm:text-lg font-extrabold text-slate-900">
                <span class="lang-en">Course Syllabus &amp; Curriculum Guide</span>
                <span class="lang-fr">Référentiel de Compétences &amp; Programme Détaillé</span>
              </h3>
            </div>
            <p class="text-xs text-slate-500 mt-0.5">
              <span class="lang-en">Official 17-Session Educational Roadmap • Continuous Assessment, Learning Portfolios &amp; Go / No-Go Validation</span>
              <span class="lang-fr">Programme officiel en 17 séances • Contrôle continu, Portfolio d'apprentissage &amp; Validation Go / No-Go</span>
            </p>
          </div>
        </div>

        <!-- Controls: Track Switcher + Lang Switcher + Print Button -->
        <div class="flex flex-wrap items-center gap-2 self-stretch md:self-auto justify-end">
          <!-- Track Switcher -->
          <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
            <button id="btn-drawer-syl-ag" onclick="setDrawerSyllabusTrack('ag')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs">
              🗣️ General English (AG)
            </button>
            <button id="btn-drawer-syl-at" onclick="setDrawerSyllabusTrack('at')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900">
              ✈️ Technical English (AT)
            </button>
          </div>

          <!-- Language Switcher -->
          <div class="flex items-center gap-0.5 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
            <button id="btn-drawer-syl-en" onclick="setDrawerSyllabusLang('en')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer bg-blue-600 text-white shadow-xs">EN</button>
            <button id="btn-drawer-syl-fr" onclick="setDrawerSyllabusLang('fr')" class="px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900">FR</button>
          </div>

          <!-- Print / Save PDF Button -->
          <button type="button" onclick="window.print()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-2xs transition-all cursor-pointer">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            <span class="lang-en">Print / PDF</span>
            <span class="lang-fr">Imprimer / PDF</span>
          </button>
        </div>
      </div>

      <!-- Framework & Go / No-Go Overview Card -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 shadow-sm space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/30">
            <span class="lang-en">SEMESTER 1 INSTRUCTIONAL FRAMEWORK</span>
            <span class="lang-fr">CADRE PÉDAGOGIQUE DU SEMESTRE 1</span>
          </span>
          <span class="text-xs font-bold text-slate-300">
            <span class="lang-en">Continuous Assessment (50%) + Formative Evaluations (50%) • Go / No-Go Decision</span>
            <span class="lang-fr">Contrôle Continu (50%) + Évaluations Formatives (50%) • Décision Go / No-Go</span>
          </span>
        </div>

        <p class="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
          <span class="lang-en">
            Semester 1 focuses on developing practical, professional, and operational linguistic competencies to prepare students for their future responsibilities in civil aviation engineering, aerodrome management, and air transport operations. Rather than passive theoretical instruction, this course is communicative, interactive, and task-based. Students build active spoken fluency, listening precision, professional presentation skills, and grammatical accuracy through weekly spoken discussions, collaborative simulations, and self-evaluation logs in their digital Learning Portfolio. Progress is assessed through continuous assessment and three modular Formative Evaluations (FE1, FE2, FE3). At the end of the semester, students' overall performance, portfolio completion, and oral competence culminate in a formal <strong>Go / No-Go</strong> validation decision for progression.
          </span>
          <span class="lang-fr">
            Le semestre 1 a pour objectif de développer et de consolider les compétences linguistiques, professionnelles et opérationnelles indispensables aux futurs cadres, ingénieurs et techniciens de l'aviation civile (GSEA / ENAC). Privilégiant une approche communicative et actionnelle, les cours mettent l'accent sur la fluidité orale, l'aisance interactive, la précision technique et la justesse grammaticale à travers des études de cas hebdomadaires, des simulations professionnelles et la tenue d'un portfolio numérique d'apprentissage. L'évaluation repose sur un contrôle continu régulier et trois évaluations formatives orales (EF1, EF2, EF3). À l'issue du semestre, l'ensemble du travail de l'étudiant, son implication en classe et la validation de son portfolio déterminent la décision officielle <strong>GO / NO GO</strong> validant le passage au semestre suivant.
          </span>
        </p>

        <!-- Track Badge Banner -->
        <div class="pt-2 flex flex-wrap items-center gap-2 text-xs">
          <span class="track-ag-only px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 font-bold">
            <span class="lang-en">🗣️ LV101E • General English • CEFR B2 Level Benchmark</span>
            <span class="lang-fr">🗣️ LV101E • Anglais Général • Standard Niveau B2 CECRL</span>
          </span>
          <span class="track-at-only px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 font-bold">
            <span class="lang-en">✈️ LV121E • Technical English • ICAO Operational Level 4/5 Benchmark</span>
            <span class="lang-fr">✈️ LV121E • Anglais Technique • Standard OACI Niveau 4/5</span>
          </span>
        </div>
      </div>

      <!-- AG Sessions Container (Sessions 1 to 17) -->
      <div class="track-ag-only space-y-6">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
          <h3 class="text-sm font-extrabold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <span>🗣️</span>
            <span class="lang-en">General English (AG • LV101E) — Full 17-Session Programme</span>
            <span class="lang-fr">Anglais Général (AG • LV101E) — Programme Intégral en 17 Séances</span>
          </h3>
          <span class="text-xs font-mono font-bold text-slate-500">17 Sessions</span>
        </div>

        <!-- Module 1 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 1: Travel, Transport &amp; Society (Sessions 01–05)</span>
              <span class="lang-fr">Module 1 : Voyages, Transports &amp; Société (Séances 01–05)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            01
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Introduction & Travel Anecdotes</span>
            <span class="lang-fr">Introduction & Récits de Voyages</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Diagnostic session and icebreaker. Students introduce themselves, share authentic travel anecdotes, and analyze passenger disruption scenarios.</span>
        <span class="lang-fr">Séance de diagnostic et d'introduction. Présentation des étudiants, récits d'anecdotes de voyage et analyse d'incidents passagers.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Paired speed-networking interview, "Two Truths and a Travel Mishap" storytelling circle, passenger rights de-escalation role-play.</span>
          <span class="lang-fr">Entretiens croisés en binôme, cercle de narration "Deux vérités et un imprévu", jeu de rôle de gestion de réclamation client.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Travel idioms (get off to a flying start, off the beaten track, hit the road, word of mouth), collocations (book in advance, clear customs, miss a connection).</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Narrative past tenses contrast (Past Simple, Past Continuous, Past Perfect). Uncountable nouns check (luggage, accommodation).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Regular verb past tense endings (-ed /t/, /d/, /ɪd/), word stress in travel compounds.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            02
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Evolution of Transport & Sustainable Mobility</span>
            <span class="lang-fr">Évolution des Transports & Mobilités Durables</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Examination of multimodal transport systems (rail vs. air vs. road) across a 600 km corridor. Introduction to sustainable mobility (DDRS).</span>
        <span class="lang-fr">Étude des systèmes de transport multimodaux (ferroviaire, aérien, routier) sur 600 km. Introduction aux mobilités durables (DDRS).</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Multi-modal route optimization debate, business travel carbon-budgeting challenge, timed TOEIC reading practice (Part 7 transport schedules).</span>
          <span class="lang-fr">Débat d'optimisation multimodale, atelier d'éco-budget carbone professionnel, entraînement chronométré TOEIC Reading (Partie 7).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Modal shift, carbon footprint, high-speed rail corridor, intermodality, transit-oriented development.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Expressing cause and effect (owing to, as a result of, lead to), double comparatives (the faster the train, the lower the emissions).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Stress shifts in word families ('transport [noun] vs. trans'port [verb]; 'mobility / 'infrastructure).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            03
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Overtourism & Destination Management</span>
            <span class="lang-fr">Surtourisme & Gestion des Destinations</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Analysis of the economic benefits versus social and ecological damage of mass tourism in historic cities and sensitive natural sites.</span>
        <span class="lang-fr">Analyse des retombées économiques face aux dégradations sociales et environnementales du tourisme de masse.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Stakeholder role-play debate (local residents, municipal authorities, cruise ship operators, hoteliers), drafting city regulation bylaws.</span>
          <span class="lang-fr">Jeu de rôle multipartite (résidents, mairie, croisiéristes, hôteliers), rédaction d'un arrêté municipal de régulation.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Carrying capacity, visitor quotas, tourist levy/tax, resident displacement, season peak, UNESCO preservation.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Causative verbs of authority (have/make/get something done), concessive linkers (despite, in spite of, whereas).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Syllable stress and vowel reductions in long abstract nouns (de-stur-i-za-'tion, re-gu-'la-tion).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            04
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Ecotourism, Greenwashing & Destination Pitch</span>
            <span class="lang-fr">Écotourisme, Greenwashing & Pitch de Destination</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE1
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Distinguishing authentic community-led ecotourism from commercial greenwashing. Students pitch a sustainable travel initiative in small groups.</span>
        <span class="lang-fr">Distinguer l'écotourisme authentique du greenwashing commercial. Présentation en équipe d'un projet de voyage éco-responsable.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">"Green or Greenwashed?" corporate audit, collaborative micro-project design sprint, mock peer evaluations with timing constraints.</span>
          <span class="lang-fr">Audit critique "Green or Greenwashed ?", sprint de conception d'un micro-projet, répétitions orales chronométrées.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Carbon offsetting, wildlife sanctuary, low-impact hospitality, local empowerment, greenwashing claims.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Mixed conditionals (If the reserve had invested in solar shuttles earlier, it would attract...), clauses of purpose (so that, in order to).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Intonation in persuasive pitches, emphatic stress on quantitative benefits.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            05
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 1 (FE1) — Oral Tutorials</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 1 (EF1) — Tutorats Oraux</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE1
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral evaluation in pairs. Students present a sustainable travel destination profile with visual slides, followed by teacher Q&A and a portfolio check.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Présentation d'un projet d'écotourisme avec diaporama, questions du jury et audit du portfolio.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial roadmap: Setup (2m), Paired Presentation (12m), Teacher Q&A (8m), Portfolio review (4m), Immediate feedback (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Présentation en binôme (12m), Questions du jury (8m), Revue de portfolio (4m), Bilan et conseils (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Active deployment of Module 1 vocabulary log and travel definitions.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Controlled use of narrative past tenses, causatives, mixed conditionals, and formal signpost linkers.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Intelligible pronunciation, natural pacing without reading verbatim notes.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Module 2 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 2: Weather, Environment &amp; Ecological Transition (Sessions 06–10)</span>
              <span class="lang-fr">Module 2 : Météo, Environnement &amp; Transition Écologique (Séances 06–10)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            06
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Extreme Weather & Atmospheric Hazards</span>
            <span class="lang-fr">Météo Extrême & Phénomènes Atmosphériques</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Exploration of extreme meteorological phenomena (heatwaves, flash floods, storms) and their disruption to global transport infrastructure.</span>
        <span class="lang-fr">Étude des phénomènes météorologiques extrêmes (canicules, crues éclairs, tempêtes) et de leurs impacts sur les réseaux de transport.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Emergency weather response simulation, interpreting climate trend infographics, TOEIC Listening practice (Part 4 weather bulletins).</span>
          <span class="lang-fr">Simulation de cellule de crise météo, analyse de graphiques climatiques, entraînement TOEIC Listening (Partie 4).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Torrential downpour, storm surge, heat dome, infrastructure vulnerability, contingency plan.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Passive voice in technical crisis reporting (Power lines were severed; transport links have been suspended), modals of deduction.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Consonant clusters in meteorological terms (draughts, bursts, depths, precipitation).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            07
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Sustainable Cities & Low-Emission Urban Mobility</span>
            <span class="lang-fr">Villes Durables & Mobilités Urbaines Propres</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Architectural and urban planning innovations for climate resilience: the 15-minute city concept, sponge cities, and low-emission zones (LEZ).</span>
        <span class="lang-fr">Innovations d'aménagement pour la résilience climatique : concept de ville du quart d'heure, villes éponges et zones à faibles émissions.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Redesigning an urban transport corridor, comparing European transit models, TOEIC Reading practice (Part 7 urban proposals).</span>
          <span class="lang-fr">Réaménagement d'un corridor urbain, analyse comparée des réseaux européens, entraînement TOEIC Reading (Partie 7).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Permeable pavement, urban heat island, congestion charging, active mobility, mixed-use zoning, district heating.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Quantifiers and determiners (a great deal of, fewer vehicles vs. less pollution), complex noun phrases.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Contrastive sentence stress when comparing comparative urban statistics.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            08
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Building & Supporting Environmental Arguments</span>
            <span class="lang-fr">Construction & Défense d'Arguments Écologiques</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Professional argumentation workshop. Developing structured, evidence-based environmental arguments and handling counter-arguments diplomatically.</span>
        <span class="lang-fr">Atelier d'argumentation professionnelle. Construire des argumentaires écologiques fondés sur des données chiffrées et débattre avec nuance.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">The Great Carbon Tax Debate, rapid-fire argument rebuttal pairs, analyzing argumentative rhetorical strategies in TED-style talks.</span>
          <span class="lang-fr">Débat contradictoire sur la taxe carbone, joutes d'arguments chronométrées, analyse rhétorique d'interventions de type TED.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Counter-argument, regulatory mandate, public pushback, unintended consequence, viable alternative.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Verbs followed by gerunds vs. infinitives (advocate implementing, fail to address), diplomatic concession markers (While I concede that...).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Diplomatic vs. aggressive intonation patterns during intellectual disagreement.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            09
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Biodiversity in Urban Areas & Transport Hubs</span>
            <span class="lang-fr">Biodiversité Urbaine & Pôles de Transport</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE2
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Ecological engineering around airports and transport hubs: wildlife corridors, green roofs, runway bird strike prevention, and preserving living ecosystems.</span>
        <span class="lang-fr">Génie écologique autour des aéroports et plateformes d'échange : corridors biologiques, toitures végétales et prévention du péril animalier.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Airport eco-corridor feasibility study, group rehearsal of the FE2 Climate Resilience Redesign, peer feedback rubric check.</span>
          <span class="lang-fr">Étude de faisabilité d'un corridor écologique aéroportuaire, répétition générale de l'exposé EF2, grille d'évaluation par les pairs.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Native species, ecological corridor, bird strike hazard, wetland restoration, habitat fragmentation.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Complex relative clauses (defining vs. non-defining), dependent prepositions following nouns and adjectives.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Word stress in biological and environmental terminology.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            10
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 2 (FE2) — Climate Resilience Redesign</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 2 (EF2) — Résilience Climatique</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE2
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral tutorial in pairs. Students pitch an urban or transport hub Climate Resilience Redesign project, defend technical choices, and review their portfolio.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Présentation d'un projet de résilience climatique d'un aéroport ou d'une ville, soutenance et audit du portfolio.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial: Welcome (2m), Resilience Pitch (12m), Cross-Examination & Q&A (8m), Portfolio review (4m), Feedback & marks (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Présentation du projet (12m), Questions contradictoires (8m), Contrôle du portfolio (4m), Bilan (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Accurate use of Module 2 environmental engineering and urban climate terminology.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Deployment of complex relative clauses, passive voice in crisis contexts, and gerund/infinitive precision.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Fluency, professional tempo, clear thought groups, and confident audience contact.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Module 3 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 3: Innovation, Society &amp; Emerging Technologies (Sessions 11–15)</span>
              <span class="lang-fr">Module 3 : Innovation, Société &amp; Technologies Émergentes (Séances 11–15)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            11
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Everyday AI & Workplace Automation</span>
            <span class="lang-fr">IA Quotidienne & Automatisation Professionnelle</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Assessing the impact of artificial intelligence, large language models (LLMs), and automation on engineering professions, copyright, and employment.</span>
        <span class="lang-fr">Évaluation de l'impact de l'IA, des modèles génératifs et de l'automatisation sur les métiers d'ingénieurs, le droit d'auteur et l'emploi.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">AI workplace impact audit, evaluating algorithm bias case studies, TOEIC Part 5 & 6 sentence completion practice on tech vocabulary.</span>
          <span class="lang-fr">Audit d'impact de l'IA sur l'emploi, étude de cas sur les biais algorithmiques, exercices TOEIC Parts 5 & 6 sur le lexique technologique.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Predictive analytics, algorithmic bias, automated decision-making, machine learning model, human-in-the-loop.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Passive voice in process descriptions (Data is ingested, processed, and validated), verbs of speculation (tend to, be bound to).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Syllable reduction in tech terms ('algorithm, tech'nology, au'tomaton, au'tonomous).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            12
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Future Mobility & Clean Energy Transport</span>
            <span class="lang-fr">Mobilités du Futur & Énergies Propres</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Emerging transportation paradigms: battery electric vehicles (EVs), hydrogen fuel-cell rail, autonomous urban pods, and urban air mobility (eVTOL).</span>
        <span class="lang-fr">Nouveaux paradigmes de transport : véhicules électriques, trains à hydrogène, navettes autonomes et mobilité aérienne urbaine (eVTOL).</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Technology lifecycle analysis, investment pitch simulation for regional clean transport networks, TOEIC listening practice (Part 3).</span>
          <span class="lang-fr">Analyse du cycle de vie technologique, simulation de comité d'investissement en transport vert, entraînement TOEIC Listening (Partie 3).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Energy density, charging infrastructure, green hydrogen, battery degradation, life-cycle emissions, prototype testing.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Expressing future probability (is projected to become viable by 2035), modifiers of degree (substantially higher, marginal improvement).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Linking sounds in compound technical terms (clean-energy, fuel-cell-powered).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            13
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Technology Ethics & Algorithmic Governance</span>
            <span class="lang-fr">Éthique Technologique & Gouvernance Numérique</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Ethical boundaries of technological innovation: algorithmic surveillance, automated profiling, data harvesting, and public safety vs. personal privacy.</span>
        <span class="lang-fr">Frontières éthiques de l'innovation : surveillance algorithmique, profilage automatisé, collecte de données et respect de la vie privée.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Oxford-style debate on AI regulation, drafting an Ethical Charter for emerging technologies, case study on passenger profiling.</span>
          <span class="lang-fr">Débat parlementaire sur la régulation de l'IA, rédaction d'une charte éthique des technologies, étude de cas sur le profilage.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Data sovereignty, facial recognition ban, chilling effect, regulatory sandbox, accountability framework.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Inversion for formal emphasis (Not only does the algorithm introduce bias, but it also...), concession markers (whereas, albeit).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Pitch variation and sentence stress for rhetorical debate impact.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            14
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Biometrics, Digital Passports & Passenger Journey</span>
            <span class="lang-fr">Biométrie, Passeports Numériques & Parcours Passager</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE3
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">The seamless passenger journey: biometric authentication at gates, digital health credentials, cybersecurity risks, and smart border facilitation.</span>
        <span class="lang-fr">Le parcours passager connecté : authentification biométrique aux portes, passeports numériques, cybersécurité et passage des frontières.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Designing a seamless airport terminal checkpoint, dry run of the FE3 Emerging Technology Presentation, peer rubric evaluation.</span>
          <span class="lang-fr">Conception d'un terminal aéroportuaire sans contact, répétition générale de l'exposé EF3, évaluation croisée sur grille.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Biometric token, facial recognition e-gate, contactless border control, spoofing attack, encrypted credential.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Dependent prepositions and collocations (comply with regulations, susceptible to cyberattacks, prioritize security over convenience).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Natural rhythm and thought groups in formal presentation delivery.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            15
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 3 (FE3) — Emerging Technology Presentation</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 3 (EF3) — Technologies Émergentes</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE3
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral evaluation in pairs. Students deliver a structured presentation on an emerging technology, evaluate societal/environmental impacts, and defend technical choices.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Présentation d'une technologie émergente, analyse d'impact et soutenance face aux questions du jury.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial: Welcome (2m), Technology Pitch (12m), Critical Q&A (8m), Portfolio review (4m), Semester feedback (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Présentation technologique (12m), Questions critiques (8m), Bilan portfolio (4m), Synthèse (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Comprehensive mastery of Module 3 artificial intelligence, clean energy, and biometric vocabulary.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Use of emphatic inversion, complex modal verbs of probability, and technical passive descriptions.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">High intelligibility, persuasive intonation, and spontaneous responses to faculty challenges.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Consolidation & Final FE -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Semester Consolidation &amp; Final Evaluation (Sessions 16–17)</span>
              <span class="lang-fr">Consolidation du Semestre &amp; Évaluation Finale (Séances 16–17)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-blue-300 bg-blue-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            16
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Global Semester Revision, Portfolio Clinic & Oral Workshop</span>
            <span class="lang-fr">Révision Générale, Atelier Portfolio & Préparation Finale</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white">
          Consolidation Workshop
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Comprehensive synthesis of Modules 1, 2, and 3. Students audit their Digital Learning Portfolios, correct persistent spoken grammar traps, and complete intensive fluency drills.</span>
        <span class="lang-fr">Synthèse globale des Modules 1, 2 et 3. Audit complet des portfolios numériques, élimination des pièges grammaticaux oraux et entraînements intensifs à la fluidité.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">3-Team Grand Prix Language Quiz, portfolio peer sign-off clinic, rapid-fire oral simulations of professional meetings.</span>
          <span class="lang-fr">Grand Quiz linguistique inter-équipes, atelier de validation des portfolios, simulations orales rapides d'entretiens professionnels.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Holistic review of all 90+ core General English terms and idioms across Modules 1 to 3.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Eradication of common spoken errors (uncountable nouns, false friends, mixed conditionals, causative structures).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Focus on syllable stress, rhythm, and international intelligibility under timed examination pressure.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-purple-300 bg-purple-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            17
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FINAL SUMMATIVE EVALUATION & GO / NO-GO PROFILE VALIDATION</span>
            <span class="lang-fr">ÉVALUATION SOMMATIVE TERMINALE & VALIDATION GO / NO GO</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-600 text-white">
          Final Validation • Go / No-Go
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Official final oral examination and portfolio validation. Individual or paired interview evaluating communicative fluency, spontaneous interaction, and technical competence, determining the final semester grade and Go / No-Go progression decision.</span>
        <span class="lang-fr">Examen oral terminal officiel et validation définitive du portfolio. Entretien individuel ou en binôme validant l'aisance communicative et attribuant la note finale (/20) ainsi que la décision officielle GO / NO GO.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Final individual/paired oral interview with jury, comprehensive portfolio assessment, faculty deliberation, and progression sign-off.</span>
          <span class="lang-fr">Entretien oral terminal devant jury, évaluation finale du portfolio, délibération de l'équipe enseignante et validation de passage.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Demonstrated B2 CEFR active vocabulary across all societal and mobility domains.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Consolidated mastery of basic and complex structural patterns with consistent self-correction.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Clear, intelligible pronunciation aligned with CEFR B2 independent operational proficiency.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>
      </div>

      <!-- AT Sessions Container (Sessions 1 to 17) -->
      <div class="track-at-only space-y-6">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
          <h3 class="text-sm font-extrabold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <span>✈️</span>
            <span class="lang-en">Technical English (AT • LV121E) — Full 17-Session Programme</span>
            <span class="lang-fr">Anglais Technique (AT • LV121E) — Programme Intégral en 17 Séances</span>
          </h3>
          <span class="text-xs font-mono font-bold text-slate-500">17 Sessions</span>
        </div>

        <!-- Module 1 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 1: Aerodromes, Air Traffic &amp; Surface Operations (Sessions 01–05)</span>
              <span class="lang-fr">Module 1 : Aérodromes, Circulation Aérienne &amp; Opérations de Piste (Séances 01–05)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            01
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Introduction, Aviation Survey & Regulatory Modals</span>
            <span class="lang-fr">Introduction, Panorama Aéronautique & Modaux Réglementaires</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Introduction to the commercial aviation ecosystem. Students examine current aviation headlines, debate airline operating models, and master regulatory modal verbs under ICAO Doc 9835 criteria.</span>
        <span class="lang-fr">Introduction à l'écosystème de l'aviation commerciale. Analyse de l'actualité aéronautique, comparaison des modèles de compagnies et maîtrise des modaux réglementaires OACI.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Aviation current events warm-up, unruly passenger policy debate, customer-service disruption role-play under EU261 regulations, 60-second spoken policy briefing.</span>
          <span class="lang-fr">Tour de table de l'actualité aérienne, débat sur la politique des passagers perturbateurs, jeu de rôle sur les droits EU261, briefing oral de 60 secondes.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Go-around, touchdown zone, apron, landing gear, turnaround, unruly passenger, low-cost carrier (LCC), ancillary revenue.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Regulatory modals of authority (must, must not, is required to, is authorized to, may not, shall).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Syllable stress in aeronautical terms ('apron, 'runway, 'turboprop, 'diverted).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            02
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Passenger Journey & Airfield Surface Movement</span>
            <span class="lang-fr">Parcours Passager & Circulation en Aire de Manœuvre</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Tracing traveler facilitation from landside curb to airside boarding gate. Decoding aerodrome physical movement areas: runway designators, taxiway markings, holding points, and surface signage.</span>
        <span class="lang-fr">Analyse du parcours passager côté ville (landside) au côté piste (airside). Décodage du balisage et de la signalisation d'aérodrome (pistes, taxiways, points d'arrêt).</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Passenger concourse flow diagramming, airfield surface map navigation, unauthorized airside access de-escalation role-play, 60-second magnetic heading briefing.</span>
          <span class="lang-fr">Schématisation du flux en aérogare, navigation sur plan d'aérodrome, gestion d'intrusion côté piste, briefing de 60 secondes sur l'orientation magnétique.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Landside vs. airside, concourse, security checkpoint, holding point, taxiway centerline, runway designator (14L/32R), FOD (Foreign Object Debris).</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Spatial prepositions of point, surface, and movement (at the holding point, on the apron, taxiing via Charlie, lining up on Runway 26).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">NATO phonetic alphabet pronunciation and precision in numerical runway headings (tree, fife, niner).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            03
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Ground Handling, Apron Operations & Turnaround</span>
            <span class="lang-fr">Assistance en Escale & Chronologie du Demi-Tour Avion</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Deep-dive into airside apron operations and the critical turnaround window. Examining Ground Support Equipment (GSE), ramp personnel duties, and sequential milestones.</span>
        <span class="lang-fr">Étude détaillée des opérations en escale sur l'aire de trafic. Découverte des engins de piste (GSE), des missions du personnel et de la chronologie du demi-tour avion.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Identifying airside vehicles from functional diagrams, sequencing turnaround milestones on a Gantt chart, ramp delay negotiation role-play, 60-second shift handover briefing.</span>
          <span class="lang-fr">Identification des véhicules de piste sur schémas, séquençage d'une escale sur diagramme de Gantt, négociation de retard en piste, briefing de relève de 60s.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">GPU (Ground Power Unit), APU (Auxiliary Power Unit), pushback tug, conveyor belt, refueler, Marshaller, TRC (Turnaround Coordinator), chocks.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Time linkers and sequential markers (simultaneously, prior to, upon completion of), expressing cause and effect in ramp delays.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Clear distinction between operational acronyms (GPU vs. APU, AODB, GSE).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            04
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Jobs in Aviation & Institutional Jurisdiction</span>
            <span class="lang-fr">Métiers de l'Aérien & Juridictions Institutionnelles</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE1
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Comprehensive taxonomy of aviation professions across landside, airside, flight ops, and air navigation services. Clarifying the duties of TSEEAC personnel (DGAC) vs. tactical ATC controllers.</span>
        <span class="lang-fr">Panorama complet des métiers de l'aérien. Distinction institutionnelle et opérationnelle des fonctions TSEEAC (DGAC) par rapport aux contrôleurs aériens (ICNA).</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Aviation career matrix classification, inter-role operational shift handover simulation, preparing the FE1 Airport Technical Profile in pairs.</span>
          <span class="lang-fr">Classification matricielle des métiers, simulation de passation de consignes entre services, préparation de l'exposé technique d'aéroport EF1.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">AFISO (Aerodrome Flight Information Service Officer), Ramp Marshaller, Baggage Handler, Safety Inspector, TSEEAC, Dispatcher, Station Manager.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Formulaic formulas of responsibility ("be responsible for + -ing", "be tasked with + noun", "fall under the jurisdiction of").</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Syllable stress in multi-syllabic professional titles (ad-min-is-'tra-tion, in-'spec-tor, co-'or-di-na-tor).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            05
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 1 (FE1) — Technical Airport Profile</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 1 (EF1) — Profil Technique d'Aéroport</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE1
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral evaluation in pairs. Students present a comprehensive technical profile of an international airport, answer spontaneous teacher questions, and present their portfolio.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Présentation technique complète d'un aéroport international, questions du jury et audit du portfolio.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial roadmap: Welcome & setup (2m), Airport Technical Analysis (12m), Technical Q&A (8m), Portfolio review (4m), Immediate feedback (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Présentation technique (12m), Questions techniques (8m), Revue du portfolio (4m), Bilan et notation (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Precise deployment of Module 1 aerodrome, runway, apron, and ground handling technical terminology.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Controlled deployment of spatial prepositions, regulatory modals, and formal cause-and-effect links.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Compliance with ICAO Level 4/5 pronunciation descriptors, avoiding ambiguities in numbers and headings.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Module 2 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 2: Aircraft &amp; Aerodynamics (Sessions 06–10)</span>
              <span class="lang-fr">Module 2 : Aéronefs &amp; Aérodynamique (Séances 06–10)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            06
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Aerodynamics & Fundamental Flight Principles</span>
            <span class="lang-fr">Aérodynamique & Principes Fondamentaux du Vol</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">The physics of atmospheric flight. Explaining the four fundamental forces (Lift, Weight, Thrust, Drag) in equilibrium, airfoil anatomy, Bernoulli's principle, and angle of attack dynamics.</span>
        <span class="lang-fr">La physique du vol atmosphérique. Explication des 4 forces fondamentales (portance, poids, poussée, traînée) en équilibre, profil d'aile, principe de Bernoulli et incidence.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Airflow vector diagramming, pilot-to-engineer aerodynamic flight control briefing, analyzing stall dynamics and aerodynamic recovery procedures.</span>
          <span class="lang-fr">Schématisation vectorielle des écoulements d'air, briefing aérodynamique pilote-ingénieur, analyse du décrochage et des manœuvres de récupération.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Lift, weight/gravity, thrust, drag, airfoil, camber, chord line, angle of attack (AoA), boundary layer, stall, vortex.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Zero and first conditionals in flight physics (If the angle of attack exceeds critical AoA, the wing stalls), cause-and-effect connectors.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Accurate pronunciation of flight physics nouns ('chord, ae-ro-'dy-na-mics, 'drag, e-qui-'li-bri-um).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            07
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Aircraft Anatomy: Structure & Systems</span>
            <span class="lang-fr">Anatomie de l'Aéronef : Structures & Systèmes</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Airframe anatomy, structural primary materials, and onboard technical systems. Identifying the three aircraft axes (pitch, roll, yaw) and their corresponding flight control surfaces.</span>
        <span class="lang-fr">Anatomie de l'avion, matériaux de structure et servitudes de bord. Identification des trois axes de vol (tangage, roulis, lacet) et des gouvernes associées.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Cockpit and fuselage exterior diagram labelling, walkaround inspection simulation reporting airframe damage, Minimum Equipment List (MEL) dispatch check.</span>
          <span class="lang-fr">Légendage de plans cellule et cockpit, simulation de visite pré-vol signalant des anomalies de structure, application de la MEL.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Fuselage, empennage, aileron, elevator, rudder, flaps, slats, spoilers, radome, pitot tube, winglet, actuator.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Spatial and functional descriptors (located along the trailing edge of the wing, designed to increase camber during low-speed approach).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Stress in aircraft components ('aileron, 'rudder, 'fuselage, em-pen-'nage).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            08
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Commercial Aircraft Families & Airline Fleet Economics</span>
            <span class="lang-fr">Familles d'Avions Commerciaux & Flottes des Compagnies</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Categorization of commercial transport aircraft: regional turboprops, single-aisle narrowbodies, widebodies, and freighters. Comparing manufacturer strategies and airline economics.</span>
        <span class="lang-fr">Catégorisation des avions de transport commercial : turbopropulseurs régionaux, monocouloirs, gros-porteurs et cargos. Comparaison constructeurs et réseaux.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Aircraft specification comparison challenge, simulated Airline Fleet Selection Committee pitch, evaluating fuel-burn and seat-mile costs.</span>
          <span class="lang-fr">Défi comparatif de fiches avions, simulation de comité de choix de flotte d'une compagnie aérienne, calcul de coût au siège-kilomètre.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Narrowbody, widebody, MTOW (Maximum Takeoff Weight), payload-range, seat-mile cost, fuel burn, fleet commonality, retrofitting.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Comparative and superlative structures with modifiers (substantially lower operating cost, marginally longer range, significantly quieter engines).</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Numerical aircraft designations (A-three-fifty, Boeing seven-eight-seven).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            09
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Landmark Aviation Accidents & Technical Causal Analysis</span>
            <span class="lang-fr">Accidents Aéronautiques Majeurs & Analyse Causale</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE2
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Human factors, CRM, and technical accident investigation. Analysis of landmark historical aviation occurrences (Tenerife 1977, BA 38, US Airways 1549, AF 447).</span>
        <span class="lang-fr">Facteurs humains, CRM et enquêtes de sécurité. Analyse d'accidents historiques majeurs et des recommandations de sécurité qui en ont découlé.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">15-minute collaborative group research sprint on an assigned accident, delivering a 5-minute technical safety debrief to peers, rehearsal for FE2.</span>
          <span class="lang-fr">Sprint de recherche de 15 minutes en équipe sur un accident, débriefing technique de sécurité de 5 minutes devant la classe, préparation EF2.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">FDR (Flight Data Recorder), CVR (Cockpit Voice Recorder), CFIT, pitot icing, spatial disorientation, causal chain, safety recommendation.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Narrative past tenses in chronological investigations (Past Simple, Past Continuous, Past Perfect), modal verbs of past deduction.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Syllable stress in investigative terminology (in-ves-ti-'ga-tion, ca-tas-'tro-phic, 'cri-ti-cal).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            10
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 2 (FE2) — Aircraft & Airlines Profile</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 2 (EF2) — Profil d'Aéronef & Compagnie</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE2
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral evaluation in pairs. Students present an in-depth technical profile of an airliner and its airline operating context, followed by technical defense and portfolio review.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Présentation technique approfondie d'un aéronef et de sa compagnie, soutenance et audit du portfolio.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial: Welcome (2m), Technical Aircraft Presentation (12m), Technical Cross-Examination (8m), Portfolio review (4m), Marking & feedback (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Présentation de l'appareil (12m), Questions techniques du jury (8m), Contrôle portfolio (4m), Bilan (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Accurate aerodynamic, structural, and aircraft systems terminology.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Controlled deployment of comparative metrics, flight physics conditionals, and narrative past tenses.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Intelligible technical delivery matching ICAO Level 4/5 operational standards.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Module 3 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Module 3: Health, Meteorology, Safety &amp; Security (Sessions 11–15)</span>
              <span class="lang-fr">Module 3 : Santé, Météo, Sécurité &amp; Sûreté (Séances 11–15)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            11
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Health & Human Factors in Aviation</span>
            <span class="lang-fr">Santé & Facteurs Humains en Aéronautique</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Medical emergencies in flight, crew physiological limitations, circadian rhythms, fatigue management, and spatial disorientation. Applying the IMSAFE framework and diversion protocols.</span>
        <span class="lang-fr">Urgences médicales à bord, facteurs humains, physiologie du vol, gestion de la fatigue et désorientation spatiale. Grille IMSAFE et déroutements.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Pilot fatigue case study analysis, simulated in-flight medical diversion decision challenge under fuel/runway constraints, applying the IMSAFE framework.</span>
          <span class="lang-fr">Étude de cas sur la fatigue équipage, simulation de prise de décision de déroutement médical sous contraintes, application de la grille IMSAFE.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Hypoxia, spatial disorientation, circadian dysrhythmia, somatogravic illusion, medical diversion, defibrillator (AED), incapacitated pilot.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Conditionals of operational urgency (In the event that the captain becomes incapacitated, the first officer shall...), reporting verbs.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Stress in aeromedical terms ('hypothermia, hy'poxia, car-dio-pul-mo-'na-ry).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            12
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Meteorology & Severe Weather in Commercial Aviation</span>
            <span class="lang-fr">Météorologie & Aléas Climatiques Sévères</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Evaluating the operational impact of severe weather on flight planning and aerodrome operations. Decoding operational METAR, TAF, and SIGMET reports. Microbursts and icing.</span>
        <span class="lang-fr">Impacts opérationnels de la météo sévère sur la gestion des vols et des pistes. Décodage METAR, TAF et SIGMET. Cisaillement de vent et givrage.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Live METAR/TAF decoding workshop, weather diversion and holding pattern simulation under fuel constraints, historical weather accident debrief.</span>
          <span class="lang-fr">Atelier de décodage METAR/TAF en direct, simulation de déroutement et circuit d'attente météo, débriefing d'accidents météo majeurs.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Microburst, wind shear, cumulonimbus (CB), clear icing, rime icing, de-icing boot, CAT (Clear Air Turbulence), holding stack, alternate aerodrome.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Passive voice in weather briefings (Runway 09R was closed owing to standing water; departures were suspended), conditional routing formulas.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Standard ICAO meteorological terminology pronunciation (visibility, ceiling, gusts, knots).</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            13
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Aviation Safety vs. Security: Airport Checks & Aircraft Protection</span>
            <span class="lang-fr">Sécurité des Vols vs. Sûreté Aéroportuaire</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Articulating the fundamental legal, literal, and operational distinctions between Aviation Safety (preventing unintentional accidents) and Aviation Security (preventing unlawful interference).</span>
        <span class="lang-fr">Distinction fondamentale entre la Sécurité des vols (accidents fortuits) et la Sûreté aéroportuaire (actes malveillants). Fouilles et architecture de sûreté.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Comparing safety vs. security incident case studies, pre-flight cockpit security search walkthrough, crisis coordination role-play between security teams and airport ops.</span>
          <span class="lang-fr">Étude comparative d'incidents sécurité vs sûreté, visite de fouille de sécurité cabine/cockpit, jeu de rôle de gestion de crise aéroportuaire.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Safety vs. security distinction, perimeter intrusion detection, explosive trace detection, air marshal, baggage reconciliation, unlawful interference.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Contrastive discourse markers (whereas safety encompasses mechanical reliability, security addresses criminal intent), passive modal constructions.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Differentiating /s/ and /ʃ/ sounds in safety and security terminology.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            14
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Global Semester Review & 3-Team Aviation Quiz</span>
            <span class="lang-fr">Révision Globale & Grand Quiz Aéronautique à 3 Équipes</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
          Teaching Session • Prep FE3
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Synthesis of all Semester 1 technical knowledge across Aerodromes (Module 1), Aircraft/Aerodynamics (Module 2), and Health/Weather/Safety (Module 3). Structuring the FE3 media briefing.</span>
        <span class="lang-fr">Synthèse générale des connaissances du semestre : Aérodromes (Mod 1), Avions (Mod 2), Météo et Sûreté (Mod 3). Structuration de la conférence de presse EF3.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Competitive 3-team Aviation Grand Prix Quiz, media briefing role-play rehearsal, mock aggressive journalist cross-examinations.</span>
          <span class="lang-fr">Grand Quiz aéronautique en 3 équipes, répétition de conférence de presse, simulations de questions incisives de journalistes.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Comprehensive technical terminology synthesis, press briefing formulas (I will now address questions regarding the preliminary investigation...).</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Diplomatic response formulas (At this stage of the investigation, we cannot confirm that hypothesis), hypothetical conditionals.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Confident, measured delivery pacing under simulated high-pressure media scrutiny.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            15
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FORMATIVE EVALUATION 3 (FE3) — Aviation Current Events Press Briefing</span>
            <span class="lang-fr">ÉVALUATION FORMATIVE 3 (EF3) — Conférence de Presse Aéronautique</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-600 text-white">
          Oral Evaluation • FE3
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Graded 30-minute oral evaluation in pairs. Students stage a professional Aviation Press Briefing on a recent commercial aviation incident, followed by investigative journalist Q&A.</span>
        <span class="lang-fr">Épreuve orale notée de 30 minutes en binôme. Conférence de presse sur un événement aéronautique récent, suivie de questions incisives de journalistes.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">5-stage oral tutorial: Welcome (2m), Press Briefing (12m), Press Q&A & De-escalation (8m), Portfolio review (4m), Semester final feedback (4m).</span>
          <span class="lang-fr">Déroulé en 5 étapes : Accueil (2m), Conférence de presse (12m), Questions journalistes (8m), Contrôle portfolio (4m), Bilan terminal (4m).</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Precise deployment of technical aviation vocabulary, investigative terminology, and press briefing formulas.</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Controlled deployment of diplomatic passive constructions, cause-and-effect links, and condition markers.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Exemplary operational intelligibility and calm, assertive vocal delivery complying with ICAO Level 4/5.</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>

        <!-- Consolidation & Final FE -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span class="lang-en">Semester Consolidation &amp; Final Evaluation (Sessions 16–17)</span>
              <span class="lang-fr">Consolidation du Semestre &amp; Évaluation Finale (Séances 16–17)</span>
            </h4>
          </div>
          <div class="space-y-3">
            
    <div class="p-4 rounded-xl border border-blue-300 bg-blue-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-slate-800 text-white">
            16
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">Comprehensive Technical English Revision & ICAO Descriptors Clinic</span>
            <span class="lang-fr">Révision Technique Approfondie & Atelier Critères OACI</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white">
          Consolidation Workshop
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Final preparation and consolidation workshop. Students review and drill the six ICAO operational descriptors (Pronunciation, Structure, Vocabulary, Fluency, Comprehension, Interactions).</span>
        <span class="lang-fr">Atelier de consolidation opérationnelle. Travail intensif sur les 6 critères d'évaluation OACI et audit final du portfolio technique.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Paired ICAO diagnostic simulations, non-routine emergency scenario role-plays (engine flameout, medical diversion, gear malfunction), portfolio validation check.</span>
          <span class="lang-fr">Simulations diagnostiques OACI en binôme, jeux de rôle d'urgences en vol (panne réacteur, déroutement, train bloqué), audit de conformité du portfolio.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Immediate clarification strategies (Say again, Confirm runway heading, Request clarification on fuel state).</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Operational clarity, eradication of ambiguous phrasing, standardized phraseology compliance.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">Readily intelligible international pronunciation under high-workload simulated conditions.</span>
        </div>
      </div>
    </div>
  
    <div class="p-4 rounded-xl border border-purple-300 bg-purple-50/25 shadow-2xs space-y-3 transition-all hover:border-slate-300">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center bg-amber-600 text-white">
            17
          </span>
          <h4 class="text-xs sm:text-sm font-black text-slate-900">
            <span class="lang-en">FINAL SUMMATIVE EVALUATION & GO / NO-GO SEMESTER VALIDATION</span>
            <span class="lang-fr">ÉVALUATION SOMMATIVE TERMINALE & VALIDATION GO / NO GO</span>
          </h4>
        </div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-600 text-white">
          Final Validation • Go / No-Go
        </span>
      </div>

      <!-- Description -->
      <p class="text-xs text-slate-700 leading-relaxed">
        <span class="lang-en">Official final technical oral examination and portfolio validation. Individual or paired technical interview evaluating operational communication, determining the semester grade and Go / No-Go progression decision.</span>
        <span class="lang-fr">Examen oral terminal officiel et validation définitive du portfolio. Entretien technique individuel ou en binôme attribuant la note finale (/20) et la décision GO / NO GO.</span>
      </p>

      <!-- Activities -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11.5px] text-slate-700 leading-relaxed flex items-start gap-2">
        <span class="font-bold text-slate-900 shrink-0">
          <span class="lang-en">🎯 Activities:</span>
          <span class="lang-fr">🎯 Activités :</span>
        </span>
        <span>
          <span class="lang-en">Final technical oral interview with jury, comprehensive portfolio check, faculty deliberation, and progression sign-off.</span>
          <span class="lang-fr">Entretien oral terminal devant jury, contrôle global du portfolio, délibération de l'équipe enseignante et validation de passage.</span>
        </span>
      </div>

      <!-- Linguistic Focus Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
        <div class="p-2 rounded-lg bg-blue-50/70 border border-blue-100/90 text-blue-950">
          <span class="font-bold block text-[10px] uppercase text-blue-800 mb-0.5">📚 Vocabulary</span>
          <span class="leading-relaxed">Active operational mastery across all Semester 1 aeronautical domains (Aerodromes, Aircraft, Meteorology, Safety/Security).</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 text-emerald-950">
          <span class="font-bold block text-[10px] uppercase text-emerald-800 mb-0.5">⚙️ Grammar &amp; Patterns</span>
          <span class="leading-relaxed">Consistent structural control of both simple and complex patterns under operational pressure.</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/70 border border-amber-100/90 text-amber-950">
          <span class="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">🎙️ Pronunciation &amp; Standards</span>
          <span class="leading-relaxed">International ICAO operational intelligibility (Level 4/5 benchmark).</span>
        </div>
      </div>
    </div>
  
          </div>
        </div>
      </div>
    </div>
      `;

      window.setDrawerSyllabusLang(initialLang);
      const isAas = (modalState.program === 'aas' || currentProgram === 'aas');
      window.setDrawerSyllabusTrack(isAas ? 'at' : 'ag');
    }

    window.setDrawerSyllabusLang = function(lang) {
      const container = document.getElementById('syllabus-drawer-content');
      const btnEn = document.getElementById('btn-drawer-syl-en');
      const btnFr = document.getElementById('btn-drawer-syl-fr');
      if (!container) return;
      if (lang === 'fr') {
        container.classList.add('lang-fr');
        if (btnFr) btnFr.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-blue-600 text-white shadow-xs font-bold";
        if (btnEn) btnEn.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900";
      } else {
        container.classList.remove('lang-fr');
        if (btnEn) btnEn.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-blue-600 text-white shadow-xs font-bold";
        if (btnFr) btnFr.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900";
      }
      try { localStorage.setItem('gsea_presentation_lang', lang); } catch (e) {}
    };

    window.setDrawerSyllabusTrack = function(track) {
      const container = document.getElementById('syllabus-drawer-content');
      const btnAg = document.getElementById('btn-drawer-syl-ag');
      const btnAt = document.getElementById('btn-drawer-syl-at');
      if (!container) return;
      if (track === 'at') {
        container.classList.add('track-at');
        if (btnAt) btnAt.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-emerald-800 shadow-xs font-black";
        if (btnAg) btnAg.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900";
      } else {
        container.classList.remove('track-at');
        if (btnAg) btnAg.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer bg-white text-slate-900 shadow-xs font-black";
        if (btnAt) btnAt.className = "px-2.5 py-1 rounded-md transition-all cursor-pointer text-slate-600 hover:text-slate-900";
      }
    };

    /* --- PORTFOLIO_SUMMARY_DATA_START --- */
const PORTFOLIO_SUMMARY_DATA = {
  "lastUpdated": "30 Oct 2026",
  "totalSubmissions": 15,
  "trackBreakdown": {
    "at": 11,
    "ag": 4
  },
  "metrics": {
    "avgFeConfidence": "4.1",
    "avgToeicConfidence": "9.1",
    "targetFeLevel": "CEFR B2",
    "feWindow": "Week 48 (FE1)"
  },
  "topBuzzwords": [
    {
      "term": "Airside vs. Landside",
      "track": "at",
      "category": "Aerodrome Zones",
      "frequency": "85% of cohort",
      "definition": "Landside = public areas before security (check-in, arrivals hall). Airside = strictly secured operations areas beyond security (gates, apron, taxiways, runways)."
    },
    {
      "term": "Apron / Ramp & Stands",
      "track": "at",
      "category": "Movement Area",
      "frequency": "75% of cohort",
      "definition": "The designated paved area where aircraft park at designated stands to board/deboard, refuel, load baggage, and undergo ground servicing."
    },
    {
      "term": "Travel Collocations & Booking",
      "track": "ag",
      "category": "Travel Operations",
      "frequency": "70% of cohort",
      "definition": "Essential communicative collocations: to book a flight, to board a plane, to check in, to clear customs, and to travel with carry-on luggage."
    },
    {
      "term": "GPU vs. APU",
      "track": "at",
      "category": "Electrical Power Systems",
      "frequency": "55% of cohort",
      "definition": "GPU (Ground Power Unit) = mobile ground generator supplying electricity at the gate. APU (Auxiliary Power Unit) = small gas turbine in the aircraft tail used when engines and GPU are off."
    },
    {
      "term": "Travel Idioms (Scenic Route, Hit the Road)",
      "track": "ag",
      "category": "Spoken Idioms",
      "frequency": "65% of cohort",
      "definition": "Conversational storytelling idioms: to hit the road (depart), to take the scenic route (longer picturesque path), and to be in the driver's seat (in control)."
    },
    {
      "term": "TRC & AODB",
      "track": "at",
      "category": "Ground Operations",
      "frequency": "45% of cohort",
      "definition": "TRC = Turnaround Coordinator supervising ramp tasks between flight arrival and departure. AODB = Airport Operational Database managing flight schedules, gate changes, and allocated stands."
    },
    {
      "term": "Unruly / Disruptive Passenger",
      "track": "ag",
      "category": "Cabin Safety & Rights",
      "frequency": "60% of cohort",
      "definition": "A traveler who refuses to follow crew instructions or behaves disruptively, risking flight diversions, police arrest, and heavy airline costs."
    },
    {
      "term": "Low-Cost Carrier (LCC) & Ancillary Revenue",
      "track": "at",
      "category": "Airline Economics",
      "frequency": "40% of cohort",
      "definition": "LCC = budget airline offering cheap baseline tickets. Ancillary Revenue = extra income from non-ticket sales (carry-on bags, seat selection, on-board meals)."
    },
    {
      "term": "Scheduled vs. Charter Flights & EU261",
      "track": "at",
      "category": "Passenger Rights & Ops",
      "frequency": "35% of cohort",
      "definition": "Scheduled = timetabled regular airline service. Charter = booked on-demand for a specific private/tour group. Severe delays trigger passenger statutory care."
    },
    {
      "term": "Get Off to a Flying Start & Word of Mouth",
      "track": "ag",
      "category": "High-Impact Idioms",
      "frequency": "65% of cohort",
      "definition": "Get off to a flying start = beginning a semester or project with immediate success and momentum. Word of mouth = organic communication from person to person."
    }
  ],
  "grammarTrapsCaught": [
    {
      "title": "❌ 'Luggages' and 'Trainings' do NOT exist!",
      "track": "ag",
      "rule": "Both 'luggage' and 'training' are uncountable nouns in English. Never add an 's'.",
      "correctExample": "✅ \"We checked three pieces of luggage and completed our training course.\""
    },
    {
      "title": "🗣️ Pronunciation Trap: Itinerary",
      "track": "ag",
      "rule": "Multiple students flagged pronunciation difficulty with 'itinerary'. Stress is on the second syllable: /aɪˈtɪn.ər.ər.i/ (eye-TIN-er-uh-ree).",
      "correctExample": "✅ \"Could you please confirm our flight itinerary before we head to the gate?\""
    },
    {
      "title": "⏱️ Reported Speech Backshift & Time References",
      "track": "ag",
      "rule": "When reporting past dialogue, tenses shift back (present -> past, past -> past perfect; will -> would), and time adverbs shift ('today' -> 'that day', 'yesterday' -> 'the day before', 'tomorrow' -> 'the following day').",
      "correctExample": "✅ \"He said he was running on empty that day and would take the train the following morning.\""
    },
    {
      "title": "✈️ Apron vs. Taxiway vs. Runway",
      "track": "at",
      "rule": "Exact spatial precision is required in operational briefings. Never refer to the runway when you mean parking on the apron or taxiing on taxiway Alpha.",
      "correctExample": "✅ \"The aircraft pushed back from stand B4 onto the apron, taxied via Charlie, and lined up on Runway 14L.\""
    },
    {
      "title": "💡 'Used to do' vs. 'Be used to doing'",
      "track": "ag",
      "rule": "'I used to work' expresses a past habit that is finished. 'I am used to working' means you are accustomed/familiar with it now.",
      "correctExample": "✅ \"I used to live in Paris, but now I am used to living in Toulouse.\""
    }
  ],
  "cohortReflections": {
    "strengths": [
      "Rapid adoption of technical aerodrome terminology (Airside, Apron, Stands, GPU, TRC).",
      "Active use of travel collocations and idioms in role-play simulations (stressed passenger vs. airport staff).",
      "Accurate grasp of reported speech backshifting rules and time adverb transformations."
    ],
    "growthAreas": [
      "Spoken Fluency: Eliminating hesitation and pauses when searching for specialized English nouns.",
      "Pronunciation Precision: Practicing multi-syllable travel terms (e.g., 'itinerary', 'aerodrome').",
      "Sentence Speed: Building connected cause-and-effect sentences smoothly under time pressure."
    ],
    "feAdvice": "Students agree that mastering exact spatial airport zones (airside, apron, stands, taxiways) and practicing real-time spoken storytelling with travel collocations is the single best preparation for the 30-minute Formative Evaluation."
  },
  "verbatimQuotes": [
    {
      "track": "at",
      "session": "Mod 1 • Session 1",
      "topic": "Oral Presentation & Ground Infrastructure",
      "quote": "Knowing the different geographical parts of an airport, as well as the jobs, will be very important in the airport presentation. The oral presentation won't be possible without being able to name the different parts.",
      "takeaway": "Mastering aerodrome spatial vocabulary is non-negotiable for FE1."
    },
    {
      "track": "at",
      "session": "Mod 1 • Session 1",
      "topic": "Spoken Fluency & Hesitation",
      "quote": "My main problem is fluency because I am always looking for a word when talking to someone. I also need some time to build my sentences, so I think that I have to talk as much as possible to improve on these points.",
      "takeaway": "Spoken practice in pairs reduces mid-sentence hesitations."
    },
    {
      "track": "ag",
      "session": "Mod 1 • Session 1",
      "topic": "Pronunciation & Spoken Grammar",
      "quote": "I realized with a few words like 'itinerary' that I have to work on my pronunciation. Knowing what tense I should use to properly speak in every situation is probably what I get from this class.",
      "takeaway": "Drill tricky multi-syllable terms out loud before speaking evaluations."
    },
    {
      "track": "ag",
      "session": "Mod 1 • Session 1",
      "topic": "GlobalExam & TOEIC Preparation",
      "quote": "It is sometimes frustrating to practice TOEIC with GlobalExam because several answers appear correct, but reading the explanations available at the end of the test is useful to understand subtle shades between two close words.",
      "takeaway": "Always read answer explanations on GlobalExam to understand lexical nuances."
    }
  ]
};
/* --- PORTFOLIO_SUMMARY_DATA_END --- */

    let currentPortfolioTrackFilter = 'all';

    window.setPortfolioTrackFilter = function(filter) {
      currentPortfolioTrackFilter = filter;
      const theme = (typeof modulesData !== 'undefined' && modulesData[0]) || { primary: '#0f172a', accent: '#3b82f6' };
      renderPortfolioSummaryTab(theme);
    };

    function renderPortfolioSummaryTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const data = (typeof PORTFOLIO_SUMMARY_DATA !== 'undefined' && PORTFOLIO_SUMMARY_DATA) ? PORTFOLIO_SUMMARY_DATA : null;

      if (!data) {
        bodyEl.innerHTML = `
          <div class="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            <span class="text-3xl block mb-2">📊</span>
            <h4 class="font-bold text-slate-800 text-sm">Portfolio Summary Pending</h4>
            <p class="text-xs text-slate-500 mt-1">Student submissions are being collected. The cohort summary will appear here shortly.</p>
          </div>
        `;
        return;
      }

      const activeFilter = currentPortfolioTrackFilter || 'all';

      // Anti-bloat curated filtering by track
      const filteredBuzzwords = (data.topBuzzwords || []).filter(b => {
        if (activeFilter === 'all') return true;
        return (b.track || '').toLowerCase() === activeFilter.toLowerCase();
      });

      const filteredTraps = (data.grammarTrapsCaught || []).filter(gt => {
        if (activeFilter === 'all') return true;
        return (gt.track || '').toLowerCase() === activeFilter.toLowerCase();
      });

      const filteredQuotes = (data.verbatimQuotes || []).filter(q => {
        if (activeFilter === 'all') return true;
        return (q.track || '').toLowerCase() === activeFilter.toLowerCase();
      });

      bodyEl.innerHTML = `
        <div class="space-y-5">
          <!-- Top Header Banner -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs text-2xl" style="background-color: ${theme.primary};">
                <span>📊</span>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs" style="background-color: ${theme.accent};">COHORT PULSE</span>
                  <h3 class="text-base sm:text-lg font-extrabold text-slate-900">What Everyone is Talking About</h3>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">High-yield study highlights synthesized from your digital Learning Portfolios • Last updated: ${data.lastUpdated}</p>
              </div>
            </div>

            <div class="flex items-center gap-2 shrink-0 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs font-bold text-slate-700">Curated Peer Highlights</span>
            </div>
          </div>

          <!-- Track Filter Segmented Control Bar (Zero mobile clutter, single 36px bar) -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-2.5 p-2 bg-slate-100 rounded-xl border border-slate-200">
            <div class="flex items-center gap-2 self-start sm:self-auto px-1">
              <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Viewing:</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border ${activeFilter === 'at' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : (activeFilter === 'ag' ? 'bg-indigo-50 text-indigo-800 border-indigo-300' : 'bg-white text-slate-800 border-slate-300')}">
                ${activeFilter === 'all' ? '🌐 All Tracks Combined' : (activeFilter === 'at' ? '✈️ LV121E Technical English (AT)' : '🗣️ LV101E General English (AG)')}
              </span>
            </div>
            <div class="w-full sm:w-auto grid grid-cols-3 gap-1 bg-slate-200/90 p-1 rounded-lg text-xs font-bold">
              <button onclick="window.setPortfolioTrackFilter('all')" class="py-1.5 px-3 rounded-md transition-all cursor-pointer text-center ${activeFilter === 'all' ? 'bg-white text-slate-900 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'}">
                🌐 All Tracks
              </button>
              <button onclick="window.setPortfolioTrackFilter('at')" class="py-1.5 px-3 rounded-md transition-all cursor-pointer text-center ${activeFilter === 'at' ? 'bg-emerald-600 text-white shadow-xs font-black' : 'text-slate-600 hover:text-emerald-800 hover:bg-white/40'}">
                ✈️ AT Technical
              </button>
              <button onclick="window.setPortfolioTrackFilter('ag')" class="py-1.5 px-3 rounded-md transition-all cursor-pointer text-center ${activeFilter === 'ag' ? 'bg-indigo-600 text-white shadow-xs font-black' : 'text-slate-600 hover:text-indigo-800 hover:bg-white/40'}">
                🗣️ AG General
              </button>
            </div>
          </div>

          <!-- Section 1: Top Emerging Keywords & Concepts -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                <h4 class="font-bold text-slate-900 text-sm">Top Emerging Keywords &amp; Technical Distinctions (${filteredBuzzwords.length})</h4>
              </div>
              <span class="text-[10px] font-mono uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">Curated Summary</span>
            </div>

            ${filteredBuzzwords.length === 0 ? `
              <p class="text-xs text-slate-500 py-4 text-center">No keywords logged for this specific filter yet.</p>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${filteredBuzzwords.map(b => `
                  <div class="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2 flex flex-col justify-between hover:bg-slate-50 transition-all">
                    <div>
                      <div class="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5">
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="font-bold text-xs text-slate-900">${b.term}</span>
                          ${b.track === 'at'
                            ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">✈️ AT</span>'
                            : '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">🗣️ AG</span>'}
                        </div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-indigo-700 border border-indigo-200 shrink-0">${b.frequency}</span>
                      </div>
                      <span class="text-[10px] uppercase font-bold text-slate-400 block mt-1">${b.category}</span>
                      <p class="text-[11.5px] text-slate-700 leading-relaxed mt-1">${b.definition}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Section 2: Golden Rules & Common Grammar Traps -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                <h4 class="font-bold text-slate-900 text-sm">Golden Language Rules &amp; Pitfalls Caught by the Cohort (${filteredTraps.length})</h4>
              </div>
              <span class="text-[10px] font-mono uppercase bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold">Self-Correction</span>
            </div>

            ${filteredTraps.length === 0 ? `
              <p class="text-xs text-slate-500 py-4 text-center">No grammar traps logged for this specific filter yet.</p>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${filteredTraps.map(gt => `
                  <div class="p-3.5 rounded-xl bg-rose-50/40 border border-rose-200 space-y-2 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2 mb-1">
                        <h5 class="text-xs font-bold text-rose-950">${gt.title}</h5>
                        ${gt.track === 'at'
                          ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">✈️ AT</span>'
                          : '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">🗣️ AG</span>'}
                      </div>
                      <p class="text-[11px] text-slate-700 mt-1 leading-relaxed">${gt.rule}</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white border border-rose-200/80 text-[11px] text-slate-800 whitespace-pre-line leading-relaxed">
                      ${gt.correctExample}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Section 3: Honest Peer Reflections (You Are Not Alone!) -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                <h4 class="font-bold text-slate-900 text-sm">Honest Reflections &amp; How to Ace Formative Evaluation 1</h4>
              </div>
              <span class="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">Peer Voice</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 class="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>🗣️</span>
                  <span>Common Speaking Challenges (You Are Not Alone!)</span>
                </h5>
                <ul class="space-y-1.5 pl-4 list-disc text-slate-600 text-[11.5px] leading-relaxed">
                  ${(data.cohortReflections.growthAreas || []).map(ga => `<li>${ga}</li>`).join('')}
                </ul>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                <h5 class="font-bold text-amber-950 flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>Direct Link to the FE1 Oral Presentation</span>
                </h5>
                <p class="text-[11.5px] text-amber-900 leading-relaxed">
                  ${data.cohortReflections.feAdvice}
                </p>
              </div>
            </div>
          </div>

          <!-- Section 4: Authentic Cohort Voices (Verbatim Student Reflections) -->
          <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-xs">4</span>
                <h4 class="font-bold text-slate-900 text-sm">Authentic Cohort Voices — What Your Peers Are Really Saying (${filteredQuotes.length})</h4>
              </div>
              <span class="text-[10px] font-mono uppercase bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-bold">Verbatim Feedback</span>
            </div>

            ${filteredQuotes.length === 0 ? `
              <p class="text-xs text-slate-500 py-4 text-center">No student quotes logged for this specific filter yet.</p>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${filteredQuotes.map(q => `
                  <div class="p-4 rounded-xl bg-purple-50/40 border border-purple-200/80 space-y-2.5 flex flex-col justify-between hover:bg-purple-50/70 transition-all shadow-2xs">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between gap-2 border-b border-purple-200/60 pb-1.5">
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="text-[10.5px] font-bold text-purple-950 uppercase tracking-wide">${q.topic || 'Reflection'}</span>
                          ${q.track === 'at'
                            ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">✈️ AT</span>'
                            : '<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">🗣️ AG</span>'}
                        </div>
                        <span class="text-[10px] font-mono text-slate-400 font-bold">${q.session || 'Module 1'}</span>
                      </div>
                      <p class="text-[12px] italic text-slate-800 leading-relaxed pt-0.5">
                        "${q.quote}"
                      </p>
                    </div>
                    <div class="flex items-center justify-between pt-1 border-t border-purple-100 text-[10px] text-slate-500 font-medium">
                      <span class="text-purple-900 font-semibold truncate pr-2">💡 ${q.takeaway || 'Key Takeaway'}</span>
                      <span class="font-mono text-purple-700 font-bold shrink-0">Anonymous Peer Log</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      `;
    }




