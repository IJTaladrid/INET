const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    country: String
});

const City = mongoose.model("City", citySchema, 'cities');

module.exports = City;