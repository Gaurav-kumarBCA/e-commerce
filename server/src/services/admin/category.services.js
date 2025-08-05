const Category=require("../../models/category");
const Product =require("../../models/product")
const createCategory= async({name,slug})=>{
    const category=new Category({name,slug});
    return await category.save();
};
const getAllCategories=async()=>{
    // return await Category.find();
    const categories= await Category.find({}).lean();
    const categoriesWithTotal=await Promise.all(
        categories.map(async(cat)=>{
            const total=await Product.countDocuments({category:cat._id});
            return {...cat,total};
        })
    ) ;   
    return categoriesWithTotal;
};
const getCategoriesBySlug=async(slug)=>{
    return await Category.findOne({slug});
};
const updateCategory=async(id,updateData)=>{
    return await Category.findByIdAndUpdate(id,updateData,{new:true});
};
const deleteCategory=async(id)=>{
    return await Category.findByIdAndDelete(id);
}
module.exports={createCategory,getAllCategories,getCategoriesBySlug,updateCategory,deleteCategory}