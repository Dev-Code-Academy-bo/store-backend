'use strict';

const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/global');

function encrypt (res, request, next) {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(request.req.body.password, salt);
  request.req.body.password = hash;
  next();
}

module.exports = {
  encrypt
}