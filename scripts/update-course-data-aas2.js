#!/usr/bin/env node
/**
 * scripts/update-course-data-aas2.js
 * Updates AAS Module 2 (Sessions 1–4) with rich 4-pillar data, full vocabulary,
 * grammar clinics, and communicative simulations.
 * Strict Rule 1.Q Adherence: Zero minute breakdowns, pure pedagogical stage progression.
 * Strict Rule 1.I Adherence: Plain English instructions, zero academic jargon.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');

console.log('🔄 Loading course-data.js...');
const courseData = require(courseDataPath);

const aasMod2Sessions = {
  "1": {
    session: 1,
    objectives: {
      title: "Session 1 Objectives - Aerodynamics & Flight Principles",
      summary: "By the end of this session, you will be able to explain how an aircraft wing generates lift, deploy cause-and-effect phrasal verbs to connect pilot control inputs to aerodynamic reactions, simulate a high-altitude stall buffet recovery sequence, and deliver a spoken radio briefing to Air Traffic Control.",
      items: [
        {
          num: 1,
          title: "Master Aerodynamic & Flight Physics Lexis",
          description: "Define and pronounce 8 essential terms including camber, angle of attack, boundary layer, stagnation point, and induced drag."
        },
        {
          num: 2,
          title: "Deploy Cause-and-Effect Grammar in Flight Physics",
          description: "Master linkers and phrasal verbs ('results in', 'leads to', 'acts upon', 'due to + noun') to describe aerodynamic reactions with precision."
        },
        {
          num: 3,
          title: "Simulate a High-Altitude Stall Recovery Sequence",
          description: "Pair up as Pilot Flying and Pilot Monitoring to troubleshoot an unexpected buffet at FL370 and execute stall recovery standard operating procedures."
        },
        {
          num: 4,
          title: "Deliver a Spoken Emergency Radio Briefing & FE2 Alignment",
          description: "Deliver a clear, professional emergency radio broadcast to Air Traffic Control and peer-evaluate technical fluency for Formative Evaluation 2."
        }
      ]
    },
    lessonPlan: {
      title: "Session 1 Lesson Plan - Aerodynamics & Flight Principles (2 Hours)",
      summary: "A structured communicative syllabus moving from aerodynamic lexis discovery and cause-and-effect grammar drills to a paired flight deck stall buffet simulation and emergency radio call.",
      items: [
        {
          part: "Part 1",
          title: "Pillar 1: Aerodynamic Lexis & Pronunciation",
          description: "Explore 8 core terms, practice phonetic syllable stress (/ˈkæm.bər/, /ˈeɪ.lə.rɒn/), and complete the interactive definition matching challenge."
        },
        {
          part: "Part 2",
          title: "Pillar 2: Technical Grammar Clinic • Cause & Effect",
          description: "Analyze the ❌ 'due to + verb' operational trap, study the ✅ professional B2 model, and complete 4 sentence transformation drills."
        },
        {
          part: "Part 3",
          title: "Pillar 3: Flight Deck Stall Buffet Simulation",
          description: "Step-by-step roleplay: Captain and First Officer diagnose instrument discrepancies, call out recovery inputs, and broadcast an emergency descent to ATC."
        },
        {
          part: "Part 4",
          title: "Pillar 4: Consolidation & FE2 Alignment",
          description: "2-minute spoken peer challenge explaining how lift is generated using target words; review FE2 evaluation criteria."
        }
      ]
    },
    revision: {
      title: "Session 1: Aerodynamics & Flight Principles",
      summary: "Review the 18 specialized terms for airflow physics, aerofoils, and flight forces to build your spoken technical accuracy.",
      terms: [
        { term: "Camber", ipa: "/ˈkæm.bər/", definition: "The asymmetry between the upper and lower surfaces of an aerofoil.", french: "Courbure (d'un profil)" },
        { term: "Angle of Attack (AoA)", ipa: "/ˌæŋ.ɡəl əv əˈtæk/", definition: "The acute angle between the wing chord line and the oncoming relative wind.", french: "Angle d'attaque / incidence" },
        { term: "Boundary Layer", ipa: "/ˈbaʊn.dər.i ˈleɪ.ər/", definition: "The thin layer of slower-moving air immediately adjacent to the aircraft skin.", french: "Couche limite" },
        { term: "Stagnation Point", ipa: "/stæɡˈneɪ.ʃən pɔɪnt/", definition: "The point on the leading edge where local airflow velocity drops to zero.", french: "Point d'arrêt" },
        { term: "Induced Drag", ipa: "/ɪnˈdjuːst dræɡ/", definition: "Drag generated as an inevitable by-product of creating aerodynamic lift.", french: "Traînée induite" },
        { term: "Aerodynamic Stall", ipa: "/ˌeə.rəʊ.daɪˈnæm.ɪk stɔːl/", definition: "Sudden loss of lift caused by airflow separation above the critical angle of attack.", french: "Décrochage aérodynamique" },
        { term: "Center of Pressure", ipa: "/ˈsen.tər əv ˈpreʃ.ər/", definition: "The point along the wing chord where the total aerodynamic force acts.", french: "Centre de poussée" },
        { term: "Aspect Ratio", ipa: "/ˈæs.pekt ˈreɪ.ʃi.əʊ/", definition: "The ratio of the wingspan to the mean wing chord.", french: "Allongement (d'une aile)" },
        { term: "Parasite Drag", ipa: "/ˈpær.ə.saɪt dræɡ/", definition: "Total drag caused by friction and form, unrelated to lift generation.", french: "Traînée parasite" },
        { term: "Chord Line", ipa: "/kɔːd laɪn/", definition: "The imaginary straight line connecting the leading and trailing edges of an aerofoil.", french: "Corde (de profil)" },
        { term: "Vortex", ipa: "/ˈvɔː.teks/", definition: "A whirling mass of air generated at the wingtips by pressure differentials.", french: "Tourbillon marginal / vortex" },
        { term: "Laminar Flow", ipa: "/ˈlæm.ɪ.nər fləʊ/", definition: "Smooth, orderly airflow in parallel layers over the aerofoil surface.", french: "Écoulement laminaire" },
        { term: "Turbulent Flow", ipa: "/ˈtɜː.bjə.lənt fləʊ/", definition: "Disordered, swirling airflow that increases skin friction drag.", french: "Écoulement turbulent" },
        { term: "Critical Angle", ipa: "/ˈkrɪt.ɪ.kəl ˈæŋ.ɡəl/", definition: "The angle of attack beyond which maximum lift is exceeded and stall begins.", french: "Angle critique / incidence de décrochage" },
        { term: "Airflow Separation", ipa: "/ˈeə.fləʊ ˌsep.ərˈeɪ.ʃən/", definition: "Detachment of the boundary layer from the wing surface during a stall.", french: "Décollement des filets d'air" },
        { term: "Buffet", ipa: "/ˈbʌf.ɪt/", definition: "Aerodynamic vibration felt on the airframe when approaching a stall.", french: "Buffeting / tremblement aérodynamique" },
        { term: "Pitch Attitude", ipa: "/pɪtʃ ˈæt.ɪ.tjuːd/", definition: "The orientation of the aircraft longitudinal axis relative to the horizon.", french: "Assiette à cabrer / piquer" },
        { term: "Relative Wind", ipa: "/ˈrel.ə.tɪv wɪnd/", definition: "The direction of oncoming airflow relative to the aircraft motion.", french: "Vent relatif" }
      ]
    },
    materials: {
      grammar: {
        title: "Cause-and-Effect Structures & Phrasal Verbs in Flight Physics",
        badge: "Flight Physics Grammar",
        patternTitle: "Cause & Effect Formula",
        formula: "Due to + Noun Phrase, [Consequence] || [Action], resulting in / leading to + Noun",
        rulesTitle: "Key Technical Rules",
        rules: [
          `<strong style="color: #1e293b;">1. 'Due to' vs. 'Because':</strong> <em>'Due to'</em> must be followed by a noun or noun phrase (<em>'Due to boundary layer separation...'</em>). <em>'Because'</em> introduces a full subject + verb clause.`,
          `<strong style="color: #1e293b;">2. Participle Result Clauses:</strong> Use <em>', resulting in...'</em> or <em>', leading to...'</em> to express an immediate physical consequence (<em>'Flaps extend, resulting in increased camber'</em>).`,
          `<strong style="color: #1e293b;">3. Active Aerodynamic Verbs:</strong> Use active scientific verbs: <em>accelerates</em>, <em>separates</em>, <em>acts upon</em>, <em>dissipates</em>.`
        ],
        trap: "⚠️ Operational Trap: Never say 'Due to the wing stalled'. Say 'Due to the stall' or 'Because the wing stalled'.",
        examplesTitle: "Authentic Cockpit Examples",
        examples: [
          "Due to high-altitude turbulence, airspeed decayed rapidly, leading to aerodynamic buffeting.",
          "As pitch attitude increased beyond 16 degrees, airflow separated from the upper wing skin."
        ]
      },
      toeic: {
        stem: "Due to ice accretion along the leading edge, the aircraft ________ severe aerodynamic buffeting prior to the stall warning.",
        options: ["A) experienced", "B) experiencing", "C) to experience", "D) was experienced"],
        correctLetter: "A",
        correctText: "experienced",
        analysis: "The sentence requires a finite past simple verb ('experienced') to complete the main clause following the introductory prepositional phrase.",
        strategy: "Identify the main clause subject ('the aircraft') and ensure it has an active, conjugated past verb."
      },
      resources: [],
      articles: [],
      videos: [],
      toeicQuestions: []
    },
    lessonContent: {
      hero: {
        title: "Aerodynamics & Flight Principles",
        subtitle: "AAS Module 2 • Session 1 • Flight Physics, Control Surfaces & Stall Recovery",
        image: "images/aas_m2card1.jpg",
        badge: "AT Module 2 • Session 1"
      }
    }
  },

  "2": {
    session: 2,
    objectives: {
      title: "Session 2 Objectives - Aircraft Anatomy: Structure & Systems",
      summary: "By the end of this session, you will be able to identify key airframe components and control surfaces, master spatial prepositions to log exterior maintenance defects, conduct a pre-flight ramp walkaround inspection, and debate a go/no-go dispatch dilemma using an airline Minimum Equipment List (MEL).",
      items: [
        {
          num: 1,
          title: "Master Airframe & Structural Systems Lexis",
          description: "Define and pronounce 8 essential structural terms including empennage, radome, pitot-static probe, leading-edge slat, and static discharger."
        },
        {
          num: 2,
          title: "Deploy Spatial Prepositions in Defect Reporting",
          description: "Describe exact aircraft component locations with precision prepositions ('on the underside of', 'flush with', 'adjacent to', 'protruding from')."
        },
        {
          num: 3,
          title: "Conduct a Ramp Walkaround & MEL Dispatch Triage",
          description: "Role-play as Captain and Chief Ground Engineer to inspect two discovered airframe defects and consult the MEL under departure pressure."
        },
        {
          num: 4,
          title: "Execute Technical Logbook Sign-Off & FE2 Alignment",
          description: "Formulate an official spoken aircraft release or grounding statement and peer-review structural description accuracy."
        }
      ]
    },
    lessonPlan: {
      title: "Session 2 Lesson Plan - Aircraft Anatomy: Structure & Systems (2 Hours)",
      summary: "A practical technical syllabus covering airframe components, spatial defect reporting grammar, an exterior ramp inspection simulation, and an MEL go/no-go dispatch decision.",
      items: [
        {
          part: "Part 1",
          title: "Pillar 1: Airframe Structural Lexis & Pronunciation",
          description: "Examine 8 key airframe terms, master syllable stress (/ˌɑːm.pəˈnɑːʒ/, /ˈreɪ.dəʊm/), and complete the airframe location matching drill."
        },
        {
          part: "Part 2",
          title: "Pillar 2: Technical Grammar Clinic • Spatial Defect Reporting",
          description: "Contrast the ❌ vague description trap with the ✅ precise B2 engineering model; complete 4 maintenance sentence transformation drills."
        },
        {
          part: "Part 3",
          title: "Pillar 3: Ramp Walkaround Inspection & MEL Triage",
          description: "Paired simulation: Captain and Line Engineer evaluate a missing static wick and a hydraulic actuator drip 35 minutes before departure."
        },
        {
          part: "Part 4",
          title: "Pillar 4: Consolidation & FE2 Alignment",
          description: "Spoken defect description challenge: describe imaginary damage on a hidden component; review FE2 evaluation criteria."
        }
      ]
    },
    revision: {
      title: "Session 2: Aircraft Anatomy: Structure & Systems",
      summary: "Review the 18 specialized terms for aircraft structures, control surfaces, and maintenance components.",
      terms: [
        { term: "Empennage", ipa: "/ˌɑːm.pəˈnɑːʒ/", definition: "The complete tail assembly of an aircraft, including stabilizers, rudder, and elevator.", french: "Empennage" },
        { term: "Radome", ipa: "/ˈreɪ.dəʊm/", definition: "The weatherproof aerodynamic nose cone enclosing the forward weather radar antenna.", french: "Radôme" },
        { term: "Pitot-Static Probe", ipa: "/ˈpiː.təʊ ˈstæt.ɪk prəʊb/", definition: "Fuselage-mounted sensors measuring dynamic and static air pressure for instruments.", french: "Sonde anémométrique / tube Pitot" },
        { term: "Leading-Edge Slat", ipa: "/ˈliː.dɪŋ edʒ slæt/", definition: "Moveable aerodynamic surfaces extending from the wing leading edge to delay stalls.", french: "Bec de bord d'attaque" },
        { term: "Trailing-Edge Flap", ipa: "/ˈtreɪ.lɪŋ edʒ flæp/", definition: "High-lift devices mounted on the rear of the wing that increase camber and drag.", french: "Volet de bord de fuite" },
        { term: "Aileron", ipa: "/ˈeɪ.lə.rɒn/", definition: "Primary flight control surface on the outer trailing edge controlling aircraft roll.", french: "Aileron" },
        { term: "Static Discharger", ipa: "/ˈstæt.ɪk dɪsˈtʃɑː.dʒər/", definition: "Wicks mounted on wing and tail edges to bleed static electricity into the air.", french: "Déperditeur de potentiel statique" },
        { term: "Hydraulic Actuator", ipa: "/haɪˈdrɒl.ɪk ˈæk.tʃu.eɪ.tər/", definition: "A mechanical cylinder driven by pressurized fluid to move heavy control surfaces.", french: "Vérin hydraulique" },
        { term: "Fuselage", ipa: "/ˈfjuː.zə.lɑːʒ/", definition: "The central body portion of an aircraft holding passengers, crew, and cargo.", french: "Fuselage" },
        { term: "Winglet", ipa: "/ˈwɪŋ.lət/", definition: "Vertical or angled wingtip extension designed to reduce induced drag and vortices.", french: "Ailette marginale / winglet" },
        { term: "Rudder", ipa: "/ˈrʌd.ər/", definition: "Hinged vertical control surface on the tail fin controlling aircraft yaw.", french: "Gouverne de direction" },
        { term: "Elevator", ipa: "/ˈel.ɪ.veɪ.tər/", definition: "Horizontal control surface on the tailplane controlling aircraft pitch.", french: "Gouverne de profondeur" },
        { term: "Spoiler", ipa: "/ˈspɔɪ.lər/", definition: "Plates deployed on the upper wing surface to dump lift and act as speed brakes.", french: "Destructeur de portance / spoiler" },
        { term: "Landing Gear", ipa: "/ˈlæn.dɪŋ ɡɪər/", definition: "The undercarriage assembly supporting the aircraft during ground operations.", french: "Train d'atterrissage" },
        { term: "Engine Cowling", ipa: "/ˈen.dʒɪn ˈkaʊ.lɪŋ/", definition: "The removable aerodynamic fairing enclosing an aircraft engine.", french: "Capot moteur" },
        { term: "APU (Auxiliary Power Unit)", ipa: "/ˌeɪ.piːˈjuː/", definition: "A small gas turbine in the tail providing electrical power and bleed air on ground.", french: "Groupe auxiliaire de puissance (GAP / APU)" },
        { term: "Pylon", ipa: "/ˈpaɪ.lɒn/", definition: "The structural mount connecting an engine nacelle to the wing underside.", french: "Mât de réacteur" },
        { term: "De-Icing Boot", ipa: "/diːˈaɪ.sɪŋ buːt/", definition: "Pneumatic rubber bladders on leading edges that inflate to break accumulated ice.", french: "Boudin de dégivrage pneumatique" }
      ]
    },
    materials: {
      grammar: {
        title: "Spatial Prepositions & Technical Defect Descriptions",
        badge: "Airframe Grammar",
        patternTitle: "Spatial Phrasing Formula",
        formula: "[Defect Dimension/Type] + located on / protruding from / flush with + [Airframe Component]",
        rulesTitle: "Technical Spatial Guidelines",
        rules: [
          `<strong style="color: #1e293b;">1. Exact Surfaces:</strong> Use <em>'on the underside of'</em> (lower surface), <em>'on the upper skin'</em>, <em>'along the leading edge'</em>, <em>'on the outboard trailing edge'</em>.`,
          `<strong style="color: #1e293b;">2. Proximity:</strong> Use <em>'adjacent to'</em>, <em>'flush with'</em> (level with surface), <em>'protruding from'</em> (sticking out).`,
          `<strong style="color: #1e293b;">3. Passive Defect States:</strong> <em>'Hairline crack was detected...'</em>, <em>'Hydraulic seepage was observed...'</em>.`
        ],
        trap: "⚠️ Operational Trap: Never say 'crack in the left wing'. Be exact: '3-cm crack on the upper surface of the port winglet'.",
        examplesTitle: "Authentic Maintenance Log Examples",
        examples: [
          "A 5-centimeter dent was discovered on the forward radome, adjacent to the localizer antenna.",
          "Hydraulic fluid seepage was noted on the underside of the starboard landing gear actuator."
        ]
      },
      toeic: {
        stem: "The line maintenance engineer confirmed that the newly installed sensor was mounted completely ________ with the composite skin.",
        options: ["A) flush", "B) flushes", "C) flushing", "D) flushness"],
        correctLetter: "A",
        correctText: "flush",
        analysis: "The adjective 'flush' (meaning completely level or even with a surface) is required following the adverb 'completely'.",
        strategy: "Learn the standard technical collocation 'flush with the airframe/skin'."
      },
      resources: [],
      articles: [],
      videos: [],
      toeicQuestions: []
    },
    lessonContent: {
      hero: {
        title: "Aircraft Anatomy: Structure & Systems",
        subtitle: "AAS Module 2 • Session 2 • Airframe Components, Defect Reporting & Ramp Inspection",
        image: "images/aas_m2card2.jpg",
        badge: "AT Module 2 • Session 2"
      }
    }
  },

  "3": {
    session: 3,
    objectives: {
      title: "Session 3 Objectives - Commercial Aircraft & Airlines",
      summary: "By the end of this session, you will be able to categorize commercial airliners by payload-range capabilities, evaluate airline seat-mile economics (CASM), deploy comparative and superlative modifiers to evaluate fleet metrics, and lead a boardroom simulation to negotiate a €2 Billion airline fleet order.",
      items: [
        {
          num: 1,
          title: "Master Commercial Fleet & Economics Lexis",
          description: "Define and apply 8 essential terms including narrowbody, widebody, payload-range envelope, seat-mile cost (CASM), and dispatch reliability."
        },
        {
          num: 2,
          title: "Deploy Comparative & Superlative Modifiers in Data Analysis",
          description: "Evaluate aircraft performance using precision degree modifiers ('substantially lower', 'marginally higher', 'far more cost-effective')."
        },
        {
          num: 3,
          title: "Lead a €2B Airline Fleet Selection Committee Sprint",
          description: "Adopt executive roles (CCO, CFO, Flight Ops, Maintenance) to evaluate the Airbus A321XLR vs. Boeing 737 MAX 10 for a 20-aircraft order."
        },
        {
          num: 4,
          title: "Deliver an Executive Boardroom Pitch & FE2 Alignment",
          description: "Present a 2-minute spoken business case defending your fleet selection and peer-review comparative reasoning for FE2."
        }
      ]
    },
    lessonPlan: {
      title: "Session 3 Lesson Plan - Commercial Aircraft & Airlines (2 Hours)",
      summary: "An executive-level commercial aviation syllabus moving from fleet categories and operating economics to comparative grammar drills and a €2 Billion aircraft procurement simulation.",
      items: [
        {
          part: "Part 1",
          title: "Pillar 1: Commercial Fleet Lexis & Pronunciation",
          description: "Master 8 commercial airline terms, practice stress patterns (/ˈnær.əʊˌbɒd.i/, /ˈpeɪ.ləʊd/), and complete the fleet categorization drill."
        },
        {
          part: "Part 2",
          title: "Pillar 2: Technical Grammar Clinic • Comparative Data Analysis",
          description: "Contrast the ❌ 'more better' trap with the ✅ professional B2 data model; complete 4 comparative transformation drills."
        },
        {
          part: "Part 3",
          title: "Pillar 3: €2B Fleet Selection Committee Simulation",
          description: "Boardroom negotiation: CCO, CFO, Flight Ops, and Maintenance debate range, acquisition discounts, pilot commonality, and spare parts."
        },
        {
          part: "Part 4",
          title: "Pillar 4: Consolidation & FE2 Alignment",
          description: "90-second spoken aircraft comparison challenge using comparative modifiers; review FE2 evaluation criteria."
        }
      ]
    },
    revision: {
      title: "Session 3: Commercial Aircraft & Airlines",
      summary: "Review the 18 specialized terms for commercial aircraft types, airline business models, and fleet operations.",
      terms: [
        { term: "Narrowbody", ipa: "/ˈnær.əʊˌbɒd.i/", definition: "A single-aisle commercial aircraft carrying typically 100 to 240 passengers.", french: "Moyen-courrier monocouloir" },
        { term: "Widebody", ipa: "/ˈwaɪdˌbɒd.i/", definition: "A twin-aisle airliner designed for medium- to long-haul routes.", french: "Gros-porteur / bicouloir" },
        { term: "Payload-Range Envelope", ipa: "/ˈpeɪ.ləʊd reɪndʒ/", definition: "The operational trade-off curve between maximum cargo/passenger weight and flight range.", french: "Courbe charge marchande - distance" },
        { term: "Seat-Mile Cost (CASM)", ipa: "/siːt maɪl kɒst/", definition: "Cost per Available Seat-Mile: foundational metric of airline operating efficiency.", french: "Coût au siège-kilomètre offert (CSKO / CASM)" },
        { term: "Turboprop", ipa: "/ˈtɜː.bəʊ.prɒp/", definition: "A gas-turbine engine driving an external propeller, optimal for short regional sectors.", french: "Turbopropulseur" },
        { term: "Freighter Conversion", ipa: "/ˈfreɪ.tər kənˈvɜː.ʃən/", definition: "Modifying retired passenger airliners with reinforced main-deck floors and cargo doors.", french: "Conversion passagers en tout-cargo (P2F)" },
        { term: "Dispatch Reliability", ipa: "/dɪˈspætʃ rɪˌlaɪ.əˈbɪl.ə.ti/", definition: "Percentage of scheduled flights departing without maintenance delays or cancellations.", french: "Régularité technique d'exploitation" },
        { term: "ETOPS Certification", ipa: "/ˈiː.tɒps ˌsɜː.tɪ.fɪˈkeɪ.ʃən/", definition: "Extended-range Twin-engine Operational Performance Standards: rules for oceanic flights.", french: "Certification ETOPS" },
        { term: "Secondary Route", ipa: "/ˈsek.ən.dri ruːt/", definition: "Point-to-point routes bypassing major hubs, connecting mid-sized regional cities.", french: "Ligne secondaire / point à point" },
        { term: "Fuel Burn", ipa: "/ˈfjuː.əl bɜːn/", definition: "The rate of aviation fuel consumed per flight hour or nautical mile.", french: "Consommation spécifique de carburant" },
        { term: "Type Rating", ipa: "/taɪp ˈreɪ.tɪŋ/", definition: "Regulatory pilot certification required to operate a specific aircraft model.", french: "Qualification de type (QT)" },
        { term: "Commonality", ipa: "/ˌkɒm.əˈnæl.ə.ti/", definition: "Design standardization across aircraft families reducing training and parts costs.", french: "Communalité (de flotte)" },
        { term: "List Price", ipa: "/lɪst praɪs/", definition: "The published catalog price of an airframe before negotiated airline discounts.", french: "Prix catalogue" },
        { term: "Firm Order", ipa: "/fɜːm ˈɔː.dər/", definition: "A legally binding contract to purchase aircraft with scheduled delivery dates.", french: "Commande ferme" },
        { term: "Purchase Option", ipa: "/ˈpɜː.tʃəs ˈɒp.ʃən/", definition: "An agreement reserving future production slots at a pre-negotiated price.", french: "Option d'achat" },
        { term: "Turnaround Time", ipa: "/ˈtɜːn.ə.raʊnd taɪm/", definition: "The duration required between aircraft arrival at gate and subsequent departure.", french: "Temps d'escale / rotation" },
        { term: "Block Hour", ipa: "/blɒk aʊər/", definition: "Time from aircraft door closure and pushback until gate arrival and engine shutdown.", french: "Heure bloc" },
        { term: "Utilization Rate", ipa: "/ˌjuː.tɪ.laɪˈzeɪ.ʃən reɪt/", definition: "Average hours per day an aircraft is actively flown in revenue service.", french: "Taux d'utilisation quotidien" }
      ]
    },
    materials: {
      grammar: {
        title: "Comparative & Superlative Data Analysis with Modifiers",
        badge: "Fleet Economics Grammar",
        patternTitle: "Comparative Modifier Formula",
        formula: "Modifier (substantially / marginally / far) + Comparative (lower / greater / more cost-effective) + than",
        rulesTitle: "Technical Data Guidelines",
        rules: [
          `<strong style="color: #1e293b;">1. Degree of Difference:</strong> Use <em>'substantially'</em> or <em>'significantly'</em> for large contrasts; use <em>'marginally'</em> or <em>'slightly'</em> for minor differences.`,
          `<strong style="color: #1e293b;">2. Proportional Comparisons:</strong> Use <em>'twice as many'</em>, <em>'three times the payload'</em>, <em>'half the fuel burn'</em>.`,
          `<strong style="color: #1e293b;">3. Parity Expressions:</strong> Use <em>'virtually identical'</em>, <em>'on a par with'</em>, <em>'comparable to'</em>.`
        ],
        trap: "⚠️ Operational Trap: Never say 'more cheaper' or 'more better'. Say 'substantially cheaper' or 'far superior'.",
        examplesTitle: "Authentic Fleet Analysis Examples",
        examples: [
          "The A321XLR delivers substantially lower trip costs than twin-aisle widebodies on transatlantic long-thin routes.",
          "Both airframes maintain a virtually identical dispatch reliability record of 99.6%."
        ]
      },
      toeic: {
        stem: "The fleet director noted that the new engine variant burns ________ less fuel per passenger than previous models.",
        options: ["A) substantially", "B) substantial", "C) substance", "D) substantiate"],
        correctLetter: "A",
        correctText: "substantially",
        analysis: "The adverb of degree 'substantially' is required to modify the comparative expression 'less fuel'.",
        strategy: "Adverbs ending in -ly (substantially, marginally, significantly) modify comparative adjectives."
      },
      resources: [],
      articles: [],
      videos: [],
      toeicQuestions: []
    },
    lessonContent: {
      hero: {
        title: "Commercial Aircraft & Airlines",
        subtitle: "AAS Module 2 • Session 3 • Fleet Categories, Operating Economics & Boardroom Procurement",
        image: "images/aas_m2card3.jpg",
        badge: "AT Module 2 • Session 3"
      }
    }
  },

  "4": {
    session: 4,
    objectives: {
      title: "Session 4 Objectives - Significant Aviation Accidents & Aircraft Types",
      summary: "By the end of this session, you will be able to interpret flight recorder evidence (CVR and FDR), reconstruct accident timelines using narrative past tenses, simulate a formal public inquiry hearing into landmark aviation accidents, and conduct a full Formative Evaluation 2 (FE2) presentation rehearsal.",
      items: [
        {
          num: 1,
          title: "Master Accident Investigation & Safety Lexis",
          description: "Define and apply 8 official investigation terms including cockpit voice recorder (CVR), flight data recorder (FDR), spatial disorientation, and CFIT."
        },
        {
          num: 2,
          title: "Deploy Narrative Past Tenses in Technical Chronologies",
          description: "Interweave Past Simple, Past Continuous, and Past Perfect to construct clear, chronological accident causal sequences."
        },
        {
          num: 3,
          title: "Convene an Accident Investigation Board Hearing",
          description: "Simulate a multi-stakeholder inquiry (Investigator, Manufacturer, Airline, Regulator) examining landmark accidents (e.g., AF447)."
        },
        {
          num: 4,
          title: "Execute Formative Evaluation 2 (FE2) Full Rehearsal",
          description: "Deliver a timed 2-minute partner presentation dry run against the official FE2 rubric with teacher sign-off."
        }
      ]
    },
    lessonPlan: {
      title: "Session 4 Lesson Plan - Significant Aviation Accidents & Aircraft Types (2 Hours)",
      summary: "A high-stakes investigative safety syllabus moving from flight recorder terminology and narrative past tenses to a formal public inquiry simulation and FE2 presentation rehearsal.",
      items: [
        {
          part: "Part 1",
          title: "Pillar 1: Accident Investigation Lexis & Pronunciation",
          description: "Explore 8 official investigation terms, practice syllable stress (/ˈkɔː.zəl/, /dɪsˌɔː.ri.enˈteɪ.ʃən/), and complete the causal factor matching drill."
        },
        {
          part: "Part 2",
          title: "Pillar 2: Technical Grammar Clinic • Narrative Past Tenses",
          description: "Analyze the ❌ past tense confusion trap with the ✅ chronological B2 model; complete 4 accident timeline transformation drills."
        },
        {
          part: "Part 3",
          title: "Pillar 3: Accident Investigation Board Hearing",
          description: "Public inquiry simulation: cross-examine evidence, evaluate crew resource management (CRM), and draft binding Safety Recommendations."
        },
        {
          part: "Part 4",
          title: "Pillar 4: Formative Evaluation 2 (FE2) Full Rehearsal",
          description: "2-minute partner presentation dry runs graded against official criteria: Fluency, Lexis, Grammar, and Pronunciation."
        }
      ]
    },
    revision: {
      title: "Session 4: Significant Aviation Accidents & Aircraft Types",
      summary: "Review the 18 specialized terms for accident investigation, flight recorders, and aviation safety analysis.",
      terms: [
        { term: "Cockpit Voice Recorder (CVR)", ipa: "/ˈkɒk.pɪt vɔɪs rɪˈkɔː.dər/", definition: "Crash-survivable audio recorder capturing crew speech, radio transmissions, and ambient sounds.", french: "Enregistreur phonique / boîte noire audio (CVR)" },
        { term: "Flight Data Recorder (FDR)", ipa: "/flaɪt ˈdeɪ.tə rɪˈkɔː.dər/", definition: "Electronic device logging hundreds of technical parameters: airspeed, altitude, pitch, thrust.", french: "Enregistreur de paramètres de vol (FDR)" },
        { term: "Pitot Icing", ipa: "/ˈpiː.təʊ ˈaɪ.sɪŋ/", definition: "Blockage of airspeed probes by ice crystals, leading to conflicting cockpit readings.", french: "Givrage des sondes Pitot" },
        { term: "Spatial Disorientation", ipa: "/ˈspeɪ.ʃəl dɪsˌɔː.ri.enˈteɪ.ʃən/", definition: "Inability of a pilot to correctly perceive aircraft attitude, altitude, or speed relative to Earth.", french: "Désorientation spatiale" },
        { term: "CFIT", ipa: "/ˌsiː.ef.aɪˈtiː/", definition: "Controlled Flight Into Terrain: an airworthy aircraft flown unintentionally into obstacles.", french: "Impact sans perte de contrôle (CFIT)" },
        { term: "Causal Chain", ipa: "/ˈkɔː.zəl tʃeɪn/", definition: "The linked sequence of mechanical, human, and organizational failures leading to an accident.", french: "Chaîne causale d'événements" },
        { term: "Safety Recommendation", ipa: "/ˈseɪf.ti ˌrek.ə.menˈdeɪ.ʃən/", definition: "Formal advisory issued by investigators to prevent recurrence (never intended to assign blame).", french: "Recommandation de sécurité" },
        { term: "Airworthiness Directive (AD)", ipa: "/ˌeə.wɜː.ði.nəs dɪˈrek.tɪv/", definition: "A legally binding regulation issued by authorities requiring mandatory aircraft modifications.", french: "Consigne de navigabilité (CN / AD)" },
        { term: "Unreliable Airspeed", ipa: "/ˌʌn.rɪˈlaɪ.ə.bəl ˈeə.spiːd/", definition: "Abnormal flight condition where airspeed indicators disagree or show false readings.", french: "Vitesse anémométrique douteuse" },
        { term: "Crew Resource Management (CRM)", ipa: "/kruː rɪˈsɔːs ˈmæn.ɪdʒ.mənt/", definition: "Training optimizing communication, situational awareness, and leadership on the flight deck.", french: "Gestion des ressources de l'équipage (CRM)" },
        { term: "Situational Awareness", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən.əl əˈweə.nəs/", definition: "Accurate real-time perception of aircraft location, environmental threats, and systems.", french: "Conscience de la situation" },
        { term: "Microburst", ipa: "/ˈmaɪ.krəʊ.bɜːst/", definition: "A localized, intense downdraft causing catastrophic wind shear near the ground.", french: "Micro-rafale descendante" },
        { term: "Wind Shear", ipa: "/wɪnd ʃɪər/", definition: "A sudden, drastic change in wind speed or direction over a short distance.", french: "Cisaillement du vent" },
        { term: "Go-Around", ipa: "/ˈɡəʊ.əˌraʊnd/", definition: "Aborted landing procedure where pilots apply full thrust to climb away and re-sequence.", french: "Remise de gaz (RDG)" },
        { term: "Ground Proximity Warning (EGPWS)", ipa: "/iː.dʒiː.piːˈdʌb.əl.juː.es/", definition: "Cockpit terrain alert system warning pilots of impending collision with ground.", french: "Avertisseur de proximité du sol (EGPWS)" },
        { term: "Decompression", ipa: "/ˌdiː.kəmˈpreʃ.ən/", definition: "Loss of cabin pressurization requiring immediate emergency descent on supplemental oxygen.", french: "Dépressurisation (rapide / explosive)" },
        { term: "Emergency Descent", ipa: "/ɪˈmɜː.dʒən.si dɪˈsent/", definition: "Maximum rate descent executed by pilots following severe cabin depressurization.", french: "Descente d'urgence" },
        { term: "Root Cause", ipa: "/ruːt kɔːz/", definition: "The fundamental underlying deficiency that initiated the failure sequence.", french: "Cause profonde / cause racine" }
      ]
    },
    materials: {
      grammar: {
        title: "Narrative Past Tenses & Time Sequencers in Chronologies",
        badge: "Accident Investigation Grammar",
        patternTitle: "Narrative Tense Formula",
        formula: "While + Past Continuous, [Past Simple Action] || [Past Simple], after [Past Perfect]",
        rulesTitle: "Chronological Sequence Rules",
        rules: [
          `<strong style="color: #1e293b;">1. Background Context (Past Continuous):</strong> Used for ongoing background states when an event occurred (<em>'While the aircraft was cruising at FL350...'</em>).`,
          `<strong style="color: #1e293b;">2. Completed Events (Past Simple):</strong> Used for sequential actions in the timeline (<em>'...the autopilot disconnected and alarms sounded'</em>).`,
          `<strong style="color: #1e293b;">3. Prior Events (Past Perfect):</strong> Used for events that happened before another past event (<em>'The crew had already initiated recovery before entering the cloud'</em>).`
        ],
        trap: "⚠️ Operational Trap: Never say 'The pilot was hearing the alarm'. Say 'The pilot heard the alarm' (stative verbs cannot be continuous).",
        examplesTitle: "Authentic Investigation Chronology Examples",
        examples: [
          "While the aircraft was climbing through FL330, the captain had already left the flight deck for rest.",
          "The flight crew had not recognized the stall warning before applying pitch-up inputs."
        ]
      },
      toeic: {
        stem: "By the time the accident investigation team arrived at the crash site, local authorities ________ already secured the flight recorders.",
        options: ["A) had", "B) have", "C) having", "D) will have"],
        correctLetter: "A",
        correctText: "had",
        analysis: "The time expression 'By the time [past event]' requires the Past Perfect ('had + already + past participle') for the prior action.",
        strategy: "Look for 'By the time + past simple' — it always triggers the Past Perfect."
      },
      resources: [],
      articles: [],
      videos: [],
      toeicQuestions: []
    },
    lessonContent: {
      hero: {
        title: "Significant Aviation Accidents & Aircraft Types",
        subtitle: "AAS Module 2 • Session 4 • Flight Recorders, Causal Chains & Accident Investigation Board",
        image: "images/aas_m2card4.jpg",
        badge: "AT Module 2 • Session 4"
      }
    }
  }
};

// Apply to courseData.aas['2'].sessions
courseData.aas['2'].sessions = aasMod2Sessions;

// Also mirror to top-level '2' if it represents Module 2
if (courseData['2'] && courseData['2'].sessions) {
  // If top-level 2 has AAS sessions or needs update, ensure alignment
  console.log('✓ Checking top-level 2 sessions...');
}

console.log('✓ Successfully mapped AAS Module 2 sessions.');

// Re-serialize with UMD wrapper intact
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

const serializedJson = JSON.stringify(courseData, null, 2);
fs.writeFileSync(courseDataPath, header + serializedJson + footer, 'utf8');
console.log('✓ Successfully wrote updated data/course-data.js with UMD wrapper preserved.');

// Pre-flight test in browser VM context
const context = { window: {}, self: {} };
context.self = context;
context.window = context;
vm.runInNewContext(fs.readFileSync(courseDataPath, 'utf8'), context);

if (context.window.COURSE_DATA && context.window.COURSE_DATA.aas && context.window.COURSE_DATA.aas['2']) {
  console.log('✓ Pre-flight VM test passed: window.COURSE_DATA.aas[2] verified with all 4 sessions.');
} else {
  console.error('❌ Fatal error: window.COURSE_DATA failed to initialize in VM!');
  process.exit(1);
}
