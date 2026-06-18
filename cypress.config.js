const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
    },
  },
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  video: false,
  videosFolder: 'cypress/videos',
  retries: {
    runMode: 2,
    openMode: 0
  }
});
