import React from "react"; 
import { Route, Routes } from "react-router-dom";
import ProductList from "../../ProductList"; 
import ProductDetails from "../../ProductDetails";

export const Home = () => {
  return (
    <>  
      <Routes> 
        <Route path="/" element={<ProductList />} /> 
        <Route path="/products/:productId" element={<ProductDetails />} />  
      </Routes> 
    </>
  );
};

    
