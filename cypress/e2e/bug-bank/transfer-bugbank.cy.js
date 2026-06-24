import loc from '../../support/locators-bugbank.js'

describe('Deve realizar transferencias', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
        cy.register('target@mail.com.br', 'Target Teste', '123', true)
        cy.get(loc.MODAL.BTN_CLOSE_MODAL).click()
        cy.login('target@mail.com.br', '123')
    })

    it('Deve realizar uma transferência para conta inválida', () => {
        cy.get(loc.HOME.BTN_TRANSFERENCIA).click()

        cy.get(loc.TRANSFER.TF_ACCOUNT_NUMBER).type('6687')
        cy.get(loc.TRANSFER.TF_DIGIT).type('1')
        cy.get(loc.TRANSFER.TF_TRANSFER_VALUE).type('100')
        cy.get(loc.TRANSFER.TF_DESCRIPTION).type('Transferência para conta inválida')
        cy.get(loc.TRANSFER.BTN_TRANSFER).click()

        cy.get(loc.MODAL.MODAL_TEXT).should('have.text', 'Conta inválida ou inexistente')
        cy.get(loc.MODAL.BTN_CLOSE_MODAL).click()
    })
})