import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const ChipM2m = sequelize.define("chips_m2ms", {  
    cliente_id: DataTypes.INTEGER,
    operadora_id: DataTypes.INTEGER,
    apn_id: DataTypes.INTEGER,
    chip_ccid: DataTypes.INTEGER,
    numero: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    data_da_compra: DataTypes.DATE,
    data_de_ativacao: DataTypes.DATE,
    perfil: DataTypes.STRING,
    status: DataTypes.STRING,
    r_auth: DataTypes.INTEGER
});

export default ChipM2m;