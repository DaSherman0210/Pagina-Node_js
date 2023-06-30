import { Router } from "express";
import { methodsHTTP as categoriaControllers } from "../controllers/categorias.controllers.js";


const router=Router();
router.get("/", categoriaControllers.getCategorias);
router.post("/", categoriaControllers.addCategorias);
router.get("/:id", categoriaControllers.getCategoria);
//la ruta recibe un parametro
router.delete("/:id", categoriaControllers.deleteCategoria);
router.put("/:id", categoriaControllers.updateCategorias);

export default router;

