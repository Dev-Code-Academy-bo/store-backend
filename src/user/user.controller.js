'use strict';
const userModel = require('./user.model');

async function save (req, res) {
  req.body.photo = await `photos/${req.file.filename}`
  const userSaved = await userModel.save(req.body);
  return res.status(200).json(userSaved);
}

async function get (req, res) {
  const user = await userModel.getAll();
  return res.status(200).json(user);
}

async function getById (req, res) {
  const userFound = await userModel.getById(req.params.id);
  return res.status(200).json(userFound);
}

function update () {

}

function remove () {

}

module.exports = {
  save,
  get,
  getById,
  update,
  remove,
}