describe('Explorando o comando wrap', () => {

    beforeEach(() => {
        cy.visit('/elementsweb.html')
    })

    it('Utilizando o wrap para escrever um texto no TextField', () => {
        cy.get('[name="txtbox1"]').then($textField => {

            //Forma javascript
            $textField.val('Testando o comando val')
            expect($textField).to.have.value('Testando o comando val')

            //Forma cypress
            cy.wrap($textField)
                 .clear()
                 .type('Testando o comando wrap')
                 .should('have.value', 'Testando o comando wrap')          
        })
    })
})