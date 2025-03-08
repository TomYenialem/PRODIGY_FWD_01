import React, { useState, useEffect } from "react";
import { createContext } from "react";
import base_url from "../Util/Axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const contextApi = createContext();
export const useContextApi = () => useContext(contextApi);

function UseContext({ children }) {
  const navigate = useNavigate();
  const [singleData, setSingleData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const fetchSingleData = async () => {
    try {
      const response = await base_url.get("/single_user", {
        withCredentials: true,
      });
      if (response.data.role === "admin") {
        setIsAdmin(true);
      }
      setSingleData(response.data);
    } catch (error) {
      console.log(error.response.data.message);
      // navigate("/login");
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, []);
  console.log(singleData);
  return (
    <contextApi.Provider value={{ singleData, isAdmin }}>
      {children}
    </contextApi.Provider>
  );
}

export default UseContext;
