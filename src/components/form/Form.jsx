import React, { useState,useEffect } from "react";
import "./Form.css";


function Form({setContactList,contacsList}) {
    const [form,setForm]= useState({name:"", phone_number:""});

    const handleFormInput =(e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setContactList([...contacsList,form])

    }

    useEffect(() => {
        setForm({name:"", phone_number:""})
    },[contacsList])

    // console.log(form);
  return (
    <form className="form" onSubmit={handleSubmitForm}>
        <label htmlFor="name">İsim Soyisim:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleFormInput}/>
      <label htmlFor="phone-number">Telefon Numarası:</label>
      <input type="text" name="phone_number" id="phone-number" value={form.phone_number} onChange={handleFormInput}/>
      <button>Ekle</button>
    </form>
  );
}

export default Form;
