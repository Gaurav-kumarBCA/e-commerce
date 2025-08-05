const express = require("express");
const categoryRoutes = require("./category.routes")
const productRoutes = require("./product.routes");
const { getAllUsers } = require("../../controllers/admin/user.controllers");

const router = express.Router();

router.use("", categoryRoutes);
router.use("/product", productRoutes);
router.use("/users",getAllUsers)
router.use("/user",require("./users.routes"));
module.exports = router;