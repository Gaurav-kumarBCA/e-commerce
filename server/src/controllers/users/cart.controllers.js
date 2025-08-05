const { getCartItemsDB, addCartItemDB, updateCartItemDB,deleteCartItemDB } = require("../../services/user/cart.services");
const getCartItems = async (req, res) => {
    const { id } = req.user;
    try {
        const data = await getCartItemsDB(id);
        return res.status(200).json({
             success: true,
              message: "Cart items fetched successfully!",
               data, });
    } catch (error) { 
        return res.status(500).json({ 
            success: false,
             error: "something went wrong!", });
             }
};
const addCartItem = async (req, res) => {
    const { id } = req.user;
    const { item, quantity } = req.body;
    if ((!item, !quantity)) {
        return res.json({
            success: false, error: "All fields are required",
            required: ["item", "quantity"]
        });
    }
    try {
        const data = await addCartItemDB(id, item, quantity);
        console.log(data);
        return res.json({ success: true, data });
    }
    catch (error) {
        console.log(error);
        return res.json({ success: false, error: "something went wrong!" });
    }
};
const updateCartItem = async (req, res) => {
    const { id: cartId } = req.params;
    const { quantity } = req.body;
    if (!quantity) {
        return res.json({
            success: false,
            error: "All fields are required",
            required: ["quantity"]
        });
    }
    try {
        const data = await updateCartItemDB(cartId, quantity);
        return res.json({ success: true, data });
    }
    catch (error) {
        return res.json({ success: false, error: "something went wrong!" });
    }
};
const deleteCartItem = async (req,res) => { 
    const {id:cartId} = req.params;
    try {
        const data = await deleteCartItemDB(cartId);
        if(!data){
            return res.json({
                success:false,
                message:"cart item not found"
            });
        }
        return res.json({
            success:true,
            message:"item deleted",
            data
        });
    } catch (error) {
        console.log(error);
        res.json({
            error:"somthing went wrong!"
        })
    }
};
module.exports = { getCartItems, addCartItem, updateCartItem, deleteCartItem };