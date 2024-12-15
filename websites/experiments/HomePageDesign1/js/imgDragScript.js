// script to remove draggable attribute from all img tags in html

// defines images_js as tag "img"
let images_js = document.getElementsByTagName("img");

// for loop where tags "img" is equal to amount of times loop executes.
for(i=0; i<images_js.length; i++) {
    
    // creates array with classname equal to notDragable_js. 
    images_js[i].className +=" notDragable_js";
    
    // searches for class .notDragable_js and sets attribute for each where x is equal to or smaller than x.set attribute, whitch is equal to drag, false.
    document.querySelectorAll(".notDragable_js").forEach( x=> x.setAttribute("draggable", false));

}




