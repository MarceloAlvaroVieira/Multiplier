'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Categoria', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      codigo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Categoria');
  }
};
