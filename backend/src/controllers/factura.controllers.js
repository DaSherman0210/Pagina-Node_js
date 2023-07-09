import getConnection from "../db/database.js";


export const getFactura=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM facturas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addFactura= async (req,res)=>{
    try { 
        const {ClienteID,EmpleadoID,FechaFactura,FechaRegistro,EnvioVia,Transporte,NombreEnvio,DireccionEnvio,CiudadEnvio,RegionEnvio,CodigoPostalEnvio,PaisEnvio}=req.body;
        const factura={
            ClienteID,
            EmpleadoID,
            FechaFactura,
            FechaRegistro,
            EnvioVia,
            Transporte,
            NombreEnvio,
            DireccionEnvio,
            CiudadEnvio,
            RegionEnvio,
            CodigoPostalEnvio,
            PaisEnvio
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO facturas SET ?",factura)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletFactura= async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM facturas WHERE FacturaID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateFactura= async (req,res)=>{
    try {
        const {id}=req.params;
        const {ClienteID,EmpleadoID,FechaFactura,FechaRegistro,EnvioVia,Transporte,NombreEnvio,DireccionEnvio,CiudadEnvio,RegionEnvio,CodigoPostalEnvio,PaisEnvio}=req.body;
        const factura={
            ClienteID,
            EmpleadoID,
            FechaFactura,
            FechaRegistro,
            EnvioVia,
            Transporte,
            NombreEnvio,
            DireccionEnvio,
            CiudadEnvio,
            RegionEnvio,
            CodigoPostalEnvio,
            PaisEnvio
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE facturas SET ? WHERE FacturaID=?",[factura,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getFactur=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM facturas WHERE FacturaID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getFactura,
    addFactura,
    deletFactura,
    updateFactura,
    getFactur
}