const User= require("../../models/user");
const profileUser=async(id)=>{
    const user= await User.findById(id).select("-password -__v");
    // fetch addresses with user id
    return user;
};
module.exports={profileUser};