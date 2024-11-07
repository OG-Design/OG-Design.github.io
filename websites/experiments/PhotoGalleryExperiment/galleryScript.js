let imageArray = [];



function newImage(src, width, height, alt) {
    
    // creates image element
    let img = document.createElement("img");
    

    // properties
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    document.querySelectorAll("imageGalleryElement").appendChild="img";

}


// img list
newImage(
    "/img/Gallery/3D/1001.png", 500, 500, "alt"
);
// newImage.src = '/img/Gallery/3D/IMG_0525.jpg';
// newImage.src = '/img/Gallery/3D/IMG_0526.jpg';
// newImage.src = '/img/Gallery/3D/IMG_0528.jpg';
// newImage.src('/img/Gallery/3D/ ');







