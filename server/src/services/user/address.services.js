const Address = require("../../models/address");

const getAddressesDB = async (id) => {
  return await Address.find({user:id}).populate("user");
};

const addAddressDB = async (data) => {
  const newAddress = new Address(data);
  return await newAddress.save();
};

const updateAddressDB =async(id,data)=>{
  return await Address.findByIdAndUpdate(id,data,{new:true})
};

const deleteAddressDB=async(id)=>{
  return await Address.findByIdAndDelete(id);
};

module.exports = { getAddressesDB, addAddressDB,updateAddressDB,deleteAddressDB };