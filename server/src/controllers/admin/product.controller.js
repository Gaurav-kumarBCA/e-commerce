const {createProduct,getAllProduct,updateProduct,deleteProduct}=require("../../services/admin/product.services");
const {generateSlug}=require("../../utils/slugify");
const createProductDB=async(req,res)=>{
    const {title,description,price,mrp,rating,stock,category,images}=req.body;
    if(!title || !description || !price || !mrp || !stock || !category){
        return res.json({
            success:false,
            error:"All field are required",
            required:["title","description","price","mrp","stock","category"]
        });
    }
        const slug=generateSlug(title);
    try{
        const product =await createProduct({title,slug,description,price,mrp,rating,stock,category,images});
        res.json({
            success:true,
            message:"Product created",
            data:product
        });
    }catch(error){
        if(error.code ===11000){
            return res.json({success:false,error:"Product already exists"})
        }
        console.log(error);
        res.json({
            success:false,
            error:"Falied to create product"
        });
    }
};

const getAllProductDB=async(req,res)=>{
    try{
        const product=await getAllProduct();
        res.json({
            success:true,
            data:product        
        });
    } catch(error){
        res.json({
            success:false,
            error:"product not found",
        });
    }
};

// const getAllProductByIdDB=async(req,res)=>{
//     try{
//         const product=await getAllProductById(req.params.id);
//         if(!product){
//             return res.json({
//                 success:false,
//                 message:"product not found"
//             });
//         } 
//         res.json({
//             success:true,
//             data:product
//         });
//     }catch(error){
//         res.json({
//             success:false,
//             error:"Falied to fatch product"
//         });
//     }
// };
const updateProductDB=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    if(body.title){
        body.slug=generateSlug(body.title);
    }
    try{
        const productDB=await updateProduct(id,body);
        res.json({
            success:true,
            message:"Product updated",
            data:productDB
        });
    } catch(error){
        if(error.code===11000){
            return res.json({success:false,error:"product already exists"});
        }
        res.json({
            success:false,
             error:"product not found",
             
        });
    }
};

const deleteProductDB=async(req,res)=>{
    const {id}=req.params;
    try{
        const productdb=await deleteProduct(id);
        res.json({
            success:true,
            message:"Product Deleted",
            data:productdb
        });
    } catch(error){
        res.json({
            success:false,
            error:"Product not found"
        });
    }
}

module.exports={createProductDB,getAllProductDB,updateProductDB,deleteProductDB};