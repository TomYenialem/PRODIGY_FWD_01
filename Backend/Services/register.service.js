
const userInfo=require('../Models/User')
const bcrypt=require('bcrypt')

const rejesterInfo=async(user)=>{
    console.log(user)
    if(!user.email || !user.password || !user.username){
        return {status:400,message:"Please fill all the fields"};
    }
    try {
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(user.password,salt)

        const exsitedUser=await userInfo.findOne({email:user.email})
        if(exsitedUser){
            return {status:400,message:"Email already registered"};
        }
        const checkPassword=await bcrypt.compare(user.password,hashedPassword)
        if(!checkPassword){
            return {status:400,message:"Password not matched"};
        }
        const userRole=user.role || "customer"
        const newUser=await userInfo({
            username:user.username,
            email:user.email,
            password:hashedPassword,
            role:userRole
        })
        await newUser.save()
        return {status:200,message:"User registered successfully"};
        
    } catch (error) {
        console.log(error)
        return {status:500,message:"Server Error"};

    }
}
module.exports=rejesterInfo;