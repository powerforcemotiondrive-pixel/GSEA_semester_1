/**
 * Update script for Semester 1 General English (AG) Module 2 Sessions 1 & 2
 * Ensures:
 * 1. 1:1 Title Parity (Extreme Weather & Atmospheric Hazards / Sustainable Cities & Low-Emission Mobility)
 * 2. Zero Timings / Minute Breakdowns (Rule 1.Q)
 * 3. Context-Anchored Reading with Sentence Stems (Rule 1.V)
 * 4. Pairwork viability & Peer Checklists
 * 5. Distinct structural variation between Session 1 and Session 2
 */

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '..', 'data', 'course-data.js');
let content = fs.readFileSync(courseDataPath, 'utf8');

// Require the current module to manipulate the objects cleanly
const courseData = require(courseDataPath);

// ==========================================
// SESSION 1 DEFINITION: Extreme Weather
// ==========================================
const s1Data = {
  session: "01",
  title: "Extreme Weather & Atmospheric Hazards",
  objectives: {
    title: "Session 1 Objectives - Extreme Weather & Atmospheric Hazards",
    summary: "Master high-stakes meteorological communication, downburst physics analysis, causal linkers, and crisis briefing skills for severe weather disruption.",
    items: [
      {
        num: "01",
        title: "Severe Weather Meteorological Diagnostics",
        desc: "Explain convective storm hazards using precise B2 aviation sentence stems (supercells, atmospheric rivers, flash floods, heat domes)."
      },
      {
        num: "02",
        title: "Microburst & Windshear Physical Dynamics",
        desc: "Analyze convective downburst physics, virga, vortex rings, and low-altitude windshear mitigation systems."
      },
      {
        num: "03",
        title: "Grammar Clinic: Causal Linkers & Conditionals",
        desc: "Deploy formal causal verbs (stems from, culminates in, triggers) and 2nd/3rd conditional risk assessment formulas."
      },
      {
        num: "04",
        title: "Incident Dossier Research & Mitigation Pitch",
        desc: "Conduct small group research on a real weather emergency dossier and deliver a 90-second operational mitigation briefing with peer rubric."
      },
      {
        num: "05",
        title: "Spoken Vocabulary Game: Extreme Weather Taboo",
        desc: "Build rapid oral circumlocution and phonological fluency using 12 technical taboo cards with IPA stress guides."
      },
      {
        num: "06",
        title: "Aerodrome Crisis Shutdown Debate",
        desc: "Debate runway closure criteria and diversion thresholds across Ramp Operations, Flight Dispatch, and Safety Inspection viewpoints."
      }
    ]
  },
  lessonPlan: {
    title: "Session 1 Lesson Plan - Extreme Weather & Atmospheric Hazards (2 Hours)",
    summary: "A 2-hour university seminar combining opening news diagnostic, microburst video noticeboard, causal grammar clinic, small group dossier research & pitch, Taboo fluency game, and aerodrome shutdown debate.",
    items: [
      {
        part: "Part 1",
        title: "Meteorological News Scan & Spoken Diagnostic",
        description: "Pairwise diagnostic questions with framed sentence stems comparing supercells, atmospheric rivers, flash floods, and adaptation vs mitigation."
      },
      {
        part: "Part 2",
        title: "Interactive Video Lab: Convective Storms & Microburst Physics",
        description: "Video breakdown of convective downburst dynamics, virga, and low-altitude windshear, supported by 3 guided oral discussion prompts and debrief card."
      },
      {
        part: "Part 3",
        title: "Language Clinic: Formal Causal Linkers & Conditional Risk Formulas",
        description: "Structured drills deploying causal verbs (stems from, triggers, culminates in) and 2nd/3rd conditional formulas for risk assessment."
      },
      {
        part: "Part 4",
        title: "3-Person Incident Dossier Research & Spoken Mitigation Pitch",
        description: "Groups choose 1 real weather case (Dubai flood, Phoenix extreme heat, or DFW microburst), analyze operational data, and deliver a 90-second pitch with peer observer rubric."
      },
      {
        part: "Part 5",
        title: "Interactive Vocabulary Game: Extreme Weather Taboo",
        description: "Oral communication game using 12 Taboo cards with forbidden buzzwords and IPA phonetic pronunciation guides to develop circumlocution."
      },
      {
        part: "Part 6",
        title: "Aerodrome Crisis Shutdown Debate & Multi-Stakeholder Consensus",
        description: "Multi-stakeholder simulation debating runway closure criteria between Ramp Ops, Flight Dispatch, and Safety Inspection."
      }
    ]
  },
  revision: {
    title: "Session 1: Extreme Weather & Atmospheric Hazards",
    summary: "Review the 18 key technical terms for severe weather, downburst hazards, and aerodrome climate resilience.",
    terms: [
      { num: "01", term: "Microburst", ipa: "/ˈmaɪ.krəʊ.bɜːst/", def: "Intense localized column of sinking air within a thunderstorm producing damaging outflow winds." },
      { num: "02", term: "Supercell", ipa: "/ˈsuː.pə.sel/", def: "Severe thunderstorm characterized by a deep, persistently rotating updraft (mesocyclone)." },
      { num: "03", term: "Atmospheric River", ipa: "/ˌæt.məsˈfer.ɪk ˈrɪv.ər/", def: "Long, narrow band of concentrated moisture in the atmosphere that transports water vapor outside the tropics." },
      { num: "04", term: "Heat Dome", ipa: "/ˈhiːt ˌdəʊm/", def: "Persistent high-pressure ridge trapping hot ocean air over a region like a pot with a lid." },
      { num: "05", term: "Density Altitude", ipa: "/ˈden.sə.ti ˈæl.tɪ.tʃuːd/", def: "Pressure altitude corrected for non-standard temperature; reduces aircraft aerodynamic lift and engine thrust in hot weather." },
      { num: "06", term: "Flash Flood", ipa: "/ˈflæʃ ˌflʌd/", def: "Rapid flooding of low-lying areas in less than six hours, caused by intense torrential rain." },
      { num: "07", term: "Convective Cell", ipa: "/kənˈvek.tɪv ˌsel/", def: "Thermal circulatory system in which buoyant warm air rises and cool air sinks, forming storm clouds." },
      { num: "08", term: "Windshear", ipa: "/ˈwɪnd.ʃɪər/", def: "Sudden, dramatic change in wind speed or direction over a short horizontal or vertical distance." },
      { num: "09", term: "Virga", ipa: "/ˈvɜː.ɡə/", def: "Precipitation falling from a cloud that evaporates or sublimates before reaching the ground, often generating dry microbursts." },
      { num: "10", term: "Runway Inundation", ipa: "/ˈrʌn.weɪ ˌɪn.ʌnˈdeɪ.ʃən/", def: "Submersion of runway surfaces by storm surge or runoff, exceeding aircraft operating limits." },
      { num: "11", term: "Hail Swath", ipa: "/ˈheɪl ˌswɒθ/", def: "A linear geographic corridor impacted by damaging hail stones falling from a severe thunderstorm." },
      { num: "12", term: "Squall Line", ipa: "/ˈskwɔːl ˌlaɪn/", def: "A narrow line of active thunderstorms with severe surface wind gusts and sudden pressure jumps." },
      { num: "13", term: "Inversion Layer", ipa: "/ɪnˈvɜː.ʃən ˌleɪ.ər/", def: "An atmospheric layer where temperature increases with altitude, trapping pollutants and moisture below." },
      { num: "14", term: "Clear-Air Turbulence (CAT)", ipa: "/ˌklɪər ˈeə ˈtɜː.bjə.ləns/", def: "Sudden severe turbulence occurring in cloudless skies, typically associated with jet stream wind gradients." },
      { num: "15", term: "Cold Front", ipa: "/ˈkəʊld ˌfrʌnt/", def: "The leading edge of a cooler mass of air replacing a warmer mass, often triggering convective instability." },
      { num: "16", term: "Holdover Time (HOT)", ipa: "/ˈhəʊld.əʊ.vər ˌtaɪm/", def: "The estimated time de-icing fluid prevents ice and snow accumulation on treated aircraft surfaces." },
      { num: "17", term: "Climate Mitigation", ipa: "/ˈklaɪ.mət ˌmɪt.ɪˈɡeɪ.ʃən/", def: "Structural actions taken to reduce or prevent the emission of greenhouse gases into the atmosphere." },
      { num: "18", term: "Climate Adaptation", ipa: "/ˈklaɪ.mət ˌæd.æpˈteɪ.ʃən/", def: "Adjustments in ecological, social, or economic infrastructure to cope with unavoidable extreme weather." }
    ]
  },
  overview: {
    title: "Extreme Weather & Atmospheric Hazards",
    subtitle: "Convective Microbursts, Runaway Surface Heating & Aerodrome Severe Weather Protocols",
    badge: "Session Overview • Extreme Weather & Atmospheric Hazards",
    image: "images/ag_m2card1.jpg"
  },
  materials: {
    title: "Session 1 Study Materials: Extreme Weather",
    summary: "Technical vocabulary dossiers, causal connectors, and severe weather emergency SOPs."
  },
  lessonContent: {
    overview: {
      title: "Extreme Weather & Atmospheric Hazards",
      subtitle: "Convective Microbursts, Runaway Surface Heating & Aerodrome Severe Weather Protocols",
      badge: "Session Overview • Extreme Weather & Atmospheric Hazards",
      image: "images/ag_m2card1.jpg"
    },
    hero: {
      title: "Extreme Weather & Atmospheric Hazards",
      subtitle: "Convective Microbursts, Runaway Surface Heating & Aerodrome Severe Weather Protocols",
      image: "images/ag_m2card1.jpg"
    },
    openingSession: {
      title: "Activity 1: Extreme Weather News & Meteorological Diagnostic",
      summary: "Pairwise diagnostic warm-up comparing severe atmospheric hazards with structured spoken sentence frames.",
      instructions: "In pairs, review the weekly severe climate news headlines. Then take turns asking and answering the four diagnostic questions below, using the provided sentence frames to structure your spoken explanations.",
      newsPrompts: [
        "Record-shattering 48°C surface heat in the Persian Gulf grounds regional regional turboprop operations due to density altitude performance limits.",
        "An intense atmospheric river dumps three months of rainfall over Central Europe in 36 hours, overwhelming airport drainage retention ponds.",
        "Severe squall line triggers low-level windshear alerts and multiple go-arounds along the Mediterranean coastal approach corridor."
      ],
      diagnostic: {
        title: "Meteorological Concepts Diagnostic Check",
        instructions: "Use the sentence stem to formulate your spoken answer before revealing the model explanation.",
        questions: [
          {
            id: 1,
            q: "What is the critical distinction between a Supercell Thunderstorm and an ordinary Convective Cell?",
            prompt: "A standard convective cell is driven by..., whereas a supercell is uniquely characterized by...",
            answer: "A standard convective single-cell thunderstorm goes through a simple 30-to-60-minute lifecycle of updraft, precipitation, and downdraft dissipation. In contrast, a supercell possesses a deeply rotating, persistent updraft called a mesocyclone, enabling it to maintain immense structural stability, generate giant hail, damaging microbursts, and long-lived tornadoes."
          },
          {
            id: 2,
            q: "How does an Atmospheric River differ from the high-altitude Jet Stream?",
            prompt: "The jet stream is a high-altitude band of..., while an atmospheric river consists of...",
            answer: "The jet stream is a high-altitude, fast-flowing ribbon of air (typically around 30,000 to 40,000 feet) driven by global thermal contrasts. An atmospheric river, by contrast, is a lower-tropospheric corridor of concentrated water vapor—often dubbed a 'river in the sky'—that transports vast volumes of moisture from tropical oceans to landmasses, causing extreme precipitation."
          },
          {
            id: 3,
            q: "What is the operational difference between Flash Flooding and Riverine Flooding?",
            prompt: "Riverine flooding occurs over..., whereas flash flooding is triggered within...",
            answer: "Riverine flooding is a gradual hydrological event occurring over days or weeks when rivers exceed channel bank capacity. Flash flooding happens within less than six hours of torrential convective rainfall, producing sudden, high-velocity surface runoff that overwhelms civil storm sewer systems and floods airport aprons and taxiways with little warning."
          },
          {
            id: 4,
            q: "In climate engineering, what is the difference between Climate Mitigation and Climate Adaptation?",
            prompt: "Mitigation focuses primarily on..., whereas adaptation involves...",
            answer: "Climate mitigation focuses on tackling the root causes by reducing or capturing greenhouse gas emissions (e.g. electrifying airport ground support equipment, adopting Sustainable Aviation Fuels). Climate adaptation focuses on reinforcing physical systems to survive extreme impacts (e.g. elevating substation electrical switchgear, widening runway retention canals, applying thermal-reflective runway coatings)."
          }
        ]
      }
    },
    videoLab: {
      title: "Activity 2: Interactive Video Lab — Convective Storms & Microburst Physics",
      summary: "Video analysis of convective storm dynamics, virga, vortex rings, and low-altitude windshear mitigation.",
      instructions: "Watch the video breakdown of convective microburst dynamics. Study the multi-column noticeboard below, then discuss the three operational questions with your partner.",
      videoTitle: "Severe Convective Storms: Downburst Dynamics & Airport Windshear",
      videoUrl: "https://www.youtube.com/embed/6_mH15N7fE8",
      youtubeUrl: "https://www.youtube.com/watch?v=6_mH15N7fE8",
      channel: "Meteorology & Atmospheric Dynamics Lab",
      concepts: [
        "Convective Downdraft Acceleration",
        "Virga & Evaporative Cooling",
        "Outflow Boundary & Vortex Ring",
        "Terminal Doppler Weather Radar (TDWR)",
        "Low-Level Windshear Alert System (LLWAS)"
      ],
      guidedQuestions: [
        {
          q: "1. Why does evaporative cooling inside a storm cloud dramatically accelerate a downburst?",
          answer: "As falling precipitation encounters dry air beneath the cloud base, it rapidly evaporates (forming virga). This evaporation absorbs latent heat from the surrounding air, making the air pocket much colder, denser, and heavier than the ambient environment, causing it to plunge downward like a lead weight at speeds exceeding 50 knots."
        },
        {
          q: "2. How does an aircraft encounter with a microburst fool flight crew if they rely only on airspeed indicators?",
          answer: "As an aircraft enters the outflow ring, it first encounters a strong headwind, which temporarily increases airspeed and lift, tempting the pilot to reduce engine power. Seconds later, the aircraft crosses the center core downdraft into a massive tailwind, causing an abrupt loss of airspeed, catastrophic lift deficit, and rapid altitude loss close to the ground."
        },
        {
          q: "3. What infrastructure enhancements allow modern aerodromes to detect microbursts before aircraft penetrate them?",
          answer: "Modern aerodromes employ Terminal Doppler Weather Radar (TDWR) placed several miles off-axis, combined with a perimeter network of anemometers known as LLWAS (Low-Level Windshear Alert System) that detect divergence in surface wind vectors in real time, transmitting immediate automated windshear alerts to ATC."
        }
      ]
    },
    grammarClinic: {
      title: "Activity 3: Language Clinic — Formal Causal Linkers & Conditional Risk Formulas",
      summary: "Mastering formal verbs of causation and 2nd/3rd conditional formulas for technical risk assessment.",
      instructions: "Review the causal verbs and conditional patterns below. Complete the active sentence transformations with your partner, then verify your phrasing using the self-check reveals.",
      patterns: [
        {
          rule: "Formal Causal Verbs",
          formula: "Subject + [stems from / triggers / culminates in / brings about / accounts for] + Noun Phrase",
          examples: [
            "Severe apron inundation stemmed from an unprecedented convective deluge.",
            "Runway thermal expansion triggered a suspension of heavy jet departures."
          ]
        },
        {
          rule: "Second Conditional for Hypothetical Risk Scenarios",
          formula: "If + Past Simple, + would/could + bare infinitive",
          examples: [
            "If the aerodrome operated an on-site water retention reservoir, surface flooding would not halt flight operations.",
            "If surface temperatures reached 50°C, widebody aircraft could not meet required climb gradients."
          ]
        },
        {
          rule: "Third Conditional for Past Incident Root-Cause Analysis",
          formula: "If + had + past participle, + would/could have + past participle",
          examples: [
            "If the weather radar had detected the low-level windshear earlier, the flight crew would have initiated an immediate go-around.",
            "If drainage culverts had been dredged before the storm, the taxiway network would not have been submerged."
          ]
        }
      ],
      drills: [
        {
          id: 1,
          prompt: "Combine using 'culminate in': 'Sustained torrential downpours saturated the topsoil. As a result, a massive retaining wall collapsed onto Taxiway Bravo.'",
          answer: "Sustained torrential downpours saturated the topsoil, culminating in the collapse of a massive retaining wall onto Taxiway Bravo."
        },
        {
          id: 2,
          prompt: "Transform into a Third Conditional sentence: 'The airport lacked an automated LLWAS sensor grid, so controllers failed to warn the crew of the oncoming microburst.'",
          answer: "If the airport had possessed an automated LLWAS sensor grid, air traffic controllers would have warned the flight crew of the oncoming microburst."
        },
        {
          id: 3,
          prompt: "Combine using 'stems from': 'Extreme density altitude reduces aircraft performance during takeoff. This phenomenon originates from high ambient air temperatures.'",
          answer: "Degraded aircraft takeoff performance during high summer temperatures stems from extreme density altitude."
        }
      ]
    },
    researchPitch: {
      title: "Activity 4: 3-Person Incident Dossier Research & Mitigation Pitch",
      summary: "Collaborative incident investigation, data analysis, and a 90-second operational mitigation briefing with peer rubric.",
      instructions: "Work in teams of 3. Choose ONE of the real-world operational weather dossiers below. Review the technical data, identify the cascading operational failures, and formulate a 3-point resilience plan. Nominate Student A to deliver a 90-second spoken briefing while Student B evaluates using the Peer Observer Checklist.",
      dossiers: [
        {
          id: "DXB",
          title: "Dossier 1: Dubai International (DXB) Historic Apron Inundation",
          context: "Record cloudburst dumps 254 mm of rain in 24 hours (nearly two years of typical rainfall).",
          data: "Runway water depth: 15–25 cm; Ground radar disabled by lightning; 1,200 flights cancelled; Fuel hydrant systems submerged; Baggage transfer tunnels flooded.",
          challenge: "Develop an apron flood evacuation and rapid drainage restoration plan within 48 hours."
        },
        {
          id: "PHX",
          title: "Dossier 2: Phoenix Sky Harbor (PHX) Extreme Heat Grounding",
          context: "Surface air temperature surges to 49°C (120°F), exceeding maximum certified operating tables for regional jets.",
          data: "Air density drops by 14%; Required takeoff runway length increases by 22%; Max takeoff weight penalty: -3,500 kg per flight; 43 regional flights grounded.",
          challenge: "Establish daytime temperature operating thresholds, night flight shift schedules, and passenger compensation policies."
        },
        {
          id: "DFW",
          title: "Dossier 3: Dallas/Fort Worth (DFW) Low-Altitude Microburst Encounter",
          context: "A decaying thunderstorm cell produces a localized 60-knot downdraft along the final approach corridor.",
          data: "Aircraft on 3-mile final experiences +25 kt indicated airspeed surge followed by immediate 45 kt tailwind sheer; Sink rate exceeds 2,400 ft/min.",
          challenge: "Draft revised ATC go-around mandates and automated windshear sensor alerting protocols."
        }
      ],
      rubric: {
        title: "Peer Observer Active Listening Rubric (Student B)",
        criteria: [
          { name: "Technical Precision", target: "Uses precise weather vocabulary (density altitude, virga, microburst, retention capacity)." },
          { name: "Causal Linking", target: "Employs target causal verbs (stems from, triggers, culminates in) smoothly." },
          { name: "Operational Structure", target: "Presents clear problem diagnosis, impact analysis, and 3-point action plan." },
          { name: "Spoken Delivery", target: "Speaks with confident pace, clear stress, and minimal hesitation within 90 seconds." }
        ]
      }
    },
    vocabGame: {
      title: "Activity 5: Interactive Spoken Vocabulary Game — Extreme Weather Taboo",
      summary: "Fast-paced spoken fluency and circumlocution game with 12 technical cards, forbidden buzzwords, and IPA guides.",
      instructions: "Form pairs or small groups. Player 1 describes the target buzzword without saying the word itself or any of the 3 forbidden Taboo words. Player 2 must guess the word within 45 seconds. Pay close attention to the IPA phonetic stress marks!",
      cards: [
        { word: "Microburst", ipa: "/ˈmaɪ.krəʊ.bɜːst/", forbidden: ["Wind", "Downdraft", "Rain"] },
        { word: "Heat Dome", ipa: "/ˈhiːt ˌdəʊm/", forbidden: ["Hot", "High Pressure", "Summer"] },
        { word: "Atmospheric River", ipa: "/ˌæt.məsˈfer.ɪk ˈrɪv.ər/", forbidden: ["Moisture", "Ocean", "Rain"] },
        { word: "Supercell", ipa: "/ˈsuː.pə.sel/", forbidden: ["Tornado", "Cloud", "Storm"] },
        { word: "Density Altitude", ipa: "/ˈden.sə.ti ˈæl.tɪ.tʃuːd/", forbidden: ["Temperature", "Thin Air", "Takeoff"] },
        { word: "Runway Inundation", ipa: "/ˈrʌn.weɪ ˌɪn.ʌnˈdeɪ.ʃən/", forbidden: ["Water", "Flood", "Closed"] },
        { word: "Hail Swath", ipa: "/ˈheɪl ˌswɒθ/", forbidden: ["Ice", "Damage", "Falling"] },
        { word: "Squall Line", ipa: "/ˈskwɔːl ˌlaɪn/", forbidden: ["Front", "Gusts", "Thunderstorm"] },
        { word: "Virga", ipa: "/ˈvɜː.ɡə/", forbidden: ["Precipitation", "Evaporate", "Ground"] },
        { word: "Windshear", ipa: "/ˈwɪnd.ʃɪər/", forbidden: ["Speed", "Direction", "Change"] },
        { word: "Holdover Time", ipa: "/ˈhəʊld.əʊ.vər ˌtaɪm/", forbidden: ["De-icing", "Wings", "Snow"] },
        { word: "Climate Adaptation", ipa: "/ˈklaɪ.mət ˌæd.æpˈteɪ.ʃən/", forbidden: ["Change", "Future", "Infrastructure"] }
      ]
    },
    debate: {
      title: "Activity 6: Aerodrome Crisis Shutdown Debate & Multi-Stakeholder Consensus",
      summary: "High-stakes operational roleplay debating airport closure criteria during an approaching convective supercell.",
      instructions: "A massive supercell cluster with embedded severe microbursts and hail is 25 NM from the aerodrome. Assume one of the three stakeholder roles below. Debate whether to suspend all runway operations immediately or keep one runway active for low-fuel diversions.",
      roles: [
        {
          title: "Role A: Ramp Operations Director",
          stance: "Demands immediate full shutdown of all ramps and runways to protect ground personnel from lightning strikes and prevent aircraft hail damage.",
          keyPoints: ["Lightning within 5 NM requires immediate suspension of apron refueling.", "High surface winds create catastrophic baggage container blowaway hazards."]
        },
        {
          title: "Role B: Lead Flight Dispatcher",
          stance: "Advocates keeping one runway open under ILS CAT II/III to accept three incoming international flights with critical fuel reserves before initiating diversion.",
          keyPoints: ["Diversion to alternate aerodromes will trigger regional airspace gridlock.", "Holding aircraft have only 25 minutes of contingency fuel remaining."]
        },
        {
          title: "Role C: Civil Aviation Safety Inspector",
          stance: "Enforces strict regulatory safety margins: if LLWAS detects windshear exceeding 15 knots, airport closure is mandatory by air law.",
          keyPoints: ["Regulatory liability rests on the aerodrome authority if an accident occurs in known windshear.", "Flight crew autonomy must be supported by conservative ATC guidance."]
        }
      ]
    }
  }
};

