const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// creating a new schema for the user
const UserSchema = new Schema({
  email: String,
  username: String,
  passwordHash: String,
  passwordSalt: String,
});

module.exports = mongoose.model('User', UserSchema);
