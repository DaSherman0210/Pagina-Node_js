import getConnection from "../db/database.js";


export const getRegiones=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM regiones");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addregiones= async (req,res)=>{
    try { 
        const {RegionesDescripcion}=req.body;
        const regiones={
            RegionesDescripcion
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO regiones SET ?",regiones)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteRegion = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM regiones WHERE RegionesID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateRegiones= async (req,res)=>{
    try {
        const {id}=req.params;
        const {RegionesDescripcion}=req.body;
        const regiones={
            RegionesDescripcion
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE regiones SET ? WHERE RegionesID=?",[regiones,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getRegion=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM regiones WHERE RegionesID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getRegiones,
    addregiones,
    deleteRegion,
    updateRegiones,
    getRegion
}