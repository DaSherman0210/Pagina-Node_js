import { Router } from "express";
import { methodsHTTP as clientesControllers } from "../controllers/clientes.controllers.js";

const router = Router();
router.get("/", clientesControllers.getClientes);
router.post("/", clientesControllers.addCliente);
router.get("/:id", clientesControllers.getCliente);
router.delete("/:id" , clientesControllers.deleteCliente);
router.put("/:id", clientesControllers.updateClientes);

export default router; 