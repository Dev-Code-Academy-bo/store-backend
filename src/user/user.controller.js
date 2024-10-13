'use strict';
const userDb = require('./userdb');

function save () {

}

function get (req, res) {
  return res.status(200).json(userDb);
}

function update () {

}

function remove () {

}

module.exports = {
  save,
  get,
  update,
  remove
}