function signup(){
    const http = new XMLHttpRequest();
    var url = "http//:localhost:3000/signup"
    http.open("POST",url);
    http.setRequestHeader("content-type","application/json")
    http.send(JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
    }));
    http.onreadystatechange = (e) =>{
        alert(http.responseText);
    }
    return false;
}