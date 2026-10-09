import {Router} from "express";
import { createProduct, getProductById, listProducts, updateById, deleteProduct, updateStockProduct } from "../controllers/products.controller.js";
// import { productId, name, price, stock, stockRequerido, store} from "../validator.js" 
import { validarCampos } from "../middlewares/validar-campos.js";


const router = Router()

router.get("/", listProducts)
router.post("/",createProduct)
router.get("/:id",getProductById)
router.put ("/",updateById)
router.delete("/", deleteProduct)

router.patch("/:id", [getProductById,stockRequerido, validarCampos], updateStockProduct)

export default router



