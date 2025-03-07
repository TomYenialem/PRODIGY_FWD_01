import toast from "react-hot-toast";
import base_url from "../Util/Axios";

const login = async (userDatas) => {
  try {
    const response = await base_url.post("/login", userDatas, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      toast.error(
        error.response.data.message || "Login failed. Please try again."
      );
    } else if (error.request) {
      // No response from the server
      toast.error(
        "No response from server. Please check your internet connection."
      );
    } else {
      // Other errors
      toast.error("An error occurred. Please try again.");
    }
    return null; // Return null or handle it appropriately
  }
};

export default login;
