var express = require('express');
var router = express.Router();
module.exports = router;




// ===== HOME PAGE WITH TEMPLATE =====

router.get('/', function(request, response) {
  response.render('index', { title: 'Express' });
});




// ===== CLOCK WITH RAW OUTPUT =====

router.get('/clock', function(request, response) {

  //response.writeHead(200, {"Content-Type": "text/html"});
  response.status(200);
  response.set("Content-Type", "text/html");

  var now = new Date();
  
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var so_far = 1;
  while (so_far <= hours) {
    response.write("*");
    so_far += 1;
  }
  response.write("<br>");

  so_far = 1;
  while (so_far <= minutes) {
    response.write("*");
    so_far += 1;
  }
  response.write("<br>");
  
  so_far = 1;
  while (so_far <= seconds) {
    response.write("*");
    so_far += 1;
  }
  response.write("<br>");
    
  response.end();
  
});

