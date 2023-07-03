import getConnection from "../db/database.js";


export const getEmpleados=async ()=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        result.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addEmpleado= async (req,res)=>{
    try {
        const {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe,RutaFoto}=req.body;
        const empleado={
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO empleados SET ?",empleado)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletEmpleado = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM empleados WHERE EmpleadoID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateEmpleado= async (req,res)=>{
    try {
        const {id}=req.params;
        const {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe,RutaFoto}=req.body;
        const empleado={
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Extension,
            Foto,
            Notas,
            Jefe,
            RutaFoto
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE correos SET ? WHERE CorreoID=?",[empleado,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getEmpleado=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM empleados WHEREempleadoID=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getEmpleados,
    addEmpleado,
    deletEmpleado,
    updateEmpleado,
    getEmpleado
}