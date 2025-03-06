

const fetchSingleInfo=async(req,res)=>{
    try {
       res.json(req.user)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}
module.exports=fetchSingleInfo;