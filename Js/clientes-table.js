const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'clientes.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        let res = document.querySelector('.rows-cli');
        res.innerHTML= '';
        let i = 0;   
    for(let item of datos){
        i++;
        res.innerHTML += `
        <tr>
        <td><img src='..\\img\\cliente.png' height="70" width="70"></td>
        <td>${item.nombre}</td>
        <td>${item.fechaNac}</td>
        <td>${item.tel}</td>
        <td>${item.direccion}</td>
        <td>${item.correo}</td>
        <td>${item.tipoCliente}</td>
        <td><div class='cli-status'>${item.estado}</div></td>
        <td><a href='modificar-cliente.html' id='cli-id-${i}' class='btn-cli'>Modificar</a></td>
        <td><button id='cli-id-${i}' class='btn-cli btn-eli' onClick='elimClick()'>Eliminar</button></td>
        </tr>
        `
    }
    }
}

const elimClick = () =>{
    var modal = document.querySelector('.confr');
    if (modal.style.display == ""){
        modal.style.display = "block";
    }
    else{
        modal.style.display = "";
    }
}

function mostrarTabla(){
   var tabla = document.querySelector('.scrollingTable');
   if (tabla.style.display == 'block'){
    tabla.style.display = 'none';
   }
    else{
        tabla.style.display = 'block';
    }
}

const mostrar = document.querySelector('.listar-cli');

mostrar.addEventListener("click", mostrarTabla);


/* function modificarCliente(){
    form.innerHTML=`<div class='form-pro'><form>Prueba<button class='btn-cli'>Enviar</button></form></div>`;
}
const form = document.querySelector('.form');

var modificar = document.querySelector("#cli-id-1");

modificar.addEventListener("click", modificarCliente);

cargar.addEventListener("click", ()=> form.style.display="none"); */
