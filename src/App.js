import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import mockData from "./mockData";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import DeleteContact from "./components/DeleteContact/DeleteContact";
import { useNavigate } from "react-router-dom";
import EditContact from './components/EditContact/EditContact';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    navigate("/");
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      {/* <Router> */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact contacts={contacts} setContacts={setContacts} name={name} setName={setName} email={email} setEmail={setEmail}/>
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/delete"
            element={
              <DeleteContact deleteContactHandler={deleteContactHandler} />
            }
          />
          <Route path="/edit" element={<EditContact contacts={contacts} setContacts={setContacts} setName={setName} setEmail={setEmail} />}/>
        </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
