import toast from 'react-hot-toast';
import base_url from '../Util/Axios'

const register = async (userDatas) => {
  try {
    const response = await base_url.post("/register", userDatas, {
      withCredentials: true, //allow cookie to be sent
    });
 
    return response
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error)
  }
};
export default register;
