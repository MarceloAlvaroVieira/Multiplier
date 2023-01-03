'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('Produto', {
      fields: ['idCategoria'],
      type: 'foreign key',
      name: 'fkProdutoCategoria',
      references: {
        table: 'Categoria',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('Produto', {
      fields: ['idCategoria'],
      type: 'foreign key',
      name: 'fkProdutoCategoria',
      references: {
        table: 'Categoria',
        field: 'id'
      }
    })
  }
};
