import { categorias,categoria,insertCategorias,update,delet } from "./api.js";


document.addEventListener("DOMContentLoaded",showCategorias);
const tableCat=document.querySelector('#categorias');


async function showCategorias() {
    const data=await categorias();
    console.log(data);
    data.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element;
        tableCat.innerHTML+=`
            <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <td> <button class="btn btn-danger delete" id="${CategoriaID}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${CategoriaID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
            </tr>
        `
    });
}

//metodo eliminar - DELETE 

tableCat.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        getCategoria(id);
    }
})

const borrar=(id)=>{
    const confir=confirm("desea eliminarlo");
    if(confir){
        console.log("uno"); 
        delet(id);
    }
}

//metodo insertar

const formInsert=document.querySelector('#insertForm');

formInsert.addEventListener('submit',(e)=>{
    insert(e);
    location.reload();
})

const insert=(e)=>{
    e.preventDefault();
    const CategoriaNombre=document.querySelector('#name').value;
    const Descripcion=document.querySelector('#description').value;
    const Imagen=document.querySelector('#image').value;
    const categoria={
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return insertCategorias(categoria);
    }
}



//update
const getCategoria= async(id)=>{
    const data=await categoria(id);
    const {CategoriaID,CategoriaNombre,Descripcion,Imagen}=data[0];
    const CategoriaN=document.querySelector('#nameUpdate');
    CategoriaN.setAttribute('placeholder',CategoriaNombre);
    CategoriaN.setAttribute('idCa',id);
    const Descrip=document.querySelector('#descriptionUpdate');
    Descrip.setAttribute('placeholder',Descripcion);
    
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateCa();
    location.reload();
})

function updateCa(){
    const CategoriaID=document.querySelector('#nameUpdate');
    const id=parseInt(CategoriaID.getAttribute('idCa'));
    const CategoriaNombre=document.querySelector('#nameUpdate').value;
    const Descripcion=document.querySelector('#descriptionUpdate').value;
    const Imagen=document.querySelector('#imageUpdate').files[0].name;
    const categoria={
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(categoria,id);
   if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return update(categoria,id);
    }  
}


function validation(obj) {
    return !Object.values(obj).every(element=>element !== '')
}
