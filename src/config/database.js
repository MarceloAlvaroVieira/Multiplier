/*Definindo as configurações do banco de dados*/
module.exports = {
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'multiplier',
  dialect: 'mysql',
  operatorAlias: false,
  logging: true,
  define: {
      timestamp: false,
      underscored: true,
      underscoredAll: true
  }
}