// time date
let time = Date();



// sets initial time
let timeNew = new Date();

// time definitions
let hours=timeNew.getHours();
let minutes=timeNew.getMinutes();
let seconds=timeNew.getSeconds();


// find id, change text to time
// direct transfer of hours and minutes doesn't work with , or +. , straight up does nothing, and + adds both values, so toString() is used.
document.getElementById("time_js").innerText = hours + " : " + minutes + " : " + seconds;


// refresh rate ms
setInterval( repeatInterval, 1000);

// repeats setInterval and changes html to current time
function repeatInterval() {
    // checks time
    timeNew = new Date();
    // convert to string
    seconds.toString();

    
    


    // find id, change text to time
    // direct transfer of hours and minutes doesn't work with , or +. , straight up does nothing, and + adds both values, so toString() is used.
    document.getElementById("time_js").innerText = hours + " : " + minutes + " : " + seconds;
    

    

    // check for datatype
    console.log(typeof minutes);
    console.log(minutes);

    // check for datatype
    console.log(typeof hours);
    console.log(hours);

    console.log(seconds);
    // find id, change text to time
    
    
    
    
}

// setInterval();