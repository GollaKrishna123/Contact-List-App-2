import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const ContactList = ({ contacts, setContacts }) => {
  return (
    <div className="contact-list-container">
      <div className="contact-list">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="add-contact-btn">Add Contact</button>
        </Link>
      </div>
      <div className="SearchBar">
        <SearchBar contacts={contacts} setContacts={setContacts} />
      </div>
      <div className="contacts">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard contact={contact} id={contact.id} />
          ))
        ) : (
          <h2>No contacts Available</h2>
        )}
      </div>
    </div>
  );
};

export default ContactList;
