/**
 * Build Script: Overhaul General English (AG) Module 2 (Sessions 1-4)
 * - Implements 4 Diverse Pedagogical Archetypes
 * - Integrates Option 1 Side-by-Side Visual Photo Analysis with Clickable Hotspots
 * - Eliminates AI Fatigue, Repetitive Widgets, and Ghost TOEIC Items
 * - 1:1 Parity between Lesson Plan and Digital Worksheet
 */

const fs = require('fs');
const path = require('path');

const rootDir = '/Users/philparris/Documents/GSEA_semester_1';
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesAg2Path = path.join(rootDir, 'src', 'js', '06-templates-ag2.js');

console.log('🚀 Starting AG Module 2 Overhaul...');

const courseData = require(courseDataPath);
const ag2Sessions = courseData.ag['2'].sessions;

// ============================================================================
// 1. DATA DEFINITIONS FOR SESSIONS 1 TO 4
// ============================================================================

// --- SESSION 1: Extreme Weather & Urban Climate Resilience (Archetype A: Crisis Workshop) ---
ag2Sessions['1'].objectives = {
  title: "Session 1 Objectives - Extreme Weather & Urban Climate Resilience",
  summary: "By the end of this session, you will be able to evaluate severe weather disaster briefings, deploy precise B2 language of urgency and risk, lead an emergency civic taskforce simulation, and deliver a live spoken press conference under media scrutiny.",
  items: [
    { num: 1, title: "Analyze an Authentic Emergency Weather Dossier (Risk Assessment)", description: "Scan emergency alerts, flood forecasts, and infrastructure vulnerability metrics to identify acute urban hazards." },
    { num: 2, title: "Prioritize Interventions on an Urgency-Impact Matrix (Spoken Negotiation)", description: "Debate and rank six civic protection measures with a partner from immediate priority to secondary standby." },
    { num: 3, title: "Deploy Language of Urgency, Safeguards & Cause-and-Effect (Grammar Clinic)", description: "Master official directive structures: 'Priority must be given to...', 'Provided that...', and 'Failure to evacuate will result in...'." },
    { num: 4, title: "Coordinate an Escalating Multi-Stakeholder Crisis Simulation (Interactive Role-Play)", description: "Collaborate as Mayor's Office, Transit Director, Hospital Lead, or Public Communications to resolve breaking crisis updates." },
    { num: 5, title: "Deliver a Live Spoken Press Conference & Handle Journalist Scrutiny (Fluency & Q&A)", description: "Deliver a 3-minute public emergency broadcast and answer challenging questions from investigative media." }
  ]
};

ag2Sessions['1'].lessonPlan = {
  title: "Session 1 Lesson Plan - Extreme Weather & Urban Climate Resilience (2 Hours)",
  summary: "A high-stakes, 2-block crisis workshop: students analyze an escalating meteorological disaster dossier, prioritize city defenses, role-play a city emergency taskforce, and defend decisions in a live press briefing.",
  items: [
    { time: "00-20", title: "Part 1: The Meteorological Dossier & Urgency Matrix (20 mins)", description: "Reading an escalating regional storm and heat emergency alert; teams place 6 civic threats on an interactive Urgency-Impact Diamond." },
    { time: "20-40", title: "Part 2: Language Clinic: Expressing Urgency, Conditionals & Directives (20 mins)", description: "Mastering high-priority language: 'Immediate priority must be given to...', 'Provided that auxiliary power holds...', 'Failure to act will lead to...'." },
    { time: "40-95", title: "Part 3: The City Emergency Taskforce Simulation (55 mins)", description: "4 distinct roles (Mayor's Office, Transit Director, Hospital Network Lead, Communications Officer) responding to 3 breaking incident updates (blackout, hospital generator failure, flooded transit)." },
    { time: "95-115", title: "Part 4: Spoken Live Press Conference & Media Scrutiny (20 mins)", description: "Taskforce leads deliver a 3-minute emergency broadcast to citizens and face tough questions from investigative reporters." },
    { time: "115-120", title: "Part 5: Crisis Debrief & Key Terminology Wrap-Up (5 mins)", description: "Peer language feedback, operational debrief, and vocabulary logging." }
  ]
};

