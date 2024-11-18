import React, { useState } from "react";
import '../css/forget_password.css'; // Import the updated CSS file

function ForgotPassword() {
  const [contactType, setContactType] = useState("email");
  const [contact, setContact] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Call API to send OTP based on contactType and contact (either email or phone)
    setOtpSent(true); // set to true if OTP was successfully sent
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <div className="modal-container">
          <div className="bottom-bar">
            <label>
              <input
                type="radio"
                value="email"
                checked={contactType === "email"}
                onChange={() => setContactType("email")}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                value="phone"
                checked={contactType === "phone"}
                onChange={() => setContactType("phone")}
              />
              Phone
            </label>
          </div>

          <input
            type={contactType === "email" ? "email" : "tel"}
            placeholder={contactType === "email" ? "Enter your email" : "Enter your phone number"}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button1 onClick={handleSendOtp}>Send OTP</button1>
        </div>
      ) : (
        <div className="otp-section">
          <input type="text" placeholder="Enter OTP" />
          <button1>Verify OTP</button1>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
