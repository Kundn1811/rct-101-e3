import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
const {login,logout} = useContext(AuthContext)
 
let cread = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
}



  return (
    <div>
      <input data-cy="login-email" value="eve.holt@reqres.in" />
      <input data-cy="login-password" value="cityslicka" />
      <button data-cy="login-submit" onClick={()=>{
        login()
      }}>Login</button>
    </div>
  );
};

export default Login;