ag2Sessions['1'].lessonContent = {
  hero: {
    title: "Extreme Weather & Urban Climate Resilience",
    subtitle: "Archetype A • Deep-Dive Crisis Workshop: Heat Domes, Flash Floods & Civic Emergency Management",
    image: "images/ag_m2card1.jpg",
    badge: "AG Module 2 • Session 1 • Crisis Workshop"
  },
  dossier: {
    alertLevel: "RED ALERT • METEO-FRANCE / REGIONAL PREFECTURE",
    incidentTitle: "Convective Supercell 'Storm Hesper' & Concurrent 42°C Urban Heat Dome",
    timeframe: "T-minus 3 Hours Before Peak Atmospheric Impact",
    summary: "A catastrophic meteorological collision: a week-long 42°C urban heat dome is abruptly intercepted by a severe convective supercell line moving east at 75 km/h. Expected impacts include 90 mm of rainfall in 45 minutes, localized flash flooding, hurricane-force wind gusts of 120 km/h, and an overstressed regional electrical grid operating at 98% capacity.",
    threats: [
      { id: "A", title: "Central Metro Line Flooding", desc: "Subway tunnels at Station République are 1.2m below storm sewer runoff capacity. Risk of complete subterranean inundation within 30 minutes of deluge.", sector: "Public Transit" },
      { id: "B", title: "Regional Hospital Power Fragility", desc: "Main teaching hospital intensive care wing relies on aging rooftop backup diesel generators vulnerable to 120 km/h wind shear.", sector: "Healthcare" },
      { id: "C", title: "Vulnerable Senior Population Heatstroke", desc: "Over 8,500 elderly residents in non-air-conditioned top-floor apartments face indoor temperatures exceeding 39°C before the storm breaks.", sector: "Public Health" },
      { id: "D", title: "Suburban Industrial Chemical Runoff", desc: "Chemical storage depot in the southern flood basin risks toxic leachate contamination if containment dikes overflow into the municipal reservoir.", sector: "Environment" },
      { id: "E", title: "Airport Runway Drainage Saturation", desc: "Regional commercial airport reports retention pond capacity at 92%. Continuing operations will force multiple widebody diversions.", sector: "Aviation/Transport" },
      { id: "F", title: "Civil Protection Communication Congestion", desc: "Cellular networks are overloaded by panic calls; emergency SMS broadcast protocol requires urgent bandwidth prioritization.", sector: "Communications" }
    ]
  },
  taskforce: {
    roles: [
      {
        role: "Mayor's Chief of Staff (Taskforce Chair)",
        badge: "Leadership & Policy",
        mission: "Maintain overall public order, balance competing agency demands, approve emergency financial spending, and make the final call on mandatory evacuations vs. shelter-in-place orders.",
        keyPhrases: ["Our overarching objective is...", "I cannot authorize that expenditure unless...", "The legal threshold for mandatory evacuation requires..."]
      },
      {
        role: "Director of Municipal Transit & Mobility",
        badge: "Infrastructure & Logistics",
        mission: "Safeguard transit passengers, decide whether to shut down subway stations or keep them open as storm shelters, and deploy emergency electric shuttle buses to high-risk zones.",
        keyPhrases: ["Subway line B is at acute risk of...", "Deploying rescue shuttles will require police escorts along...", "Halting all rail traffic will strand thousands unless..."]
      },
      {
        role: "Regional Hospital & Health Network Lead",
        badge: "Medical & Public Health",
        mission: "Protect critical care patients, secure backup power for ventilators and neonatal units, establish pop-up cooling centers, and manage the casualty triage surge.",
        keyPhrases: ["We are operating on razor-thin generator reserves...", "Immediate priority must be given to oxygen-dependent patients...", "Triage protocol mandates that we..."]
      },
      {
        role: "Public Communications & Media Officer",
        badge: "Civic Information & Press",
        mission: "Deliver clear, calm, authoritative emergency warnings, combat viral disinformation on social media, coordinate multi-lingual broadcasts, and prepare the live press conference.",
        keyPhrases: ["Citizens must be advised to immediately...", "To counter false rumors regarding the water supply, we confirm that...", "In our forthcoming live statement, we will emphasize..."]
      }
    ],
    injects: [
      {
        time: "T+15m INJECT #1",
        title: "⚡ Sudden Power Outage in Sector 4",
        desc: "A lightning strike has disabled Substation Voltaire. The regional hospital has switched to generator power, but fuel pumps are overheating. What is your immediate action?"
      },
      {
        time: "T+30m INJECT #2",
        title: "🌊 Storm Drain Breach at Metro Central",
        desc: "Floodwaters have cascaded down Station République escalators. 400 passengers are stranded on platform level. Transit director demands immediate civil rescue teams."
      },
      {
        time: "T+45m INJECT #3",
        title: "📢 Breaking Media Accusation",
        desc: "A major news outlet goes live claiming the Mayor's office withheld flood warnings for 2 hours to avoid panicking tourists. Journalists are gathering for the press conference."
      }
    ]
  },
  pressConference: {
    title: "Live Emergency Press Briefing (20 mins)",
    instructions: "The Taskforce delivers a 3-minute opening broadcast to the public, followed by intense 2-minute questions from the press corps (classmates acting as investigative reporters).",
    reporterQuestions: [
      "Why were public transit stations not closed two hours earlier when meteorological radar clearly indicated an unprecedented flash flood risk?",
      "Can the health director guarantee that ICU generators will not fail if the storm continues past midnight?",
      "Reports indicate that low-income neighborhoods in Sector 4 had no functional emergency sirens. How do you respond to allegations of systemic neglect?",
      "Who will be held legally accountable for the chemical storage overflow in the southern basin?"
    ]
  }
};


