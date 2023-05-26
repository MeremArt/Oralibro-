import React from "react";
import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PodcastsIcon from "@mui/icons-material/Podcasts";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.black[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="sidebar-fix">
      <ProSidebarProvider collapsed={isCollapsed}>
        <Box
          sx={
            {
              // Styling for the sidebar
            }
          }
        >
          <Menu>
            {/* Sidebar content */}
            {/* ... */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/oralibro/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                {/* <p className="p">Data</p> */}
              </Typography>
              <Item
                title="Discover"
                to="/oralibro/Discover"
                icon={<ExploreIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Podcast"
                to="/"
                icon={<PodcastsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reviews & Ratings"
                to="/invoices"
                icon={<ReviewsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* ... */}

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                {/* <p>Page turners</p> */}
              </Typography>
              <Item
                title="Book Swap"
                to="/form"
                icon={<SwapHorizIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contests"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Recommendations"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                {/* <p> Features</p> */}
              </Typography>
              <Item
                title="Author Spotlight"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Events Calendar"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Bookstore"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Settings"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Box>
      </ProSidebarProvider>
    </div>
  );
};

export default Sidebar;
