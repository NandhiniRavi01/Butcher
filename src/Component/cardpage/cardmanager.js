import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cardmanager.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 
// or use faCircleNotch if you want a loading circle


const CardManager = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, name: "MasterCard", number: "**** 0783 7873", image: "./Image/master.png", selected: false },
    { id: 2, name: "Paypal", number: "**** 0582 4672", image: "/Image/paypal.png", selected: false },
    { id: 3, name: "Apple Pay", number: "**** 0582 4672", image: "./Image/pay.png", selected: false },
  ]);

  const navigate = useNavigate();

  const handleDeleteClick = (cardId) => {
    navigate(`/delete/${cardId}`);
  };

  const handleSelectCard = (cardId) => {
    // Update state to ensure only one card is selected at a time
    setPaymentMethods(paymentMethods.map((method) => 
      method.id === cardId ? { ...method, selected: true } : { ...method, selected: false }
    ));
  };

  return (
    <div className="card-manager">
      <header>
        <button className="back-button1"><a href="/payment">&lt;</a></button>
        <h1 className="size">Extra Card</h1>
        <button className="delete-button"><a href="/delete/:cardId">
          <FontAwesomeIcon icon={faTrash} style={{ color: "red", fontSize: "20px" }} /></a>
        </button>
      </header>
      
      <div className="card-display">
        <div className="card">
          <h3 className="user">Vigneshharidoss</h3>
          
          <div className="big-dots">
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="circle-dot"></span>
  <span className="size">8374</span>
</div>

<span className="card-details">
  <span>Card holder name</span>
  <span>Expiry date</span>
</span>
<div class="dots-container">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="slash">/</span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>


<div className="circle-container">



      <div className="circle left-circle"></div>
      <div className="circle right-circle"></div>
      
    </div>
  



      </div></div>

      <div className="payment-methods">
        <h3 className="cardname">Credit card</h3>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-method ${method.selected ? 'selected' : ''}`}
            onClick={() => handleSelectCard(method.id)}
          >
            <div>
            <div className="seeall">
              <FontAwesomeIcon 
                icon={faCreditCard} 
                style={{ marginRight: "10px", color: "#4CAF50", fontSize: "25px" }} 
              />
              <p>{method.name}</p>
               
              </div>
              <span className="number">{method.number}</span>

              </div>
              <br></br>
             
           
            <img 
                src={method.image} 
                alt={method.name} 
                style={{ marginRight: "10px", width: "40px", height: "auto" }} 
              />
             
          </div>
        ))}
      </div>

      <button className="email">Add New Card</button>
    </div>
  );
};

export default CardManager;
