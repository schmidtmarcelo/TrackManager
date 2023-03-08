import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const ClienteAnual = sequelize.define("clientes_anuais", {
  //id: DataTypes.INTEGER,
  chip_ccid: DataTypes.INTEGER,
  cliente_id: DataTypes.INTEGER,
  numero: DataTypes.STRING,
  operadora: DataTypes.STRING,
  valor: DataTypes.STRING,
  data_da_compra: DataTypes.STRING,
  status_do_pagamento: DataTypes.STRING,
  proxima_cobranca: DataTypes.STRING,
  r_auth: DataTypes.INTEGER
});

export default ClienteAnual;
/*
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import Cliente from "./cliente";

class ClienteAnual extends Model {
    id: any;
}

ClienteAnual.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  chip_ccid: DataTypes.INTEGER,
  cliente_id: DataTypes.INTEGER,
  numero: DataTypes.STRING,
  operadora: DataTypes.STRING,
  valor: DataTypes.STRING,
  data_da_compra: DataTypes.STRING,
  status_do_pagamento: DataTypes.STRING,
  proxima_cobranca: DataTypes.STRING,
  r_auth: DataTypes.INTEGER
}, {
  sequelize,
  modelName: "clientes_anuais",
  timestamps: false
});

export default ClienteAnual;
*/

