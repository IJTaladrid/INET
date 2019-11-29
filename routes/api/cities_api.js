const express = require('express');
const router = express.Router();
const cors = require('cors');

// City Model
const City = require("../../models/city.model");


// @route   GET api/cities
// @desc    Get All Cities
// @access  Public
router.get('/', cors(), (req, res) => {
    City.find()
    .then(cities => res.json(cities))
    .catch(err => console.log(err));
});

// this is how you implement a city route by specific city
router.get('/:name', (req, res) => {
  	let cityRequested = req.params.name;
  	City.find({ name: cityRequested })
		.then(city => {
			res.send(city)
		})
		.catch(err => console.log(err));
});

// @route   POST api/cities
// @desc    Create a Post
// @access  Public
router.post('/', (req, res) => {
    const newCity = new City    ({
        name: req.body.name,
        country: req.body.country
    });

    newCity.save().then(cities => res.json(cities));
});

module.exports = router;
