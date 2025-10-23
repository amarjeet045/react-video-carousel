const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // 👈 your Vite dev server
    setupNodeEvents(on, config) {
      // You can set up event listeners here if needed
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // test file pattern
    supportFile: "cypress/support/e2e.js", // Cypress support file
  },

  // Optional: Configure viewport and video/screenshot behavior
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  viewportWidth: 1280,
  viewportHeight: 800,
});
