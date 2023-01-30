const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define('Estoque', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProduto: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },
        quantidade: DataTypes.INTEGER,
        reserva: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    },{
        tableName: 'Estoque'
    })

    return Estoque;
}