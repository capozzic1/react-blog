const express = require('express');
const Post = require('../models/models');

const router = express.Router();

router.post('/', (req, res) => {
  // console.log(typeof req.body);
  const postInfo = req.body;
  const newPost = new Post({ title: postInfo.title,
    author: postInfo.author,
    body: postInfo.body,
  });


  // console.log(newPost);

  newPost.save((err, fluffy) => {
    if (err) return console.error(err);
  });


  /*
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  */
});

module.exports = router;
