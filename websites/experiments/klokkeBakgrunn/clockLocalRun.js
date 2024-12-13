// script to run clock locally after getting time once.

// gets time
let time = Date();

// new time on load
let newTime = new Date();
newTime;

// console.log(newTime, time);


// gets time
let hours = newTime.getHours();
let minutes = newTime.getMinutes();
let seconds = newTime.getSeconds(); 


setInterval(localClock, 1000);


function localClock () {
    // new time refresh
    newTime= new Date();

    // if sec same as 59 add a min and reset sec to 0 else sec+1
    if (seconds === 59) {
        minutes++
        seconds = 0;
    } else {
        seconds ++;
    }

    // if min same as 59 add an hour and reset min
    if (minutes === 59 && seconds === 59) {
        hours ++;
        minutes = 0;
    }

    // if hour same as 23, and min same as 59 set hour to 0
    if (hours === 23 && minutes === 59 ) {
        hours = 0;
    }

    document.getElementById("time_js").innerText=hours + " : " + minutes + " : " + seconds;
        

    console.clear();
    
    
    // used to check consistancy
    // local
    // console.log("local");
    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    
    // // external
    // console.log("external");
    // console.log(newTime.getSeconds());
    // console.log(newTime.getMinutes());
    // console.log(newTime.getHours());
    
}


