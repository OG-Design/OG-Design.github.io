let score = 0;


// button event and function --START
document.getElementById("html_buttonClick").addEventListener("click", buttonClick);

function buttonClick() {
    console.log("debug-function buttonClick");
    
    // incremental increase
    score ++;
    
    // check score
    console.log("Unemployed: ", score);


}
// button event and function --END