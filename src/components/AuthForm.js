import React, { useState } from "react";
import { authService, dbService } from "../fBase";
import { Form, FormInput, SubmitInput, SingInSpan } from "./AuthForm_style";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };
  const toggleAcount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <SubmitInput
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
        />
      </Form>
      <SingInSpan onClick={toggleAcount}>
        {newAccount ? "Sign In" : "Create Account"}
      </SingInSpan>
    </>
  );
};

export default AuthForm;
