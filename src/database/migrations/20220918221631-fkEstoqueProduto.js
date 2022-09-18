'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('Estoque', {
      fields: ['idProduto'],
      type: 'foreign key',
      name: 'fkEstoqueProduto',
      references: {
        table: 'Categoria',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('Estoque', {
      fields: ['idProduto'],
      type: 'foreign key',
      name: 'fkEstoqueProduto',
      references: {
        table: 'Produto',
        field: 'id'
      }
    })
  }
};

