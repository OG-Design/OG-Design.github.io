
const express = require('express');
const session = require('express-session');

const bcrypt = require('bcrypt');
const Database = require('better-sqlite3');
const db = new Database('./database/user.db');

const app = express();

const PORT = 3000;


// middleware __START \/
// for static file
app.use(express.static('public'));

// for parse json
app.use(express.json());

// for sessions
app.use(
    session({
        secret: "securekeyoifdmnjonfosdnmfojdsmf#¤moasmodmasomkfodd+dmskmfkdm009==9mkokm",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // http/https
    })
);

// for requirelogin
function requireLogin( req , res , next ) {
    if ( ! req.session.user ) {
        return res.redirect("./login.html");
    };
    next();
};
// middleware __END  /\

app.get('/pass', ( req , res ) => {
    res.send("get pass running");
});


app.post('/login', async ( req , res ) => {

    let wrong = "Wrong user or password.";

    const { email , password, firstname } = req.body;
    const user = db.prepare('SELECT * FROM userinfo WHERE email = ?').get(email);
    // response if user wrong
    if ( ! user ) {
        return res.status(401).json({ message: wrong });
    };
    const passwordVerify = await bcrypt.compare(password, user.email)
    if ( ! passwordVerify ) {
        return res.status(401).json({ message: wrong });
    };

    req.session.user = {id: user.uid, fistname: user.firstname };
    req.json({ message: "login success"});

});

app.post('/logout', ( req , res ) => {
    req.session.destroy();
    res.json({message: "logout success"});
});

app.post('/register', async ( req , res ) => {
    const {
        email,
        username,
        firstname,
        lastname,
        password
    } = req.body;

    // hash bcrypt
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash( toString(password) , saltRounds );
    const statemnt = db.prepare("INSERT INTO userinfo (email, username, firstname, lastname, password) VALUES ( ?, ?, ?, ?, ? )");
    const info = statemnt.run(email, username, firstname, lastname, hashPassword);

    res.json({message: "new user registered", info});
});

app.get('/home', requireLogin, ( req , res ) => {
    res.sendFile(__dirname+"/private/home.html")
});

app.listen(PORT, () => {
    console.log(`server: http://localhost:${PORT}`);
});