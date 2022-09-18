const express = require('express')

/**Cria as configurações da API */
class AppController{    

    /**Construtor sem aargumentos */
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    /**Faz com que a aplicação entenda que o formato das requisições vai ser em JSON */
    middlewares(){
        this.express.use(express.json());
    }

    /**Configura o arquivo de rotas a ser utilizado na aplicação*/
    routes(){
        express.use('./rotas')
    }
}

module.exports = new AppController.express;