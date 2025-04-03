
async function registerUser(event) {
    // prevent form send
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;
    
    console.log(email, username, firstname, lastname, password);
    console.log(typeof email, typeof username, typeof firstname, typeof lastname, typeof password);

    const response = await fetch('/register', {

        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            username,
            firstname,
            lastname,
            password
        })

    });

    const result = await response.json();
    alert(result.message);
}

document.getElementById("form").addEventListener("submit", registerUser);