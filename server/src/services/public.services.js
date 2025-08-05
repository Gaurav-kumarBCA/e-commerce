const Category=require("../models/category");
const Product=require("../models/product");

const getAllProductsDB=async()=>{
    return await Product.find({}).select("title slug images").populate("category");
};
const getAllCategoriesDB=async()=>{
    return await Category.find({});
}
const getProductByCategoryDB=async(slug)=>{
        const cd= await Category.findOne({slug});
        if(!cd){
            return {error:"Category not found"};
        }
        return await Product.find({category:cd._id}).select("title slug images");
    };

    const getProductBySlugDB=async(slug)=>{
        return await Product.findOne({slug}).populate("category");
    };

module.exports={getAllProductsDB,getAllCategoriesDB,getProductByCategoryDB,getProductBySlugDB};