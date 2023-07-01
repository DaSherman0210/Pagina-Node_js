import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
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


export default app; 