describe('API Server REST', () => {

    it('Listar usuarios com sucesso', () => {

        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body).to.have.property('usuarios')
            expect(response.body.usuarios).to.be.an('array')
            expect(response.body.usuarios[0]).to.have.property('nome')
            expect(response.body.usuarios[0]).to.have.property('email')
        })
    })
    
    
    it('Consultar endpoint inexistente', () => {

        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/users',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.eq('Não é possível realizar GET em /users. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.')
        })
    })

    it('Deve cadastrar um usuário com sucesso', () => {

        const user = {
            nome: 'Aluno Target',
            email: `target${Math.floor(Math.random() * 1000)}@teste.com`,
            password: 'teste',
            administrador: 'true'
        }

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: user
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            const userId = response.body._id

            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${userId}`,
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200)
    
                expect(getResponse.body).to.have.property('nome', user.nome)
                expect(getResponse.body).to.have.property('email', user.email)
                expect(getResponse.body).to.have.property('administrador', user.administrador)

                expect(getResponse.body.nome).to.eq(user.nome)  
                expect(getResponse.body.email).to.eq(user.email)
            })
        }) 
    })

    it('Deve retornar erro ao tentar cadastrar usuário com email já existente', () => {

        const user = {
            nome: 'Aluno Target',
            email: `target${Math.floor(Math.random() * 1000)}@teste.com`,
            password: 'teste',
            administrador: 'true'
        }

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: user
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body: user,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.have.property('message')
                expect(response.body.message).to.eq('Este email já está sendo usado')
            })
        }) 
    })
})