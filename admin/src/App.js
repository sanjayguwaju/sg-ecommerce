import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin = useSelector((state) => state?.user?.currentUser?.isAdmin);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {admin ? (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="newProduct" element={<NewProduct />} />
        </Route>
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}


function Layout() {
  const navigate = useNavigate()
  const user = useSelector((state) => state?.user);
  useEffect(() => {
    if(!user) {
      navigate("/login")
    }
  },[user,navigate])
  return (  
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
