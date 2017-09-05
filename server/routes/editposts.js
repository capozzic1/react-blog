const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.put('/', (req, res) => {
  // console.log(req.body);
  const post = req.body.data[0];

  Post.findByIdAndUpdate(post._id, { title: post.title, body: post.body },
    { new: true }, (err, post) => {
      if (err) return console.log(err);
      console.log(post);
      // res.send(post);
    });
});

module.exports = router;
