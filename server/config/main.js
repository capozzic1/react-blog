const express = require('express');

const app = express();

const dbURI = app.get('env') === 'development' ? 'mongodb://127.0.0.1:27017' : process.env.MONGODB_URI;
module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: dbURI,

};

// database: 'mongodb://127.0.0.1:27017',
//  database: process.env.MONGODB_URI,
