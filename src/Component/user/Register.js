import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import '../css/register.css';  // To style the buttons
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />); // Default icon

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FaEye />); // Show open eye when password is toggled to text
      setType("text");
    } else {
      setIcon(<FaEyeSlash />); // Show closed eye when password is toggled back to password
      setType("password");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Create your new account</h2>
        <p className="style">Create an account to start looking for the Fresh Meat you like</p>
        
        {/* Username Field */}
        <label>User Name</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="input-field"
        />

        <label>Email Address</label>
        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-field"
        />
        
        {/* Password input below checkbox */}
        <label>Password</label>
        <div className="password-input-container">
          <input
            type={type}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="input-field"
          />
          <span className="password-toggle-icon" onClick={handleToggle}>
            {icon}
          </span>
        </div>

        {/* I Agree Checkbox */}
        <div className="terms-checkbox-container">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I Agree with <a href="/terms" className="terms-link">Terms of Service</a> and <a href="/privacy" className="privacy-link">Privacy Policy</a>
          </label>
        </div>

        {/* Register Button */}
        <button type="button" className="register-button">Register</button>
        
        

        {/* Social Login Options */}
        <div className="signup-container">
          <div className="line-wrapper">
            <span className="line"></span>
            <h3>Or sign up with</h3>
            <span className="line"></span>
          </div>
        </div>

        <div className="button-container">
          <button className="social-button google">
            <FontAwesomeIcon icon={faGoogle} size="lg" /> 
          </button>
          <button className="social-button facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" /> 
          </button>
          <button className="social-button apple">
            <FontAwesomeIcon icon={faApple} size="lg" /> 
          </button>
        </div>
      </form>

      {/* Sign In Link */}
      <div className="sign-in">
        <br />
        <p>Don't have an account? <a href="/login">Sign In</a></p>
      </div>
    </div>
  );
}

export default Register;
