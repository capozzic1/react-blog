// Importing Passport; strategies; and config
const passport = require('passport');
const User = require('../models/user');
const config = require('./main');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

// setting up the local Strategy
const localLogin = new LocalStrategy(localOptions, ((email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { error: 'Your login details could not be verified. Please try again.',
      });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) {
        return done(null, false, { error: 'Your login details could not be verified. Please try again.',
        });
      }

      return done(null, user);
    });
  });
}));

const jwtOptions = {
  // Telling passport to check auth headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  // Telling passport where to find the secret
  secretOrKey: config.secret,
};

// setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, ((payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));
// allow passport to use the strategies we defined
passport.use(jwtLogin);
passport.use(localLogin);
