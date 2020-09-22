exports.config = {
    runner: 'local',
    specs: [
        './src/**/*.feature'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://google.fr',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    cucumberOpts: {
        requireModule: [
            () => { require('ts-node').register({ files: true }) }
        ],
        timeout: 10000,
        backtrace: true,
        failFast: false,
        require: ["./src/steps/**/*.ts"],
    },
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

}
