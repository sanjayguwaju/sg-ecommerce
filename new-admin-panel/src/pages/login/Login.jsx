import './login.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/users/userSlice';

const initialState = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
  const  dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    dispatch(loginUser(formData));
    navigate('/');
  }

  return (
    <div>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
      <hr />
      <div>
      <p>Don't have account ?</p>
      <Link to="/register">
      <span>Register Account</span>
      </Link>
      </div>

      <div>
      <p>Forget account ?. </p>
      <Link to="/forgetpassword">
      <span>Reset it</span>
      </Link>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
