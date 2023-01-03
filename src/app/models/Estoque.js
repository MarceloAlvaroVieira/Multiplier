module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define('Categoria', {
        id: DataTypes.INTEGER,
        idProduto: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        reserva: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    })

    return Estoque;
}