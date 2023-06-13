import React from "react";
import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ExploreIcon from "@mui/icons-material/Explore";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import LogoutIcon from "@mui/icons-material/Logout";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#FE8E5C" : colors.black[100],
      }}
      onClick={() => setSelected(title)}
      icon={React.cloneElement(icon, {
        style: {
          color: selected === title ? "#121212" : colors.black[100],
        },
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          style={{
            color: isHovered ? colors.black[900] : "inherit",
          }}
        >
          {title}
        </Typography>
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
          sx={{
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },

            "& .pro-menu-item.active": {
              color: "#3D58C2 !important",
            },
          }}
        >
          <Menu>
            <Box>
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
                sx={{ m: "5px 0 -10px 20px" }}
              ></Typography>
              <Item
                title="Discover"
                to="/oralibro/Discover"
                icon={
                  <ExploreIcon
                    sx={{
                      ":hover": {
                        color: "red",
                      },
                    }}
                  />
                }
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

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "0px 0 0px 20px" }}
              ></Typography>
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
                title="Recommendation"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "0px 0 0px 20px" }}
              ></Typography>
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
              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "13px 0 0px 20px" }}
              ></Typography>
              <Item
                title="Settings"
                to="/geography"
                icon={<SettingsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="logout"
                to="/geography"
                icon={<LogoutIcon />}
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
