import FormInput from "./FormInput";
import { inputs } from "../LandingPage/Data";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Form.css";
import React from "react";

function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",

    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <main className="app">
      <form classname="form-join" onSubmit={handleSubmit}>
        <h1 className="btn-join">Join Our Community! </h1>
        <p className="tag">
          Join our community today and be a part of something truly special.
        </p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn" type="button">
          Sign Up
        </button>
        <button className="btn-2" type="button">
          <div className="icon">
            <FcGoogle />
          </div>
          Sign up with Google
        </button>
      </form>
      <div className="img"></div>
    </main>
  );
}

export default Form;
