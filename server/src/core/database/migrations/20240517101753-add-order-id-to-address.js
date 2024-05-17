'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Addresses', 'order_id', {
      type: Sequelize.INTEGER,
      allowNull: true, // veya false, gereksinimlerinize göre ayarlayın
      references: {
        model: 'Orders', // Bağlanacak tablo adı
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Addresses', 'order_id');
  },
};
