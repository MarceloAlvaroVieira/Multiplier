const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')
require('dotenv').config({
    path: process.env.NODE_ENV === 'test'? '.env.test': '.env'
})

class AppController{    
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express;
