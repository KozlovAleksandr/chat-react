import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";

export function ProfileForm({ firstName, lastName, country }) {
  const [form, setForm] = useState({ firstName, lastName, country });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Edit profile</h1>
      <Input
        placeholder="First Name"
        inputProps={{ "data-name": "firstName" }}
        onChange={handleChangeForm}
        value={form.firstName}
      />
      <Input
        placeholder="Last Name"
        inputProps={{ "data-name": "lastName" }}
        onChange={handleChangeForm}
        value={form.lastName}
      />
      <Input
        placeholder="Country"
        inputProps={{ "data-name": "country" }}
        onChange={handleChangeForm}
        value={form.country}
      />
      <Button
        onClick={() => {
          dispatch(updateProfile(form));
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
