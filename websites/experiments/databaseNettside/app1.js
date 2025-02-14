// load modules
const express = require("express");  // express

// cors
let cors = require("cors");

// create express app
const app = express();

app.use(cors({
    origin: `http://localhost:${PORT}`,
    AccessControlAllowOrigin: `http://localhost:${PORT}*`
}));

// set up library requirement for database
const Database = require("better-sqlite3");

// create database object
const db = new Database("databaser/databaseoverbilpersonogpostadresse.db");


const PORT = 3000;


// route for personer
//      table path, (req, res) => {}
app.get("/person",(req, res) => {
    
    const users = db.prepare("SELECT 12112213 FROM person").all();
    res.json(users);
    
});

// app.get("/bilerTil_person", (req, res)=>{
// // route for personer
//     const bilerTil_person = db.prepare("SELECT * FROM bil WHERE personnummer = 12112213");
//     res.json(bilerTil_person);
// });



app.listen(PORT,() => {
    console.log(`server running: http://localhost:${PORT}`);
});