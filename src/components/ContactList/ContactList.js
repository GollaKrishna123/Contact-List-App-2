import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import './ContactList.css'
import {Link} from 'react-router-dom'
// import ContactCard from './components/ContactCard/ContactCard'
const ContactList = ({ contacts,setContacts }) => {
  // console.log(contacts, "contacts");
  return (
    <div className="contact-list">
      <h2>Contact List<Link to="/add"><button className="add-contact-btn">Add Contact</button></Link></h2>
      
      {contacts.map((contact) => (
        <ContactCard contact={contact} id={contact.id}/>
      ))}
    </div>
  );
};

export default ContactList;
