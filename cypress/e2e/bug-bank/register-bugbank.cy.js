import loc from '../../support/locators-bugbank.js'

function capturarNumeroConta() {
    return cy.get(loc.MODAL.MODAL_TEXT)
        .should('be.visible')
        .invoke('text')
        .then((textoModal) => {
            const matchNumeroConta = textoModal.match(/\d+-\d+|\d+/)
            const numeroConta = matchNumeroConta ? matchNumeroConta[0] : ''

            return numeroConta
        })
}

describe('Deve cadastrar uma nova conta', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    })

    it('Deve cadastrar uma nova conta', () => {
        cy.register('target@mail.com.br', 'Target Teste', '123', true)

        let numeroContaCriada = ''

        capturarNumeroConta().then((numeroConta) => {
            numeroContaCriada = numeroConta
            cy.log(`Numero da conta salvo na variavel: ${numeroContaCriada}`)
        })

        cy.get(loc.MODAL.MODAL_TEXT).should('contain.text', 'foi criada com sucesso')

        cy.get(loc.MODAL.BTN_CLOSE_MODAL).click()       

    })
})