import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from "cors";

const app= express();

app.set("port",5000);

//middware
app.use(express.json());
//configuracion de cors
const corsOption={
    methods: ["GET","POST","UPDATE","DELETE"],
}

app.use(cors(corsOption));
//Routes

app.use("/api/categorias",categoriasRoutes);


export default app; 