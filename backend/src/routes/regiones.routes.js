import { Router } from "express";
import { methodsHTTP as regionesControllers } from "../controllers/regiones.controllers.js";

const router = Router();
router.get("/", regionesControllers.getRegiones);
router.post("/",regionesControllers.addregiones);
router.delete("/:id",regionesControllers.deleteRegion);
router.put("/:id",regionesControllers.updateRegiones);
router.get("/:id",regionesControllers.getRegion);
export default router; 