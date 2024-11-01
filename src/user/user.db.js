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
  try {
    const res = await user.findById(id);
    if (res)
      return res;
    throw errorBuilder.build(
      'configure-status',
      {
        name: 'database - findById', 
        message: 'not found speciality id', 
        status: 404
      });
  } catch (error) {
    if (error.status === 404)
      throw error;
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function find(data) {
  try{
    return user.find(data);
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}
async function put(id, data) {
  try {
    const result = await user.replaceOne({ _id: id }, data);
    if (result.n === 0) {
      const err = errorBuilder.build(
        'configure-status',
        {
          name: 'database - update',
          message: 'not found user id',
          status: 404
        });
      throw err;
    }
    return getById(id);
  } catch (error) {
    if (error.status === 404)
      throw error;
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function remove(id) {
  try {
    const res = await user.findById(id);
    if (res) {
      await user.findOneAndDelete({_id: id });
      return res;
    }
    throw errorBuilder.build(
      'configure-status',
      {
        name: 'database - delete',
        message: 'not found user id',
        status: 404
      });
  } catch (error) {
    if (error.status === 404)
      throw error;
    throw errorBuilder.build(MONGOOSE, error);
  }
}
module.exports = {
  save,
  get,
  getById,
  put,
  remove,
  find
}
