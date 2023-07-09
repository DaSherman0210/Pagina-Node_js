import { Router } from "express";
import { methodsHTTP as productosControllers } from "../controllers/producto.controllers.js";

const router = Router();
router.get("/", productosControllers.getProductos);
router.post("/",productosControllers.addProductos);
router.delete("/:id",productosControllers.deleteProduct);
router.put("/:id",productosControllers.updateProduct);
router.get("/:id",productosControllers.getProducto);
export default router; 