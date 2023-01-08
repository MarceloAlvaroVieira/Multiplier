const routes = require('express').Router();
const CategoriaController = require('./app/controllers/CategoriaController')

/**Definição de rotas */

routes.get('/categorias', CategoriaController.findAll)
routes.get('/categorias/:id', CategoriaController.findOne)
routes.post('/categorias', CategoriaController.create)

module.exports = routes;