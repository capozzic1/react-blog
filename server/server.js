
const users = require('./routes/users');
const newpost = require('./routes/newpost');
const getposts = require('./routes/getposts');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/models');
const deleteposts = require('./routes/delete');
const editposts = require('./routes/editposts');
const path = require('path');

const app = express();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));


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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
