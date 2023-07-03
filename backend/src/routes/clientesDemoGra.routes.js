import { Router } from "express";
import { methodsHTTP as clientesControllers } from "../controllers/clienteDemogra.controllers.js";

const router = Router();
router.get("/", clientesControllers.getCliDemogra);
router.post("/",clientesControllers.addClienteDemogra);
router.delete("/:id",clientesControllers.deleteClidem);
router.put("/:id",clientesControllers.updateClienteDemogra);
router.get("/:id",clientesControllers.getClienteDemGra);
export default router; 