

document.getElementById("resultFrame").addEventListener("submit", formSending);


function formSending(event) {

    event.preventDefault();

    

    // q is list. 0 is question number
    let q0_js = document.getElementById("q0").value;
    let a0_js = "93";
    
    let q1_js = document.getElementById("q1").value;
    let a1_js = "alphabet."
    
    let q2_js = document.getElementById("q2").value; 
    let a2_js = "481";

    let q3_js = document.getElementById("q3").value;
    let a3_js = "180";

    // questions array
    let question = [q0_js, q1_js, q2_js, q3_js];
    
    // answers array
    let answer = [a0_js, a1_js, a2_js, a3_js];


    // correct answer until usr input
    let correctAnswer = 0;
    
    // for loop
    // 
    // i = 0; i smaller than question.length; i++
    // i is 0; i smaller than questino.length; repeats until i is no longer smaler than question.length.
    
    for (let i = 0; i < question.length; i++) {
        if(question[i]===answer[i]) {
            

            correctAnswer++;


            
        } else {

        }
    }

    console.log(correctAnswer);
    
    // correct answer value displayed in html
    document.getElementById("html_points").innerText= correctAnswer;

    document.getElementById("html_pointsMax").innerText = question.length;

}

//  formSending();
// array returns value -1 if not found.





