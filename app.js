function signup() {
    const Http = new XMLHttpRequest();
    var url = "http://localhost:3000/signup"
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json")
    Http.send(JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
    }));
    Http.onreadystatechange = (e) => {
        
            alert(Http.responseText);
      
    }
    return false;
}
