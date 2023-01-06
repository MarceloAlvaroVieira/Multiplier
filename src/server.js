const app = require('./app');
const porta = process.env.PORT || 3000

/**Faz a busca por variável de ambiente que contenha a porta de alocação ou aloca na porta 3000 */
app.listen(porta, () => console.log(`Projeto rodando em http://localhost:${porta}`));