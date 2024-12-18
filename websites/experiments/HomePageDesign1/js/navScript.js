// defines nav
let headerNav_logoMenu_js = document.querySelector(".headerNav_logoMenu_html");
let headerNav_dotMenu_js = document.querySelector(".headerNav_dotMenu_html");

// defines headerLogo
let headerLogo_js = document.querySelector(".headerLogo");



// hides header nav
headerNav_logoMenu_js.style.display="none";
headerNav_dotMenu_js.style.display="none";

// listens for click and executes navMenuFunction on click
document.querySelector(".logoButton_html").addEventListener("click", headerNav_logoMenuFunction);
document.querySelector(".dotMenuButton_html").addEventListener("click", headerNav_dotMenu_jsFunction);


// listens for click event temp fix 
document.querySelector(".mainBody").addEventListener("click", generalClickFunction);


// if main in body clicked then disable menu visibility
function generalClickFunction() {
    if (headerNav_logoMenu_js||headerNav_dotMenu_js.style.display=="block") {
        headerNav_logoMenu_js.style.display="none";
        headerNav_dotMenu_js.style.display="none";
    }        
}


// event function headerNav_logoMenuFunction
function headerNav_logoMenuFunction() {


    // double equals for compare
    if (headerNav_logoMenu_js.style.display=="none") {
        // shows nav
        headerNav_logoMenu_js.style.display="block";

        
        // removes headerLogo animation
        headerLogo_js.classList.remove("headerLogo_animation_css");        

        // debug
        console.log("visible: headerNav ");
    } 
    else {
        // hides nav
        headerNav_logoMenu_js.style.display="none";

        // adds headerLogo animation
        // headerNav_logoMenuFunction.classList.add("headerLogo_animation_css");  

        // debug
        console.log("invisible: headerNav ");
    }
}

// event function headerNav_logoMenuFunction
function headerNav_dotMenu_jsFunction() {


    // double equals for compare
    if (headerNav_dotMenu_js.style.display=="none") {
        // shows nav
        headerNav_dotMenu_js.style.display="block";

        
        // removes headerLogo animation
        headerNav_dotMenu_js.classList.remove("headerLogo_animation_css");        

        // debug
        console.log("visible: headerNav ");
    } 
    else {
        // hides nav
        headerNav_dotMenu_js.style.display="none";

        // adds headerLogo animation
        // headerNav_dotMenu_js.classList.add("headerLogo_animation_css");  

        // debug
        console.log("invisible: headerNav ");
    }
}