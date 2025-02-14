
// import { PORT } from "app1.js";
// import { users } from "app1.js";
let PORT = 3000;

let container = document.createElement("div");

container.classList.add("container");

document.body.appendChild(container);

async function fremvispaaside() {
    
    
    
    const res = await fetch(`http://localhost:${PORT}/person`);	
    
    const data = await res.json(users);

     
    // lager objekt og fremviser data på siden
    let createitem = document.createElement("p");
    
    createitem.innerHTML = data;

    container.appendChild(createitem);

}

fremvispaaside();