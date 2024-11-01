'use strict';
const model = require('./sale.model');
const modelProduct = require('../product/product.model');

async function save (req, res) {
  try {
    const saleSaved = await model.save(req.body);
    const product = await modelProduct.getById(saleSaved.productId)
    const idProduct = product.id;
    const newProduct = {
      name: product.name,
      details: product.details,
      image: product.image,
      category: product.category,
      price: product.price,
      salePrice: product.salePrice,
      stock: product.stock - saleSaved.quantity,
    }
    await modelProduct.put(parseInt(idProduct), newProduct);
    return res.status(200).json(saleSaved);
    
  } catch (error) {
    return res.status(error.status).json(error.body);    
  }
}

async function get (req, res) {
  try {
    const sale = await model.getAll();
    return res.status(200).json(sale);
  }  catch(error) {
    console.log('error****', error);
    return res.status(error.status).json(error.body);
  }
}

async function getById (req, res) {
  try {
    const sale = await model.getById(req.params.id);
    return res.status(200).json(sale);
  }  catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function update (req, res) {
  try {
    const sale = await model.put(req.params.id, req.body);
    return res.status(200).json(sale);
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function remove (req, res) {
  try {
    const sale = await model.remove(req.params.id);
    return res.status(200).json(sale);
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