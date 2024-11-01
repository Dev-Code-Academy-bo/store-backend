'use strict';

const { Op } = require("sequelize");
const db = require('./product.db');


function save (user) {
  return db.save(user);
}

function getAll () {
  return db.get();
}

function getById(id) {
  return db.getById(id);
}

function getByName(name) {
  const data = {
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    }
  }
  return db.get(data);
}

function put (id, data) {
  return db.put(id, data);
}

function remove(id) {
  return db.remove(id);
}

module.exports = {
  save,
  getAll,
  getById,
  getByName,
  put,
  remove,
}
