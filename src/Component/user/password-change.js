import React from "react";
import "../css/password-change.css";

const PasswordChangeSuccess = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Reset Password</h2>
        <p className="sub-text">
          Your new password must be different from the previously used password
        </p>
        <div className="input-container">
          <input type="password" placeholder="New Password" />
          <button className="show-password">👁️</button>
        </div>
      </div>
      <div className="success-message">
        <div className="icon">
          <span className="checkmark">✔</span>
        </div>
        <h3>Password Changed</h3>
        <p>
          Password changed successfully, you can login again with a new password
        </p>
        <button className="verify-btn">Verify Account</button>
      </div>
    </div>
  );
};

export default PasswordChangeSuccess;