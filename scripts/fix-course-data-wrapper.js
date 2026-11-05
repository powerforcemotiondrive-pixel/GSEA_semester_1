/**
 * Fix UMD export wrapper for data/course-data.js
 * Ensures root.COURSE_DATA is set in browser environments (window.COURSE_DATA)
 */

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '..', 'data', 'course-data.js');
const courseData = require(courseDataPath);

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
console.log('✓ Successfully wrapped data/course-data.js with UMD wrapper (setting root.COURSE_DATA in browser)');
