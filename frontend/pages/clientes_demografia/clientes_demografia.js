import { getClient } from "./api.js"
document.addEventListener('DOMContentLoaded',showClient);


async function showClient(){
    const client= await getClient();
    console.log(client);
    const table= document.querySelector('#clientes_demografia');
    client.forEach(element => {
        const {TipoClienteDesc,TipoClienteID}=element

        table.innerHTML+=`
        <tr>
            <td>${TipoClienteID}</td>
            <td>${TipoClienteDesc}</td>

       </tr>
        `
    });
}

