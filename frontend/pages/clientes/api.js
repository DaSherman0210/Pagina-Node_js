const urlGetCli = "http://localhost:5000/api/clientes";

export const clientes = async () => {
  try {
    const cliente = await fetch(`${urlGetCli}`);
    const data = cliente.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export const inserClient=async(cliente)=>{
  try {
      await fetch(urlGetCli,{
      method:"POST",
      body:JSON.stringify(cliente),
      headers:{
        "Content-Type":"application/json"
      }
    });
    window.location.href="./clientes.html";
  } catch (error) {
    console.log(error);
  }
}

export const  delet=async (id)=>{
  try {
    await fetch(`${urlGetCli}/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    });
    window.location.href="./clientes.html";
  } catch (error){
    console.log(error);
  }
}
export const update = async (cliente,id)=>{
  try {
   await fetch(`${urlGetCli}/${id}`,{
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

export const getCliente = async (id) => {
  try {
    const cliente = await fetch(`${urlGetCli}/${id}`);
    const data = cliente.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}


