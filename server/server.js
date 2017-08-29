
const users = require('./routes/users');
const newpost = require('./routes/newpost');
const getposts = require('./routes/getposts');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/models');
const deleteposts = require('./routes/delete');
const editposts = require('./routes/editposts');

const app = express();
const port = 4000;


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/newpost', newpost);
app.use('/posts', getposts);
app.use('/delete', deleteposts);
app.use('/edit', editposts);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
