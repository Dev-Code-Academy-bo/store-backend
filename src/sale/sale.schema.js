'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysqldb');
const Product = require("../product/product.schema");
const Client = require("../client/client.schema");

const Sale = sequelize.define( 'Sale', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Sale.belongsTo(Product, { foreignKey: "productId"});
Sale.belongsTo(Client, { foreignKey: "clientId"});



module.exports = Sale;