'use strict';

const user = require('./user');
const client = require('./client');
const product = require('./product');
const sale = require('./sale');
const login = require('./login');
const middleware = require('../commons/middleware');

function routes (app) {

  app.use('/api/user', middleware.verifyToken, user);
  app.use('/api/client', middleware.verifyToken, client);
  app.use('/api/product', middleware.verifyToken, product);
  app.use('/api/sale', middleware.verifyToken, sale);
  app.use('/api/login', login);
}

module.exports = routes;