import express from "express";
import {apiTest,getAllProducts,addAProduct,getAProduct,updateAProduct,deleteAProduct} from "../controllers/productController.js";

const productRouter=express.Router();

productRouter.get("/test",apiTest);

productRouter.get("/:id",getAProduct);

productRouter.get("/",getAllProducts);

productRouter.post("/",addAProduct);

productRouter.patch("/:id",updateAProduct);

productRouter.delete("/:id",deleteAProduct);

export default productRouter;