import getConnection from "../db/database.js";


export const getCliDemo=async ()=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientesdemo");
        result.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addClienteDemo= async (req,res)=>{
    try {
        const {ClienteID,TipoClienteID}=req.body;
        const clienteDemo={
            ClienteID,
            TipoClienteID
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO clientesdemo SET ?",clienteDemo)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteCli = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM clientesdemo WHERE ClienteID = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const updateCliente= async (req,res)=>{
    try {
        const {id}=req.params;
        const {TipoClienteID}=req.body;
        const clienteDemo={
            TipoClienteID
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE clientesdemo SET ? WHERE ClienteID=?",[clienteDemo,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getClienteDe=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM clientesdemo WHERE ClienteID=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getCliDemo,
    addClienteDemo,
    deleteCli,
    updateCliente,
    getClienteDe
}

