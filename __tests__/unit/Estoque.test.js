const request = require('supertest')
const app = require('../../src/app');


describe('Estoque', () => {

    it('Listagem de Estoques', async () => {
        const response = await request(app)
            .get('/estoques')

        expect(response.status).toBe(200);
    })

    it('Busca de Estoque por id', async () => {
        const response = await request(app)
           .get('/estoques/1')

         expect(response.status).toBe(200);
    })
})