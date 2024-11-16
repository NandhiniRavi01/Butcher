// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Component/user/forgot_password";
import Login from "./Component/user/login";
import Register from "./Component/user/register";
import PaymentPage from "./Component/payment/payment.js"
import ProductDescription from "./Component/products/productDescription";
import Checkout from "./Component/payment/checkout"
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
      </Routes>
    </Router>
  );
}

export default App;
