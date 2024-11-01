'use strict';

const db = require('./sale.db');
const user = require('../user/user.model');
const product = require('../product/product.model');
const client = require('../client/client.model');

function save (user) {
  return db.save(user);
}

async function getAll () {
  try {
    return saleComplete(await db.get());
  } catch (error) {
    throw error;
  }
}

async function getById(id) {
  try {
    return saleComplete(await db.getById(id));
  } catch (error) {
    throw error;
  }
}

function put (id, data) {
  return db.put(id, data);
}

function remove(id) {
  return db.remove(id);
}

async function saleComplete(sale) {
  const newSale = {
    id: 25,
    quantity: 2,
    date: "2024-10-10T04:00:00.000Z",
    user: await user.getById(sale.idUser),
    product: await product.getById(sale.productId),
    client: await client.getById(sale.clientId),
  };
  return newSale;
}

module.exports = {
  save,
  getAll,
  getById,
  put,
  remove,
}
