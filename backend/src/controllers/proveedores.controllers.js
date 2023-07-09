import getConnection from "../db/database.js";


export const getProveedores=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addProveedores= async (req,res)=>{
    try { 
        const {Compania,Contacto,Titulo,Direccion,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina}=req.body;
        const proveedor={
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax,
            Pagina
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO proveedores SET ?",proveedor)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProveedor = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM proveedores WHERE ProveedorID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateProveedor= async (req,res)=>{
    try {
        const {id}=req.params;
        const {Compania,Contacto,Titulo,Direccion,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina}=req.body;
        const proveedor={
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax,
            Pagina
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE proveedores SET ? WHERE ProveedorID=?",[proveedor,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getProveedor=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM proveedoresr WHERE ProveedorID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getProveedores,
    addProveedores,
    deleteProveedor,
    updateProveedor,
    getProveedor
}