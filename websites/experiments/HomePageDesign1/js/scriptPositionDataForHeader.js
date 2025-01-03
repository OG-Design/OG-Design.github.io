// defines element1 as document with id="1"
let headerPos = document.getElementById("headerId");

// defines rect as element1's x and y position data
let rect = headerPos.getBoundingClientRect();


// creates a variable of x/y + window.scrollX/Y
 
// window.scrollX  determines where element1 is relative to the left of the window. 
// I am not 100% sure wether or not it's position is recorded relative to the parent it is in,
// or if it's the browser window bounds. I believe it's window bounds data.
let x = rect.left + window.scrollX;

// window.scrollX  determines where element1 is relative to the top of the window.
let y = rect.top + window.scrollY;


// onload position
console.log(document.getElementById("1"));
console.log("  X= ",x, "  Y= ", y);

// defines screenwidth
screenWidth_js = window.innerWidth;


// event listener
let navButtonsClick = document.querySelector(".dotMenuButton_html",".logoButton_html").addEventListener("click", navClickedFunction);




function navClickedFunction() {

}




// time
let time = Date();
let newTime = new Date();
time;

newTime;

let timeCount = 0;
if (timeCount<100) {
    timeCount=0
}

// refreshrate time ms
setInterval(checkPosHeader_js, 100);

// check header position
function checkPosHeader_js() {
    // let baseCol_1_bg_jsAll = document.querySelectorAll(".baseCol_1_bg");
    // let baseCol_1_bgDark_jsAll = document.querySelectorAll(".baseCol_1_bgDark");


    newTime = new Date();

    // not used in this case
    let x = rect.left + window.scrollX;

    // defines y as rect.left + scroll in px, this produces a value 
    // equal to the windows scroll amount
    let y = rect.left + window.scrollY;


    // if windowWidth >550 then 
    if (timeCount>100) {
        timeCount=null
        // console.clear();
        sessionStorage.clear();
        
    }
    if (screenWidth_js<550) {

        // if y smaller or equal to 220 or navClicked zIndex +1
        if (y>= 200 ) {
        
            // console.log("posBot");
            timeCount++;
            // console.log(timeCount);
            // adds atribute to header
            headerPos.classList.add("shade_1");
            
            
            // z+1
            // headerPos.style.zIndex="+1";

        } else { 

            // z0
            // headerPos.style.zIndex="0";
            // console.log("posTop");
            timeCount++;
            // console.log(timeCount);

            // removes attribute from header
            headerPos.classList.remove("shade_1");
        
        }

    } else {
        // if y smaller or equal to 120 or navClicked zIndex +1
        if (y>= 120 ) {

            // console.log("posBot");
            timeCount++;
            // console.log(timeCount);    
            headerPos.classList.add("shade_1");
               
            
            
            // z+1
            // headerPos.style.zIndex="+1";

            
            

        
        } else {

            // z0
            // headerPos.style.zIndex="0";
            // console.log("posTop");
            timeCount++;
            // console.log(timeCount);
            
            // removes attribute from header
            headerPos.classList.remove("shade_1");
            
        }
        
        // if (y<= 120){
        
        //     headerPos.style.zIndex="0";
        //     console.log("posTop");
        
        // }


    }
        
    

    

    newTime = null;

    sessionStorage.clear();
    // console.clear();


}


checkPosHeader_js();

