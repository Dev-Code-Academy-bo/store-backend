'use strict';

const db = require('./user.db');

function save (user) {
  return db.save(user);
}

function getAll () {
  return db.get();
}

function getById(id) {
  return db.getById(id);
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
  put,
  remove,
}
