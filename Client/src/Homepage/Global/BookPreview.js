import React from "react";
import "./BookPreview.css";

const BookPreview = ({ book, onClose }) => {
  return (
    <div className="book-preview-overlay">
      <div className="book-preview-container">
        <div className="book-preview-content">
          {/* <img
            src={book.image}
            alt={book.title}
            className="book-preview-image"
          /> */}
          <div className="book-preview-details">
            <h3 className="book-preview-title">{book.title}</h3>
            <p className="book-preview-author">{book.author}</p>
            <p className="book-preview-description">{book.description}</p>
          </div>
        </div>
        <button className="book-preview-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookPreview;
