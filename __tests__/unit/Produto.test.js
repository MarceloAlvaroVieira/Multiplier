const request = require('supertest')
const app = require('../../src/app');


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
        const response = await request(app)
            .post('/produtos')
            .send({
                idCategoria: null,
                codigo: 0001,
                descricao: 'Produto de teste.',
                valor: 0.99,
                status: 1
            })

        expect(response.status).toBe(200);
    })

    it('Altera uma Produto existente', async () => {
        const response = await request(app)
            .patch('/produtos/1')
            .send({
                idCategoria: null,
                codigo: 9999,
                descricao: 'Produto alterado para testes.',
                valor: 10.99,
                status: 0
            })

        expect(response.status).toBe(200);
    })
})