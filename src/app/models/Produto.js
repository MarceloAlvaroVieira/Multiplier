const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idCategoria: DataTypes.INTEGER,
        codigo: DataTypes.STRING,
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor: DataTypes.DECIMAL,
        status: DataTypes.INTEGER,
    },{
        tableName: 'Produto'
    })

    return Produto;
}