// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Component/user/forgot_password";
import Login from "./Component/user/login";
import Register from "./Component/user/register";
import PaymentPage from "./Component/payment/payment.js"
import ProductDescription from "./Component/products/productDescription";
import Checkout from "./Component/payment/checkout"
import ForgetPassword from "./Component/user/forget-password.js";
import PasswordChangeSuccess from "./Component/user/password-change.js";
import ResetPassword from "./Component/user/reset-password.js";
import EmailVerification from "./Component/user/email-verify.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<ProductDescription />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/pop-up" element={<ForgetPassword/>} />
        <Route path="/password-change" element={<PasswordChangeSuccess/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/verification" element={<EmailVerification/>} />

      </Routes>
    </Router>
  );
}

export default App;
