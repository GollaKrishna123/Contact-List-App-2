import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import mockData from './mockData'
import ContactDetail from './components/ContactDetail/ContactDetail';
// import ContactDetail from './components/ContactDetail/ContactDetail'
const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([])

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])


  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<ContactList contacts = {contacts} setContacts={setContacts}/>}/> 
      <Route path="/add" element={<AddContact contacts={contacts} setContacts={setContacts}/>}/>
      <Route path="/contact/:id" element={<ContactDetail/>}/>
      
      
      </Routes>
      </Router>
    </div>
  )
}

export default App
