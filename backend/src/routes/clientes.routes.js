import { Router } from "express";
import { methodsHTTP as clientesControllers } from "../controllers/clientes.controllers.js";

const router = Router();
router.get("/", clientesControllers.getClientes);

export default router;