module.exports = {
    extends: [
        'plugin:cypress/recommended'
    ]
    , env: {
        'cypress/globals': true
    }
    , rules: {
        /*
            Disallow assigning return values from Cypress commands
        */
        'cypress/no-assigning-return-values': 'error'
        /*
            Disallow arbitrary cy.wait() calls
        */
        , 'cypress/no-unnecessary-waiting': 'error'
        /*
            Disallow cy.screenshot() calls before any assertion has been made
        */
        , 'cypress/assertion-before-screenshot': 'warn'
        /*
            Disallow using of force: true option
        */
        , 'cypress/no-force': 'warn'
        /*
            Disallow the use of async/await in Cypress tests
        */
        , 'cypress/no-async-tests': 'error'
        /*
            Disallow the use of cy.pause()
        */
        , 'cypress/no-pause': 'error'
    }
};
