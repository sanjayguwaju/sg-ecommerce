import React, { useState } from 'react';
import './forgetpassword.scss';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your forget password logic here
    console.log('Email:', email);
  };

  return (
    <form className="forget-password-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForgetPasswordForm;
