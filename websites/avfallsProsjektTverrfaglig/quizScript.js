// quiz --START

// Få litt perspektiv --START

// eventListener submit
document.getElementById("quizForm0").addEventListener("submit", checkAnswers_quiz_0);





// check answer function
function checkAnswers_quiz_0(event) {

    event.preventDefault();

    // user answer
    let usrA1 = document.getElementById("questionInput_diagram1").value;
    let usrA2 = document.getElementById("questionInput_diagram2").value;
    let usrA3 = document.getElementById("questionInput_diagram3").value;
    let usrA1Style = document.getElementById("questionInput_diagram1").style;
    let usrA2Style = document.getElementById("questionInput_diagram2").style;
    let usrA3Style = document.getElementById("questionInput_diagram3").style;
    // correct answer
    // const corA1 = 28*5500000/1000;
    // const corA2 = 28*5500000/10000;
    // const corA3 = usrA3;
    

    // user answer inputs
    let usrAnswer = [usrA1, usrA2, usrA3];
    let usrAnswerStyle = [usrA1Style, usrA2Style, usrA3Style];

    // correct answer
    // let corAnswer = [corA1, corA2, corA3];
    

    let points = 0;
    

    
    

    
    
    // loop for usrAnswer array length
    for (let i = 0 ; i<usrAnswer.length; i++) {
        console.log(i);

        
        // if user answer == correct
        if ( usrAnswer[i] == corAnswer[i] ) {
            points++;
            // document.getElementById()

            usrAnswerStyle[i].backgroundColor="#008000";
            console.log("nr", i," correct");
        }
        else if (usrAnswer[i] != corAnswer[i]){
            usrAnswerStyle[i].backgroundColor="#ff2100";
        }
    }

    // debug
    // console.log(points);

    // document.createElement("div").appendChild().document.getElementById("1").id="pointsDisplayParent";

    let usr_answerId = "tmp_answrId";
    let max_correctId = "tmp_maxId";

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

    document.getElementById("fåLittPerspektiv_quizSvar_poengBruker").appendChild(pointsElement);
    document.getElementById(usr_answerId).innerText=points;
    

    document.getElementById("fåLittPerspektiv_quizSvar_poengMax").appendChild(pointsElement1);
    document.getElementById(max_correctId).innerText=corAnswer.length;

    
    // keysCol1

    if ( document.querySelectorAll(".keysCol_1") != null) {
        for (i=0; i<document.querySelectorAll(".keysCol_1").length;i++){ 
            
            document.getElementById(usr_answerId && max_correctId).classList.add("keysCol_1Dark");
            document.getElementById(usr_answerId && max_correctId).classList.remove("keysCol_1");
            
        }    
    } else if ( document.querySelectorAll(".keysCol_1Dark") != null) {
        for (i=0; i<document.querySelectorAll(".keysCol_1").length;i++){
            document.getElementById(usr_answerId && max_correctId).classList.add("keysCol_1Dark");
            document.getElementById(usr_answerId && max_correctId).classList.remove("keysCol_1");
        }
    }
    
    
}



// Få litt perspektiv --END


// quiz0 --END


// quiz --START

// Få litt perspektiv --START

// eventListener submit
document.getElementById("quizForm1").addEventListener("submit", checkAnswers_quiz_1);





// check answer function
function checkAnswers_quiz_1(event) {

    event.preventDefault();

    // user answer
    let usrA1 = document.getElementById("questionInput1").value;
    let usrA2 = document.getElementById("questionInput2").value;
    let usrA3 = document.getElementById("questionInput3").value;
    let usrA1Style = document.getElementById("questionInput1").style;
    let usrA2Style = document.getElementById("questionInput2").style;
    let usrA3Style = document.getElementById("questionInput3").style;
    // correct answer
    const corA1 = 28*5500000/1000;
    const corA2 = 28*5500000/10000;
    const corA3 = usrA3;
    

    // user answer inputs
    let usrAnswer = [usrA1, usrA2, usrA3];
    let usrAnswerStyle = [usrA1Style, usrA2Style, usrA3Style];

    // correct answer
    let corAnswer = [corA1, corA2, corA3];
    

    let points = 0;
    

    
    

    
    
    // loop for usrAnswer array length
    for (let i = 0 ; i<usrAnswer.length; i++) {
        console.log(i);

        
        // if user answer == correct
        if ( usrAnswer[i] == corAnswer[i] ) {
            points++;
            // document.getElementById()

            usrAnswerStyle[i].backgroundColor="#008000";
            console.log("nr", i," correct");
        }
        else if (usrAnswer[i] != corAnswer[i]){
            usrAnswerStyle[i].backgroundColor="#ff2100";
        }
    }

    // debug
    // console.log(points);

    // document.createElement("div").appendChild().document.getElementById("1").id="pointsDisplayParent";

    let usr_answerId = "tmp_answrId";
    let max_correctId = "tmp_maxId";

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

    document.getElementById("fåLittPerspektiv_quizSvar_poengBruker").appendChild(pointsElement);
    document.getElementById(usr_answerId).innerText=points;
    

    document.getElementById("fåLittPerspektiv_quizSvar_poengMax").appendChild(pointsElement1);
    document.getElementById(max_correctId).innerText=corAnswer.length;

    
    // keysCol1

    if ( document.querySelectorAll(".keysCol_1") != null) {
        for (i=0; i<document.querySelectorAll(".keysCol_1").length;i++){ 
            
            document.getElementById(usr_answerId && max_correctId).classList.add("keysCol_1Dark");
            document.getElementById(usr_answerId && max_correctId).classList.remove("keysCol_1");
            
        }    
    } else if ( document.querySelectorAll(".keysCol_1Dark") != null) {
        for (i=0; i<document.querySelectorAll(".keysCol_1").length;i++){
            document.getElementById(usr_answerId && max_correctId).classList.add("keysCol_1Dark");
            document.getElementById(usr_answerId && max_correctId).classList.remove("keysCol_1");
        }
    }
    
    
}



// Få litt perspektiv --END


// quiz --END