'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.createTable("clientes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_fantasia: {
        type: Sequelize.STRING,
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg_ie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contato_whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contato_telefone_fixo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      e_mail_primario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      e_mail_secundario: {
        type: Sequelize.STRING,
      },
      perfil: {
        type: Sequelize.STRING,
      },
      plataforma: {
        type: Sequelize.STRING,
      },
      chip_m2m: {
        type: Sequelize.STRING,
      },
      sms: {
        type: Sequelize.STRING,
      },
      app_mensal: {
        type: Sequelize.STRING,
      },
      site: {
        type: Sequelize.STRING,
      },
      mkt: {
        type: Sequelize.STRING,
      },
      assistencia: {
        type: Sequelize.STRING,
      },
      central_24_horas: {
        type: Sequelize.STRING,
      },
      pro_roubo_furto: {
        type: Sequelize.STRING,
      },
      observacoes_: {
        type: Sequelize.STRING,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("clientes")
  }
};