// --- SESSION 2: The 15-Minute Resilient City Blueprint (Archetype C: Design Sprint) ---
ag2Sessions['2'].objectives = {
  title: "Session 2 Objectives - The 15-Minute Resilient City Blueprint",
  summary: "By the end of this session, you will be able to conduct a visual photo analysis comparing car-centric sprawl with pedestrian-first superblocks, deploy spatial prepositions and urban design vocabulary, collaborate on a €50M district redesign sprint, and defend your blueprint before a civic investor panel.",
  items: [
    { num: 1, title: "Conduct a Comparative Visual Photo Analysis (Spatial Observation & Contrast)", description: "Contrast car-centric sprawl with a pedestrian superblock using clickable hotspots and spatial prepositions." },
    { num: 2, title: "Deploy Spatial Prepositions & Urban Planning Lexis (Language Clinic)", description: "Use precise locational phrases: 'flanked by', 'bisected by', 'adjacent to', and 'reclaimed from vehicular traffic'." },
    { num: 3, title: "Collaborate on a €50M Urban District Redesign Sprint (Team Creative Design)", description: "Allocate a €50M municipal fund across transit, green canopy, affordable housing, and public plazas." },
    { num: 4, title: "Pitch the Blueprint to a Skeptical Civic Investor Panel (Spoken Persuasion)", description: "Deliver a structured visual pitch answering tough financial, social, and logistical objections." },
    { num: 5, title: "Critique Competitor Urban Designs with Constructive Rebuttals (Peer Evaluation)", description: "Conduct a gallery walk review and vote on the most viable sustainable urban district design." }
  ]
};

ag2Sessions['2'].lessonPlan = {
  title: "Session 2 Lesson Plan - The 15-Minute Resilient City Blueprint (2 Hours)",
  summary: "A creative hands-on design sprint: students analyze contrasting urban photos with interactive hotspots, master spatial prepositions, draft an integrated €50M district redesign, and defend it before a panel of community stakeholders.",
  items: [
    { time: "00-20", title: "Part 1: Urban Showcase: Visual Photo Analysis & Hotspot Clinic (20 mins)", description: "Side-by-side comparative analysis of car sprawl (urban_car_sprawl.jpg) vs. green superblock (urban_superblock.jpg) with clickable vocabulary hotspots and the Mayor's Dilemma speaking task." },
    { time: "20-40", title: "Part 2: Language Clinic: Spatial Prepositions & Planning Structures (20 mins)", description: "Mastering spatial precision: 'flanked by', 'adjacent to', 'bisected by', 'reclaimed from', 'within walking radius of'." },
    { time: "40-80", title: "Part 3: The €50M District Redesign Sprint (40 mins)", description: "In teams of 3–4, students receive the blueprint of a congested transit corridor and allocate budget across transit, green canopy, social housing, and commerce." },
    { time: "80-110", title: "Part 4: The Civic Investor Forum & Public Defense (30 mins)", description: "Teams deliver a 4-minute visual pitch and defend their choices against community questions (shopkeepers, suburban drivers, eco-activists)." },
    { time: "110-120", title: "Part 5: Blueprint Showcase & Peer Voting (10 mins)", description: "Silent gallery walk, investment vote, and key design term consolidation." }
  ]
};

