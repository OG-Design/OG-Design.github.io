
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
    

    for (let i = 0 ; i<usrAnswer.length; i++) {
        console.log(i);

        

        if (usrAnswer[i]==corAnswer[i]) {
            points++;
        }
    }
    console.log(points);
}



// Få litt perspektiv --END


// quiz --END