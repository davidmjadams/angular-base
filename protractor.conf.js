exports.config = {
    // The address of a running selenium server.
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar', // Make use you check the version in the folder

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    framework: "cucumber",

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['features/*.feature'],

    baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8080'),

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 5000
    }
};