ag2Sessions['2'].lessonContent = {
  hero: {
    title: "The 15-Minute Resilient City Blueprint",
    subtitle: "Archetype C • Collaborative Design Sprint: Superblocks, Micro-Mobility & Urban Transformation",
    image: "images/ag_m2card2.jpg",
    badge: "AG Module 2 • Session 2 • Design Sprint"
  },
  urbanShowcase: {
    photoA: {
      image: "images/urban_car_sprawl.jpg",
      title: "City A: Car-Centric Suburban Arterial Sprawl",
      caption: "Bumper-to-bumper 6-lane thoroughfare, asphalt surface parking, overhead flyovers, exhaust haze, zero pedestrian canopy.",
      hotspots: [
        { id: 1, label: "6-Lane Carriageway", desc: "Dominated by vehicular congestion and bumper-to-bumper traffic, creating severe acoustic and particulate pollution." },
        { id: 2, label: "Surface Asphalt Lot", desc: "Impermeable asphalt heat island that absorbs solar radiation and prevents natural stormwater drainage." },
        { id: 3, label: "Flyover Concrete Ramp", desc: "Elevated road infrastructure that physically bisects the neighborhood and isolates residential blocks." },
        { id: 4, label: "Absence of Sidewalks", desc: "Severely devoid of pedestrian walkways, cycling infrastructure, and protective tree shade." }
      ]
    },
    photoB: {
      image: "images/urban_superblock.jpg",
      title: "City B: Pedestrian-First European Superblock",
      caption: "Reclaimed public space, protected cycle tracks, dappled tree canopy, outdoor terrace dining, permeable stone paving.",
      hotspots: [
        { id: 1, label: "Reclaimed Pedestrian Plaza", desc: "Former road surface converted into active public realm for foot traffic, social gatherings, and children's play." },
        { id: 2, label: "Protected Cycle Track", desc: "Dedicated bi-directional bike corridor physically segregated from vehicular traffic by flowering planters." },
        { id: 3, label: "Permeable Green Canopy", desc: "Mature deciduous trees and permeable light pavers that filter rainwater and lower ambient summer heat by 4°C." },
        { id: 4, label: "Outdoor Café Culture", desc: "Flanked by ground-floor independent businesses and restaurant terraces that stimulate the local economy." }
      ]
    },
    spokenProtocol: [
      { step: "Step 1 (Spatial Observation - 4 mins)", prompt: "Partner A describes Photo A; Partner B describes Photo B using spatial prepositions ('In the foreground...', 'Flanked by...', 'Bisected by...')." },
      { step: "Step 2 (Human Impact - 3 mins)", prompt: "Compare 3 quality-of-life factors: acoustic noise, local business vitality, and safety for children/elderly." },
      { step: "Step 3 (The Mayor's Dilemma - 3 mins)", prompt: "If you were city mayor with funds for only ONE transformation in Photo A, which single element from Photo B would you build first, and why?" }
    ]
  },
  redesignSprint: {
    budget: "€50,000,000",
    corridorName: "The Boulevard Carnot Regeneration Project (60-Hectare Mixed Zone)",
    categories: [
      { name: "Active Mobility & Transit", costPerUnit: "€10M / 5km", desc: "Protected cycle superhighways, electric tramway extension, and smart micro-mobility docking hubs." },
      { name: "Urban Forestry & Bioswales", costPerUnit: "€8M / 10,000m²", desc: "Continuous tree canopy, natural sponge-city bioswales for flood retention, and pocket parks." },
      { name: "Affordable & Low-Carbon Housing", costPerUnit: "€15M / 200 units", desc: "Energy-positive modular timber social housing with rooftop community vegetable gardens." },
      { name: "Civic Plazas & Local Commerce Hubs", costPerUnit: "€7M / plaza", desc: "Pedestrianized market squares, pop-up artisan retail stalls, and shaded outdoor cultural stages." },
      { name: "Subterranean Parking & Logistics Hub", costPerUnit: "€10M / facility", desc: "Consolidated underground perimeter parking to remove all surface on-street car storage." }
    ],
    stakeholders: [
      { role: "The Suburban Commuter Rep", objection: "If you remove 4 traffic lanes, my daily commute will double from 35 to 70 minutes. How will I reach my job without being penalized?" },
      { role: "The Local Retail Association Lead", objection: "Our shopkeepers rely on customer curb-side parking. If clients can't park directly in front, our sales will plummet." },
      { role: "The Climate Resilience Campaigner", objection: "A €50M budget must achieve net-zero runoff and at least 40% tree canopy coverage, not cosmetic greenwashing." },
      { role: "The Senior Citizen Advocate", objection: "E-scooters and uneven cobblestones are dangerous for people with reduced mobility. How do you guarantee barrier-free access?" }
    ]
  }
};


