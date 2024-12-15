// defines nav
let headerNav_js = document.querySelector(".headerNav_html");
// hides header nav
headerNav_js.style.display="none";

// listens for click and executes navMenuFunction on click
document.querySelector(".logoButton_html").addEventListener("click", navMenuFunction);

// event function navMenu
function navMenuFunction() {
    // double equals for compare
    if (headerNav_js.style.display=="none") {
        // shows nav
        headerNav_js.style.display="block";
        // debug
        console.log("visible: headerNav ");
    } 
    else {
        // hides nav
        headerNav_js.style.display="none";
        // debug
        console.log("invisible: headerNav ");
    }
}
