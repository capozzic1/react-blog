const express = require('express');

const router = express.Router();

router.delete('/', (req, res) => {
  const posts = req.body;

  Post.remove({ _id: { $in: posts } }, (err) => {
    if (err) return console.log(err);
  }).then(() => {
    Post.find((err, posts) => {
      if (err) return console.err(err);

      res.send(posts);
    });
  });
});

module.exports = router;
