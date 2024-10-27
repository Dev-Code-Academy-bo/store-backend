'use strict';
const model = require('./sale.model');

async function save (req, res) {
  const saleSaved = await model.save(req.body);
  return res.status(200).json(saleSaved);
}

async function get (req, res) {
  const sale = await model.getAll();
  return res.status(200).json(sale);
}

async function getById (req, res) {
  const sale = await model.getById(req.params.id);
  return res.status(200).json(sale);
}

async function update (req, res) {
  const sale = await model.put(req.params.id, req.body);
  return res.status(200).json(sale);
}

async function remove (req, res) {
  const sale = await model.remove(req.params.id);
  return res.status(200).json(sale);
}

module.exports = {
  save,
  get,
  getById,
  update,
  remove,
}