import React from "react";
import "../css/payment.css";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <header>
        <button className="back-button1">&lt;</button>
        <h1>Payment</h1>
      </header>
      
      <div className="order-summary">
        <h4 className="text">You deserve better meal</h4>
        <h2> Item Ordered</h2>
        <div className="item-ordered">
          <img
            src="https://via.placeholder.com/100"
            alt="Fresh Chicken"
            className="item-image"
          />
          
          <div className="detail">
            <h3>Fresh Chicken</h3>
            
             
            <div className="price-payment">
            <p >
              Rs 210 | <span className="original-price">Rs 280/ kg</span> </p>
             </div>
             </div>
             <div className="items">
              <p className="align">14 items</p>
           
          </div>
        </div>
      </div>

      <div className="transaction-details">
        <h2>Details Transaction</h2>
        <div className="detail-row">
          <p className="align1">Fresh Chicken</p>
          <p>Rs 210.000</p>
        </div>
        <div className="detail-row">
          <p className="align1">Driver</p>
          <p>Rs 50.000</p>
        </div>
        <div className="detail-row">
          <p className="align1">Tax 10%</p>
          <p>Rs 80.390</p>
        </div>
        <div className="detail-row">
            <p className="align1">Total Price</p>
            <p className="price-payment"> Rs 340.00</p>
        </div>

      </div>
      
            <span className="line"></span>
           
         
      <div className="delivery-info">
      <h2>Deliver to :</h2>
        <div className="detail-row">
          <p className="align1">Name </p>
          <p>vigneshharidoss</p>
        </div>
        <div className="detail-row">
          <p className="align1">Phone No.</p>
          <p>+919940061733</p>
        </div>
        <div className="detail-row">
          <p className="align1">Address </p>
          <p>chennai</p>
        </div>
        <div className="detail-row">
          <p className="align1">House No.</p>
          <p> No 1 Bobby street</p>
        </div>
        <div className="detail-row">
          <p className="align1">City</p>
          <p> Chennai 603203</p>
        </div>
        
      </div>

      <button className="checkout-button">Checkout Now</button>
    </div>
  );
};

export default PaymentPage;
