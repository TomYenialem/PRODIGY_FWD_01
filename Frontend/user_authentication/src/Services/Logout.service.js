import toast from "react-hot-toast";
import base_url from "../Util/Axios";
  const logout=async()=>{
    try {
        const response = await base_url.post("/logout", {
          withCredentials: true,
        });
        return response 
        
    } catch (error) {
        console.log(error.message)
   

    }
  }
  export default logout;