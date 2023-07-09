import { Router } from "express";
import { methodsHTTP as detalleControllers } from "../controllers/facturadetalle.controllers.js";

const router = Router();
router.get("/", detalleControllers.getDetalle);
router.post("/",detalleControllers.addDetalle);
router.delete("/:id",detalleControllers.deletDetalle);
router.put("/:id",detalleControllers.updateDetalle);
router.get("/:id",detalleControllers.getDetal);
export default router; 