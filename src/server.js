const app = require('./app');

/**Faz a busca por variável de ambiente que contenha a porta de alocação ou aloca na porta 3000 */
app.listen(process.env.PORT || 3000);