// --- SESSION 3: Environmental Ethics & The Public Inquiry Hearing (Archetype B: Media & Debate Lab) ---
ag2Sessions['3'].objectives = {
  title: "Session 3 Objectives - Environmental Ethics & The Public Inquiry Hearing",
  summary: "By the end of this session, you will be able to detect logical fallacies in environmental arguments, deploy sophisticated phrases for polite disagreement and cautious concession, cross-examine opposing witnesses in a formal public inquiry, and deliver a compelling closing statement.",
  items: [
    { num: 1, title: "Evaluate Conflicting Environmental Evidence & Testimonies (Critical Reading)", description: "Analyze competing economic, ecological, and social impact claims regarding a high-speed transit corridor." },
    { num: 2, title: "Identify Logical Fallacies & Biased Claims (Critical Thinking)", description: "Spot false dichotomies, slippery slope arguments, and greenwashed marketing claims in public testimonies." },
    { num: 3, title: "Deploy Cautious Concession & Counter-Argument Markers (Language Clinic)", description: "Master advanced discourse linkers: 'While I concede that...', 'Be that as it may...', and 'With respect, that conflates...'." },
    { num: 4, title: "Simulate a Formal Public Inquiry Hearing (Structured Debate)", description: "Participate as Commission Judge, Infrastructure Advocate, Ecological Biologist, or Local Community Union." },
    { num: 5, title: "Deliver a Persuasive Closing Argument as Lead Advocate (Formal Spoken Fluency)", description: "Present a 2-minute evidence-based summation to secure judicial approval or injunction." }
  ]
};

ag2Sessions['3'].lessonPlan = {
  title: "Session 3 Lesson Plan - Environmental Ethics & The Public Inquiry Hearing (2 Hours)",
  summary: "An Oxford-style debate and legal lab: students analyze conflicting testimonies on a controversial transit infrastructure project through an ancient wetland, learn argument framing and nuanced concession, and hold a formal public inquiry.",
  items: [
    { time: "00-15", title: "Part 1: The Devil's Advocate Hook: Provocative Claims (15 mins)", description: "2-minute quick-fire sparring on ethical dilemmas: 'Economic growth must always take precedence over local habitat conservation'." },
    { time: "15-40", title: "Part 2: The Disputed Valley Dossier & Evidence Cross-Check (25 mins)", description: "Evaluating four conflicting witness statements (Ecological Biologist, Chamber of Commerce, Commuter Union, Regional Planner)." },
    { time: "40-60", title: "Part 3: Language Clinic: Nuanced Concession & Reframing (20 mins)", description: "Mastering high-level debate signposts: 'While I concede that..., the empirical data demonstrates...', 'Be that as it may...', 'With respect, that conflates...'." },
    { time: "60-105", title: "Part 4: The Formal Public Inquiry Hearing Simulation (45 mins)", description: "Formal judicial proceedings with opening testimonies, cross-examinations, witness challenges, and commissioner rulings." },
    { time: "105-120", title: "Part 5: Judicial Verdict, Peer Assessment & Wrap-Up (15 mins)", description: "Commissioners deliver the binding ruling and debrief linguistic performance." }
  ]
};

