import React, { useState } from "react";
import "../css/addcard.css";

const AddCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "Vigneshharidoss",
    cardNumber: "3822 8293 8292 2356",
    expiryDate: "03/30",
    cvv: "531",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Saved:", cardDetails);
    alert("Card saved successfully!");
  };

  return (
    <div className="add-card-container">
      <div className="card-preview">
        <div className="card">
          <div className="card-number">{cardDetails.cardNumber}</div>
          <div className="card-holder">
            <span>Cardholder Name</span>
            <span>{cardDetails.cardholderName}</span>
          </div>
          <div className="expiry-date">
            <span>Expiry Date</span>
            <span>{cardDetails.expiryDate}</span>
          </div>
        </div>
      </div>
      <form className="card-form" onSubmit={handleSubmit}>
        <label>
          Cardholder Name
          <input
            type="text"
            name="cardholderName"
            value={cardDetails.cardholderName}
            onChange={handleChange}
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            maxLength={19}
          />
        </label>
        <div className="form-row">
          <label>
            Expiry Date
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              maxLength={5}
            />
          </label>
          <label>
            3-Digit CVV
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              maxLength={3}
            />
          </label>
        </div>
        <button type="submit" className="email">
          Save Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
