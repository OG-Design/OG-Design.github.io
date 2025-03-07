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
    gradientV.addColorStop(1, "rgba(255, 255, 255, 1)");

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

    // values
    // output input number
    document.getElementById("r_out").value=r;
    document.getElementById("g_out").value=g;
    document.getElementById("b_out").value=b;
    // input output slider
    document.getElementById("r_in").value=r;
    document.getElementById("g_in").value=g;
    document.getElementById("b_in").value=b;
    
    
    
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

