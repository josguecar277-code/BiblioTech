import { Router } from "express";
import {createStores, getStoresById, listStores, updateStoreById, deleteStores} from "../controllers/store.controller.js";
import { name,owner,address,storeId } from "../validator/store.validators.js";

const router = Router ()

router.get("/", listStores)
router.post("/",
    [name,address,owner],createStores)
router.get("/:id",[storeId],getStoresById)
router.put ("/",[storeId,name,address,owner],updateStoreById)
router.delete("/", deleteStores)



export default router