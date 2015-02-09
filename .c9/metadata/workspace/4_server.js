{"changed":true,"filter":false,"title":"4_server.js","tooltip":"/4_server.js","value":"var http = require('http');\n\nvar server = http.createServer(function(request, response) {\n\n    // Every time a request comes in, this code is run\n   \n    // Send the response header to the browser\n    // Status code \"200 OK\"\n    // Content type HTML\n    response.writeHead(200, {\"Content-Type\": \"text/html\"}); // Header: 200 OK status code\n    \n    // If the request was for URL /clock, show a clock\n    if (request.url == \"/clock\") {\n   \n        // This only goes to the server's console, not to the browser\n        console.log(\"Ring ring! Request for the clock\");\n\n        var now = new Date();\n        \n        var seconds = now.getSeconds();\n        var minutes = now.getMinutes();\n        var hours = now.getHours();\n        \n        hours += 1;\n        if (hours > 12) {\n            hours -= 12;\n        }\n        \n        var so_far = 1;\n        while (so_far <= hours) {\n            response.write(\"#\");\n            so_far += 1; // Increase so_far by 1\n        }\n        response.write(\"<br>\");\n    \n        var so_far = 1;\n        while (so_far <= minutes) {\n            response.write(\"+\");\n            so_far += 1; // Increase so_far by 1\n        }\n        response.write(\"<br>\");\n    \n        var so_far = 1;\n        while (so_far <= seconds) {\n            // response.write(\"'\");\n            response.write(\"<img src='http://art.yale.edu/image_columns/0004/1917/screen_shot_2014-02-04_at_2.06.15_am_474.png'>\");\n            so_far += 1; // Increase so_far by 1\n        }\n        response.write(\"<br>\");\n        \n    }\n    \n    else if (request.url == \"/color\") {\n        response.write(\"<div style='background: blue; width: 400px; height: 400px;'></div>\");\n    }    \n    \n    // Any other URL\n    // Show \"Hello??\"\n    // If the URL is like /10, show Hello?? that many times.\n    else {\n        console.log(\"Ring ring!\", request.url);\n        \n        var how_many = request.url.replace(\"/\", \"\");\n        if (how_many < 1) {\n            how_many = 1;\n        }\n        \n        var so_far = 1;\n        while (so_far <= how_many) {\n            response.write(\"<i>Hello????</i><br>\");\n            so_far += 1;\n        }\n        \n    }\n   \n    response.end();\n    \n});\n\nserver.listen(process.env.PORT);\n\n\nconsole.log(\"Server started\");\n","undoManager":{"mark":35,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":53,"column":40},"end":{"row":53,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":41},"end":{"row":53,"column":42},"action":"insert","lines":["?"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":42},"end":{"row":53,"column":43},"action":"insert","lines":["?"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":43},"end":{"row":53,"column":44},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":44},"end":{"row":53,"column":45},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":45},"end":{"row":53,"column":46},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":46},"end":{"row":53,"column":47},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":47},"end":{"row":53,"column":48},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":48},"end":{"row":53,"column":49},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":49},"end":{"row":53,"column":50},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":50},"end":{"row":53,"column":51},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":51},"end":{"row":53,"column":52},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":52},"end":{"row":53,"column":53},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":46},"end":{"row":53,"column":47},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":47},"end":{"row":53,"column":48},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":48},"end":{"row":53,"column":49},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":49},"end":{"row":53,"column":50},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":50},"end":{"row":53,"column":51},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":51},"end":{"row":53,"column":52},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":52},"end":{"row":53,"column":53},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":53},"end":{"row":53,"column":54},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":54},"end":{"row":53,"column":55},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":55},"end":{"row":53,"column":56},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":56},"end":{"row":53,"column":57},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":47},"end":{"row":53,"column":57},"action":"remove","lines":["(or any nu"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":46},"end":{"row":53,"column":47},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":44},"end":{"row":53,"column":46},"action":"remove","lines":["10"]},{"start":{"row":53,"column":44},"end":{"row":53,"column":45},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":45},"end":{"row":53,"column":46},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":46},"end":{"row":53,"column":47},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":47},"end":{"row":53,"column":48},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":48},"end":{"row":53,"column":49},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":49},"end":{"row":53,"column":50},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":50},"end":{"row":53,"column":51},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":51},"end":{"row":53,"column":52},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":52},"end":{"row":53,"column":53},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":0},"end":{"row":108,"column":0},"action":"remove","lines":["","/* Shortcut, this is the same as the while loop above:","for (var so_far = 1; so_far <= 10000; so_far += 1) {","    console.log(so_far, seconds);","}","*/","","/* Conditional operators ","// && and","if (seconds >= 10 && seconds <= 20) {","    console.log(\"seconds is between 10 and 20 inclusive\");","}","","// || or","// == exact comparison -- never use = for comparison","if (seconds == 15 || seconds == 30 || seconds == 45 || seconds == 0) {","    console.log(\"the second hand is perpenidicular\");","}","","if ((seconds >= 10 && seconds <= 20) || (seconds >= 30 && seconds <= 40)) {","    console.log(\"seconds is between 10 and 20, or between 30 and 40\");","}","","// ! not","if (seconds != 0) {","    console.log(\"seconds is not 0\")","}","*/","","    ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["  // Every time a request comes in, this code is run",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":6},"action":"remove","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["  // Send the response header to the browser","  // Status code \"200 OK\"","  // Content type HTML",""]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":6,"column":4},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":2},"end":{"row":7,"column":4},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":8,"column":4},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":40},"end":{"row":11,"column":41},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":43},"end":{"row":11,"column":44},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":44},"end":{"row":11,"column":45},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":45},"end":{"row":11,"column":46},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":46},"end":{"row":11,"column":47},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":47},"end":{"row":11,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":48},"end":{"row":11,"column":49},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":49},"end":{"row":11,"column":50},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":50},"end":{"row":11,"column":51},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":51},"end":{"row":11,"column":52},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":52},"end":{"row":11,"column":53},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":53},"end":{"row":11,"column":54},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["    // Show a clock",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":3},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["   "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["        // ",""]},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["  // This only goes to the server's console, not to the browser",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"insert","lines":["    "]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":0},"end":{"row":16,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422133616238}