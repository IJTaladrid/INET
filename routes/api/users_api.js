const express = require("express");
const router = express.Router();
const cors = require ("cors");
const passport = require("../../config/passport");

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const { check, validationResult } = require("express-validator");

const key = require("../../config/keys").secretOrKey;
const jwt = require("jsonwebtoken");


// User model
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
        if(error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }
        user.password = hash
        user.save()
          .then(user => {
            res.json(user)
          }).catch(e => console.log(e))
      });
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() })
        return;
      }

});

router.post('/login', cors(), (req, res) => {
  User.findOne({username: req.body.username})
	.then(user =>
		bcrypt.compare(req.body.password, user.password, function(err){
			if (!err) {
				jwt.sign(
					{id: user._id},
					key,
					{expiresIn: 2592000},
					(err, token) => {
					  if(err){
						res.json({
						  success: false,
						  token: "There was an error"
						});
					  } else {
						res.json({
						  success: true,
						  token: token
						});
					  }
					}
				);
			} else {
				res.send('Error')
			}
		})
	).catch(e => console.log(e))
});

router.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
	User
	.findOne({ _id: req.user.id })
	.then(user => {
		res.json(user);
	})
	.catch(err => res.status(404).json({ error: "User does not exist!" }));
	}
);

module.exports = router;