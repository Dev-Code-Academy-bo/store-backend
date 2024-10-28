'use strict';

const user = require('./user');
const client = require('./client');
const product = require('./product');
const sale = require('./sale');
const login = require('./login');

function routes (app) {

  app.use('/api/user', user);
  app.use('/api/client', client);
  app.use('/api/product', product);
  app.use('/api/sale', sale);
  app.use('/api/login', login);
}

module.exports = routes;