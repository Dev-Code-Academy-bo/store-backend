'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../user/user.model');
const { KEY, COURSE } = require('../config/global');
const errorBuilder = require('../commons/error-builder');

const UNAUTHORIZED = 'unauthorized';

async function validate(req, res) {
  try {
    const { username, password } = req.body;
    const user = await userModel.findByUsername(username);
    
    const isValid = await bcrypt.compare(password, user[0].password);
    if (isValid) {
      const token = createToken();
      return res.status(200).json(token);
    }
    throw errorBuilder.build(
      UNAUTHORIZED,
      {
        name: UNAUTHORIZED,
        message: `The ${req.body.username} or ${req.body.password} was wrong`
      });
  } catch(error) {
    if(error.status){
      return res.status(error.status).json(error.body);
    }
    const newError = errorBuilder.build(
      UNAUTHORIZED,
      {
        name: UNAUTHORIZED,
        message: `The ${req.body.username} or ${req.body.password} was wrong`
      });
    return res.status(newError.status).json(newError.body);
  }
}

function createToken() {
  const token = jwt.sign(
    { course: COURSE },
    KEY,
    { expiresIn: 60*5 }

  );
  return token;
}

module.exports = {
  validate
}