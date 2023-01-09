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
            const categoria = await Categoria.findAll({
                where:{id: id}
            })
            res.status(200).send(categoria)
        }catch(error){
            res.status(500).send(error)
        }
    }

    async findAll(req, res){
        try{
            const categorias = await Categoria.findAll()
            res.status(200).send(categorias)
        }catch(error){
            res.status(500).send(error)
        }
    }

    async update(req, res){
        try{
            if(req.params.id){
                const id = parseInt(req.params.id)
                const dbCategoria = await Categoria.findByPk(id)

                console.log(dbCategoria);

                if(!dbCategoria){
                    res.status(404).send('Categoria não encontrada.')
                }
                
                const categoria = await Categoria.update(req.body ,{
                    where:{id: id}
                })            
                res.status(200).send(categoria)
            }
            res.status(400).send()
        }catch(error){
            res.status(500).send(error)
        }
    }
}

module.exports = new CategoriaController();