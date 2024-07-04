const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "8ju8x8",
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,

  env:{
    url : "https://saucedemo.com/"
  },
  retries:{
    runMode: 1,
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
