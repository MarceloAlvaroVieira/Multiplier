module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Categoria', {
        id: DataTypes.INTEGER,
        idCategoria: DataTypes.INTEGER,
        codigo: DataTypes.STRING,
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor: DataTypes.DECIMAL,
        status: DataTypes.INTEGER,
    })

    return Produto;
}