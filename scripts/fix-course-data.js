/**
 * scripts/fix-course-data.js
 * Updates data/course-data.js with complete, rich, communicative data across:
 * - AG M2 S1 & S2
 * - AT / AAS M2 S1 & S2
 * - Top-level cd['2'] S1 & S2
 * Ensures both def and definition, desc and description, full overview, and full materials.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'data', 'course-data.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Load current COURSE_DATA
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);
const cd = sandbox.COURSE_DATA || sandbox.window.COURSE_DATA;

// --- AG Module 2 Session 1 Enrichment ---
const agM2S1Overview = {
  title: "Extreme Weather & Atmospheric Hazards",
  subtitle: "Climate Change, Extreme Weather & Community Resilience",
  badge: "Session 01 • Communicative General English",
  image: "images/ag_m2card1.jpg",
  intro: "In this communicative session, students explore the real-world impacts of extreme weather, heatwaves, flash flooding, and atmospheric hazards on communities and infrastructure. Through personal storytelling, photo analysis, and collaborative policy role-play, students practice expressing cause, effect, and urgency in clear B1/B2 English.",
  whyItMatters: "Extreme weather events are increasing in frequency and severity across Europe and worldwide. Engineering and aviation professionals must be able to communicate hazard data, evaluate environmental risks, and present actionable adaptation solutions to international stakeholders with clarity and confidence.",
  keyTerms: [
    { term: "Global Warming", ipa: "/ˈɡləʊ.bəl ˈwɔː.mɪŋ/", definition: "Long-term heating of Earth's climate system driven by human fossil fuel burning.", def: "Long-term heating of Earth's climate system driven by human fossil fuel burning." },
    { term: "Carbon Footprint", ipa: "/ˌkɑː.bən ˈfʊt.prɪnt/", definition: "Total greenhouse gas emissions caused directly and indirectly by an individual, event, or organization.", def: "Total greenhouse gas emissions caused directly and indirectly by an individual, event, or organization." },
    { term: "Flash Flood", ipa: "/ˈflæʃ ˌflʌd/", definition: "A sudden, violent flood that occurs within a few hours of heavy rainfall.", def: "A sudden, violent flood that occurs within a few hours of heavy rainfall." },
    { term: "Heatwave", ipa: "/ˈhiːt.weɪv/", definition: "A prolonged period of abnormally hot and humid weather affecting public health and power grids.", def: "A prolonged period of abnormally hot and humid weather affecting public health and power grids." },
    { term: "Atmospheric Hazard", ipa: "/ˌæt.məsˈfer.ɪk ˈhæz.əd/", definition: "A dangerous natural weather event in the atmosphere such as a cyclone, severe wind shear, or microburst.", def: "A dangerous natural weather event in the atmosphere such as a cyclone, severe wind shear, or microburst." },
    { term: "Renewable Energy", ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/", definition: "Energy derived from natural sources that replenish faster than they are consumed, like wind and solar.", def: "Energy derived from natural sources that replenish faster than they are consumed, like wind and solar." },
    { term: "Climate Resilience", ipa: "/ˈklaɪ.mət rɪˈzɪl.jəns/", definition: "The capacity of a community or system to anticipate, prepare for, and recover from hazardous climate events.", def: "The capacity of a community or system to anticipate, prepare for, and recover from hazardous climate events." },
    { term: "Adaptation Strategy", ipa: "/ˌæd.æpˈteɪ.ʃən ˈstræt.ə.dʒi/", definition: "Practical adjustments in natural or human systems to moderate harm from climate impacts.", def: "Practical adjustments in natural or human systems to moderate harm from climate impacts." },
    { term: "Greenhouse Effect", ipa: "/ˈɡriːn.haʊs ɪˌfekt/", definition: "The warming of Earth's surface caused by atmospheric gases trapping solar heat radiation.", def: "The warming of Earth's surface caused by atmospheric gases trapping solar heat radiation." },
    { term: "Drought", ipa: "/draʊt/", definition: "A prolonged, continuous period of deficient rainfall resulting in acute water shortages.", def: "A prolonged, continuous period of deficient rainfall resulting in acute water shortages." }
  ],
  speakingTask: {
    title: "3-Group Spoken Discussion & Presentation: Climate Action Decisions",
    instructions: "Divide the class into 3 working groups. Each group analyzes one critical statement below, debates potential solutions, and presents a 2-minute spoken briefing to the class using today's vocabulary.",
    requirements: [
      "Use at least 4 of today's 10 useful words.",
      "Give at least two concrete reasons or real-world examples to support your group's position.",
      "Ensure every team member contributes during your 2-minute spoken summary."
    ],
    statements: {
      group1: "Immediate financial investment in storm barriers and flood defenses must take absolute priority over long-term carbon reduction targets.",
      group2: "Municipal governments should introduce mandatory water-rationing and heatwave work stoppages during red-level weather alerts.",
      group3: "Aviation and transport hubs must be legally required to reach net-zero carbon operations within 5 years, regardless of economic cost."
    },
    usefulPhrases: [
      "Our group discussed whether...",
      "We strongly agree / disagree with this statement because...",
      "In our opinion, one major factor is...",
      "To summarise our group's main argument..."
    ]
  }
};

const agM2S1Materials = {
  title: "Additional Study Materials & Multimedia Resources",
  summary: "Curated video analysis, current affairs case studies, and grammar guidelines exploring climate hazards and disaster resilience.",
  videos: [
    {
      title: "Extreme Weather Explained: Why Are Heatwaves & Floods Intensifying?",
      channel: "World Meteorological Organization",
      videoId: "3j3_iPskk4c",
      watchUrl: "https://www.youtube.com/watch?v=3j3_iPskk4c",
      embedUrl: "https://www.youtube-nocookie.com/embed/3j3_iPskk4c",
      duration: "06:15",
      caption: "Scientific analysis of atmospheric moisture retention and jet stream stalling during extreme summer heatwaves."
    },
    {
      title: "How Cities Are Adapting to Rising Flash Flood Risks",
      channel: "Civil Engineering Briefings",
      videoId: "m1n_iQxP6eA",
      watchUrl: "https://www.youtube.com/watch?v=m1n_iQxP6eA",
      embedUrl: "https://www.youtube-nocookie.com/embed/m1n_iQxP6eA",
      duration: "08:42",
      caption: "Overview of flood-retention basins, storm barrier infrastructure, and permeable drainage across European metropolitan areas."
    },
    {
      title: "Aviation & Extreme Weather: Wind Shear, Microbursts & Heat",
      channel: "Flight Safety International",
      videoId: "K9sT7mUqGZc",
      watchUrl: "https://www.youtube.com/watch?v=K9sT7mUqGZc",
      embedUrl: "https://www.youtube-nocookie.com/embed/K9sT7mUqGZc",
      duration: "07:30",
      caption: "Operational impact of extreme density altitude and convective storms on takeoff performance and airport operations."
    }
  ],
  articles: [
    {
      topic: "Climate Resilience",
      sourceTag: "European Environment Agency",
      readTime: "Estimated read: 4 mins",
      heading: "Managing Extreme Summer Temperatures: Urban Heat Action Plans Across Europe",
      snippet: "Municipal health authorities across Southern and Western Europe are implementing real-time heat warning systems, shaded public corridors, and emergency water-misting stations to safeguard vulnerable citizens during prolonged 40°C+ heatwaves.",
      url: "https://www.eea.europa.eu"
    },
    {
      topic: "Infrastructure Protection",
      sourceTag: "Reuters Climate Wire",
      readTime: "Estimated read: 5 mins",
      heading: "Rethinking Storm Drainage: €50M Adaptation Funds Deployed for Flash Flood Mitigation",
      snippet: "Engineers and regional planners are retrofitting highway drainage networks and airport runoffs with automated floodgates and bioretention basins to withstand sudden 100mm convective rainstorms.",
      url: "https://www.reuters.com"
    }
  ],
  grammar: {
    title: "Language Clinic: Conditionals for Cause, Effect & Urgency",
    points: [
      {
        rule: "First Conditional (Real Present / Future Possibility)",
        structure: "If + present simple, will / can / must + verb",
        example: "If temperatures continue to rise, summer runway operations will require weight reductions.",
        note: "Used for real, probable future operational outcomes."
      },
      {
        rule: "Second Conditional (Hypothetical Proposals & Policy Debates)",
        structure: "If + past simple, would / could / might + verb",
        example: "If we invested €50M in sponge city drainage, flash flood damage would decrease significantly.",
        note: "Ideal for discussing proposed solutions, recommendations, and policy options."
      }
    ]
  },
  resources: [
    { title: "IPCC Climate Assessment Summary", desc: "Key summary for engineers and infrastructure policymakers.", link: "https://www.ipcc.ch" },
    { title: "European Storm Forecast & Warning Center", desc: "Interactive convective storm alerts and meteorological tracking.", link: "https://www.estofex.org" }
  ]
};

// --- AG Module 2 Session 2 Enrichment ---
const agM2S2Overview = {
  title: "Sustainable Cities & Low-Emission Mobility",
  subtitle: "Urban Heat Islands, 15-Minute Cities & Green Transit",
  badge: "Session 02 • Communicative General English",
  image: "images/ag_m2card2.jpg",
  intro: "This session focuses on sustainable urban living, low-emission mobility, and green city design. Students contrast car-dominated urban sprawl with pedestrian-friendly superblocks, practice persuasive proposals, master transport collocations, pitch street redesigns, and debate the total pedestrianization of metropolitan city centers.",
  whyItMatters: "Cities consume over two-thirds of the world's energy and account for more than 70% of global CO2 emissions. Reimagining urban mobility through intermodal transit, active transport, and green public spaces is central to European sustainability targets and international climate agreements.",
  keyTerms: [
    { term: "Sponge City", ipa: "/spʌndʒ ˈsɪt.i/", definition: "An urban area designed to naturally absorb, capture, and reuse rainwater through green infrastructure.", def: "An urban area designed to naturally absorb, capture, and reuse rainwater through green infrastructure." },
    { term: "Urban Heat Island (UHI)", ipa: "/ˈɜː.bən hiːt ˈaɪ.lənd/", definition: "A metropolitan area significantly warmer than surrounding rural areas due to human activity and dense concrete.", def: "A metropolitan area significantly warmer than surrounding rural areas due to human activity and dense concrete." },
    { term: "15-Minute City", ipa: "/ˌfɪf.tiːn ˈmɪn.ɪt ˈsɪt.i/", definition: "An urban planning model where daily necessities are reachable within a 15-minute walk or bike ride.", def: "An urban planning model where daily necessities are reachable within a 15-minute walk or bike ride." },
    { term: "Permeable Pavement", ipa: "/ˈpɜː.mi.ə.bəl ˈpeɪv.mənt/", definition: "Porous surfacing material allowing storm runoff to infiltrate directly into the soil below.", def: "Porous surfacing material allowing storm runoff to infiltrate directly into the soil below." },
    { term: "Bioretention Basin", ipa: "/ˌbaɪ.əʊ.rɪˈten.ʃən ˈbeɪ.sən/", definition: "A vegetated depression engineered to slow, filter, and absorb stormwater runoff.", def: "A vegetated depression engineered to slow, filter, and absorb stormwater runoff." },
    { term: "Intermodal Connectivity", ipa: "/ˌɪn.təˈməʊ.dəl kəˌnekˈtɪv.ə.ti/", definition: "Seamless physical and digital integration across cycling, rail, buses, and aviation networks.", def: "Seamless physical and digital integration across cycling, rail, buses, and aviation networks." },
    { term: "Transit-Oriented Development (TOD)", ipa: "/ˈtræn.zɪt ˌɔː.ri.en.tɪd/", definition: "Urban planning maximizing residential and business spaces within easy walking distance of public transit.", def: "Urban planning maximizing residential and business spaces within easy walking distance of public transit." },
    { term: "Active Mobility Corridor", ipa: "/ˈæk.tɪv məʊˈbɪl.ə.ti ˈkɒr.ɪ.dɔː/", definition: "Dedicated, safe street lanes reserved strictly for pedestrians, cyclists, and light personal e-vehicles.", def: "Dedicated, safe street lanes reserved strictly for pedestrians, cyclists, and light personal e-vehicles." },
    { term: "Congestion Pricing", ipa: "/kənˈdʒes.tʃən ˈpraɪ.sɪŋ/", definition: "A toll charged to private motorists entering dense urban centers during peak traffic hours.", def: "A toll charged to private motorists entering dense urban centers during peak traffic hours." },
    { term: "Low-Emission Zone (LEZ)", ipa: "/ləʊ ɪˈmɪʃ.ən zəʊn/", definition: "A legally defined city zone restricting or penalizing older, highly polluting motor vehicles.", def: "A legally defined city zone restricting or penalizing older, highly polluting motor vehicles." }
  ],
  speakingTask: {
    title: "3-Group Spoken Discussion & Presentation: Future City Redesign",
    instructions: "Divide into 3 groups. Each group examines one urban mobility proposal below, weighs public resistance against environmental benefits, and delivers a 2-minute spoken pitch with recommendations.",
    requirements: [
      "Use at least 4 of today's 10 useful words.",
      "Give at least two concrete reasons or real-world examples to support your group's position.",
      "Ensure every team member contributes during your 2-minute spoken summary."
    ],
    statements: {
      group1: "All private combustion-engine vehicles should be completely banned from European city centers by 2028.",
      group2: "Public transit within metropolitan zones must be entirely fare-free and subsidized through higher corporate parking taxes.",
      group3: "Urban planning should legally mandate that every essential service be reachable within a 15-minute walk or bike ride."
    },
    usefulPhrases: [
      "Our group considered the proposal to...",
      "From our perspective, the strongest argument is...",
      "While some citizens may be reluctant, we believe...",
      "To conclude our proposal, we recommend..."
    ]
  }
};

const agM2S2Materials = {
  title: "Additional Study Materials & Multimedia Resources",
  summary: "Curated video insights, urban case studies, and persuasive language frameworks for sustainable mobility and low-carbon transport.",
  videos: [
    {
      title: "The 15-Minute City Concept: Urban Utopia or Practical Solution?",
      channel: "Urban Planning Explained",
      videoId: "m9L0f5mS4eY",
      watchUrl: "https://www.youtube.com/watch?v=m9L0f5mS4eY",
      embedUrl: "https://www.youtube-nocookie.com/embed/m9L0f5mS4eY",
      duration: "09:12",
      caption: "How European capitals like Paris and Barcelona are redesigning neighborhoods to eliminate daily motorized car commutes."
    },
    {
      title: "How Barcelona Superblocks Reclaimed Streets for Citizens",
      channel: "Streetfilm Documentaries",
      videoId: "ZORzsubQA_8",
      watchUrl: "https://www.youtube.com/watch?v=ZORzsubQA_8",
      embedUrl: "https://www.youtube-nocookie.com/embed/ZORzsubQA_8",
      duration: "08:24",
      caption: "Transforming 9-block intersections into green pedestrian plazas with reduced air and noise pollution."
    },
    {
      title: "Intermodal Transport Hubs: Connecting Air, Rail & Micro-Mobility",
      channel: "Global Transit Innovation",
      videoId: "W6bT8nS7Z3A",
      watchUrl: "https://www.youtube.com/watch?v=W6bT8nS7Z3A",
      embedUrl: "https://www.youtube-nocookie.com/embed/W6bT8nS7Z3A",
      duration: "06:45",
      caption: "Airport surface access strategies: replacing short-haul domestic flights with high-speed rail connections."
    }
  ],
  articles: [
    {
      topic: "Urban Transition",
      sourceTag: "C40 Cities Network",
      readTime: "Estimated read: 4 mins",
      heading: "Low-Emission Zones Slash Toxic Nitrogen Dioxide Levels by 40% Across 30 European Metropolises",
      snippet: "Comprehensive emissions monitoring reveals that prioritizing electric buses, bike superhighways, and pedestrian zones has directly reduced respiratory illnesses and road congestion.",
      url: "https://www.c40.org"
    },
    {
      topic: "Mobility Innovation",
      sourceTag: "Clean Transport Digest",
      readTime: "Estimated read: 5 mins",
      heading: "Active Mobility Superhighways: How Protected Cycle Lanes Transformed Commuting Habits",
      snippet: "Municipal case study analyzing how investing in continuous, well-lit active travel corridors convinced over 250,000 suburban commuters to leave their cars at home.",
      url: "https://www.transportenvironment.org"
    }
  ],
  grammar: {
    title: "Language Clinic: Making Constructive Proposals & Recommendations",
    points: [
      {
        rule: "Constructive Suggestions with 'Consider' / 'What if'",
        structure: "Why don't we consider + -ing / What if we were to + verb",
        example: "Why don't we consider pedestrianizing the central avenue during peak morning hours?",
        note: "Polite, collaborative framing suitable for workplace negotiations."
      },
      {
        rule: "Strong Diplomatic Recommendations",
        structure: "It would be far more effective to + verb / We strongly recommend that...",
        example: "It would be far more effective to expand the tram network before introducing congestion charges.",
        note: "Emphasizes practical logic without sounding overly aggressive."
      }
    ]
  },
  resources: [
    { title: "European Commission Clean Urban Transport", desc: "Policy directives and funding frameworks for green city mobility.", link: "https://transport.ec.europa.eu" },
    { title: "Barcelona Superblock Case Study", desc: "Detailed architectural and environmental impact report.", link: "https://ajuntament.barcelona.cat" }
  ]
};

// --- AT / AAS Module 2 Session 2 Enrichment ---
const atM2S2Overview = {
  title: "Aircraft Anatomy: Structure & Systems",
  subtitle: "Airframe Components, Control Surfaces & Powerplant Integration",
  badge: "Session 02 • Technical English",
  image: "images/aas_m2card2.jpg",
  intro: "In this technical English session, students master the essential structural anatomy and operating systems of modern commercial aircraft. Students learn to describe airframe sections, flight control surfaces, engine nacelles, and landing gear with spatial accuracy, identify mechanical discrepancies in technical reports, and practice communicative B2 terminology.",
  whyItMatters: "Clear, standardized anatomical terminology is vital across aircraft maintenance, flight testing, and international airworthiness certification. Precision in naming structural components and describing spatial relationships prevents communication errors in safety-critical operations.",
  keyTerms: [
    { term: "Fuselage", ipa: "/ˈfjuː.zə.lɑːʒ/", definition: "The central main body structure of an aircraft holding passengers, flight crew, and cargo.", def: "The central main body structure of an aircraft holding passengers, flight crew, and cargo." },
    { term: "Empennage", ipa: "/ˌɒm.pəˈnɑːʒ/", definition: "The tail assembly of an aircraft, typically consisting of the vertical fin, rudder, horizontal stabilizer, and elevators.", def: "The tail assembly of an aircraft, typically consisting of the vertical fin, rudder, horizontal stabilizer, and elevators." },
    { term: "Wing Spar", ipa: "/wɪŋ spɑː/", definition: "The primary longitudinal structural beam running spanwise through the wing to support bending loads.", def: "The primary longitudinal structural beam running spanwise through the wing to support bending loads." },
    { term: "Rudder", ipa: "/ˈrʌd.ər/", definition: "The primary flight control surface hinged to the vertical stabilizer, controlling aircraft yaw.", def: "The primary flight control surface hinged to the vertical stabilizer, controlling aircraft yaw." },
    { term: "Elevator", ipa: "/ˈel.ɪ.veɪ.tər/", definition: "The horizontal flight control surface hinged to the stabilizer, controlling aircraft pitch.", def: "The horizontal flight control surface hinged to the stabilizer, controlling aircraft pitch." },
    { term: "Aileron", ipa: "/ˈeɪ.lə.rɒn/", definition: "A hinged control surface on the trailing edge of each wing tip, controlling aircraft roll.", def: "A hinged control surface on the trailing edge of each wing tip, controlling aircraft roll." },
    { term: "Slats & Flaps", ipa: "/slæts ænd flæps/", definition: "High-lift aerodynamic devices deployed on leading and trailing wing edges to increase lift during takeoff and landing.", def: "High-lift aerodynamic devices deployed on leading and trailing wing edges to increase lift during takeoff and landing." },
    { term: "Cowling", ipa: "/ˈkaʊ.lɪŋ/", definition: "The removable metal or composite fairing covering an aircraft engine for streamlining and cooling.", def: "The removable metal or composite fairing covering an aircraft engine for streamlining and cooling." },
    { term: "Landing Gear Assembly", ipa: "/ˈlæn.dɪŋ ɡɪər əˌsem.bli/", definition: "The undercarriage structural system of struts, shock absorbers, wheels, and brakes supporting the aircraft on the ground.", def: "The undercarriage structural system of struts, shock absorbers, wheels, and brakes supporting the aircraft on the ground." },
    { term: "Radome", ipa: "/ˈreɪ.dəʊm/", definition: "The weatherproof forward nose cone enclosing the weather radar antenna while remaining transparent to radio waves.", def: "The weatherproof forward nose cone enclosing the weather radar antenna while remaining transparent to radio waves." }
  ],
  speakingTask: {
    title: "3-Group Technical Discussion & Briefing: Airframe System Design",
    instructions: "Divide into 3 groups. Each group investigates one airframe design challenge below, identifies potential aerodynamic and maintenance impacts, and delivers a 2-minute technical briefing to the class.",
    requirements: [
      "Use at least 4 of today's 10 technical terms.",
      "Provide at least two functional or safety explanations.",
      "Ensure all group members speak during the 2-minute briefing."
    ],
    statements: {
      group1: "Explain how structural composite materials in the fuselage and wings reduce fuel burn while changing maintenance inspection methods.",
      group2: "Describe the aerodynamic trade-offs between high-lift devices (slats/flaps) during low-speed approach and clean cruise configuration.",
      group3: "Analyze how fly-by-wire flight control surfaces (ailerons, spoilers, elevators) provide envelope protection during extreme turbulence."
    },
    usefulPhrases: [
      "Our group focused on the structural role of...",
      "From an aerodynamic perspective, this component allows...",
      "In terms of safety and maintenance, the primary advantage is...",
      "To conclude our briefing, this system functions by..."
    ]
  }
};

const atM2S2Materials = {
  title: "Additional Study Materials & Technical References",
  summary: "Curated video labs, airframe structural diagrams, and technical grammar clinics for aircraft systems and component maintenance.",
  videos: [
    {
      title: "Commercial Aircraft Anatomy: Structural Layout & Load Distribution",
      channel: "AeroTechnical Training",
      videoId: "7w_uPsk3180",
      watchUrl: "https://www.youtube.com/watch?v=7w_uPsk3180",
      embedUrl: "https://www.youtube-nocookie.com/embed/7w_uPsk3180",
      duration: "08:15",
      caption: "Walkthrough of airframe frames, stringers, skin panels, and wing box carry-through structures."
    },
    {
      title: "Flight Control Systems: Primary vs Secondary Surfaces",
      channel: "Aviation Maintenance Hub",
      videoId: "8qNk9mPsk7w",
      watchUrl: "https://www.youtube.com/watch?v=8qNk9mPsk7w",
      embedUrl: "https://www.youtube-nocookie.com/embed/8qNk9mPsk7w",
      duration: "07:40",
      caption: "Hydraulic and fly-by-wire actuation of ailerons, elevators, rudders, spoilers, and high-lift flaps."
    },
    {
      title: "Modern Aircraft Undercarriage & Retraction Systems",
      channel: "Aeronautical Engineering Review",
      videoId: "5zKp1mUsk8A",
      watchUrl: "https://www.youtube.com/watch?v=5zKp1mUsk8A",
      embedUrl: "https://www.youtube-nocookie.com/embed/5zKp1mUsk8A",
      duration: "06:50",
      caption: "Detailed inspection of oleo-pneumatic struts, shimmy dampers, multi-disc carbon brakes, and anti-skid valves."
    }
  ],
  articles: [
    {
      topic: "Structural Materials",
      sourceTag: "EASA Safety Review",
      readTime: "Estimated read: 4 mins",
      heading: "Composite Airframes in Commercial Service: Inspection Criteria and Damage Tolerance",
      snippet: "A technical overview of carbon-fiber reinforced polymer (CFRP) usage in fuselage barrels and wing structures, reviewing non-destructive testing (NDT) techniques for impact delamination.",
      url: "https://www.easa.europa.eu"
    },
    {
      topic: "Systems Engineering",
      sourceTag: "Flight International Archive",
      readTime: "Estimated read: 5 mins",
      heading: "Next-Generation Fly-By-Wire Architecture: Distributed Electro-Hydrostatic Actuation",
      snippet: "How replacing central hydraulic loops with localized electro-hydrostatic actuators (EHAs) optimizes flight control reliability and reduces empty airframe weight.",
      url: "https://www.flightglobal.com"
    }
  ],
  grammar: {
    title: "Technical Grammar: Spatial Prepositions & Functional Passives",
    points: [
      {
        rule: "Precise Spatial Prepositions in Engineering Descriptions",
        structure: "Located [forward of / aft of / outboard of / adjacent to / flush with]",
        example: "The weather radar transceiver is housed inside the radome forward of the pressure bulkhead.",
        note: "Crucial for precise component positioning in maintenance manuals."
      },
      {
        rule: "Functional Passive Voice for System Descriptions",
        structure: "Subject + is / are + past participle (+ by / through)",
        example: "The high-lift trailing edge flaps are actuated hydraulically through dual mechanical ballscrews.",
        note: "Focuses on the component and its action rather than the operator."
      }
    ]
  },
  resources: [
    { title: "FAA Pilot's Handbook of Aeronautical Knowledge (Ch. 3 Aircraft Structure)", desc: "Standard FAA text on airframe components and systems.", link: "https://www.faa.gov" },
    { title: "EASA Part-66 Module 11 Study Guide", desc: "Aeroplanes Aerodynamics, Structures and Systems reference.", link: "https://www.easa.europa.eu" }
  ]
};

// Helper to patch session properties with dual keys (desc/description, def/definition)
function patchSession(s, overviewData, materialsData) {
  if (!s) return;
  
  // Patch objectives items
  if (s.objectives && Array.isArray(s.objectives.items)) {
    s.objectives.items.forEach(item => {
      const text = item.description || item.desc || "";
      item.description = text;
      item.desc = text;
    });
  }

  // Patch lessonPlan items
  if (s.lessonPlan && Array.isArray(s.lessonPlan.items)) {
    s.lessonPlan.items.forEach(item => {
      const text = item.description || item.desc || "";
      item.description = text;
      item.desc = text;
    });
  }

  // Patch revision terms
  if (s.revision && Array.isArray(s.revision.terms)) {
    s.revision.terms.forEach(t => {
      const text = t.definition || t.def || "";
      t.definition = text;
      t.def = text;
    });
  }

  // Assign overview and materials
  if (overviewData) {
    s.overview = JSON.parse(JSON.stringify(overviewData));
  }
  if (materialsData) {
    s.materials = JSON.parse(JSON.stringify(materialsData));
  }
}

// 1. Patch AG Module 2 S1 & S2
patchSession(cd.ag['2'].sessions['1'], agM2S1Overview, agM2S1Materials);
patchSession(cd.ag['2'].sessions['2'], agM2S2Overview, agM2S2Materials);

// 2. Patch AT Module 2 S1 & S2
patchSession(cd.at['2'].sessions['1'], null, null); // already has overview/materials, ensure dual keys
patchSession(cd.at['2'].sessions['2'], atM2S2Overview, atM2S2Materials);

// 3. Patch AAS Module 2 S1 & S2 if present
if (cd.aas && cd.aas['2']) {
  patchSession(cd.aas['2'].sessions['1'], null, null);
  patchSession(cd.aas['2'].sessions['2'], atM2S2Overview, atM2S2Materials);
}

// 4. Patch top-level cd['2'] S1 & S2
if (cd['2'] && cd['2'].sessions) {
  patchSession(cd['2'].sessions['1'], agM2S1Overview, agM2S1Materials);
  patchSession(cd['2'].sessions['2'], agM2S2Overview, agM2S2Materials);
}

// Format back to data/course-data.js
const updatedCode = `// GSEA Semester 1 - Complete Course Data Architecture
// In-Deck SCORM 1.2 Learning Platform
// Author: Phil PARRIS (LH/LAN)
// Updated with full communicative curriculum for AG Module 2 Sessions 1 & 2 & AT/AAS Module 2

const COURSE_DATA = ${JSON.stringify(cd, null, 2)};

if (typeof window !== 'undefined') {
  window.COURSE_DATA = COURSE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
`;

fs.writeFileSync(filePath, updatedCode, 'utf8');
console.log('Successfully updated data/course-data.js with complete overview, materials, and dual-compatible keys!');
