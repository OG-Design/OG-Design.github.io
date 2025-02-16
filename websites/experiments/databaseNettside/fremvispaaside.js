
// import { PORT } from "app1.js";
// import { users } from "app1.js";
let PORT = 3000;

let container = document.createElement("div");

container.classList.add("container");

document.body.appendChild(container);

async function fremvispaaside() {
    
    
    /* 
    data = databasens data i json format
    kobler seg til express ved lenke .... og PORT ....
    fetch'er data'en fra lenken
    */
    const res = await fetch(`http://localhost:${PORT}/person`);	
    // konverterer res(database) til JSON.
    const data = await res.json();

    // tester om den finner data i databasen
    // console.log(data[0]);

    // for hver person av data lag et liste element med innhold person.fornavn å legger til i html
    for (let person of data) {
        // lager en list item som inneholder data fra databasem
        let listItem = document.createElement("li");
        listItem.innerText=person.fornavn + ". "+person.etternavn + " : " + person.personnummer;
        // legger inn i html
        container.appendChild(listItem);
    
    }

}

fremvispaaside();