import React from "react";
import "./Nomatch.css";
import { Link } from "react-router-dom";
export default function Nomatch() {
  return (
    <div className="eat">
      <img className="pip" src="../Error.jpeg" alt="Error" />
      <h1 className="xo">Page not found</h1>
      <button className="Goback-btn">
        <Link to="/" style={{ color: "white" }}>
          {" "}
          Go back to Oralibro
        </Link>
      </button>
    </div>
  );
}
