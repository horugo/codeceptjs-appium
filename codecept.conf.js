exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: undefined,
      app: undefined,
      desiredCapabilities: {
        deviceName: undefined,
        platformVersion: undefined,
        appPackage: '',
        appActivity: ''
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: '',
  timeout: null,
  teardown: '',
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'qazando-autommation',
  tests: './steps/*_test.js'
}