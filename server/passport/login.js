const passport = require('passport');
const User = require('../models/users');
const bCrypt = require('bcrypt-nodejs');

const isValidPassword = (user, password) => bCrypt.compareSync(password, user.password);

passport.use('login', new LocalStrategy({
  passReqToCallback: true,
},
  ((req, username, password, done) => {
    User.findOne({ username },
      (err, user) => {
        if (err) { return done(err); }

        if (!user) {
          console.log(`User not found with username${username}`);
          return done(null, false,
            req.flash('message', 'User Not Found.'));
        }

        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');
          return done(null, false,
            req.flash('message', 'Invalid Password'));
        }

        return done(null, user);
      },
    );
  }),
));
