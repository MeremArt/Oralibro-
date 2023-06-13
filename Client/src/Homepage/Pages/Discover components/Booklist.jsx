import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context";
import Loading from "./Loading";
import Book from "./Booklist";
import coverImg from "./images/cover_not_found.jpg";

const Booklist = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <Fixer>
      <h2 style={{ fontSize: "5rem" }}>Help</h2>
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>{resultTitle}</h2>
          </div>
          <div className="booklist-content grid">
            {booksWithCovers.slice(0, 30).map((item, index) => (
              <Book key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Fixer>
  );
};

const Fixer = styled.section`
  .booklist,
  .book-details {
    padding: 3rem 0;
    background-color: #f8f9fa;
  }

  .booklist-content {
    gap: 3rem;
  }

  .book-item {
    padding: 3rem 2rem;
    border-radius: 4px;
    background-color: var(--white-color);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px 0px;
    transition: var(--transition);
  }

  .book-item:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  .book-item-img img {
    max-width: 180px;
    margin-right: auto;
    margin-left: auto;
  }

  .book-item-info {
    margin-top: 2rem;
  }

  .book-item-info-item.title {
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }

  .book-item-info-item.author {
    line-height: 1.4;
    margin-bottom: 4px;
  }

  .book-item-info-item:not(.book-item-info-item.title) span:last-child {
    opacity: 0.8;
  }

  .book-item-info-item.publish-year {
    opacity: 0.6;
    font-style: italic;
    font-size: 14px;
  }

  @media screen and (min-width: 600px) {
    .booklist-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .booklist-content {
      grid-template-columns: repeat(3, 1fr);
    }

    .book-item-img img {
      max-width: 150px;
    }
  }

  @media screen and (min-width: 992px) {
    .booklist-content {
      grid-template-columns: repeat(4, 1fr);
    }

    .book-item-img img {
      max-width: 120px;
    }
  }
`;

export default Booklist;
