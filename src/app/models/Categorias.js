module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        id: DataTypes.INTEGER,
        codigo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        status: DataTypes.INTEGER,
    })

    return Categoria;
}