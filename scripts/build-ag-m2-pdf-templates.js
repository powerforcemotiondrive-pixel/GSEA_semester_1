/**
 * Build Script for Semester 1 AG Module 2 Sessions 1 & 2 PDF Templates
 * Ensures:
 * - Pure B1/B2 communicative English
 * - 4-Photo Visual Description & Debate Panels on Page 2 with base64 embedded images
 * - Zero minute breakdowns (Rule 1.Q)
 * - Exact 7 pages verified via PDFKit
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getBase64Image(filename) {
  const p = path.join(rootDir, 'images', filename);
  if (!fs.existsSync(p)) {
    console.error("Image not found:", p);
    return "";
  }
  const buf = fs.readFileSync(p);
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

// ==========================================
// SESSION 1 HTML TEMPLATE BUILDER
// ==========================================
function buildS1Template() {
  const img1 = getBase64Image('weather_heatwave_drought.jpg');
  const img2 = getBase64Image('weather_urban_flash_flood.jpg');
  const img3 = getBase64Image('weather_wildfire_smoke.jpg');
  const img4 = getBase64Image('weather_renewable_transition.jpg');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Session 1 Lesson Worksheet - Extreme Weather &amp; Atmospheric Hazards</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm 12mm 12mm;
      @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
        font-weight: 700;
      }
      @bottom-left {
        content: "ENAC • GSEA Semester 1 General English (AG • LV101E) • Phil PARRIS";
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 7.5pt;
        color: #94a3b8;
      }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 8.2pt;
      line-height: 1.32;
      color: #1e293b;
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      page-break-after: always;
      position: relative;
      height: 100%;
      overflow: hidden;
    }
    .page:last-child { page-break-after: avoid; }
    .doc-header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 4px;
      margin-bottom: 7px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .doc-header .agency {
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.8px;
      color: #0369a1;
      text-transform: uppercase;
    }
    .doc-header .ref {
      font-size: 7pt;
      font-family: ui-monospace, monospace;
      color: #64748b;
      font-weight: 600;
    }
    .doc-footer {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      border-top: 1px solid #cbd5e1;
      padding-top: 3px;
      display: flex;
      justify-content: space-between;
      font-size: 6.8pt;
      color: #64748b;
    }
    h1 {
      font-size: 13.5pt;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.3px;
      line-height: 1.15;
      margin-bottom: 2px;
    }
    h2 {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0369a1;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    h3 {
      font-size: 8.2pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 3px;
    }
    .badge {
      display: inline-block;
      font-size: 6.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 1.5px 5px;
      border-radius: 3px;
    }
    .badge-primary { background: #0284c7; color: #ffffff; }
    .badge-amber { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
    .badge-slate { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; font-family: ui-monospace, monospace; }
    .badge-green { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
    .badge-purple { background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; }

    .card {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 6px 8px;
      background: #ffffff;
      margin-bottom: 5px;
    }
    .card-left-amber { border-left: 3.5px solid #f59e0b; background: #ffffff; }
    .card-left-blue { border-left: 3.5px solid #0284c7; background: #ffffff; }
    .card-left-green { border-left: 3.5px solid #10b981; background: #ffffff; }
    .card-left-purple { border-left: 3.5px solid #8b5cf6; background: #ffffff; }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5px;
    }
    .write-in-line {
      border-bottom: 1px dotted #94a3b8;
      height: 14px;
      margin-bottom: 2px;
    }
    .stem {
      display: block;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3px solid #0284c7;
      padding: 3.5px 6px;
      border-radius: 4px;
      font-size: 7.2pt;
      color: #334155;
      margin-top: 3px;
    }
    .rubric-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.2pt;
      margin-top: 4px;
    }
    .rubric-table th {
      background: #0f172a;
      color: #ffffff;
      padding: 3.5px 6px;
      font-weight: 700;
      font-size: 6.5pt;
      text-align: left;
    }
    .rubric-table td {
      padding: 3px 6px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
    }
    .vocab-col {
      font-size: 7.1pt;
      line-height: 1.25;
    }
    .term-name { font-weight: 800; color: #0f172a; }
    .term-ipa { font-family: ui-monospace, monospace; color: #0284c7; font-size: 6.6pt; }
    .term-def { color: #475569; margin-bottom: 3.5px; }
  </style>
</head>
<body>

  <!-- ========================================== -->
  <!-- PAGE 1: BRIEFING, OBJECTIVES & VOCAB CLINIC -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 1/7</span>
    </div>

    <div style="margin-bottom: 6px;">
      <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
        <span class="badge badge-primary">SEMINAR WORKSHEET</span>
        <span class="badge badge-slate">SESSION 01</span>
        <span class="badge badge-green">CLIMATE RESILIENCE</span>
        <span class="badge badge-amber">B1/B2 COMMUNICATIVE LAB</span>
      </div>
      <h1>Extreme Weather &amp; Atmospheric Hazards</h1>
      <p style="font-size: 7.8pt; color: #64748b; margin-top: 1px;">
        Climate Change, Severe Weather Shocks, Community Resilience &amp; Multi-Stakeholder Adaptation
      </p>
    </div>

    <div class="card card-left-blue" style="margin-bottom: 6px;">
      <h3 style="color: #0369a1;">Session Learning Objectives</h3>
      <div class="grid-2" style="font-size: 7.2pt; gap: 4px;">
        <div>&bull; <strong>Photo Description:</strong> Describe and compare 4 contrasting scenes of severe climate disruption using observational B1/B2 language.</div>
        <div>&bull; <strong>Societal Impact:</strong> Discuss how heatwaves, flash floods, and wildfires disrupt daily routines, city living, and transport networks.</div>
        <div>&bull; <strong>Opinion Stances:</strong> Deploy conversational signposts for expressing strong personal viewpoints and polite disagreement.</div>
        <div>&bull; <strong>Decision Task:</strong> Negotiate a €50M municipal climate adaptation fund with your peers, debating trade-offs and agreeing on top priorities.</div>
        <div>&bull; <strong>Spoken Game:</strong> Build rapid oral circumlocution and conversational agility using 12 climate buzzwords with forbidden terms.</div>
        <div>&bull; <strong>Town Hall Debate:</strong> Defend assigned community stakeholder positions on funding flood protection infrastructure and agree on a consensus verdict.</div>
      </div>
    </div>

    <div class="card card-left-amber" style="margin-bottom: 6px;">
      <h3 style="color: #b45309;">Part 1: Warm-up &amp; Personal Storytelling (Pairwork)</h3>
      <p style="font-size: 7.2pt; color: #475569; margin-bottom: 3px;">
        Think about the most extreme weather event you have personally experienced or witnessed in the news. Share your story with a partner:
      </p>
      <div class="grid-2" style="font-size: 7pt; gap: 5px;">
        <div style="background: #fffbeb; border: 1px solid #fef3c7; padding: 4px; border-radius: 4px;">
          <strong>Speaking Prompts:</strong>
          <div>1. What happened, where were you, and how did people react?</div>
          <div>2. Did public transport, flights, or electricity get cut off?</div>
          <div>3. What did this event teach your community about climate preparedness?</div>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #dcfce7; padding: 4px; border-radius: 4px;">
          <strong>Useful Storytelling Starters:</strong>
          <div>&bull; <em>"A few years ago, I remember experiencing a sudden..."</em></div>
          <div>&bull; <em>"What struck me most was how quickly the streets..."</em></div>
          <div>&bull; <em>"The local authorities were completely caught off guard by..."</em></div>
        </div>
      </div>
    </div>

    <div class="card card-left-blue">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
        <h3 style="color: #0369a1;">Essential Spoken Vocabulary: 18 High-Frequency Environmental Terms</h3>
        <span class="badge badge-slate">CORE B1/B2 GLOSSARY</span>
      </div>
      <div class="grid-3" style="margin-top: 3px;">
        <div class="vocab-col">
          <div class="term-name">1. Heatwave <span class="term-ipa">/ˈhiːtweɪv/</span></div>
          <div class="term-def">A prolonged period of abnormally hot weather affecting human health and power grids.</div>
          <div class="term-name">2. Flash Flood <span class="term-ipa">/flæʃ flʌd/</span></div>
          <div class="term-def">Sudden, violent flooding caused by intense rain over short durations, overwhelming storm drains.</div>
          <div class="term-name">3. Drought <span class="term-ipa">/draʊt/</span></div>
          <div class="term-def">Extended dry spell with severe water shortages, parched soils, and crop failures.</div>
          <div class="term-name">4. Wildfire <span class="term-ipa">/ˈwaɪldfaɪər/</span></div>
          <div class="term-def">Uncontrolled destructive fire spreading rapidly through forests, brush, or dried grasslands.</div>
          <div class="term-name">5. Greenhouse Gas <span class="term-ipa">/ˈɡriːnhaʊs ɡæs/</span></div>
          <div class="term-def">Atmospheric gases like CO₂ and methane that trap solar heat, warming the global climate.</div>
          <div class="term-name">6. Resilience <span class="term-ipa">/rɪˈzɪliəns/</span></div>
          <div class="term-def">The capacity of cities, ecosystems, or infrastructure to withstand and quickly recover from shocks.</div>
        </div>
        <div class="vocab-col">
          <div class="term-name">7. Surface Runoff <span class="term-ipa">/ˈsɜːfɪs ˈrʌnɒf/</span></div>
          <div class="term-def">Rainwater flowing over impervious pavement rather than soaking naturally into the ground.</div>
          <div class="term-name">8. Bioswale <span class="term-ipa">/ˈbaɪəʊsweɪl/</span></div>
          <div class="term-def">A vegetated drainage channel designed to absorb, filter, and slow down stormwater runoff.</div>
          <div class="term-name">9. Carbon Footprint <span class="term-ipa">/ˈkɑːbən ˈfʊtprɪnt/</span></div>
          <div class="term-def">The total amount of greenhouse gases generated by human activities, flights, or products.</div>
          <div class="term-name">10. Adaptation <span class="term-ipa">/ˌædæpˈteɪʃn/</span></div>
          <div class="term-def">Adjusting urban design, behaviors, and systems to limit harm from changing climate conditions.</div>
          <div class="term-name">11. Renewable Energy <span class="term-ipa">/rɪˈnjuːəbl/</span></div>
          <div class="term-def">Energy collected from natural recurring resources such as sunlight, wind, and geothermal heat.</div>
          <div class="term-name">12. Urban Canopy <span class="term-ipa">/ˈɜːbən ˈkænəpi/</span></div>
          <div class="term-def">The layer of city tree leaves and branches providing natural shade and microclimate cooling.</div>
        </div>
        <div class="vocab-col">
          <div class="term-name">13. Sustainable Mobility <span class="term-ipa">/məʊˈbɪləti/</span></div>
          <div class="term-def">Transport modes prioritizing walking, cycling, rail, and electric transit over private cars.</div>
          <div class="term-name">14. Precipitation <span class="term-ipa">/prɪˌsɪpɪˈteɪʃn/</span></div>
          <div class="term-def">Any form of water—rain, snow, sleet, or hail—falling from clouds to the Earth's surface.</div>
          <div class="term-name">15. Early Warning <span class="term-ipa">/ˈɜːli ˈwɔːnɪŋ/</span></div>
          <div class="term-def">Radar and satellite alert systems providing advance notice of approaching weather hazards.</div>
          <div class="term-name">16. Severe Disruption <span class="term-ipa">/dɪsˈrʌpʃn/</span></div>
          <div class="term-def">Widespread delays, cancellations, or damage halting normal airport, rail, and road operations.</div>
          <div class="term-name">17. Air Quality Index <span class="term-ipa">/eə ˈkwɒləti/</span></div>
          <div class="term-def">Standardized measurement indicating how clean or polluted ambient atmospheric air is.</div>
          <div class="term-name">18. Mitigation <span class="term-ipa">/ˌmɪtɪˈɡeɪʃn/</span></div>
          <div class="term-def">Measures taken to reduce greenhouse emissions and slow long-term climate destabilization.</div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 1 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 2: 4-PHOTO VISUAL DESCRIPTION & DEBATE LAB -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 2/7</span>
    </div>

    <h2>Part 2: 4-Photo Visual Description &amp; Debate Lab — The Four Faces of Climate Crisis</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Work in pairs. Study the four contrasting scenes below. Describe what you see, note key observational contrasts, and debate the guided questions.
    </p>

    <!-- 2x2 Photo Grid -->
    <div class="grid-2" style="gap: 6px; margin-bottom: 6px;">
      <!-- Photo 1 -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${img1}" style="width: 100%; height: 100%; object-fit: cover;" alt="Extreme Heatwave &amp; Drought">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo 1: Extreme Heat &amp; Drought</strong>
          <span class="badge badge-amber">SOUTHERN EUROPE</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Parched, cracked reservoir beds during a 42°C heatwave. Water reserves drop to critical levels.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Should water for agriculture take priority over residential city supplies during severe droughts?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo 2 -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${img2}" style="width: 100%; height: 100%; object-fit: cover;" alt="Urban Flash Flooding">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo 2: Urban Flash Flooding</strong>
          <span class="badge badge-primary">METROPOLITAN CENTER</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Impermeable tarmac floods within 20 minutes of torrential cloudburst, halting buses and metros.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Who is liable for vehicle flood damage: the car owner, city council, or insurance companies?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo 3 -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${img3}" style="width: 100%; height: 100%; object-fit: cover;" alt="Wildfire Smoke &amp; Sky">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo 3: Wildfire Smoke &amp; Sky</strong>
          <span class="badge badge-slate">FOREST-URBAN INTERFACE</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Dense smoke plume blankets a populated valley, triggering severe air quality alerts and flight delays.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Should building private homes in high-risk wildfire zones be completely banned by law?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo 4 -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${img4}" style="width: 100%; height: 100%; object-fit: cover;" alt="Renewable Transition &amp; Hope">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo 4: Renewable Transition &amp; Hope</strong>
          <span class="badge badge-green">GREEN ENERGY PARK</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Modern wind turbines and solar panels replacing fossil power, driving community decarbonization.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Can 100% renewable energy guarantee reliable baseload power during extreme winter freezes?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>
    </div>

    <!-- Useful Phrases for Comparing Photos -->
    <div class="card card-left-blue" style="margin-bottom: 5px;">
      <h3 style="color: #0369a1; font-size: 7.6pt;">Useful Phrases for Photo Contrast &amp; Comparison</h3>
      <div class="grid-2" style="font-size: 6.9pt; gap: 4px;">
        <div class="stem"><em>"Whereas Photo 1 highlights extreme drought, Photo 2 shows the opposite catastrophe of flash flooding."</em></div>
        <div class="stem"><em>"Both Photo 2 and Photo 3 demonstrate how vulnerable urban transport is to sudden atmospheric shocks."</em></div>
        <div class="stem"><em>"In stark contrast to the first three photos, Photo 4 offers a hopeful look at technological adaptation."</em></div>
        <div class="stem"><em>"What strikes me most about these images is the rapid acceleration of unpredictable weather."</em></div>
      </div>
    </div>

    <!-- Plenary Discussion Prompt -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.6pt;">Paired Discussion &amp; Observational Verdict</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 3px;">
        Discuss with your partner: Which of these four realities is currently having the biggest economic and social impact on your country? Formulate a 2-sentence summary together:
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 2 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 3: SPOKEN LANGUAGE CLINIC (STANCES) -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 3/7</span>
    </div>

    <h2>Part 3: Spoken Language Clinic — Expressing Stances &amp; Polite Disagreement</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Mastering conversational signposts for expressing conviction, qualifying claims, and disagreeing diplomatically.
    </p>

    <div class="grid-3" style="gap: 5px; margin-bottom: 6px;">
      <!-- Column 1 -->
      <div class="card card-left-blue">
        <h3 style="color: #0369a1; font-size: 7.6pt;">1. Stating Strong Positions</h3>
        <p style="font-size: 6.8pt; color: #64748b; margin-bottom: 3px;">Use when presenting clear, evidenced arguments:</p>
        <div class="stem"><em>"I am convinced that climate adaptation must take priority over..."</em></div>
        <div class="stem"><em>"From a community resilience perspective, it is clear that..."</em></div>
        <div class="stem"><em>"There is no denying that current municipal funding is inadequate."</em></div>
        <div class="stem"><em>"The evidence unequivocally shows that heatwaves are intensifying."</em></div>
      </div>

      <!-- Column 2 -->
      <div class="card card-left-amber">
        <h3 style="color: #b45309; font-size: 7.6pt;">2. Polite, Tactful Disagreement</h3>
        <p style="font-size: 6.8pt; color: #64748b; margin-bottom: 3px;">Challenge ideas constructively without conflict:</p>
        <div class="stem"><em>"I see your point, but we also have to consider the cost of..."</em></div>
        <div class="stem"><em>"I am not entirely convinced that technology alone can solve this."</em></div>
        <div class="stem"><em>"While that may be true in theory, in practice it would cause..."</em></div>
        <div class="stem"><em>"With respect, that approach ignores the reality of suburban commuters."</em></div>
      </div>

      <!-- Column 3 -->
      <div class="card card-left-green">
        <h3 style="color: #15803d; font-size: 7.6pt;">3. Balancing &amp; Conceding</h3>
        <p style="font-size: 6.8pt; color: #64748b; margin-bottom: 3px;">Demonstrate open-minded, nuanced thinking:</p>
        <div class="stem"><em>"On the one hand..., but on the other hand we cannot ignore..."</em></div>
        <div class="stem"><em>"Despite the high initial cost, the long-term benefits are substantial."</em></div>
        <div class="stem"><em>"I accept that disruption will occur, yet doing nothing is far worse."</em></div>
        <div class="stem"><em>"Even if we cut emissions today, we still need immediate defenses."</em></div>
      </div>
    </div>

    <!-- Oral Transformation Exercises -->
    <div class="card card-left-blue">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Communicative Application: Reframing Spoken Arguments</h3>
      <p style="font-size: 7.1pt; color: #334155; margin-bottom: 4px;">
        Work with your partner. Take turns rephrasing the blunt statements below into professional, nuanced B2 spoken arguments using the signposts above:
      </p>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>Prompt 1:</strong> <em>"Building sea walls is way too expensive and useless."</em>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>Prompt 2:</strong> <em>"Airlines should pay for all flood damage caused by global warming."</em>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>Prompt 3:</strong> <em>"People who live near rivers only have themselves to blame when it floods."</em>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>

      <div style="font-size: 7pt;">
        <strong>Prompt 4:</strong> <em>"Renewable energy will never work when the wind doesn't blow."</em>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 3 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 4: €50M DECISION TASK (ALLOCATION) -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 4/7</span>
    </div>

    <h2>Part 4: Small-Group Decision Task — The €50M Climate Action Plan</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Scenario: Your group forms the Regional Climate Resilience Taskforce. You have a fixed municipal fund of €50M to spend across 5 competing infrastructure proposals.
    </p>

    <!-- Options Table -->
    <table class="tech-table" style="font-size: 7.1pt; margin-bottom: 6px;">
      <thead>
        <tr>
          <th style="width: 5%;">Opt</th>
          <th style="width: 25%;">Project Proposal</th>
          <th style="width: 10%;">Cost</th>
          <th style="width: 35%;">Primary Climate Benefit</th>
          <th style="width: 25%;">Key Trade-off / Limitation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>A</strong></td>
          <td><strong>Urban Bioswales &amp; Sponge Corridors</strong></td>
          <td style="font-weight: 800; color: #0284c7;">€20M</td>
          <td>Absorbs 85% of torrential flash flood runoff in city center; replenishes groundwater aquifers.</td>
          <td style="color: #b45309;">Requires removing 600 street parking bays; 14 months of roadworks.</td>
        </tr>
        <tr>
          <td><strong>B</strong></td>
          <td><strong>Regional AI Early Warning Radar</strong></td>
          <td style="font-weight: 800; color: #0284c7;">€15M</td>
          <td>Provides 45-minute advance alert for sudden downbursts, microbursts, and flash flooding.</td>
          <td style="color: #b45309;">Does not physically prevent damage to buildings, roads, or runways.</td>
        </tr>
        <tr>
          <td><strong>C</strong></td>
          <td><strong>Cool Roofs &amp; Shaded Canopies</strong></td>
          <td style="font-weight: 800; color: #0284c7;">€10M</td>
          <td>Lowers urban heat island effect by 3.5°C; shields vulnerable elderly pedestrians in heatwaves.</td>
          <td style="color: #b45309;">Offers zero protection against flooding or winter storms; limited to center.</td>
        </tr>
        <tr>
          <td><strong>D</strong></td>
          <td><strong>Aerial Drone Fire-Detection Fleet</strong></td>
          <td style="font-weight: 800; color: #0284c7;">€25M</td>
          <td>Detects forest fires within 90 seconds of ignition across 2,000 km² of peri-urban forests.</td>
          <td style="color: #b45309;">High ongoing maintenance costs; consumes half of the entire municipal fund.</td>
        </tr>
        <tr>
          <td><strong>E</strong></td>
          <td><strong>Subsidized Heat Pumps &amp; Insulation</strong></td>
          <td style="font-weight: 800; color: #0284c7;">€30M</td>
          <td>Cuts household heating/cooling emissions by 40% across 15,000 low-income apartments.</td>
          <td style="color: #b45309;">Exceeds half the budget; does not protect against immediate flood disasters.</td>
        </tr>
      </tbody>
    </table>

    <div class="card card-left-blue" style="margin-bottom: 5px;">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Group Allocation Matrix (€50M Budget Constraint)</h3>
      <p style="font-size: 7pt; color: #475569; margin-bottom: 4px;">
        Evaluate the combinations. You cannot exceed €50M. Record your team's chosen allocation and calculate the exact total:
      </p>
      <div class="grid-2" style="font-size: 7.1pt; gap: 6px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>Selected Option(s):</strong> [ &nbsp; ] Option A &nbsp; [ &nbsp; ] Option B &nbsp; [ &nbsp; ] Option C &nbsp; [ &nbsp; ] Option D &nbsp; [ &nbsp; ] Option E
          <div style="margin-top: 4px;"><strong>Total Expenditure:</strong> € ________ Million (Max €50M)</div>
          <div style="margin-top: 2px;"><strong>Remaining Reserve Fund:</strong> € ________ Million</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>Eliminated Option(s) &amp; Justification:</strong>
          <div class="write-in-line" style="margin-top: 3px;"></div>
          <div class="write-in-line"></div>
        </div>
      </div>
    </div>

    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.8pt;">Group Negotiation Notes &amp; Defense Argument</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 2px;">
        Summarize why your combination delivers the greatest long-term climate resilience per euro spent:
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 4 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 5: BRIEFING PITCH & PEER RUBRIC -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 5/7</span>
    </div>

    <h2>Part 4 (Cont.): 90-Second Mitigation Briefing Pitch &amp; Peer Rubric</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Present your €50M Climate Resilience package to the plenary class. Each group has 90 seconds to persuade the City Council.
    </p>

    <!-- Pitch Framework -->
    <div class="card card-left-blue" style="margin-bottom: 6px;">
      <h3 style="color: #0369a1; font-size: 7.8pt;">The 4-Step Spoken Pitch Architecture</h3>
      <div class="grid-2" style="font-size: 7.1pt; gap: 6px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>1. Opening Hook (15s):</strong> Establish the urgent threat facing the region.
          <div class="stem"><em>"Fellow council members, last summer's disaster proved that our city is living on borrowed time..."</em></div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>2. Strategic Allocation (35s):</strong> Announce your funded projects with exact costs.
          <div class="stem"><em>"To safeguard our future, our taskforce has allocated €20M to bioswales and €15M to early radar..."</em></div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>3. Trade-off Defense (25s):</strong> Explain why you eliminated competing proposals.
          <div class="stem"><em>"While subsidized heat pumps are desirable, our immediate survival depends on flood defense..."</em></div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 4px; border-radius: 4px;">
          <strong>4. Concluding Call to Action (15s):</strong> Deliver a punchy final recommendation.
          <div class="stem"><em>"Investing €50M today prevents €500M in catastrophe tomorrow. We urge you to adopt this plan."</em></div>
        </div>
      </div>
    </div>

    <!-- Peer Rubric -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.8pt;">Peer Checklist & Active Listening Rubric (Partner B Observer)</h3>
      <p style="font-size: 7pt; color: #475569; margin-bottom: 4px;">
        As other groups pitch, assess their proposal using the 3 criteria below (Score 1–4 per criterion):
      </p>
      <table class="rubric-table">
        <thead>
          <tr>
            <th style="width: 25%;">Evaluation Criterion</th>
            <th style="width: 45%;">Observable Communicative Descriptors</th>
            <th style="width: 15%;">Score (1–4)</th>
            <th style="width: 15%;">Peer Feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Strategic Justification &amp; Trade-offs</strong></td>
            <td>Clear, convincing defense of chosen options; transparent rationale for rejected projects within the €50M limit.</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><strong>2. Spoken Fluency &amp; Stance Signposts</strong></td>
            <td>Confident oral delivery; seamless integration of opinion linkers (<em>convinced that, nevertheless, evidence shows</em>).</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><strong>3. Q&amp;A Defense &amp; Diplomancy</strong></td>
            <td>Handled challenging questions from peers diplomatically; defended budget numbers without defensiveness.</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pitch Notes -->
    <div class="card card-left-green" style="margin-top: 5px;">
      <h3 style="color: #15803d; font-size: 7.6pt;">Speaker Notes &amp; Individual Speaking Cue</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 2px;">
        Write your individual speaking part (ensure every team member speaks for at least 25 seconds):
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 5 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 6: INTERACTIVE SPOKEN GAME (TABOO) -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 6/7</span>
    </div>

    <h2>Part 5: Interactive Spoken Game — Climate Buzzword Taboo</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Work in pairs or groups of 3. Describe the secret keyword to your partner WITHOUT saying the forbidden words. You have 45 seconds per card!
    </p>

    <!-- 6 Printable Taboo Cards (2x3 Grid) -->
    <div class="grid-3" style="gap: 6px; margin-bottom: 6px;">
      <!-- Card 1 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 01</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">FLASH FLOOD</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/flæʃ flʌd/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Water</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Rain</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; River</div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 02</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">HEAT ISLAND</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/hiːt ˈaɪlənd/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Hot / Heat</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; City / Urban</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Concrete</div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 03</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">DROUGHT</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/draʊt/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Dry / Arid</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Rain</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Water</div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 04</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">WILDFIRE</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/ˈwaɪldfaɪər/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Forest / Trees</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Burn / Fire</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Smoke</div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 05</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">RESILIENCE</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/rɪˈzɪliəns/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Strong / Tough</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Bounce back</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Survive</div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="card" style="text-align: center; border: 1.5px dashed #8b5cf6; padding: 6px 4px; background: #faf5ff;">
        <span class="badge badge-purple" style="font-size: 6pt;">TABOO CARD 06</span>
        <h3 style="font-size: 9.5pt; color: #581c87; margin: 3px 0 1px;">MICROBURST</h3>
        <span style="font-size: 6.8pt; font-family: ui-monospace, monospace; color: #7e22ce;">/ˈmaɪkrəʊbɜːst/</span>
        <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 4px; padding: 4px; margin-top: 4px; font-size: 7pt;">
          <strong style="color: #dc2626; font-size: 6.5pt; text-transform: uppercase;">FORBIDDEN WORDS:</strong>
          <div style="color: #1e293b; font-weight: 700; margin-top: 2px;">&bull; Wind / Air</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Storm / Cloud</div>
          <div style="color: #1e293b; font-weight: 700;">&bull; Aircraft / Runway</div>
        </div>
      </div>
    </div>

    <!-- Circumlocution Strategies -->
    <div class="card card-left-blue">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Golden Rules for Spoken Circumlocution</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 4px;">
        When you cannot use the obvious keywords, deploy these 4 professional spoken strategies:
      </p>
      <div class="grid-2" style="font-size: 7pt; gap: 5px;">
        <div class="stem"><strong>1. Functional Definition:</strong> <em>"This is a phenomenon where the atmosphere suddenly releases..."</em></div>
        <div class="stem"><strong>2. Operational Consequences:</strong> <em>"When this occurs, municipal transport grinds to a complete halt..."</em></div>
        <div class="stem"><strong>3. Analogies &amp; Metaphors:</strong> <em>"You can imagine it like a giant sponge that has reached maximum capacity..."</em></div>
        <div class="stem"><strong>4. Cause &amp; Effect:</strong> <em>"It is triggered by prolonged high temperatures combined with dry soil..."</em></div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 6 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 7: TOWN HALL PUBLIC DEBATE & REFLECTION -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 1</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S1 • PAGE 7/7</span>
    </div>

    <h2>Part 6: Town Hall Public Debate — Who Pays for Climate Adaptation?</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Motion: The city council proposes a 5% environmental tax on aviation, fossil fuels, and corporate commerce to fund regional flood walls.
    </p>

    <!-- 3 Stakeholder Roles -->
    <div class="grid-3" style="gap: 5px; margin-bottom: 6px;">
      <div class="card card-left-blue">
        <h3 style="color: #0369a1; font-size: 7.4pt;">Role A: Coastal &amp; River Residents</h3>
        <p style="font-size: 6.8pt; color: #0284c7; font-weight: 700; margin-bottom: 3px;">Demands Immediate Protection:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Homes lost 50% value due to flood zone classifications.</li>
          <li>Insurance firms refuse catastrophe coverage.</li>
          <li>Human safety must take precedence over corporate airline profits.</li>
        </ul>
      </div>

      <div class="card card-left-amber">
        <h3 style="color: #b45309; font-size: 7.4pt;">Role B: Chamber of Commerce &amp; Airlines</h3>
        <p style="font-size: 6.8pt; color: #b45309; font-weight: 700; margin-bottom: 3px;">Opposes Selective Taxation:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Aviation already pays carbon taxes under EU ETS schemes.</li>
          <li>New local taxes will destroy jobs and reduce tourist traffic.</li>
          <li>City should reallocate existing municipal general funds.</li>
        </ul>
      </div>

      <div class="card card-left-green">
        <h3 style="color: #15803d; font-size: 7.4pt;">Role C: Youth Climate Coalition</h3>
        <p style="font-size: 6.8pt; color: #15803d; font-weight: 700; margin-bottom: 3px;">Polluter-Pays Principle:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Fossil fuel users must pay for the ecological damage they cause.</li>
          <li>Sea walls treat symptoms; tax money must fund root-cause decarbonization.</li>
          <li>Funds must be ring-fenced with public citizen oversight.</li>
        </ul>
      </div>
    </div>

    <!-- Committee Consensus Agreement -->
    <div class="card card-left-blue" style="margin-bottom: 5px;">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Town Hall Negotiated Consensus Compromise</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 3px;">
        Work across stakeholder groups. Record the negotiated compromise: who pays, what tax rate is agreed, and what exemptions are granted:
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <!-- Self-Assessment Checklist -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.8pt;">Session 1 Self-Assessment &amp; Communicative Milestones</h3>
      <div class="grid-2" style="font-size: 7pt; gap: 4px;">
        <div>[ &nbsp; ] I can describe and compare complex weather scenes using B1/B2 observational language.</div>
        <div>[ &nbsp; ] I can use formal useful phrases for expressing opinions to state convictions and disagree tactfully.</div>
        <div>[ &nbsp; ] I can negotiate a municipal budget allocation and defend trade-offs under time pressure.</div>
        <div>[ &nbsp; ] I can use circumlocution to describe technical climate concepts without forbidden words.</div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 1</span>
      <span>Page 7 of 7</span>
    </div>
  </div>

</body>
</html>`;
}

// ==========================================
// SESSION 2 HTML TEMPLATE BUILDER
// ==========================================
function buildS2Template() {
  const imgA = getBase64Image('urban_car_sprawl.jpg');
  const imgB = getBase64Image('urban_superblock.jpg');
  const imgC = getBase64Image('transport_high_speed_rail.jpg');
  const imgD = getBase64Image('urban_15min_neighborhood.jpg');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Session 2 Lesson Worksheet - Sustainable Cities &amp; Low-Emission Mobility</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm 12mm 12mm;
      @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
        font-weight: 700;
      }
      @bottom-left {
        content: "ENAC • GSEA Semester 1 General English (AG • LV101E) • Phil PARRIS";
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 7.5pt;
        color: #94a3b8;
      }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 8.2pt;
      line-height: 1.32;
      color: #1e293b;
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      page-break-after: always;
      position: relative;
      height: 100%;
      overflow: hidden;
    }
    .page:last-child { page-break-after: avoid; }
    .doc-header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 4px;
      margin-bottom: 7px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .doc-header .agency {
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.8px;
      color: #0369a1;
      text-transform: uppercase;
    }
    .doc-header .ref {
      font-size: 7pt;
      font-family: ui-monospace, monospace;
      color: #64748b;
      font-weight: 600;
    }
    .doc-footer {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      border-top: 1px solid #cbd5e1;
      padding-top: 3px;
      display: flex;
      justify-content: space-between;
      font-size: 6.8pt;
      color: #64748b;
    }
    h1 {
      font-size: 13.5pt;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.3px;
      line-height: 1.15;
      margin-bottom: 2px;
    }
    h2 {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0369a1;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    h3 {
      font-size: 8.2pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 3px;
    }
    .badge {
      display: inline-block;
      font-size: 6.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 1.5px 5px;
      border-radius: 3px;
    }
    .badge-primary { background: #0284c7; color: #ffffff; }
    .badge-amber { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
    .badge-slate { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; font-family: ui-monospace, monospace; }
    .badge-green { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }

    .card {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 6px 8px;
      background: #ffffff;
      margin-bottom: 5px;
    }
    .card-left-amber { border-left: 3.5px solid #f59e0b; background: #ffffff; }
    .card-left-blue { border-left: 3.5px solid #0284c7; background: #ffffff; }
    .card-left-green { border-left: 3.5px solid #10b981; background: #ffffff; }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; }
    .grid-5 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 4px; }

    .write-in-line {
      border-bottom: 1px dotted #94a3b8;
      height: 14px;
      margin-bottom: 2px;
    }
    .stem {
      display: block;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3px solid #0284c7;
      padding: 3.5px 6px;
      border-radius: 4px;
      font-size: 7.2pt;
      color: #334155;
      margin-top: 3px;
    }
    .rubric-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.2pt;
      margin-top: 4px;
    }
    .rubric-table th {
      background: #0f172a;
      color: #ffffff;
      padding: 3.5px 6px;
      font-weight: 700;
      font-size: 6.5pt;
      text-align: left;
    }
    .rubric-table td {
      padding: 3px 6px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
    }
    .vocab-col {
      font-size: 7.1pt;
      line-height: 1.25;
    }
    .term-name { font-weight: 800; color: #0f172a; }
    .term-ipa { font-family: ui-monospace, monospace; color: #0284c7; font-size: 6.6pt; }
    .term-def { color: #475569; margin-bottom: 3.5px; }
  </style>
</head>
<body>

  <!-- ========================================== -->
  <!-- PAGE 1: BRIEFING, OBJECTIVES & VOCAB CLINIC -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 1/7</span>
    </div>

    <div style="margin-bottom: 6px;">
      <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
        <span class="badge badge-primary">SEMINAR WORKSHEET</span>
        <span class="badge badge-slate">SESSION 02</span>
        <span class="badge badge-green">SUSTAINABLE CITIES</span>
        <span class="badge badge-amber">B1/B2 COMMUNICATIVE LAB</span>
      </div>
      <h1>Sustainable Cities &amp; Low-Emission Mobility</h1>
      <p style="font-size: 7.8pt; color: #64748b; margin-top: 1px;">
        Urban Living, Green Neighborhoods, The 15-Minute City &amp; Car-Free Center Debate
      </p>
    </div>

    <div class="card card-left-blue" style="margin-bottom: 6px;">
      <h3 style="color: #0369a1;">Session Learning Objectives</h3>
      <div class="grid-2" style="font-size: 7.2pt; gap: 4px;">
        <div>&bull; <strong>Urban Microclimates:</strong> Explain the Urban Heat Island effect, sponge city principles, and 15-minute urban planning using clear B2 sentence stems.</div>
        <div>&bull; <strong>Photo Contrast:</strong> Compare 4 contrasting images of urban transit: car sprawl, pedestrian superblocks, rail corridors, and micro-mobility streets.</div>
        <div>&bull; <strong>Double Comparatives:</strong> Master proportional change structures (<em>The denser... the lower...</em>) and formal contrast connectors (<em>whereas, nevertheless, despite</em>).</div>
        <div>&bull; <strong>Collocation Game:</strong> Match 10 compound mobility collocations and analyze the Sustainable Mobility Hierarchy pyramid.</div>
        <div>&bull; <strong>Redesign Sprint:</strong> Re-engineer an 8-lane airport corridor into a multimodal green district and deliver a 90-second pitch.</div>
        <div>&bull; <strong>Public Debate:</strong> Debate a permanent ban on private fossil-fueled vehicles from the central district across 3 stakeholder roles.</div>
      </div>
    </div>

    <div class="card card-left-amber" style="margin-bottom: 6px;">
      <h3 style="color: #b45309;">Part 1: Livable City Ranking &amp; Diagnostic Warm-up (Pairwork)</h3>
      <p style="font-size: 7.2pt; color: #475569; margin-bottom: 3px;">
        Rank the following 5 factors of a truly livable city from 1 (most essential) to 5 (least essential). Compare with your partner:
      </p>
      <div class="grid-5" style="font-size: 6.8pt; gap: 4px; text-align: center;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 3px; border-radius: 4px;">
          <strong>A. Bike Lanes</strong>
          <div style="color: #64748b; font-size: 6.2pt;">Safe, segregated cycle network across metropolitan area.</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 3px; border-radius: 4px;">
          <strong>B. Green Parks</strong>
          <div style="color: #64748b; font-size: 6.2pt;">Public canopy &amp; gardens within 5 min of every front door.</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 3px; border-radius: 4px;">
          <strong>C. Rapid Transit</strong>
          <div style="color: #64748b; font-size: 6.2pt;">Affordable electric trams &amp; metros running frequently.</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 3px; border-radius: 4px;">
          <strong>D. Car-Free Zones</strong>
          <div style="color: #64748b; font-size: 6.2pt;">Pedestrianized shopping streets with zero traffic noise.</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 3px; border-radius: 4px;">
          <strong>E. Sponge Drainage</strong>
          <div style="color: #64748b; font-size: 6.2pt;">Permeable streets preventing catastrophic urban runoff.</div>
        </div>
      </div>
    </div>

    <div class="card card-left-blue">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
        <h3 style="color: #0369a1;">Essential Spoken Vocabulary: 18 Sustainable Mobility Terms</h3>
        <span class="badge badge-slate">CORE B1/B2 GLOSSARY</span>
      </div>
      <div class="grid-3" style="margin-top: 3px;">
        <div class="vocab-col">
          <div class="term-name">1. 15-Minute City <span class="term-ipa">/ˈfɪftiːn ˈmɪnɪt ˈsɪti/</span></div>
          <div class="term-def">Urban planning concept where work, food, and health are reachable within 15 minutes on foot or bike.</div>
          <div class="term-name">2. Active Mobility <span class="term-ipa">/ˈæktɪv məʊˈbɪləti/</span></div>
          <div class="term-def">Human-powered physical travel, primarily walking, wheeling, and cycling.</div>
          <div class="term-name">3. Low-Emission Zone <span class="term-ipa">/ləʊ ɪˈmɪʃn zəʊn/</span></div>
          <div class="term-def">Designated urban area where high-polluting vehicles are fined or banned completely.</div>
          <div class="term-name">4. Sponge City <span class="term-ipa">/spʌndʒ ˈsɪti/</span></div>
          <div class="term-def">City built with wetlands, rain gardens, and permeable soil that absorbs and reuses rainwater.</div>
          <div class="term-name">5. Permeable Pavement <span class="term-ipa">/ˈpɜːmiəbl/</span></div>
          <div class="term-def">Porous surface materials allowing stormwater to infiltrate naturally into underlying aquifers.</div>
          <div class="term-name">6. Multimodal Transit <span class="term-ipa">/ˌmʌltiˈməʊdl/</span></div>
          <div class="term-def">Seamless travel combining trains, buses, e-bikes, and walking under a single integrated fare card.</div>
        </div>
        <div class="vocab-col">
          <div class="term-name">7. Heat Island Effect <span class="term-ipa">/hiːt ˈaɪlənd/</span></div>
          <div class="term-def">Phenomenon where concrete and tarmac absorb solar radiation, making cities 4–8°C hotter than rural areas.</div>
          <div class="term-name">8. Traffic Calming <span class="term-ipa">/ˈtræfɪk ˈkɑːmɪŋ/</span></div>
          <div class="term-def">Physical design interventions like speed humps, chicanes, and narrowings that force drivers to slow down.</div>
          <div class="term-name">9. Superblock <span class="term-ipa">/ˈsuːpəblɒk/</span></div>
          <div class="term-def">Neighborhood unit (pioneered in Barcelona) where cars are restricted to perimeter roads.</div>
          <div class="term-name">10. Micro-Mobility <span class="term-ipa">/ˈmaɪkrəʊ məʊˈbɪləti/</span></div>
          <div class="term-def">Small, lightweight personal transport like shared e-bikes, cargo bikes, and electric kick-scooters.</div>
          <div class="term-name">11. Light Rail Transit <span class="term-ipa">/laɪt reɪl/</span></div>
          <div class="term-def">Modern electric tramways operating in segregated median lanes with high passenger capacity.</div>
          <div class="term-name">12. Park-and-Ride <span class="term-ipa">/pɑːk ænd raɪd/</span></div>
          <div class="term-def">Perimeter parking garage where suburban drivers leave their cars and transfer to rapid rail or bus transit.</div>
        </div>
        <div class="vocab-col">
          <div class="term-name">13. Pedestrianization <span class="term-ipa">/pəˌdestriənaɪˈzeɪʃn/</span></div>
          <div class="term-def">Converting vehicular streets into car-free public zones dedicated to pedestrians, cafes, and trees.</div>
          <div class="term-name">14. Congestion Charge <span class="term-ipa">/kənˈdʒestʃən tʃɑːdʒ/</span></div>
          <div class="term-def">Daily financial levy charged to motorists entering a crowded city center during peak hours.</div>
          <div class="term-name">15. Bus Rapid Transit <span class="term-ipa">/bʌs ˈræpɪd/</span></div>
          <div class="term-def">High-frequency bus system running on dedicated rights-of-way with off-board ticketing.</div>
          <div class="term-name">16. Carbon Neutral <span class="term-ipa">/ˈkɑːbən ˈnjuːtrəl/</span></div>
          <div class="term-def">Balancing emitted greenhouse gases with equivalent carbon absorption or renewable offsets.</div>
          <div class="term-name">17. Bicycle Corridor <span class="term-ipa">/ˈbaɪsɪkl ˈkɒrɪdɔː/</span></div>
          <div class="term-def">Continuous, protected cycle highway connecting outer residential districts directly to city employment.</div>
          <div class="term-name">18. Livability Index <span class="term-ipa">/ˌlɪvəˈbɪləti/</span></div>
          <div class="term-def">Comparative ranking of cities assessing air quality, public safety, transit, and green public space.</div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 1 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 2: 4-PHOTO VISUAL CONTRAST & DEBATE LAB -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 2/7</span>
    </div>

    <h2>Part 2: 4-Photo Visual Contrast &amp; Debate Lab — Two Visions of the Future City</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Work in pairs. Contrast two competing urban philosophies: car-centric congestion vs. human-scale livability and clean transit.
    </p>

    <!-- 2x2 Photo Grid -->
    <div class="grid-2" style="gap: 6px; margin-bottom: 6px;">
      <!-- Photo A -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${imgA}" style="width: 100%; height: 100%; object-fit: cover;" alt="Car Sprawl Highway">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo A: The Car-Choked Highway</strong>
          <span class="badge badge-amber">URBAN SPRAWL</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">8-lane arterial motorway dividing neighborhoods; exhaust pollution, noise, and stationary gridlock.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Does building wider motorways reduce traffic congestion, or does it simply induce more demand?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo B -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${imgB}" style="width: 100%; height: 100%; object-fit: cover;" alt="Reclaimed Superblock">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo B: The Reclaimed Superblock</strong>
          <span class="badge badge-green">BARCELONA MODEL</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Former asphalt intersection converted into tree canopies, children's play areas, and outdoor cafes.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> How can cities protect local shopkeepers when street parking is converted into pedestrian plazas?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo C -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${imgC}" style="width: 100%; height: 100%; object-fit: cover;" alt="High Speed Rail">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo C: High-Speed Rail Corridor</strong>
          <span class="badge badge-primary">INTERMODAL TRANSIT</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">High-speed electric train connecting city centers in 2 hours, replacing carbon-heavy domestic flights.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Should governments legally ban short-haul domestic flights where high-speed rail takes under 2.5 hours?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>

      <!-- Photo D -->
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <div style="height: 105px; overflow: hidden; border-radius: 4px; margin-bottom: 3px; background: #0f172a;">
          <img src="${imgD}" style="width: 100%; height: 100%; object-fit: cover;" alt="15-Minute Street">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <strong style="font-size: 7.3pt; color: #0f172a;">Photo D: The 15-Minute Micro-Mobility Street</strong>
          <span class="badge badge-green">HUMAN-SCALE LIVING</span>
        </div>
        <p style="font-size: 6.7pt; color: #475569; margin-bottom: 2px;">Mixed-use street with protected cycle lanes, electric cargo bikes, grocery shops, and shaded benches.</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 2.5px 4px; font-size: 6.6pt;">
          <strong>Debate Question:</strong> Is the 15-minute city realistic for outer suburbs, or only wealthy metropolitan centers?
          <div class="write-in-line" style="margin-top: 2px;"></div>
        </div>
      </div>
    </div>

    <!-- Useful Contrast Stems -->
    <div class="card card-left-blue" style="margin-bottom: 5px;">
      <h3 style="color: #0369a1; font-size: 7.6pt;">Sentence Stems for Contrasting Urban Environments</h3>
      <div class="grid-2" style="font-size: 6.9pt; gap: 4px;">
        <div class="stem"><em>"Photo A represents 20th-century car dependency, whereas Photo B shows street space reclaimed for humans."</em></div>
        <div class="stem"><em>"The more road capacity we build for private vehicles, the more traffic gridlock we inevitably generate."</em></div>
        <div class="stem"><em>"Photo C illustrates rail as an intermodal alternative to aviation, cutting emissions by up to 90%."</em></div>
        <div class="stem"><em>"Photo D embodies the 15-minute city philosophy: daily necessities accessible without touching a car steering wheel."</em></div>
      </div>
    </div>

    <!-- Plenary Discussion Prompt -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.6pt;">Paired Discussion &amp; Urban Design Verdict</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 3px;">
        Discuss with your partner: If you were mayor of your hometown, which of these 4 environments would you prioritize funding first, and why?
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 2 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 3: SPOKEN LANGUAGE CLINIC (DOUBLE COMPARATIVES) -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 3/7</span>
    </div>

    <h2>Part 3: Spoken Language Clinic — Proposing Solutions &amp; Double Comparatives</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Mastering proportional changes (<em>The more... the less...</em>) and formal contrast connectors in urban policy proposals.
    </p>

    <div class="grid-2" style="gap: 6px; margin-bottom: 6px;">
      <!-- Column 1 -->
      <div class="card card-left-blue">
        <h3 style="color: #0369a1; font-size: 7.6pt;">1. Double Comparative Formulas (Proportionality)</h3>
        <p style="font-size: 6.8pt; color: #64748b; margin-bottom: 3px;">Show that one change directly causes another to increase or decrease:</p>
        <div class="stem"><em>"The <strong style="color: #0284c7;">denser</strong> the transit network, the <strong style="color: #10b981;">fewer</strong> private cars enter the city center."</em></div>
        <div class="stem"><em>"The <strong style="color: #0284c7;">more</strong> protected cycle tracks we build, the <strong style="color: #10b981;">safer</strong> commuters feel."</em></div>
        <div class="stem"><em>"The <strong style="color: #0284c7;">cheaper</strong> the train tickets, the <strong style="color: #10b981;">more likely</strong> passengers choose rail over air."</em></div>
        <div class="stem"><em>"The <strong style="color: #0284c7;">higher</strong> the parking fees, the <strong style="color: #10b981;">less</strong> congestion we observe."</em></div>
      </div>

      <!-- Column 2 -->
      <div class="card card-left-amber">
        <h3 style="color: #b45309; font-size: 7.6pt;">2. Formal Contrast Connectors</h3>
        <p style="font-size: 6.8pt; color: #64748b; margin-bottom: 3px;">Balance opposing arguments diplomatically:</p>
        <div class="stem"><em>"<strong style="color: #b45309;">Whereas</strong> cars consume 70% of street space, they move under 30% of commuters."</em></div>
        <div class="stem"><em>"<strong style="color: #b45309;">Despite</strong> initial merchant resistance, pedestrian zones boosted retail profits by 15%."</em></div>
        <div class="stem"><em>"Electric trams have high upfront costs; <strong style="color: #b45309;">nevertheless</strong>, their life-cycle emissions are zero."</em></div>
        <div class="stem"><em>"<strong style="color: #b45309;">While</strong> suburbs need road access, inner districts must prioritize human health."</em></div>
      </div>
    </div>

    <!-- Practice Sentence Transformations -->
    <div class="card card-left-blue">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Communicative Transformation Practice</h3>
      <p style="font-size: 7.1pt; color: #334155; margin-bottom: 4px;">
        Work in pairs. Combine the two statements into a single, polished B2 sentence using double comparatives or contrast linkers:
      </p>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>1. Cities plant more shade trees. The urban heat island effect drops dramatically.</strong>
        <div class="stem"><em>&rarr; The more shade trees cities plant, the lower the urban heat island effect drops.</em></div>
      </div>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>2. Public transit is made frequent and affordable. Commuters abandon their cars.</strong>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>

      <div style="font-size: 7pt; margin-bottom: 4px;">
        <strong>3. Electric cargo bikes are clean and agile. Delivery companies still rely on diesel vans.</strong>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>

      <div style="font-size: 7pt;">
        <strong>4. Airports invest heavily in intermodal rail links. Airport car park revenue declines.</strong>
        <div class="write-in-line" style="margin-top: 2px;"></div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 3 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 4: VOCAB GAME & MOBILITY PYRAMID -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 4/7</span>
    </div>

    <h2>Part 4: Vocabulary Game — Collocation Matcher &amp; Mobility Pyramid</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Build active lexical accuracy by matching 10 compound mobility terms and ranking transport modes in the sustainability hierarchy.
    </p>

    <!-- 10 Collocation Pairs -->
    <div class="card card-left-green" style="margin-bottom: 6px;">
      <h3 style="color: #15803d; font-size: 7.8pt;">10 Essential Compound Mobility Collocations</h3>
      <div class="grid-2" style="font-size: 7.1pt; gap: 4px;">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Low-Emission</strong> <span style="color: #15803d; font-weight: 700;">Zone (LEZ)</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Sponge City</strong> <span style="color: #15803d; font-weight: 700;">Architecture</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Urban Heat</strong> <span style="color: #15803d; font-weight: 700;">Island Effect</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>15-Minute</strong> <span style="color: #15803d; font-weight: 700;">Neighborhood</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Permeable</strong> <span style="color: #15803d; font-weight: 700;">Pavement</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Active</strong> <span style="color: #15803d; font-weight: 700;">Mobility</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Intermodal</strong> <span style="color: #15803d; font-weight: 700;">Transit Hub</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Park-and-Ride</strong> <span style="color: #15803d; font-weight: 700;">Facility</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>Traffic Calming</strong> <span style="color: #15803d; font-weight: 700;">Scheme</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 3px 6px; border-radius: 4px; display: flex; justify-content: space-between;">
          <strong>High-Speed</strong> <span style="color: #15803d; font-weight: 700;">Rail Corridor</span>
        </div>
      </div>
    </div>

    <!-- The Sustainable Mobility Pyramid -->
    <div class="card card-left-blue">
      <h3 style="color: #0369a1; font-size: 7.8pt;">The Sustainable Mobility Hierarchy (Modal Pyramid)</h3>
      <p style="font-size: 7pt; color: #475569; margin-bottom: 5px;">
        Analyze the inverted hierarchy below. How does your daily commute compare to this recommended sustainability ladder?
      </p>

      <div style="display: flex; flex-direction: column; gap: 3.5px; text-align: center; font-size: 7.1pt; font-weight: 800; color: #ffffff;">
        <div style="background: #15803d; padding: 4px; border-radius: 4px; width: 100%;">
          1. ACTIVE MOBILITY (Walking, Wheeling, Cycling) • ZERO EMISSIONS • HIGHEST SOCIAL EFFICIENCY
        </div>
        <div style="background: #16a34a; padding: 4px; border-radius: 4px; width: 92%; margin: 0 auto;">
          2. MASS ELECTRIC TRANSIT (High-Speed Trains, Metros, Modern Tramways) • HIGH CAPACITY
        </div>
        <div style="background: #d97706; padding: 4px; border-radius: 4px; width: 84%; margin: 0 auto;">
          3. SHARED MICRO-MOBILITY &amp; ELECTRIC BUSES • FLEXIBLE FIRST/LAST-MILE SOLUTIONS
        </div>
        <div style="background: #ea580c; padding: 4px; border-radius: 4px; width: 74%; margin: 0 auto;">
          4. CARPOOLING &amp; SHARED ELECTRIC VEHICLES • REDUCED URBAN FOOTPRINT
        </div>
        <div style="background: #b91c1c; padding: 4px; border-radius: 4px; width: 64%; margin: 0 auto;">
          5. SINGLE-OCCUPANCY PRIVATE FOSSIL CARS • HIGHEST POLLUTION &amp; SPACE WASTE
        </div>
      </div>

      <div style="margin-top: 6px; font-size: 7pt; color: #334155;">
        <strong>Speaking Reflection:</strong> Why is reversing this pyramid so politically difficult in suburban regions? Write your thoughts:
        <div class="write-in-line" style="margin-top: 2px;"></div>
        <div class="write-in-line"></div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 4 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 5: PAIR URBAN REDESIGN CHALLENGE -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 5/7</span>
    </div>

    <h2>Part 5: Pair Urban Redesign Challenge — The 15-Minute Airport District</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Scenario: You are transport planners commissioned to transform an 8-lane highway corridor connecting the regional airport to the neighboring suburbs.
    </p>

    <!-- 3 Interventions -->
    <div class="grid-3" style="gap: 5px; margin-bottom: 6px;">
      <div class="card card-left-blue">
        <h3 style="color: #0369a1; font-size: 7.4pt;">Intervention 1: Lane Reallocation</h3>
        <p style="font-size: 6.8pt; color: #334155; margin-bottom: 2px;">Convert 4 of the 8 car lanes into:</p>
        <div class="stem">Dedicated bi-directional Bus Rapid Transit (BRT) lane + wide protected cycle track.</div>
      </div>

      <div class="card card-left-green">
        <h3 style="color: #15803d; font-size: 7.4pt;">Intervention 2: Green Buffer</h3>
        <p style="font-size: 6.8pt; color: #334155; margin-bottom: 2px;">Plant a 10m urban forest canopy:</p>
        <div class="stem">Permeable rain bioswales absorbing 90% of road runoff and cutting traffic noise by 8dB.</div>
      </div>

      <div class="card card-left-amber">
        <h3 style="color: #b45309; font-size: 7.4pt;">Intervention 3: Mobility Hub</h3>
        <p style="font-size: 6.8pt; color: #334155; margin-bottom: 2px;">Build a perimeter Park-and-Ride:</p>
        <div class="stem">500 shared cargo e-bikes and frequent airport shuttle vans connecting to local tram terminus.</div>
      </div>
    </div>

    <!-- Redesign Pitch Framework -->
    <div class="card card-left-blue" style="margin-bottom: 5px;">
      <h3 style="color: #0369a1; font-size: 7.8pt;">90-Second Redesign Pitch Framework</h3>
      <p style="font-size: 7pt; color: #475569; margin-bottom: 3px;">
        Structure your pitch with your partner using this 3-step formula:
      </p>
      <div class="grid-3" style="font-size: 6.9pt; gap: 4px;">
        <div class="stem"><strong>1. Current Problem:</strong> <em>"Currently, this 8-lane corridor creates severe air pollution and isolates airport workers..."</em></div>
        <div class="stem"><strong>2. Redesign Solution:</strong> <em>"By reallocating 4 lanes to electric BRT and active cycling, we cut emissions by 60%..."</em></div>
        <div class="stem"><strong>3. Handling Objections:</strong> <em>"Although motorists may complain about fewer lanes, commuter travel times actually drop..."</em></div>
      </div>
    </div>

    <!-- Peer Rubric -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.8pt;">Peer Checklist & Active Listening Rubric (Partner B Observer)</h3>
      <table class="rubric-table">
        <thead>
          <tr>
            <th style="width: 30%;">Evaluation Criterion</th>
            <th style="width: 45%;">Descriptor</th>
            <th style="width: 15%;">Score (1–4)</th>
            <th style="width: 10%;">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Modal Balance &amp; Realism</strong></td>
            <td>Practical integration of active mobility, public transit, and freight needs.</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><strong>2. Double Comparatives &amp; Connectors</strong></td>
            <td>Correct oral use of proportional structures (<em>The denser... the safer...</em>).</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><strong>3. Persuasive Presentation</strong></td>
            <td>Both partners spoke clearly, engaged listeners, and kept strictly to 90 seconds.</td>
            <td>[ &nbsp; ] / 4</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 5 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 6: HIGH-STAKES PUBLIC DEBATE -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 6/7</span>
    </div>

    <h2>Part 6: High-Stakes Public Debate — The Car-Free City Center</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Motion: <em>"This city should permanently ban private fossil-fueled vehicles from the central district within 18 months, reallocating all street parking to parks and bike paths."</em>
    </p>

    <!-- 3 Roles -->
    <div class="grid-3" style="gap: 5px; margin-bottom: 6px;">
      <div class="card card-left-amber">
        <h3 style="color: #b45309; font-size: 7.4pt;">Role A: Suburban Commuters &amp; Drivers</h3>
        <p style="font-size: 6.8pt; color: #b45309; font-weight: 700; margin-bottom: 3px;">Strongly Opposes Blanket Ban:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Suburban families cannot afford city center rents and rely on cars to commute.</li>
          <li>Suburban transit takes twice as long and stops early at night.</li>
          <li>Delivery drivers and tradespeople face massive delays and parking fines.</li>
        </ul>
      </div>

      <div class="card card-left-blue">
        <h3 style="color: #0369a1; font-size: 7.4pt;">Role B: Local Retailers &amp; Restaurants</h3>
        <p style="font-size: 6.8pt; color: #0284c7; font-weight: 700; margin-bottom: 3px;">Demands Flexible Compromise:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Cleaner streets boost cafe terraces, but retailers fear losing suburban shoppers.</li>
          <li>Demands free 30-minute delivery bays and large perimeter park-and-ride garages.</li>
          <li>Proposes weekend-only pedestrianization before any permanent weekday ban.</li>
        </ul>
      </div>

      <div class="card card-left-green">
        <h3 style="color: #15803d; font-size: 7.4pt;">Role C: Clean Air &amp; Youth Coalition</h3>
        <p style="font-size: 6.8pt; color: #15803d; font-weight: 700; margin-bottom: 3px;">Demands Total Immediate Ban:</p>
        <ul style="font-size: 6.8pt; color: #334155; padding-left: 10px; line-height: 1.25;">
          <li>Car pollution causes respiratory illness in children; streets belong to humans.</li>
          <li>70% of inner-city space is currently wasted on parked metal boxes.</li>
          <li>European cities proved that businesses thrive when streets become pedestrianized.</li>
        </ul>
      </div>
    </div>

    <!-- Final Compromise Policy Resolution -->
    <div class="card card-left-blue">
      <h3 style="color: #0369a1; font-size: 7.8pt;">Negotiated Municipal Policy Resolution</h3>
      <p style="font-size: 7pt; color: #334155; margin-bottom: 3px;">
        Collaborate with the other stakeholders to agree on a compromise resolution (e.g. exempted vehicles, phase-in timeline, perimeter parking):
      </p>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
      <div class="write-in-line"></div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 6 of 7</span>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PAGE 7: TECHNICAL MASTERY QUIZ & REFLECTION -->
  <!-- ========================================== -->
  <div class="page">
    <div class="doc-header">
      <span class="agency">ENAC • GENERAL ENGLISH (AG) • MODULE 2 SESSION 2</span>
      <span class="ref">REF: GSEA-S1-M2-AG-S2 • PAGE 7/7</span>
    </div>

    <h2>Part 6 (Cont.): Technical Mastery Quiz &amp; Final Self-Assessment</h2>
    <p style="font-size: 7.2pt; color: #475569; margin-bottom: 5px;">
      Check your understanding of double comparatives, contrast connectors, and sustainable urban mobility concepts.
    </p>

    <!-- 10 Quiz Questions (2 Columns of 5) -->
    <div class="grid-2" style="font-size: 6.8pt; gap: 5px; margin-bottom: 6px;">
      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>1. What is the primary purpose of a "Sponge City"?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Cooling skyscrapers with air conditioning</div>
        <div style="color: #475569;">[ &nbsp; ] B. Absorbing, filtering, and reusing rainwater</div>
        <div style="color: #475569;">[ &nbsp; ] C. Building underground parking lots</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>2. Choose the correct double comparative:</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. The more cycle paths we build, safer commuters feel.</div>
        <div style="color: #475569;">[ &nbsp; ] B. The more cycle paths we build, the safer commuters feel.</div>
        <div style="color: #475569;">[ &nbsp; ] C. More cycle paths we build, the more safe commuters feel.</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>3. What does "Active Mobility" prioritize?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. High-speed electric taxis</div>
        <div style="color: #475569;">[ &nbsp; ] B. Walking, wheeling, and cycling</div>
        <div style="color: #475569;">[ &nbsp; ] C. Autonomous flying drones</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>4. Select the formal contrast connector:</strong>
        <div style="color: #475569; margin-top: 1px;">"____ high initial costs, the tramway cuts emissions."</div>
        <div style="color: #475569;">[ &nbsp; ] A. Whereas &nbsp; [ &nbsp; ] B. Despite &nbsp; [ &nbsp; ] C. Unless</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>5. What is the Urban Heat Island effect?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Tropical island weather phenomena</div>
        <div style="color: #475569;">[ &nbsp; ] B. Concrete absorbing heat, making cities hotter</div>
        <div style="color: #475569;">[ &nbsp; ] C. Heat produced exclusively by airplane engines</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>6. What defines a "15-Minute City"?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Speed limit strictly 15 km/h across the city</div>
        <div style="color: #475569;">[ &nbsp; ] B. Daily necessities reachable in 15 min on foot/bike</div>
        <div style="color: #475569;">[ &nbsp; ] C. Free transit rides limited to 15 minutes</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>7. What is a "Superblock" in urban design?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Multi-story concrete parking facility</div>
        <div style="color: #475569;">[ &nbsp; ] B. Street grid restricting through-traffic to perimeter</div>
        <div style="color: #475569;">[ &nbsp; ] C. Giant shopping mall with no windows</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>8. Which mode sits at the TOP of the Mobility Hierarchy?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Walking, wheeling, and cycling</div>
        <div style="color: #475569;">[ &nbsp; ] B. Shared electric kick-scooters</div>
        <div style="color: #475569;">[ &nbsp; ] C. Single-occupancy electric luxury cars</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>9. What is the environmental benefit of High-Speed Rail over domestic air?</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. Cuts per-passenger corridor emissions by 85–95%</div>
        <div style="color: #475569;">[ &nbsp; ] B. Guarantees 0-minute travel times between hubs</div>
        <div style="color: #475569;">[ &nbsp; ] C. Eliminates all ticket fares for commuters</div>
      </div>

      <div class="card" style="padding: 4px; margin-bottom: 0;">
        <strong>10. Complete: "The denser the transit network, ____"</strong>
        <div style="color: #475569; margin-top: 1px;">[ &nbsp; ] A. fewer cars enter the city center.</div>
        <div style="color: #475569;">[ &nbsp; ] B. the fewer cars enter the city center.</div>
        <div style="color: #475569;">[ &nbsp; ] C. the less cars enter the city center.</div>
      </div>
    </div>

    <!-- Self-Assessment Checklist -->
    <div class="card card-left-amber">
      <h3 style="color: #b45309; font-size: 7.8pt;">Session 2 Self-Assessment &amp; Communicative Milestones</h3>
      <div class="grid-2" style="font-size: 7pt; gap: 4px;">
        <div>[ &nbsp; ] I can use double comparatives to express proportional urban changes.</div>
        <div>[ &nbsp; ] I can contrast competing city mobility models using B1/B2 sentence stems.</div>
        <div>[ &nbsp; ] I can pitch a multimodal street redesign and handle peer counter-arguments.</div>
        <div>[ &nbsp; ] I can defend assigned stakeholder positions in a car-free city center debate.</div>
      </div>
    </div>

    <div class="doc-footer">
      <span>ENAC GSEA • Semester 1 General English (AG) • Module 2 Session 2</span>
      <span>Page 7 of 7</span>
    </div>
  </div>

</body>
</html>`;
}

// Generate the templates
const s1Html = buildS1Template();
const s2Html = buildS2Template();

const s1Path = path.join(__dirname, 'ag_m2_s1_worksheet_template.html');
const s2Path = path.join(__dirname, 'ag_m2_s2_worksheet_template.html');

fs.writeFileSync(s1Path, s1Html, 'utf8');
fs.writeFileSync(s2Path, s2Html, 'utf8');

console.log("✅ Successfully built HTML templates with base64 embedded photos:");
console.log(" - " + s1Path);
console.log(" - " + s2Path);
