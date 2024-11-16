import React, { useState } from "react";
import "../css/reset-password.css";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert("Password reset successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="reset-password">
      <div className="header">
        <button className="back-button">{"<"}</button>
        <h2>Reset Password</h2>
      </div>
      <p>Your new password must be different from the previously used password</p>

      <form className="form">
        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <div className="input-container">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <p className="hint">Must be at least 8 characters</p>
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <p className="hint">Both passwords must match</p>
        </div>

        <button type="button" onClick={handleSubmit} className="submit-button">
          Verify Account
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;