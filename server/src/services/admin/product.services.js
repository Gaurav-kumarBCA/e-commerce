const Product =require("../../models/product");
const createProduct= async(data)=>{
    const newProduct=new Product(data);
    return await newProduct.save();
};
const getAllProduct= async()=>{
    return await Product.find({}).populate("category");
};
// const getAllProductById=async(id)=>{
//             return await Product.findById(id);
// };
const updateProduct=async(id,data)=>{
    return await Product.findByIdAndUpdate(id,data,{new:true});
};
const deleteProduct=async(id)=>{
    return await Product.findByIdAndDelete(id);
}

module.exports={createProduct,getAllProduct,updateProduct,deleteProduct};