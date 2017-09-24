

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
const passport = require('passport');
const session = require('express-session');

const port = 4000;
const compiler = webpack(webpackConfig);
const config = require('./config/main');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes');
const logger = require('morgan');
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 100000 } }));
app.use(passport.session());


// passport config
const User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// db connection
mongoose.connect(config.database);

if (app.get('env') === 'development') {
  app.use(webpackMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
  }));
}

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', authRoutes);
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
