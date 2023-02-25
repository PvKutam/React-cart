import React from "react";
import NavBar from "./Folder/NavBar";
import ProductCard from "./Folder/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Folder/Cart"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductCard />}/>
          <Route  path="/cart" element={<Cart />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
