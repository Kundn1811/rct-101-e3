import React, { useEffect, useState } from "react";
import Product from "./Product/Product"
const Products = () => {
const [data,setData]= useState([]);

useEffect(()=>{
  const fetchData = async () => {
    let r = await fetch("http://localhost:8080/products");
    let d = await r.json();
   setData(d)
    
  };
  fetchData();
  
},[])
 
  return <div>
  <h1>Products</h1>
    <div>
      {data.map((el)=>(
      
        <Product el={el}/>

      ))}
    </div>
  </div>;
};

export default Products;
