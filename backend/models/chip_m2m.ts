import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const ChipM2m = sequelize.define("chip_m2m", {
    operadora: DataTypes.STRING,
    r_auth: DataTypes.INTEGER
});

export default ChipM2m;