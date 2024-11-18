import React, { useState, useEffect } from "react";
import "../css/email-verify.css";
import { FaClock } from "react-icons/fa"; // Import FontAwesome clock icon

function EmailVerification() {
  const [emailCode, setEmailCode] = useState("");
  const [timer, setTimer] = useState(540); // Initialize 9 minutes (9 * 60 = 540 seconds)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [timer]);

  const handleCodeChange = (index, value) => {
    const newCode = emailCode.split("");
    newCode[index] = value;
    setEmailCode(newCode.join(""));
  };

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="email-verification">
       <header>
        <button className="back-button1"> <a href="/pop-up"> &lt;</a></button>
        <h1 style={{fontSize:'20px'}}>
          OTP
        </h1>
      </header>
      <h4 className="margin-top">Email Verification</h4>
      <p>
        Enter the verification code we sent you on:{" "}
        <span>vignesh*****@gmail.com</span>
      </p>
      <div className="otp-inputs">
        {[...Array(4)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            onChange={(e) => handleCodeChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="resend-section">
        <p className="email-verify">
          Didn’t receive code? <span className="resend-link">Resend</span>
        </p></div>
        <p className="email-verify">
          <FaClock style={{ marginRight: "5px", color: "#555" }} /> {/* Clock icon */}
          {formatTime(timer)}
        </p>
      
      <button className="email">Continue</button>
    </div>
  );
}

export default EmailVerification;
