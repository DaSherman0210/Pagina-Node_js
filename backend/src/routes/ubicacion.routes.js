import { Router } from "express";
import { methodsHTTP as ubicacionControllers } from "../controllers/ubicaciones.controllers.js";

const router = Router();
router.get("/", ubicacionControllers.getUbicaciones);
router.post("/",ubicacionControllers.addUbicaciones);
router.delete("/:id",ubicacionControllers.deleteUbicacion);
router.put("/:id",ubicacionControllers.updateUbicacion);
router.get("/:id",ubicacionControllers.getUbicacion);
export default router; 