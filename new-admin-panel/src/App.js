import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import RegisterForm from "./pages/register/Register";
import ForgetPasswordForm from "./pages/forgetpassword/ForgetPassword";
import SignupForm from "./pages/signup/SignupForm";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import {useEffect,useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("persist:root");
    const userJson = JSON.parse(userLocalStorage)?.user;
    const isSuccess = JSON.parse(userJson)?.isSuccess;

    console.log(isSuccess)

    if (isSuccess) {
      // Redirect to home page if isSuccess is true
      navigate('/')
    } else if (window.location.pathname !== "/register" || window.location.pathname !== "/forgetpassword") {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<RegisterForm />} />
          <Route exact path="forgetpassword" element={<ForgetPasswordForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new" 
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
