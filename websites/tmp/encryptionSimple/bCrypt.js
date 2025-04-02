// const bcrypt = require('bcrypt');

// import bcrypt from 'bcryptjs';

// bcrypt.salt

async function getPass() {
    const res = await fetch(`https://localhost:3000/pass`)
    const data = await res.json;

    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML=data.value
}