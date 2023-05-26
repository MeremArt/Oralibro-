import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

import styled from "styled-components";

const SearchForm = () => {
  //   const { setSearchTerm, setResultTitle } = useGlobalContext();
  //   const searchText = useRef("");
  //   const navigate = useNavigate();

  //   useEffect(() => searchText.current.focus(), []);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let tempSearchTerm = searchText.current.value.trim();
  //     if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
  //       setSearchTerm("the lost world");
  //       setResultTitle("Please Enter Something ...");
  //     } else {
  //       setSearchTerm(searchText.current.value);
  //     }

  //     navigate("/book");
  //   };

  return (
    <>
      <Search>
        <div className="search-form">
          <div className="container">
            <div className="search-form-content">
              <form className="search-form" onSubmit={""}>
                <div className="search-form-elem flex flex-sb bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Oralibro..."
                    // ref={searchText}
                  />
                  <button type="submit" className="flex flex-c" onClick={""}>
                    <FaSearch className="text-purple" size={32} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Search>
    </>
  );
};

const Search = styled.section`
  .search-form {
    width: 100%;
    max-width: 680px;
    border-radius: 3.8rem;
  }
  .search-form-elem {
    padding: 1.4rem 2.8rem;
    border-radius: 3.8rem;
  }
  .search-form-elem .form-control {
    font-size: 2rem;
    padding: 0.6rem;
  }
  .search-form-elem .form-control::placeholder {
    opacity: 0.9;
  }
`;

export default SearchForm;