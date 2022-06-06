import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
const [cart, setCart] = useState(0);

useEffect(()=>{
  const fetchData = async () => {
    let r = await fetch("http://localhost:8080/cartItems");
    let d = await r.json();  
    setCart(d)
  }
  fetchData()
},[])

  return <CartContext.Provider value={{cart}}>{children}</CartContext.Provider>;
};
