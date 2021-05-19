const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'eventos.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let res = document.querySelector('.row-event');
        let i = 0;   
    for(let item of datos){
        res.appendChild(document.createElement('tr'));
        tr1= res.lastElementChild;
        tr1.innerHTML= '';
        i++;
        tr1.innerHTML='';
        tr1.innerHTML = `
        <td><input type="checkbox"></td>
        <td><a href='#'><b>${item.nombre}</b></a></td>
        `  
        if (item.relevancia == 'Importante'){
            tr1.innerHTML += `<td><button class='btn btn-imp'>${item.relevancia}</button></td>`
        }
        else{
            tr1.innerHTML += `<td><button class='btn btn-urg'>${item.relevancia}</button></td>`
        }
    }
    }
}