const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml',
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'Relatório de testes Curso Target Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  allowCypressEnv: false,
  e2e: {
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
    defaultCommandTimeout: 4000,
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {      
      require('cypress-mochawesome-reporter/plugin')(on);
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
