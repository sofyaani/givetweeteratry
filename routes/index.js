var express = require('express');
var router = express.Router();
module.exports = router;


// This code only runs when we first start the server

// Initialize a counter with the value 1. This will count the total visitors.
var counter = 1;

// Store three colors in an array (a list). This acts as a kind of database.
var colors = ['red', 'green', 'blue'];

// Initialize a counter for our colors. This keeps track of which color to show.
var color_num = 0;


// ===== HOME PAGE WITH TEMPLATE =====

router.get('/', function(request, response) {
  
  // This code runs every time a request for "/" comes in
  
  var time = new Date();

  // Render the "views/home.hbs" template file, and pass an object that the
  // template can use to show some dynamic values ("hour", "counter", etc.)
  // The "layout" property is a special one, and means to surround the "home"
  // template with the "layout.hbs" template.
  
  // Note that layout.hbs loads the /public/stylesheets/style.css stylesheet.
  // That is a static file, so you can't insert dynamic values into that. But
  // you can always use inline style="..." attributes and insert dynamic values
  // into those, or even put an inline <style>...</style> stylesheet at the top of
  // home.hbs and insert dynamic values into that.
  
  // Other static files such as images can also go into the public folder, and
  // can then be referenced from your HTML templates (see the <img> example in about.hbs).
  
  // .hbs means "Handlebars template", more about it here: http://handlebarsjs.com/
  //   Ignore the documentation about "helpers" (that's an advanced topic).
  //   Basically {{hour}} will insert the value of the hour property you pass below,
  //   and that's pretty much all you need to know.
  //   {{{hour}}} will do the same, the only difference is if your value is text 
  //   that contains a "<" or ">", {{hour}} will display those characters to the 
  //   end user as  < and > (technically it will change them to &lt; and &gt;), 
  //   whereas {{{hour}}} will treat them as an HTML tag.
  
  response.render('home', { 
      hour: time.getHours(), 
      minute: time.getMinutes(),
      counter: counter,
      color: colors[color_num], // This will be "red" when color_num is 0, etc.
      layout: 'layout'
  });

  // Increase the total visitors counter
  counter += 1;
  
  // Increase the colors counter
  color_num += 1;
  // When the colors counter is >= 3, go back to 0. This way colors[color_num]
  // cycles between red, green, and blue.
  if (color_num >= colors.length) {
    color_num = 0;
  }
  
});


// ====== ABOUT PAGE WITH TEMPLATE =====

router.get('/about', function(request, response) {
  // This code runs every time a request for "/about" comes in
  // Rendr the "views/about.hbs" template file.
  response.render('about', { layout: 'layout'} );
})

