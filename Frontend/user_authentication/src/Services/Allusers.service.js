import base_url from "../Util/Axios";
const fetchAllVistors=async()=>{
    try {
        const response = await base_url.get("/alluser", {
          withCredentials: true,
        });
        return response
        
        
    } catch (error) {
        console.log(error)
    }
}
export default fetchAllVistors;