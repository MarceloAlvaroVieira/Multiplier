const routes = require('express').Router();
const CategoriaController = require('./app/controllers/CategoriaController')

/**Definição de rotas */

routes.post('/categorias', CategoriaController.create)

module.exports = routes;