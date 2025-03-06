import toast from "react-hot-toast";
import base_url from "../Util/Axios";

const login = async (userDatas) => {
  try {
    const response = await base_url.post("/login", userDatas, {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export default login;
