import getConnection from "../db/database.js";


export const getUbicaciones=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ubicaciones");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addUbicaciones= async (req,res)=>{
    try { 
        const {RegionesID,UbicacionDescripcion}=req.body;
        const ubicaciones={
            RegionesID,
            UbicacionDescripcion
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO ubicaciones SET ?",ubicaciones)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteUbicacion = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM ubicaciones WHERE UbicacionID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateUbicacion= async (req,res)=>{
    try {
        const {id}=req.params;
        const {RegionesID,UbicacionDescripcion}=req.body;
        const ubicaciones={
            RegionesID,
            UbicacionDescripcion
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE empleadoubicacion SET ? WHERE UbicacionID=?",[ubicaciones,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getUbicacion=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM ubicaciones WHERE UbicacionID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getUbicaciones,
    addUbicaciones,
    deleteUbicacion,
    updateUbicacion,
    getUbicacion
}