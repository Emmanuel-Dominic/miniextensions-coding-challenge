const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  fixturesFolder: false,
  // the e2e or component configuration
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // include any other plugin code...
      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      codeCoverage: {
        exclude: 'cypress/**/*.*'
      }
    },
  },
})
