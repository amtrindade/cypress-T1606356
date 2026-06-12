describe('Validação de Web Elements', () => {

    beforeEach(() => {  
        cy.visit('/elementsweb.html')
    })

    it('Deve validar o label no início da página', () => {
        cy.get('.masthead > .text-muted').should('have.text', 'Treinamento em Automação de Testes')
    })

    it('Deve validar textFields', () => {
        cy.get('[name="txtbox1"]').should('be.enabled')
        cy.get('[name="txtbox2"]').should('be.disabled')
        cy.get('[name="txtbox2"]')
            .type('Cypress', { force: true })
            .should('have.value', 'Cypress')
    })

    it('Deve validar os radio buttons', () => {
        cy.get('[name="radioGroup1"]').should('have.length', 4)
        cy.get('[name="radioGroup1"]').check('Radio 2').should('be.checked')

        cy.get('[name="radioGroup1"]').check('Radio 1').should('be.checked')
        //Validação por posição do elemento
        cy.get('[name="radioGroup1"]').eq(1).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(2).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(3).should('not.be.checked')

        cy.get('[name="radioGroup1"]').last().should('not.be.checked')
        cy.get('[name="radioGroup1"]').first().should('be.checked')
    })

    

})