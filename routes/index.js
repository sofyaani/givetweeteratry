var express = require('express');
var router = express.Router();
module.exports = router;

// MongoDB is a JavaScript-oriented database.
// http://docs.mongodb.org/manual/core/crud-introduction/

// --> In Cloud9, you need to start MongoDB before running your app by typing 
// ./mongod 
// at the terminal ("bash" window). But you only need to do that once per workspace. 
// MongoDB should run forever after that.

// Mongoose makes it easy to access MongoDB using a pattern of "models".
// http://mongoosejs.com

// Use Mongoose to connect to the MongoDB database. We'll call our
// database "networks". It will be created automatically if it doesn't already exist.

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/networks');


// Define the data structure of a Shape model
// It has width, height, top, and left attributes, which are required to be numbers from 0–100
// And it has a color attribute, which is optionaland is a string (text)
// Allowed data types (Number, String, Date...): http://mongoosejs.com/docs/schematypes.html

var Shape = mongoose.model('Shape', {
  width: {type: Number, required: true, min: 0, max: 100},
  height: {type: Number, required: true, min: 0, max: 100},
  top: {type: Number, required: true, min: 0, max: 100},
  left: {type: Number, required: true, min: 0, max: 100},
  color: {type: String}
});



// HOME PAGE
// /
// Shows _all_ the shapes

router.get('/', function(request, response, toss) {
  
  // When the server receives a request for "/", this code runs

  // Find all the Shape records in the database
  Shape.find(function(err, shapes) {
    // This code will run once the database find is complete.
    // shapes will contain a list (array) of all the shapes that were found.
    // err will contain errors if any.

    // If there's an error, tell Express to do its default behavior, which is show the error page.
    if (err) return toss(err);
    
    // The list of shapes will be passed to the template.
    // Any additional variables can be passed in a similar way (response.locals.foo = bar;)
    response.locals.shapes = shapes;
    
    // layout tells template to wrap itself in the "layout" template (located in the "views" folder).
    response.locals.layout = 'layout';

    // see public/stylesheets/style.css for the stylesheet that affects all pages that use
    // this layout.
    // Also note that any static assets (images, stylesheets, external client-side .js)
    // can be stored in the public folder. You don't include "public" in the URL to access them though.

    // Render the "home" template (located in the "views" folder).
    response.render('home');

  });
  
});




// SHOW PAGE
// /show?id=54e2058e85b156d10b064ca0
// Shows a _single_ shape

router.get('/show', function(request, response, toss) {
  
  // When the server receives a request for "/show", this code runs
  
  // Get the id from the URL
  // MongoDB automatically generates a unique id for every record; it's a special
  // _id property of the record.
  var id = request.query.id;
  
  // Find a Shape with this id
  Shape.findOne({_id: id}, function(err, shape) {
    // This code will run once the database find is complete.
    // shape will contain the found shape.
    // err will contain errors if any (for example, no such record).

    if (err) return toss(err);
    
    response.locals.shape = shape;
    response.locals.layout = 'layout';
    response.render('show');
    
  });
  
});



// NEW PAGE
// /new

router.get('/new', function(request, response) {

  // When the server receives a request for "/new", this code runs
  
  // Just render a basic HTML page with a form. We don't need to pass any variables.

  response.locals.layout = 'layout';
  response.render('new');
  
  // Please see views/new.hbs for additional comments
  
});



// CREATE PAGE
// /create?width=25&height=25&top=25&left=25&color=#ff0000
// Normally you get to this page by clicking "Submit" on the /new page, but
// you could also enter a URL like the above directly into your browser.

router.get('/create', function(request, response, toss) {
  
  // When the server receives a request for "/create", this code runs
  
  response.locals.layout = 'layout';

  // Make a new Shape in memory, with the parameters that come from the URL 
  // ?width=25&height=25&top=25&left=25&color=#ff0000
  // and store it in the shape variable
  var shape = new Shape({
    width: request.query.width,
    height: request.query.height,
    top: request.query.top,
    left: request.query.left,
    color: request.query.color
  });
  
  // Now save it to the database
  shape.save(function(err) {
    // This code runs once the database save is complete

    // An err here can be due to validations
    if (err) return toss(err);
    
    // Otherwise render a "thank you" page
    response.locals.shape = shape;
    response.render('create');
    
    // Alternatively we could just do
    // response.redirect('/');
    // to send the user straight to the homepage after saving the new shape

  });
  
});



// ABOUT PAGE
// /about

router.get('/about', function(request, response) {

  // When the server receives a request for "/about", this code runs

  response.locals.layout = 'layout';
  response.render('about');
  
});
