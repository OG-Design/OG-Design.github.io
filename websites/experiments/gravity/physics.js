let queryAllPhysics = document.querySelectorAll(".physics_element");
let queryPhysicsBounds = document.querySelector(".physics_bounds");

let time = Date();
let newTime = new Date();


setInterval(gravityFunction, 10);

// gravity
function gravityFunction() {
    let rectBounds = queryPhysicsBounds.getBoundingClientRect();
    let yBottom_bounds = rectBounds.bottom;
    
    
    for (let i = 0; i < queryAllPhysics.length; i++) {
        let rect = queryAllPhysics[i].getBoundingClientRect();
        let yBottom_obj = rect.bottom + window.screenY;
        
        if (yBottom_obj==yBottom_bounds) {

        } else {
            
            console.log(yBottom_obj);
            queryAllPhysics[i].;
            
        }
    }

    newTime;
}

// gravityFunction();