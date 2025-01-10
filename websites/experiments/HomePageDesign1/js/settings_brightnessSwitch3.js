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

console.log(baseCol1_bg_bright_js);

function brightnessFunctionJs() {

    

    function changeMode() {

        

        for (let i = 0, queryLength = brightness_bright_jsQuery.length; i < queryLength; i++) {
            console.log("Array nr:", i);

            let darkMode = false;
            
            for (let ia = 0; ia < brightness_bright_jsQuery[i].length; ia++) {
                console.log( brightness_bright_jsQuery[i[ia]] );
    
                let darkMode = false;

                darkMode == false;

                console.log(brightness_bright_jsClass[ia]);

                if (queryLength[i[ia]]) {
                    darkMode == true;
                    console.log(222);

                    // gets item from array position [i] and uses b as an array as its secondary get, 
                // to find out the querys item position.
                let arrayItem = brightness_bright_jsQuery[i][ia];

                // temporarily saves the original id for later use.
                let arrayItemTempIdSave = arrayItem.getAttribute("id",[i][ia]);
                
                // debug
                // console.log("original id: ", arrayItemTempIdSave);
                
                // defines id as item's id + temp id
                let arrayItemId = arrayItem.id=[arrayItem.id]+" "+i+"col_Id"+ia;

                // gets element by temp id, adds a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.add(brightness_dark_jsClass[i]);
                
                // gets element by temp id, removes a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.remove(brightness_bright_jsClass[i]);
                
                // removes the tempid and adds saved previous id's
                arrayItem.id=arrayItemTempIdSave;


                } else {
                    console.log(0);



                 // gets item from array position [i] and uses b as an array as its secondary get, 
                // to find out the querys item position.
                let arrayItem = brightness_bright_jsQuery[i][ia];

                // temporarily saves the original id for later use.
                let arrayItemTempIdSave = arrayItem.getAttribute("id",[i][ia]);
                
                // debug
                // console.log("original id: ", arrayItemTempIdSave);
                
                // defines id as item's id + temp id
                let arrayItemId = arrayItem.id=[arrayItem.id]+" "+i+"col_Id"+ia;

                // gets element by temp id, adds a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.add(brightness_bright_jsClass[i]);
                
                // gets element by temp id, removes a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.remove(brightness_dark_jsClass[i]);
                
                // removes the tempid and adds saved previous id's
                arrayItem.id=arrayItemTempIdSave;
                }
    
            }
        }
    }

    changeMode();

    let brightnessDark = false;
    

    
}