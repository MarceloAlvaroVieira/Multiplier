const request = require('supertest')
const app = require('../../src/app');


describe('Produto', () => {

    it('Listagem de Produtos', async () => {
        const response = await request(app)
            .get('/produtos')

        expect(response.status).toBe(200);
    })
})