// defines nav
let headerNav_js = document.querySelector(".headerNav_html");

// defines headerLogo
let headerLogo_js = document.querySelector(".headerLogo");



// hides header nav
headerNav_js.style.display="none";

// listens for click and executes navMenuFunction on click
document.querySelector(".logoButton_html").addEventListener("click", navMenuFunction);

// listens for click event temp fix 
document.querySelector(".mainBody").addEventListener("click", generalClickFunction)


// if main in body clicked then disable menu visibility
function generalClickFunction() {
    if (headerNav_js.style.display=="block") {
        headerNav_js.style.display="none";
    }        
}


// event function navMenu
function navMenuFunction() {


    // double equals for compare
    if (headerNav_js.style.display=="none") {
        // shows nav
        headerNav_js.style.display="block";

        
        // removes headerLogo animation
        headerLogo_js.classList.remove("headerLogo_animation_css");        

        // debug
        console.log("visible: headerNav ");
    } 
    else {
        // hides nav
        headerNav_js.style.display="none";

        // adds headerLogo animation
        // headerLogo_js.classList.add("headerLogo_animation_css");  

        // debug
        console.log("invisible: headerNav ");
    }
}
