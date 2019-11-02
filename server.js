const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

const cities = require("./routes/api/cities");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Connect to Mongo
mongoose.connect("mongodb+srv://IJTaladrid:NtwecbBxtErqPNkh@ijtcluster-5odss.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected..."))
        .catch(err => console.log(err));

// Use Routes

app.use("/api/cities", cities);

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () =>  {
  console.log("Listening at: ", app.get("port"));
});