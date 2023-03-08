import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const User = sequelize.define("users", {
    name: DataTypes.STRING,
});

export default User;