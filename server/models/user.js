const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

// creating a new schema for the user
const User = new Schema({
  username: { type: String, unique: true },
  password: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
