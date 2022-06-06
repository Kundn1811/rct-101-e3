import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
 const [isAuth,setIsAuth] = useState(false);
 let login= ()=>{
  
   setIsAuth(true)
  
 }

 let logout=()=>{
   setIsAuth(false)
 }

  return <AuthContext.Provider  value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
