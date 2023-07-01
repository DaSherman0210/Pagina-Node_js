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