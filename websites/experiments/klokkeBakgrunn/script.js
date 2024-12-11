// let imageDisplayPos = document.querySelector("imageGallery");

// default id properties
// readable id
imgIdReadable="image ";
// number value
imgIdValue=0;




function imageFunction(src, width, height, alt) {
    
    

    
    // defines img as an html image tag.
    let img = document.createElement("img");

    
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    
    

    // if id is equal to or smaller increase id+1
    if (imgIdValue<=imgIdValue) {
        imgIdValue++;
    }

    // put together id
    imgId = imgIdReadable+imgIdValue;
    
    // Debug
    console.log(imgIdValue);
    
    
    
    console.log("functionTest");
    
    // finds class .imageGallery and appends child img to it, aswell as seting an understandable id that increases per img.
    document.querySelector(".imageGallery").appendChild(img).setAttribute("id", imgId);
    // document.getElementById(imgId).style.visibility="hidden";
}

// let bilde = document.createElement("img");
// bilde.src = "img/spareGris.svg";
// document.querySelector(".imageGallery").appendChild();

// images
let img1_js = imageFunction("img/spareGris.svg", 1000, 1000, "piggyBank svg");
let img2_js = imageFunction("img/spareGris.svg", 1000, 1000, "piggyBank svg");

console.log("test1");

let imageArray = [img1_js];







