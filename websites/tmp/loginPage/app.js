// user system
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Database = require('better-sqlite3');
const db = new Database('./database/user.db');



// app setup
const app = express();
const PORT = 3000;


// middleware start
app.use(express.static('public'));
app.use(express.json());

// session setup
app.use(
    session({

        secret: "securekeyoifdmnjonfosdnmfojdsmf#¤moasmodmasomkfodd+dmskmfkdm009==9mkokm",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // http/https

    })
);

function requireLogin( req , res , next ) {
    if ( ! req.session.user ) {
        return res.redirect("./login.html");
    };
    next();
};
// middleware end

app.post('/login', async ( req , res ) => {

    let wrong = "Wrong username or password.";

    const { email , password, firstname } = req.body;
    const user = db.prepare('SELECT * FROM user WHERE email = ?').get(email);
    // response if user or password is wrong
    if ( ! user ) {
        return res.status(401).json({ message: wrong });
    };
    const passwordVerify = await bcrypt.compare(password, user.password);
    if ( ! passwordVerify ) {
        return res.status(401).json({ message: wrong });
    };

    req.session.user = {id: user.uid, fistname: user.firstname };
    res.json({ message: "login success" });
});

app.post('/logout', ( req , res ) => {
    req.session.destroy();
    // res.json({message: "logout success"});
    res.redirect('../login.html');
});



app.post('/register', async (req, res) => {
    const {
        email,
        username,
        firstname,
        lastname,
        password
    } = req.body;

    // hash bcrypt
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Correctly pass parameters as a list
    const statement = db.prepare("INSERT INTO user (email, username, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)");
    const info = statement.run(email, username, firstname, lastname, hashPassword);

    
});

app.get('/home', requireLogin, ( req , res ) => {
    res.sendFile(__dirname+"/private/home.html")
});

app.listen(PORT, () => {
    console.log(`server is running on: http://localhost:${PORT}`);
});
