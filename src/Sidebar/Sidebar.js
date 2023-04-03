import React from "react";
import "./Sidebar.css";
import SidebarOption from "./Partials";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ExploreIcon from "@mui/icons-material/Explore";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      return (
      <div className="sidebar__item">
        <img className="sidebar__logo" />
        <span className="sidebar__text">
          <span className="sidebar__bee">Oralibro</span>
        </span>
      </div>
      );
      <br />
      <SidebarOption title="Discover" Icon={HomeIcon} />
      <SidebarOption title="Podcast" Icon={WhatshotIcon} />
      <SidebarOption title="Reviews & Ratings" Icon={ExploreIcon} />
      <br />
      <strong className="sidebar__title">Reading</strong>
      <br />
      <SidebarOption title="Book Swap" Icon={GridViewOutlinedIcon} />
      <SidebarOption
        title="Reading Challenges"
        Icon={CalendarMonthOutlinedIcon}
      />
      <SidebarOption
        title="Book Recommendations"
        Icon={ConfirmationNumberOutlinedIcon}
      />
      <br />
      <strong className="sidebar__title">Features</strong>
      <br />
      <SidebarOption title="Author Spotlight" Icon={FavoriteBorderIcon} />
      <SidebarOption title="Events Calendar" Icon={Groups3Icon} />
      <SidebarOption title="Bookstore " Icon={StarOutlineIcon} />
      <br />
      <hr />
    </div>
  );
}

export default Sidebar;
