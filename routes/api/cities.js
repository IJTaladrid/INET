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
    City.insertMany(req.body)
    .then(cities => res.json(cities))
});

module.exports = router;
