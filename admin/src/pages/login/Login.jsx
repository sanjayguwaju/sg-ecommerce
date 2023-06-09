import {useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { login } from "../../redux/apiCalls";
import { loginFailure, loginSuccess } from "../../redux/userRedux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
   const [data, error] = await login(dispatch,{ username, password });
    if (error) {
      dispatch(loginFailure());
      console.log(error)
      return
    } 
    if(data.data){
    console.log(data)
    dispatch(loginSuccess(data.data));
    navigate('/');}
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;
