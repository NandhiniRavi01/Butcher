import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/deleteconformation.css";

const DeleteConfirmation = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/card-list");
  };

  const handleConfirmDelete = () => {
    console.log("Deleted card ID:", cardId);
    navigate("/card-list");
  };

  return (
    <div className="delete-modal">
      <div className="modal-content">
        <div>
      <h4>Confirm Delete <button className="payment-close" onclick={handleCancel} >
        &#10005;
      </button></h4>
      </div>
        
        <p>Are you sure you want to delete this card?</p>
        <div className="modal-actions">
          <button className="register-button" onClick={handleCancel}>
            No, I won’t
          </button>
          <button className="confirm-btn" onClick={handleConfirmDelete}>
            Yes, Of course
          </button>
        </div>
      </div>
      </div>
  );
};

export default DeleteConfirmation;
