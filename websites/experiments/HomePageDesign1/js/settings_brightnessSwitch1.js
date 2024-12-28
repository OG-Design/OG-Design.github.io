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

    let col_Id="tmp";

    


    for (let i=0; i <= brightness_bright_jsQuery.length; i++) {
        console.log("array item:",String(i));

        if ( brightness_bright_jsQuery[i].length==0 ) {
                // if b <= brightness arrays item i .length; b++
                let a = brightness_bright_jsQuery[i];
            for (let b = 0; b< a.length; b++) {
                console.log(b+"_item");
                console.log(i);
                
                
                // idCategory = 0;

                // gets item from array position [i] and uses b as an array as its secondary get, 
                // to find out the querys item position.
                let arrayItem = brightness_bright_jsQuery[i][b];

                // temporarily saves the original id for later use.
                let arrayItemTempIdSave = arrayItem.getAttribute("id",[i][b]);
                
                // debug
                console.log("original id: ", arrayItemTempIdSave);
                
                // defines id as item's id + temp id
                let arrayItemId = arrayItem.id=[arrayItem.id]+" "+i+col_Id+b;

                // gets element by temp id, adds a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.add(brightness_dark_jsClass[i]);
                
                // gets element by temp id, removes a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.remove(brightness_bright_jsClass[i]);
                
                // removes the tempid and adds saved previous id's
                arrayItem.id=arrayItemTempIdSave;

                console.log(brightness_dark_jsQuery[i]);
            }
        } 
        if (brightness_dark_jsQuery[i] != null) {
            // if b <= brightness arrays item i .length; b++
            for (let b = 0; b< brightness_dark_jsQuery[i].length; b++) {
                console.log(b+"_item");
                
                // idCategory = 0;

                // gets item from array position [i] and uses b as an array as its secondary get, 
                // to find out the querys item position.
                let arrayItem = brightness_dark_jsQuery[i][b];

                // temporarily saves the original id for later use.
                let arrayItemTempIdSave = arrayItem.getAttribute("id",[i][b]);
                
                // debug
                console.log("original id: ", arrayItemTempIdSave);
                
                // defines id as item's id + temp id
                let arrayItemId = arrayItem.id=[arrayItem.id]+" "+i+col_Id+b;

                // gets element by temp id, adds a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.add(brightness_bright_jsClass[i]);
                
                // gets element by temp id, removes a class to the classlist by getting query data from array...
                document.getElementById(arrayItemId).classList.remove(brightness_dark_jsClass[i]);
                
                // removes the tempid and adds saved previous id's
                arrayItem.id=arrayItemTempIdSave;
                
                console.log(brightness_dark_jsQuery[i]);

            }
        }


    }

    

}

// brightnessFunctionJs();
