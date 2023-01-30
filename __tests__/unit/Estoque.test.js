const request = require('supertest')
const app = require('../../src/app');


describe('Estoque', () => {
    it('Busca de Estoque por id', async () => {
        const response = await request(app)
           .get('/produtos/1/estoque')

         expect(response.status).toBe(200);
    })

    it('Altera um Estoque existente', async () => {
        const response = await request(app)
            .patch('/produtos/1/estoque')
            .send({
                idProduto: 1,
                quantidade: 10,
                reserva: 5,
                status: 1
            }, {
                where: {id: 1},
            })

        expect(response.status).toBe(200);
    })
})