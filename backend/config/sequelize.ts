import { Sequelize } from 'sequelize';
const database = require('./config');

export const sequelize = new Sequelize(database);

  
//const sequelize = new Sequelize(database);
//module.exports = sequelize;