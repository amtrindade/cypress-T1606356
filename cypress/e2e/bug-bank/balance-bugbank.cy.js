import loc from '../../support/locators-bugbank.js'

describe('Deve consultar o saldo da conta', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')

    })

    describe('Considera o saldo da conta com R$ 1000,00', () => {
        beforeEach(() => {
            cy.register('target@mail.com.br', 'Target Teste', '123', true)
            cy.get(loc.MODAL.BTN_CLOSE_MODAL).click()
            cy.login('target@mail.com.br', '123')
        })

        it('Deve consultar o saldo da conta com R$ 1000,00', () => {
            cy.get(loc.HOME.BTN_EXTRATO).click()
            cy.get(loc.BALANCE.LBL_BALANCE_AVAILABLE)
                .invoke('text')
                .then((saldo) => {
                    const saldoNormalizado = saldo.replace(/\u00a0/g, ' ').trim()
                    expect(saldoNormalizado).to.equal('R$ 1.000,00')
                })
        })
        
    })

    describe('Considera o saldo da conta com R$ 0,00', () => {
        beforeEach(() => {
            cy.register('target@mail.com.br', 'Target Teste', '123', false)
            cy.get(loc.MODAL.BTN_CLOSE_MODAL).click()
            cy.login('target@mail.com.br', '123')
        })

        it('Deve consultar o saldo da conta com R$ 0,00', () => {
            cy.get(loc.HOME.BTN_EXTRATO).click()
            cy.get(loc.BALANCE.LBL_BALANCE_AVAILABLE)
                .invoke('text')
                .then((saldo) => {
                    const saldoNormalizado = saldo.replace(/\u00a0/g, ' ').trim()
                    expect(saldoNormalizado).to.equal('R$ 0,00')
                })
        })
        
    })
})