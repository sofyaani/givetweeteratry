var http = require('http');

var server = http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  
  if (request.url == '/clock') {
      
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
  
    var so_far = 1;
    while (so_far <= minutes) {
      response.write("*");
      so_far += 1;
    }
    response.write("<br>");
    
    var so_far = 1;
    while (so_far <= seconds) {
      response.write("*");
      so_far += 1;
    }
    response.write("<br>");
    
  }
  
  else {
    
    response.write("Hi");
    
  }
    
  response.end();
  
});

server.listen(process.env.PORT);
