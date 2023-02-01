const routes = require('express').Router();
const CategoriaController = require('./app/controllers/CategoriaController');
const EstoqueController = require('./app/controllers/EstoqueController');
const ProdutoController = require('./app/controllers/ProdutoController');

/**Definição de rotas */

routes.get('/categorias', CategoriaController.findAll)
routes.get('/categorias/:id', CategoriaController.findOne)
routes.post('/categorias', CategoriaController.create)
routes.patch('/categorias/:id', CategoriaController.update)
routes.delete('/categorias/:id', CategoriaController.delete)

routes.get('/produtos', ProdutoController.findAll)
routes.get('/produtos/:id', ProdutoController.findOne)
routes.post('/produtos', ProdutoController.create)
routes.patch('/produtos/:id', ProdutoController.update)
routes.delete('/produtos/:id', ProdutoController.delete)

routes.get('/produtos/:id/estoque', EstoqueController.findOne)
routes.patch('/produtos/:id/estoque', EstoqueController.update)
routes.delete('/produtos/:id/estoque', EstoqueController.delete)
module.exports = routes;