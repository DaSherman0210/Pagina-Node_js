import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import clientesDemoRoutes from "./routes/clientesDem.routes.js";
import clientesDemoGraRoutes from "./routes/clientesDemoGra.routes.js";
import correosRoutes from "./routes/correo.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import cors from "cors";

const app= express();

app.set("port",5000);

//middware
app.use(express.json());
//configuracion de cors
const corsOption={
    methods: ["GET","POST","PUT","DELETE"],
}

app.use(cors(corsOption));
//Routes

app.use("/api/categorias",categoriasRoutes);
app.use("/api/clientes",clientesRoutes);
app.use("/api/clientesdemo",clientesDemoRoutes);
app.use("/api/clientesdemogra",clientesDemoGraRoutes);
app.use("/api/correos",correosRoutes);
app.use("/api/empleados",empleadosRoutes);


export default app; 