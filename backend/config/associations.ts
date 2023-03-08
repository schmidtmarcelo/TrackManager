import Cliente from "../models/cliente";
import ClienteAnual from "../models/cliente_anual";

ClienteAnual.belongsTo(Cliente, { foreignKey: "cliente_id", as: "clienteAssociation" });
Cliente.hasMany(ClienteAnual, { foreignKey: "cliente_id", as: "clientesAnuais", onDelete: "CASCADE", onUpdate: "CASCADE" });

module.exports = { Cliente, ClienteAnual };