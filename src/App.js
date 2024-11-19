import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User-related components
import ForgotPassword from "./Component/user/Forgot_password.js";
import Login from "./Component/user/Login.js";
import Register from "./Component/user/Register.js";
import SelectOption from "./Component/user/SelectOption.js";
import PasswordChangeSuccess from "./Component/user/Password-change.js";
import ResetPassword from "./Component/user/Reset-password.js";
import EmailVerification from "./Component/user/Email-verify.js";

// Payment-related components
import PaymentPage from "./Component/payment/Payment.js";
import ProductDescription from "./Component/products/ProductDescription.js";
import Checkout from "./Component/payment/Checkout.js";

// Card management components
import CardManager from "./Component/cardpage/cardmanager.js";
import DeleteConfirmation from "./Component/cardpage/deleteconformation.js";
import AddCard from "./Component/cardpage/Addcard.js";
import Onboarding from "./Component/user/OnboardingContainer.js";
import History from "./Component/user/History.jsx";
import Items from "./Component/user/items.jsx";
import Order from "./Component/user/Order.jsx";
import Home from "./Component/user/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* User-related routes */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} />
        <Route path="/order" element={<Order />} />
        <Route path="/items" element={<Items />} />
  
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pop-up" element={<SelectOption />} />
        <Route path="/password-change" element={<PasswordChangeSuccess />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification" element={<EmailVerification />} />

        {/* Payment-related routes */}
        <Route path="/details" element={<ProductDescription />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Card management routes */}
        <Route path="/card-list" element={<CardManager />} />
        <Route path="/delete/:cardId" element={<DeleteConfirmation />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </Router>
  );
}

export default App;
