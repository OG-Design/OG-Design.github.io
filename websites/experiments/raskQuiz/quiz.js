document.getElementById("resultFrame").addEventListener("submit", formSending);
// console.log(test);
function formSending(event) {

    event.preventDefault();

    let correctAnswer = 0;

    // q is list. 0 is question number
    let q0_js = document.getElementById("q0").value;
    let a0_js = "93";
    
    let q1_js = document.getElementById("q1").value;
    
    
    let q2_js = document.getElementById("q2").value; 



    // questions array
    let question = [q0_js, q1_js, q2_js];
    
    // answers array
    let answer = [a0_js, "alphabet", ""];

    // for loop
    for (let i = 0; i < question.length; i++) {

        if (question == answer) {
        
            console.log("correct");
            correctAnswer == correctAnswer ++;
            console.log(correctAnswer);
            
        } else {
            console.log("wrong");
        }

        console.log("loop complete");
    
    }
    
    // correct answer value displayed in html
    document.getElementById("points").innerText= correctAnswer;

Array.

}

// formSending();
