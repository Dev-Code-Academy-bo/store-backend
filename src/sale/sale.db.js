'user strict';

const Sale =  require('./sale.schema');

const MYSQL = 'MySQL';

async function save (data) {
  try {
    return await Sale.create(data);
  } catch (error) {
    throw errorBuilder.build(MYSQL, error);
  }
}

async function get () {
  try {
    return await Sale.findAll();
  } catch (error) {
    throw errorBuilder.build(MYSQL, error);
  }
}

async function getById(id) {
  try {
    const res = await Sale.findByPk(id);
    if(res) {
      return res;
    }
    throw errorBuilder.build(MYSQL, error);
  } catch (error) {
    throw errorBuilder.build('configure-status', 
      { 
        name: 'database - findById', 
        message: 'not found Sale id', 
        status: 404
      });
  }
}

async function put(id, data) {
  try {
    const [updated] = await Sale.update( data, {
      where: { id }
    });
    if (updated) {
      return await getById(id);
    }
    const err = errorBuilder.build('configure-status', 
      {
        name: 'database - update', 
        message: 'not found sale id', 
        status: 404
      });
    throw err;
  } catch (error) {
    if (error.status === 404)
      throw err;
    throw errorBuilder.build(MYSQL, error);
  }
}

async function remove(id) {
  try {
    const deleted =  await Sale.destroy({
      where : { id }
    });
    if (deleted) {
      return true;
    }
    const err = errorBuilder.build('configure-status', 
      {
        name: 'database - delete', 
        message: 'not found sale id', 
        status: 404
      });
    throw err;
  } catch (error) {
    if (error.status === 404)
      throw err;
    throw errorBuilder.build(MYSQL, error);
  }
}
module.exports = {
  save,
  get,
  getById,
  put,
  remove,
}
