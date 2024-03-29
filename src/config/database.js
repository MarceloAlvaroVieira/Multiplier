/*Definindo as configurações do banco de dados*/

require('dotenv').config({
  path: process.env.NODE_ENV === 'test'? '.env.test': '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  operatorAliases: false,
  logging: true,
  define: {
      timestamp: false,
      underscored: false,
      underscoredAll: false
  }
}