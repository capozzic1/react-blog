const express = require('express');
const Post = require('../models/models');

const router = express.Router();

router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if (err) return console.err(err);
    res.send(posts);
  });
});

module.exports = router;;
