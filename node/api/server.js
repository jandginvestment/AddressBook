var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  Task = require('./models/addressBookModel'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8888;
  
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/AddressBookdb',{ useNewUrlParser: true ,useUnifiedTopology: true }); 
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/addressBookRoute'); //importing route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
routes(app); //register the route


app.listen(port);

console.log('Address Book RESTful API server started on: ' + port);
