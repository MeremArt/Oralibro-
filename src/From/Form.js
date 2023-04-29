import { inputs } from "../LandingPage/Data";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Form.css";
import Float from "../Sign/FloatAnime/Float";
import React from "react";

function Form() {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // get values one by one
    const name = formData.get("name");
    console.log(name);
    // get all of them
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };

  return (
    <>
      <article className="form-top">
        <h1 className="btn-com">Join our community! </h1>
        <p className="tag-com">
          {" "}
          Join our community today and be a part of something truly special.
        </p>
      </article>
      <main className="con">
        <div className="formcon">
          <form className="form" onSubmit={handleSubmit}>
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
              />
            </div>

            <button type="submit" className="btn btn-block">
              Sign in
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
      </main>
    </>
  );
}

export default Form;
