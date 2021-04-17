'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Statements', 'email', { type: Sequelize.TEXT });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Statements', 'email');
  }
};
