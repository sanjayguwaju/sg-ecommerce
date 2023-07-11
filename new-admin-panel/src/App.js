import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import UserList from "./pages/user-list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import RegisterForm from "./pages/register/Register";
import ForgetPasswordForm from "./pages/forgetpassword/ForgetPassword";
import SignupForm from "./pages/signup/SignupForm";
import Layout from "./components/layout/Layout";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import {useEffect,useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route exact path="login" element={<Login/>} />
          <Route exact path="register" element={<RegisterForm />} />
          <Route exact path="forgetpassword" element={<ForgetPasswordForm />} />
          <Route path="/" element={<Layout/>}>
            <Route index element={<ProtectedRoutes Component={Home}/>} />
            <Route path="users">
              <Route index element={<ProtectedRoutes Component={UserList}/>} />
              <Route path=":userId" element={ <ProtectedRoutes Component={Single}/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<ProtectedRoutes Component={List}/>} />
              <Route path=":productId" element={<ProtectedRoutes Component={Single}/>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    </div>
  );
}

export default App;
