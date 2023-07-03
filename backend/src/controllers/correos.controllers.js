import getConnection from "../db/database.js";


export const getCorreos=async ()=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM correos");
        result.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addCorreos= async (req,res)=>{
    try {
        const {Compania,Telefono}=req.body;
        const correo={
            Compania,
            Telefono
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO correos SET ?",correo)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteCorreo = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM correos WHERE CorreoID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateCorreo= async (req,res)=>{
    try {
        const {id}=req.params;
        const {Compania,Telefono}=req.body;
        const correo={
            Compania,
            Telefono
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE correos SET ? WHERE CorreoID=?",[correo,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getCorreo=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM correos WHERE CorreoID=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getCorreos,
    getCorreo,
    updateCorreo,
    deleteCorreo,
    addCorreos
}