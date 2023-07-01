import { clientes } from "./api.js";

document.addEventListener("DOMContentLoaded", showClientes);
const table = document.querySelector('#categorias');

async function showClientes (){
  const clientes = await clientes();
  clientes.forEach(cliente => {
    const {ClienteID , Compania , Contacto , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax} = cliente;
    table.innerHTML += 
    `
      <tr>
        <td>${ClienteID}</td>
        <td>${Compania}</td>
        <td>${Contacto}</td>
        <td>${Titulo}</td>
        <td>${Direccion}</td>
        <td>${Ciudad}</td>
        <td>${Regiones}</td>
        <td>${CodigoPostal}</td>
        <td>${Pais}</td>
        <td>${Telefono}</td>
        <td>${Fax}</td>
        <td> <button class="btn btn-danger delete" id="${ClienteID}">Delete</button></td>
        <td> <button type="button" class="btn btn-warning update" id="${ClienteID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
      </tr>
    `
  }) 
}