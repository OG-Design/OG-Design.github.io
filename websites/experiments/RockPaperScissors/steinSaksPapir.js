// vellkommen til stein saks papir koden


// denne seksjonen gir en definisjon til button... ved å spørre 
// html dokumentet om å finne et element med id""
let buttonStein = document.getElementById("steinElement");
let buttonSaks = document.getElementById("saksElement");
let buttonPapir = document.getElementById("papirElement");

let scoreBruker = 0;
let scoreDatamaskin = 0;


// denne seksjonen legger til eventListener.
// Denne hører etter events, for eksempel keybind eller click osv.
buttonStein.addEventListener("click", velgStein);
buttonSaks.addEventListener("click", velgSaks);
buttonPapir.addEventListener("click", velgPapir);

// lagring av bruker valg, tom til fyllt.
let velgBruker = "";



// funksjons seksjonen.
function velgStein() {
    console.log("Bruker valgte stein");

    velgBruker = "stein";
    document.getElementById("resultat").innerText = "stein,";
    sjekkResultat();
}

function velgSaks() {
    console.log("Bruker valgte saks");

    velgBruker = "saks";
    document.getElementById("resultat").innerText = "saks,";
    sjekkResultat();
}

function velgPapir() {
    console.log("Bruker valgte papir");

    velgBruker = "papir";
    document.getElementById("resultat").innerText = "papir,";

    sjekkResultat();
}


//sjekk resultatet
function sjekkResultat() {

    
    let velgDatamaskin = "";


    

    
    
     


    // random valg av datamaskin 0-2
    velgDatamaskin = Math.floor(Math.random() * 3);

    console.log(velgDatamaskin);

    let arrayValg = ["stein", "saks", "papir"];
    

    // velgDatamaskin = ArrayValg[velgDatamaskin]; gjør at velgdatamasking blir arrayValg[valg inni array];
    velgDatamaskin = arrayValg[velgDatamaskin];
    console.log(velgDatamaskin);

    // hva som skjer om bruker vinner
    function vant() {
        console.log("Du vant!");
        document.getElementById("resultat1").innerText = "Du vant!";
        
        scoreBruker++;
        document.getElementById("scoreBruker").innerHTML = scoreBruker;
    
    }


    // melding om hva datamaskinen valgte
    function valgtDatamaskinMelding() {
        
        function forsteDelAvMelding() {
            document.getElementById("resultat2").innerText = "Datamaskinen valgte";
        }
        // fyyyy faen hva driver jeg med?!
        if (velgDatamaskin == "stein") {
            forsteDelAvMelding();
            document.getElementById("resultat3").innerText = "stein"; 
        } 
        else if (velgDatamaskin == "saks") {
            forsteDelAvMelding();
            document.getElementById("resultat3").innerText = "saks";    
        }
        else if (velgDatamaskin == "papir") {
            forsteDelAvMelding();
            document.getElementById("resultat3").innerText = "papir";
        }
    }



// hvis de er lik = uavgjort
if (velgDatamaskin == velgBruker) {

    console.log("uavgjort");
    document.getElementById("resultat1").innerText = "Det ble uavgjort!";

} 
else if (velgBruker == "stein" && velgDatamaskin == "saks") {

    vant();

} 
else if (velgBruker == "saks" && velgDatamaskin == "papir") {
    
    vant();

} 
else if (velgBruker == "papir" && velgDatamaskin == "stein") {

    vant();

} else {

    console.log("Du tapte!");
    document.getElementById("resultat1").innerHTML = "Du tapte!";
    scoreDatamaskin++;
    document.getElementById("scoreDatamaskin").innerHTML = scoreDatamaskin;
}

valgtDatamaskinMelding();





}

