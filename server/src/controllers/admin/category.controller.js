const {createCategory,getAllCategories,getCategoriesBySlug,updateCategory,deleteCategory} =require("../../services/admin/category.services");
const {generateSlug}=require("../../utils/slugify");

const createCategory1=async(req,res)=>{
    try{
        const {name}=req.body;
        const slug=generateSlug(name);
        const category1= await createCategory({name,slug});
        return res.json({
             success:true,
            data:category1,
            message:"Category created successfully"
        });
    } 
    catch(error){
        return res.json({
            success:false,
            error:"falied to Category created  ",
        })
    }
};

const getAllCategories1=async(req,res)=>{
    try{
        const getCategory=await getAllCategories();
        return res.json({
            data:getCategory,
        });
    } catch(error){
       return res.json({
        error:"Falied to fetch Categories",
       });
    }
};

const getCategoriesBySlug1=async(req,res)=>{
    try{
        const category1= await getCategoriesBySlug(req.params.slug);
        if(!category1)return
        res.json({
            success:true,
            message:"Yes i found it",
            data:category1,
        });
    }catch(error){
        res.json({
            error:"Falied to fatch Category"
        });
    }
};

const updateCategory1=async(req,res)=>{
        try{
            const update=await updateCategory(req.params.id,req.body);
            res.json({
                message:"Category updated",
                category:update,
            });
        }catch(erroe){
            res.json({
                error:"Falied to update Category"
            });
        }
};

const deleteCategory1=async(req,res)=>{
        try{
            await deleteCategory(req.params.id);
            res.json({
                message:"Category deleted",
            })
        } catch(error){
            res.json({
                error:"Falied to Delete Category"
            });
        }
};


module.exports={createCategory1,getAllCategories1,getCategoriesBySlug1,updateCategory1,deleteCategory1}