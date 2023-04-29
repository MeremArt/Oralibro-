import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__text"></span>
      </div>

      <br />
      <SidebarOption title="Discover" Icon={""} />
      <SidebarOption title="Podcast" Icon={""} />
      <SidebarOption title="Reviews & Ratings" Icon={""} />
      <br />
      <strong className="sidebar__title">Reading</strong>
      <br />
      <SidebarOption title="Book Swap" Icon={""} />
      <SidebarOption title="Reading Challenges" Icon={""} />
      <SidebarOption title="Book Recomendations" Icon={""} />
      <br />
      <strong className="sidebar__title">Features</strong>
      <br />
      <SidebarOption title="Author Spotlight" Icon={""} />
      <SidebarOption title="Events Calender" Icon={""} />
      <SidebarOption title="Bookstore" Icon={""} />
      <br />
    </div>
  );
}

export default Sidebar;
