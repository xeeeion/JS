const dbConfig = require(".../config/db.config.js");

const Sequelize = require("Sequelize");
const Sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, )