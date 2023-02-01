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
}

module.exports = new ProdutoController();