ag2Sessions['3'].lessonContent = {
  hero: {
    title: "Environmental Ethics & The Public Inquiry Hearing",
    subtitle: "Archetype B • Media & Debate Lab: Infrastructure Expansion vs. Ecological Integrity",
    image: "images/ag_m2card3.jpg",
    badge: "AG Module 2 • Session 3 • Debate Lab"
  },
  devilsAdvocate: [
    { claim: "Economic progress demands sacrifice: a few hundred hectares of wetland cannot hold back a multi-billion euro transport artery.", challenge: "Challenge this position: How do intact wetlands provide quantifiable economic value through flood mitigation and carbon sequestration?" },
    { claim: "If we don't build new road connections, regional towns will die economically within twenty years.", challenge: "Challenge this position: Does expanding highway capacity genuinely revive small towns, or does it accelerate urban brain drain and strip-mall decay?" },
    { claim: "Individual citizens are solely responsible for climate change through their consumer choices; corporations and governments just meet market demand.", challenge: "Challenge this position: How does public infrastructure design dictate individual choices (e.g., if there are no trains, people must drive)?" }
  ],
  dossier: {
    projectName: "The Val-d'Or High-Speed Rail & Freight Bypass (Link A79)",
    controversy: "A proposed 42-km electrified rail bypass intended to divert 80,000 freight trucks annually away from regional city centers, but requiring the bisecting of the Marais-Sauvage Protected Biosphere Reserve.",
    witnesses: [
      {
        role: "Dr. Elena Rostova • Chief Ecological Biologist",
        stance: "Total Opposition to Surface Route",
        testimony: "The Marais-Sauvage is a non-renewable peatland ecosystem sequestering 450,000 tons of carbon. Bisecting it with an embankment will sever hydrological aquifers and trigger irreversible methane release. The only acceptable compromise is a bored deep tunnel or complete re-routing.",
        vulnerability: "A deep tunnel route would inflate construction costs by €850M and delay completion by 6 years."
      },
      {
        role: "Marcus Vance • Regional Chamber of Commerce Director",
        stance: "Full Support for Surface Route",
        testimony: "Regional highway gridlock currently costs local logistics firms €120M each year in delayed shipments and diesel waste. The bypass will cut freight delivery times by 48% and generate 3,500 permanent green logistics jobs for unemployed youth.",
        vulnerability: "Logistics firms are unwilling to pay the high rail track access charges unless heavily subsidized by public taxpayers."
      },
      {
        role: "Amira Benali • Commuter Union Representative",
        stance: "Conditional Support for Multi-Modal Hub",
        testimony: "85,000 workers commute daily along the congested valley corridor. We support the bypass ONLY if it includes 4 intermediate passenger stations and subsidized regional commuter fares, rather than acting solely as a non-stop freight conduit.",
        vulnerability: "Adding four passenger stations will reduce high-speed freight capacity by 35%."
      },
      {
        role: "Chief Commissioner Harrison • Judicial Inquiry Lead",
        stance: "Neutral Arbiter",
        testimony: "The Commission must balance binding European Biodiversity Directives against National Strategic Infrastructure Mandates. We demand rigorous cost-benefit data, not emotional rhetoric.",
        vulnerability: "Must deliver a definitive verdict that will inevitably anger either the economic lobby or the environmental coalition."
      }
    ]
  },
  argumentClinic: {
    rules: [
      { title: "1. The Partial Concession", formula: "While I concede that [X is true], the empirical evidence demonstrates [Y].", example: "<em>While I concede that</em> freight volumes are rising, the environmental cost of destroying this aquifer is irreversible." },
      { title: "2. Rejecting False Equivalence", formula: "With respect, that conflates [minor issue A] with [catastrophic issue B].", example: "<em>With respect, that conflates</em> short-term highway convenience with multi-generational ecosystem collapse." },
      { title: "3. The Proportionality Challenge", formula: "Even if we accept [premise], the proposed solution is completely disproportionate because [reason].", example: "<em>Even if we accept</em> that transit times must improve, spending €2 billion to pave over a wetland is wildly disproportionate." },
      { title: "4. The Constructive Counter-Proposal", formula: "Rather than [damaging course of action], a far more sustainable alternative would be [innovative solution].", example: "<em>Rather than</em> building a surface embankment, <em>a far more sustainable alternative would be</em> upgrading the existing northern corridor." }
    ]
  }
};


