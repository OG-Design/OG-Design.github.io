
// score value
let score = Math.round(0);

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
    scoreDisplayJs.innerText = Math.round(score);

}
// student_Button event and function --END



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


// Button_smallSchool --START

let smallSchoolJs = document.getElementById("html_Button_smallSchool").addEventListener("click", smallSchoolJsFunction);
let smallSchoolJS_Price = 12;

 
function smallSchoolJsFunction() {

    // if score same or higher then score - scoreDisplayJs else remain same.
    if (score >= smallSchoolJS_Price ) {

        console.log("Purchased SmallSchool");
        
        

        scoreIncrementValue = scoreIncrementValue + 1;
        
        smallSchoolJS_Price = smallSchoolJS_Price * 1.25;
        
        console.log(score);


        score = Math.ceil(score - smallSchoolJS_Price);

    } else {

        console.log("score was to low to purchase SmallSchool");
        score = Math.round(score);
    }

    // updateScore
    scoreDisplayJs.innerText = score;

}

// Button_smallSchool --END



// menu for educational facilities function --END

// headerMenu --END