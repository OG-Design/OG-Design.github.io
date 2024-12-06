
// score value
let score = 0;

// score encrease value
let scoreIncrementValue = 1;




// student_Button event and function --START
document.getElementById("html_buttonClick").addEventListener("click", student_ButtonClickJs);

// score display
let scoreDisplayJs = document.getElementById("html_scoreDisplayValue");

function student_ButtonClickJs() {
    console.log("debug-function student_buttonClick");
    
    // incremental increase
    // score ++;
    // custom incremental increase
    score = score + scoreIncrementValue;

    

    // check score
    console.log("Unemployed: ", score);

    // write score to html.
    scoreDisplayJs.innerText = score;

}
// student_Button event and function --END



// headerMenu --START
let headerMenu_EducationalFacilitiesButtonClick = document.getElementById("html_menuButton_EducationalFacilities").addEventListener("click", headerMenu_EducationalButtonClickFacilitiesJsFunction);
let headerMenu_EducationalFacilities_menuFrameJs = document.getElementById("displayMenu_EducationalFacilities").style.display = "none";

function headerMenu_EducationalButtonClickFacilitiesJsFunction() {
    // debug
    console.log("debug-function headerMenu_EducationalFacilitiesButtonClick");
    
    headerMenu_EducationalFacilities_menuFrameJs.style.display ="";


}
// headerMenu --END