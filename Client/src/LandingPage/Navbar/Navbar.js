import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Form from "../../From/Form";
import { Pagelink, socialLinks } from "../Data";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const navLinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="nav-logo">Oralibro</h2>
        </div>

        <ul className="nav-links" id="nav-links">
          {Pagelink.map((link) => {
            return (
              <li styles={navLinkstyles} key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          <li onClick={() => Navigate("Sign-in")} className="nav-sign">
            Login
          </li>
          <button type="button" className="nav-icon">
            <Link to="/Form" style={{ color: "white" }}>
              Create account
            </Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
