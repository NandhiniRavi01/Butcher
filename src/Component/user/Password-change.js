import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/password-change.css";

const PasswordChangeSuccess = () => {
  const navigate = useNavigate(); // Get navigate function

  const home = () => {
    navigate('/home'); // Navigate to the home route
  };

  return (
    <div className="container">
      <header>
        <button className="back-button1">  &lt;</button>
        <h1 style={{ fontSize: '10px' }}>
          Reset Password
        </h1>
      </header>

      <div className="disabled-container">
        <h2 className="disabled-heading">Reset Password</h2>
        <p className="disabled-text">
          Your new password must be different from the previously used password
        </p>
        <div className="disabled-input-container">
          <input
            type="password"
            placeholder="New Password"
            className="disabled-input"
            disabled
          />
          <button className="disabled-button" disabled>👁️</button>
        </div>
      </div>

      <div className="success-message">
      <div className="icon">
         
          <img src="./Image/success.png" alt="Success" className="checkmark-image" />
        </div>
        <h3>Password Changed</h3>
        <p>
          Password changed successfully, you can login again with a new password
        </p>
        <button className="email" onClick={home}>Verify Account</button>
      </div>
    </div>
  );
};

export default PasswordChangeSuccess;
