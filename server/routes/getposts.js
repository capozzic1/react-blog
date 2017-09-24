const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res) => {
  Post.find({}).sort({date: -1}).exec((err, posts) => {
    res.send(posts);
  })

});

module.exports = router;


/*
Post.find((err, posts) => {
  if (err) return console.err(err);
  res.send(posts);
});
*/
