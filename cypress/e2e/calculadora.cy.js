describe('Realiza testes calculadora', () => {
    
    beforeEach(() => {
        cy.visit('/desafiosoma.html')
    })

    it('Deve realizar a soma de dois números', () => {
        cy.get('#number1').type('5')
        cy.get('#number2').type('10')
        cy.get('#somar').click()
        //cy.wait(2000)
        cy.get('#total', {timeout: 4000}).should('have.value', '15')
    })
})


