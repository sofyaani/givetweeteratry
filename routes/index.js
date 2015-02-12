var express = require('express');
var router = express.Router();
module.exports = router;

// MongoDB is a JavaScript-oriented database.
// http://docs.mongodb.org/manual/core/crud-introduction/
// You need to start MongoDB before running your app by typing ./mongod at the Terminal.
//   But you only need to do that once per workspace; it should run forever after that.

// Mongoose makes it easy to access MongoDB using "models".
// http://mongoosejs.com

// Use Mongoose to connect to the MongoDB database. We'll call our
// database "networks". It will be created automatically if it doesn't already exist.

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/networks');


var Person = mongoose.model('Person', {
  name: {type: String, required: true},
  age: {type: Number, required: true, min: 0, max: 200}
});



// HOME PAGE

router.get('/', function(request, response, toss) {

  Person.find(function (err, people) {

    if (err) return toss(err);
    
    response.locals.people = people;
    response.locals.layout = 'layout';

    response.render('home');

  });
  
});



// NEW PAGE

router.get('/new', function(request, response) {

  response.locals.layout = 'layout';
  response.render('new');
  
});



// CREATE PAGE

router.get('/create', function(request, response, toss) {
  response.locals.layout = 'layout';

  var person = new Person({
    name: request.query.name,
    age: request.query.age  
  });
  
  person.save(function(err) {

    if (err) return toss(err);

    response.locals.person = person;
    response.render('create');

  });
  
});



// ABOUT PAGE

router.get('/about', function(request, response) {

  response.locals.layout = 'layout';
  response.render('about');
  
});
