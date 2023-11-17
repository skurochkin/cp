const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.cp.pt/passageiros/en/buy-tickets"
  },
});
