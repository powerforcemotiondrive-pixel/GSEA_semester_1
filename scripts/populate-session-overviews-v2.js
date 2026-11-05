/**
 * scripts/populate-session-overviews-v2.js
 * 
 * Curates and populates rich, communicative B1/B2 English session overviews
 * across all 24 teaching sessions in Semester 1 (AG M1-M3 S1-S4 and AAS M1-M3 S1-S4).
 * 
 * Strict Language Invariants:
 * - Communicative language development for B1/B2 learners (NOT engineering lectures or technical theory).
 * - Focus on spoken fluency, reporting anomalies, describing systems, asking questions, peer debates.
 * - Why It Matters focuses strictly on international English communication, avoiding misunderstandings,
 *   and preparing for the end-of-module Formative Evaluation (FE).
 * - Speaking Task is titled "Additional Speaking Activity" with 3 distinct statements for 3 groups.
 */

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '..', 'data', 'course-data.js');
const courseData = require(courseDataPath);

// =========================================================================
// GENERAL ENGLISH (AG • LV101E) OVERVIEWS
// =========================================================================
const agOverviews = {
  // -----------------------------------------------------------------------
  // MODULE 1: TRAVEL, TRANSPORT & LEISURE
  // -----------------------------------------------------------------------
  '1': {
    '1': {
      intro: "In this opening session, you develop your spoken confidence by sharing personal travel stories, airport journeys, and memorable transport delays in English. Working in pairs and small groups, you will practise narrative tenses, descriptive travel vocabulary, and spontaneous storytelling without translating word-for-word from French. This interactive practice helps you break the ice and speak more naturally from day one.",
      whyItMatters: "Telling clear, engaging anecdotes in English is a vital interpersonal skill in international workplaces, airport environments, and social conversations. When you can describe a journey or explain an unexpected problem smoothly, you build immediate rapport with international colleagues and passengers, while building the natural fluency needed for your end-of-module Formative Evaluation.",
      keyTerms: [
        { term: "Itinerary", ipa: "/aɪˈtɪn.ər.ər.i/", definition: "A planned route or journey with scheduled stops, flights, and activities." },
        { term: "Layover", ipa: "/ˈleɪˌoʊ.vər/", definition: "A period of waiting at a transit airport between connecting flights." },
        { term: "Baggage Allowance", ipa: "/ˈbæɡ.ɪdʒ əˌlaʊ.əns/", definition: "The permitted weight or number of bags a passenger can take without extra fees." },
        { term: "Off the Beaten Track", ipa: "/ɒf ðə ˈbiː.tən træk/", definition: "Traveling to quiet, unusual destinations away from crowded tourist hotspots." },
        { term: "Round-Trip", ipa: "/ˈraʊnd.trɪp/", definition: "A return journey going to a destination and coming back to the start." },
        { term: "Miss a Connection", ipa: "/mɪs ə kəˈnek.ʃən/", definition: "Arriving too late for a scheduled connecting flight or train due to earlier delays." },
        { term: "Peak Season", ipa: "/piːk ˈsiː.zən/", definition: "The time of year when travel demand, crowds, and ticket prices are highest." },
        { term: "Red-Eye Flight", ipa: "/ˈred.aɪ flaɪt/", definition: "An overnight commercial flight that leaves late at night and arrives early the next morning." },
        { term: "Boarding Pass", ipa: "/ˈbɔː.dɪŋ pɑːs/", definition: "An official document or phone barcode allowing a passenger to board an aircraft." },
        { term: "De-escalation", ipa: "/diːˌes.kəˈleɪ.ʃən/", definition: "Calm, professional communication used to resolve anger and defuse tension during travel delays." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or personal examples to support your group's view.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Public transport in modern European cities is now so convenient and affordable that private cars should be completely banned from city centres.",
          group2: "Short-haul flights between cities connected by high-speed rail should be prohibited to reduce carbon emissions, even if train tickets are more expensive.",
          group3: "The biggest barrier to international travel today is not the cost of tickets, but the stress and complexity of navigating airport security and transit connections."
        },
        usefulPhrases: [
          "Our group discussed whether...",
          "We strongly agree / disagree with this statement because...",
          "In our personal travel experience, one major factor is...",
          "To summarise our group's main argument..."
        ]
      }
    },
    '2': {
      intro: "This session focuses on expanding your ability to compare urban transport options, discuss environmental sustainability, and debate modern smart city mobility in English. Through group discussions and communicative roleplays, you will practise expressing opinions, evaluating comparative advantages, and proposing greener travel solutions using clear, convincing language.",
      whyItMatters: "Sustainable mobility and green transport policies are major topics of discussion worldwide. Developing the English vocabulary to explain environmental choices, compare energy efficiency, and discuss public policy prepares you to take an active part in professional meetings and directly supports your spoken arguments in the Formative Evaluation.",
      keyTerms: [
        { term: "Micromobility", ipa: "/ˌmaɪ.kroʊ.moʊˈbɪl.ə.ti/", definition: "Lightweight urban transport options like electric scooters, bikes, and shared mopeds." },
        { term: "Congestion Pricing", ipa: "/kənˈdʒes.tʃən ˈpraɪ.sɪŋ/", definition: "A toll charged to drivers entering busy urban centres during peak travel hours." },
        { term: "Carbon Neutral", ipa: "/ˈkɑː.bən ˈnjuː.trəl/", definition: "Achieving net-zero carbon emissions by balancing emissions with carbon absorption." },
        { term: "Intermodal Transport", ipa: "/ˌɪn.təˈmoʊ.dəl ˈtræns.pɔːt/", definition: "A journey that connects multiple modes of travel (e.g. train, metro, and bike) with one ticket." },
        { term: "High-Speed Rail", ipa: "/haɪ spiːd reɪl/", definition: "Passenger trains operating on dedicated tracks at speeds over 250 km/h." },
        { term: "Ride-Sharing", ipa: "/ˈraɪdˌʃeə.rɪŋ/", definition: "An arrangement where passengers book rides together in a shared private vehicle." },
        { term: "Pedestrianised Zone", ipa: "/pəˈdes.tri.ə.naɪzd zoʊn/", definition: "An urban street or district where motor vehicles are prohibited for safety and air quality." },
        { term: "Infrastructure", ipa: "/ˈɪn.frəˌstrʌk.tʃər/", definition: "The basic physical systems of a transport network, including tracks, roads, and bridges." },
        { term: "First-Mile / Last-Mile", ipa: "/fɜːst maɪl lɑːst maɪl/", definition: "The beginning or end of an individual passenger trip between a transit hub and home or work." },
        { term: "Autonomous Shuttle", ipa: "/ɔːˈtɒn.ə.məs ˈʃʌt.əl/", definition: "A self-driving small bus designed to transport groups along fixed urban routes." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or real-world examples to support your group's position.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Free public transport funded entirely by local tax revenue is the only realistic way to persuade citizens to abandon their private vehicles.",
          group2: "Shared e-scooters and micromobility devices create more urban clutter, safety risks, and accidents than genuine environmental benefits.",
          group3: "Within twenty years, autonomous driverless electric shuttles will completely replace conventional municipal bus and tram networks."
        },
        usefulPhrases: [
          "Our group weighed the benefits and drawbacks of...",
          "From a practical urban mobility standpoint...",
          "One convincing argument against this statement is...",
          "In conclusion, our group believes that..."
        ]
      }
    },
    '3': {
      intro: "In this session, you explore the international challenge of overtourism, examining how excessive visitor numbers impact local communities, historic landmarks, and natural ecosystems. You will practise negotiating solutions, presenting balanced points of view, and debating visitor caps and tourism taxes in spoken English.",
      whyItMatters: "Balancing economic revenue with cultural preservation is one of the most critical debates in global tourism today. Learning to discuss complex social and economic trade-offs in English helps you articulate nuanced positions, challenge ideas respectfully, and demonstrate advanced communicative range during your FE presentation.",
      keyTerms: [
        { term: "Overtourism", ipa: "/ˌoʊ.vəˈtʊə.rɪ.zəm/", definition: "A situation where too many tourists visit a place, negatively impacting residents and heritage." },
        { term: "Carrying Capacity", ipa: "/ˈkær.i.ɪŋ kəˌpæs.ə.ti/", definition: "The maximum number of visitors a site or city can sustain without environmental or social harm." },
        { term: "Tourism Tax", ipa: "/ˈtʊə.rɪ.zəm tæks/", definition: "A small fee paid by hotel guests or cruise visitors to help maintain public infrastructure." },
        { term: "Cultural Heritage", ipa: "/ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/", definition: "Historic traditions, monuments, and customs inherited from previous generations." },
        { term: "Gentrification", ipa: "/ˌdʒen.trɪ.fɪˈkeɪ.ʃən/", definition: "The transformation of a neighbourhood that raises living costs and displaces local residents." },
        { term: "Cruise Ship Levy", ipa: "/kruːz ʃɪp ˈlev.i/", definition: "A mandatory environmental tariff charged to cruise lines when docking at delicate ports." },
        { term: "Short-Term Rental", ipa: "/ʃɔːt tɜːm ˈren.təl/", definition: "Renting residential apartments to tourists for brief holiday stays rather than local residents." },
        { term: "Visitor Cap", ipa: "/ˈvɪz.ɪ.tər kæp/", definition: "A strict daily or seasonal limit on the number of tourists admitted to an attraction." },
        { term: "Dispersal Strategy", ipa: "/dɪˈspɜː.səl ˈstræt.ə.dʒi/", definition: "Encouraging tourists to visit lesser-known regional attractions to relieve crowded city centres." },
        { term: "Local Preservation", ipa: "/ˈloʊ.kəl ˌprez.əˈveɪ.ʃən/", definition: "Protecting community traditions, local shops, and heritage buildings from mass commercialization." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or case examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Historic cities like Venice, Dubrovnik, and Amsterdam should establish strict daily quotas and ban giant cruise ships permanently.",
          group2: "Short-term holiday rental platforms like Airbnb should be banned in residential city centres to protect local housing affordability.",
          group3: "Higher tourism taxes only make travel an exclusive privilege for wealthy tourists rather than solving the root problems of crowd management."
        },
        usefulPhrases: [
          "When examining the impact of overtourism, our group noticed...",
          "While some argue that tourism revenue is essential, we believe...",
          "A major problem with this approach is...",
          "To summarize our perspective..."
        ]
      }
    },
    '4': {
      intro: "This session invites you to pitch and defend sustainable destination concepts, exploring ecotourism, low-impact travel, and community-led conservation in English. You will practise structuring persuasive pitches, answering counter-arguments, and explaining the economic and environmental benefits of responsible travel with professional confidence.",
      whyItMatters: "Being able to deliver an engaging pitch and defend project ideas before an audience is a fundamental communicative competency. Practising how to organize arguments, present clear solutions, and respond to peer questions directly builds the speaking fluency evaluated in your Module 1 Formative Evaluation.",
      keyTerms: [
        { term: "Ecotourism", ipa: "/ˈiː.koʊˌtʊə.rɪ.zəm/", definition: "Responsible travel to natural areas that conserves the environment and improves local welfare." },
        { term: "Greenwashing", ipa: "/ˈɡriːnˌwɒʃ.ɪŋ/", definition: "Misleading marketing that falsely presents a product or company as environmentally friendly." },
        { term: "Biodegradable", ipa: "/ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl/", definition: "Capable of being decomposed naturally by bacteria or living organisms without pollution." },
        { term: "Carbon Offsetting", ipa: "/ˈkɑː.bən ˌɒfˈset.ɪŋ/", definition: "Compensating for carbon dioxide emissions by funding equivalent carbon-saving projects elsewhere." },
        { term: "Renewable Energy", ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/", definition: "Energy collected from resources that are naturally replenished on a human timescale, like solar or wind." },
        { term: "Community-Led", ipa: "/kəˈmjuː.nə.ti led/", definition: "Initiatives planned, managed, and economically owned by local residents rather than foreign chains." },
        { term: "Low-Impact Travel", ipa: "/loʊ ˈɪm.pækt ˈtræv.əl/", definition: "Travel practices designed to minimize ecological footprints, waste generation, and energy use." },
        { term: "Leave No Trace", ipa: "/liːv noʊ treɪs/", definition: "An outdoor ethical code promoting leaving natural environments entirely undisturbed." },
        { term: "Sustainable Certification", ipa: "/səˈsteɪ.nə.bəl ˌsɜː.tɪ.fɪˈkeɪ.ʃən/", definition: "An independent audit verifying that a tourism operator meets rigorous ecological standards." },
        { term: "Regenerative Tourism", ipa: "/rɪˈdʒen.ər.ə.tɪv ˈtʊə.rɪ.zəm/", definition: "Travel that actively restores, regenerates, and revitalizes natural habitats and local culture." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or examples to support your group's position.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Carbon offsetting schemes offered by airlines are simply modern greenwashing that encourages passengers to avoid making genuine lifestyle changes.",
          group2: "True ecotourism is only possible if travelers are willing to accept significantly higher costs and fewer luxury amenities.",
          group3: "Governments should introduce a personal annual flight allowance for all citizens to enforce equitable reductions in aviation emissions."
        },
        usefulPhrases: [
          "Our pitch focuses on the concept that...",
          "One key strength of our argument is...",
          "In response to common criticisms, we would emphasize...",
          "Ultimately, our group recommends that..."
        ]
      }
    }
  },

  // -----------------------------------------------------------------------
  // MODULE 2: WEATHER & THE ENVIRONMENT
  // -----------------------------------------------------------------------
  '2': {
    '1': {
      intro: "In this session, you expand your English vocabulary for describing extreme weather events, seasonal hazards, and climatic disruptions. Working in pairs and small groups, you will practise explaining severe storms, reporting weather disruptions, and comparing regional climate trends in spoken English with accuracy and expressive confidence.",
      whyItMatters: "Weather is a universal talking point and an operational reality in transport, aviation, and daily life worldwide. Being able to describe severe conditions, interpret forecasts, and discuss climate adaptation in clear English ensures you can communicate without hesitation during international operations and your Formative Evaluation.",
      keyTerms: [
        { term: "Flash Flood", ipa: "/flæʃ flʌd/", definition: "A sudden and rapid flood caused by torrential rainfall over a short duration." },
        { term: "Heatwave", ipa: "/ˈhiːtˌweɪv/", definition: "An extended period of abnormally hot weather, often accompanied by high humidity." },
        { term: "Gale-Force Winds", ipa: "/ɡeɪl fɔːs wɪndz/", definition: "Extremely strong winds measuring between 62 and 88 km/h on the Beaufort scale." },
        { term: "Drought", ipa: "/draʊt/", definition: "A prolonged period of abnormally low rainfall leading to severe water shortages." },
        { term: "Blizzard", ipa: "/ˈblɪz.əd/", definition: "A severe snowstorm characterized by freezing winds and blinding snow with near-zero visibility." },
        { term: "Wildfire", ipa: "/ˈwaɪldˌfaɪ.ər/", definition: "A large, uncontrolled fire that spreads rapidly across dry vegetation, forests, or scrubland." },
        { term: "Storm Surge", ipa: "/stɔːm sɜːdʒ/", definition: "A rising of coastal sea waters above normal levels caused by low atmospheric pressure and wind." },
        { term: "Tornado Alert", ipa: "/tɔːˈneɪ.doʊ əˌlɜːt/", definition: "An official emergency warning indicating that a destructive rotating column of air has formed." },
        { term: "Severe Turbulence", ipa: "/sɪˈvɪər ˈtɜː.bjə.ləns/", definition: "Violent atmospheric motion causing large, abrupt changes in an aircraft's altitude or attitude." },
        { term: "Climate Resilience", ipa: "/ˈklaɪ.mət rɪˈzɪl.jəns/", definition: "The capacity of a community or system to anticipate, absorb, and recover from hazardous climate events." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or recent examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Major international airports should automatically suspend all flight operations whenever temperatures exceed 40°C due to performance safety risks.",
          group2: "Extreme weather events are becoming so frequent that public emergency services should have legal power to enforce mandatory civilian curfews.",
          group3: "Airlines and rail operators should not be legally required to compensate stranded passengers when cancellations are caused by unforecast severe storms."
        },
        usefulPhrases: [
          "Our group discussed the operational risks of...",
          "From an emergency response standpoint...",
          "A major counter-argument to consider is...",
          "In conclusion, we strongly maintain that..."
        ]
      }
    },
    '2': {
      intro: "This session focuses on discussing sustainable cities, green urban planning, and environmental architecture in spoken English. Working in teams, you will practise describing eco-friendly infrastructure, evaluating renewable energy systems, and explaining how urban design can reduce carbon emissions and improve quality of life.",
      whyItMatters: "Explaining complex technical concepts like sustainable infrastructure and energy transitions in simple, persuasive English is an essential workplace communication skill. This practice helps you formulate convincing arguments, structure clear explanations, and perform confidently in your Module 2 Formative Evaluation.",
      keyTerms: [
        { term: "Green Infrastructure", ipa: "/ɡriːn ˈɪn.frəˌstrʌk.tʃər/", definition: "A network of natural and semi-natural green spaces designed to manage stormwater and cool cities." },
        { term: "Urban Heat Island", ipa: "/ˈɜː.bən hiːt ˈaɪ.lənd/", definition: "An urban area that is significantly warmer than surrounding rural regions due to concrete and human activity." },
        { term: "District Heating", ipa: "/ˈdɪs.trɪkt ˈhiː.tɪŋ/", definition: "A system for distributing heat generated in a centralized location to urban buildings via insulated pipes." },
        { term: "Passive Solar", ipa: "/ˈpæs.ɪv ˈsoʊ.lər/", definition: "Building design that captures natural sunlight to heat spaces without active mechanical systems." },
        { term: "Permeable Pavement", ipa: "/ˈpɜː.mi.ə.bəl ˈpeɪv.mənt/", definition: "Paving material that allows rainwater to seep through into underlying soils, reducing runoff." },
        { term: "Living Wall", ipa: "/ˈlɪv.ɪŋ wɔːl/", definition: "A vertical garden attached to an exterior or interior building facade to purify air and insulate." },
        { term: "Circular Economy", ipa: "/ˈsɜː.kjə.lər iˈkɒn.ə.mi/", definition: "An economic model emphasizing product reuse, refurbishment, and recycling over disposal." },
        { term: "Zero-Emission Zone", ipa: "/ˈzɪə.roʊ iˈmɪʃ.ən zoʊn/", definition: "An urban district where only zero-emission vehicles (electric or bicycles) are permitted entry." },
        { term: "Smart Grid", ipa: "/smɑːt ɡrɪd/", definition: "An electrical grid using digital communications technology to detect and react to local energy usage changes." },
        { term: "Urban Density", ipa: "/ˈɜː.bən ˈden.sə.ti/", definition: "The concentration of residents and dwellings within a given urban area to optimize land use." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or architectural examples to support your group's view.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "All new commercial office buildings should be legally mandated to feature solar panels and green rooftop gardens, regardless of cost.",
          group2: "High-density urban living with compact apartments is far more environmentally sustainable than suburban homes with gardens.",
          group3: "Air conditioning in residential and retail buildings should be strictly regulated and capped during summer heatwaves to protect the power grid."
        },
        usefulPhrases: [
          "When analyzing modern sustainable cities, we noticed...",
          "The main environmental advantage of this approach is...",
          "Critics often point out the financial cost, but we believe...",
          "To conclude our presentation..."
        ]
      }
    },
    '3': {
      intro: "In this session, you sharpen your skills in building, supporting, and defending arguments in spoken English. Through interactive debate rounds and structured discussion games, you will practise using persuasive signposting, providing supporting evidence, and politely refuting counter-arguments on controversial environmental policies.",
      whyItMatters: "Spoken debate is the heart of professional decision-making and international committee work. Knowing how to present a clear claim, back it with credible reasons, and respond calmly to objections without losing your train of thought is precisely what examiners look for in your Formative Evaluation.",
      keyTerms: [
        { term: "Contention", ipa: "/kənˈten.ʃən/", definition: "A central claim or assertion advanced in an argument or debate." },
        { term: "Counter-Argument", ipa: "/ˈkaʊn.tər ˈɑːɡ.jə.mənt/", definition: "An objection or opposing reason put forward to undermine an opponent's point." },
        { term: "Rebuttal", ipa: "/rɪˈbʌt.əl/", definition: "A spoken response that provides evidence to disprove or refute a counter-argument." },
        { term: "Empirical Evidence", ipa: "/ɪmˈpɪr.ɪ.kəl ˈev.ɪ.dəns/", definition: "Verifiable data and facts gathered through direct observation, experiment, or documented study." },
        { term: "Consensus", ipa: "/kənˈsen.səs/", definition: "A general agreement reached among a group of people or international bodies." },
        { term: "Trade-Off", ipa: "/ˈtreɪd.ɒf/", definition: "A situational decision that involves giving up one desired benefit in exchange for another." },
        { term: "Subsidies", ipa: "/ˈsʌb.sə.diz/", definition: "Government financial grants paid to support an industry or energy sector to keep prices low." },
        { term: "Vested Interest", ipa: "/ˌves.tɪd ˈɪn.trəst/", definition: "A personal or corporate stake in an outcome, often leading to biased arguments." },
        { term: "Carbon Taxation", ipa: "/ˈkɑː.bən tækˈseɪ.ʃən/", definition: "A fee imposed on the burning of fossil fuels directly proportional to their greenhouse gas output." },
        { term: "Policy Feasibility", ipa: "/ˈpɒl.ə.si ˌfiː.zəˈbɪl.ə.ti/", definition: "The realistic likelihood that a proposed regulation can be implemented and enforced." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or pieces of evidence to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Nuclear energy is the only realistic, scalable zero-carbon power source capable of replacing fossil fuels in time to meet international climate goals.",
          group2: "Individual consumer choices have negligible impact on climate change compared to direct government regulation of fossil fuel corporations.",
          group3: "Rich industrialized nations have a moral obligation to fund the entire renewable energy transition of developing countries without conditions."
        },
        usefulPhrases: [
          "Our primary contention is that...",
          "In response to the opposing viewpoint, we would argue...",
          "The empirical evidence clearly indicates that...",
          "In summary, our group's position remains that..."
        ]
      }
    },
    '4': {
      intro: "This session examines the fascinating intersection of biodiversity, wildlife conservation, and modern transport hubs like international airports. You will practise describing wildlife management strategies, explaining ecological corridors, and debating the balance between human transport safety and animal habitat protection in spoken English.",
      whyItMatters: "Airports and transport corridors manage vast expanses of open green space where safety requirements directly encounter nature. Developing the spoken English to describe habitat management, species monitoring, and ecological impact ensures you can contribute intelligently to modern environmental discussions and perform strongly in your FE.",
      keyTerms: [
        { term: "Biodiversity", ipa: "/ˌbaɪ.oʊ.daɪˈvɜː.sə.ti/", definition: "The variety of plant and animal life in a particular habitat or ecosystem." },
        { term: "Ecological Corridor", ipa: "/ˌek.əˈlɒdʒ.ɪ.kəl ˈkɒr.ɪ.dɔːr/", definition: "A protected strip of natural habitat connecting wildlife populations separated by human activity." },
        { term: "Habitat Fragmentation", ipa: "/ˈhæb.ɪ.tæt ˌfræɡ.mənˈteɪ.ʃən/", definition: "The splitting of continuous natural ecosystems into small, isolated patches by roads or airports." },
        { term: "Wildlife Hazard", ipa: "/ˈwaɪldˌlaɪf ˈhæz.əd/", definition: "Animals, particularly bird flocks or mammals, that present direct collision risks to aircraft." },
        { term: "Acoustic Dispersal", ipa: "/əˈkuː.stɪk dɪˈspɜː.səl/", definition: "Using natural bird distress calls or loud sound generators to safely disperse flocks from runways." },
        { term: "Rewilding", ipa: "/ˌriːˈwaɪl.dɪŋ/", definition: "Restoring natural ecological processes and native species to land that was previously managed." },
        { term: "Pollinator Habitat", ipa: "/ˈpɒl.ɪ.neɪ.tər ˈhæb.ɪ.tæt/", definition: "Landscaped meadows planted with native flowers specifically to support bees and butterflies." },
        { term: "Runoff Retention Basin", ipa: "/ˈrʌn.ɒf rɪˈten.ʃən ˈbeɪ.sən/", definition: "Artificial ponds designed to hold and filter airport stormwater, which often become rich wetland habitats." },
        { term: "Invasive Species", ipa: "/ɪnˈveɪ.sɪv ˈspiː.ʃiːz/", definition: "Non-native organisms that spread aggressively, damaging local ecosystems and economic activity." },
        { term: "Environmental Stewardship", ipa: "/ɪnˌvaɪ.rənˈmen.təl ˈstjuː.əd.ʃɪp/", definition: "The responsible management and protection of the natural environment through conservation." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Airport perimeter zones should be transformed into protected wildlife sanctuaries, as long as bird-strike management technology guarantees flight safety.",
          group2: "Whenever a major transport infrastructure project threatens the habitat of an endangered species, the project should be cancelled regardless of economic cost.",
          group3: "Using trained predatory birds (falcons) and acoustic dispersal is far more humane and effective than lethal methods for managing airfield wildlife."
        },
        usefulPhrases: [
          "Our group investigated the balance between...",
          "From a wildlife stewardship perspective...",
          "A key counter-argument that must be addressed is...",
          "To summarize our group's consensus..."
        ]
      }
    }
  },

  // -----------------------------------------------------------------------
  // MODULE 3: NEW TECHNOLOGY
  // -----------------------------------------------------------------------
  '3': {
    '1': {
      intro: "In this session, you explore the rise of Artificial Intelligence and machine learning in daily life, customer service, and education. Working in pairs and small groups, you will practise describing AI applications, expressing personal attitudes toward automated tools, and debating the benefits and risks of smart algorithms in spoken English.",
      whyItMatters: "AI is reshaping every industry and profession across the globe. Being able to explain how automated systems assist human work, articulate ethical concerns, and discuss future technology in clear, conversational English gives you high professional relevance and directly enriches your Module 3 Formative Evaluation.",
      keyTerms: [
        { term: "Artificial Intelligence", ipa: "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/", definition: "Computer systems designed to perform tasks normally requiring human intelligence." },
        { term: "Machine Learning", ipa: "/məˈʃiːn ˈlɜː.nɪŋ/", definition: "A branch of AI where software learns from data patterns without explicit programming." },
        { term: "Algorithm", ipa: "/ˈæl.ɡə.rɪ.ðəm/", definition: "A step-by-step set of rules or instructions followed by a computer to solve a problem." },
        { term: "Predictive Analytics", ipa: "/prɪˈdɪk.tɪv ˌæn.əˈlɪt.ɪks/", definition: "Using statistical models to forecast future trends based on historical data." },
        { term: "Natural Language", ipa: "/ˈnætʃ.ər.əl ˈlæŋ.ɡwɪdʒ/", definition: "Human speech or text, which modern AI models process and generate conversational responses to." },
        { term: "Data Privacy", ipa: "/ˈdeɪ.tə ˈprɪv.ə.si/", definition: "The proper handling, security, and consent surrounding personal information collected online." },
        { term: "Automated Decision", ipa: "/ˈɔː.tə.meɪ.tɪd dɪˈsɪʒ.ən/", definition: "A choice made instantly by a computer model without human intervention or review." },
        { term: "Algorithmic Bias", ipa: "/ˌæl.ɡəˈrɪð.mɪk ˈbaɪ.əs/", definition: "Systematic errors in computer systems that create unfair outcomes, often reflecting training data." },
        { term: "Chatbot Interface", ipa: "/ˈtʃæt.bɒt ˈɪn.tə.feɪs/", definition: "A software application used to conduct online chat conversations via text or text-to-speech." },
        { term: "Human-in-the-Loop", ipa: "/ˈhjuː.mən ɪn ðə luːp/", definition: "A system design where human oversight and approval remain mandatory for critical actions." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or real-life examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Generative AI writing tools like ChatGPT should be completely integrated into university exams rather than restricted or banned.",
          group2: "Companies should be legally prohibited from using automated AI algorithms to filter and reject job applicants without human review.",
          group3: "Within a decade, AI virtual assistants will provide better, more empathetic customer service than human call centre agents."
        },
        usefulPhrases: [
          "Our group explored the implications of...",
          "From a practical perspective, we believe that...",
          "A major concern raised by our group is...",
          "In conclusion, we strongly maintain that..."
        ]
      }
    },
    '2': {
      intro: "This session focuses on the future of travel and digital disruption, exploring how high-speed digital ticketing, biometric gates, and autonomous vehicles are changing the passenger experience. Working in teams, you will practise pitching future transport innovations, explaining digital customer journeys, and debating whether digital systems make travel more efficient or more stressful.",
      whyItMatters: "International travel is undergoing massive digital transformation. Being able to explain digital passenger processing, evaluate smart airport technologies, and discuss customer convenience in spoken English equips you with the modern vocabulary needed for airport management and your Formative Evaluation.",
      keyTerms: [
        { term: "Biometric Screening", ipa: "/ˌbaɪ.oʊˈmet.rɪk ˈskriː.nɪŋ/", definition: "Using facial recognition or fingerprints to instantly verify passenger identity at airport gates." },
        { term: "Digital Wallet", ipa: "/ˈdɪdʒ.ɪ.təl ˈwɒl.ɪt/", definition: "An electronic system on a smartphone holding boarding passes, payment cards, and digital passports." },
        { term: "Contactless Journey", ipa: "/ˈkɒn.tækt.ləs ˈdʒɜː.ni/", definition: "A seamless airport passage where passengers move from curb to gate without touching physical screens." },
        { term: "Hyperloop", ipa: "/ˈhaɪ.pə.luːp/", definition: "A proposed high-speed transport system carrying passenger pods in low-pressure vacuum tubes." },
        { term: "Electric Vertical Take-off", ipa: "/iˈlek.trɪk ˈvɜː.tɪ.kəl ˈteɪk.ɒf/", definition: "eVTOL aircraft designed for urban air mobility and short point-to-point air taxi journeys." },
        { term: "Augmented Reality", ipa: "/ɔːɡˈmen.tɪd riˈæl.ə.ti/", definition: "Interactive digital wayfinding graphics superimposed onto real-world airport terminal views." },
        { term: "Self-Service Kiosk", ipa: "/self ˈsɜː.vɪs ˈkiː.ɒsk/", definition: "An interactive terminal allowing passengers to print bag tags and check in independently." },
        { term: "Digital Disruption", ipa: "/ˈdɪdʒ.ɪ.təl dɪsˈrʌp.ʃən/", definition: "The transformation of traditional industries caused by innovative digital technologies and business models." },
        { term: "Predictive Maintenance", ipa: "/prɪˈdɪk.tɪv ˈmeɪn.tə.nəns/", definition: "Using sensors to anticipate equipment failures on aircraft or trains before they occur." },
        { term: "Autonomous Pod", ipa: "/ɔːˈtɒn.ə.məs pɒd/", definition: "A self-driving small electric carriage operating along dedicated corridors in airports or campuses." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Within fifteen years, electric air taxis (eVTOL) will replace airport express trains for business travelers connecting to city centres.",
          group2: "Traditional paper boarding passes and physical passports should be entirely abolished in favor of mandatory biometric smartphone IDs.",
          group3: "Hyperloop vacuum-tube travel will remain an expensive technological fantasy that will never achieve commercial viability for mass passengers."
        },
        usefulPhrases: [
          "Our group evaluated the future feasibility of...",
          "While this innovation sounds exciting, we noticed that...",
          "From a passenger convenience perspective...",
          "In conclusion, our group believes that..."
        ]
      }
    },
    '3': {
      intro: "In this session, you hone your debate and critical thinking skills on the wider impact of emerging technology on society, employment, and ethics. Through structured group debates, you will practise challenging assumptions, defending ethical boundaries, and expressing complex viewpoints in fluent, clear spoken English.",
      whyItMatters: "As technology evolves, professionals must not only understand how systems work, but also debate their societal consequences. Learning to articulate ethical positions, present balanced arguments, and handle rapid peer debate in English gives you advanced communicative polish for your Formative Evaluation and international discussions.",
      keyTerms: [
        { term: "Ethical Dilemma", ipa: "/ˈeθ.ɪ.kəl daɪˈlem.ə/", definition: "A complex situation involving a difficult choice between two morally conflicting principles." },
        { term: "Digital Divide", ipa: "/ˈdɪdʒ.ɪ.təl dɪˈvaɪd/", definition: "The socio-economic gap between those who have ready access to computers and the internet and those who do not." },
        { term: "Technological Unemployment", ipa: "/ˌtek.nəˈlɒdʒ.ɪ.kəl ˌʌn.ɪmˈplɔɪ.mənt/", definition: "Job losses caused by the introduction of labor-saving machines and software automation." },
        { term: "Surveillance Society", ipa: "/səˈveɪ.ləns səˈsaɪ.ə.ti/", definition: "A community where people's daily movements and communications are monitored systematically by cameras or data." },
        { term: "Accountability", ipa: "/əˌkaʊn.təˈbɪl.ə.ti/", definition: "The legal and moral obligation of individuals and companies to accept responsibility for their actions." },
        { term: "Disinformation", ipa: "/ˌdɪs.ɪn.fəˈmeɪ.ʃən/", definition: "False or misleading information deliberately spread to deceive public opinion or manipulate elections." },
        { term: "Deepfake", ipa: "/ˈdiːp.feɪk/", definition: "Synthetic digital media in which a person's face or voice is convincingly replaced using deep neural networks." },
        { term: "Right to Disconnect", ipa: "/raɪt tuː ˌdɪs.kəˈnekt/", definition: "The legal right of workers not to engage in work-related communications outside of contracted hours." },
        { term: "Technological Determinism", ipa: "/ˌtek.nəˈlɒdʒ.ɪ.kəl dɪˈtɜː.mɪ.nɪ.zəm/", definition: "The theory that technology is the principal driver of social, cultural, and historical change." },
        { term: "Regulatory Framework", ipa: "/ˈreɡ.jə.lə.tər.i ˈfreɪm.wɜːk/", definition: "A formal system of laws, standards, and rules designed to guide and limit technological use." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or ethical considerations to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Artificial intelligence models that generate hyper-realistic deepfake audio and video should be banned by international law.",
          group2: "The rapid automation of routine white-collar and administrative jobs will create mass technological unemployment that society cannot absorb.",
          group3: "Governments should enforce a strict legal 'Right to Disconnect' with heavy fines for employers who email staff outside work hours."
        },
        usefulPhrases: [
          "Our group tackled the ethical question of...",
          "A fundamental principle we must consider is...",
          "While proponents argue for technological progress, we believe...",
          "To summarize our group's consensus..."
        ]
      }
    },
    '4': {
      intro: "This final session of Module 3 focuses on biometrics, digital identity, cyber security, and individual privacy rights. Working in pairs and small groups, you will practise explaining biometric verification technologies, debating the trade-off between personal privacy and public security, and presenting recommendations on digital data governance in spoken English.",
      whyItMatters: "Biometrics and cybersecurity are central to modern border control, aviation security, and digital administration worldwide. Practising how to explain privacy concerns, describe authentication systems, and argue for robust regulatory protections in English ensures you are fully prepared to present with poise in your Formative Evaluation.",
      keyTerms: [
        { term: "Facial Recognition", ipa: "/ˈfeɪ.ʃəl ˌrek.əɡˈnɪʃ.ən/", definition: "A biometric software application that identifies or verifies an individual by mapping facial features." },
        { term: "Iris Scanning", ipa: "/ˈaɪ.rɪs ˌskæn.ɪŋ/", definition: "An automated biometric identification method that uses mathematical pattern recognition on iris images." },
        { term: "Data Breach", ipa: "/ˈdeɪ.tə briːtʃ/", definition: "A security incident where sensitive, protected, or confidential data is copied or accessed illegally." },
        { term: "Encryption", ipa: "/ɪnˈkrɪp.ʃən/", definition: "The process of converting information into a secret code that obscures the data's true meaning." },
        { term: "Identity Theft", ipa: "/aɪˈden.tə.ti θeft/", definition: "The fraudulent acquisition and use of a person's private identifying information, usually for financial gain." },
        { term: "Two-Factor Authentication", ipa: "/tuː ˈfæk.tər ɔːˌθen.tɪˈkeɪ.ʃən/", definition: "A security process where a user provides two distinct authentication factors to verify their identity." },
        { term: "Cyber Espionage", ipa: "/ˈsaɪ.bər ˈes.pi.ə.nɑːʒ/", definition: "The act of obtaining confidential information without permission from computer systems or networks." },
        { term: "Right to be Forgotten", ipa: "/raɪt tuː biː fəˈɡɒt.ən/", definition: "The legal right to have personal data permanently removed from internet searches and databases." },
        { term: "Biometric Template", ipa: "/ˌbaɪ.oʊˈmet.rɪk ˈtem.pleɪt/", definition: "A mathematical representation of biometric features stored securely in an identification database." },
        { term: "Critical Infrastructure", ipa: "/ˈkrɪt.ɪ.kəl ˈɪn.frəˌstrʌk.tʃər/", definition: "Essential physical and digital assets whose disruption would severely impact national security or the economy." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or real-world examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Public facial recognition surveillance cameras should be completely banned in public spaces to protect individual privacy rights.",
          group2: "Passengers who refuse biometric facial scans at airport gates should be required to undergo extensive manual security screening and delay.",
          group3: "Companies that suffer preventable customer data breaches should face mandatory criminal penalties rather than simple administrative fines."
        },
        usefulPhrases: [
          "When debating biometric security, our group recognized that...",
          "A crucial balance must be struck between...",
          "From a privacy and human rights viewpoint, we contend...",
          "To conclude our final presentation..."
        ]
      }
    }
  }
};

// =========================================================================
// TECHNICAL ENGLISH (AT • LV121E) OVERVIEWS
// =========================================================================
const atOverviews = {
  // -----------------------------------------------------------------------
  // MODULE 1: AERODROME & GROUND OPERATIONS
  // -----------------------------------------------------------------------
  '1': {
    '1': {
      intro: "Welcome to Technical English! In this opening session, you build the spoken confidence to describe aerodrome infrastructure, airfield layouts, and runway designations in English. Working in pairs and small groups, you will practise explaining airfield movement, identifying holding points, and describing visual markings without translating hesitatingly from French.",
      whyItMatters: "Airfields are complex, high-risk operational environments where clear English is the mandatory international standard. Being able to describe runway headings, taxiway intersections, and movement zones accurately in English prevents runway incursions, ensures smooth international teamwork, and prepares you directly for your end-of-module Formative Evaluation.",
      keyTerms: [
        { term: "Runway Heading", ipa: "/ˈrʌn.weɪ ˈhed.ɪŋ/", definition: "The magnetic direction of a runway rounded to the nearest ten degrees and displayed as two digits." },
        { term: "Taxiway", ipa: "/ˈtæk.si.weɪ/", definition: "A paved path connecting runways with aprons, terminals, and maintenance hangars." },
        { term: "Holding Point", ipa: "/ˈhoʊl.dɪŋ pɔɪnt/", definition: "A marked stop line where aircraft must hold until cleared by air traffic control to enter a runway." },
        { term: "Apron", ipa: "/ˈeɪ.prən/", definition: "The paved area where aircraft are parked, boarded, fueled, and serviced (also called the ramp)." },
        { term: "Threshold", ipa: "/ˈθreʃ.hoʊld/", definition: "The beginning portion of a runway usable for landing." },
        { term: "Displaced Threshold", ipa: "/dɪsˈpleɪst ˈθreʃ.hoʊld/", definition: "A threshold located at a point other than the physical beginning of the runway, usable for taxi and takeoff only." },
        { term: "Touchdown Zone", ipa: "/ˈtʌtʃ.daʊn zoʊn/", definition: "The portion of a runway beyond the threshold intended for landing aircraft wheels to touch first." },
        { term: "Runway Incursion", ipa: "/ˈrʌn.weɪ ɪnˈkɜː.ʒən/", definition: "Any unauthorized presence of an aircraft, vehicle, or person on the runway surface." },
        { term: "Blast Pad", ipa: "/blɑːst pæd/", definition: "A paved area before the runway threshold designed to prevent erosion from jet blast." },
        { term: "Stopway", ipa: "/ˈstɒp.weɪ/", definition: "A defined rectangular area at the end of a runway prepared to support an aircraft during an aborted takeoff." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Installing automated cockpit audio alarms that trigger when entering a runway without clearance is more effective than improving airfield painted markings.",
          group2: "All ground service vehicles operating on the active airfield should be equipped with mandatory transponders tracked directly on ATC radar screens.",
          group3: "Airports should eliminate parallel runway operations in low-visibility conditions to eliminate the risk of runway incursions, even if delays increase."
        },
        usefulPhrases: [
          "Our group analyzed the operational safety of...",
          "From an air traffic control perspective...",
          "One critical safety factor to consider is...",
          "In conclusion, our group recommends that..."
        ]
      }
    },
    '2': {
      intro: "This session focuses on expanding your ability to describe the complete passenger terminal journey and airfield movement in technical English. Through pairwork simulations and communicative dialogues, you will practise explaining check-in flows, security screening protocols, baggage handling systems, and boarding procedures using precise operational terminology.",
      whyItMatters: "Coordinating airport passenger movements and baggage logistics requires seamless communication between international airlines, ground handlers, and airport authorities. Developing this operational vocabulary in English ensures you can explain procedures, resolve bottlenecks, and perform with confidence during your Formative Evaluation.",
      keyTerms: [
        { term: "Baggage Reclaim", ipa: "/ˈbæɡ.ɪdʒ rɪˈkleɪm/", definition: "The terminal area where arriving passengers collect checked luggage from automated carousels." },
        { term: "Jet Bridge", ipa: "/dʒet brɪdʒ/", definition: "An enclosed, movable bridge extending from an airport terminal gate to an aircraft door." },
        { term: "Boarding Gate", ipa: "/ˈbɔː.dɪŋ ɡeɪt/", definition: "The terminal area where passengers assemble and have boarding passes checked before entering an aircraft." },
        { term: "Security Checkpoint", ipa: "/sɪˈkjʊə.rə.ti ˈtʃek.pɔɪnt/", definition: "The inspection station where passengers and carry-on bags are screened for prohibited items." },
        { term: "Customs Clearance", ipa: "/ˈkʌs.təmz ˈklɪə.rəns/", definition: "Official inspection and documentation of imported goods and passenger declarations entering a country." },
        { term: "Airside", ipa: "/ˈeə.saɪd/", definition: "The secure part of an airport beyond customs and security controls, including gates and ramps." },
        { term: "Landside", ipa: "/ˈlænd.saɪd/", definition: "The public area of an airport terminal before security and passport screening." },
        { term: "Transit Passenger", ipa: "/ˈtræn.zɪt ˈpæs.ɪn.dʒər/", definition: "A traveler changing planes at an intermediate airport without officially entering the host country." },
        { term: "Baggage Carousel", ipa: "/ˈbæɡ.ɪdʒ ˌkær.əˈsel/", definition: "A continuous rotating conveyor belt from which arriving passengers pick up their luggage." },
        { term: "Stand Allocation", ipa: "/stænd ˌæl.əˈkeɪ.ʃən/", definition: "The assigned parking spot or gate where an arriving aircraft is scheduled to park." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Full self-service automated biometric gates without human boarding agents improve terminal efficiency and passenger satisfaction.",
          group2: "Limiting all commercial passengers to a single small carry-on bag would speed up turnaround times and reduce flight departure delays significantly.",
          group3: "Airport transit passenger terminals should be designed to completely separate arriving and departing passenger streams for biosecurity and customs reasons."
        },
        usefulPhrases: [
          "When evaluating passenger terminal flow, our group noted...",
          "From an operational ground handling point of view...",
          "A major bottleneck we identified is...",
          "To conclude our group's assessment..."
        ]
      }
    },
    '3': {
      intro: "In this session, you examine aircraft turnaround operations, ramp safety protocols, and ground handling coordination in spoken English. Working in teams, you will practise describing simultaneous ramp services (pushback, refuelling, catering, de-icing, and baggage loading), reporting ground hazards, and giving clear operational briefings.",
      whyItMatters: "The 30-to-45 minute aircraft turnaround is the most time-critical and dangerous phase of airline ground operations. Practising spoken English for apron communication, hazard warnings, and marshaling coordination ensures you can express operational needs clearly and succeed in your Module 1 Formative Evaluation.",
      keyTerms: [
        { term: "Turnaround Time", ipa: "/ˈtɜːn.əˌraʊnd taɪm/", definition: "The total elapsed time between an aircraft arriving on stand and departing on its next scheduled flight." },
        { term: "Pushback Tug", ipa: "/ˈpʊʃ.bæk tʌɡ/", definition: "A specialized heavy vehicle used to push an aircraft backwards away from an airport gate." },
        { term: "Chocks", ipa: "/tʃɒks/", definition: "Heavy rubber or wooden blocks placed against aircraft wheels to prevent accidental movement when parked." },
        { term: "Ground Power Unit", ipa: "/ɡraʊnd ˈpaʊ.ər ˈjuː.nɪt/", definition: "An external electrical generator connecting to an aircraft to supply electricity while main engines are off." },
        { term: "De-icing", ipa: "/diːˈaɪ.sɪŋ/", definition: "The operational process of removing frost, ice, or snow from aircraft control surfaces using heated glycol." },
        { term: "Marshaling", ipa: "/ˈmɑː.ʃəl.ɪŋ/", definition: "Directing an aircraft into its parking stand using hand signals, lighted wands, or automated guidance displays." },
        { term: "Foreign Object Debris", ipa: "/ˈfɒr.ən ˈɒb.dʒekt ˈdeb.riː/", definition: "Any loose item on the runway or apron that could damage an aircraft engine or tire (FOD)." },
        { term: "Baggage Handler", ipa: "/ˈbæɡ.ɪdʒ ˈhænd.lər/", definition: "A ramp operative responsible for loading, securing, and unloading passenger luggage and cargo." },
        { term: "Refuelling Bowser", ipa: "/ˌriːˈfjuː.əl.ɪŋ ˈbaʊ.zər/", definition: "A tanker truck carrying aviation fuel or connecting to underground fuel hydrant pits on the apron." },
        { term: "Wingtip Clearance", ipa: "/ˈwɪŋ.tɪp ˈklɪə.rəns/", definition: "The safe buffer distance maintained between an aircraft's wingtip and nearby buildings, poles, or aircraft." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational safety examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Shortening aircraft turnaround times below 30 minutes compromises ground safety checks and significantly increases apron collision risks.",
          group2: "All apron ground service vehicles (tugs, fuelers, belt loaders) should be fully automated and electric to eliminate human driving errors.",
          group3: "Pilots should only initiate engine start after pushback is completely finished and the ground crew headset is disconnected."
        },
        usefulPhrases: [
          "Our group explored the safety challenges of turnaround operations...",
          "From a ramp coordination perspective, we believe...",
          "One critical hazard to consider is...",
          "In conclusion, our group's recommendation is that..."
        ]
      }
    },
    '4': {
      intro: "This session explores the wide variety of professional careers, qualifications, and operational roles across modern aviation. You will practise describing job responsibilities, asking interview questions, and discussing career pathways for air traffic controllers, pilots, airport operations managers, and safety auditors in fluent spoken English.",
      whyItMatters: "As an ENAC student preparing for an international career, you will frequently introduce your role, describe professional competencies, and collaborate across departments in English. Practising professional profile presentations directly prepares you for both job interviews and your Formative Evaluation presentation.",
      keyTerms: [
        { term: "Air Traffic Controller", ipa: "/eər ˈtræf.ɪk kənˈtroʊ.lər/", definition: "A licensed professional who manages the safe, orderly, and expeditious flow of aircraft in the air and on the ground." },
        { term: "Ramp Agent", ipa: "/ræmp ˈeɪ.dʒənt/", definition: "An airport professional coordinating ground handling, baggage loading, and aircraft servicing on the ramp." },
        { term: "Safety Auditor", ipa: "/ˈseɪf.ti ˈɔː.dɪ.tər/", definition: "An inspector who examines operational procedures and records to ensure compliance with aviation safety regulations." },
        { term: "Flight Dispatcher", ipa: "/flaɪt dɪˈspætʃ.ər/", definition: "A licensed specialist who plans flight routes, calculates fuel requirements, and monitors flights in progress." },
        { term: "Avionics Technician", ipa: "/ˌeɪ.viˈɒn.ɪks tekˈnɪʃ.ən/", definition: "A specialist technician responsible for installing, inspecting, and testing aircraft electronic flight systems." },
        { term: "Ground Operations Manager", ipa: "/ɡraʊnd ˌɒp.ərˈeɪ.ʃənz ˈmæn.ɪ.dʒər/", definition: "A senior executive supervising all airline or airport ramp operations, turnaround efficiency, and safety." },
        { term: "Crew Scheduling", ipa: "/kruː ˈskedʒ.uː.lɪŋ/", definition: "The operational department responsible for rostering pilots and flight attendants in compliance with flight time limits." },
        { term: "Meteorological Forecaster", ipa: "/ˌmiː.ti.ə.rəˈlɒdʒ.ɪ.kəl ˈfɔː.kɑː.stər/", definition: "A specialist analyzing atmospheric conditions to issue METARs, TAFs, and severe weather warnings for pilots." },
        { term: "Bird Hazard Officer", ipa: "/bɜːd ˈhæz.əd ˈɒf.ɪ.sər/", definition: "A wildlife biologist or airfield operative monitoring and dispersing birds and animals away from runways." },
        { term: "Aviation Licensing", ipa: "/ˌeɪ.viˈeɪ.ʃən ˈlaɪ.sən.sɪŋ/", definition: "The formal process of granting and renewing official regulatory certification to pilots, ATCOs, and technicians." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or professional examples to support your group's view.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Air traffic controller training should prioritize simulated emergency stress management over manual radar separation exercises.",
          group2: "Mandatory retirement ages for commercial pilots and air traffic controllers are outdated and should be replaced by individual competency testing.",
          group3: "The most demanding job in commercial aviation is not the airline captain, but the ground operations manager coordinating tight turnaround slots."
        },
        usefulPhrases: [
          "When examining professional responsibilities in aviation, our group found...",
          "From a career and training perspective...",
          "A major challenge in this role is...",
          "In summary, our group concludes that..."
        ]
      }
    }
  },

  // -----------------------------------------------------------------------
  // MODULE 2: AIRCRAFT SYSTEMS & AIRFRAME
  // -----------------------------------------------------------------------
  '2': {
    '1': {
      intro: "In this session, you develop your ability to clearly explain flight principles, aerodynamic forces (lift, weight, thrust, drag), and airfoil performance in spoken English. Working in pairs, you will practise describing how aircraft fly, explaining angle of attack changes, and discussing stall recovery procedures without translating in your head.",
      whyItMatters: "Explaining aerodynamic concepts in clear, simple English is an essential skill when discussing aircraft handling, flight safety, and operational performance with international pilots and colleagues. Practising these descriptive patterns ensures you can express technical ideas confidently during your Formative Evaluation.",
      keyTerms: [
        { term: "Aerodynamic Lift", ipa: "/ˌeə.roʊ.daɪˈnæm.ɪk lɪft/", definition: "The upward aerodynamic force generated by the airflow over an airfoil that overcomes aircraft weight." },
        { term: "Thrust", ipa: "/θrʌst/", definition: "The forward force produced by engines that propels an aircraft through the surrounding air mass." },
        { term: "Parasite Drag", ipa: "/ˈpær.ə.saɪt dræɡ/", definition: "The aerodynamic resistance created by an aircraft's surface friction, shape, and external components." },
        { term: "Induced Drag", ipa: "/ɪnˈdjuːst dræɡ/", definition: "The drag inevitably created as a direct byproduct of generating aerodynamic lift, highest at low speeds." },
        { term: "Angle of Attack", ipa: "/ˈæŋ.ɡəl əv əˈtæk/", definition: "The acute angle between the chord line of an airfoil and the oncoming relative wind direction." },
        { term: "Aerodynamic Stall", ipa: "/ˌeə.roʊ.daɪˈnæm.ɪk stɔːl/", definition: "A sudden loss of lift occurring when the critical angle of attack is exceeded and airflow separates from the wing." },
        { term: "Airfoil Camber", ipa: "/ˈeə.fɔɪl ˈkæm.bər/", definition: "The degree of asymmetry between the upper and lower curved surfaces of an aircraft wing." },
        { term: "Wingtip Vortices", ipa: "/ˈwɪŋ.tɪp ˈvɔː.tɪ.siːz/", definition: "Circular patterns of rotating air left behind a wing as it generates lift, creating wake turbulence." },
        { term: "Ground Effect", ipa: "/ɡraʊnd ɪˈfekt/", definition: "Increased lift and decreased induced drag that occurs when an aircraft flies within one wingspan of the ground." },
        { term: "Aspect Ratio", ipa: "/ˈæs.pekt ˈreɪ.ʃi.oʊ/", definition: "The ratio of a wing's span to its mean chord line, determining aerodynamic glide efficiency." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's position.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Pilots rely too much on automated angle-of-attack protection systems and are gradually losing basic manual aerodynamic stall recovery instincts.",
          group2: "Winglets and blended wingtips provide such significant fuel efficiency gains that older airliners without them should pay higher landing fees.",
          group3: "Wake turbulence separation behind heavy airliners should be determined dynamically by real-time wind sensors rather than rigid distance matrices."
        },
        usefulPhrases: [
          "Our group investigated the aerodynamic principle of...",
          "From a flight operations perspective, we believe...",
          "A crucial point that is often misunderstood is...",
          "To summarize our group's technical argument..."
        ]
      }
    },
    '2': {
      intro: "In this session, you develop your ability to clearly describe and discuss aircraft structures and flight control systems in spoken English. Working in pairs and small groups, you will practise explaining how key aerodynamic surfaces function, describing mechanical and hydraulic issues clearly, and asking precise questions using standard technical vocabulary. This interactive practice helps you move beyond basic descriptions to explain operational situations naturally and accurately.",
      whyItMatters: "In international aviation, English is the shared global language between pilots, air traffic controllers, and airport teams. When communicating during flight operations or debriefings, you must be able to describe mechanical systems, report anomalies, and clarify technical details without hesitation or misunderstanding. Developing this specialised vocabulary and spoken confidence gives you the language skills you need to participate effectively in technical discussions and perform with confidence in your end-of-module Formative Evaluation.",
      keyTerms: [
        { term: "Fuselage", ipa: "/ˈfjuː.zə.lɑːʒ/", definition: "The central body of an aircraft holding crew, passengers, baggage, and structural connection points." },
        { term: "Empennage", ipa: "/ˌɑːm.pəˈnɑːʒ/", definition: "The complete tail assembly of an aircraft, consisting of the vertical fin and horizontal stabilizer." },
        { term: "Leading Edge", ipa: "/ˈliː.dɪŋ edʒ/", definition: "The forwardmost edge of an airfoil that meets the oncoming relative wind first." },
        { term: "Trailing Edge", ipa: "/ˈtreɪ.lɪŋ edʒ/", definition: "The rear edge of a wing where the airflows from the upper and lower surfaces recombine." },
        { term: "Aileron", ipa: "/ˈeɪ.lə.rɒn/", definition: "A primary flight control surface hinged on the outer trailing edge of a wing that controls aircraft roll." },
        { term: "Elevator", ipa: "/ˈel.ə.veɪ.tər/", definition: "A horizontal flight control surface hinged to the empennage that controls pitch about the lateral axis." },
        { term: "Rudder", ipa: "/ˈrʌd.ər/", definition: "A vertical control surface hinged on the tail fin that controls aircraft yaw about the vertical axis." },
        { term: "Hydraulic Actuator", ipa: "/haɪˈdrɔː.lɪk ˈæk.tʃu.eɪ.tər/", definition: "A mechanical piston powered by pressurized fluid that moves primary flight control surfaces." },
        { term: "Flaps and Slats", ipa: "/flæps ənd slæts/", definition: "High-lift movable surfaces on the wing edges extended during takeoff and landing to increase camber." },
        { term: "Flight Control Surface", ipa: "/flaɪt kənˈtroʊl ˈsɜː.fɪs/", definition: "Movable aerodynamic panels allowing pilots to adjust aircraft attitude, direction, and roll." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Modern automated fly-by-wire flight control computers are now so reliable that manual mechanical backup systems will soon become completely unnecessary on commercial airliners.",
          group2: "Clear spoken English and standardized communication between technical teams and pilots prevent far more safety incidents than redundant mechanical systems.",
          group3: "Routine aircraft structural inspections should be performed primarily by automated drones and AI cameras rather than human maintenance technicians."
        },
        usefulPhrases: [
          "Our group explored the operational balance between...",
          "From a flight safety and maintenance perspective...",
          "One key operational challenge we identified is...",
          "In conclusion, our group recommends that..."
        ]
      }
    },
    '3': {
      intro: "This session examines commercial aircraft families, airline fleet choices, and business models in technical English. Working in teams, you will practise comparing aircraft performance specifications, discussing range capabilities, and debating the operational merits of twin-engine long-haul jets versus historic four-engine aircraft in spoken English.",
      whyItMatters: "Airlines and aviation authorities make multi-billion euro fleet investment decisions based on route economics and fuel efficiency. Being able to discuss aircraft specifications, seat-kilometer costs, and airline business models in fluent English prepares you for commercial strategy discussions and enhances your Formative Evaluation presentation.",
      keyTerms: [
        { term: "Narrow-Body Aircraft", ipa: "/ˈnær.oʊ ˈbɒd.i ˈeə.krɑːft/", definition: "A single-aisle commercial airliner seating between 100 and 240 passengers (e.g. A320, B737)." },
        { term: "Wide-Body Aircraft", ipa: "/waɪd ˈbɒd.i ˈeə.krɑːft/", definition: "A twin-aisle commercial airliner with a cabin diameter over 5 metres seating 250 to 500+ passengers." },
        { term: "Fleet Commonality", ipa: "/fliːt ˌkɒm.əˈnæl.ə.ti/", definition: "Operating identical or related aircraft types to save costs on pilot training, spare parts, and tooling." },
        { term: "Payload Range", ipa: "/ˈpeɪ.loʊd reɪndʒ/", definition: "The maximum distance an aircraft can fly with a given weight of revenue passengers and cargo." },
        { term: "Fuel Burn Efficiency", ipa: "/fjuːəl bɜːn ɪˈfɪʃ.ən.si/", definition: "The quantity of jet fuel consumed per passenger-kilometer or revenue ton-kilometer flown." },
        { term: "Low-Cost Carrier", ipa: "/loʊ kɒst ˈkær.i.ər/", definition: "An airline operating a simplified business model emphasizing point-to-point flights and high seat density." },
        { term: "Legacy Carrier", ipa: "/ˈleɡ.ə.si ˈkær.i.ər/", definition: "A traditional full-service flag carrier airline operating global hub-and-spoke international routes." },
        { term: "ETOPS Certification", ipa: "/iː tɒps ˌsɜː.tɪ.fɪˈkeɪ.ʃən/", definition: "Extended-range Twin-engine Operational Performance Standards allowing twin-jets to fly distant ocean routes." },
        { term: "Turnaround Efficiency", ipa: "/ˈtɜːn.əˌraʊnd ɪˈfɪʃ.ən.si/", definition: "Optimizing ground operations to minimize aircraft time spent parked at gates between revenue flights." },
        { term: "Auxiliary Power Unit", ipa: "/ɔːɡˈzɪl.jə.ri ˈpaʊ.ər ˈjuː.nɪt/", definition: "A small gas turbine engine in an aircraft tail providing electrical power and air conditioning on the ground (APU)." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or airline examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Long-haul point-to-point routes flown by modern narrow-body jets (A321XLR) will completely eliminate the traditional hub-and-spoke mega-hub model.",
          group2: "Ultra-low-cost airlines provide superior environmental efficiency per passenger-seat than full-service legacy airlines due to higher cabin load factors.",
          group3: "Operating a 100% single-type fleet provides such overwhelming maintenance savings that multi-type legacy fleets will soon be economically unviable."
        },
        usefulPhrases: [
          "When analyzing airline fleet economics, our group observed...",
          "From an operational and commercial viewpoint, we contend...",
          "One major counter-argument raised in our discussion is...",
          "To summarize our group's conclusion..."
        ]
      }
    },
    '4': {
      intro: "In this session, you examine historic aviation accidents and investigate how lessons learned have transformed global flight safety standards. Working in pairs and small groups, you will practise describing safety chains of events, discussing non-punitive reporting cultures, and explaining procedural improvements in precise spoken English.",
      whyItMatters: "Commercial aviation has achieved its unprecedented safety record through open, honest analysis of past incidents. Being able to explain safety investigations, discuss human factors, and present accident findings in objective, professional English is an essential leadership skill and forms a central topic in your Formative Evaluation.",
      keyTerms: [
        { term: "Air Accident Investigation", ipa: "/eər ˈæk.sɪ.dənt ɪnˌves.tɪˈɡeɪ.ʃən/", definition: "The formal technical process of determining the causes of an aircraft occurrence to prevent repetition." },
        { term: "Flight Data Recorder", ipa: "/flaɪt ˈdeɪ.tə rɪˈkɔː.dər/", definition: "An armored device recording hundreds of flight parameters like airspeed, altitude, and control inputs (FDR)." },
        { term: "Cockpit Voice Recorder", ipa: "/ˈkɒk.pɪt vɔɪs rɪˈkɔː.dər/", definition: "An armored device recording cockpit conversations, radio transmissions, and background sounds (CVR)." },
        { term: "Just Culture", ipa: "/dʒʌst ˈkʌl.tʃər/", definition: "A safety culture where operational staff are not punished for human errors, but reckless behavior is not tolerated." },
        { term: "Root Cause Analysis", ipa: "/ruːt kɔːz əˈnæl.ə.sɪs/", definition: "A structured problem-solving method identifying the fundamental underlying factor causing a safety incident." },
        { term: "Airworthiness Directive", ipa: "/ˈeəˌwɜː.ði.nəs dɪˈrek.tɪv/", definition: "A legally mandatory notification issued by an aviation regulator to correct an unsafe condition in an aircraft." },
        { term: "Safety Management System", ipa: "/ˈseɪf.ti ˈmæn.ɪdʒ.mənt ˈsɪs.təm/", definition: "A systematic approach to managing aviation safety, including organizational structures, policies, and procedures (SMS)." },
        { term: "Situational Awareness", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən.əl əˈweə.nəs/", definition: "An accurate mental perception of an aircraft's position, systems state, and surrounding environmental hazards." },
        { term: "Controlled Flight Into Terrain", ipa: "/kənˈtroʊld flaɪt ˈɪn.tuː təˈreɪn/", definition: "An accident where an airworthy aircraft under pilot control is unintentionally flown into terrain or water (CFIT)." },
        { term: "Safety Recommendation", ipa: "/ˈseɪf.ti ˌrek.ə.menˈdeɪ.ʃən/", definition: "A preventive proposal made by an accident investigation board to improve aviation safety standards." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or investigation examples to support your group's position.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Cockpit voice recorder audio should be streamed live to ground servers via satellite rather than relying exclusively on physical crash-protected black boxes.",
          group2: "Mandatory confidential incident reporting without fear of punishment has contributed more to global aviation safety than advanced avionics technology.",
          group3: "Aviation accident reports should strictly omit individual pilot names to protect safety culture and prevent sensationalized media trials."
        },
        usefulPhrases: [
          "Our group examined the safety implications of...",
          "From an accident investigation and lessons-learned standpoint...",
          "A fundamental principle in modern safety management is...",
          "In conclusion, our group's assessment is that..."
        ]
      }
    }
  },

  // -----------------------------------------------------------------------
  // MODULE 3: FLIGHT OPERATIONS & METEOROLOGY
  // -----------------------------------------------------------------------
  '3': {
    '1': {
      intro: "In this session, you explore aviation meteorology, weather hazards, and operational decision-making in spoken English. Working in pairs, you will practise reading and interpreting METAR and TAF weather reports, explaining severe weather risks (icing, microbursts, wind shear), and discussing go-around criteria in fluent technical English.",
      whyItMatters: "Weather remains the primary external factor influencing flight planning, diversions, and terminal safety. Being able to decode meteorological reports aloud, describe atmospheric threats, and justify diversion decisions in clear English is fundamental for operational coordination and your Formative Evaluation.",
      keyTerms: [
        { term: "METAR Report", ipa: "/ˈmiː.tɑːr rɪˈpɔːt/", definition: "A standardized international routine aerodrome meteorological report issued every 30 or 60 minutes." },
        { term: "TAF Forecast", ipa: "/tæf ˈfɔː.kɑːst/", definition: "Terminal Aerodrome Forecast predicting expected weather conditions within 5 nautical miles over 24 to 30 hours." },
        { term: "Wind Shear", ipa: "/wɪnd ʃɪər/", definition: "A sudden, drastic change in wind speed and/or direction over a very short distance, critical near runways." },
        { term: "Microburst", ipa: "/ˈmaɪ.kroʊˌbɜːst/", definition: "A localized column of sinking air (downdraft) within a thunderstorm that spreads outward violently at ground level." },
        { term: "Structural Icing", ipa: "/ˈstrʌk.tʃər.əl ˈaɪ.sɪŋ/", definition: "The accumulation of ice on the airframe and wings during flight, increasing weight and degrading lift." },
        { term: "Runway Visual Range", ipa: "/ˈrʌn.weɪ ˈvɪʒ.u.əl reɪndʒ/", definition: "The distance over which a pilot on the runway centerline can see runway surface markings or lights (RVR)." },
        { term: "Ceiling", ipa: "/ˈsiː.lɪŋ/", definition: "The height above the earth's surface of the lowest layer of clouds reported as broken (BKN) or overcast (OVC)." },
        { term: "Clear Air Turbulence", ipa: "/klɪər eər ˈtɜː.bjə.ləns/", definition: "Severe atmospheric turbulence occurring in cloud-free skies, typically associated with high-altitude jet streams." },
        { term: "Instrument Meteorological Conditions", ipa: "/ˈɪn.strə.mənt ˌmiː.ti.ə.rəˈlɒdʒ.ɪ.kəl kənˈdɪʃ.ənz/", definition: "Weather conditions where flight by outside visual references is not safe (IMC), requiring instrument flight rules." },
        { term: "Freezing Rain", ipa: "/ˈfriː.zɪŋ reɪn/", definition: "Rain that falls in liquid form but freezes immediately upon contact with sub-zero aircraft surfaces, creating glaze." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Pilots should be legally prohibited from attempting an approach whenever the reported runway visual range drops below category minimums.",
          group2: "Automated weather reporting sensors (AWOS) are now more reliable for runway visual range than human meteorological observers.",
          group3: "Executing a precautionary go-around due to sudden wind shear should be completely routine and never investigated as an incident."
        },
        usefulPhrases: [
          "Our group analyzed the meteorological challenge of...",
          "From a flight operations and weather minimums standpoint...",
          "A critical hazard that demands immediate action is...",
          "In conclusion, our group recommends that..."
        ]
      }
    },
    '2': {
      intro: "This session examines flight planning, fuel reserve calculations, and alternate aerodrome selection in technical English. Working in teams, you will practise explaining operational flight plans (OFP), calculating contingency fuel margins, and justifying diversion decisions under simulated operational disruptions in spoken English.",
      whyItMatters: "Fuel planning and diversion decisions involve balancing commercial punctuality with absolute flight safety. Developing the English communication skills to debate diversion options, explain fuel states, and coordinate with international dispatchers ensures you perform with confidence in your Formative Evaluation.",
      keyTerms: [
        { term: "Operational Flight Plan", ipa: "/ˌɒp.ərˈeɪ.ʃən.əl flaɪt plæn/", definition: "The official flight dispatch document outlining route, altitudes, fuel requirements, and alternate airports (OFP)." },
        { term: "Contingency Fuel", ipa: "/kənˈtɪn.dʒən.si fjuːəl/", definition: "Extra fuel carried to compensate for unforeseen factors like route deviations, wind changes, or altitude holds." },
        { term: "Alternate Aerodrome", ipa: "/ˈɔːl.tər.nət ˈeə.rə.droʊm/", definition: "An adequate secondary airport to which an aircraft may proceed when landing at the destination becomes impossible." },
        { term: "Final Reserve Fuel", ipa: "/ˈfaɪ.nəl rɪˈzɜːv fjuːəl/", definition: "The minimum mandatory fuel required to fly for 30 minutes (jet) or 45 minutes (prop) at holding speed at 1,500 ft." },
        { term: "Holding Pattern", ipa: "/ˈhoʊl.dɪŋ ˈpæt.ən/", definition: "A predetermined racetrack flight path flown by an aircraft awaiting air traffic control landing clearance." },
        { term: "Point of Safe Return", ipa: "/pɔɪnt əv seɪf rɪˈtɜːn/", definition: "The furthest geographic point along a flight path from which an aircraft can return to its departure airfield." },
        { term: "Fuel Diversion", ipa: "/fjuːəl daɪˈvɜː.ʒən/", definition: "A flight reroute to an alternate airport made when fuel reserves are depleted to minimum acceptable levels." },
        { term: "Payload Restriction", ipa: "/ˈpeɪ.loʊd rɪˈstrɪk.ʃən/", definition: "Limiting passenger or cargo weight to allow extra fuel carriage for long-distance or headwind routes." },
        { term: "En-Route Alternate", ipa: "/ɒn ruːt ˈɔːl.tər.nət/", definition: "An intermediate airport suitable for emergency landing along an extended flight path." },
        { term: "Minimum Fuel Declaration", ipa: "/ˈmɪn.ɪ.məm fjuːəl ˌdek.ləˈreɪ.ʃən/", definition: "An operational radio call informing ATC that any unexpected delay would result in landing with less than final reserve fuel." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Carrying significant extra 'tankering' fuel from cheap airports increases aircraft weight and carbon emissions to an unacceptable degree.",
          group2: "Airlines should never penalize dispatchers or captains who elect to carry maximum contingency fuel for unpredictable weather.",
          group3: "Declaring a 'Mayday Fuel' emergency should carry zero blame or administrative investigation if unexpected holding forced the decision."
        },
        usefulPhrases: [
          "Our group evaluated the fuel planning scenario involving...",
          "From an operational dispatch perspective, we believe...",
          "One critical safety threshold that cannot be compromised is...",
          "To summarize our group's recommendation..."
        ]
      }
    },
    '3': {
      intro: "In this session, you explore aviation safety versus airport security, threat screening protocols, and aircraft inspection procedures. Working in pairs and small groups, you will practise explaining security screening steps, reporting suspicious ramp activity, and distinguishing between unintentional safety hazards and intentional security threats in spoken English.",
      whyItMatters: "Safety and security require distinct operational responses and vocabulary. Being able to explain baggage screening, discuss perimeter protection, and communicate threat levels in clear, unambiguous English is essential for airport personnel and directly enriches your Formative Evaluation presentation.",
      keyTerms: [
        { term: "Aviation Security", ipa: "/ˌeɪ.viˈeɪ.ʃən sɪˈkjʊə.rə.ti/", definition: "Measures and resources designed to prevent intentional unlawful acts against civil aviation (AVSEC)." },
        { term: "Aviation Safety", ipa: "/ˌeɪ.viˈeɪ.ʃən ˈseɪf.ti/", definition: "The state in which risks associated with aviation activities are reduced and controlled to an acceptable level." },
        { term: "Perimeter Security", ipa: "/pəˈrɪm.ɪ.tər sɪˈkjʊə.rə.ti/", definition: "Physical fences, cameras, and intrusion detection systems protecting an airport's operational boundary." },
        { term: "Threat Assessment", ipa: "/θret əˈses.mənt/", definition: "The formal evaluation of potential security risks to identify vulnerabilities and determine necessary safeguards." },
        { term: "Ramp Access Control", ipa: "/ræmp ˈæk.ses kənˌtroʊl/", definition: "Strict security protocols verifying identity badges and authorization before individuals enter airside zones." },
        { term: "Hold Baggage Screening", ipa: "/hoʊld ˈbæɡ.ɪdʒ ˈskriː.nɪŋ/", definition: "Automated X-ray and computed tomography (CT) scanning of checked passenger luggage for explosives." },
        { term: "Sterile Area", ipa: "/ˈster.aɪl ˈeə.ri.ə/", definition: "The secure terminal zone between security checkpoints and aircraft doors accessible only to screened passengers." },
        { term: "Unruly Passenger", ipa: "/ʌnˈruː.li ˈpæs.ɪn.dʒər/", definition: "A traveler who commits violent, disruptive, or non-compliant acts that threaten aircraft order and safety." },
        { term: "Security Audit", ipa: "/sɪˈkjʊə.rə.ti ˈɔː.dɪt/", definition: "An independent regulatory examination verifying that an airport or airline complies with security standards." },
        { term: "Laser Illumination", ipa: "/ˈleɪ.zər ɪˌluː.mɪˈneɪ.ʃən/", definition: "The illegal act of aiming high-powered handheld lasers at cockpits during takeoff or landing, blinding flight crew." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or security examples to support your group's argument.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Full-body millimeter-wave scanners should completely replace manual physical pat-down searches at all airport checkpoints.",
          group2: "Airlines should maintain a shared international lifetime ban list for passengers convicted of violent or unruly cabin behavior.",
          group3: "Airside perimeter security is now more vulnerable to unauthorized commercial drone intrusions than to ground physical fence breaches."
        },
        usefulPhrases: [
          "Our group investigated the operational distinction between safety and security...",
          "From an airport threat assessment perspective...",
          "A major vulnerability that must be addressed is...",
          "In conclusion, our group recommends that..."
        ]
      }
    },
    '4': {
      intro: "This final session of Semester 1 brings together all technical topics in a comprehensive multi-team aviation review and quiz. Working in small groups, you will practise rapid-fire technical explanations, review key aeronautical vocabulary from across the semester, and consolidate the spoken confidence needed to excel in your final Formative Evaluation.",
      whyItMatters: "Spontaneous recall of technical terminology and the ability to formulate clear spoken answers under time limits are the hallmarks of a confident English speaker. This collaborative session consolidates your learning across all modules and ensures you enter your evaluation fully prepared.",
      keyTerms: [
        { term: "Standard Phraseology", ipa: "/ˈstæn.dəd ˌfreɪ.ziˈɒl.ə.dʒi/", definition: "A standardized set of concise, unambiguous English words and phrases mandatory for international aviation radio." },
        { term: "Readback Requirement", ipa: "/ˈriːd.bæk rɪˈkwaɪə.mənt/", definition: "The safety rule requiring pilots to repeat back safety-critical ATC clearances to confirm accurate reception." },
        { term: "Go-Around Maneuver", ipa: "/ɡoʊ əˈraʊnd məˈnuː.vər/", definition: "An aborted landing procedure where a pilot discontinues an approach and climbs away to re-enter the traffic pattern." },
        { term: "Critical Phase of Flight", ipa: "/ˈkrɪt.ɪ.kəl feɪz əv flaɪt/", definition: "Flight operations below 10,000 feet, including taxi, takeoff, and landing, where sterile cockpit rules apply." },
        { term: "Sterile Cockpit Rule", ipa: "/ˈster.aɪl ˈkɒk.pɪt ruːl/", definition: "The regulation prohibiting flight crew from engaging in non-essential conversations during critical flight phases." },
        { term: "Non-Normal Checklist", ipa: "/nɒn ˈnɔː.məl ˈtʃek.lɪst/", definition: "A printed or electronic quick-reference handbook of step-by-step procedures used during in-flight malfunctions." },
        { term: "Crosswind Component", ipa: "/ˈkrɒs.wɪnd kəmˈpoʊ.nənt/", definition: "The portion of wind blowing perpendicular to a runway heading that affects aircraft directional control." },
        { term: "Traffic Alert Collision Avoidance", ipa: "/ˈtræf.ɪk əˌlɜːt kəˈlɪʒ.ən əˈvɔɪ.dəns/", definition: "An onboard transponder-based system detecting conflicting aircraft and issuing resolution advisories (TCAS)." },
        { term: "Debriefing Session", ipa: "/ˌdiːˈbriː.fɪŋ ˈseʃ.ən/", definition: "A structured post-flight meeting where crew review performance, discuss anomalies, and share feedback." },
        { term: "Human Factors Principles", ipa: "/ˈhjuː.mən ˈfæk.tərz ˈprɪn.sə.pəlz/", definition: "The science of understanding human capabilities, limitations, and teamwork to optimize aviation safety." }
      ],
      speakingTask: {
        title: "Additional Speaking Activity • Practice in Groups of 3",
        instructions: "This additional speaking activity provides extra spoken English practice. Divide the class into 3 groups (or working trios). Each group is assigned one statement below to discuss together, give reasons and examples, and prepare a short 2-minute spoken summary using today's vocabulary.",
        requirements: [
          "Use at least 4 of today's 10 useful words.",
          "Give at least two clear reasons or operational examples to support your group's position.",
          "Ensure all 3 team members speak during your 2-minute spoken summary."
        ],
        statements: {
          group1: "Strict adherence to standardized ICAO phraseology is far more critical for aviation safety than having high general conversational fluency.",
          group2: "Mandatory flight simulator recurrent training should focus primarily on unexpected human factors dilemmas rather than textbook system failures.",
          group3: "The single most important skill developed during Semester 1 English is the confidence to ask for clarification when an operational instruction is unclear."
        },
        usefulPhrases: [
          "In our final semester technical review, our group agreed that...",
          "From a practical operational communication perspective...",
          "A vital lesson learned across this semester is that...",
          "To conclude our group's presentation..."
        ]
      }
    }
  }
};

// =========================================================================
// INJECT OVERVIEWS INTO data/course-data.js
// =========================================================================
console.log('🔄 Populating rich B1/B2 overviews across all 24 sessions in data/course-data.js...');

let countAg = 0;
let countAt = 0;

// 1. General English (AG)
if (courseData.ag) {
  for (const m of ['1', '2', '3']) {
    if (courseData.ag[m] && courseData.ag[m].sessions) {
      for (const s of ['1', '2', '3', '4']) {
        if (agOverviews[m] && agOverviews[m][s]) {
          courseData.ag[m].sessions[s].overview = agOverviews[m][s];
          countAg++;
        }
      }
    }
    // Synchronize top-level alias
    if (courseData[m] && courseData[m].sessions) {
      for (const s of ['1', '2', '3', '4']) {
        if (agOverviews[m] && agOverviews[m][s]) {
          courseData[m].sessions[s].overview = agOverviews[m][s];
        }
      }
    }
  }
}

// 2. Technical English (AT / AAS)
const atKey = courseData.aas ? 'aas' : (courseData.at ? 'at' : null);
if (atKey && courseData[atKey]) {
  for (const m of ['1', '2', '3']) {
    if (courseData[atKey][m] && courseData[atKey][m].sessions) {
      for (const s of ['1', '2', '3', '4']) {
        if (atOverviews[m] && atOverviews[m][s]) {
          courseData[atKey][m].sessions[s].overview = atOverviews[m][s];
          countAt++;
        }
      }
    }
  }
}

// Write back data/course-data.js with exact UMD wrapper
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
  }
})(typeof self !== "undefined" ? self : this, function () {
  const courseData = `;

const footer = `;

  return courseData;
});
`;

fs.writeFileSync(courseDataPath, header + JSON.stringify(courseData, null, 2) + footer, 'utf8');

console.log(`✅ Successfully injected:
  - ${countAg} General English (AG) session overviews
  - ${countAt} Technical English (AT) session overviews
  - Total: ${countAg + countAt} / 24 complete communicative B1/B2 overviews with 3-group statements!`);

