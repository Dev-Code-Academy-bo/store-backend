'use strict';

const express = require('express');

const saleController = require('../sale/sale.controller');

const router = express.Router();

router
  .post('/',  saleController.save)
  .get('/', saleController.get)
  .get('/:id', saleController.getById)
  .put('/:id', saleController.update)
  .delete('/:id', saleController.remove);

  module.exports = router;