import { input } from "../LandingPage/Data";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Float from "./FloatAnime/Float";
import React from "react";
//added by decklan.
import { signIn } from "../ServerFunctions";
//Run, npm install react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [value, setValue] = useState(0);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Get email and password values from form data
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if any field is empty
    if (email !== "" && password !== "") {
      signIn(email, password).then((data) => {
        if (data.runState) {
          toast.success("Sign in successful, logging you in....");
          localStorage.setItem("sessionToken", data.token);
          window.location.href = "REPLACE_THIS_STRING_WITH_YOUR_DASHBOARD_URL"; // REDIRECT USER TO DASHBOARD
        } else {
          toast.error("Email or password is incorrect");
        }
        e.currentTarget.reset();
      });
    } else {
      toast.error("Please fill all fields");
    }

    setValue(value + 1);
  };

  return (
    <>
      <article className="form-top">
        <h1 className="btn-com">Welcome back! </h1>
        <p className="tag-com">Welcome back! please enter your details</p>
      </article>
      <main className="con">
        <div className="formcon">
          <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
            </div>
            {/* Password field */}
            <div className="form-row">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            {/* Sign in button */}
            <button type="submit" className="btn btn-block">
              Sign in
            </button>
            {/* Sign in with Google button */}
            <button className="btn-2" type="button">
              <div className="icon">
                <FcGoogle />
              </div>
              Sign in with Google
            </button>

            <p className="Do" style={{ color: " #CCCCCC" }}>
              Don't have an account ?{" "}
              <p
                className="Signup-btn"
                onClick={() => Navigate("/Form")}
                style={{ fontWeight: "bold", color: "#36454F" }}
              >
                &nbsp; Sign up
              </p>
            </p>
          </form>
        </div>

        <div className="imgi">
          <Float />
        </div>
        {/* this component is neccessary to display toast --deckk */}
        <ToastContainer />
      </main>
    </>
  );
}

export default Form;
