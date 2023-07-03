import { clientes,inserClient,delet,getCliente,update } from "./api.js";

document.addEventListener("DOMContentLoaded", showClientes);
const table = document.querySelector('#clientes');

async function showClientes (){
  const cliente = await clientes();
  console.log(cliente);
  cliente.forEach(cliente => {
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

//metodo insertar


const formInsert=document.querySelector('#formInsert');
// agg un addeventListener para el evento submit y ejecutar la funcion de insertar
formInsert.addEventListener('submit',(e)=>{
  e.preventDefault();
  insert();
})

//
const insert=()=>{
  
  const ClienteID=document.querySelector('#id').value;
  const Compania=document.querySelector('#company').value;
  const Contacto=document.querySelector('#contact').value;
  const Titulo=document.querySelector('#title').value;
  const Direccion=document.querySelector('#direction').value;
  const Ciudad=document.querySelector('#city').value;
  const Regiones=document.querySelector('#region').value;
  const CodigoPostal=document.querySelector('#potCode').value;
  const Pais=document.querySelector('#country').value;
  const Telefono=document.querySelector('#cellphone').value;
  const Fax=document.querySelector('#fax').value;

  const cliente={
    ClienteID,
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax
  }
  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return inserClient(cliente);
  } 
}

// delete 

table.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
    const id=e.target.getAttribute('id');
    delet(id);
}else if(e.target.classList.contains('update')){
    const id=e.target.getAttribute('id');
    getClient(id);
}
})


//update

const getClient=async (id)=>{
  const data=await getCliente(id);
  const {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}=data[0]
  console.log(data);
  const CompaniaUp=document.querySelector('#companyUpdat');
  CompaniaUp.setAttribute('placeholder',Compania);
  CompaniaUp.setAttribute('idCli',id);

  const ContactoUp=document.querySelector('#contactUpdat');
  ContactoUp.setAttribute('placeholder',Contacto);

  const TituloUp=document.querySelector('#titleUpdat');
  TituloUp.setAttribute('placeholder',Titulo);

  const DireccionUp=document.querySelector('#directionUpdat');
  DireccionUp.setAttribute('placeholder',Direccion);

  const CiudadUp=document.querySelector('#cityUpdat');
  CiudadUp.setAttribute('placeholder',Ciudad);

  const RegionesUp=document.querySelector('#regionUpdat');
 RegionesUp.setAttribute('placeholder',Regiones);

  const CodigoPostalUp=document.querySelector('#potCodeUpdat');
  CodigoPostalUp.setAttribute('placeholder',CodigoPostal);

  const PaisUp=document.querySelector('#countryUpdat');
  PaisUp.setAttribute('placeholder',Pais);

  const TelefonoUp=document.querySelector('#cellphoneUpdat');
  TelefonoUp.setAttribute('placeholder',Telefono);

  const FaxUp=document.querySelector('#faxUpdat');
  FaxUp.setAttribute('placeholder',Fax);
}

const updateForm=document.querySelector('#updateForm');
updateForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  updateClie();
})


function updateClie() {
  const id=document.querySelector('#companyUpdat');
  const dato=id.getAttribute('idCli');
  const Compania=document.querySelector('#companyUpdat').value;
  const Contacto=document.querySelector('#contactUpdat').value;
  const Titulo=document.querySelector('#titleUpdat').value;
  const Direccion=document.querySelector('#directionUpdat').value;
  const Ciudad=document.querySelector('#cityUpdat').value;
  const Regiones=document.querySelector('#regionUpdat').value;
  const CodigoPostal=document.querySelector('#potCodeUpdat').value;
  const Pais=document.querySelector('#countryUpdat').value;
  const Telefono=document.querySelector('#cellphoneUpdat').value;
  const Fax=document.querySelector('#faxUpdat').value;

  const cliente={
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax
  }
  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return update(cliente,dato);
  } 
}
function validation(obj) {
  return !Object.values(obj).every(element=>element != '')
}



