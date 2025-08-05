const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String,require:true },
  price: { type: Number, require: true },
  mrp:{type:Number,require:true},
  slug:{type:String,require:true,unique:true},
  category: { type: mongoose.Schema.Types.ObjectId,ref:"Category",require:true },
  stock: { type: Number, default: 0 },
  imageUrl: [{ type: String }], // If you want to store image path or URL
  createdAt: { type: Date, default: Date.now }
},
{timestamps:true}

);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;