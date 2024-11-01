'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorBuilder = require('../commons/error-builder');

const { SALT_ROUNDS, KEY } = require('../config/global');
const NO_TOKEN = 'no token';

function encrypt (res, request, next) {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(request.req.body.password, salt);
  request.req.body.password = hash;
  next();
}

async function verifyToken(res, request, next) {
  try {
    const token = request.req.query.token;
    jwt.verify(token, KEY);
    next();
  } catch (error) {
    const newError = errorBuilder.build(
      NO_TOKEN,
      {
        name: "No token or TokenExpired",
        message: 'Send a token or send valid token'
      }
    )
    return res.res.status(newError.status).json(newError.body);
  }
}

module.exports = {
  encrypt,
  verifyToken
}