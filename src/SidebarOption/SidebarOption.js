import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ title, id, Icon }) {
  const href = title.replace(/\s/g, " ").replace(/\s/g, "").replace(/\s/g, "&");
  return (
    <>
      <a href={href}>
        <div className="sidebarOption">
          {Icon && <Icon className="sidebarOption__icon" />}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
      </a>
    </>
  );
}

export default SidebarOption;
