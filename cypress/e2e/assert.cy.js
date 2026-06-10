describe('Testando asserções no playground do curso de Automação', () => {
    
    it('Validações do tipo Integer', () => {

        const num = 10

        expect(num).to.be.equal(10)
        expect(num).to.be.not.equal(20)
        expect(num).to.be.greaterThan(9)
        expect(num).to.be.lessThan(11)

        expect(num).to.be.a('number')
        expect(num).to.be.not.a('string')
        expect(num).to.be.not.a('boolean')

    })

    it('Validações do tipo String', () => {

        const str = 'Hello World'

        expect(str).to.be.equal('Hello World')
        expect(str).to.be.not.equal('Hello')    
        expect(str).to.be.not.equal('World')    

        expect(str).to.be.contain('Hello')
        expect(str).to.be.contain('World')
        expect(str).to.be.not.contain('Hi')

        expect(str).to.be.a('string')
        expect(str).to.be.not.a('number')
        expect(str).to.be.not.a('boolean')

        // Validações de string com regex/expressão regular
        expect(str).to.match(/^Hello/)
        expect(str).to.match(/World$/)
        expect(str).to.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)
    })

    it('Validações do tipo Boolean', () => {

        const bool = true

        expect(bool).to.be.true
        expect(bool).to.be.equals(true)
        expect(bool).to.be.not.false

        expect(bool).to.be.a('boolean')
        expect(bool).to.be.not.a('number')
        expect(bool).to.be.not.a('string') 

    })

    it('Validações do tipo Float', () => {

        const floatNum = 3.1445
    
        expect(floatNum).to.be.equal(3.1445)
        expect(floatNum).to.be.not.equal(3.15)
        expect(floatNum).to.be.greaterThan(3)
        expect(floatNum).to.be.lessThan(4)

        expect(floatNum).to.be.a('number')

        expect(floatNum).to.be.closeTo(3.14, 0.01) // Validação de número float com margem de erro
    })      

})