import React from "react";
import styled from "styled-components";
import LoaderImg from "./images/loader.svg";
const Loading = () => {
  return (
    <Loader>
      <div className="loader flex flex-c">
        <img src={LoaderImg} alt="loader" />
      </div>
    </Loader>
  );
};
const Loader = styled.div`
  .loader {
    padding: 4rem 0;
  }
  .loader img {
    width: 120px;
  }
`;
export default Loading;
