'use strict';
const model = require('./client.model');

async function save (req, res) {  
  try {
    const clientSaved = await model.save(req.body);
    return res.status(200).json(clientSaved);
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function get (req, res) {
  try {
    const client = await model.getAll();
    return res.status(200).json(client);
  }  catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function getById (req, res) {
  try {
    const clientFound = await model.getById(req.params.id);
    return res.status(200).json(clientFound);
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function update (req, res) {
  try {
    const client = await model.put(req.params.id, req.body);
    return res.status(200).json(client);
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function remove (req, res) {
  try{
    const client = await model.remove(req.params.id);
    return res.status(200).json(client);
  } catch(error) {
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