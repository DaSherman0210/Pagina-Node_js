const urlGetCliDem = "http://localhost:5000/api/clientesdemo";

export const clienteDem = async () => {
    try {
        const clienteDem = await fetch(urlGetCliDem);
        const data = clienteDem.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const inserClientDem = async (clienteDem) =>{
    try {
        await fetch (urlGetCliDem , {
            method:"POST",
            body: JSON.stringify(clienteDem),
            headers:{
                "Content-Type":"application/json"
            }
        })
        window.Location.href="./clientes_demo.html";
    } catch (error) {
        console.log(error.message);
    }
}