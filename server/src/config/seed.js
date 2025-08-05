require ("dotenv").config();
const User = require("../models/user");
const { hashpassword } = require("../utils/slugify");
const { connectDB } = require("./db");

const dbSeed=async()=>{
try{
    await connectDB();
    console.log("Database Seeding");
    console.log("creating Admin user");
    const admin=new User({
        name:"Admin",
        email:"admin@me.com",
        password:await hashpassword("admin"),
        role:"admin"
    });
    await admin.save();
    console.log("created admin!");
    process.exit(0)
}catch(error){
    if(error.code===11000){
        console.log("A user with this email already exist!");
        process.exit(1);
    }
    console.log(error);
    console.log("somthing went wrong");
    process.exit(1);
}
};
dbSeed();