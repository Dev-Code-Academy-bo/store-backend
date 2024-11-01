'use strict';
const userModel = require('./user.model');

async function save (req, res) {
  try {
    req.body.photo = await `photos/${req.file.filename}`
    const userSaved = await userModel.save(req.body);
    return res.status(200).json(userSaved);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function get (req, res) {
  try {
    const user = await userModel.getAll();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function getById (req, res) {
  try {
    const userFound = await userModel.getById(req.params.id);
    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function update (req, res) {
  try {
    const user = await userModel.put(req.params.id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function remove (req, res) {
  try {
    const user = await userModel.remove(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  save,
  get,
  getById,
  update,
  remove,
}