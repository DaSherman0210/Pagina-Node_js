import { Router } from "express";
import { methodsHTTP as ubicaempcontrollers } from "../controllers/ubicacionEmp.controllers.js";

const router = Router();
router.get("/", ubicaempcontrollers.getubicaEmp);
router.post("/",ubicaempcontrollers.addubicacionesEmp);
router.delete("/:id",ubicaempcontrollers.deletubicacionesEmp);
router.put("/:id",ubicaempcontrollers.updateubicacionesEmp);
router.get("/:id",ubicaempcontrollers.getubicacionesEmp);
export default router; 