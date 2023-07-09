import { Router } from "express";
import { methodsHTTP as proveedorControllers } from "../controllers/proveedores.controllers.js";

const router = Router();
router.get("/", proveedorControllers.getProveedores);
router.post("/",proveedorControllers.addProveedores);
router.delete("/:id",proveedorControllers.deleteProveedor);
router.put("/:id",proveedorControllers.updateProveedor);
router.get("/:id",proveedorControllers.getProveedor);
export default router; 