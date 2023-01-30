const request = require('supertest')
const app = require('../../src/app');


describe('Estoque', () => {

    it('Listagem de Estoques', async () => {
        const response = await request(app)
            .get('/estoques')

        expect(response.status).toBe(200);
    })
})