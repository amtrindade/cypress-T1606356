describe('Todo List', () => {

    const newItem = 'Feed the cat'
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Deve criar uma nova tarefa na lista', () => {
        cy.get('[data-test="new-todo"]').type(`${newItem}{enter}`)

        cy.get('.todo-list li').should('have.length', 3)
        //Primeira forma
        cy.get('.todo-list li').last().should('have.text', newItem)
        //Segunda forma
        cy.contains('.todo-list li', newItem).should('be.visible')
        cy.get('.todo-list li').contains(newItem).should('be.visible')
    })

    context('Marcar tarefa como concluída', () => {

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${newItem}{enter}`)
        })

        it('Deve marcar a tarefa como concluída', () => {
            cy.contains('.todo-list li', newItem)
                .find('input[type="checkbox"]')
                .check()
                .should('be.checked')
            
            cy.get('.filters').contains('Completed').click()
            cy.get('.todo-list li').should('have.length', 1)
            cy.contains('.todo-list li', newItem).should('be.visible')
            
        })

        it('Deve excluir a tarefa marcarda como concluída', () => {
            cy.contains('.todo-list li', newItem)
                .find('input[type="checkbox"]')
                .check()
            
            cy.contains('.todo-list li', newItem)
                .find('button.destroy')
                .invoke('show')
                .click()

            cy.get('.todo-list li').should('have.length', 2)
            cy.get('.todo-list li').should('not.contain.text', newItem)  
        })
    })
})