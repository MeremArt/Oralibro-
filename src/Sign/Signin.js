import SignInput from "./SignInput";
import { input } from "../LandingPage/Data";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Float from "./FloatAnime/Float";
import React from "react";

function Form() {
  const [name, setName] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",

    password: "",
  });
  const navigate = useNavigate();

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
        {input.map((input) => (
          <SignInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn" type="button">
          Sign in
        </button>

        <p className="or">or</p>
        <button className="btn-2" type="button">
          <div className="icon">
            <FcGoogle />
          </div>
          <p style={{ color: "#36454F" }}>Sign in with Google</p>
        </button>
        <p className="Do" style={{ color: " #CCCCCC" }}>
          Don't have an account ?{" "}
          <p
            className="Signup-btn"
            onClick={() => navigate("/Form")}
            style={{ fontWeight: "bold", color: "#36454F" }}
          >
            &nbsp; Sign up
          </p>
        </p>
      </form>

      <div className="imgi">
        <Float />
      </div>
    </main>
  );
}

export default Form;
