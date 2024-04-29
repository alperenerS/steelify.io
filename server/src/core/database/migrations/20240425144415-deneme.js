// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.createTable('Users', {
//       id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         unique: true,
//         primaryKey: true,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       userType: {
//         type: Sequelize.STRING,
//       },
//       website: {
//         type: Sequelize.STRING,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       surname: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       notes: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('Users');
//   },
// };
