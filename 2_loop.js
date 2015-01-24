// "While" loop

var now = new Date();

var seconds = now.getSeconds();

var so_far = 1;
while (so_far <= seconds) {
    console.log("*");
    so_far += 1; // Increase so_far by 1
}


// "For" loop is a shorter syntax for a while loop. They can always be used interchangeably,
// but I think the more esoteric syntax of the "for" loop makes it harder for beginners.
// This is the same as the while loop above:
/* 
for (var so_far = 1; so_far <= seconds; so_far += 1) {
    console.log("*");
}
*/
