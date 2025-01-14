
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

    let usr_answerId = "tmp_answrId";
    let max_correctId = "tmp_correctId";

    // checks if element exists already, and if it is
    if ( document.getElementById(usr_answerId) != null && document.getElementById(max_correctId) != null  ) {
        document.getElementById(usr_answerId).remove();
        document.getElementById(max_correctId).remove();
    }



    let pointsElement = document.createElement("h1");

    let pointsElement1 = document.createElement("h1");
    pointsElement;
    pointsElement.id=usr_answerId;

    pointsElement1;
    pointsElement1.id=max_correctId;

    document.getElementById("fåLittPerspektiv_quizSvar").appendChild(pointsElement);
    document.getElementById(usr_answerId).innerText=points;
    

    document.getElementById("fåLittPerspektiv_quizSvar").appendChild(pointsElement1);
    document.getElementById(max_correctId).innerText=corAnswer.length;

    // keysCol1
    if ( document.querySelectorAll(".keysCol_1") != null) { 
        document.getElementById(usr_answerId).classList.add("keysCol_1");
        document.getElementById(usr_answerId).classList.remove("keysCol_1Dark");    
    }
    if ( document.querySelectorAll(".keysCol_1Dark") != null) {
        document.getElementById(usr_answerId).classList.add("keysCol_1Dark");
        document.getElementById(usr_answerId).classList.remove("keysCol_1");
    }
    
}



// Få litt perspektiv --END


// quiz --END