
// quiz --START

// Få litt perspektiv --START

// eventListener submit
document.getElementById("quizForm1").addEventListener("submit", checkAnswers);





// check answer function
function checkAnswers(event) {

    event.preventDefault();

    // user answer
    let usrA1 = document.getElementById("questionInput1").value;
    let usrA2 = document.getElementById("questionInput2").value;
    let usrA3 = document.getElementById("questionInput3").value;
    

    // correct answer
    const corA1 = 28*5500000/1000;
    const corA2 = 28*5500000/10000;
    const corA3 = usrA3;
    

    // user answer inputs
    let usrAnswer = [usrA1, usrA2, usrA3];

    // correct answer
    let corAnswer = [corA1, corA2, corA3];
    

    let points = 0;
    

    
    

    
    
    // loop for usrAnswer array length
    for (let i = 0 ; i<usrAnswer.length; i++) {
        console.log(i);

        
        // if user answer == correct
        if (usrAnswer[i]==corAnswer[i]) {
            points++;

            
        }
    }

    // debug
    // console.log(points);

    // document.createElement("div").appendChild().document.getElementById("1").id="pointsDisplayParent";



    // checks if element exists already, and if it is
    if ( document.getElementById("pointsUsr") != null ) {
        document.getElementById("pointsUsr").remove();
    }


    // creates score element for user input
    let createScoreElement = document.createElement("h1");
    
    createScoreElement;
    createScoreElement.setAttribute("id","pointsUsr");
    
    document.getElementById("fåLittPerspektiv_quizSvar").appendChild();
    
    document.getElementById("pointsUsr").innerText=points; 


    

    
}



// Få litt perspektiv --END


// quiz --END