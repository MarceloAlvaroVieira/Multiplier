const request = require('supertest')
const { Categoria} = require('../../src/app/models')
const app = require('../../src/app');
const truncate = require('../utils/truncate')


describe('Categoria', () => {

    // beforeEach(() => {
    //     return async function(){return await truncate();}
    // })

    it('Listagem de Categorias', async () => {
        const response = await request(app)
            .get('/categorias')

        expect(response.status).toBe(200);
    })

    it('Busca de Categoria por id', async () => {
        const response = await request(app)
           .get('/categorias/1')

         expect(response.status).toBe(200);
    })
})