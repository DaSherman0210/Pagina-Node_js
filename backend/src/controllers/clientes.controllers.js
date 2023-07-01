import getConnection from "../db/database.js";

const getClientes = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT ClienteID,Compania,Contacto FROM clientes");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const methodsHTTP={
  getClientes
}