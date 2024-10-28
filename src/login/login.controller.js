'use strict';

const bcrypt = require('bcrypt');
const userModel = require('../user/user.model');

async function validate(req, res) {
  try {
    const { username, password } = req.body;
    const user = await userModel.findByUsername(username);
    const isValid = await bcrypt.compare(password, user[0].password);
    return res.status(200).json(isValid);
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  validate
}