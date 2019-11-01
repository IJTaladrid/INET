const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

const app = express();

mongoose.connect("mongodb+srv://IJTaladrid:NtwecbBxtErqPNkh@ijtcluster-5odss.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected..."))
        .catch(err => console.log(err));

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(app.get("port"), () =>  {
  console.log("Listening at: ", app.get("port"));
});