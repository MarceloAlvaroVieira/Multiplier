const request = require('supertest')
const { Categoria} = require('../../src/app/models')
const app = require('../../src/app');
const truncate = require('../utils/truncate')


describe('Categoria', () => {

    beforeEach(() => {
        return async function(){return await truncate();}
    })

    it('Listagem de categorias', async () => {
        const response = await request(app)
            .get('/categorias')

        expect(response.status).toBe(200);
    });
})