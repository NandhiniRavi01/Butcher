import React, { useState } from "react";
import "../css/selectoption.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp icon from the 'brands' package
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

function SelectOption({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option

  const handleSelectOption = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <div className="login-container">
      <form className="register-form1">
        <h2>Login to your account</h2>
        <p className="style">Please sign in to your account</p>

        <label>Email Address</label>
        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value="vigneshharidoss@gmail.com"
          className="input-field"
          disabled
        />

        <label>Password</label>
        {/* Password input with toggle visibility */}
        <div className="password-input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            disabled
          />
        </div>
      </form>

      <div className="forgot-password">
        <h2 className="forget-style">Forgot password?</h2>
        <p className="forget-para">Select which contact details should we use to reset your password</p>

        <div className="options">
          <div
            className={`option ${selectedOption === "whatsapp" ? "selected" : ""}`}
            onClick={() => handleSelectOption("whatsapp")}
          >
            {/* Using FontAwesome for WhatsApp */}
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <div className="text-container">
              <p>Send via WhatsApp</p>
              <p className="phone-number">+91 9940061733</p>
            </div>
            {/* Tick symbol for WhatsApp */}
            {selectedOption === "whatsapp" && <span className="tick-symbol">✔</span>}
          </div>

          <div
            className={`option ${selectedOption === "email" ? "selected" : ""}`}
            onClick={() => handleSelectOption("email")}
          >
            {/* Using FontAwesome for Email */}
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="text-container">
              <p>Send via Email</p>
              <span className="email_id">vigneshharidoss@gmail.com</span>
            </div>
            {/* Tick symbol for Email */}
            {selectedOption === "email" && <span className="tick-symbol">✔</span>}
          </div>
        </div>

        {/* Disabled Continue Button */}
        <button className="forget" disabled>Continue</button>
      </div>
    </div>
  );
}

export default SelectOption;
