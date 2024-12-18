// defines element1 as document with id="1"
let element1 = document.getElementById("1");

// defines rect as element1's x and y position data
let rect = element1.getBoundingClientRect();

// creates a constant of x/y + window.scrollX/Y
 
// window.scrollX  determines where element1 is relative to the left of the window. 
// I am not 100% sure wether or not it's position is recorded relative to the parent it is in,
// or if it's the browser window bounds. I believe it's window bounds data.
const x = rect.left + window.scrollX;

// window.scrollX  determines where element1 is relative to the top of the window.
const y = rect.top + window.scrollY;

console.log(document.getElementById("1"));
console.log(x, " ", y);
