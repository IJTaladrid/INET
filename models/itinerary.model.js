const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  title: String,
  profile_picture: String,
  rating: Number,
  duration: Number,
  price: String,
  hashtags: Array,
  city_id: {
    type: Schema.Types.ObjectId
  }
})

const Itinerary = mongoose.model("Itinerary", itinerarySchema, 'itineraries');

module.exports = Itinerary;