import React, { useState } from 'react';
import '../css/checkout.css'; // Import the CSS file

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [deliveryMethod, setDeliveryMethod] = useState('Door delivery');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleDeliveryMethodChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <div className="checkout-container">
       <header>
        <button className="back-button1">&lt;</button>
        <p className="text-align">Checkout</p>
      </header>

      <div className="payment-section">
        <h3>Payment</h3>
        <p>Payment method</p>
        <div className="payment-options">
  <label className="payment-option">
    <input
      type="radio"
      value="UPI"
      checked={paymentMethod === 'UPI'}
      onChange={handlePaymentMethodChange}
    />
    <div className="logo-container">
      <img src="/Image/upi.png"  className="payment-logo" />
    </div>
    <div className="logo-container">
      <span>UPI</span>
    </div>
  </label>
  
  <span className="small-line"></span>
  
  <label className="payment-option">
    <input
      type="radio"
      value="Bank"
      checked={paymentMethod === 'Bank'}
      onChange={handlePaymentMethodChange}
    />
    <div className="logo-container">
      <img src="/Image/bank.png" className="payment-logo" />
    </div>
    <div className="logo-container">
      <span>Add Bank Account</span>
    </div>
  </label>
</div>

          
      </div>

      <div className="delivery-section">
      <p style={{ marginBottom: '40px' }}>Delivery Method</p>
      <div className="payment-option1">
  <label className="delivery-option">
 
    <input
      type="radio"
      value="Door delivery"
      checked={deliveryMethod === 'Door delivery'}
      onChange={handleDeliveryMethodChange}
    />
    <span>Door Delivery</span>
  </label>
  <span className="small-line"></span>
  <label className="delivery-option">
    <input
      type="radio"
      value="Pick up"
      checked={deliveryMethod === 'Pick up'}
      onChange={handleDeliveryMethodChange}
    />
    <span>Pick Up</span>
  </label>
</div>
</div>

      <div className="detail-row">
      <p>Total </p>
      
      <h3 style={{ fontSize: '20px' }}>₹340.00</h3>

      </div>

      <button className="checkout-button">Proceed to Payment</button>
    </div>
  );
}

export default Checkout;