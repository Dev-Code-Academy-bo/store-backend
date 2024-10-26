'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysqldb');

const Client = sequelize.define( 'Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Client;