document.getElementById("brightnessSwitch_html").addEventListener("click", brightnessFunctionJs);

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
let brightness_bright_jsQuery = [baseCol1_bg_bright_js, baseCol2_bg_bright_js, secoCol1_bg_bright_js, secoCol2_bg_bright_js, keysCol1_bg_bright_js];
let brightness_bright_jsClass = ["baseCol_1_bg", "baseCol_2_bg", "secoCol_1_bg", "secoCol_2_bg", "keysCol_1_bg"];

let brightness_dark_jsQuery = [baseCol1_bg_dark_js, baseCol2_bg_dark_js, secoCol1_bg_dark_js, secoCol2_bg_dark_js, keysCol1_bg_dark_js];
let brightness_dark_jsClass = ["baseCol_1_bgDark", "baseCol_2_bgDark", "secoCol_1_bgDark", "secoCol_2_bgDark", "keysCol_1_bgDark"];
// get array by i, add id, remove class i, add class opposite i.



function brightnessFunctionJs() {
    for (let i = 0; i< brightness_bright_jsQuery.length; i++) {
        // debug
        console.log("brightness_bright_jsQuery array gone through: ",i+1," amount of times");

        for (let a = 0; a < brightness_bright_jsQuery[i].length; a++) {

            
            if ( i[a]==empty ){
                console.log("output");
            }
           
            
            
          
            
            console.log("arrayItem: ", a);
            
            
            
        }

    }
}
