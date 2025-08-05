const { profileUser } = require("../../services/user/profile.services");

const Profile=async(req,res)=>{
    const {id} = req.user;
    const data=await profileUser(id);
    return res.json({
        success:true,
        data,
    });
};

module.exports={Profile}
