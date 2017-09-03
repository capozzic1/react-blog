
const users = require('./routes/users');
const newpost = require('./routes/newpost');
const getposts = require('./routes/getposts');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deleteposts = require('./routes/delete');
const editposts = require('./routes/editposts');
const path = require('path');

const app = express();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const port = 4000;
const compiler = webpack(webpackConfig);
const config = require('./config/main');
const mongoose = require('mongoose');
const router = require('./routes/authrouter');
// db connection
mongoose.connect(config.database);


app.use('/api', authCheckMiddleware);


app.use(webpackMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
}));


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

router(app);
