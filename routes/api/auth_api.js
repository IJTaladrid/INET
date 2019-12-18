const express = require('express');
const router = express.Router();
const passport = require("passport");
const app = express();
// const cors = require('cors');

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  module.exports = router;