const { Categoria } = require('../models')
const { Produto } = require('../models')


class CategoriaController{
    
    async create(req, res){
        try{
            const categoria= await Categoria.create(req.body)
            return res.status(200).send(categoria)
        }catch(error){
            return res.status(422).send(error)
        }
    }

    async findOne(req, res){
        try{
            const id = parseInt(req.params.id)
            const categoria = await Categoria.findByPk(id)
            if(!categoria || categoria === []){
                return res.status(404).send('Categoria não encontrada.')
            }
            return res.status(200).send(categoria)
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async findAll(req, res){
        try{
            const categorias = await Categoria.findAll()
            return res.status(200).send(categorias)
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async update(req, res){
        try{
            if(req.params.id){
                const id = parseInt(req.params.id)
                const dbCategoria = await Categoria.findByPk(id)

                if(!dbCategoria || categoria === []){
                    return res.status(404).send('Categoria não encontrada.')
                }
                const categoria = await Categoria.update(req.body ,{
                    where:{id: id}
                })            
                return res.status(200).send(categoria)
            }
            return res.status(400).send()
        }catch(error){
            return res.status(500).send(error)
        }
    }


    async delete(req, res){
        try {
            if(req.params.id){
                const id = parseInt(req.params.id)
                const categoria = await Categoria.findByPk(id)
                
                if(!categoria || categoria === []){
                    return res.status(404).send('Categoria não encontrada.')
                }            
                await Produto.update({ idCategoria: null }, {
                    where: { idCategoria: categoria.id } //pode-se usar force: true
                }).then( async() => {
                    await Categoria.destroy({
                        where: { id : categoria.id }
                    })
                })
                return res.status(200).send()
            }  
            return res.status(400).send()
        }catch(error) {
            console.log(error)
         return res.status(500).send(error)   
        }
    }
}

module.exports = new CategoriaController();