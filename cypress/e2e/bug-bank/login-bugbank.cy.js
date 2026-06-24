import loc from "../../support/locators-bugbank"

describe('Deve realizar o login', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
        cy.register('target@mail.com.br', 'Target Teste', '123', true)
        
        cy.get(loc.MODAL.BTN_CLOSE_MODAL).click() 
        //cy.get(loc.REGISTER.BTN_BACK_TO_LOGIN).click({force: true})
    })

    it('Deve realizar o login com sucesso', () => {
        cy.login('target@mail.com.br', '123')
        cy.get(loc.HOME.LBL_TEXT_LOGIN).should('have.text', 'Olá Target Teste,')
    })

    it('Deve falhar ao realizar o login com senha incorreta', () => {
        cy.login('target@mail.com.br', '1234')
        cy.get(loc.MODAL.MODAL_TEXT).should('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
    })
})