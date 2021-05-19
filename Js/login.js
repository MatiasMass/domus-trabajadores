
const formulario = document.getElementById('form-js');

var validar = (e) => {
    e.preventDefault();
    if (formulario.ControlInput2.value=='1234') {
        if (formulario.ControlInput1.value=='Inmobiliario@dommus.com'){
            window.location.href= '../templates/dashboard.html';
        }
          if (formulario.ControlInput1.value=='Cajera@dommus.com'){
            window.location.href= "../templates/dashboard-cajero.html";
        }
        if (formulario.ControlInput1.value=='Secretaria@dommus.com'){
            window.location.href= "../templates/dashboard-secretaria.html";
        }
        if (formulario.ControlInput1.value=='Administrativo@dommus.com'){
            window.location.href= "../templates/dashboard-administrativo.html";
        }
        if (formulario.ControlInput1.value=='admin'){
            window.location.href= "../templates/home-admin.html";
        }
    }
     else
     {
         alert('Usuario o contraseña incorrecto');
     }   

}

formulario.addEventListener("submit", validar);