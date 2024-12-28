// array elements
let baseCol1_bg_bright_js = document.querySelectorAll(".baseCol_1_bg");
let baseCol2_bg_bright_js = document.querySelectorAll(".baseCol_2_bg");

let secoCol1_bg_bright_js = document.querySelectorAll(".secoCol_1_bg");
let secoCol2_bg_bright_js = document.querySelectorAll(".secoCol_2_bg");

let keysCol1_bg_bright_js = document.querySelectorAll(".keysCol_1_bg");


let baseCol1_bg_dark_js = ".baseCol_1_bgDark";
let baseCol2_bg_dark_js = ".baseCol_2_bgDark";

let secoCol1_bg_dark_js = ".secoCol_1_bgDark";
let secoCol2_bg_dark_js = ".secoCol_2_bgDark";

let keysCol1_bg_dark_js = ".keysCol_1_bgDark";

// arrays
let brightness_bright_js = [baseCol1_bg_bright_js, baseCol2_bg_bright_js, secoCol1_bg_bright_js, secoCol2_bg_bright_js, keysCol1_bg_bright_js];
let brightness_dark_js = [baseCol1_bg_dark_js, baseCol2_bg_dark_js, secoCol1_bg_dark_js, secoCol2_bg_dark_js, keysCol1_bg_dark_js];

// get array by i, add id, remove class i, add class opposite i.
function brightnessFunctionJs() {

    let col_Id="tmp";



    for (i=0; i <= brightness_bright_js.length; i++) {
        console.log("array item:",String(i));
        
        //select by querryAll per array i
        //create id per i which is 
        //different from eachother.
        // document.getElementById(i).classList.add(brightness_dark_js[i]);
        // document.getElementById(i).classList.remove(i);
        // document.getElementById(i).id.replace=i;
                



            // if b <= brightness arrays item i .length; b++
        for (b = 0; b< brightness_bright_js[i].length; b++) {
            console.log(b+"_item");
            
            // idCategory = 0;


            let arrayItem = brightness_bright_js[i][b];
            
            // let arrayItemId = arrayItem.id=i+col_Id+b;
            // let arrayItemId = arrayItem.setAttribute("id",i+col_Id+b);
            let arrayItemId = arrayItem.id=[arrayItem.id]+" "+i+col_Id+b;

            // document.getElementById(arrayItemId).classList.add(brightness_dark_js[i]);
            // document.getElementById(arrayItemId).classList.remove(brightness_bright_js[i]);

        }
    }

}

brightnessFunctionJs();
