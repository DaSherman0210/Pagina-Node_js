import getConnection from "../db/database.js";


export const getubicaEmp=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleadoubicaciones");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addubicacionesEmp= async (req,res)=>{
    try { 
        const {EmpleadoID,UbicacionID}=req.body;
        const ubicacionesEmp={
            EmpleadoID,
            UbicacionID
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO empleadoubicaciones SET ?",ubicacionesEmp)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletubicacionesEmp = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM empleadoubicaciones WHERE EmpleadoID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateubicacionesEmp= async (req,res)=>{
    try {
        const {id}=req.params;
        const {UbicacionID} = req.body
        const ubicacionesEmp={
            UbicacionID
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE empleadoubicacion SET ? WHERE EmpleadoID=?",[ubicacionesEmp,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getubicacionesEmp=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM empleadoubicaciones WHERE EmpleadoID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getubicaEmp,
    addubicacionesEmp,
    deletubicacionesEmp,
    updateubicacionesEmp,
    getubicacionesEmp
}