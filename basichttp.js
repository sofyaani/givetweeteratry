var http = require('http');

var server = http.createServer(function(request, response) {
   
    response.writeHead(200, {"Content-Type": "text/html"}); // Header: 200 OK status code
    
    // /clock
    // Show a clock
    if (request.url == "/clock") {
   
        console.log("Ring ring! Request for the clock");

        var now = new Date();
        
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        
        hours += 1;
        if (hours > 12) {
            hours -= 12;
        }
        
        var so_far = 1;
        while (so_far <= hours) {
            response.write("#");
            so_far += 1; // Increase so_far by 1
        }
        response.write("<br>");
    
        var so_far = 1;
        while (so_far <= minutes) {
            response.write("+");
            so_far += 1; // Increase so_far by 1
        }
        response.write("<br>");
    
        var so_far = 1;
        while (so_far <= seconds) {
            // response.write("'");
            response.write("<img src='http://art.yale.edu/image_columns/0004/1917/screen_shot_2014-02-04_at_2.06.15_am_474.png'>");
            so_far += 1; // Increase so_far by 1
        }
        response.write("<br>");
        
    }
    
    else if (request.url == "/color") {
        response.write("<div style='background: blue; width: 400px; height: 400px;'></div>");
    }    
    
    // Any other URL
    // Show "Hello??"
    // If the URL is like /10, show Hello?? that many times.
    else {
        console.log("Ring ring!", request.url);
        
        var how_many = request.url.replace("/", "");
        if (how_many < 1) {
            how_many = 1;
        }
        
        var so_far = 1;
        while (so_far <= how_many) {
            response.write("<i>Hello????</i><br>");
            so_far += 1;
        }
        
    }
   
    response.end();
    
});

server.listen(process.env.PORT);


console.log("Server started");

/* Shortcut, this is the same as the while loop above:
for (var so_far = 1; so_far <= 10000; so_far += 1) {
    console.log(so_far, seconds);
}
*/

/* Conditional operators 
// && and
if (seconds >= 10 && seconds <= 20) {
    console.log("seconds is between 10 and 20 inclusive");
}

// || or
// == exact comparison -- never use = for comparison
if (seconds == 15 || seconds == 30 || seconds == 45 || seconds == 0) {
    console.log("the second hand is perpenidicular");
}

if ((seconds >= 10 && seconds <= 20) || (seconds >= 30 && seconds <= 40)) {
    console.log("seconds is between 10 and 20, or between 30 and 40");
}

// ! not
if (seconds != 0) {
    console.log("seconds is not 0")
}
*/

    
