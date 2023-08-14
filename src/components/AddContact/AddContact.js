import React, { useState } from 'react'
import './AddContact.css';
import { v4 as uuid } from 'uuid';
import {useNavigate} from 'react-router-dom'
const AddContact = ({contacts,setContacts}) => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const addHandler = (e)=>{
    e.preventDefault();
    if(name==="" || email===""){
      alert("All the Fields are mandatory")
    }
    else {
      setContacts([...contacts,{name:name,email:email,id:uuid()}])
      setName("");
      setEmail("");
    }
    navigate("/");
  }

  return (
    <div className='add-contact'>
        <h2>Add Contact</h2>
        <form onSubmit={addHandler}>
            <div className='inputForm'>
                <label>Name</label>
                <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='inputForm'>
                <label>Email</label>
                <input type="text" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default AddContact
