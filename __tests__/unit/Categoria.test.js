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

    it('Cria nova Categoria', async () => {
        const response = await request(app)
            .post('/categorias')
            .send({
                codigo: 1,
                titulo: 'teste',
                status: true
            })

        expect(response.status).toBe(200);
    })

    it('Altera uma Categoria existente', async () => {
        const response = await request(app)
            .patch('/categorias')
            .send({
                titulo: 'teste de alteração',
                status: false
            }, {
                where: {codigo: 1},
            })

        expect(response.status).toBe(200);
    })
})