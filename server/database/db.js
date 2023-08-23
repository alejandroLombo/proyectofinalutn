import { Sequelize } from "sequelize";
//const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('svaweb','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;