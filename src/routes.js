const routes = require('express').Router();



const { Categoria } = require('./app/models')


const categoria = async () => {
    return await Categoria.create({codigo: 1, titulo: 'teste', status: true})
}

categoria().then(categoria => {
    return console.log('\n\n\n\n__________________________DADOS RETORNADOS DE CATEGORIA__________________________\n\n\n\n',categoria);
})

module.exports = routes;