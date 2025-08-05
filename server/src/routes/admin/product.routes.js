const express=require("express");
const {createProductDB,getAllProductDB,updateProductDB,deleteProductDB}=require("../../controllers/admin/product.controller");
const router=express.Router();

router.post("/",createProductDB);
router.get("/",getAllProductDB);
// router.get("/:id",getAllProductByIdDB);
router.put("/:id",updateProductDB);
router.delete("/:id",deleteProductDB);

module.exports=router;