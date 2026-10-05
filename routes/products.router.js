import {Router} from "express";
import { createProduct, getProductById, listProducts, updateById, deleteProduct, updateStock } from "../controllers/products.controller.js";



const router = Router()

router.get("/", listProducts)
router.post("/",createProduct)
router.get("/:id",getProductById)
router.put ("/",updateById)
router.delete("/", deleteProduct)

router.patch("/:id", updateStock)

export default router



