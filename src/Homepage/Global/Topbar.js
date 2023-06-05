import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import SearchBar from "./SearchBar";
import Search from "./Search";

export const Topbar = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/oralibro/dashboard";

  return (
    <TopNav>
      <div>
        <section className="Topnav">
          <div>
            <h2>Oralibro</h2>
          </div>
          {isDashboardRoute && <Search />}
        </section>
      </div>
    </TopNav>
  );
};

const TopNav = styled.section`
  .Topnav {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 55px;
    left: 0px;
    display: flex;
    top: 0px;
    flex-direction: row;
    /* white */
    background: #fcfbfb;
    border-bottom: 0.5px solid #dddbdb;
  }
`;

export default Topbar;
