const express = require('express');
const router = express.Router();

// City Model
const City = require("../../models/city.model");

// @route   GET api/cities
// @desc    Get All Cities
// @access  Public
router.get('/', (req, res) => {
    City.find()
        .then(cities => res.json(cities))
});

// @route   POST api/cities
// @desc    Create a Post
// @access  Public
router.post('/', (req, res) => {
    const newCity = new City({
        name: req.body.name,
        country: req.body.country
    });
    newCity.save().then(city => res.json(city));
});

module.exports = router;
