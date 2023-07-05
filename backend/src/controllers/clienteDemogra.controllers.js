import getConnection from "../db/database.js";


export const getCliDemogra=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientesdemografia");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
}
export const addClienteDemogra= async (req,res)=>{
    try {
        const {TipoClienteID,TipoClienteDesc}=req.body;
        const clienteDemogra={
            TipoClienteID,
            TipoClienteDesc
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO clientesdemografia SET ?",clienteDemogra)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteClidem = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM clientesdemografia WHERE TipoClienteID = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const updateClienteDemogra= async (req,res)=>{
    try {
        const {id}=req.params;
        const {TipoClienteID}=req.body;
        const clienteDemo={
            TipoClienteID
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE clientesdemografia SET ? WHERE TipoClienteID=?",[clienteDemo,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getClienteDemGra=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM clientesdemografia WHERE TipoClienteID=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getCliDemogra,
    addClienteDemogra,
    deleteClidem,
    updateClienteDemogra,
    getClienteDemGra
}