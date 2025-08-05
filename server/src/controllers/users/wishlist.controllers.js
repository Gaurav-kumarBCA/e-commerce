const {addToWishlistDB,getWishlistDB,removeFromWishlistDB}=require("../../services/user/wishlist.services");
const addToWishlist=async(req,res)=>{
        const userId=req.user.id;
        const {product}=req.body;
        if(!product){
            return res.json({
                success:false,
                message:"field are required",
                require:"product"
            });
        }
        try {
            const data=await addToWishlistDB(userId,product)
            return res.json({
                success:true,
                data
            });
        } catch (error) {
            console.log(error);
            return res.json({
                success:false,
                error:"somthing went wrong"
            });
        }
};
const getWishlist=async(req,res)=>{
    const userid=req.user._id;
    try{
        const data=await getWishlistDB(userid);
        if(Array.isArray(data) && data.length === 0){
            return res.json({success:true,message:"no item"});
        }
        return res.json({
            success:true,
            message:"wishlist item fetch successfully",
            data   
        });
    }catch(error){
        return req.json({
            success:false,
            message:"somthing went wrong"
        });
    }
};
const removeFromWishlist=async(req,res)=>{
    const {id:userId}=req.params;
    try {
        const data=await removeFromWishlistDB(userId);
        if(!data){
            return res.json({
                success:false,
                message:"Wishlist item not fond"
            });
            
        }
        return res.json({
            success:true,
            message:"Wishlist item removed",
            data
        });
    } catch (error) {
        return res.json({
            success:false,
            error:"somthing went wrong"
        });
    }
};
const clearWishlist=()=>{};

module.exports={addToWishlist,getWishlist,removeFromWishlist,clearWishlist};