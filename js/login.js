function login() {
    var user, password;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if (user == "julasoft" && password == "testing") {
        window.location = "/src/contratos.html";
        
    }
}
