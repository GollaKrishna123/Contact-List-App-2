import React, { useState } from "react";
import "./EditContact.css";
import { v4 as uuid } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
const EditContact = ({
  contacts,
  setContacts,
}) => {
  const location = useLocation();
  const contact = location.state;
  const { id, name : initialName, email :initialEmail } = contact;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const navigate = useNavigate();

  const updateContactHandler = (e) => {
    e.preventDefault();
    setName(name);
    setEmail(email);
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name: name,
          email: email,
        };
      } else {
        return contact;
      }
    });
    setContacts(updatedContacts);
    navigate("/");
  };

  return (
    <div className="add-contact-container">
      <h2>Edit Contact</h2>
      <form onSubmit={updateContactHandler}>
        <div className="inputForm">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputForm">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="add-btn">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
