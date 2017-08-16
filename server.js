
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Post = require('./models/models');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.post('/newpost', (req, res) => {
  // console.log(typeof req.body);


  const postInfo = req.body;
  const newPost = new Post({ title: postInfo.title,
    author: postInfo.author,
    body: postInfo.body,
    date: postInfo.date });
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

app.get('/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) return console.err(err);
    res.send(posts);
  });
});

app.delete('/delete', (req, res) => {
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


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
