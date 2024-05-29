'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users', // Bağlanacak tablo adı
        key: 'id',
      }, //Foreign Key
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'user_id');
  },
};