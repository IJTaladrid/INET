const express = require('express');
const router = express.Router();
const cors = require('cors');

// City Model
const City = require("../../models/city.model");

// Itinerary Model
const Itinerary = require("../../models/itinerary.model");

// @route   GET api/cities
// @desc    Get All Cities
// @access  Public
router.get('/', cors(), (req, res) => {
    Itinerary.find()
    .then(cities => res.json(cities))
    .catch(err => console.log(err));
});

// this is how you implement a city route by specific city
// router.get('/:name', (req, res) => {
//     let cityRequested = req.params.name;
//   	City.findOne({ name: cityRequested })
//     .then(city => {
//         Itinerary.find({ city_id: city._id })
//         .then(Itinerary => {
//             res.send(Itinerary)
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// });

router.get("/:id", cors(),  (req, res) =>{
    let cityidRequested = req.params.id;
  	City.findById(cityidRequested)
    .then(city => {
        Itinerary.find({ city_id: city._id })
        .then(Itinerary => {
            res.send(Itinerary)
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

// @route   POST api/cities
// @desc    Create a Post
// @access  Public
router.post('/', (req, res) => {
    const newItinerary = new Itinerary (req.body);
    newItinerary.save().then(itinerary => res.json(itinerary));
});

module.exports = router;
