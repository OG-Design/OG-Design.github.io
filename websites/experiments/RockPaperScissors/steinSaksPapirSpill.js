
let stein = document.getElementById("steinElement");
let saks = document.getElementById("saksElement");
let papir = document.getElementById("papirElement");

stein.addEventListener("click", velgStein) 

saks.addEventListener("click", velgSaks);

papir.addEventListener("click", velgPapir);


// programmert valg av stein, saks, eller papir, 
// avrundet med floor for å runde ned til et helt tall.
programValgSteinSaksPapir = Math.floor(Math.random() * 3 ); 

let programValgStein = 0;
let programValgSaks = 1;
let programValgPapir = 2;

// skriver ut valget i konsoll slik at det blir lettere å feilsøke.
// if ( programValgSteinSaksPapir === 0 ) {
//     console.log("computerChoseStein");
// } else if ( programValgSteinSaksPapir === 1 ) {
//     console.log("computerChoseSaks");
// } else if ( programValgSteinSaksPapir ===2) {
//     console.log("computerChosePapir");
// }


// function for when result is a draw
function draw() {
    document.getElementById("output").innerText = "It was a draw!";
}

// function for when result is a loss
function lost() {
    document.getElementById("output").innerText = "You lost!";
}

// function for when result is won
function won() {
    document.getElementById("output").innerText = " You won!";
}

function valgteStein() {
    document.getElementById("output2").innerText = "Bot chose stone_";
}

function valgteSaks() {
    document.getElementById("output2").innerText = "Bot chose scissors_";
}

function valgtePapir() {
    document.getElementById("output2").innerText = "Bot chose paper_";
}


// når velgStein er aktivert
function velgStein() {
    // sjekk for click bekreftelse
    console.log("steinClicked");

    // kjører valg etter click
    programValgSteinSaksPapir = Math.floor(Math.random() *3);
    // hvis valg = programValgSteinSaksPapir
    if ( programValgSteinSaksPapir === programValgStein ) {
        
        console.log("programmet valgte stein, det ble uavgjort! ");

        valgteStein(); 
        draw();
        
        
    
    } else if ( programValgSteinSaksPapir === programValgSaks ) {
    
        console.log("programmet valgte saks, du vant! ");

        valgteSaks();
        won();

    
    } else if ( programValgSteinSaksPapir === programValgPapir ) {
    
        console.log("programmet valgte papir, du tapte! ");
    
        valgteSaks();
        lost();
    }
}

// når velgStein er aktivert
function velgSaks() {
    // sjekk for click bekreftelse
    console.log("saksClicked");

    // kjører valg etter click
    programValgSteinSaksPapir = Math.floor(Math.random() * 3 );

    // hvis valg = programValgSteinSaksPapir
    if ( programValgSteinSaksPapir === programValgStein ) {

        console.log("programmet valgte stein, du tapte! ");

        valgteStein();
        lost();
        
    } else if ( programValgSteinSaksPapir === programValgSaks ) {

        console.log("programmet valgte saks, det ble uavgjort! ")

        valgteSaks();
        draw();

    } else if ( programValgSteinSaksPapir === programValgPapir ) {

        console.log("programmet valgte papir, du vant! ");

        valgtePapir();
        won();

    }
}

// når velgPapir er aktivert
function velgPapir() {
    // sjekk for click bekreftelse
    console.log("papirClicked");

    // kjører valg etter click
    programValgSteinSaksPapir = Math.floor(Math.random() * 3 );

    // hvis valg = programValgSteinSaksPapir
    if ( programValgSteinSaksPapir === programValgStein ) {

        console.log("programmet valgte stein, du vant! ");

        valgteStein();
        won();

    } else if ( programValgSteinSaksPapir === programValgSaks ) {

        console.log("programmet valgte saks, du tapte! ");

        valgteSaks();
        lost();

    } else if ( programValgSteinSaksPapir === programValgPapir) {

        console.log("programmet valgte papir, det ble uavgjort");

        valgtePapir();
        draw();

    }
}



