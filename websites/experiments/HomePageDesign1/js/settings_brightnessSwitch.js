let selectCol = document.querySelectorAll(".baseCol_1_bg");

let brigthnessSwitch_js = document.getElementById("brightnessSwitch_html");


brigthnessSwitch_js.addEventListener("click", brightnessSwitch_function);

let array = [];
// for (let i = 0; i <= selectCol.length ; i++) {
    
//     console.log(i);

//     let idValueName = "colored_"+i;
//     console.log( idValueName );
    
//     document.querySelector

//     array.length++;
//     console.log(array);

//     console.log(selectCol.id);
    
//     if (document.getElementById("colored_"+i)) {

//     } else {
//         document.querySelector
//     }

    // document.getElementById(idValueName).removeAttribute(".baseCol_1_bg");
    

// }

var currentCol = [];
for (let i = 0; i <= selectCol.length; i++) {
    // var currentCol = selectCol[i];
    var id = "colorId_"+i;
    console.log(id);

    let aaa = document.querySelector(".baseCol_1_bg");
    aaa.appendChild(id);
    // document.getElementById(id).classList.remove(".baseCol_1_bg");
    document.getElementById(id).removeAttribute="class",".baseCol_1_bg";
    
}   


















let baseCol_1_bg = document.querySelectorAll(".baseCol_1_bg");
function brightnessSwitch_function() {

    // for(let i = 0; i<brightColorTheme.length; i++) {
    //     console.log(i);
    //     brightColorTheme;
    // }
    
    // brightColorTheme.classList.remove=".baseCol_1_bg";
    // let brightColorTheme = [baseCol_1_bg, baseCol_2_bg];
    // brightColorTheme.classList.remove(".baseCol_1_bg");

    console.log("brightnessFunction clicked");


    // when click all colors of baseCol_1_bg change to baseCol_1_bgDark
    // document.getElementsByClassName(".baseCol_1_bg").classList.remove();




}

let base_color_bg_js = []

// console.log(document.querySelector(".baseCol_1_bg").getAttributeNames);
// console.log(document.querySelector(".baseCol_1_bg").classList.remove(".baseCol_1_bg"));
// document.querySelector(".baseCol_1_bg").classList.remove(".baseCol_1_bg");

// works on first object
// document.querySelector(".baseCol_1_bg").classList.remove("baseCol_1_bg");

// use if statement and for loop to go through all of the elements



