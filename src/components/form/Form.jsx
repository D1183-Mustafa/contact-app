import React, { useState, useEffect } from "react";
import "./Form.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form({ setContactList, contacsList }) {
  const [form, setForm] = useState({ name: "", phone_number: "" });

  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.phone_number !== "") {
      setContactList([...contacsList, form]);
    }
  };

  useEffect(() => {
    setForm({ name: "", phone_number: "" });
  }, [contacsList]);

  // console.log(form);
  return (
    <form className="form">
      <div className="form-div">
        <Box
          
          sx={{
            width: 300,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="İsim Soyisim"
            id="fullWidth"
            name="name"
            value={form.name}
            onChange={handleFormInput}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Telefon Numarası"
            id="fullWidth"
            value={form.phone_number}
            onChange={handleFormInput}
            name="phone_number"
          />
        </Box>
        <Button variant="contained" color="success" onClick={handleSubmitForm}>
          EKLE
        </Button>
      </div>
    </form>
  );
}

export default Form;
