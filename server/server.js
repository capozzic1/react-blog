
const users = require('./routes/users');
const newpost = require('./routes/newpost');
const getposts = require('./routes/getposts');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deleteposts = require('./routes/delete');
const editposts = require('./routes/editposts');
const path = require('path');
const flash = require('connect-flash');

const app = express();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const port = 4000;
const compiler = webpack(webpackConfig);
const passport = require('passport');
const expressSession = require('express-session');


app.use(passport.initialize());
// connect to the database and load models
require('./server/models').connect(config.dbUri);

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');

app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// init passport

/*
const initPassport = require('./passport/init');
initPassport(passport);


app.use(expressSession({ secret: 'mySecretKey ' }));

app.use(passport.session());
app.use(flash());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
*/
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
