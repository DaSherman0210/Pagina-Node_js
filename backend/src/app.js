import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import clientesDemoRoutes from "./routes/clientesDem.routes.js";
import clientesDemoGraRoutes from "./routes/clientesDemoGra.routes.js";
import correosRoutes from "./routes/correo.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import empubicaRoutes from "./routes/empubica.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
import detalleRoutes from "./routes/facturaDetal.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import ubicacionRoutes from "./routes/ubicacion.routes.js";
import regionesRoutes from "./routes/regiones.routes.js";
import cors from "cors";

const app= express();

app.set("port",5000);

//middware
app.use(express.json());

//configuracion de cors
const corsOption={
    methods: ["GET","POST","PUT","DELETE"]
}

app.use(cors(corsOption));
//Routes

app.use("/api/categorias",categoriasRoutes);
app.use("/api/clientes",clientesRoutes);
app.use("/api/clientesdemo",clientesDemoRoutes);
app.use("/api/clientesdemogra",clientesDemoGraRoutes);
app.use("/api/correos",correosRoutes);
app.use("/api/empleados",empleadosRoutes);
app.use("/api/ubicacionEmp",empubicaRoutes);
app.use("/api/factura",facturaRoutes);
app.use("/api/detalleFactura",detalleRoutes);
app.use("/api/producto",productosRoutes);
app.use("/api/ubicacion",ubicacionRoutes)
app.use("/api/regiones",regionesRoutes)
export default app;  