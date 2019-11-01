const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

/*app.get('/test', (req, res) => {
  res.send({ express: 'Hello from Express' });
});

var router = express.Router();

router.get("/", function(req, res)  {
  res.send('im the home page!');
});

router.get('/about', function(req, res) {
  res.send('im the about page!'); 
});

app.use('/', router);*/

app.use(bodyParser.json());

const db = require("./config/keys.js").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));

