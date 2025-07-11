import express from "express";
import {apiTest,getAllProducts,addAProduct,getAProduct,updateAProduct,deleteAProduct} from "../controllers/productController.js";

const productRouter=express.Router();

productRouter.get("/test",apiTest);

productRouter.get("/:id([0-9]+)",getAProduct);

productRouter.get("/",getAllProducts);

productRouter.post("/",addAProduct);

productRouter.patch("/:id([0-9]+)",updateAProduct);

productRouter.delete("/:id([0-9]+)",deleteAProduct);

export default productRouter;