const mongoose = require('mongoose');

const Schema = mongoose.Schema;


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
