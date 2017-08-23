const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const db = mongoose.connect('mongodb://127.0.0.1:27017');

const dateobj = new Date();
const date = dateobj.toDateString();

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: { type: String, default: date },
});

const Post = mongoose.model('Blog', blogSchema);

module.exports = Post;
