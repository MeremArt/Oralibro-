import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
export const Topbar = () => {
  return (
    <TopNav>
      <div>
        <section className="Topnav">
          <h2>Oralibro</h2>
          <SearchBar />
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
