'user strict';

const Product =  require('./product.schema');

async function save (data) {
  return await Product.create(data);
}

async function get () {
  return await Product.findAll();
}

async function getById(id) {
  return await Product.findByPk(id);
}

async function put(id, data) {
  const [updated] = await Product.update( data, {
    where: { id }
  });
  if (updated) {
    return await getById(id);
  }
  return false;
}

async function remove(id) {
  const deleted =  await Product.destroy({
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
