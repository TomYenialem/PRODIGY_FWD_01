const getAllUserInfo=require('../Services/AllUsers.service')

const allUsers=async(req,res)=>{
    try {
        const allUsers=await getAllUserInfo()
        if(allUsers.length==0){
            return res.status(404).json({message:"No users found"});
        }
        else{
            return res.status(200).json({
                message:"All users fetched successfully",
                data:allUsers
            });
        }

        
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

module.exports=allUsers;