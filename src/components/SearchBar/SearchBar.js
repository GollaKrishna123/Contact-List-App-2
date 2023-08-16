import React, { useEffect, useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ contacts, setContacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredContacts = contacts.filter(
        (contact) =>
          (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
          contact
      );
      setContacts(filteredContacts);
    } else {
      setContacts(contacts);
    }
  }, [searchTerm]);
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Contacts..."
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
