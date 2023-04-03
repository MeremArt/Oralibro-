import React from "react";
import "./Navbar.css";
import { Pagelink, socialLinks } from "../Data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="nav-logo">Oralibro</h2>
        </div>

        <ul className="nav-links" id="nav-links">
          {Pagelink.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          <li className="nav-sign">Sign in</li>
          <button type="button" className="nav-icon">
            Sign up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
