/*Definindo as configurações do banco de dados*/
module.exports = {
  host: '172.17.0.2',
  username: 'root',
  password: 'root',
  database: 'multiplier',
  dialect: 'mysql',
  operatorAliases: false,
  logging: true,
  define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
  }
}