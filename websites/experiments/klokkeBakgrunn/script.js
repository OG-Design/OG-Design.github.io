// let imageDisplayPos = document.querySelector("imageGallery");

// default id properties
// readable id
imgIdReadable="image ";
// number value
imgIdValue=0;

function imageFunction(src, height, alt) {
    
    

    
    // defines img as an html image tag.
    let img = document.createElement("img");

    
    img.src = src;
    // img.width = width;
    img.height = height;
    img.alt = alt;
    
    

    // if id is equal to or smaller increase id++
    if (imgIdValue<=imgIdValue) {
        imgIdValue++;
    }

    // put together id
    imgId = imgIdReadable+imgIdValue;
    
    // debug
    // console.log(imgIdValue);
    // console.log("functionTest imageFunction");
    


    // finds class .imageGallery and appends child img to it, aswell as seting an understandable id that increases per img.
    document.querySelector(".imageGallery").appendChild(img).setAttribute("id", imgId);

    // hides images
    document.getElementById(imgId).style.display="none";
    
    
}

// let bilde = document.createElement("img");
// bilde.src = "img/spareGris.svg";
// document.querySelector(".imageGallery").appendChild();



// images to diaplay
let img1_js = imageFunction("img/spareGris.svg", 350, "piggyBank svg");
let img2_js = imageFunction("/img/Gallery/3D/1001.png", 350, "piggyBank svg");
let img3_js = imageFunction("/img/gallery/3D/IMG_0525.jpg", 350, "piggyBank svg");
let img4_js = imageFunction("/img/gallery/3D/IMG_0528.jpg", 350, "piggyBank svg");

// debug
// console.log("test1");
// console.log("\n\n\n\n");

let imageArray = [img1_js, img2_js, img3_js, img4_js];





// idRead reads id's and displays their parent.
function idRead(){
    console.log("img  id:","\n\n");
    // adds for later subtraction, avoids id error...
    imgIdValue++;

    // forLoop for idRead
    for (let i = 0; i<imageArray.length;i++) {
    
        // subtracts imgIdValue for each loop 
        imgIdValue=imgIdValue-1;
    
        // redefines imgId in for loop
        imgId = imgIdReadable + imgIdValue;
    
        // displays array elements with id
        document.getElementById(imgId).style.display="block";
    
        // checkValue
        // console.log(imgIdValue);
        
        // checkWholeId
        console.log(imgId);

    }
    

}
// runs function idRead
idRead();





