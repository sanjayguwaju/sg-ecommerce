import React, { useState } from 'react';
import './register.scss';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialState);
  const  dispatch = useDispatch();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    dispatch(createUser(formData));
    console.log(formData);
    navigate('/login');
  }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name='username'
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name='email'
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name='password'
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
