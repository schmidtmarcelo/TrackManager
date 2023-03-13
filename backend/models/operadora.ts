import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const Operadora = sequelize.define("operadoras", {
    operadora: DataTypes.STRING,
    r_auth: DataTypes.INTEGER
});

export default Operadora;