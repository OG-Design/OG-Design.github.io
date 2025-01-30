// button to open menu
let menuOpenButton = document.getElementById("menuButton");

// menu
let menu1 = document.getElementById("menu1");

// removes menu1.
menu1.style.display="none";

// listens to menuOpenButton
menuOpenButton.addEventListener("click", menuState);

// close var
let closeMenu = KeyboardEvent("Escape");
// listens to body





function menuState() {
 
    let menu1Style = menu1.style.display;;

    // funtion to display menu
    function displayMenu() {
        document.getElementById("menu1").style.display="block";
    }

    // function to remove menu
    function removeMenu() {
        document.getElementById("menu1").style.display="none";
    }

    // stylechange function
    function stylechangeButton() {
        // button's style var
        let menuOpenButtonStyle = menuButton.style;

        // if backgroundColor is not equal to ... then change background color to ... else no background color.
        if (menuOpenButtonStyle.backgroundColor!="var(--baseBG2)") {
            menuOpenButtonStyle.backgroundColor="var(--baseBG2)";
        } else {
            menuOpenButtonStyle.backgroundColor="";
        }
        
    }


    // displayState check
    if (menu1Style!="block") {
        displayMenu()
    } else if (menu1Style!="none") {
        removeMenu()
    }

    // changButtonStyle
    stylechangeButton();

}



