'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', {/*eklenecek sutun adi */}, {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: 'Orders', // Bağlanacak tablo adı
        key: 'id',
      }, //Foreign Key
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', {/*eklenecek sutun adi */});
  },
};
