// array elements
let baseCol1_bg_bright_js = document.querySelectorAll(".baseCol_1_bg");
let baseCol2_bg_bright_js = document.querySelectorAll(".baseCol_2_bg");

let secoCol1_bg_bright_js = document.querySelectorAll(".secoCol_1_bg");
let secoCol2_bg_bright_js = document.querySelectorAll(".secoCol_2_bg");

let keysCol1_bg_bright_js = document.querySelectorAll(".keysCol_1_bg");


let baseCol1_bg_dark_js = document.querySelectorAll(".baseCol_1_bgDark");
let baseCol2_bg_dark_js = document.querySelectorAll(".baseCol_2_bgDark");

let secoCol1_bg_dark_js = document.querySelectorAll(".secoCol_1_bgDark");
let secoCol2_bg_dark_js = document.querySelectorAll(".secoCol_2_bgDark");

let keysCol1_bg_dark_js = document.querySelectorAll(".keysCol_1_bgDark");

// arrays
let brightness_bright_js = [baseCol1_bg_bright_js, baseCol2_bg_bright_js, secoCol1_bg_bright_js, secoCol2_bg_bright_js, keysCol1_bg_bright_js];
let brightness_dark_js = [baseCol1_bg_dark_js, baseCol2_bg_dark_js, secoCol1_bg_dark_js, secoCol2_bg_dark_js, keysCol1_bg_dark_js];

// get array by i, add id, remove class i, add class opposite i.
function brightnessFunctionJs() {

    for (i=0; i <= brightness_bright_js.length; i++) {
        console.log("array item:",String(i));
                
    }

}

brightnessFunctionJs();
