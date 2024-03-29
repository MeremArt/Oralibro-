import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Topbar } from "./Global/Topbar";
import Dashboard from "./Pages/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { themeSettings } from "../theme";

import { useState } from "react";
import Sidebar from "./Global/Sidebar";

function Oralibro() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Wrapper>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <div className="app">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <Outlet />
              <Topbar />
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .fix {
    position: relative;
    left: 740px;
    flex-direction: row;

    display: flex;
    bottom: 300px;
  }
  .sidebar-fix {
    background-color: #3d58c2;
    max-width: 200px;
    height: 95vh;
    position: relative;
    top: 38px;
  }
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  .app {
    display: flex;
    height: 100vh;
  }
`;

export default Oralibro;
