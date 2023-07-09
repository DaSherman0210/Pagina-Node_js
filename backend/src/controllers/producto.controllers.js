import getConnection from "../db/database.js";


export const getProductos=async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const addProductos= async (req,res)=>{
    try { 
        const {CantidadPorUnidad,CategoriaID,Discontinuado,NivelReorden,PrecioUnitario,ProductoNombre,ProveedorID,UnidadesPedidas,UnidadesStock}=req.body;
        const producto={
            CantidadPorUnidad,
            CategoriaID,
            Discontinuado,
            NivelReorden,
            PrecioUnitario,
            ProductoNombre,
            ProveedorID,
            UnidadesPedidas,
            UnidadesStock
        }
        const connection=await getConnection();
        const result=connection.query("INSERT INTO productos SET ?",producto)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const {id}=req.params;
        const connection= await getConnection();
        const result=connection.query("DELETE FROM productos WHERE ProductoID = ?",id);
        res.json(result);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}
export const updateProduct= async (req,res)=>{
    try {
        const {id}=req.params;
        const {CantidadPorUnidad,CategoriaID,Discontinuado,NivelReorden,PrecioUnitario,ProductoNombre,ProveedorID,UnidadesPedidas,UnidadesStock}=req.body;
        const producto={
            CantidadPorUnidad,
            CategoriaID,
            Discontinuado,
            NivelReorden,
            PrecioUnitario,
            ProductoNombre,
            ProveedorID,
            UnidadesPedidas,
            UnidadesStock
        }
        const connection=await getConnection();
        const result=connection.query("UPDATE productos SET ? WHERE ProductoID=?",[producto,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getProducto=async (req,res)=>{
    try {
        const {id}=req.params;
        const connection=await getConnection();
        const result=connection.query("SELECT * FROM productos WHERE ProductoID =?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP={
    getProductos,
    addProductos,
    deleteProduct,
    updateProduct,
    getProducto
}