const Wishlist=require("../../models/wishlist");


const addToWishlistDB=async(userId,product)=>{
    const wishlist=await Wishlist.findOne({user:userId, product});
    if(!wishlist){
        const data= new Wishlist({user:userId,product});
        return (await data.save());
    }else{
        return {};
    }
};

const getWishlistDB=async(userid)=>{
    return await Wishlist.find({userid});
};

const removeFromWishlistDB=async(userId)=>{
    return await Wishlist.findByIdAndDelete(userId);
}

module.exports={addToWishlistDB,getWishlistDB,removeFromWishlistDB};