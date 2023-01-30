const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        codigo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        status: DataTypes.INTEGER,
    },{
        tableName: 'Categoria'
    })

    return Categoria;
}