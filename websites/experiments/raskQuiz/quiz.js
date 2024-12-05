document.getElementById("resultFrame").addEventListener("submit", formSending);
// console.log(test);
function formSending(event) {

    event.preventDefault();

    let correctAnswer = 0;

    let addTogether = document.getElementById("q1").value;

    if (addTogether == 59+34) {
        console.log("correct");
        correctAnswer = correctAnswer ++;
        console.log(correctAnswer);
    } else {
        console.log("debug1");
    }

    console.log("debug2");
    
}

// formSending();
