const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.post('/', (req, res) => {
  // console.log(typeof req.body);
  const postInfo = req.body;
  console.log(postInfo);
  const newPost = new Post({ title: postInfo.title,
    author: postInfo.author,
    body: postInfo.body,
  });


  // console.log(newPost);

  newPost.save((err) => {
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
