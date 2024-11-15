// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Component/Javascript/forgot_password";
import Login from "./Component/Javascript/login";
import Register from "./Component/Javascript/register";
import ProductDescription from "./Component/Javascript/chickenv1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chickenv1" element={<ProductDescription />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
