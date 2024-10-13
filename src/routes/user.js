'use strict';

const express = require('express');
const userController = require('../user/user.controller');

const router = express.Router();

router.get('/', userController.get);

  module.exports = router;