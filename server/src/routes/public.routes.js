const express=require("express");
const { getAllProducts, getAllCategories, getProductByCategory, getProductBySlug } = require("../controllers/public.controllers");

const router=express.Router();

// list all products

router.get("/product",getAllProducts);

// list all categorier
router.get("/category",getAllCategories);


// product by categories
router.get("/products/:category",getProductByCategory);


// product details
router.get("/product/:slug",getProductBySlug);

module.exports=router;
