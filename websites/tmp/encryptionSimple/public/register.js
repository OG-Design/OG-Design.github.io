
async function registerUser(event) {
    // prevent form send
    event.preventDefault();

    const email = document.getElementById('email');
    const username = document.getElementById('username')
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const password = document.getElementById('password');
    

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
            password,
        })

    });

    const result = await response.json();
    alert(result.message);
}