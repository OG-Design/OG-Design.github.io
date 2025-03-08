let canvasCreate = document.createElement("canvas");
const canvasid = "canvasid";

canvasCreate.id=canvasid;



document.body.appendChild(canvasCreate);

let hue = 0;
if (hue <= 360) {
    hue = hue;
} else {
    hue = hue - 360;
};
console.log(hue);

// input for hue
let inputSliderHue = document.createElement("input");

// parameters
inputSliderHue.type="range";
inputSliderHue.min="0";
inputSliderHue.max="360";
inputSliderHue.defaultValue="0";
inputSliderHue.id="hue";

let stylehueinput = inputSliderHue.style;

// add to body
document.body.appendChild(inputSliderHue);


let getHueSlider = document.getElementById("hue");


let hueTextInput = document.createElement("input");
hueTextInput.type="number";
hueTextInput.min="0";
hueTextInput.max="360";
hueTextInput.id="hueTextInput";
document.body.appendChild(hueTextInput);
hueTextInput.value=getHueSlider.value;

// listen to input and run changehue
getHueSlider.addEventListener("input",changehue);

function changehue () {



    // change js hue value
    hue = getHueSlider.value;

    // change hueTextInput value
    hueTextInput.value=getHueSlider.value;

    // change accentColor to let hue
    stylehueinput.accentColor=`hsla(${hue},100%,50%,1)`;


    console.log(hue);

    // draws canvas with updated hue
    draw();

}



const canvas = document.getElementById(canvasid);

canvas.style.color="hsla(220,10%,50%,1)";
canvas.style.border="solid .3rem";

canvas.width=500;
canvas.height=500;

const ctx = canvas.getContext("2d");

function draw() {
// hue 
ctx.fillStyle = `hsla(${hue},100%,50%)`
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

draw();

canvas.addEventListener("click",function(event) {
    
});