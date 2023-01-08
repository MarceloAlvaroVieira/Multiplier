const { HttpStatusCode } = require('axios');
const { Categoria } = require('../models')


class CategoriaController{
    
    async create(req, res){
        try{
            const categoria= await Categoria.create(req.body)
            res.status(200).send(categoria)
        }catch(error){
            res.status(422).send(error)
        }
    }
}

module.exports = new CategoriaController();