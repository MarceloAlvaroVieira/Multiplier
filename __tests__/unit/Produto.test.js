const request = require('supertest')
const app = require('../../src/app');
const { Categoria } = require('../../src//app/models');


describe('Produto', () => {

    it('Listagem de Produtos', async () => {
        const response = await request(app)
            .get('/produtos')

        expect(response.status).toBe(200);
    })

    it('Busca de Produto por id', async () => {
        const response = await request(app)
           .get('/produtos/1')

         expect(response.status).toBe(200);
    })
    
    it('Cria nova Produto', async () => {
        Categoria.create({
            codigo: 1,
            titulo: 'teste',
            status: true
        })
        .then( async (categoria) => {
            const response = await request(app)
                .post('/produtos')
                .send({
                    idCategoria: categoria.id,
                    nome: 'Produto 01',
                    codigo: '1000',
                    descricao: 'Produto de teste.',
                    valor: 0.99,
                    status: 1
                })
            expect(response.status).toBe(200);
        })
    })

    it('Altera uma Produto existente', async () => {
        Categoria.create({
            codigo: 1,
            titulo: 'teste',
            status: true
        })
        .then( async (categoria) => {
            const response = await request(app)
                .patch('/produtos/1')
                .send({
                    idCategoria: categoria.id,
                    nome: 'TESTE',
                    codigo: '9999',
                    descricao: 'Produto alterado para testes.',
                    valor: 10.99,
                    status: 0
                })
            expect(response.status).toBe(200);
        })

    })

    it('Deleta uma Produto existente', async () => {
        const response = await request(app)
            .delete('/produtos/1')

        expect(response.status).toBe(200);
    })
})