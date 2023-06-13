import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

export default function SearchBar() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/oralibro/discover");
  };
  return (
    <InputWrapper>
      <div className="search-bar-container">
        <SearchIcon sx={{ color: "black" }} onClick={handleSubmit} />
        <input
          type="text"
          placeholder="Search for books and authors you like..."
          ref={searchText}
        />
      </div>
    </InputWrapper>
  );
}

const InputWrapper = styled.section`
  width: 70%;
  height: 2.5rem;
  margin: auto;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid rgba(141, 141, 141, 0.16);

  input {
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 0.65rem;
    width: 100%;
    margin-left: 5px;
  }

  input:focus {
    outline: none;
  }

  .search-bar-container {
    display: flex;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    min-width: 200px;
    position: relative;
  }
`;
