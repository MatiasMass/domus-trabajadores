var btns;

const xhttp1 = new XMLHttpRequest();

xhttp1.open('GET', 'clientes.json', true);

xhttp1.send();

xhttp1.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos_cli = JSON.parse(this.responseText);
        let res1 = document.querySelector('.scrollingTable');
        const xhttp2 = new XMLHttpRequest();
        xhttp2.open('GET', 'propiedades.json', true);
        xhttp2.send();
        xhttp2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        let datos_prop = JSON.parse(this.responseText);
        res1.innerHTML= '';
        i=0;
        res2= res1.firstElementChild;
        btns = [];
    for(let item of datos_cli){
        newFragmentHTML= '';
        res1.innerHTML += `
        <table>
        <thead>
        <tr>
        <th><img src='..\\img\\cliente.png' height="70" width="70"></th>
        <th>${item.nombre}</th>
        <th>${item.fechaNac}</th>
        <th>${item.tel}</th>
        <th>${item.direccion}</th>
        <th>${item.correo}</th>
        <th><button id='cli-id-${i}' class='btn btn-desp' onClick="eclick('${i}')"><i class='fi-rr-arrow-down'></i></button></th>
        </tr>
        </thead>
        <tbody class='rows-prop-${i}'>
        </tbody>
        </table>
        `;
        res2=res1.lastElementChild.firstElementChild.nextElementSibling;
        let ram = Math.floor((Math.random() * 3)+2);
        j=0;
        for(k = 0; k < ram-1; k++) {
            j=j+1;
            res2.innerHTML += `
             <tr>
             <td><img src='..\\img\\propiedad.jpg' height="50" width="50"></td>
             <td>${datos_prop[k].tipoInmueble}</td>
             <td>${datos_prop[k].direccion}</td> 
             <td>${datos_prop[k].provincia}</td> 
             <td>${datos_prop[k].ciudad}</td> 
             <td>${datos_prop[k].descripción}</td> 
             <td><a href='modificar-propiedad.html' id='prop-id-${i}-${j}' class='btn btn-mod'>Modificar</a></td>
             <td><a id='prop-id-${i}-${j}' class='btn btn-eli' onClick="elimClick()">Eliminar</a></td>
             </tr>
             <tr>
             </tr>   
            `;          
        }
        res2.lastElementChild.innerHTML = `<td><a href='agregar-propiedad.html' class='btn btn-agr'>Agregar</a></td>`;
        i=i+1;
    }
    }
    }
    
}
}

const eclick = (cl)=>{
    cl=cl.toString();
    let rows = '.rows-prop-';
    let btn= '#cli-id-';
    rows=rows.concat(cl);
    btn=btn.concat(cl);
    let tabla = document.querySelector(rows);
    let boton = document.querySelector(btn);
    console.log(tabla.style.display);
    if (tabla.style.display == ""){
        tabla.style.display = "contents";
        boton.lastElementChild.className = 'fi-rr-arrow-up';
    }
    else{
        tabla.style.display = "";
        boton.lastElementChild.className = 'fi-rr-arrow-down';
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