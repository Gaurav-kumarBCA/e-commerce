const express=require("express");
const {addToWishlist,getWishlist,removeFromWishlist,clearWishlist}=require("../../controllers/users/wishlist.controllers");

const router= express.Router();

router.post("/",addToWishlist);
router.get("/",getWishlist);
router.delete("/:id",removeFromWishlist);
router.delete("/clear",clearWishlist);

module.exports=router;