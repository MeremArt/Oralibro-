import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, id, Icon }) {
  return (
    <a href=`${title.replace(/\s/g, " ").replace(/\s/g, "")}`><div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div></a>
  );
}

export default SidebarOption;
