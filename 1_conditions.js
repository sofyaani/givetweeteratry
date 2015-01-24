// Conditional operators

var now = new Date();
    
var seconds = now.getSeconds();

console.log("seconds is " + seconds);

// && means "and"
if (seconds >= 10 && seconds <= 20) {
    console.log("seconds is between 10 and 20 inclusive");
}

// || means "or"
// NEVER use single = for comparison, it will always lead to a bug.
// Use == for comparison. You can also use === for comparison if you prefer.
// The subtle difference is that == considers a number to be equal to the same string:
//   (1 == "1") is true, but === does not: (1 === "1") is false
if (seconds == 15 || seconds == 30 || seconds == 45 || seconds == 0) {
    console.log("the second hand is perpenidicular");
}

// Use parentheses for grouping to make the logic explicit
if ((seconds >= 10 && seconds <= 20) || (seconds >= 30 && seconds <= 40)) {
    console.log("seconds is between 10 and 20, or between 30 and 40");
}

// ! means "not"
if (seconds != 0) {
    console.log("seconds is not 0");
}
if (!(seconds >= 10 && seconds <= 20)) {
    console.log("seconds is not between 10 and 20");
}
