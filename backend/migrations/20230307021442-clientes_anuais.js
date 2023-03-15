'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("clientes_anuais", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      chip_ccid: {
        type: Sequelize.INTEGER,
        references: {model: "chips_m2ms", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operadora_id: {
        type: Sequelize.INTEGER,
        references: {model: "operadoras", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: {model: "clientes", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      valor: {
        type: Sequelize.STRING,
      },
      data_da_compra: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status_do_pagamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proxima_cobranca: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("clientes_anuais")
  }
};
