
const User = require('../models/users');
const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
  },
    ((req, username, password, done) => {
      findOrCreateUser = () => {
        User.findOne({ username }, (err, user) => {
        // if case of error
          if (err) {
            console.log(`Error in SignUp :${err}`);
            return done(err);
          }
          // user already exists
          if (user) {
            console.log('User already exists');
            return done(null, false,
              req.flash('message', 'User Already Exists'));
          }
          // if no user with that email
          // create user
          const newUser = new User();
          // set user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');

          // save user
          newUser.save((err) => {
            if (err) {
              console.log(`Error in Saving user:${err}`);
              throw err;
            }
            console.log('User Registration Successful');
            return done(null, newUser);
          });
        });
      };
      process.nextTick(findOrCreateUser);
    })));

  const createHash = password => bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};
