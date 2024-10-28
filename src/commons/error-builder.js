'use strict';

let build = (errorName, error) => {
  let status = null;
  let body = null;
  switch (errorName) {
    case 'ajv':
      status = 400;
      body = {
        name: 'schema',
        message: error[0].message
      };
      break;
    case 'unauthorized':
      status = 401;
      body = {
        name: error.name,
        message: error.message
      };
      break;
    case 'mongoose':
      status = 400;
      body = {
        name: `database MoongoDB - ${error.name}`,
        message: error.message
      };
      break;
    case 'MySQL':
      status = 400;
      body = {
        name: `database MySql - ${error.name}`,
        message: error.message
      };
      break;
    case 'configure':
      status = 400;
      body = {
        name: error.name,
        message: error.message
      };
      break;
    case 'no token':
      status = 401;
      body = {
        name: error.name,
        message: error.message
      };
      break;
    case 'configure-status':
      status = error.status;
      body = {
        name: error.name,
        message: error.message
      };
      break;
    case 'default':
      status = 400;
      body = error.message;
      break;
  }
  return {
    body,
    status
  };
};

module.exports = {
  build
};
