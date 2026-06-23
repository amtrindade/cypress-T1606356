import loc from '../support/locators.js'

describe('Testes referentes ao login do site Umov', () => {

    beforeEach(() => {
        cy.visit('https://center.umov.me')
    })

    it('Deve realizar o login com sucesso', () => {
        cy.get(loc.LOGIN.TF_ENVIRONMENT).type('trindade')
        cy.get(loc.LOGIN.TF_USERNAME).type('aluno01')
        cy.get(loc.LOGIN.TF_PASSWORD).type('trocar a senha')
        cy.get(loc.LOGIN.BTN_LOGIN).click()

        cy.origin('https://center.umov.me', () => {
            const locModule = Cypress.require('../support/locators.js')
            const locMain = locModule.default || locModule

            cy.get(locMain.HOME.BTN_PROFILE_WIDGET).click()
            cy.get(locMain.HOME.LBL_TEXT_LOGIN).should('have.text', '(aluno01)')
        })
    })
})