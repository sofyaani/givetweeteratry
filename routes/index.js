var express = require('express');
var router = express.Router();
var moment = require('moment');

module.exports = router;




// =========================================================
// =
// =   SET UP MONGODB AND MONGOOSE
// =

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




// =========================================================
// =
// =   DEFINE OUR DATA MODELS
// =

// Define the data structure of a Message model
// The number field is from 1-100. It's the number we're drawing.
// The text field is the text we'll draw around that number.
// Allowed data types (Number, String, Date...): http://mongoosejs.com/docs/schematypes.html

var Message = mongoose.model('Message', {
  text: {type: String, required: true},
  number: {type: Number, required: true}
});





// =========================================================
// =
// =   WEB ROUTES
// =


// HOME PAGE
// /
// Shows _all_ the messages

router.get('/', function(request, response, toss) {
  
  // When the server receives a request for "/", this code runs

  // Find all the Message records in the database, sorted descending by number
  Message.find().sort({number: -1}).exec(function(err, messages) {
    // This code will run once the database find is complete.
    // messages will contain a list (array) of all the messages that were found.
    // err will contain errors if any.

    // If there's an error, tell Express to do its default behavior, which is show the error page.
    if (err) return toss(err);
    
    // The list of messages will be passed to the template.
    // Any additional variables can be passed in a similar way (response.locals.foo = bar;)
    response.locals.messages = messages;
    
    // Render the "home" template (located in the "views" folder).
    response.render('home');

  });
  
});




// NEW PAGE
// /new

router.get('/new', function(request, response) {
  
  // When the server receives a request for "/new", this code runs
  
  // Figure out the lowest number that has been stored so far
  Message.findOne().sort({number: 1}).exec(function(err, message) {
    
    if (err) return toss(err);

    // Pass the next number to the input form, to tell the user
    var number;
    if (message) {
      number = message.number - 1;
      // TODO: If we're down to zero, do something different
    }
    else {
      number = 100;
    }
    if (number < 0) number = 0;
    if (number > 100) number = 100;
    
    var lengths = {
      0: 115,
      1: 30,
      2: 117,
      3: 113,
      4: 79,
      5: 118,
      6: 134,
      7: 62,
      8: 152,
      9: 134
    };
    
    var maxlength;
    if (number >= 100) {
      maxlength = lengths[String(number).substr(0, 1)] + lengths[String(number).substr(1, 1)] + lengths[String(number).substr(2, 1)];
    }
    else if (number >= 10) {
      maxlength = lengths[String(number).substr(0, 1)] + lengths[String(number).substr(1, 1)];
    }
    else {
      maxlength = lengths[number];
    }
    
    console.log("maxlength", maxlength);
    
    response.locals.number = number;
    response.locals.maxlength = maxlength;

    response.render('new');

  });


});



// CREATE PAGE
// /create?text=abc&number=100
// Normally you get to this page by clicking "Submit" on the /new page, but
// you could also enter a URL like the above directly into your browser.

router.get('/create', function(request, response, toss) {
  
  // When the server receives a request for "/create", this code runs
  
  response.locals.layout = 'layout';

  // Make a new Message in memory, with the parameters that come from the URL 
  // and store it in the shape variable
  var message = new Message({
    text: request.query.text,
    number: request.query.number,
  });
  
  // Now save it to the database
  message.save(function(err) {
    // This code runs once the database save is complete

    // An err here can be due to validations
    if (err) return toss(err);
    
    response.redirect('/');

  });
  
});

