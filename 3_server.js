// Basic web server.
// Press "Run" in Cloud9. Once you see "Server started" in the console,
// click the preview link at the top of the console, or copy and paste it into a browser.
// You need to restart the server when you make a change to the file (and save the file!).

var http = require('http');

var server = http.createServer(function(request, response) {
  
  // Every time a request comes in, this code is run
  
  // This only goes to the server's console, not to the browser
  console.log("Ring ring!");

  // Send the response header to the browser
  // Status code "200 OK"
  // Content type HTML
  response.writeHead(200, {"Content-Type": "text/html"});
  
  // Send some content to the browser
  response.write("Hello??");
  
  // Hang up the phone
  response.end();
  
});

// Start the server
server.listen(process.env.PORT);

console.log("Server started");
