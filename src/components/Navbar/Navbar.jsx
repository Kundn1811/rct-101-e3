import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
 const {isAuth, logout} = useContext(AuthContext)
 const {cart} = useContext(CartContext);
const navigate = useNavigate();
 const handleOnClick = ()=>{
       if(isAuth){
         logout()
       }else{
         navigate('/login')
       }
 }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/" >Logo</Link>
      
      <span data-cy="navbar-cart-items-count">{/* count here */} Cart{cart.length}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
