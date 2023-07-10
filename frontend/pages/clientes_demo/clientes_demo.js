import {clienteDem,inserClientDem} from "./api.js";

document.addEventListener('DOMContentLoaded', showClientesDemo);
const table = document.querySelector('#clientes_demo');

async function showClientesDemo() {
    const clienteDemo = await clienteDem();
    clienteDemo.forEach(cliente => {
        const {ClienteID , TipoClienteID} = cliente;
        table.innerHTML += 
        `
        <tr>
            <td>${ClienteID}</td>
            <td>${TipoClienteID}</td>
            <td> <button class="btn btn-danger delete" id="${ClienteID}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${ClienteID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
        </tr>
        `
    });
}

const formInsert = document.querySelector("#formInsert");
formInsert.addEventListener('submit',(e)=>{
    e.preventDefault();
    insert();
})

const insert = () => {
    const ClienteID = document.querySelector('#id').value;
    const TipoClienteID = document.querySelector('#tipo_cliente').value;

    const clienteDemo = {
        ClienteID,
        TipoClienteID
    }
    console.log(clienteDemo);

    if (validation(clienteDemo)) {
        alert ("Todos los datos son obligatorios")
    }else{
        return inserClientDem(clienteDemo);
    }
}

function validation(obj) {
    return !Object.values(obj).every(element=>element !== '');
}