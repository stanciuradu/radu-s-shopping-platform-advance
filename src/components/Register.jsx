import React, { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import ButtonSubmit from "../components/ButtonSubmit/ButtonSubmit";

function Register() {
  // const [userDetails, setUserDetails] =useState({name:"", email:"", password:"", confirmPassword:""})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmitForm(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }
  return (
    <div className="sign-in">
      <div className="sign-in-details">
        <h4>I don't have an account</h4>
        <span>SignUp with your email and password</span>
      </div>
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <FormInput
          type="text"
          name="name"
          value={name}
          label="name"
          handleChange={(event) => setName(event.target.value)}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={(event) => setPassword(event.target.value)}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="confirmPassword"
          handleChange={(event) => setConfirmPassword(event.target.value)}
        />
        <div className="button-submit">
          <ButtonSubmit type="submit">SignUp</ButtonSubmit>
        </div>
      </form>
    </div>
  );
}

export default Register;
