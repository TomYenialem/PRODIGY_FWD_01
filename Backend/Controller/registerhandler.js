const rejesterInfo=require('../Services/register.service.js')
const register=async(req,res)=>{
    try{
        const user=req.body
        const result=await rejesterInfo(user)
        res.status(result.status).json({message:result.message})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

module.exports=register;