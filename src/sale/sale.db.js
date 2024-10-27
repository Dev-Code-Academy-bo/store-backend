'user strict';

const Sale =  require('./sale.schema');

async function save (data) {
  return await Sale.create(data);
}

async function get () {
  return await Sale.findAll();
}

async function getById(id) {
  return await Sale.findByPk(id);
}

async function put(id, data) {
  const [updated] = await Sale.update( data, {
    where: { id }
  });
  if (updated) {
    return await getById(id);
  }
  return false;
}

async function remove(id) {
  const deleted =  await Sale.destroy({
    where : { id }
  });
  if (deleted) {
    return true;
  }
  return false;
}
module.exports = {
  save,
  get,
  getById,
  put,
  remove,
}
