import React from "react";
import styled from "styled-components";
import SearchForm from "./Pages/SearchForm";

export default function Header() {
  return (
    <Head>
      <div>
        {" "}
        <div className="holder">
          <header className="header">
            <div className="header-content flex flex-c text-center text-white">
              <h2 className="header-title ">Find your book of choice</h2>
              <br />
              <p className="header-text ">
                Immerse yourself in the enchanting world of books as you browse
                through our extensive collection spanning various genres and
                time periods. From classic literature that has withstood the
                test of time to contemporary masterpieces that push boundaries
              </p>
            </div>
          </header>
          <section className="search">
            <SearchForm />
          </section>
        </div>
      </div>
    </Head>
  );
}

const Head = styled.section`
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header-title {
    color: 121212;
    margin-right: 70px;
    position: relative;
    bottom: 30px;
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
  }
  .holder {
    position: relative;
    bottom: 160px;
    margin: auto;
  }
  .header-text {
    position: relative;
    bottom: 25px;
    margin-bottom: 0.8rem;
    line-height: 150%;
    display: flex;
    width: 1009px;
    color: #767676;
    margin-right: 20px;
    text-align: center;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    align-items: center;
  }
  .search {
    // bottom: 10px;
  }
`;
