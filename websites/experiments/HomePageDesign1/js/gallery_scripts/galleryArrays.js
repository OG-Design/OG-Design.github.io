console.log("running gallery script: ");

let pathToImg_3d = document.querySelector("#galleyContentParent_3d");

let imgParentCreate = document.createElement("div").id="";

// let imgParentAppend = pathToImg_3d.appendChild("div"); 

function newImage(src, alt) {
    // creates img element
    let imgCreate = document.createElement("img");
    
    imgCreate;

    src = imgCreate.src;
    alt = imgCreate.alt;




}

let ImageArray_3d = [newImage( "/img/Gallery/3D/1001.png" , "Dandelion" ) , newImage( "/img/Gallery/IMG_0525.jpg" , "et fly som ser ut fra insiden" ) ];

for (i=0; i<ImageArray_3d.length; i++) {
    // lag bilde
    // document.getElementById("galleryContentParent_3d").appendChild(ImageArray_3d[i]);
}

console.log(ImageArray_3d.length)
