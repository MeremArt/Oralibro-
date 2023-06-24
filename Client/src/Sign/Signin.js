import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { signIn, signInWithGoogle } from "../ServerFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Float from "./FloatAnime/Float";
import axios from "axios";
import Oralibro from "../Homepage/Oralibro";
import "./Signin.css";

const loginUrl = "https://oralibro.onrender.com/api/v1/users/login"; // Replace with your actual login endpoint URL

function Form() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted");
    console.log("Current target:", e.currentTarget);

    const formData = new FormData(e.currentTarget);

    console.log("Form data:", formData);

    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      try {
        const response = await axios.post(loginUrl, {
          email,
          password,
        });

        console.log("Server response:", response);

        const data = response.data;

        if ((response === 200, data.runState)) {
          toast.success("Sign in successful, logging you in....", {
            onClose: () => {
              localStorage.setItem("sessionToken", data.token);
              navigate("/Oralibro"); // Replace "/dashboard" with your actual dashboard page route
            },
          });
        } else {
          toast.error("Email or password is incorrect");
        }

        setTimeout(() => {
          if (e.currentTarget) {
            e.currentTarget.reset();
          }
        }, 0); // Reset the form asynchronously
      } catch (error) {
        toast.error("Something went wrong, please try again.");
        console.log("Error:", error);
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle("YOUR_GOOGLE_CLIENT_ID")
      .then((data) => {
        if (data.runState) {
          toast.success("Sign in with Google successful, logging you in....");
          localStorage.setItem("sessionToken", data.token);
          navigate("/Oralibro"); // Replace "/dashboard" with your actual dashboard page route
        } else {
          toast.error("Failed to sign in with Google");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please try again.");
        console.log("Error:", error);
      });
  };

  return (
    <>
      <article className="form-top">
        <h1 className="btn-com">Welcome back! </h1>
        <p className="tag-com">Welcome back! Please enter your details</p>
      </article>
      <main className="con">
        <div className="formcon">
          <form className="form" onSubmit={handleSubmit}>
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
            <button
              className="btn-2"
              type="button"
              onClick={handleSignInWithGoogle}
            >
              <div className="icon">
                <FcGoogle />
              </div>
              Sign in with Google
            </button>
            <p className="Do" style={{ color: "#CCCCCC" }}>
              Don't have an account?{" "}
              <span
                className="Signup-btn"
                onClick={() => navigate("/signup")}
                style={{
                  fontWeight: "bold",
                  color: "#36454F",
                  cursor: "pointer",
                }}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
        <div className="imgi">
          <Float />
        </div>
        <ToastContainer />
      </main>
    </>
  );
}

export default Form;
