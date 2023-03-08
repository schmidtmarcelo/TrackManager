import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const Cliente = sequelize.define("clientes", {
  nome_empresa: DataTypes.STRING,
  nome_fantasia: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  rg_ie: DataTypes.STRING,
  contato_whatsapp: DataTypes.STRING,
  contato_telefone_fixo: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  e_mail_primario: DataTypes.STRING,
  e_mail_secundario: DataTypes.STRING,
  perfil: DataTypes.STRING,
  plataforma: DataTypes.STRING,
  chip_m2m: DataTypes.STRING,
  sms: DataTypes.STRING,
  app_mensal: DataTypes.STRING,
  site: DataTypes.STRING,
  mkt: DataTypes.STRING,
  assistencia: DataTypes.STRING,
  central_24_horas: DataTypes.STRING,
  pro_roubo_furto: DataTypes.STRING,
  observacoes_: DataTypes.STRING,
  r_auth: DataTypes.INTEGER
});

export default Cliente;

/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
      // define association here
    //}
/*}
cliente.init({
  nome_empresa: DataTypes.STRING,
  nome_fantasia: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  rg_ie: DataTypes.STRING,
  contato_whatsapp: DataTypes.STRING,
  contato_telefone_fixo: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  e_mail_primario: DataTypes.STRING,
  e_mail_secundario: DataTypes.STRING,
  perfil: DataTypes.STRING,
  plataforma: DataTypes.STRING,
  chip_m2m: DataTypes.STRING,
  sms: DataTypes.STRING,
  app_mensal: DataTypes.STRING,
  site: DataTypes.STRING,
  mkt: DataTypes.STRING,
  assistencia: DataTypes.STRING,
  central_24_horas: DataTypes.STRING,
  pro_roubo_furto: DataTypes.STRING,
  observacoes_: DataTypes.STRING,
  r_auth: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'cliente',
});
return cliente;
};*/