import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./DeleteContact.css";
const DeleteContact = ({ deleteContactHandler }) => {
  const location = useLocation();
  const { id, name, email } = location.state;
  return (
    <div className="delete-contact-container">
      <div className="delete-contact-card">
        <div>
          <h2 className="heading-1">Confirmation</h2>
        </div>
        <div>
          <h3 className="heading-2">Are you Sure you want to delete ? </h3>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
          <button className="OK-btn" onClick={(e) => deleteContactHandler(id)}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
