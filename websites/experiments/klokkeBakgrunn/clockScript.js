// time date
let time = Date();

// find id, change text to time
document.getElementById("time_js").innerText = time;

// sets initial time
let timeNew = new Date();

// time definitions
let hours=timeNew.getHours();
let minutes=timeNew.getMinutes();


// refresh rate ms
setInterval( repeatInterval, 1000);

// repeats setInterval and changes html to current time
function repeatInterval() {

    
    console.log(typeof hours);
    console.log(hours);

    console.log(typeof minutes)
    console.log(minutes);

    // find id, change text to time
    document.getElementById("time_js").innerText=hours, minutes;
    
    
    // checks time
    timeNew = new Date();
}

// setInterval();