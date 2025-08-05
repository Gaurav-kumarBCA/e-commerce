const express=require("express");
const {createCategory1,getAllCategories1,getCategoriesBySlug1,updateCategory1,deleteCategory1}=require("../../controllers/admin/category.controller");
const router = express.Router();

router.post("/category",createCategory1);
router.get("/category",getAllCategories1);
router.get("/category/slug/:slug",getCategoriesBySlug1);
router.put("/category/:id",updateCategory1);
router.delete("/category/:id",deleteCategory1);

module.exports=router;