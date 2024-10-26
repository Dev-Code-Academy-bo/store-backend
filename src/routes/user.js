'use strict';

const express = require('express');
const userController = require('../user/user.controller');
const userMiddleware = require('../user/user.middleware');

const router = express.Router();

router
  .post('/', 
    userMiddleware.upload.single('photo'),
    userController.save
  )
  .get('/', userController.get)
  .get('/:id', userController.getById)
  .put('/:id', userController.update)
  .delete('/:id', userController.remove);

  module.exports = router;