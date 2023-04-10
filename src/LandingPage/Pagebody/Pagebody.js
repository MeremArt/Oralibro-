import React from "react";
import { body } from "../Data";
import { Link } from "react-router-dom";
import "./Pagebody.css";

const Pagebody = () => {
  const handleClick = () => {
    window.location.href = "https://discord.gg/xyDeDKx6HG";
  };

  return (
    <div className="Show">
      <div className="container">
        <h1>Discover</h1>
        <h1>Yourself in a</h1>
        <h1>Captivating Book.</h1>
        <button onClick={handleClick} className="join" type="button" href="">
          Join the club{" "}
        </button>
      </div>
    </div>
  );
};

export default Pagebody;
