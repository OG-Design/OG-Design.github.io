let hue = 0;
let hueMin = 0;
let hueMax = 360;
let sat = 100;
let satMin = 0;
let satMax = 100;
let lum = 50;


// canvas create and append __START
let canvasCreate = document.createElement("canvas");
canvasCreate.id="canvas";
document.body.appendChild(canvasCreate);
// canvas create and append __END
// id canvas
const canvas = document.getElementById("canvas");

// size of canvas
canvas.width=500;
canvas.height=500;

// create context
const ctx = canvas.getContext("2d");

// draw canvas
function draw() {
    // hue 
    // hue drawn
    ctx.fillStyle = `hsla(${hue},100%,50%,1)`
    ctx.fillRect(0,0,canvas.width,canvas.height)
    
    // whiteGradient
    const gradientWhite = ctx.createLinearGradient( 0 , 0 , canvas.width , 0 );
    gradientWhite.addColorStop( 0, "hsla( 0 , 0% , 100% , 1 )" );
    gradientWhite.addColorStop( 1, "hsla( 0 , 0% , 100% , 0 )" );
    ctx.fillStyle=gradientWhite;
    ctx.fillRect( 0 , 0 , canvas.width , canvas.height );
    
    
    // blackGradient
    const gradientBlack = ctx.createLinearGradient(0 , 0 , 0 , canvas.height);
    
    gradientBlack.addColorStop(0,"hsla( 0 , 0% , 0% , 0 )");
    gradientBlack.addColorStop(1,"hsla( 0 , 0% , 0% , 1 )");
    
    ctx.fillStyle=gradientBlack;
    
    ctx.fillRect( 0 , 0 , canvas.width , canvas.height );
    
}

// execute draw, draws canvas
draw();
















// hue __START
hue=0;
hueMin = 0;
hueMax = 360;

let labelHue = document.createElement("div");
labelHue.innerHTML="hue";
document.body.appendChild(labelHue);

// hue slider __START
// create hueSlider
let hueSlider = document.createElement("input");
// properties
hueSlider.type="range";
hueSlider.min=hueMin;
hueSlider.max=hueMax;
hueSlider.defaultValue=hueMin;
hueSlider.style.width="100%" 

// add to body
document.body.appendChild(hueSlider);
hueSlider.id="hueSlider";


const hueSliderid = document.getElementById("hueSlider"); 

// slider color
hueSliderid.style.accentColor=`hsla(${hue},100%,50%,1)`;

hueSliderid.addEventListener("input", hueSliderUpdate);
// hue slider __END





// hue numinput __START
let hueNumIn = document.createElement("input");
// properties
hueNumIn.type="number"; 
hueNumIn.min=hueMin;
hueNumIn.max=hueMax;
hueNumIn.defaultValue=hue;


const hueNumId = "hueNum";
hueNumIn.id = hueNumId  

// add hueNumIn to body
document.body.appendChild(hueNumIn)

hueNumIn.addEventListener("input", hueNumIdUpdate);
// hue numinput __END

// hue change update
function hueSliderUpdate() {
    // gets hue value from slider
    hue = hueSliderid.value

    // slider color to hue
    hueSliderid.style.accentColor=`hsla(${hue},100%,50%,1)`;
    
    // change update number value
    hueNumIn.value=hueSliderid.value;
    

    // check value
    console.log(`hue( ${hueSlider.id} ): `,hue);

    // draws canvas with new hue value
    draw()

    // previewSwatch color update
    st1.backgroundColor=`hsla( ${hue} , ${sat}% , ${lum}%, 1 )`;

    // set satSlider hue
    let satSliderid = document.getElementById("satSlider");
    satSliderid.style.accentColor=`hsla(${hue},${sat}%,${lum}%,1)`;

}





function hueNumIdUpdate() {
    hue = hueNumIn.value

    // update slider
    hueSliderid.value=hueNumIn.value
    // slider color to hue
    hueSliderid.style.accentColor=`hsla(${hue},100%,50%,1)`;

    console.log(`hue( ${hueNumIn.id} ): `,hue);

    draw()

    // previewSwatch color update
    st1.backgroundColor=`hsla( ${hue} , ${sat}% , ${lum}%, 1 )`;

    // set satSlider hue
    let satSliderid = document.getElementById("satSlider");
    satSliderid.style.accentColor=`hsla(${hue},${sat}%,${lum}%,1)`;
}
// hue __END




function saturation() {
    sat = 100;

    let labelSat = document.createElement("div");
    labelSat.innerHTML="sat";
    document.body.appendChild(labelSat);

    // create hueSlider
    let satSlider = document.createElement("input");
    // properties
    satSlider.type="range";
    satSlider.min=satMin;
    satSlider.max=satMax;
    satSlider.defaultValue=satMax;
    satSlider.style.width="100%" 

    // add to body
    document.body.appendChild(satSlider);
    satSlider.id="satSlider";


    const satSliderid = document.getElementById("satSlider"); 

    // slider color
    satSliderid.style.accentColor=`hsla(${hue},${sat}%,${lum}%,1)`;

    satSliderid.addEventListener("input", satSliderUpdate);
    // sat slider __END





    // hue numinput __START
    let satNumIn = document.createElement("input");
    // properties
    satNumIn.type="number"; 
    satNumIn.min=satMin;
    satNumIn.max=satMax;
    satNumIn.defaultValue=satMax;


    const satNumId = "satNum";
    satNumIn.id = satNumId  

    // add hueNumIn to body
    document.body.appendChild(satNumIn)

    satNumIn.addEventListener("input", satNumIdUpdate);
    // hue numinput __END


}

function satSliderUpdate() {

    let satSliderid = document.getElementById("satSlider");
    let satNumid = document.getElementById("satNum");


    sat = satSliderid.value;
    satNumid.value = sat;

    // slider color
    satSliderid.style.accentColor=`hsla(${hue},${sat}%,${lum}%,1)`;

    // update preview swatch
    let st1 = document.getElementById("previewSwatch");
    st1.style.backgroundColor=`hsla(${hue},${sat}%,${lum}%,1)`;

}
function satNumIdUpdate() {
    
    let satSliderid = document.getElementById("satSlider");
    let satNumid = document.getElementById("satNum");


    sat = satNumid.value;
    satSliderid.value = sat;

    // slider color
    satSliderid.style.accentColor=`hsla(${hue},${sat}%,${lum}%,1)`;
    // update preview swatch
    let st1 = document.getElementById("previewSwatch");
    st1.style.backgroundColor=`hsla(${hue},${sat}%,${lum}%,1)`;
}
saturation()





// colorPreviewSwatch __START
const colorPreviewSwatch = document.createElement("div");


// style swatch __START
const stylePreviewSwatch = colorPreviewSwatch.style;
const st1 = stylePreviewSwatch;
colorPreviewSwatch.id="previewSwatch"

// shape
st1.width = "50px";
st1.height = st1.width;
st1.borderRadius="15%"

// alignment
st1.margin=".5rem";

// add color to swatch
st1.backgroundColor=`hsla( ${hue} , ${sat}% , ${lum}% )`;
// style swatch __END


document.body.appendChild(colorPreviewSwatch);
// colorPreviewSwatch __END