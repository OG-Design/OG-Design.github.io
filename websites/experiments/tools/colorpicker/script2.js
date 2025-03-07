// canvas
// get canvas, create context
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// defaults hsl
let hue = 0;
let saturation = 0;
let lightness = 100;




// shape of canvas
canvas.width=500;
canvas.height=500;

// gradient creation
const gradientH = ctx.createLinearGradient(0 , 0 , canvas.width, 0);

//        addColorStop(position, color)
gradientH.addColorStop( 0 , "red" );
gradientH.addColorStop( 1 / 6 , "yellow" );
gradientH.addColorStop( 2 / 6 , "lime" );
gradientH.addColorStop( 3 / 6 , "cyan" );
gradientH.addColorStop( 4 / 6 , "blue" );
gradientH.addColorStop( 5 / 6 , "magenta" );
gradientH.addColorStop( 1 , "red" );

// change fillstyle
ctx.fillStyle = gradientH;
// fill gradientH
ctx.fillRect(0 , 0 , canvas.width , canvas.height );


const gradientV = ctx.createLinearGradient( 0 , 0 , 0 , canvas.height );
gradientV.addColorStop(0, `hsla( 0 , 0% , 100% , 0 )` );
gradientV.addColorStop(1, `hsla( 0 , 0% , ${lightness}% , 1 )` );

ctx.fillStyle=gradientV;
ctx.fillRect( 0 , 0 , canvas.width , canvas.height )


// swatch
let swatch = document.getElementById("colorSwatch");
swatch.style.backgroundColor=`hsla( ${hue} , ${saturation}% , ${lightness}% , 1 )`;



// put value from inputs in hsl
let huein = document.getElementById("huein").value;
let satin = document.getElementById("satin").value;
let lumin = document.getElementById("lumin").value;

hue = huein;
saturation = satin;
lightness = lumin;

document.getElementById("hslContainer").addEventListener("submit", updateFromInputHSL);
function updateFromInputHSL(event) {

    // refresh values in script
    hue = huein;
    saturation = satin;
    lightness = lumin;

    console.log(huein)
    console.log(hue)
    console.log("%cdebug: ","font-weight:bold; color: hsl(220,100%,70%);","updateFromInputHSL()")
    console.log("%chue: ","font-weight:bold; color:hsl(220,60%,60%);",hue)
    console.log("%csaturation: ","font-weight:bold; color:hsl(220,60%,60%);",saturation)
    console.log("%clightness: ","font-weight:bold; color:hsl(220,60%,60%);",lightness)
    
    event.preventDefault();
}

