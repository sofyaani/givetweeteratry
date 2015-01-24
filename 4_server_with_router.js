// Basic web server with a router that does different things depending on the requested URL.
// Press "Run" in Cloud9. Once you see "Server started" in the console,
// click the preview link at the top of the console, or copy and paste it into a browser.
// Then in the browser visit /clock, /color, any number like /12, /breathe, and any other URL.
// You need to restart the server when you make a change to the file (and save the file!).

var http = require('http');

var server = http.createServer(function(request, response) {

    // Every time a request comes in, this code is run
   
    // Send the response header to the browser
    // Status code "200 OK"
    // Content type HTML
    response.writeHead(200, {"Content-Type": "text/html"}); // Header: 200 OK status code
    
    
    // ====== If the request is for URL /clock, send a clock =====
    // =
    // =
    
    if (request.url == "/clock") {
   
        // This only goes to the server's console, not to the browser
        console.log("Ring ring! Request for the clock");

        var now = new Date();
        
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        
        // Send *'s for hours
        var so_far = 1;
        while (so_far <= hours) {
            response.write("*");
            so_far += 1; // Increase so_far by 1
        }
        response.write("<br>"); // The browser is expecting HTML, so we can send <br> to tell the browser to create a line break

        // Send *'s for minutes
        var so_far = 1;
        while (so_far <= minutes) {
            response.write("*");
            so_far += 1;
        }
        response.write("<br>");
    
        // Send *'s for seconds
        var so_far = 1;
        while (so_far <= seconds) {
            // response.write("'");
            response.write("*");
            so_far += 1;
        }
        response.write("<br>");
        
    }
    
    
    // ===== If the request is for URL /color, send a blue square =====
    // =
    // =
    
    else if (request.url == "/color") {
        console.log("Ring ring! Request for a color");
        response.write("<div style='background: blue; width: 400px; height: 400px;'></div>");
    }
    
    
    // ===== If the request is for a URL that is a number, like /1 or /2, send an image that many times =====
    // =
    // =
    
    else if (request.url.replace("/", "") > 0) {

        console.log("Ring ring! Request for a number");
        
        // By replacing the "/" at the beginning of the URL with an empty string,
        // a URL like "/10" becomes a number like "10"
        var how_many = request.url.replace("/", "");

        var so_far = 1;
        while (so_far <= how_many) {
            // Since the browser is expecting HTML, we can send an <img> tag for an image.
            // But the image can't be hosted on our own server yet (because we'd have to write the code to serve it).
            // Try yourself to replace the src of this image with a local URL like just src="cat.jpg". Notice in the console
            // that the server says "Ring ring! /cat". It is replying to that request with "Hello??", not a cat image.
            response.write('<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/220px-Circle_-_black_simple.svg.png">');
            so_far += 1;
        }
        
    }
    
    
    // ===== If the request is for /breathe, send a circle whose size depends on the seconds =====
    // =
    // =
    
    else if (request.url == '/breathe') {

        console.log("Ring ring! Request for a breath");
        
        var now = new Date();
        var seconds = now.getSeconds();
        var size = seconds * 2; // Multiply the seconds by 2 to get the desired size of the circle in pixels
        
        response.write('<img' +
                        ' src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/220px-Circle_-_black_simple.svg.png"' +
                        ' width=' + size + 
                        ' height=' + size + 
                        '>');

    }    
    
    
    // ===== If the request is for any other URL, send "Hello??" =====
    // =
    // =
    
    else {
        console.log("Ring ring! " + request.url);
        response.write("<i>Hello????</i>");
    }
   
    // Hang up the phone
    response.end();
    
});

// Start the server
server.listen(process.env.PORT);

console.log("Server started");
