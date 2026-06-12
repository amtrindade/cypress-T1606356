const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
    setupNodeEvents(on, config) {
      
    },
  },
});
