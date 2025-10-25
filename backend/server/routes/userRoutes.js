//dependencies
const express = require('express');
const passport = require('passport');

const frontendUrl = `https://expensify-xyz.netlify.app`;

//files
const user = express.Router();
const expenseRoutes = require('./expenseRoutes');

user.use('/expenseRoutes', expenseRoutes);

user.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

user.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    successRedirect: `${frontendUrl}/api/user/expenses`,
  })
);

module.exports = user;
