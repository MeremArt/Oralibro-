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
                find your book of choice.
              </h2>
              <br />
              <p className="header-text fs-18 fw-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                beatae sapiente quibusdam consequatur perspiciatis facere
                laboriosam non nesciunt at id repudiandae, modi iste? Eligendi,
                rerum!
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
    font-size: 4.2rem;
  }
  .holder {
    position: relative;
    bottom: 270px;
    margin: auto;
  }
  .header-text {
    margin-top: -1.8rem;
    margin-bottom: 2.8rem;
    opacity: 0.8;
    max-width: 770px;
  }
  .search {
    align-items: center;
  }
`;
