import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import base_url from '../Util/Axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
const contextApi=createContext()
export const useContextApi=()=>useContext(contextApi)

function UseContext({children}) {
      const [singleData, setSingleData] = useState(null);
      const fetchSingleData = async () => {
        try {
          const response = await base_url.get("/single_user", {
            withCredentials: true,
          });
          setSingleData(response.data);
        } catch (error) {
        toast.error(error.response.data.message);
        }
      };

      useEffect(() => {
        fetchSingleData();

      }, []);
  return (
   <contextApi.Provider value={{singleData}}>
     {children}
   </contextApi.Provider>
  )
}

export default UseContext