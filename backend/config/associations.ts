import ChipM2m from "../models/chip_m2m";
import Cliente from "../models/cliente";
import ClienteAnual from "../models/cliente_anual";
import Operadora from "../models/operadora";

ClienteAnual.belongsTo(Cliente, { foreignKey: "cliente_id", as: "clienteAssociation" });
ClienteAnual.belongsTo(ChipM2m, {foreignKey: "chip_ccid", as: "chipAssociation"});
ClienteAnual.belongsTo(Operadora, {foreignKey: "operadora_id", as: "opAssociation"});
Cliente.hasMany(ClienteAnual, { foreignKey: "cliente_id", as: "clientesAnuais", onDelete: "CASCADE", onUpdate: "CASCADE" });


module.exports = { Cliente, ClienteAnual };