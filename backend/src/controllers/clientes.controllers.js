import getConnection from "../db/database.js";

const getClientes = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM clientes");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const getCliente = async (req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM clientes WHERE ClienteID = ?' , id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const deleteCliente = async (req , res) => {
  try { 
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query('DELETE FROM clientes WHERE ClienteID = ?' , id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const addCliente = async (req , res) => {
  try {
    const {Compania , Contacto , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax} = req.body;
    const cliente = {
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
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO clientes SET ?' , cliente);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const updateClientes = async (req , res) => {
  try {
    const {id} = req.params;
    const {Compania , Contacto , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax} = req.body;
    const cliente = {
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
    const connection = await getConnection();
    const result = await connection.query('UPDATE clientes SET ? WHERE ClienteID = ?' , [cliente , id]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const methodsHTTP={
  getClientes,
  getCliente,
  deleteCliente,
  addCliente,
  updateClientes
}