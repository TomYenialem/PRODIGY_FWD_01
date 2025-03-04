
const userInfo=require('../Models/User')
const bcrypt=require('bcrypt')

const rejesterInfo=async(user)=>{
    if(!user.email || !user.password || !user.name){
        return {status:400,message:"Please fill all the fields"};
    }
    try {
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(user.password,salt)

        const exsitedUser=await userInfo.findOne(user.email)
        if(exsitedUser){
            return {status:400,message:"Email already registered"};
        }
        const checkPassword=await bcrypt.compare(user.password,hashedPassword)
        if(!checkPassword){
            return {status:400,message:"Password not matched"};
        }
        const newUser=await userInfo({
            name:user.name,
            email:user.email,
            password:hashedPassword
        })
        await newUser.save()
        return {status:200,message:"User registered successfully"};
        
    } catch (error) {
        console.log(error)
        return {status:500,message:"Server Error"};

    }
}
module.exports=rejesterInfo;