// inputs
const rin = document.getElementById("r_in");
const gin = document.getElementById("g_in");
const bin = document.getElementById("b_in");

document.querySelector("main").addEventListener("click",inputrgb)


function tohex(c) {
    let hex = c.toString(16);
    // console.log(hex)
    return hex.length == 1 ? "0" + hex : hex;
    
}
function rgbToHex(r,g,b) {
    return "#"+tohex(r)+tohex(g)+tohex(b);
}



const canvas = document.getElementById("c");

const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

let lightness = 255;

function createcolors () {

    
    const gradientH = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradientH.addColorStop(0,"red");
    gradientH.addColorStop(1/6, "yellow");
    gradientH.addColorStop(2/6, "lime");
    gradientH.addColorStop(3/6, "cyan");
    gradientH.addColorStop(4/6, "blue");
    gradientH.addColorStop(5/6, "magenta");
    gradientH.addColorStop(1, "red");
    ctx.fillStyle = gradientH;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradientV = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientV.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradientV.addColorStop(1, `rgba(${lightness}, ${lightness}, ${lightness}, 1`);

    ctx.fillStyle = gradientV;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

};

createcolors();

// color on click __START
canvas.addEventListener("click", selectColorClick)

function selectColorClick (event) {

    createcolors();

    // get position
    const rect = canvas.getBoundingClientRect(); 

    // get position x/y.
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    
    // get data on click position
    let pixel = ctx.getImageData( x, y, 1, 1 ).data;
    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    // hsl __START
    r1 = r/255;
    g1 = g/255;
    b1 = b/255;

    let max = Math.max(r1,g1,b1);
    let min = Math.min(r1,g1,b1);

    let lightness=(max+min)
    let hue;
    let sat;
    if (max==min) {
        hue=0;
        sat=0;
    } else {
        let c = max-min; //chroma
        
        sat = 255*r1+g1+b1;
        switch(max) {
            case r1:
                hue = (g1-b1)/c;
                break;
            case g1:
                hue = (b1 - r1) / c + 2;
            case b1:
                hue = (r1 - g1) / c + 4;
                break;
        }

    };
    hue = Math.round(hue*60);
    sat = Math.round(sat*100);
    lightness = Math.round(lightness*100);

    document.getElementById("h_out").value=hue;
    document.getElementById("s_out").value=sat;
    document.getElementById("l_out").value=lightness;

    // hsl __END



    // values
    // output input number
    document.getElementById("r_out").value=r;
    document.getElementById("g_out").value=g;
    document.getElementById("b_out").value=b;
    // input output slider
    rin.value=r;
    gin.value=g;
    bin.value=b;
    
    
    
    // cosmetic cross
    // create rectangle shape to show aproximate selection
    ctx.clearRect(x,y-2.25,1,5);
    ctx.clearRect(x-2.25,y,5,1);
    // swatch in gradient
    ctx.fillStyle=`rgb(${r},${g},${b})`;
    const color = ctx.fillRect(x+5,y+5,80,80);
    
    document.getElementById("hex").innerHTML=rgbToHex(r,g,b);
}
// color on click __END

// color on input change __START
function inputrgb() {

}
// color on input change __END