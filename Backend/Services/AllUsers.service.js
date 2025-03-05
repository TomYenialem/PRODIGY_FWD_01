const userInfo = require("../Models/User");

const getAllUserInfo=async(req,res)=>{
    try{
        const allUsers=await userInfo.find()
        if(!allUsers){
            return res.status(404).json({message:"No user found"})
        }
        return res.status(200).json({message:"All users",data:allUsers})

    }
    catch(err){
    console.error("Error fetching user info:",err);
    return res.status(500).json({message:"Server error"})
    }
}