// --- SESSION 4: Airport Biodiversity & Ecological Coexistence (Archetype D: Stations & Tournament) ---
ag2Sessions['4'].objectives = {
  title: "Session 4 Objectives - Airport Biodiversity & Ecological Coexistence",
  summary: "By the end of this session, you will be able to analyze the operational tension between aviation safety (wildlife deterrence) and habitat preservation, rotate through multi-perspective technical stations, negotiate a binding multi-stakeholder land-use treaty, and assess your readiness for Formative Evaluation 2 (FE2).",
  items: [
    { num: 1, title: "Examine the Meadow Paradox: Wildlife Hazard vs. Ecological Corridor (Context Briefing)", description: "Analyze why airport airfields represent Europe's most fertile yet hazardous biodiversity sanctuaries." },
    { num: 2, title: "Rotate Through 3 Specialized Environmental Solution Stations (Technical Fluency)", description: "Explore non-lethal wildlife deterrence, solar-wildflower dual zoning, and sustainable drainage systems (SuDS)." },
    { num: 3, title: "Deploy Passive Voice & Impersonal Phrasing for Policy Recommendations (Grammar Clinic)", description: "Master formal policy language: 'Measures must be implemented to...', 'It is proposed that...', 'Runway safety zones are to be kept...'." },
    { num: 4, title: "Negotiate a 10-Year Airport Land-Use Treaty (Multi-Party Negotiation)", description: "Represent Airport Operations, Wildlife Protection League, or Regional Clean Energy Consortium to divide 500 hectares." },
    { num: 5, title: "Benchmark Individual Progress Against the Formative Evaluation 2 Rubric (FE2 Readiness)", description: "Evaluate speaking fluency, interactive turn-taking, and lexical range against official B2 criteria." }
  ]
};

ag2Sessions['4'].lessonPlan = {
  title: "Session 4 Lesson Plan - Airport Biodiversity & Ecological Coexistence (2 Hours)",
  summary: "A fast-moving station-based workshop and treaty negotiation: students explore non-lethal wildlife management, solar-pollinator zoning, and sustainable drainage, followed by a tri-partite land-use treaty negotiation and FE2 prep.",
  items: [
    { time: "00-15", title: "Part 1: The Meadow Paradox: Video & Case Hook (15 mins)", description: "Why airport grasslands represent some of Europe's most fertile yet hazardous biodiversity zones (pesticide-free perimeter fences vs. bird-strike risks)." },
    { time: "15-50", title: "Part 2: 3-Station Specialized Solutions Workshop (35 mins)", description: "Groups rotate through Station 1 (Non-Lethal Wildlife Deterrence), Station 2 (Solar-Pollinator Dual-Use Zoning), and Station 3 (Sustainable Drainage & Glycol Filtration)." },
    { time: "50-70", title: "Part 3: Language Clinic: Passive Voice & Impersonal Recommendations (20 mins)", description: "Professional formal English: 'It is strongly recommended that...', 'Measures must be implemented to ensure...', 'Runway buffer zones are to be maintained...'." },
    { time: "70-105", title: "Part 4: The Tri-Partite Land-Use Treaty Negotiation (35 mins)", description: "Airport Authority, Wildlife Trust, and Clean Energy Consortium negotiate a binding 10-year accord over 500 perimeter hectares." },
    { time: "105-120", title: "Part 5: Formative Evaluation 2 (FE2) Roadmap & Review (15 mins)", description: "Treaty ratification, vocabulary consolidation, and FE2 rubric benchmarking." }
  ]
};

