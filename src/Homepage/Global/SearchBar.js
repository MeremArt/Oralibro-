import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or other action with the search text
    console.log("Search submitted:", searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search for books and author you like..."
        InputLabelProps={{
          style: {
            color: "#121212",
            textAlign: "center",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon sx={{ color: "black" }} />
              </IconButton>
            </InputAdornment>
          ),
          style: { color: "black" }, // Add this line to make placeholder text black
          focused: false,
        }}
        style={{
          width: "540px",
          minwidth: "200px",
          height: "45px",
          background: "#FFFFFF",
          border: "1px solid rgba(141, 141, 141, 0.16)",
          borderRadius: "20px",
          boxSizing: "border-box",
          top: "calc(50% - 48px/2)",
          margin: "0px",
        }}
      />
    </form>
  );
};

export default SearchBar;
