const express = require("express");
const addressRouters=require("./address.routers");
const orderRouters=require("./order.routers");
const {Profile}= require("../../controllers/users/profile.controllers");
const cartRoutes=require("./cart.routes");
const wishlistRoutes=require("./wishlist.router")
const router = express.Router();



router.get("/me",Profile);

router.use("/address",addressRouters);

router.use("/order",orderRouters);

router.use("/cart",cartRoutes);

router.use("/wishlist",wishlistRoutes)



module.exports = router;
