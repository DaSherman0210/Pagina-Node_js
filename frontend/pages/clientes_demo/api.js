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
        window.location.href="./clientes_demo.html";
    } catch (error) {
        console.log(error.message);
    }
}

export const  delet=async (id)=>{
    try {
      await fetch(`${urlGetCliDem}/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      });
      window.location.href="./clientes_demo.html";
    } catch (error){
      console.log(error);
    }
  }
  export const update = async (cliente,id)=>{
    try {
     await fetch(`${urlGetCliDem}/${id}`,{
      method:"PUT",
      body:JSON.stringify(cliente),
      headers:{
        'Content-Type':'application/json'
      } 
     })
     window.location.href="./clientes.html";
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getOne = async (id) => {
    try {
      const cliente = await fetch(`${urlGetCliDem}/${id}`);
      const data = cliente.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }