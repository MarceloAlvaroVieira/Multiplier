const request = require('supertest')
const app = require('../../src/app');

describe('Categoria', () => {
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
            .patch('/categorias/1')
            .send({
                titulo: 'teste de alteração',
                status: false
            })
        expect(response.status).toBe(200);
    })

    it('Deleta uma Categoria existente', async () => {
        const response = await request(app)
            .delete('/categorias/1')
        expect(response.status).toBe(200);
    })
})