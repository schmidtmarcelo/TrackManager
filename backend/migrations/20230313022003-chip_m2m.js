'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("chips_m2ms", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
      },
      operadora: {
        type: Sequelize.INTEGER,
        references: { model: "operadoras", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      apn_id: {
        type: Sequelize.INTEGER,
        references: { model: "apns", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      chip_ccid: {
        type: Sequelize.INTEGER,
        references: { model: "chips_m2ms", key: "id" },
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE,
      },
      data_da_compra: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_de_ativacao: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      perfil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r_auth: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("chips_m2ms")
  }
};
