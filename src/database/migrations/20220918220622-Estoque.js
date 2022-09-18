'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Estoque',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idProduto:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reserva:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Estoque');
  }
};
