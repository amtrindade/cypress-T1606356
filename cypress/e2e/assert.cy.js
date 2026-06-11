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
    
    it('Validações do tipo Array', () => {

        const arrInt = [1, 2, 3, 4, 5]
        expect(arrInt).to.be.an('array')
        expect(arrInt).to.have.lengthOf(5)
        expect(arrInt).to.include(3)
        expect(arrInt).to.include.members([2, 4])
        expect(arrInt).to.not.include(6)
        expect(arrInt).to.deep.equal([ 1, 2, 3, 4, 5])
        expect(arrInt[1]).to.be.equal(2)

        const arrStr = ['Hello', 'World', 'Cypress']
        expect(arrStr).to.be.an('array')
        expect(arrStr).to.have.lengthOf(3)
        expect(arrStr).to.include('World')
        expect(arrStr).to.include.members(['Hello', 'Cypress'])
        expect(arrStr).to.not.include('Hi')
        expect(arrStr).to.deep.equal(['Hello', 'World', 'Cypress'])
        expect(arrStr[0]).to.be.equal('Hello')
    })

    it('Validações do tipo Object', () => {

        const person = { 
            name: 'Pedro', 
            age: 35,
            weight: 80,
            height: 1.75
        }

        expect(person).to.be.an('object')
        expect(person).to.have.property('name')
        expect(person).to.have.property('age')
        expect(person).to.have.property('weight')
        expect(person).to.have.property('height')

        expect(person.name).to.be.equal('Pedro')
        expect(person.age).to.be.equal(35)
        expect(person.height).to.be.greaterThan(1.70)

        const person2 = { 
            name: 'Pedro', 
            age: 35,
            weight: 80,
            height: 1.75
        }
        // Validação de dois objetos diferentes
        expect(person).to.be.not.equal(person2)
        // Validação de dois objetos diferentes mas com os mesmos valores nos atributos
        expect(person).to.deep.equal(person2) // Validação de objetos com comparação profunda (deep equal)
        expect(person.name).to.be.equal(person2.name)
    })

        

})