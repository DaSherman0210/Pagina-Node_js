import {clienteDem,inserClientDem,delet,update,getOne} from "./api.js";
import { getClientD } from "../clientes_demografia/api.js";
import { clientes } from "../clientes/api.js";
document.addEventListener('DOMContentLoaded', ()=>{
    showClientesDemo();
    getData();
});
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


async function getData(){
    const dataClienteDemografia= await getClientD();
    const dataCliente= await clientes();
    const select=document.querySelector("#ClienteID")
    console.log(dataCliente)
    dataCliente.forEach(element=>{
        const {ClienteID,Compania} = element
        select.innerHTML+=`
        <option value="${ClienteID}">${Compania}</option>
        `
    })
    const select2 =document.querySelector("#tipoCliente");
    console.log(dataClienteDemografia)
    dataClienteDemografia.forEach(element=>{
        const {TipoClienteID,TipoClienteDesc} = element
        select2.innerHTML+=`
        <option value="${TipoClienteID}">${TipoClienteDesc}</option>
        `
    })

}


table.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
      const id=e.target.getAttribute('id');
      delet(id);
  }else if(e.target.classList.contains('update')){
      const id=e.target.getAttribute('id');
      getClient(id);
  }
  })

const formInsert = document.querySelector("#formInsert");
formInsert.addEventListener('submit',(e)=>{
    e.preventDefault();
    insert();
})

const insert = () => {
    const ClienteID = document.querySelector('#ClienteID').value;
    const TipoClienteID = document.querySelector('#tipoCliente').value;

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

const getClient=async (id)=>{
    console.log(id)
    const data=await getOne(id);
    const {ClienteID,TipoClienteID}=data
    console.log(data)
    
    document.querySelector('#updClienteID').value=ClienteID;
    
  
    document.querySelector('#updTipoCliente').value=TipoClienteID;
    
  }

function validation(obj) {
    return !Object.values(obj).every(element=>element !== '');
}