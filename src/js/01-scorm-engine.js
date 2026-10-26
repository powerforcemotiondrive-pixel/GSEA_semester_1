    /**
     * ============================================================================
     * ENAC GSEA English Learning Platform & SCORM 1.2 System — Semester 1
     * © 2026 Phil PARRIS. All Rights Reserved.
     * Author & Pedagogical Architect: Phil PARRIS (Département LH / LAN)
     * Protected under the French Intellectual Property Code (Articles L.111-1 & L.121-1).
     * Strictly licensed for official ENAC GSEA training. Unauthorized copying,
     * derivative modification, extraction, or removal of attribution is prohibited.
     * ============================================================================
     */
    window.__GSEA_PROGRAMME_AUTH = Object.freeze({
      author: "Phil PARRIS",
      title: "ENAC GSEA English Learning Platform",
      department: "Département LH / LAN",
      institution: "École Nationale de l'Aviation Civile (ENAC)",
      copyright: "© 2026 Phil PARRIS. All Rights Reserved.",
      academicYear: "2026-2027",
      legalNotice: "Protected under Articles L.111-1 and L.121-1 of the French Code de la Propriété Intellectuelle. Strictly licensed for official ENAC GSEA training. Unauthorized derivative modification, redistribution, or removal of author attribution is prohibited."
    });

    // --- SCORM 1.2 LMS Runtime Integration ---
    const ScormAPI = (() => {
      let api = null;
      let isInitialized = false;

      function findAPI(win) {
        let attempts = 0;
        try {
          while (win && attempts < 10) {
            if (win.API) return win.API;
            if (win.parent && win.parent !== win) {
              win = win.parent;
            } else {
              break;
            }
            attempts++;
          }
        } catch (e) {}
        return null;
      }

      function getAPI() {
        if (api) return api;
        try {
          api = findAPI(window);
          if (!api && window.opener) {
            api = findAPI(window.opener);
          }
        } catch (e) {}
        return api;
      }

      function init() {
        const a = getAPI();
        if (a && !isInitialized) {
          try {
            const res = a.LMSInitialize("");
            if (res === "true" || res === true) {
              isInitialized = true;
              const status = a.LMSGetValue("cmi.core.lesson_status");
              if (!status || status === "not attempted") {
                a.LMSSetValue("cmi.core.lesson_status", "incomplete");
                a.LMSCommit("");
              }
            }
          } catch (e) {}
        }
      }

      let sessionStartTime = Date.now();

      function formatScormTime(ms) {
        const totalSec = Math.floor(ms / 1000);
        const hours = Math.floor(totalSec / 3600);
        const minutes = Math.floor((totalSec % 3600) / 60);
        const seconds = totalSec % 60;
        const pad = n => (n < 10 ? '0' : '') + n;
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      }

      function setProgress(locationStr, markCompleted = false) {
        const a = getAPI();
        if (a && isInitialized) {
          try {
            if (locationStr) {
              a.LMSSetValue("cmi.core.lesson_location", String(locationStr));
            }
            if (markCompleted) {
              a.LMSSetValue("cmi.core.lesson_status", "completed");
            }
            a.LMSCommit("");
          } catch (e) {}
        }
      }

      function setScore(score, min = 0, max = 100) {
        const a = getAPI();
        if (a && isInitialized) {
          try {
            a.LMSSetValue("cmi.core.score.raw", String(score));
            a.LMSSetValue("cmi.core.score.min", String(min));
            a.LMSSetValue("cmi.core.score.max", String(max));
            a.LMSCommit("");
          } catch (e) {}
        }
      }

      function setSuspendData(dataStr) {
        const a = getAPI();
        if (a && isInitialized) {
          try {
            a.LMSSetValue("cmi.suspend_data", String(dataStr));
            a.LMSCommit("");
          } catch (e) {}
        }
      }

      function getSuspendData() {
        const a = getAPI();
        if (a && isInitialized) {
          try {
            return a.LMSGetValue("cmi.suspend_data") || "";
          } catch (e) {}
        }
        return "";
      }

      function finish() {
        const a = getAPI();
        if (a && isInitialized) {
          try {
            const timeStr = formatScormTime(Date.now() - sessionStartTime);
            a.LMSSetValue("cmi.core.session_time", timeStr);
            a.LMSCommit("");
            a.LMSFinish("");
            isInitialized = false;
          } catch (e) {}
        }
      }

      return { init, setProgress, setScore, setSuspendData, getSuspendData, finish };
    })();

