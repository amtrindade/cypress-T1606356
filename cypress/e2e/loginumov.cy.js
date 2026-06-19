import loc from '../support/locators.js'

describe('Testes referentes ao login do site Umov', () => {

    beforeEach(() => {
        cy.visit('https://center.umov.me')
    })

    it('Deve realizar o login com sucesso', () => {
        cy.get(loc.LOGIN.TF_ENVIRONMENT).type('trindade')
        cy.get(loc.LOGIN.TF_USERNAME).type('aluno01')
        cy.get(loc.LOGIN.TF_PASSWORD).type('alterarsenha')
        cy.get(loc.LOGIN.BTN_LOGIN).click()

        cy.origin(
            'https://center.umov.me',
            {
                args: {
                    btnProfileWidget: loc.HOME.BTN_PROFILE_WIDGET,
                    lblTextLogin: loc.HOME.LBL_TEXT_LOGIN,
                },
            },
            ({ btnProfileWidget, lblTextLogin }) => {
                cy.get(btnProfileWidget).click()
                cy.get(lblTextLogin).should('have.text', '(aluno01)')
            }
        )
    })
})