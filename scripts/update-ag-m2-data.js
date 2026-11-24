/**
 * Update script for Semester 1 General English (AG) Module 2 Sessions 1 & 2
 * Communicative B1/B2 English for Environment, Climate Change & Sustainable Living
 * Features:
 * - 4-Picture Visual Debate & Description Panels in both sessions
 * - Lively discussions, personal storytelling, small-group negotiation, and high-stakes town hall debates
 * - Accessible, high-frequency B1/B2 vocabulary (zero C1/C2 aeronautical/engineering jargon)
 * - 1:1 Title Parity, Zero Classroom Timings (Rule 1.Q), Context-Anchored Sentence Stems (Rule 1.V)
 */

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '..', 'data', 'course-data.js');
const courseData = require(courseDataPath);

// ==========================================
// SESSION 1: Extreme Weather & Climate Crisis
// ==========================================
const s1Data = {
  session: "01",
  title: "Extreme Weather & Atmospheric Hazards",
  objectives: {
    title: "Session 1 Objectives - Extreme Weather & Atmospheric Hazards",
    summary: "Develop spoken communicative fluency, photo comparison skills, opinion framing, and debate strategies discussing extreme weather and climate change.",
    items: [
      {
        num: "01",
        title: "Photo Description: The Four Faces of Climate Crisis",
        desc: "Describe and compare 4 contrasting scenes of severe climate disruption using observational B1/B2 language."
      },
      {
        num: "02",
        title: "Extreme Weather & Societal Impact Discussion",
        desc: "Discuss how heatwaves, flash floods, and wildfires disrupt daily routines, city living, and transport networks."
      },
      {
        num: "03",
        title: "Spoken Language Clinic: Expressing Stances & Nuanced Opinions",
        desc: "Deploy conversational signposts for expressing strong personal viewpoints and polite, constructive disagreement."
      },
      {
        num: "04",
        title: "Small-Group Decision Task: The €50M Climate Action Plan",
        desc: "Negotiate a municipal climate adaptation fund with your peers, debating trade-offs and agreeing on top priorities."
      },
      {
        num: "05",
        title: "Interactive Spoken Game: Climate Buzzword Taboo",
        desc: "Build rapid oral circumlocution and conversational agility using 12 B1/B2 climate buzzwords with forbidden terms."
      },
      {
        num: "06",
        title: "Town Hall Public Debate: Who Pays for Climate Adaptation?",
        desc: "Defend assigned community stakeholder positions on who should fund infrastructure repairs and disaster preparedness."
      }
    ]
  },
  lessonPlan: {
    title: "Session 1 Lesson Plan - Extreme Weather & Atmospheric Hazards (2 Hours)",
    summary: "A 2-hour communicative workshop combining personal weather storytelling, a 4-photo visual debate lab, opinion language clinic, €50M adaptation budget negotiation, Taboo speaking game, and a town hall public debate.",
    items: [
      {
        part: "Part 1",
        title: "Conversational Warm-Up: Personal Weather Stories & Community Impact",
        description: "Pairwise diagnostic questions with framed sentence stems sharing personal memories of severe weather and discussing how storms disrupt daily life."
      },
      {
        part: "Part 2",
        title: "4-Photo Visual Description & Debate Lab: The Four Faces of Climate Crisis",
        description: "Case study reading and photo comparison of 4 real-world climate impacts: Heatwave & Drought, Urban Flash Flood, Wildfire Smoke, and Renewable Adaptation."
      },
      {
        part: "Part 3",
        title: "Language Clinic: Expressing Opinions & Polite Disagreement",
        description: "Targeted spoken language drills deploying conversational markers (From my perspective, I see your point, but..., That may be true, yet...)."
      },
      {
        part: "Part 4",
        title: "Small-Group Decision Task: The €50M Climate Action Plan",
        description: "Groups debate a decision table with 6 municipal adaptation projects, negotiating budget trade-offs to reach consensus on their top 3 investments."
      },
      {
        part: "Part 5",
        title: "Interactive Spoken Game: Climate Buzzword Taboo",
        description: "Fast-paced pair game with 12 accessible B1/B2 cards (heatwave, flash flood, drought, carbon footprint) to build circumlocution."
      },
      {
        part: "Part 6",
        title: "Town Hall Public Debate: Who Should Pay for Climate Damage?",
        description: "Multi-stakeholder consensus debate between Local Residents, Municipal Council, and Industry Executives on funding disaster adaptation, concluding with peer review."
      }
    ]
  },
  revision: {
    title: "Session 1: Extreme Weather & Climate Crisis",
    summary: "Review the 18 essential B1/B2 terms for climate change, severe weather, and community adaptation.",
    terms: [
      { num: "01", term: "Global Warming", ipa: "/ˈɡləʊ.bəl ˈwɔː.mɪŋ/", def: "Long-term heating of Earth's climate system driven by human fossil fuel burning." },
      { num: "02", term: "Greenhouse Effect", ipa: "/ˈɡriːn.haʊs ɪˌfekt/", def: "The trapping of the sun's warmth in the atmosphere by carbon dioxide and methane gases." },
      { num: "03", term: "Carbon Footprint", ipa: "/ˌkɑː.bən ˈfʊt.prɪnt/", def: "The total amount of greenhouse gases generated by our personal choices and activities." },
      { num: "04", term: "Heatwave", ipa: "/ˈhiːt.weɪv/", def: "A prolonged period of abnormally hot weather affecting human health, crops, and infrastructure." },
      { num: "05", term: "Flash Flood", ipa: "/ˈflæʃ ˌflʌd/", def: "A sudden, violent flood that happens in less than six hours after torrential rainfall." },
      { num: "06", term: "Drought", ipa: "/draʊt/", def: "A prolonged period of abnormally low rainfall leading to severe water shortages and crop loss." },
      { num: "07", term: "Sea-Level Rise", ipa: "/ˈsiː ˌlev.əl ˌraɪz/", def: "The increase in global ocean levels caused by melting glaciers and warm water expansion." },
      { num: "08", term: "Climate Adaptation", ipa: "/ˈklaɪ.mət ˌæd.æpˈteɪ.ʃən/", def: "Changing our buildings, cities, and habits to protect communities from extreme weather." },
      { num: "09", term: "Climate Mitigation", ipa: "/ˈklaɪ.mət ˌmɪt.ɪˈɡeɪ.ʃən/", def: "Actions taken to reduce or stop the emission of greenhouse gases into the atmosphere." },
      { num: "10", term: "Renewable Energy", ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/", def: "Clean energy collected from natural resources that replenish themselves (solar, wind, hydro)." },
      { num: "11", term: "Fossil Fuels", ipa: "/ˈfɒs.əl ˌfjuː.əlz/", def: "Non-renewable carbon sources like coal, oil, and gas formed over millions of years." },
      { num: "12", term: "Wildfire", ipa: "/ˈwaɪld.faɪər/", def: "A large, destructive fire that spreads quickly over woodland, brush, or rural communities." },
      { num: "13", term: "Climate Anxiety", ipa: "/ˈklaɪ.mət æŋˌzaɪ.ə.ti/", def: "Chronic worry and stress about the future of the planet and environmental breakdown." },
      { num: "14", term: "Extreme Weather", ipa: "/ɪkˈstriːm ˈweð.ər/", def: "Severe, unexpected meteorological events like superstorms, blizzards, and heatwaves." },
      { num: "15", term: "Disaster Preparedness", ipa: "/dɪˈzɑː.stər prɪˈpeə.rɪd.nəs/", def: "Community planning, emergency supplies, and evacuation systems to respond to crises." },
      { num: "16", term: "Cooling Shelter", ipa: "/ˈkuː.lɪŋ ˌʃel.tər/", def: "An air-conditioned public facility opened during severe heatwaves to protect vulnerable citizens." },
      { num: "17", term: "Sustainable Living", ipa: "/səˈsteɪ.nə.bəl ˈlɪv.ɪŋ/", def: "A lifestyle that attempts to reduce an individual's use of natural resources and waste." },
      { num: "18", term: "Eco-Friendly", ipa: "/ˌiː.kəʊˈfrend.li/", def: "Products, policies, and practices that do not cause harm to the natural environment." }
    ]
  },
  overview: {
    title: "Extreme Weather & Atmospheric Hazards",
    subtitle: "Global Warming, Severe Weather Impacts on Communities & The Climate Adaptation Debate",
    badge: "Session Overview • Weather & Environment",
    image: "images/ag_m2card1.jpg"
  },
  materials: {
    title: "Session 1 Study Materials: Weather & Environment",
    summary: "Visual debate panels, opinion phrasing guides, and municipal climate adaptation dossiers."
  },
  lessonContent: {
    overview: {
      title: "Extreme Weather & Atmospheric Hazards",
      subtitle: "Global Warming, Severe Weather Impacts on Communities & The Climate Adaptation Debate",
      badge: "Session Overview • Weather & Environment",
      image: "images/ag_m2card1.jpg"
    },
    hero: {
      title: "Extreme Weather & Atmospheric Hazards",
      subtitle: "Global Warming, Severe Weather Impacts on Communities & The Climate Adaptation Debate",
      image: "images/ag_m2card1.jpg"
    },
    openingSession: {
      title: "Part 1: Conversational Warm-Up — Personal Weather Stories & Community Impact",
      summary: "Sharing personal memories of severe weather and discussing how storms disrupt our daily lives.",
      instructions: "In pairs, ask and answer the opening discussion questions below. Use the framed sentence stems to describe your personal memories and explain how weather disrupts everyday society.",
      newsPrompts: [
        "Record-breaking European summer heatwave triggers municipal cooling centers and halts daytime railway operations.",
        "Unprecedented autumn flash flooding submerges city metro stations and washes away cars in residential streets.",
        "Wildfire smoke plumes travel over 1,000 kilometers, prompting widespread air quality health alerts in major cities."
      ],
      diagnostic: {
        title: "Opening Spoken Discussion Prompts",
        instructions: "Work in pairs. Take turns answering with the suggested sentence stems before reading the model response.",
        questions: [
          {
            id: 1,
            q: "Describe an extreme weather event you have personally experienced: what happened and how did you feel?",
            prompt: "The most intense weather event I have ever lived through was..., which made me feel...",
            answer: "Personal stories often describe intense summer heatwaves where indoor temperatures reached 38°C, or sudden torrential storms where streets turned into rivers in minutes. Common reactions include feeling helpless, anxious about safety, and surprised by how quickly normal public transport and power networks collapse."
          },
          {
            id: 2,
            q: "Discuss how severe weather disrupts our daily routines, universities, and public transport.",
            prompt: "When extreme weather hits our region, the most disruptive consequence is..., because...",
            answer: "Severe storms cause power outages, railway track distortion from extreme heat, cancelled train services, flooded underground stations, and flight delays. For university students, it means cancelled classes, difficult commutes, and relying on remote online communication."
          },
          {
            id: 3,
            q: "Explain the real difference between daily weather and long-term climate change.",
            prompt: "Daily weather refers to short-term conditions like..., whereas climate change represents...",
            answer: "Daily weather is what is happening outside your window right now (rain, sunshine, wind, temperature over a few hours or days). Climate change is the statistical trend of those conditions measured over 30 years or more, showing that extreme heat, droughts, and intense storms are becoming far more frequent and dangerous."
          },
          {
            id: 4,
            q: "In your view, who is most vulnerable in our communities when an extreme heatwave or flood strikes?",
            prompt: "During severe climate emergencies, the people at greatest risk are..., because they lack...",
            answer: "The elderly, young children, unhoused people, and low-income families living in poorly insulated apartments are the most vulnerable. They often lack access to air conditioning, cannot afford high energy bills, and have limited mobility to evacuate when floodwaters rise."
          }
        ]
      }
    },
    visualDebate: {
      title: "Part 2: 4-Photo Visual Description & Debate Lab — The Four Faces of Climate Crisis",
      summary: "Observing, comparing, and debating 4 real-world photographs of climate disruption and solutions.",
      instructions: "Examine the four photographs below. In pairs, take turns describing what you observe in each picture using the sentence stems. Then choose two contrasting images and debate the prompt question.",
      photos: [
        {
          id: 1,
          title: "Photo 1: Extreme Heat & Drought",
          file: "images/weather_heatwave_drought.jpg",
          scene: "Parched, cracked agricultural soil and dried lake bed under an intense, blazing sun.",
          prompt: "What strikes me about Photo 1 is the severe lack of moisture, which demonstrates how prolonged drought destroys...",
          debateQ: "When regional water reserves drop below 20%, who should have priority access: local farmers, residents for domestic use, or industrial factories?"
        },
        {
          id: 2,
          title: "Photo 2: Urban Flash Flooding",
          file: "images/weather_urban_flash_flood.jpg",
          scene: "Submerged city intersection, cars floating in muddy brown water, pedestrians wading through knee-deep runoff.",
          prompt: "In Photo 2, the image highlights the vulnerability of concrete city centers where drainage systems cannot cope with...",
          debateQ: "When an urban neighborhood floods, who bears primary responsibility: the city council who designed the sewers, or property developers building on floodplains?"
        },
        {
          id: 3,
          title: "Photo 3: Wildfire Smoke & Sky",
          file: "images/weather_wildfire_smoke.jpg",
          scene: "Apocalyptic orange haze filling the sky over a residential neighborhood as forest fires burn in the background.",
          prompt: "Looking at Photo 3, the dense smoke and glowing orange horizon show that climate disasters respect no borders and cause...",
          debateQ: "Should emergency authorities have the legal power to force residents to evacuate, or should citizens have the right to stay and defend their property?"
        },
        {
          id: 4,
          title: "Photo 4: Renewable Transition & Hope",
          file: "images/weather_renewable_transition.jpg",
          scene: "Expansive solar panel fields and modern wind turbines coexisting with green pastures.",
          prompt: "In sharp contrast to the other pictures, Photo 4 offers an inspiring vision of clean energy where technology helps us...",
          debateQ: "Are individual lifestyle changes (shorter showers, recycling) truly meaningful, or are massive government climate taxes the only real solution?"
        }
      ]
    },
    grammarClinic: {
      title: "Part 3: Spoken Language Clinic — Expressing Opinions on Severe Weather Hazards",
      summary: "Conversational signposts for stating strong personal viewpoints and politely challenging counter-arguments.",
      instructions: "Review the useful phrases for expressing opinions below. Practice transforming the statements with your partner to make your speaking sound natural, diplomatic, and persuasive.",
      patterns: [
        {
          rule: "Stating Your Viewpoint Confidently",
          formula: "From my perspective / I strongly believe that / As far as I'm concerned, + [Opinion]",
          examples: [
            "From my perspective, protecting green spaces is far more urgent than building new highways.",
            "I strongly believe that cities must invest heavily in shaded pedestrian walkways."
          ]
        },
        {
          rule: "Polite & Constructive Disagreement",
          formula: "I see your point, but... / That may be true, yet... / I'm not entirely convinced that...",
          examples: [
            "I see your point about convenience, but private cars cause 70% of urban air pollution.",
            "That may be true, yet we cannot ignore the economic cost of doing nothing."
          ]
        },
        {
          rule: "Weighing Two Sides of a Climate Dilemma",
          formula: "On the one hand, [Fact A]; on the other hand, [Fact B]...",
          examples: [
            "On the one hand, air conditioning saves lives during heatwaves; on the other hand, it consumes enormous electrical power."
          ]
        }
      ],
      drills: [
        {
          id: 1,
          prompt: "Disagree politely with this opinion: 'People should just stay inside with air conditioning during heatwaves; there is no need to change our cities.'",
          answer: "I see your point about immediate personal relief, but air conditioning consumes huge amounts of power and makes street-level heat even worse for pedestrians."
        },
        {
          id: 2,
          prompt: "Frame a strong personal opinion using 'From my perspective': 'Individual recycling cannot stop global warming.'",
          answer: "From my perspective, while individual recycling is positive, real climate progress requires bold government legislation and corporate accountability."
        },
        {
          id: 3,
          prompt: "Weigh both sides using 'On the one hand... on the other hand': 'Banning domestic short flights.'",
          answer: "On the one hand, banning short flights significantly cuts carbon emissions; on the other hand, we must ensure high-speed train tickets remain affordable for all travelers."
        }
      ]
    },
    decisionTask: {
      title: "Part 4: Small-Group Decision Task — The €50M Municipal Climate Action Plan",
      summary: "Negotiating budget priorities: select the top 3 projects to protect your town from extreme weather.",
      instructions: "Work in groups of 3 or 4. Your municipal council has been awarded a €50 Million Climate Resilience Fund. Review the 6 competing proposals below. You only have enough budget to fund THREE projects. Debate the benefits of each, negotiate trade-offs, and reach a unanimous group consensus.",
      budget: "Total Available Fund: €50,000,000",
      projects: [
        { id: "A", name: "Project A: Urban Tree Canopy & Green Corridors", cost: "€15M", benefit: "Plants 50,000 mature trees along streets to lower summer temperatures by 3°C and create shaded walkways." },
        { id: "B", name: "Project B: Riverbank Flood Barrier & Storm Retention Ponds", cost: "€25M", benefit: "Constructs defensive earth barriers and overflow wetlands to protect 10,000 homes from flash flooding." },
        { id: "C", name: "Project C: Public Building Solar Roofs & Battery Storage", cost: "€20M", benefit: "Equips all schools, hospitals, and community halls with solar panels to guarantee power during blackouts." },
        { id: "D", name: "Project D: Network of 12 Municipal Cooling Shelters", cost: "€10M", benefit: "Opens air-conditioned community centers offering free clean water, medical checks, and rest for vulnerable citizens." },
        { id: "E", name: "Project E: Subsidized Home Insulation Grants for Low-Income Families", cost: "€15M", benefit: "Provides direct grants to insulate 4,000 older homes against extreme winter cold and summer heat." },
        { id: "F", name: "Project F: Early Warning SMS Siren Network & Citizen Training", cost: "€5M", benefit: "Installs high-tech weather sirens, automated smartphone warnings, and community disaster response drills." }
      ],
      rubric: {
        title: "Peer Observer Active Listening Rubric (Student B)",
        criteria: [
          { name: "useful phrases for expressing opinions", target: "Uses target phrasing (From my perspective, I see your point, but...)." },
          { name: "Justification & Examples", target: "Provides clear, logical reasons why one project is more urgent than another." },
          { name: "Collaborative Compromise", target: "Listens respectfully to partners and works toward a shared agreement." },
          { name: "Spoken Delivery", target: "Speaks with confident pace, clear stress, and active engagement." }
        ]
      }
    },
    vocabGame: {
      title: "Part 5: Interactive Spoken Game — Extreme Weather Buzzword Taboo",
      summary: "Fast-paced pair fluency game: explain the environmental term without saying the forbidden words!",
      instructions: "Work in pairs. Player 1 describes the target buzzword without using the word itself or any of the 3 forbidden words. Player 2 must guess within 45 seconds. Keep score and switch roles after each card!",
      cards: [
        { word: "Heatwave", ipa: "/ˈhiːt.weɪv/", forbidden: ["Hot", "Summer", "Temperature"] },
        { word: "Flash Flood", ipa: "/ˈflæʃ ˌflʌd/", forbidden: ["Water", "Rain", "River"] },
        { word: "Drought", ipa: "/draʊt/", forbidden: ["Dry", "Rain", "Water"] },
        { word: "Carbon Footprint", ipa: "/ˌkɑː.bən ˈfʊt.prɪnt/", forbidden: ["CO2", "Pollution", "Personal"] },
        { word: "Global Warming", ipa: "/ˈɡləʊ.bəl ˈwɔː.mɪŋ/", forbidden: ["Earth", "Hot", "Climate"] },
        { word: "Wildfire", ipa: "/ˈwaɪld.faɪər/", forbidden: ["Forest", "Burn", "Smoke"] },
        { word: "Renewable Energy", ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/", forbidden: ["Solar", "Wind", "Green"] },
        { word: "Sea-Level Rise", ipa: "/ˈsiː ˌlev.əl ˌraɪz/", forbidden: ["Ocean", "Ice", "Melting"] },
        { word: "Climate Adaptation", ipa: "/ˈklaɪ.mət ˌæd.æpˈteɪ.ʃən/", forbidden: ["Change", "Protect", "Future"] },
        { word: "Fossil Fuels", ipa: "/ˈfɒs.əl ˌfjuː.əlz/", forbidden: ["Oil", "Coal", "Gas"] },
        { word: "Eco-Friendly", ipa: "/ˌiː.kəʊˈfrend.li/", forbidden: ["Green", "Nature", "Good"] },
        { word: "Cooling Shelter", ipa: "/ˈkuː.lɪŋ ˌʃel.tər/", forbidden: ["Air conditioning", "Building", "Refuge"] }
      ]
    },
    townHallDebate: {
      title: "Part 6: Town Hall Public Debate — Who Should Pay for Climate Adaptation?",
      summary: "High-stakes community debate: funding disaster defenses between citizens, city hall, and heavy industry.",
      instructions: "Your town has suffered repeated floods and heatwaves. A public town hall meeting is held to decide how to raise €100 Million for long-term climate defenses. Choose one of the three stakeholder roles below, prepare your arguments, and debate the funding model.",
      roles: [
        {
          title: "Role A: Local Residents & Tenant Association",
          stance: "Demands that heavy polluters pay: Ordinary working citizens already pay high local taxes and energy bills. Climate funding must come from taxes on fossil fuel companies, airlines, and large commercial developers.",
          keyPoints: [
            "Residents are already suffering property damage and rising home insurance premiums.",
            "Large corporations made billions in profits while emitting greenhouse gases.",
            "Higher local residential taxes would push vulnerable families into poverty."
          ]
        },
        {
          title: "Role B: Chamber of Commerce & Industry Representative",
          stance: "Warns against punishing local business: Heavy corporate taxes will force companies and employers to relocate to other regions, destroying local jobs and economic prosperity.",
          keyPoints: [
            "Businesses provide employment, taxes, and vital community services.",
            "Green adaptation requires public-private partnerships, not hostile punishment.",
            "A modest, shared municipal sales tax spread across all citizens is fairer and more stable."
          ]
        },
        {
          title: "Role C: City Mayor & Municipal Finance Director",
          stance: "Proposes a shared compromise: Both citizens and businesses must contribute, supported by national government subsidies and green municipal bonds.",
          keyPoints: [
            "Extreme weather is an existential threat to our entire region's survival.",
            "Delaying action while arguing over blame will cost five times more when the next flood hits.",
            "We propose a three-part model: 40% corporate climate fee, 30% national grant, and 30% green municipal bond."
          ]
        }
      ]
    }
  }
};

// ==========================================
// SESSION 2: Sustainable Cities & Low-Emission Living
// ==========================================
const s2Data = {
  session: "02",
  title: "Sustainable Cities & Low-Emission Mobility",
  objectives: {
    title: "Session 2 Objectives - Sustainable Cities & Low-Emission Mobility",
    summary: "Develop spoken communicative fluency, photo comparison skills, proposal structuring, and debate techniques on sustainable urban living and mobility.",
    items: [
      {
        num: "01",
        title: "Photo Comparison: Two Visions of the Future City",
        desc: "Contrast car-dominated urban sprawl with green pedestrian superblocks using rich descriptive B1/B2 English."
      },
      {
        num: "02",
        title: "Livable Cities & The 15-Minute Neighborhood",
        desc: "Discuss how clean public transit, bike lanes, and green parks improve health, air quality, and social connection."
      },
      {
        num: "03",
        title: "Spoken Language Clinic: Making Persuasive Proposals",
        desc: "Deploy polite suggestion patterns (Why don't we consider..., What if we were to ban..., It would be far more effective to...)."
      },
      {
        num: "04",
        title: "Interactive Vocabulary Game: Green City Collocation Matcher",
        desc: "Master 10 high-frequency compound phrases for urban lifestyle, clean transport, and eco-friendly infrastructure."
      },
      {
        num: "05",
        title: "Pair Urban Redesign Pitch: Reclaim Your Street or Campus",
        desc: "Redesign a car-dominated street or university zone into a green pedestrian haven and pitch it to the class."
      },
      {
        num: "06",
        title: "High-Stakes Public Debate: The Car-Free City Center",
        desc: "Debate a total ban on private passenger cars in metropolitan city cores across Commuters, Shop Owners, and Environmentalists."
      }
    ]
  },
  lessonPlan: {
    title: "Session 2 Lesson Plan - Sustainable Cities & Low-Emission Mobility (2 Hours)",
    summary: "A 2-hour communicative seminar combining a livable city ranking warm-up, 4-photo urban contrast debate panel, proposal language clinic, green collocation game, pair street redesign pitch, and a car-free city center debate.",
    items: [
      {
        part: "Part 1",
        title: "Conversational Warm-Up: The Livable City Ranking",
        description: "Pairwise diagnostic questions with framed sentence stems ranking the key factors that make a city healthy and enjoyable to live in."
      },
      {
        part: "Part 2",
        title: "4-Photo Visual Contrast & Debate Lab: Two Visions of the Future City",
        description: "Case study reading and photo comparison of 4 urban models: The Car-Choked Highway, The Reclaimed Superblock, High-Speed Rail vs Air, and The 15-Minute Street."
      },
      {
        part: "Part 3",
        title: "Language Clinic: Proposing Solutions & Making Recommendations",
        description: "Targeted spoken language drills practicing constructive suggestions and polite alternatives (Why don't we consider..., What if we were to...)."
      },
      {
        part: "Part 4",
        title: "Interactive Vocabulary Game: Green City Collocation Matcher",
        description: "Pair matching game linking 10 compound phrases (pedestrian zone, public transport, congestion charge, cycling lane) and ranking transit modes."
      },
      {
        part: "Part 5",
        title: "Pair Urban Redesign Challenge: Reclaim Your Street or Campus",
        description: "Pairs formulate a 3-point plan to transform a car-dominated road into an active green corridor and deliver a 2-minute pitch with peer rubric."
      },
      {
        part: "Part 6",
        title: "High-Stakes Public Debate: The Car-Free City Center",
        description: "Multi-stakeholder consensus debate on banning private cars from metropolitan centers between Commuters, Shop Owners, and Climate Activists, concluding with final review."
      }
    ]
  },
  revision: {
    title: "Session 2: Sustainable Cities & Low-Emission Living",
    summary: "Review the 18 essential B1/B2 terms for urban sustainability, active mobility, and green city planning.",
    terms: [
      { num: "01", term: "Car-Free Zone", ipa: "/ˌkɑː ˈfriː ˌzəʊn/", def: "A city district where private motor vehicles are prohibited to give priority to pedestrians and cyclists." },
      { num: "02", term: "Pedestrian Street", ipa: "/pəˈdes.tri.ən ˌstriːt/", def: "A street reserved exclusively for people walking, shopping, and outdoor dining without motor traffic." },
      { num: "03", term: "Cycling Lane", ipa: "/ˈsaɪ.klɪŋ ˌleɪn/", def: "A dedicated, marked division of a road reserved exclusively for bicycles and light personal transport." },
      { num: "04", term: "Public Transport", ipa: "/ˌpʌb.lɪk ˈtræn.spɔːt/", def: "Shared passenger transportation systems like metros, electric buses, trams, and suburban trains." },
      { num: "05", term: "15-Minute City", ipa: "/ˌfɪf.tiːn ˈmɪn.ɪt ˌsɪt.i/", def: "An urban planning model where all daily resident needs are reachable in a 15-minute walk or bike ride." },
      { num: "06", term: "Superblock", ipa: "/ˈsuː.pə.blɒk/", def: "A neighborhood cluster where inner streets are closed to through-traffic and turned into green public squares." },
      { num: "07", term: "Urban Sprawl", ipa: "/ˌɜː.bən ˈsprɔːl/", def: "The uncontrolled outward spread of low-density suburbs heavily dependent on private cars." },
      { num: "08", term: "Congestion Charge", ipa: "/kənˈdʒes.tʃən ˌtʃɑːdʒ/", def: "A daily fee charged to drivers entering city centers during peak hours to curb traffic and air pollution." },
      { num: "09", term: "Green Space", ipa: "/ˈɡriːn ˌspeɪs/", def: "Open land covered with grass, trees, and plants in an urban area like public parks and gardens." },
      { num: "10", term: "Air Quality", ipa: "/ˈeə ˌkwɒl.ə.ti/", def: "The degree to which outdoor air is clean and free from harmful vehicle exhaust and pollutants." },
      { num: "11", term: "Low-Emission Zone", ipa: "/ˌləʊ ɪˈmɪʃ.ən ˌzəʊn/", def: "A designated municipal perimeter where high-polluting vehicles are restricted, banned, or fined." },
      { num: "12", term: "Micro-Mobility", ipa: "/ˈmaɪ.krəʊ məʊˌbɪl.ə.ti/", def: "Small, lightweight personal electric vehicles like e-bikes and e-scooters for short trips." },
      { num: "13", term: "High-Speed Rail", ipa: "/ˌhaɪ ˈspiːd ˈreɪl/", def: "Fast electric passenger trains operating at speeds over 250 km/h connecting major city centers." },
      { num: "14", term: "Energy-Efficient Housing", ipa: "/ˌen.ə.dʒi ɪˈfɪʃ.ənt/", def: "Buildings with thick insulation and heat pumps that consume very little energy for heating and cooling." },
      { num: "15", term: "Waste Management", ipa: "/ˈweɪst ˌmæn.ɪdʒ.mənt/", def: "Organized collection, sorting, recycling, and composting of household and commercial rubbish." },
      { num: "16", term: "Carbon Neutral", ipa: "/ˌkɑː.bən ˈnjuː.trəl/", def: "Balancing the amount of carbon released into the atmosphere with an equivalent amount removed." },
      { num: "17", term: "Sustainable Commute", ipa: "/səˈsteɪ.nə.bəl kəˈmjuːt/", def: "Traveling to work or study using walking, cycling, or shared electric public transit." },
      { num: "18", term: "Modal Split", ipa: "/ˈməʊ.dəl ˌsplɪt/", def: "The percentage share of trips made by different transport modes (walking, cycling, public transit, cars)." }
    ]
  },
  overview: {
    title: "Sustainable Cities & Low-Emission Mobility",
    subtitle: "Urban Living, Green Neighborhoods, The 15-Minute City & The Car-Free Center Debate",
    badge: "Session Overview • Sustainable Cities & Urban Design",
    image: "images/ag_m2card2.jpg"
  },
  materials: {
    title: "Session 2 Study Materials: Sustainable Cities",
    summary: "Visual urban contrast panels, proposal phrasing guides, and street transformation briefs."
  },
  lessonContent: {
    overview: {
      title: "Sustainable Cities & Low-Emission Mobility",
      subtitle: "Urban Living, Green Neighborhoods, The 15-Minute City & The Car-Free Center Debate",
      badge: "Session Overview • Sustainable Cities & Urban Design",
      image: "images/ag_m2card2.jpg"
    },
    hero: {
      title: "Sustainable Cities & Low-Emission Mobility",
      subtitle: "Urban Living, Green Neighborhoods, The 15-Minute City & The Car-Free Center Debate",
      image: "images/ag_m2card2.jpg"
    },
    openingSession: {
      title: "Part 1: Conversational Warm-Up — The Livable City Ranking",
      summary: "What makes a city healthy, exciting, and enjoyable to live in? Ranking priorities in pairs.",
      instructions: "In pairs, review the factors that contribute to urban quality of life. Use the framed sentence stems to express your preferences and discuss how your home town or university city compares.",
      newsPrompts: [
        "Major European capital expands its car-free zone, converting 20 kilometers of highway into shaded urban parks.",
        "National rail operator launches €19 monthly student pass covering all electric trains, trams, and suburban buses.",
        "Survey reveals 78% of urban residents feel happier and safer in neighborhoods with wide sidewalks and dedicated bike lanes."
      ],
      diagnostic: {
        title: "Opening Spoken Discussion Prompts",
        instructions: "Work in pairs. Take turns answering with the suggested sentence stems before reading the model response.",
        questions: [
          {
            id: 1,
            q: "In your view, what makes a city truly great to live in? Which factors matter most to you personally?",
            prompt: "For me, the single most important factor for a livable city is..., because...",
            answer: "Key factors include clean air, affordable 24/7 public transit, safe bike lanes, quiet pedestrian streets, abundant parks, vibrant cultural nightlife, and affordable housing. For students, cheap and reliable public transit and safe cycling are often the top priorities."
          },
          {
            id: 2,
            q: "Discuss how heavy car traffic affects the mental well-being and health of city residents.",
            prompt: "Living in a city dominated by heavy car traffic creates serious problems like..., which leads to...",
            answer: "Traffic causes chronic noise pollution, toxic exhaust fumes that trigger asthma and respiratory illness, dangerous roads for children and cyclists, and stressful daily commutes where people waste hours trapped in gridlock instead of exercising or spending time with family."
          },
          {
            id: 3,
            q: "Explain Carlos Moreno's '15-Minute City' concept, and discuss why it has become so popular.",
            prompt: "The core idea of the 15-minute city is that every resident can reach..., which eliminates...",
            answer: "It proposes that every citizen should be able to access work, food, healthcare, education, culture, and leisure within a 15-minute walk or bike ride from their front door. It eliminates the need for daily car ownership, revitalizes local neighborhood squares, and drastically cuts urban emissions."
          },
          {
            id: 4,
            q: "In your view, what is the biggest obstacle stopping people from giving up their private cars for public transit?",
            prompt: "The main reason many commuters hesitate to abandon their cars is..., especially when...",
            answer: "In outer suburbs and rural regions, public transit is often infrequent, unreliable, or non-existent. People also value the door-to-door convenience of private cars for carrying heavy shopping, transporting young children, or working night shifts when buses do not run."
          }
        ]
      }
    },
    visualDebate: {
      title: "Part 2: 4-Photo Visual Contrast & Debate Lab — Two Visions of the Future City",
      summary: "Comparing two contrasting urban models and debating transport priorities using 4 real photographs.",
      instructions: "Examine the four urban photographs below. In pairs, take turns describing what you see using the sentence stems. Then compare the contrasting lifestyles and debate the prompt questions.",
      photos: [
        {
          id: 1,
          title: "Photo A: The Car-Choked Highway",
          file: "images/urban_car_sprawl.jpg",
          scene: "An 8-lane expressway locked in gridlock, sea of metal roofs, exhaust smog, no trees or pedestrians.",
          prompt: "Photo A illustrates the reality of car-dependent urban sprawl where vast amounts of public space are swallowed by...",
          debateQ: "Commuters lose an average of 90 minutes every day trapped in traffic jams. Why are so many people still reluctant to switch to trains or buses?"
        },
        {
          id: 2,
          title: "Photo B: The Reclaimed Superblock",
          file: "images/urban_superblock.jpg",
          scene: "Car-free neighborhood square with shade trees, children playing, outdoor cafes, and wide cycle tracks.",
          prompt: "In sharp contrast to Photo A, Photo B shows a human-scale neighborhood that prioritizes community life by...",
          debateQ: "If a city completely closes neighborhood streets to private cars, what realistic solutions must be provided for elderly residents, delivery vans, and tradespeople?"
        },
        {
          id: 3,
          title: "Photo C: High-Speed Rail vs. Aviation",
          file: "images/transport_high_speed_rail.jpg",
          scene: "Modern high-speed electric passenger train boarding passengers smoothly in a downtown glass terminal.",
          prompt: "Photo C represents clean intercity connectivity where electric rail links city center to city center, avoiding...",
          debateQ: "Should national governments ban domestic commercial flights when a direct train journey under 2.5 hours exists?"
        },
        {
          id: 4,
          title: "Photo D: The 15-Minute Micro-Mobility Street",
          file: "images/urban_15min_neighborhood.jpg",
          scene: "A tree-lined boulevard with cargo e-bikes, pedestrians, outdoor bakeries, and solar streetlights.",
          prompt: "Looking at Photo D, we see a practical example of the 15-minute city where daily errands can be done easily on foot or by...",
          debateQ: "Is the 15-minute city an elitist concept that only wealthy metropolitan centers can afford, or can outer suburbs be redesigned the same way?"
        }
      ]
    },
    grammarClinic: {
      title: "Part 3: Spoken Language Clinic — Proposing Solutions & Making Recommendations",
      summary: "Targeted language clinic on making persuasive proposals and suggesting constructive alternatives.",
      instructions: "Review the proposal formulas below. Practice transforming the suggestions with your partner to sound polite, professional, and convincing in public meetings.",
      patterns: [
        {
          rule: "Making Constructive Proposals",
          formula: "Why don't we consider + [Verb-ing] / What if we were to + [Verb] / It would be far more effective to + [Verb]",
          examples: [
            "Why don't we consider converting the two central lanes into a dedicated busway?",
            "What if we were to introduce free public transit on high-pollution days?",
            "It would be far more effective to build protected bike lanes rather than paint white lines on roads."
          ]
        },
        {
          rule: "Proportional Change (Double Comparatives)",
          formula: "The + comparative..., the + comparative...",
          examples: [
            "The safer the bike lanes, the more people choose to cycle.",
            "The cheaper and cleaner the public transit, the fewer cars enter the city."
          ]
        }
      ],
      drills: [
        {
          id: 1,
          prompt: "Propose a solution for traffic jams around university campuses using 'What if we were to...':",
          answer: "What if we were to offer subsidized electric bike leases and free campus shuttle buses to all students and staff?"
        },
        {
          id: 2,
          prompt: "Combine into a Double Comparative: 'When cities plant more trees, ambient summer temperatures become much cooler.'",
          answer: "The more trees a city plants, the cooler the ambient summer temperatures become."
        },
        {
          id: 3,
          prompt: "Suggest an alternative to private car parking using 'It would be far more effective to...':",
          answer: "It would be far more effective to transform parking lots into green public parks and multi-modal transit hubs."
        }
      ]
    },
    vocabGame: {
      title: "Part 4: Interactive Spoken Game — Green City Collocation Matcher",
      summary: "Pair matching game: link 10 high-frequency compound phrases and rank transit modes in the urban hierarchy.",
      instructions: "Step 1: Match the urban prefix on the left with its correct lifestyle suffix on the right. Step 2: In pairs, rank the four transport tiers in the Sustainable Mobility Pyramid from most sustainable at the base to most restricted at the top.",
      collocations: [
        { id: 1, prefix: "Pedestrian", suffix: "zone", full: "Pedestrian zone", def: "A car-free street reserved for people walking" },
        { id: 2, prefix: "Cycling", suffix: "lane", full: "Cycling lane", def: "Dedicated marked road division for bicycles" },
        { id: 3, prefix: "Public", suffix: "transport", full: "Public transport", def: "Shared buses, trams, metros, and trains" },
        { id: 4, prefix: "Congestion", suffix: "charge", full: "Congestion charge", def: "Fee charged to vehicles entering city centers" },
        { id: 5, prefix: "Low-emission", suffix: "zone", full: "Low-emission zone", def: "Area where polluting cars are restricted" },
        { id: 6, prefix: "High-speed", suffix: "rail", full: "High-speed rail", def: "Fast electric trains connecting cities" },
        { id: 7, prefix: "Micro-", suffix: "mobility", full: "Micro-mobility", def: "Lightweight e-bikes and e-scooters" },
        { id: 8, prefix: "Carbon", suffix: "neutral", full: "Carbon neutral", def: "Net-zero greenhouse gas emissions" },
        { id: 9, prefix: "Urban", suffix: "sprawl", full: "Urban sprawl", def: "Uncontrolled outward spread of car suburbs" },
        { id: 10, prefix: "Green", suffix: "space", full: "Green space", def: "Parks, gardens, and vegetated public plazas" }
      ],
      pyramid: {
        tiers: [
          { level: "Apex (Tier 4)", mode: "Private Fossil Vehicles (Single Occupancy)", role: "Highest pollution and space consumption; restrict via fees and low-emission zones" },
          { level: "Upper (Tier 3)", mode: "Shared Electric Vehicles, Taxis & Carpools", role: "Flexible transit for night shifts, elderly travel, and luggage delivery" },
          { level: "Middle (Tier 2)", mode: "Mass Electric Transit (Metro, Trams, Electric Buses)", role: "High-capacity transport moving thousands of people hourly with zero local emissions" },
          { level: "Base (Tier 1)", mode: "Active Mobility (Walking, Cycling, Wheelchairs)", role: "100% zero carbon, highest health benefit, takes up minimal public street space" }
        ]
      }
    },
    redesignChallenge: {
      title: "Part 5: Pair Urban Redesign Challenge — Reclaim Your Street or Campus",
      summary: "Collaborative spatial challenge: choose a car-dominated street or university zone and pitch 3 green interventions.",
      instructions: "Work in pairs. You are urban design consultants commissioned by the city council. Choose a congested street in your hometown or a car-dominated zone on your campus. Formulate THREE concrete, practical changes to make it green, pedestrian-friendly, and enjoyable. Prepare a 2-minute pitch to present to the class.",
      deliverables: [
        "Change 1: Street Space Allocation (e.g. Removing 50 parking spaces to build a protected two-way bike track).",
        "Change 2: Nature & Climate Comfort (e.g. Planting 30 shade trees, installing water fountains, and creating outdoor seating).",
        "Change 3: Public Transport & Micro-Mobility (e.g. Adding an electric bus stop and an e-bike sharing station)."
      ],
      rubric: {
        title: "Peer Observer Active Listening Rubric (Student B)",
        criteria: [
          { name: "Vocabulary Use", target: "Integrates target words (pedestrian zone, green space, cycling lane, modal split)." },
          { name: "Proposal Phrasing", target: "Uses target suggestion formulas (Why don't we consider..., What if we were to...)." },
          { name: "Practical Feasibility", target: "Offers realistic, logical solutions that solve real community needs." },
          { name: "Pitch Fluency", target: "Delivers an engaging, confident presentation within the 2-minute time limit." }
        ]
      }
    },
    publicDebate: {
      title: "Part 6: High-Stakes Public Debate — The Car-Free City Center",
      summary: "Public consultation debate on banning private cars from the metropolitan core within 18 months.",
      instructions: "Your city council is debating the following proposal: 'All private passenger motor vehicles shall be banned from the city center from 07:00 to 20:00 every day, with road space repurposed for cyclists, pedestrians, and public transit.' Assume your assigned role below and debate the policy.",
      roles: [
        {
          title: "Role A: Suburban Commuters & Delivery Drivers Association",
          stance: "Strongly opposes a blanket ban: Argues that suburban families cannot afford housing in the city center and rely on cars to commute, while delivery drivers need road access to supply businesses.",
          keyPoints: [
            "Suburban public transit takes twice as long and stops running early in the evening.",
            "Elderly residents and families with young children cannot easily cycle in winter.",
            "Delivery vans and tradespeople will face massive delays and parking fines."
          ]
        },
        {
          title: "Role B: Local Independent Retailers & Restaurant Owners",
          stance: "Demands flexible compromise: Agrees with cleaner streets but fears that banning cars will stop affluent suburban customers from visiting shops and restaurants.",
          keyPoints: [
            "Customers who buy heavy goods or dine late at night prefer driving.",
            "We propose free 30-minute delivery bays and large park-and-ride shuttle garages on the perimeter.",
            "Pedestrian streets boost restaurant foot traffic, but retail shops need vehicle access."
          ]
        },
        {
          title: "Role C: Clean Air & Youth Climate Action Coalition",
          stance: "Strongly supports the total ban: Points out that car exhaust causes asthma in children and greenhouse gas emissions. Cities must belong to people, not vehicles.",
          keyPoints: [
            "70% of inner-city space is currently wasted on moving or parked metal vehicles.",
            "Cities like Barcelona, Amsterdam, and Paris proved that businesses thrive when streets become pedestrianized.",
            "Electric buses, trams, and cargo e-bikes can easily handle all deliveries and personal mobility."
          ]
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

// Write back with full UMD wrapper setting root.COURSE_DATA and root.courseData
const header = `/**
 * GSEA Semester 1 - General English & Technical English (AT)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
    root.courseData = root.COURSE_DATA;
  }
})(typeof self !== "undefined" ? self : this, function () {
  const courseData = `;

const footer = `;

  return courseData;
});
`;

fs.writeFileSync(courseDataPath, header + JSON.stringify(courseData, null, 2) + footer, 'utf8');
console.log("✅ Successfully updated courseData for S1 AG M2 S1 & S2 with communicative climate & urban data!");
