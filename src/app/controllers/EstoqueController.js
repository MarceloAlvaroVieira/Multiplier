const { Estoque } = require('../models')


class EstoqueController{

    async findOne(req, res){
        try{
            const id = parseInt(req.params.id)
            const estoque = await Estoque.findByPk(id)
            if(!estoque || estoque === []){
                return res.status(404).send("Estoque não encontrado")
            }
            return res.status(200).send(estoque)
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async update(req, res){
        try{
            if(req.params.id){
                const id = parseInt(req.params.id)
                const dbEstoque = await Estoque.findByPk(id)

                if(!dbEstoque || dbEstoque === []){
                    return res.status(404).send('Estoque não encontrado.')
                }
                const estoque = await Estoque.update(req.body ,{
                    where:{id: id}
                })            
                return res.status(200).send(estoque)
            }
            return res.status(400).send()
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async delete(req, res){
        return res.send(501).send()
    }
}

module.exports = new EstoqueController();