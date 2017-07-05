var express = require('express');
var bodyParser= require('body-parser')
var MongoClient = require('mongodb').MongoClient
var sha1 = require('sha1');
var db;

const PORT = 4000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api/login', function (req, res) {

  if (!req.body.password) return res.status(400).send('bad_request!')

  db.collection('user').find().toArray(function(err, results) {
    if (err) return res.status(500).send('something_wrong!');

    var checker = false;

    results.forEach(function (entry) {
      if (entry.password === sha1(req.body.password)) checker = true;
    })

    if (checker) {
      res.send('success')
    } else {
      return res.status(403).send('bad password!');
    }
  })
})

MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
  });
})
