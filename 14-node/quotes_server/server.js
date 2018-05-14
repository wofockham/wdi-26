const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; // or you could destructure

let db;

// Do not commit your login and password to git!
MongoClient.connect('mongodb://theBlade:notchicken@ds219040.mlab.com:19040/quotes_the_blade', (err, client) => {
  if (err) {
    return console.log(err);
  }

  db = client.db('quotes_the_blade');

  app.listen(3000, function () {
    console.log('up and running on 3000, and the mongodb is connected');
  });

})

const app = express();

// attach middleware
app.use(bodyParser.urlencoded({extended: true})); // for nested forms
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Index (Read) Action
app.get('/', function (req, res) {
  const cursor = db.collection('quotes').find({}).toArray((err, results) => {
    // When we have the results, we can render them
    res.render('index.ejs', {quotes: results})
  });
});

// Create Action
app.post('/quotes', function (req, res) {
  db.collection('quotes').save({name: req.body.name, quote: req.body.quote}, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log('saved to the db');
    res.redirect('/');
  })
});
