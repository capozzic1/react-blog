const AuthenticationController = require('../controllers/authentication');
const express = require('express');
// const passportService = require('../config/passport');
/* eslint-disable */

const passport = require('passport');

// Middleware to require login/auth
// const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


module.exports = function(app){
  "use-strict";
  // init route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();

  // auth routes
  // set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // Registration routes
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // Set url for API group routes
  app.use('/api', apiRoutes);
};
