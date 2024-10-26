'use strict';

const express = require('express');

const clientController = require('../client/client.controller');

const router = express.Router();

router
  .post('/',  clientController.save)
  .get('/', clientController.get)
  .get('/:id', clientController.getById)
  .put('/:id', clientController.update)
  .delete('/:id', clientController.remove);

  module.exports = router;