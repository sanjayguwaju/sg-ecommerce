import React from "react";
import{Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="products">
        <Route path=":category" element={<ProductList/>}/>
      </Route>
      <Route>
        <Route path="/product/:id" element={<Product/>}/>
      </Route>
      <Route path="/carts" element={<Cart/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>)
};


export default App;