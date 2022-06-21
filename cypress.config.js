const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 800,
  viewportWidth: 1280,
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  downloadsFolder: 'downloads',
  pluginsFolder:'plugins',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./plugins/index.js')(on, config)
    },
    baseUrl: 'https://very-important.vercel.app/',
    specPattern: 'integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})