const express = require("express");
const router = express.Router();
const cors = require ("cors");

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const { check, validationResult } = require("express-validator");

const User = require("../../models/user.model");

router.post("/", cors(), [
	check('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
	check('email').isEmail().withMessage('Invalid email'),
	check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
    (req, res) => {
      const user = new User({
        profile_picture: req.body.profile_picture,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        country: req.body.country
      });
      bcrypt.hash(req.body.password, saltRounds, function (error, hash){
        if(error) throw error
        user.password = hash
        user.save().then(user => res.json(user))
          .then(user =>{
            res.json(user.username)
            res.redirect("/login")
          }).catch(e => console.log(e))
      });
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

})

module.exports = router;