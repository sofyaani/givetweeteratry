// Declare a new variable, and store the current time in it
var now = new Date();

// Output it to the console
console.log(now);

// From that variable, store the various time components into new variables
var year = now.getFullYear();
var month = now.getMonth(); // 0-11 !
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var ms = now.getMilliseconds(); // 0-999

// Code in the if block happens if the condition is true
// The condition must be in (parentheses)
// The block of statements to execute if the condition is true, must be in {braces}
if (second < 15) {
    
    // We are only in here if the second is less than 15
    
    console.log("First quarter of the minute");
    
    // This question is only even asked if second is < 15
    if (ms < 500) {
        
        console.log("Top of the second");
        
    }
    
}

// Code in the else block happens if the PREVIOUS condition is false
// In this case, the previous condition was "if (second < 15)"
// So only if second was NOT less than 15, we ask if second is < 30
else if (second < 30) {
 
    console.log("=================");
 
    console.log("Top of the minute");
    
}

// Finally if none of the above conditions were met, do this last "else" block
else {
    
    console.log("Bottom of the minute");
    
}

// This code happens no matter what
console.log("Done");
