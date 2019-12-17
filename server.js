const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
const passport = require("passport");

//DB config
const db = require("./config/keys").mongoURI;

const cities = require("./routes/api/cities_api");
const itinerary = require("./routes/api/itinerary_api");
const users = require("./routes/api/users_api");

const app = express();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport");

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected..."))
        .catch(err => console.log(err));

// Use Routes

app.use("/api/cities", cities);
app.use("/api/itinerary", itinerary);
app.use("/api/users", users);

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () =>  {
  console.log("Listening at: ", app.get("port"));
});