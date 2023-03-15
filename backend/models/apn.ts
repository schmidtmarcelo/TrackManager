import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const Apn = sequelize.define("apns", {
    apn: DataTypes.STRING,
    r_auth: DataTypes.INTEGER
});

export default Apn;