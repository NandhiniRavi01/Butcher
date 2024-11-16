import React from "react";
import "../css/forget-password.css";

function ForgetPassword({ onContinue }) {
  return (
    <div className="forgot-password">
      <h2>Forgot password?</h2>
      <p>Select which contact details should we use to reset your password</p>
      <div className="options">
        <div className="option">
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
          <p>Send via WhatsApp</p>
          <span>+91 9940061733</span>
        </div>
        <div className="option selected">
          <img src="/email-icon.png" alt="Email" />
          <p>Send via Email</p>
          <span>vigneshharidoss@gmail.com</span>
        </div>
      </div>
      <button onClick={onContinue}>Continue</button>
    </div>
  );
}

export default ForgetPassword;