// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db			 = require('./config/db');

const app            = express();

const port 			 = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('../node-mongo/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})

//db.collection('notes')

/*const note = { text: req.body.body, title: req.body.title}
  db.collection('notes').insert(note, (err, results) => {}*/
