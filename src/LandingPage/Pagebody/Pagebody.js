import React from "react";
import { body } from "../Data";

import "./Pagebody.css";
const Pagebody = () => {
  return (
    <div>
      {body.map((page) => {
        return (
          <div className="center" key={page.id}>
            <img className="fix" src={page.image} alt="girl" />
          </div>
        );
      })}
      <div className="container">
        <h2>Discover</h2>
        <h1>Yourself in a</h1>
        <h1>Captivating Book</h1>
        <button className="join" type="button" href="">
          Join the club
        </button>
      </div>
    </div>
  );
};

export default Pagebody;
