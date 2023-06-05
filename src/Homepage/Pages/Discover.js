import React from "react";
import styled from "styled-components";
import Header from "../Header";
import { useLocation } from "react-router-dom";

const Discover = () => {
  const location = useLocation();

  return (
    <Cover>
      <Header />
    </Cover>
  );
};

const Cover = styled.section``;

export default Discover;
