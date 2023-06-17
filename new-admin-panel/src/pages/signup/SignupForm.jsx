import { useState } from 'react';
import '../signup/signupform.scss';

const SignupForm = () => {
  const [username,setUsername]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here (e.g., create user account, store role in database)

    // Redirect to the appropriate dashboard based on the selected role
    setRedirectToDashboard(true);
  };

  // if (redirectToDashboard) {
  //   if (role === 'buyer') {
  //     return <Redirect to="/buyer-dashboard" />;
  //   } else if (role === 'shopkeeper') {
  //     return <Redirect to="/shopkeeper-dashboard" />;
  //   }
  // }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" value={username} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="form-group">
        <label>Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="buyer">Signup as Buyer</option>
          <option value="shopkeeper">Signup as Shopkeeper</option>
        </select>
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
