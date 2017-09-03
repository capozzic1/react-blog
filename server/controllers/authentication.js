
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const config = require('../config/main');

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080, // in seconds
  });
}

// set user info from request
function setUserInfo(request) {
  return {
    _id: request._id,
    email: request.email,
    role: request.role,
  };
}

// Login Route
exports.login = function (req, res, next) {
  const userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: `JWT${generateToken(userInfo)}`,
    user: userinfo,
  });
};

// registration route
exports.register = function (req, res, next) {
// check for registration errors

  const email = req.body.email;
  const password = req.body.password;

  // Return error if no email provided
  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address' });
  }

  // Return error if no pw provided
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    // if user is not unique, return error
    if (existingUser) {
      return res.status(422).send({ error: 'That email address is already in use' });
    }

    // if email is unique and pw was provided, create acct
    const user = new User({
      email,
      password,
    });

    user.save((err, user) => {
      if (err) { return next(err); }

      // Subscribe member to Mailchimp list
      // mailchimp.subscribeToNewsLetter(user.email);
      // Respond with JWT if user was created

      const userInfo = setUserInfo(user);

      res.status(201).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo,
      });
    });
  });
};

// Role authorization check
exports.roleAuthorization = function (role) {
  return function (req, res, next) {
    const user = req.user;

    User.findById(user._id, (err, foundUser) => {
      if (err) {
        res.status(422).json({ error: 'No user was found' });
        return next(err);
      }

      // if user is found, check role
      if (foundUser.role == role) {
        return next();
      }

      res.status(401).json({ error: 'You are not authorized to view this content ' });
      return next('Unauthorized');
    });
  };
};
