const { HttpStatusCode } = require('axios');
const { response } = require('../../app');
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

    async findOne(req, res){
        try{
            const id = parseInt(req.params.id)
            const categoria = await Categoria.findOne({
                where:{id: id}
            })
            res.status(200).send(categoria)
        }catch(error){
            res.status(200).send(error)
        }
    }
}

module.exports = new CategoriaController();