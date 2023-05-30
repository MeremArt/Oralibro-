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
              <h2 className="header-title text-capitalize">
                Find your book of choice.
              </h2>
              <br />
              <p className="header-text ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                beatae sapiente quibusdam consequatur perspiciatis facere
                laboriosam non nesciunt at id repudiandae, modi iste? Eligendi,
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
    font-size: 36px;
    color: 121212;
  }
  .holder {
    position: relative;
    bottom: 270px;
    margin: auto;
    right: 20px;
  }
  .header-text {
    margin-top: -16px;
    margin-bottom: 2.8rem;
    // opacity: 0.8;
    max-width: 770px;
    margin-left: 10px;
    text-align: center;
    color: #55555;
    font-size: 16px;
    align-items: center;
  }
  .search {
    position: relative;
    bottom: 200px;
    left: 200px;
  }
`;
