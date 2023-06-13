import { inputs } from "../LandingPage/Data";
import { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

import Float from "../Sign/FloatAnime/Float";
import axios from "axios";
import React from "react";

import { signUp } from "../ServerFunctions";
//Run, npm install react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = ""; // Add your API endpoint here

function Form() {
  const [value, setValue] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if any field is empty
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    console.log(name);
    // Get all form data
    const newUser = Object.fromEntries(formData);
    console.log(newUser);

    try {
      const resp = await axios.post(url, { name: name, email: email });
      console.log(resp.data);
      toast.success("Sign up successful, proceed to sign in page");
      e.currentTarget.reset();
    } catch (error) {
      console.log(error.response);
      toast.error("Something went wrong, we couldn't sign you in.");
    }
  };

  // setValue(value + 1);
  // reset values

  return (
    <>
      <FormStyle>
        <article className="form-top">
          <h1 className="btn-com">Join our community! </h1>
          <p className="tag-com">
            {" "}
            Join our community today and be a part of something truly special.
          </p>
        </article>
        <main className="con">
          <div className="formcon">
            <form className="form" onSubmit={(event) => handleSubmit(event)}>
              {/* name */}
              <div className="form-row">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="name"
                  autoComplete="name"
                />
              </div>
              {/* email */}
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
                  autoComplete="email"
                />
              </div>
              {/* email */}
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
                  autoComplete="password"
                />
              </div>

              <button type="submit" className="btn btn-block">
                Sign up
              </button>
              <button className="btn-2" type="button">
                <div className="icon">
                  <FcGoogle />
                </div>
                Sign up with Google
              </button>
            </form>
          </div>

          <div className="imgi">
            <Float />
          </div>
          {/* this component is neccessary to display toast -- deckk */}
          <ToastContainer />
        </main>
      </FormStyle>
    </>
  );
}

const FormStyle = styled.section`
  .body {
    background-color: fffefb;
  }

  .app {
    display: flex;
    align-items: center;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
  }
  form {
    margin-left: 100px;
    padding: 30px 60px;
    border-radius: 10px;
  }
  .btn-join {
    color: hsl(209, 61%, 16%);
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: none !important;
  }

  .tag {
    display: flex;
    color: #3d3d39;
    width: 290px;
    justify-content: center;
    font-size: 0.8rem;
    text-align: center;
    text-transform: none !important;
    margin: auto;
    padding-bottom: 10px;
  }
  .btn {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #ffdd83;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    margin-top: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
  }
  .btn-2 {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: white;
    color: #121211;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    margin-top: -8px;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .btn:hover {
    background-color: #e0b651;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  .form-join {
    flex: 1;
  }
  .icon {
    margin-right: 5px;
    font-size: 15px;
    display: flex;
  }
  .imgj {
    margin-left: 120px;
    height: 100vh;
    width: 50vh;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    flex: 1;
  }
  .form-top {
    margin-right: 55px;
  }
`;

export default Form;
