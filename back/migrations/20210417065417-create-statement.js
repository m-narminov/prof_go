'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Statements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fio: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      spo: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      home_phone: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      certificate: {
        type: Sequelize.STRING
      },
      isParent: {
        type: Sequelize.BOOLEAN
      },
      certificate_scan: {
        type: Sequelize.BLOB
      },
      education_form: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Statements');
  }
};