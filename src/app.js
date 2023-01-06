const express = require('express')
require('dotenv').config({
    path: process.env.NODE_ENV === 'test'? '.env.test': '.env'
})

/**Cria as configurações da API */
class AppController{    

    /**Construtor sem argumentos */
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
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express;
