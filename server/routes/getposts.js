import express from 'express';
import Post from '../models/models';

const router = express.Router();

router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if (err) return console.err(err);
    res.send(posts);
  });
});

export default router;
