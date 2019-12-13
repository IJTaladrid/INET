const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  /*_id: Schema.Types.ObjectId,*/
  profile_picture: String,
  first_name: String,
  last_name: String,
  email: String,
  username: String,
  password: String,
  country: String
})

const User = mongoose.model("User", userSchema, "users");

module.exports = User;