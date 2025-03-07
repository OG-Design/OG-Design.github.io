// canvas __START
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
function CanvasComponent() {
    

    // shape
    canvas.width = 500;
    canvas.height = 500;

};

CanvasComponent();
// canvas __END

// colorGradient __START
function colorGradient() {
    
    const gradientH = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradientH.addColorStop(0,"red");
    gradientH.addColorStop(1/6, "yellow");
    gradientH.addColorStop(2/6, "lime");
    gradientH.addColorStop(3/6, "cyan");
    gradientH.addColorStop(4/6, "blue");
    gradientH.addColorStop(5/6, "magenta");
    gradientH.addColorStop(1, "red");
}

colorGradient();
// colorGradient __END

