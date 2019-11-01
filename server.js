const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

/*app.get('/test', (req, res) => {
  res.send({ express: 'Hello from Express' });
});*/

var router = express.Router();

router.get("/", function(req, res)  {
  res.send('im the home page!');
});

router.get('/about', function(req, res) {
  res.send('im the about page!'); 
});

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