// ==========================================
// SESSION 2 DEFINITION: Sustainable Cities
// ==========================================
const s2Data = {
  session: "02",
  title: "Sustainable Cities & Low-Emission Mobility",
  objectives: {
    title: "Session 2 Objectives - Sustainable Cities & Low-Emission Mobility",
    summary: "Analyze low-emission urban mobility systems, sponge city architecture, multimodal airport transit hubs, double comparatives, and sustainable transport policy.",
    items: [
      {
        num: "01",
        title: "Sustainable Urban Design & Microclimate Concepts",
        desc: "Explain the Urban Heat Island effect, sponge city principles, and 15-minute urban planning using clear B2 sentence stems."
      },
      {
        num: "02",
        title: "Sponge City Engineering & Flood Absorption Lab",
        desc: "Analyze bioretention basins, permeable surfaces, and urban aquifer recharge via interactive video noticeboard analysis."
      },
      {
        num: "03",
        title: "Grammar Clinic: Double Comparatives & Contrast Connectors",
        desc: "Master double comparative structures (The more... the less...) and formal contrast connectors (whereas, nevertheless, despite)."
      },
      {
        num: "04",
        title: "Vocabulary Game: Collocation Matcher & Mobility Pyramid",
        desc: "Build active lexical accuracy by matching 10 compound mobility terms and ranking transport modes in the sustainability pyramid."
      },
      {
        num: "05",
        title: "Pair Urban Design Sprint: The 15-Minute Airport District",
        desc: "Design 3 low-emission transport interventions for an airport suburban corridor and deliver a 2-minute pitch with peer rubric."
      },
      {
        num: "06",
        title: "Multi-Stakeholder Policy Debate & Technical Mastery Quiz",
        desc: "Debate banning domestic flights under 2.5 hours where high-speed rail exists, followed by a 10-question technical self-scoring quiz."
      }
    ]
  },
  lessonPlan: {
    title: "Session 2 Lesson Plan - Sustainable Cities & Low-Emission Mobility (2 Hours)",
    summary: "A 2-hour university seminar combining urban innovation news scan, sponge city video lab, double comparative grammar clinic, collocation matcher game, pair design sprint, and a short-haul flight ban debate with technical mastery quiz.",
    items: [
      {
        part: "Part 1",
        title: "Urban Innovation News Scan & Oral Diagnostic",
        description: "Pairwise diagnostic warm-up comparing Urban Heat Islands, Sponge Cities, 15-Minute planning, and permeable pavements with sentence frames."
      },
      {
        part: "Part 2",
        title: "Technical Reading & Video Lab: Sponge Cities & Urban Flood Resilience",
        description: "Case study reading and video exploration of sponge city engineering, bioretention, and permeable aquifers with 3 guided paired discussion questions and debrief card."
      },
      {
        part: "Part 3",
        title: "Language Clinic: Double Comparatives & Contrast Connectors",
        description: "Targeted language clinic on proportional changes (The denser the network, the lower the emissions) and formal connecting words for contrast."
      },
      {
        part: "Part 4",
        title: "Interactive Vocabulary Game: Collocation Matcher & Mobility Pyramid",
        description: "Pair matching game linking 10 compound mobility collocations and ranking transit modes in the urban sustainability hierarchy."
      },
      {
        part: "Part 5",
        title: "Pair Urban Design Sprint: The 15-Minute Airport District",
        description: "Pairs re-engineer a congested suburban airport access corridor into an active multimodal district with a 3-point design decision table and deliver a 2-minute pitch with peer rubric."
      },
      {
        part: "Part 6",
        title: "Multi-Stakeholder Policy Debate & Technical Mastery Quiz",
        description: "Stakeholder consensus debate on banning short-haul domestic flights under 2.5h rail alternative, concluding with an interactive 10-question mastery quiz and final review."
      }
    ]
  },
  revision: {
    title: "Session 2: Sustainable Cities & Low-Emission Mobility",
    summary: "Review the 18 key terms for urban sustainability, multimodal transit integration, and low-carbon civil mobility.",
    terms: [
      { num: "01", term: "Sponge City", ipa: "/ˈspʌndʒ ˌsɪt.i/", def: "An urban planning model that uses nature-based infrastructure to absorb, store, and purify rainwater." },
      { num: "02", term: "Urban Heat Island (UHI)", ipa: "/ˌɜː.bən ˈhiːt ˌaɪ.lənd/", def: "A metropolitan area significantly warmer than surrounding rural areas due to human activities, concrete, and asphalt." },
      { num: "03", term: "15-Minute City", ipa: "/ˌfɪf.tiːn ˈmɪn.ɪt ˌsɪt.i/", def: "An urban planning concept where all daily resident necessities are accessible within a 15-minute walk or cycle." },
      { num: "04", term: "Permeable Pavement", ipa: "/ˈpɜː.mi.ə.bəl ˈpeɪv.mənt/", def: "Porous surfacing material allowing stormwater to seep through into underlying soils rather than generating surface runoff." },
      { num: "05", term: "Bioretention Basin", ipa: "/ˌbaɪ.əʊ.rɪˈten.ʃən ˌbeɪ.sən/", def: "A landscaped depression designed to slow, filter, and infiltrate stormwater runoff using vegetation and engineered soil." },
      { num: "06", term: "Intermodal Connectivity", ipa: "/ˌɪn.təˈməʊ.dəl kəˌnekˈtɪv.ə.ti/", def: "Seamless physical and digital integration between different transportation modes (air, high-speed rail, metro, bus)." },
      { num: "07", term: "Transit-Oriented Development (TOD)", ipa: "/ˈtræn.zɪt ˌɔː.ri.en.tɪd dɪˈvel.əp.mənt/", def: "High-density, mixed-use commercial and residential urban development concentrated around mass transit stations." },
      { num: "08", term: "Active Mobility Corridor", ipa: "/ˈæk.tɪv məʊˈbɪl.ə.ti ˌkɒr.ɪ.dɔːr/", def: "Dedicated, grade-separated pathways reserved exclusively for human-powered transport (walking, cycling, rollerblading)." },
      { num: "09", term: "Congestion Pricing", ipa: "/kənˈdʒes.tʃən ˌpraɪ.sɪŋ/", def: "A regulatory fee charged to drivers entering city centers during peak hours to curb traffic congestion and emissions." },
      { num: "10", term: "Low-Emission Zone (LEZ)", ipa: "/ˌləʊ ɪˈmɪʃ.ən ˌzəʊn/", def: "A designated geographic zone where polluting vehicles are banned or penalized to improve local air quality." },
      { num: "11", term: "Decarbonization Trajectory", ipa: "/diːˌkɑː.bən.aɪˈzeɪ.ʃən trəˈdʒek.tər.i/", def: "The scheduled path and timeline toward achieving net-zero greenhouse gas emissions across an industry or city." },
      { num: "12", term: "Multi-Modal Hub", ipa: "/ˌmʌl.tiˈməʊ.dəl ˌhʌb/", def: "A central passenger interchange allowing frictionless transfers between air travel, rail networks, and urban micro-mobility." },
      { num: "13", term: "Aquifer Recharge", ipa: "/ˈæk.wɪ.fər ˌriːˈtʃɑːdʒ/", def: "The hydrological process where surface water percolates downward to replenish underground groundwater reservoirs." },
      { num: "14", term: "Peak Runoff Attenuation", ipa: "/ˈpiːk ˌrʌn.ɒf əˌten.juˈeɪ.ʃən/", def: "The intentional buffering and delay of stormwater release into municipal sewers to prevent flood crests." },
      { num: "15", term: "Bioswale", ipa: "/ˈbaɪ.əʊ.sweɪl/", def: "Vegetated channels designed to concentrate and convey stormwater runoff while removing silt and pollutants." },
      { num: "16", term: "Last-Mile Micro-Mobility", ipa: "/ˌlɑːst ˈmaɪl ˈmaɪ.krəʊ məʊˈbɪl.ə.ti/", def: "Small, lightweight zero-emission vehicles (e-bikes, e-scooters) used for the final leg of a passenger's journey." },
      { num: "17", term: "District Cooling Network", ipa: "/ˈdɪs.trɪkt ˈkuː.lɪŋ ˌnet.wɜːk/", def: "A centralized system producing chilled water distributed via insulated underground pipes to cool urban buildings efficiently." },
      { num: "18", term: "Modal Split", ipa: "/ˈməʊ.dəl ˌsplɪt/", def: "The percentage of travelers using a particular type of transportation compared to the total passenger volume." }
    ]
  },
  overview: {
    title: "Sustainable Cities & Low-Emission Mobility",
    subtitle: "Sponge Cities, Multimodal Transit Integration & 15-Minute Urban Districts",
    badge: "Session Overview • Sustainable Cities & Urban Design",
    image: "images/ag_m2card2.jpg"
  },
  materials: {
    title: "Session 2 Study Materials: Sustainable Cities",
    summary: "Technical urban mobility dossiers, comparative structures, and transit decarbonization briefs."
  },
  lessonContent: {
    overview: {
      title: "Sustainable Cities & Low-Emission Mobility",
      subtitle: "Sponge Cities, Multimodal Transit Integration & 15-Minute Urban Districts",
      badge: "Session Overview • Sustainable Cities & Urban Design",
      image: "images/ag_m2card2.jpg"
    },
    hero: {
      title: "Sustainable Cities & Low-Emission Mobility",
      subtitle: "Sponge Cities, Multimodal Transit Integration & 15-Minute Urban Districts",
      image: "images/ag_m2card2.jpg"
    },
    openingSession: {
      title: "Activity 1: Urban Innovation News Scan & Oral Diagnostic",
      summary: "Pairwise diagnostic warm-up comparing sustainable urban design concepts with structured spoken sentence frames.",
      instructions: "In pairs, examine the sustainable urban headlines below. Take turns asking and answering the four diagnostic questions, using the provided sentence frames to structure your spoken answers.",
      newsPrompts: [
        "Major European capital expands its Low-Emission Zone to encompass all suburban highway corridors, banning pre-2015 diesel vehicles.",
        "Airport authority unveils direct High-Speed Rail terminal link, aiming to replace 65% of domestic connecting flights under 350 km.",
        "Metropolitan flood agency certifies first fully permeable airport service roadway, reducing peak stormwater runoff by 40%."
      ],
      diagnostic: {
        title: "Urban Sustainability Concepts Diagnostic Check",
        instructions: "Use the sentence stem to formulate your spoken answer before revealing the model explanation.",
        questions: [
          {
            id: 1,
            q: "What is the Urban Heat Island (UHI) effect, and what primary factors amplify it?",
            prompt: "The Urban Heat Island effect is caused by..., which results in...",
            answer: "The Urban Heat Island (UHI) effect occurs when metropolitan areas experience significantly higher ambient temperatures than surrounding rural zones. It is amplified by dark impermeable surfaces (asphalt and concrete) that absorb solar radiation, lack of vegetated canopy cooling (evapotranspiration), and waste heat emitted by motor traffic, air conditioning units, and industrial facilities."
          },
          {
            id: 2,
            q: "What core principles define a 'Sponge City'?",
            prompt: "Rather than channeling rainwater into storm sewers, a sponge city...",
            answer: "A sponge city abandons conventional 'fast-drainage' gray infrastructure in favor of nature-based solutions. It utilizes permeable pavements, bioswales, rain gardens, wetland parks, and underground retention basins to absorb, purify, and slowly release or reuse stormwater on-site, naturally attenuating peak flood waves and recharging groundwater aquifers."
          },
          {
            id: 3,
            q: "What is the concept behind Carlos Moreno's '15-Minute City'?",
            prompt: "The core premise of the 15-minute city is that residents can reach...",
            answer: "The 15-minute city is an urban planning paradigm proposing that every city resident should be able to fulfill six essential urban functions—living, working, supplying, caring, learning, and enjoying—within a 15-minute walk or bike ride from their front door, thereby eliminating automobile dependency, reducing transport emissions, and revitalizing local neighborhood squares."
          },
          {
            id: 4,
            q: "What is the difference between Permeable Paving and Conventional Asphalt?",
            prompt: "Conventional asphalt forms an impermeable barrier that..., whereas permeable paving features...",
            answer: "Conventional asphalt forms a sealed, non-porous crust that forces 100% of rainfall to become high-velocity surface runoff carrying motor oil and sediment into sewer systems. Permeable paving, by contrast, is engineered with open interconnected voids and an underlying gravel matrix that allows water to percolate directly into the subsoil, eliminating standing puddles and recharging the water table."
          }
        ]
      }
    },
    videoLab: {
      title: "Activity 2: Interactive Video Lab — Sponge Cities & Urban Flood Resilience",
      summary: "Video analysis of nature-based storm water absorption, bioretention, and urban drainage engineering.",
      instructions: "Watch the video case study on Sponge City architecture. Study the technical noticeboard, then discuss the three operational questions with your partner.",
      videoTitle: "How Sponge Cities Absorb Rainwater & Prevent Flooding",
      videoUrl: "https://www.youtube.com/embed/8mL25lC61Pc",
      youtubeUrl: "https://www.youtube.com/watch?v=8mL25lC61Pc",
      channel: "Civil Engineering & Urban Planning Review",
      concepts: [
        "Bioretention & Bioswales",
        "Permeable Pavement Hydraulics",
        "Subsurface Aquifer Recharge",
        "Peak Runoff Attenuation",
        "Nature-Based Green-Gray Hybrid Infrastructure"
      ],
      guidedQuestions: [
        {
          q: "1. How does green infrastructure reduce urban temperatures compared to concrete?",
          answer: "Vegetated roofs, urban tree canopies, and wetlands cool cities through evapotranspiration—the biological process by which plants absorb water through roots and evaporate it through leaf stomata, consuming solar energy as latent heat rather than converting it into sensible thermal air temperature."
        },
        {
          q: "2. Why is peak runoff attenuation more effective than building wider concrete drainage pipes?",
          answer: "Wider concrete pipes merely accelerate storm water downstream, dumping massive surges into rivers and causing catastrophic bottleneck floods in lower-lying districts. Attenuation delays release through retention ponds and permeable soils, shaving off the dangerous flood peak and allowing municipal sewers to discharge manageable flows steadily."
        },
        {
          q: "3. What challenges exist when retrofitting existing airport aprons and access roads with permeable materials?",
          answer: "Heavy commercial jet wheel loadings (often exceeding 70 tons per main gear strut) can crush standard porous pavers. Retrofits require heavy-duty engineered permeable concrete, geotextile sub-base filtration layers, and frequent vacuum-sweeping maintenance to prevent fine jet soot and rubber deposits from clogging the drainage pores."
        }
      ]
    },
    grammarClinic: {
      title: "Activity 3: Language Clinic — Double Comparatives & Concessive Contrast",
      summary: "Mastering proportional change structures and formal contrast markers for environmental policy discourse.",
      instructions: "Review the double comparative formulas and concessive contrast markers below. Complete the interactive sentence transformations and check your results.",
      patterns: [
        {
          rule: "Double Comparatives (Proportional Change)",
          formula: "The + comparative adjective/adverb + subject + verb, the + comparative + subject + verb",
          examples: [
            "The denser the mass transit grid, the lower the per-capita urban transport emissions.",
            "The more permeable the pavement surface, the less severe the flash flood crest."
          ]
        },
        {
          rule: "Concessive Contrast Signposts",
          formula: "Clause A + [whereas / while / nevertheless / despite + noun phrase] + Clause B",
          examples: [
            "High-speed rail requires heavy initial capital investment; nevertheless, it slashes operational corridor emissions by 85%.",
            "Whereas regional air travel offers rapid transit across water barriers, rail remains unmatched for high-density overland links."
          ]
        }
      ],
      drills: [
        {
          id: 1,
          prompt: "Combine into a Double Comparative: 'As cities become more walkable, private car usage declines rapidly.'",
          answer: "The more walkable a city becomes, the more rapidly private car usage declines."
        },
        {
          id: 2,
          prompt: "Combine using 'whereas': 'Electric buses generate zero tailpipe emissions in city streets. Diesel buses emit fine particulates and nitrogen oxides.'",
          answer: "Electric buses generate zero tailpipe emissions in city streets, whereas diesel buses emit fine particulates and nitrogen oxides."
        },
        {
          id: 3,
          prompt: "Combine using 'despite': 'The airport authority faced intense budgetary pressure. They installed a 50,000 m³ retention reservoir.'",
          answer: "Despite intense budgetary pressure, the airport authority installed a 50,000 m³ retention reservoir."
        }
      ]
    },
    vocabGame: {
      title: "Activity 4: Interactive Vocabulary Game — Collocation Matcher & Mobility Pyramid",
      summary: "Pair matching game linking 10 compound mobility collocations and ranking transit modes in the urban sustainability hierarchy.",
      instructions: "Step 1: Match the 10 transport prefixes on the left with their correct technical suffixes on the right. Step 2: In pairs, place the five transportation modes in their correct tier on the Mobility Pyramid (from most sustainable at the base to least sustainable at the apex).",
      collocations: [
        { id: 1, prefix: "Intermodal", suffix: "connectivity", full: "Intermodal connectivity", def: "Smooth transfer between different transport systems" },
        { id: 2, prefix: "Transit-oriented", suffix: "development", full: "Transit-oriented development", def: "Urban growth focused around transit stations" },
        { id: 3, prefix: "Active mobility", suffix: "corridor", full: "Active mobility corridor", def: "Dedicated pedestrian and cycling paths" },
        { id: 4, prefix: "Last-mile", suffix: "micro-mobility", full: "Last-mile micro-mobility", def: "Lightweight zero-emission transport for short links" },
        { id: 5, prefix: "Congestion", suffix: "pricing cordon", full: "Congestion pricing cordon", def: "Zone with entry charges during peak hours" },
        { id: 6, prefix: "Decarbonization", suffix: "trajectory", full: "Decarbonization trajectory", def: "Strategic path to net-zero carbon output" },
        { id: 7, prefix: "Subsurface", suffix: "aquifer recharge", full: "Subsurface aquifer recharge", def: "Replenishing groundwater through soil filtration" },
        { id: 8, prefix: "Peak runoff", suffix: "attenuation", full: "Peak runoff attenuation", def: "Delaying rainwater surges into sewer systems" },
        { id: 9, prefix: "Urban heat", suffix: "mitigation", full: "Urban heat mitigation", def: "Using trees and cool roofs to lower city temps" },
        { id: 10, prefix: "Pedestrian", suffix: "priority zone", full: "Pedestrian priority zone", def: "Street sections where walkers have right-of-way" }
      ],
      pyramid: {
        tiers: [
          { level: "Apex (Tier 4)", mode: "Private Single-Occupancy Fossil Vehicles", role: "Highest energy consumption & emissions per passenger-km; restrict via pricing" },
          { level: "Upper (Tier 3)", mode: "Shared Electric Mobility & Taxis", role: "Flexible on-demand transit for non-standard routes & night shifts" },
          { level: "Middle (Tier 2)", mode: "Mass High-Capacity Rail & Electric Bus Rapid Transit (BRT)", role: "High-volume arterial passenger corridors with zero corridor emissions" },
          { level: "Base (Tier 1)", mode: "Active Mobility: Walking, Cycling, Wheelchairs", role: "100% zero emissions, minimal space footprint, highest public health dividend" }
        ]
      }
    },
    designSprint: {
      title: "Activity 5: Pair Urban Design Sprint — 'The 15-Minute Airport District'",
      summary: "Collaborative spatial engineering: transform a congested 5km airport access highway into an active multimodal district, with a 2-minute pitch and peer rubric.",
      instructions: "Work in pairs. You are urban transport planners commissioned by the metropolitan transport council. Review the brief below for the 'Corridor 21' airport artery. Formulate three concrete infrastructure interventions to transition the corridor from 85% car reliance to 70% public/active transit. Prepare a 2-minute pitch.",
      brief: {
        location: "Corridor 21: 5.2 km suburban access highway connecting Airport Terminal 1 to the Central Metro terminus.",
        currentStatus: "4-lane asphalt highway; 45,000 vehicles daily; 82% single-occupancy cars; 38-minute average commute baseline; Zero dedicated bike paths; High surface runoff causing localized road flooding.",
        targetKPIs: "1. Reduce peak motor vehicle trips by 35% within 3 years. 2. Introduce 100% segregated active mobility. 3. Transform 40% of impermeable road verges into bioretention bioswales."
      },
      deliverables: [
        "Intervention 1: High-capacity mass transit integration (e.g. Dedicated Bus Rapid Transit lane or Light Rail spur).",
        "Intervention 2: Active mobility infrastructure (e.g. Continuous shaded cycleway with e-bike charging docks).",
        "Intervention 3: Green-gray sponge engineering (e.g. Permeable service lanes and roadside stormwater bioswales)."
      ],
      rubric: {
        title: "Peer Observer Active Listening Rubric (Student B)",
        criteria: [
          { name: "Vocabulary Integration", target: "Uses target terms (modal split, TOD, permeable paving, last-mile micro-mobility)." },
          { name: "Grammar Accuracy", target: "Employs at least one double comparative and one concessive marker correctly." },
          { name: "Feasibility & Scope", target: "Presents realistic infrastructure solutions aligned with the 3 project KPIs." },
          { name: "Pitch Fluency", target: "Maintains engaging professional delivery within the 2-minute limit." }
        ]
      }
    },
    policyDebate: {
      title: "Activity 6: Multi-Stakeholder Policy Debate & Technical Mastery Quiz",
      summary: "Formal policy debate on banning short-haul domestic flights under 2.5h rail alternative, concluding with an interactive 10-question mastery quiz.",
      instructions: "Debate the following motion: 'This assembly resolves that all domestic commercial passenger flights where a direct high-speed rail journey under 2.5 hours exists shall be prohibited.' Review your assigned stakeholder position, then debate for 15 minutes before completing the 10-question mastery quiz.",
      roles: [
        {
          title: "Role A: Regional Airport Managing Director",
          stance: "Opposes the ban: Argues that domestic feeder flights are vital for long-haul international hub connectivity, regional employment, and carrier financial viability.",
          keyPoints: ["Feeder passengers transfer directly to intercontinental flights without taking city luggage.", "Banning flights harms regional economic competitiveness and airport slot valuation."]
        },
        {
          title: "Role B: High-Speed Rail Authority Spokesperson",
          stance: "Supports the ban: Asserts that high-speed trains emit 95% less CO₂ per passenger-km than short jets and offer city-center-to-city-center door-to-door parity.",
          keyPoints: ["Trains arrive in central stations, eliminating 45-minute airport security and luggage wait times.", "Rail capacity can be scaled up rapidly with modern double-deck rolling stock."]
        },
        {
          title: "Role C: Regional Climate Action NGO Leader",
          stance: "Demands an even stricter ban (up to 4.5 hours of rail journey time) combined with mandatory carbon pricing on business aviation.",
          keyPoints: ["Short-haul flights spend up to 40% of their total fuel in the energy-intensive climb phase.", "Only bold regulatory mandates compel modal shifts in passenger travel behavior."]
        }
      ],
      quiz: [
        {
          id: 1,
          q: "What is the primary physical cause of the Urban Heat Island effect?",
          options: ["High concentration of industrial chimneys", "Solar absorption by dark impermeable surfaces and lack of vegetation", "Increased carbon dioxide density at ground level", "Excessive domestic heating during summer months"],
          answer: 1
        },
        {
          id: 2,
          q: "How does a Sponge City handle heavy stormwater compared to conventional civil drainage?",
          options: ["By pumping runoff into deep underground caverns", "By evaporating water with thermal street heating", "By using bioretention and permeable surfaces to absorb and filter water locally", "By piping water directly into the nearest river as rapidly as possible"],
          answer: 2
        },
        {
          id: 3,
          q: "What is the core target of the '15-Minute City' urban planning concept?",
          options: ["Limiting all car journeys to 15 minutes", "Ensuring residents access daily necessities within a 15-minute walk or cycle", "Building train stations every 15 minutes along a corridor", "Providing free public transit for the first 15 minutes of every trip"],
          answer: 1
        },
        {
          id: 4,
          q: "Which grammatical sentence demonstrates a correct Double Comparative?",
          options: ["The more denser transit networks are, the lowest per-capita emissions become.", "The denser the transit network, the lower the per-capita emissions.", "As transit networks are denser, so the emissions become lower.", "More dense transit networks make lesser per-capita emissions."],
          answer: 1
        },
        {
          id: 5,
          q: "What does 'Transit-Oriented Development' (TOD) specifically emphasize?",
          options: ["Building high-density mixed-use neighborhoods around mass transit nodes", "Constructing multi-lane expressways across metropolitan perimeters", "Subsidizing private electric vehicle purchases in suburban developments", "Expanding park-and-ride parking garages at highway exits"],
          answer: 0
        },
        {
          id: 6,
          q: "What is the operational function of 'Peak Runoff Attenuation'?",
          options: ["Maximizing the peak velocity of water discharge into municipal sewers", "Delaying and buffering stormwater flow to prevent drainage system overload", "Measuring the chemical acidity of rainwater runoff from airport runways", "Allowing floodwaters to submerge runways temporarily without alerting ATC"],
          answer: 1
        },
        {
          id: 7,
          q: "Which mode occupies Tier 1 (the foundational base) of the Sustainable Mobility Pyramid?",
          options: ["High-speed electric passenger trains", "Electric autonomous taxis", "Active mobility: walking, cycling, and wheeled mobility", "Shared electric micro-buses"],
          answer: 2
        },
        {
          id: 8,
          q: "What does 'Intermodal Connectivity' mean in airport infrastructure?",
          options: ["Connecting two airport runways with high-speed taxiways", "Seamless integration between air, rail, metro, and local bus transit", "Allowing both commercial passenger and freight flights on one apron", "Providing simultaneous internet connectivity across all passenger terminals"],
          answer: 1
        },
        {
          id: 9,
          q: "What is the main environmental benefit of replacing short-haul flights with High-Speed Rail?",
          options: ["Rail eliminates all ticket fares for inter-city travel", "Trains use 100% solar power at all hours of the day", "Trains reduce per-passenger corridor carbon emissions by up to 85–95%", "High-speed rail requires no track maintenance over 30 years"],
          answer: 2
        },
        {
          id: 10,
          q: "Choose the correct concessive connector: '____ high construction costs, the city built a network of stormwater bioswales.'",
          options: ["Whereas", "Nevertheless", "Despite", "While"],
          answer: 2
        }
      ]
    }
  }
};

// Apply to courseData["2"].sessions
if (!courseData["2"]) courseData["2"] = { sessions: {} };
if (!courseData["2"].sessions) courseData["2"].sessions = {};
courseData["2"].sessions["1"] = s1Data;
courseData["2"].sessions["2"] = s2Data;

// Apply to courseData.ag["2"].sessions
if (!courseData.ag) courseData.ag = {};
if (!courseData.ag["2"]) courseData.ag["2"] = { sessions: {} };
if (!courseData.ag["2"].sessions) courseData.ag["2"].sessions = {};
courseData.ag["2"].sessions["1"] = s1Data;
courseData.ag["2"].sessions["2"] = s2Data;

// Write back to course-data.js cleanly
fs.writeFileSync(courseDataPath, `// ENAC GSEA English Programme - Master Course Data\n// Generated & Maintained by GSEA Platform\n\nconst courseData = ${JSON.stringify(courseData, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = courseData;\n}\nif (typeof window !== 'undefined') {\n  window.courseData = courseData;\n}\n`, 'utf8');

console.log("✅ Successfully updated courseData for S1 AG M2 S1 and S2!");
