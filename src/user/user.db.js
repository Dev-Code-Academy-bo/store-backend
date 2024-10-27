'user strict';

const mongoose = require('mongoose');
const schema =  require('./user.schema');

const DOCUMENT = 'user';
const MONGOOSE = 'mongoose';

let user = mongoose.model(DOCUMENT, schema.userSchema);

async function save (data) {
  try {
    return await user.create(data);
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function get () {
  try {
    return await user.find();
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function getById(id) {
  return await user.findById(id);
}

async function find(data) {
  try{
    return user.find(data);
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
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
  find
}
