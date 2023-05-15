import React from "react";
import { body } from "../Data";
import { Link } from "react-router-dom";
import "./Pagebody.css";

const Pagebody = () => {
  const handleClick = () => {
    window.location.href = "https://discord.gg/xyDeDKx6HG";
  };
  function StarSVG() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          className="fil0"
        />
      </svg>
    );
  }
  return (
    <div className="Show">
      <div className="container">
        <h1>Discover</h1>
        <h1>Yourself in a</h1>
        <h1>Captivating Book.</h1>
        <button onClick={handleClick} className="join" type="button">
          Join the club{" "}
          <div className="star-1">
            <StarSVG />
          </div>
          <div className="star-2">
            <StarSVG />
          </div>
          <div className="star-3">
            <StarSVG />
          </div>
          <div className="star-4">
            <StarSVG />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagebody;
