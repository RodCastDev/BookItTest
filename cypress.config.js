const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dsanchezvalle.github.io",
    env:{
      allpricesValues:{
        bajo: "$",
        medio: "$$",
        alto: "$$$"
      },
      endpoint:{
        baseBookit: "/hotelbookingsprint/"
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
