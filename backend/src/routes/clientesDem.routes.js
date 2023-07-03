import { Router } from "express";
import { methodsHTTP as clientesControllers } from "../controllers/clientesdemo.controllers.js";

const router = Router();
router.get("/", clientesControllers.getCliDemo);
router.post("/",clientesControllers.addClienteDemo);
router.delete("/:id",clientesControllers.deleteCli);
router.put("/:id",clientesControllers.updateCliente);
router.get("/:id",clientesControllers.getClienteDe);
export default router; 