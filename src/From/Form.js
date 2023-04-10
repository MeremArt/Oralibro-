import FormInput from "./FormInput";
import { inputs } from "../LandingPage/Data";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Form.css";
import Float from "../Sign/FloatAnime/Float";
import React from "react";

function Form() {
  const [name, setName] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",

    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues("");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setName(e.target.value);
  };

  return (
    <main className="app">
      <form classname="form-join" onSubmit={handleSubmit}>
        <h1 className="btn-join">Join our community! </h1>
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
          Create account
        </button>
        <button className="btn-2" type="button">
          <div className="icon">
            <FcGoogle />
          </div>
          Sign up with Google
        </button>
      </form>
      <div className="imgj">
        <Float />
      </div>
    </main>
  );
}

export default Form;
