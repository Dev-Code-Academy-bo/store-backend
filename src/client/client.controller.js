'use strict';
const model = require('./client.model');

async function save (req, res) {  
  const clientSaved = await model.save(req.body);
  return res.status(200).json(clientSaved);
}

async function get (req, res) {
  const client = await model.getAll();
  return res.status(200).json(client);
}

async function getById (req, res) {
  const clientFound = await model.getById(req.params.id);
  return res.status(200).json(clientFound);
}

async function update (req, res) {
  const client = await model.put(req.params.id, req.body);
  return res.status(200).json(client);
}

async function remove (req, res) {
  const client = await model.remove(req.params.id);
  return res.status(200).json(client);
}

module.exports = {
  save,
  get,
  getById,
  update,
  remove,
}