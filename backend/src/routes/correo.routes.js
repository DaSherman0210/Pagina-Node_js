import { Router } from "express";
import { methodsHTTP as correosControllers } from "../controllers/correos.controllers.js";

const router = Router();
router.get("/", correosControllers.getCorreos);
router.post("/",correosControllers.addCorreos);
router.delete("/:id",correosControllers.deleteCorreo);
router.put("/:id",correosControllers.updateCorreo);
router.get("/:id",correosControllers.getCorreo);
export default router; 