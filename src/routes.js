const routes = require('express').Router();
const CategoriaController = require('./app/controllers/CategoriaController')

/**Definição de rotas */

routes.get('/categorias', CategoriaController.findAll)
routes.get('/categorias/:id', CategoriaController.findOne)
routes.post('/categorias', CategoriaController.create)
routes.patch('/categorias/:id', CategoriaController.update)

module.exports = routes;