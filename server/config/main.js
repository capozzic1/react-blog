module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: process.env.MONGODB_URI,

};

// database: 'mongodb://127.0.0.1:27017',
