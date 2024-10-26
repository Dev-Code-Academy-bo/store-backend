'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  lastname: String,
  ci: String,
  username: String,
  password: String,
  phone: String,
  address: String,
  birthdate: {type: Date },
  photo: String,
} , {
  versionKey: false
});

module.exports = {
  userSchema
}
