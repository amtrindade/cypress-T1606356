describe('Testando o playground do curso de Automação', () => {

  it('Deve validar texto no TextField', () => {
    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')
    cy.get('[name="txtbox1"]').type('Hello World').should('have.value', 'Hello World')
  })

})