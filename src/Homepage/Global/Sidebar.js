import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { tokens } from "../../theme";
import "./Topbar.css";
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
      <Typography>{title}</Typography>
      <Link to={to} />
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
              // "& .pro-sidebar-inner": {
              //   background: `${colors.primary[400]} !important`,
              // },
              // "& .pro-icon-wrapper": {
              //   backgroundColor: "transparent !important",
              // },
              // "& .pro-inner-item": {
              //   padding: "5px 35px 5px 20px !important",
              // },
              // "& .pro-inner-item:hover": {
              //   color: "#868dfb !important",
              // },
              // "& .pro-menu-item.active": {
              //   color: "#6870fa !important",
              // },
            }
          }
        >
          <Menu>
            {/* <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.black[200],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h2" color={colors.black[400]}>
                    Welcome
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem> */}
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={""}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.black[400]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.primary[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.primary[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Discover"
                to="/team"
                icon={<ExploreIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Podcast"
                to="/contacts"
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
                sx={{ m: "15px 0 5px 20px" }}
              >
                Page turners
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
                title="Book Recomendations"
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
                Features
              </Typography>
              <Item
                title="Author Spotlight"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Events Calender"
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
              {/* <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Box>
          </Menu>
        </Box>
      </ProSidebarProvider>
    </div>
  );
};

export default Sidebar;
