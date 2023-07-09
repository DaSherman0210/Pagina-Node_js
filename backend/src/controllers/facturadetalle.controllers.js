import getConnection from "../db/database.js";


export const getDetalle=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM facturadetalle");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addDetalle= async (req,res)=>{
    try { 
        const {Cantidad,Descuento,FacturaID,PrecioUnitario,ProductoID}=req.body;
        const detalle={
            Cantidad,
            Descuento,
            FacturaID,
            PrecioUnitario,
            ProductoID
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO facturadetalle SET ?",detalle)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletDetalle= async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM facturadetalle WHERE FacturaID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateDetalle= async (req,res)=>{
    try {
        const {id}=req.params;
        const {Cantidad,Descuento,PrecioUnitario,ProductoID}=req.body;
        const detalle={
            Cantidad,
            Descuento,
            FacturaID,
            PrecioUnitario,
            ProductoID
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE facturadetalle SET ? WHERE FacturaID=?",[detalle,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getDetal=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM facturadetalle WHERE FacturaID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getDetalle,
    addDetalle,
    deletDetalle,
    updateDetalle,
    getDetal
}