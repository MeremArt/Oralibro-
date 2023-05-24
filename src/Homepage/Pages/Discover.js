import React from "react";
import styled from "styled-components";
const Discover = () => {
  return (
    <Cover>
      <div>
        <h2>Discover</h2>
        <h2>Discover</h2>
        <h2>Discover</h2>
        <h2>Discover</h2>
        <h2>Discover</h2>
        <h2>Discover</h2>
        <h2>Discover</h2>
      </div>
    </Cover>
  );
};

const Cover = styled.section`
  h2 {
    position: relative;
    left: 500px;
    bottom: 350px;
    display: flex;
  }
`;

export default Discover;
