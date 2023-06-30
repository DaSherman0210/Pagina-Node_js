import { categorias } from "./api.js";


document.addEventListener("DOMContentLoaded",showCategorias);
const tableCat=document.querySelector('#categorias');


async function  showCategorias() {
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
            </tr>
        `
    });
}



