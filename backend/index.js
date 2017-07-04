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

  console.log('aaa', req.body);

  if (!req.body.username) return res.status(400).send('bad_request!')
  if (!req.body.password) return res.status(400).send('bad_request!')

  db.collection('user').find({username: req.body.username}).toArray(function(err, results) {
    if (err) return res.status(500).send('something_wrong!');
    if (results.length === 0) return res.status(403).send('bad username or password!');

    var checker = false;

    results.forEach(function (entry) {
      if (entry.password === sha1(req.body.password)) checker = true;
    })

    if (checker) {
      res.send('success')
    } else {
      return res.status(400).send('bad username or password!');
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
