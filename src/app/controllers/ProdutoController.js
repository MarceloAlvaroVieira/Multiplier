const { Produto, Estoque } = require('../models')


class ProdutoController{
    
    async create(req, res){
        try{
            const produto = await Produto.create(req.body)
            const estoque = await Estoque.create({
                idProduto: produto.id,
                quantidade: 0,
                reserva: 0,
                status: 0
            })
            return res.status(200).send({ ...produto, estoque })
        }catch(error){
            console.log(error);
            return res.status(422).send(error)
        }
    }

    async findOne(req, res){
        try{
            const id = parseInt(req.params.id)
            const produto = await Produto.findByPk(id)
            if(!produto || produto === []){
                return res.status(404).send('Produto não encontrado.')
            }
            res.status(200).send(produto)
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async findAll(req, res){
        try{
            const produtos = await Produto.findAll()
            return res.status(200).send(produtos)
        }catch(error){
            return res.status(500).send(error)
        }
    }

    async update(req, res){
        try{
            if(req.params.id){
                const id = parseInt(req.params.id)
                const dbProduto = await Produto.findByPk(id)

                if(!dbProduto){
                    return res.status(404).send('Produto não encontrado.')
                }
                const produto = await Produto.update(req.body ,{
                    where:{id: id}
                })            
                return res.status(200).send(produto)
            }
            return res.status(400).send()
        }catch(error){
            return res.status(500).send(error)
        }
    }
}

module.exports = new ProdutoController();