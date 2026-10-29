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
            <div class="p-3.5 rounded-xl bg-white/90 border border-amber-200 space-y-2 text-xs">
              <div class="flex items-start gap-2">
                <span class="text-rose-700 font-bold shrink-0">${isFr ? '❌ N\'écrivez jamais de réponses en un seul mot :' : '❌ Never write one-word answers:'}</span>
                <span class="text-slate-600">${isFr ? 'N\'écrivez PAS de termes vagues comme <em>"good"</em>, <em>"fine"</em>, <em>"ok"</em>, <em>"rien"</em> ou <em>"ras"</em>. Cela n\'apporte aucune information utile aux enseignants.' : 'Do NOT write simple words like <em>"good"</em>, <em>"fine"</em>, <em>"ok"</em>, <em>"nothing"</em>, or <em>"ras"</em>. These give your teachers zero information.'}</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-emerald-700 font-bold shrink-0">${isFr ? '✅ Rédigez toujours des remarques précises :' : '✅ Always write detailed notes:'}</span>
                <span class="text-slate-700">${isFr ? 'Détaillez ce qui s\'est bien passé, les points de vocabulaire ou de grammaire qui ont posé difficulté, et ce que vous prévoyez de travailler avant la séance suivante.' : 'Explain exactly what went well, which specific vocabulary or grammar points were difficult, and what you will do before the next session to improve.'}</span>
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



