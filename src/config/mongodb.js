const mongoose = require('mongoose');
require('dotenv').config();

const DB =  process.env.DB_NAME;
const REF =  'mongodb://localhost:27017/';

async function connect() {
  await mongoose.connect( REF+DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Database MoongoDB connected ...');
}

module.exports = {
  connect
}
