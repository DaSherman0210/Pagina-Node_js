import { Router } from "express";
import { methodsHTTP as EmpleadosControllers } from "../controllers/empleados.controllers.js";

const router = Router();
router.get("/", EmpleadosControllers.getEmpleados);
router.post("/",EmpleadosControllers.addEmpleado);
router.delete("/:id",EmpleadosControllers.deletEmpleado);
router.put("/:id",EmpleadosControllers.updateEmpleado);
router.get("/:id",EmpleadosControllers.getEmpleado);
export default router;