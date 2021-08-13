const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'reserve_test/*_test.js',
  output: '../output',
 helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
            automationName: 'UiAutomator2',
            udid: 'emulator-5564',
            browserName: 'Chrome'
      }

    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Pixel4',
  translation: 'ja-JP',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
                    allure: {
                      enabled: true
                    }

  }
}