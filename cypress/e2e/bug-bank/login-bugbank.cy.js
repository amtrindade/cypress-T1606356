import loc from "../../support/locators-bugbank"

describe('Deve realizar o login', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
        cy.register('target@mail.com.br', 'Target Teste', '123', true)
        cy.get(loc.MODAL.BTN_CLOSE_MODAL).click() 
        cy.get(loc.REGISTER.BTN_BACK_TO_LOGIN).click({force: true})
    })

    it ('Deve realizar o login com sucesso', () => {
        cy.get(loc.LOGIN.TF_EMAIL).type('target@mail.com.br')
        cy.get(loc.LOGIN.TF_PASSWORD).type('123')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.HOME.LBL_TEXT_LOGIN).should('have.text', 'Olá Target Teste,')
    })
})