function tohex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
    
}
function rgbToHex(r,g,b) {
    return "#"+tohex(r)+tohex(g)+tohex(b);
}

const canvas = document.getElementById("c");

const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

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
console.log(gradientV)
gradientV.addColorStop(0, "rgba(255, 255, 255, 0)");
gradientV.addColorStop(1, "rgba(255, 255, 255, 1)");

ctx.fillStyle = gradientV;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX  - rect.left;
    const y = event.clientY - rect.top;

    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    document.getElementById("r").innerText=`R: ${r}`;
    document.getElementById("g").innerText=`G: ${g}`;
    document.getElementById("b").innerText=`B: ${b}`;

    document.getElementById("colorSwatch").style.backgroundColor=`rgb( ${r}, ${g}, ${b} )`;

    document.getElementById("hex").innerText=rgbToHex(r,g,b);
    console.log()

});

