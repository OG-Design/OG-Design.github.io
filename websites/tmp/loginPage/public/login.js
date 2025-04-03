async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        window.location.href = '/home';
    } else {
        alert(result.message);
    }
};



document.addEventListener('submit', loginUser);
// document.getElementById('logout').addEventListener('click', logoutUser(event));