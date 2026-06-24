//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators-bugbank.js'

Cypress.Commands.add('register', (email, name, password, addBalance) => {
    cy.get(loc.LOGIN.BTN_REGISTER).click()
    
    cy.get(loc.REGISTER.TF_EMAIL).type(email, { force: true })
    cy.get(loc.REGISTER.TF_NAME).type(name, { force: true })
    cy.get(loc.REGISTER.TF_PASSWORD).type(password, { force: true })
    cy.get(loc.REGISTER.TF_PASSWORD_CONFIRMATION).type(password, { force: true })

    if (addBalance) {
        cy.get(loc.REGISTER.CHK_ADD_BALANCE).click({ force: true })
    }   
    cy.get(loc.REGISTER.BTN_REGISTER).click({ force: true })
})

Cypress.Commands.add('login', (email, password) => {
    cy.get(loc.LOGIN.TF_EMAIL).type(email)
    cy.get(loc.LOGIN.TF_PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
})
