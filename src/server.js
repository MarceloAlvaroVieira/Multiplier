const app = require('./app');
const porta = process.env.PORT || 3000

app.listen(porta, () => console.log(`Projeto rodando em http://localhost:${porta}`));