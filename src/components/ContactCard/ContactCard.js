import React from "react";
import "./ContactCard.css";
import { FiTrash2 } from "react-icons/fi";
import {BiEdit} from 'react-icons/bi'
import user from '../../images/user.png'
import {Link} from 'react-router-dom';
const ContactCard = ({ contact}) => {
  const {id , name , email} = contact;
  // console.log(contact,"contact");
  return (
    <div className="contact-card-container">
      <div className="contact-card-details">
        <div className="user-image">
          <img src={user} alt="user"/>
        </div>
        <div >
          <Link to={`contact/${id}`} state={contact} style={{textDecoration:"none",color:"black"}}>
          <h3 className="contact-name">{name}</h3>
          <h3 className="contact-email">{email}</h3>
          </Link>
        </div>
      </div>
      <div>
      <Link to='/edit' state={contact}><BiEdit className="edit-icon"/></Link>
        <Link to='/delete' state={contact}><FiTrash2 className="trash-icon"/></Link>
      </div>
    </div>
  );
};

export default ContactCard;
