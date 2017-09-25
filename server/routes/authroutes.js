const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();
// register a new user
/* es-lint-disable */
router.post('/register', (req, res, next) => {
  console.log(req.body);

  User.register(new User({ username: req.body.username }), req.body.password, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    res.status(200).send('Registration successful');
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  /* req.session.destroy((err) => {
    console.log('destroyed');
  }); */

  console.log('logged out');
});

module.exports = router;
