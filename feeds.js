var unirest = require('unirest');




// =========================================================
// =
// =   SETUP
// =


// We can store our feed data in here so it's accessible in index.js.
var exports = module.exports = {};


// We'll use Mashape for both weather and shuttle bus API's:
// Log in to https://www.mashape.com/ using your GitHub credentials.
// Replace the below with your own key.
var mashape_key = 'H0xOUHdiDQmshnxW3o2xiR3y82tIp1xaHMFjsn443U2QrT84xA';



var green_hall_lat = 41.308317;
var green_hall_lon = -72.932979;

var yale_shuttle_agency_id = 128;
var chapel_york_stop_id = 4096834;



// Call get_weather every 5 minutes, and get_bus every 60 seconds.
// We do this asynchronously, independent of any incoming web requests.
// This way the data is already available when we do get an incoming web request.

var weather_interval = setInterval(get_weather, 5 * 60 * 1000);
var bus_interval = setInterval(get_bus, 60 * 1000);

// Also call them both now, at server startup:

get_weather();
get_bus();




// =========================================================
// =
// =   WEATHER
// =


// When this function is called, get the weather at Green Hall and store it in the exports.weather variable.
// We use https://www.mashape.com/community/open-weather-map
function get_weather() {
  
    console.log("Getting weather");
    
    unirest.get("https://community-open-weather-map.p.mashape.com/weather")
      .query({lat: green_hall_lat, lon: green_hall_lon, units: 'imperial'})
      .header("X-Mashape-Key", mashape_key)
      .end(function (result) {
        
        exports.weather = result.body;
        console.log("Weather", result.status, exports.weather);
        
      });
}




// =========================================================
// =
// =   BUS
// =



// When this function is called, get the bus arrivals at Green Hall and store it in the exports.bus variable.
// We use https://www.mashape.com/transloc/openapi-1-2
// See also https://transloc.zendesk.com/hc/en-us/articles/201996268-API-Documentation
function get_bus() {
  
    console.log("Getting bus");
    
    unirest.get("https://transloc-api-1-2.p.mashape.com/arrival-estimates.json")
      .query({agencies: yale_shuttle_agency_id, stops: chapel_york_stop_id})
      .header("X-Mashape-Key", mashape_key)
      .end(function (result) {
        
        exports.bus = result.body.data[0].arrivals;
        console.log("Bus", result.status, exports.bus);
        
      });
}
