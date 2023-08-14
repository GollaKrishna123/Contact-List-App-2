import React from "react";
import "./ContactDetail.css";
import user from '../../images/user.jpg'
// import download from '../../images/download.jpeg'
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
const ContactDetail = () => {
    const location = useLocation();
    const contactDetails = location.state;
    const {id , name ,email} = contactDetails;
    console.log(id,name,email,"total");
  return (
    <div className="contact-details">
        <div className="contact-details-card">
            <img src={user} alt="user"/>
            <h3 className="contact-detail-name">{name}</h3>
            <h3 className="contact-detail-email">{email}</h3>
        </div>
        <div >
          <Link to="/"><button className="back-to-contactList">Back to ContactList</button></Link>
          
        </div>

    </div>
  );
};

export default ContactDetail;
