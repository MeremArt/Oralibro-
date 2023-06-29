import React from "react";
import styled from "styled-components";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import Gallery from "../Global/Gallery";
const Discover = () => {
  const location = useLocation();

  return (
    <>
      <Cover>
        <section className="head">
          <Header />
        </section>

        <section className="gal">
          <Gallery />
        </section>
      </Cover>
    </>
  );
};

const Cover = styled.section`
  .head {
    height: 10vh;
  }
  .gal {
    height: 10vh;
    display: flex;
  }
`;

export default Discover;
