const app = require('./app');

app.get('/', ()=> {
    return {response: 'oi'}
})

/**Faz a busca por variável de ambiente que contenha a porta de alocação ou aloca na porta 3000 */
app.listen(process.env.PORTA || 3000);