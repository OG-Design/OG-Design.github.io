
// score functions --START
// score value
let score = Math.round(0);

// score encrement value
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
    scoreDisplayJs.innerText = Math.round(score);

}
// student_Button event and function --END
// score functions --END






// headerMenu --START
let headerMenu_EducationalFacilitiesButtonClick = document.getElementById("html_menuButton_EducationalFacilities").addEventListener("click", headerMenu_EducationalFacilitiesJsFunction);
let headerMenu_EducationalFacilities_menuFrameJs = document.getElementById("displayMenu_EducationalFacilities").style.display = "none";


// menu for educational facilities function --START
function headerMenu_EducationalFacilitiesJsFunction() {
    // debug
    console.log("debug-function headerMenu_EducationalFacilitiesButtonClick");
    
    // display block if display is == to none, else display none on click.
    if (document.getElementById("displayMenu_EducationalFacilities").style.display == "none") {
        document.getElementById("displayMenu_EducationalFacilities").style.display = "block";
    } else {
        document.getElementById("displayMenu_EducationalFacilities").style.display = "none";
    }


}


// smallSchool --START
let smallSchoolJs = document.getElementById("html_Button_smallSchool").addEventListener("click", smallSchoolJsFunction);

let smallSchoolJS_Price = 12;
let smallSchoolJS_Price_display = document.getElementById("html_price_smallSchool");

 
function smallSchoolJsFunction() {

    // if score same or higher then score - scoreDisplayJs else remain same.
    if (score >= smallSchoolJS_Price ) {

        console.log("Purchased SmallSchool");
        
        
        // gained after purchace
        scoreIncrementValue = scoreIncrementValue + 1;
        
        // price after purchace
        smallSchoolJS_Price = smallSchoolJS_Price * 1.25;
        
        console.log(score);

        // match score with expence and round after purchace
        score = Math.round(score - smallSchoolJS_Price);

        // display correct price and round after purchace
        smallSchoolJS_Price_display.innerText = Math.round(smallSchoolJS_Price);

    } else {

        console.log("score was to low to purchase SmallSchool");
        score = Math.round(score);
    }

    // updateScore
    scoreDisplayJs.innerText = score;

}
// smallSchool --END



// menu for educational facilities function --END

// headerMenu --END