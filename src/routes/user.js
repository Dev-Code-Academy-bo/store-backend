'use strict';

const express = require('express');
const userController = require('../user/user.controller');

const router = express.Router();

router
  .post('/', userController.save)
  .get('/', userController.get)
  .get('/:id', userController.getById);

  module.exports = router;