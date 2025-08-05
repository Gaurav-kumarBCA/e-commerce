const mongoose = require("mongoose");

const wistListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
},
{timestamps:true}
);

const WishList = mongoose.model("WishList", wistListSchema);

module.exports = WishList;