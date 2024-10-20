'user strict';

const mongoose = require('mongoose');
const schema =  require('./user.schema');

const DOCUMENT = 'user';

let user = mongoose.model(DOCUMENT, schema.userSchema);

async function save (data) {
  return await user.create(data);
}

async function get () {
  return await user.find();
}

async function getById(id) {
  return await user.findById(id);
}

async function put(id, data) {
  const response = await user.replaceOne({ _id: id }, data);
  return getById(id);
}

async function remove(id) {
  return await user.findOneAndDelete( { _id: id } );
}
module.exports = {
  save,
  get,
  getById,
  put,
  remove,
}