ag2Sessions['4'].lessonContent = {
  hero: {
    title: "Airport Biodiversity & Ecological Coexistence",
    subtitle: "Archetype D • Interactive Stations & Treaty Negotiation: Bird-Strike Mitigation vs. Nature Sanctuaries",
    image: "images/ag_m2card4.jpg",
    badge: "AG Module 2 • Session 4 • Interactive Stations"
  },
  meadowParadox: {
    headline: "The Meadow Paradox: Europe's Accidental Wildlife Sanctuaries",
    context: "Commercial airports maintain vast grassland perimeters (often 1,000+ hectares) strictly enclosed by security fences, completely free of human foot traffic, hunting, domestic pets, and agricultural pesticides. Consequently, they have inadvertently become prime sanctuaries for endangered ground-nesting birds, rare orchids, and small mammals. However, large raptors and flocking birds pose a severe, potentially catastrophic bird-strike hazard to jet aircraft during takeoff and landing.",
    dilemma: "How can an international airport protect critically endangered species and maintain ecological corridors without compromising flight safety or exceeding zero-tolerance bird-strike risk thresholds?"
  },
  stations: [
    {
      num: 1,
      title: "Station 1: Non-Lethal Wildlife Deterrence & Grass Management",
      icon: "🦅",
      badge: "Airfield Safety",
      coreTech: "Avian 3D Radar + Tall-Grass Habitat Modification + Acoustic Dispersal",
      keyInsight: "Keeping perimeter grass maintained at exactly 20–30 cm ('long grass policy') discourages flocking birds like gulls and starlings because they cannot easily spot ground predators, while preventing raptors from seeing small rodents.",
      discussionPrompts: [
        "Why is ecological habitat modification far more effective over time than firing pyrotechnic scare cartridges?",
        "How can AI-guided acoustic distress calls disperse problem birds without causing acoustic disturbance to nearby residential towns?"
      ]
    },
    {
      num: 2,
      title: "Station 2: Solar-Pollinator Dual-Use Zoning",
      icon: "☀️",
      badge: "Renewable Energy",
      coreTech: "Anti-Glare Photovoltaic Arrays + Native Wildflower Groundcover",
      keyInsight: "Installing 50 MW of solar panels on sterile airfield safety buffers provides clean airport power. Seeding low-growing native wildflower mixes beneath panels restores native bees and butterflies without attracting high-flying bird flocks.",
      discussionPrompts: [
        "How must solar panel tilt angles be engineered to prevent hazardous pilot glare on short final approach?",
        "What guarantees must be given to airfield maintenance teams regarding grass mowing and fire safety around electrical inverters?"
      ]
    },
    {
      num: 3,
      title: "Station 3: Sustainable Drainage Systems (SuDS) & Water Treatment",
      icon: "💧",
      badge: "Water & Chemistry",
      coreTech: "Engineered Reed Beds + Underground De-Icing Glycol Recovery Tanks",
      keyInsight: "Runway stormwater runoff often carries aircraft de-icing fluid (propylene glycol) and rubber residues. Routing runoff through artificial reed-bed wetlands naturally breaks down organic contaminants before water enters local rivers.",
      discussionPrompts: [
        "How do reed beds utilize natural microbiology to eliminate toxic chemical runoff without industrial chemical additives?",
        "What sensory or physical barriers must be installed to prevent migratory waterfowl from settling in drainage retention ponds?"
      ]
    }
  ],
  treatyNegotiation: {
    totalArea: "500 Hectares of Non-Runway Airfield Perimeter",
    parties: [
      {
        party: "Delegation A: Airport Operations & Flight Safety Division",
        priorities: "Zero-tolerance for bird strikes within 3km of runway thresholds. Demands clear visual sighting lines, radar-guided acoustic coverage, and immediate right-of-veto over any habitat that attracts raptors.",
        bargainingChip: "Controls capital infrastructure funding and can sponsor solar installation."
      },
      {
        party: "Delegation B: Regional Wildlife & Biodiversity Trust",
        priorities: "Preserve the 120-hectare southern wildflower meadow where rare bee orchids and endangered curlews nest. Demands pesticide-free biodiversity corridors connecting to the provincial nature reserve.",
        bargainingChip: "Holds legal power to file ecological injunctions under EU Habitats Directives."
      },
      {
        party: "Delegation C: Regional Clean Energy & Climate Transition Consortium",
        priorities: "Deploy at least 150 hectares of high-density solar arrays to generate 80 GWh of renewable electricity annually, decarbonizing both the airport and 25,000 regional homes.",
        bargainingChip: "Brings €60M in private infrastructure capital and revenue-sharing promises."
      }
    ]
  }
};

// ============================================================================
// 2. WRITE UPDATED COURSE DATA BACK
// ============================================================================

const outputCourseData = `/**
 * GSEA Semester 1 - General English & Technical English (AAS)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const agData = ${JSON.stringify(courseData.ag, null, 2)};
  const aasData = ${JSON.stringify(courseData.aas, null, 2)};

  return {
    "1": agData["1"],
    "2": agData["2"],
    "3": agData["3"],
    ag: agData,
    aas: aasData
  };
});
`;

fs.writeFileSync(courseDataPath, outputCourseData, 'utf8');
console.log('✓ Successfully synchronized data/course-data.js for AG Module 2 (Sessions 1-4).');

console.log('🎉 Done data update!');

