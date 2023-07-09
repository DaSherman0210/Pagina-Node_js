import { Router } from "express";
import { methodsHTTP as facturaControllers } from "../controllers/factura.controllers.js";

const router = Router();
router.get("/", facturaControllers.getFactura);
router.post("/",facturaControllers.addFactura);
router.delete("/:id",facturaControllers.deletFactura);
router.put("/:id",facturaControllers.updateFactura);
router.get("/:id",facturaControllers.getFactur);
export default router; 