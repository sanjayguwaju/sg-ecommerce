// import Home from "./pages/Home";
import React from "react";
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";

// import Register from "./pages/Register";
// import Login from "./pages/Login";

// import Cart from "./pages/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pay' element={<Pay />}>
        </Route>
        <Route path='/success' element={<Success />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
