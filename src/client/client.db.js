'user strict';

const Client =  require('./client.schema');

async function save (data) {
  return await Client.create(data);
}

async function get () {
  return await Client.findAll();
}

async function getById(id) {
  return await Client.findByPk(id);
}

async function put(id, data) {
  const [updated] = await Client.update( data, {
    where: { id }
  });
  if (updated) {
    return await getById(id);
  }
  return false;
}

async function remove(id) {
  const deleted =  await Client.destroy({
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
