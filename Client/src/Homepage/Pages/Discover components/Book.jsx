import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Book = (book) => {
  return (
    <Bookstyle>
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-img">
          <img src={book.cover_img} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <Link to={`/book/${book.id}`} {...book}>
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{book.title}</span>
            </div>
          </Link>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <span>{book.author.join(", ")}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15">
            <span className="text-capitalize fw-7">Total Editions: </span>
            <span>{book.edition_count}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">First Publish Year: </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </div>
    </Bookstyle>
  );
};

const Bookstyle = styled.section`
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

export default Book;
