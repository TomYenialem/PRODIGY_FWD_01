const userInfo = require("../Models/User");

const getAllUserInfo=async()=>{
    try{
        const allUsers=await userInfo.find().sort({createdAt:-1});
       return allUsers

    }
    catch(err){
    console.error("Error fetching user info:",err);
    }
}

module.exports=getAllUserInfo;