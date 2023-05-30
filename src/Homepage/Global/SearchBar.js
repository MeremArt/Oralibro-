import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
        placeholder="Search..."
        style={{
          width: "300px",
          background: "red",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
