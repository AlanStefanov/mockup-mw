function login() {
    var user, password;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    console.log(password);

    const alertPlaceholder = document.getElementById('login__respuesta')

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type}" role="alert" style="width: auto;
            height: 3rem;">`,
            `   <div>${message}</div>`,
            // '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }


    if (user == "julasoft" && password == "testing") {
        window.location = "/src/contratos.html";
    } else {
        console.log('Crendenciales incorrectas');

        alert('Crendenciales incorrectas', 'dark')
  //      respuesta.innerHTML = 'Credenciales incorrectas';
    }



}
