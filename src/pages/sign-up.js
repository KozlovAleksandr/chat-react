import { useState } from "react";
import { Input, Button, Box, TextField } from "@mui/material";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";

const create = (form) => {
  createUserWithEmailAndPassword(auth, form.email, form.password);
};

export function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (
    <div
      style={{
        height: "calc(70vh + 100px)",
        margin: "20px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0d3a6b",
          padding: "30px 10px",
          borderRadius: "15px",
          boxShadow: "0px 0px 2px 1px rgba(174, 202, 230, 0.6)",
        }}
      >
        <h1>Registration</h1>
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type="email"
          inputProps={{
            "data-name": "email",
          }}
          onChange={handleChangeForm}
          value={form.email}
          style={{
            margin: "10px 0",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          inputProps={{
            "data-name": "password",
          }}
          onChange={handleChangeForm}
          value={form.password}
          style={{
            margin: "10px 0",
          }}
        />
        <Button
          size="large"
          color="info"
          variant="outlined"
          onClick={() => {
            create(form);
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
