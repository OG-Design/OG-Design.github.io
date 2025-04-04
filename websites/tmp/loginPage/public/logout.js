async function logoutUser(event) {
    event.preventDefault();
    const response = await fetch('/logout', {
        method: 'POST'
        
    });

    if (response.ok) {
        alert("Logout success");
        window.location.href = '/login.html';
    } else {
        alert("Logout failed");
    }

  
};

document.getElementById('logout').addEventListener('click', logoutUser);