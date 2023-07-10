import {getCorreo,addCorreos,deleteCorreo} from "./api.js";

//todo -- MOSTRAR

document.addEventListener('DOMContentLoaded', showCorreos);
const table = document.querySelector("#correos");

async function showCorreos(){
    const correos = await getCorreo();
    correos.forEach(correo => {
        const {CorreoID,Compania,Telefono} = correo;
        table.innerHTML +=
        `
        <tr>
            <td>${CorreoID}</td>
            <td>${Compania}</td>
            <td>${Telefono}</td>
            <td> <button class="btn btn-danger delete" id="${CorreoID}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${CorreoID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
      </tr>
        
        ` 
    });
}

//todo -- INSERTAR

const formulario = document.querySelector("#formInsert");
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    insertCorreos();
});

const insertCorreos = () => {
    const Compania = document.querySelector("#compania").value;
    const Telefono = document.querySelector("#telefono").value;

    const correos = {
        Compania,
        Telefono
    }

    if (validation(correos)) {
        alert('Todos los datos son necesarios')
    }else{
        return addCorreos(correos);
    }

}

function validation(obj) {
    !Object.values(obj).every(element => element !== "");
}

//todo -- ELIMINAR

table.addEventListener('click', (e)=>{
    if (e.target.classList.contains("delete")) {
        const id = e.target.getAttribute("id");
        const confirmacion = confirm("¿Seguro que quieres borrar este correo?");
        if (confirmacion) {
            deleteCorreo(id);
        }
    }
    else if(e.target.classList.contains("update")){
        const id = e.target.getAttribute("id");
        updateCorreo();
    }
})
