import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../../context";
import "./Gallery.css";
import BookPreview from "./BookPreview";

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyD-fK-5tCyclgwAO_h3aYmddp-FpKC-cuE`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&q=${searchTerm}`);
      return result.data;
    },
  });

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePreview = () => {
    setSelectedBook(null);
  };

  if (response.isLoading) {
    return (
      <section className="image-loading">
        <CircularProgress color="inherit" />
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <Alert variant="filled" severity="error">
          There was an error
        </Alert>
      </section>
    );
  }
  const items = response.data?.items?.slice(0, 8) ?? [];

  if (items.length < 1) {
    return (
      <section className="image-container">
        <Alert variant="filled" severity="error">
          No results found
        </Alert>
      </section>
    );
  }

  console.log(response);
  return (
    <div className="image-container">
      {items.map((item) => {
        const volumeInfo = item.volumeInfo;
        return (
          <div
            className="book-container"
            key={item.id}
            onClick={() => handleBookClick(volumeInfo)}
          >
            <img
              src={volumeInfo?.imageLinks?.thumbnail}
              alt={volumeInfo?.title}
              className="imgdash"
            />
            <p className="p-author">{volumeInfo?.authors?.join(", ")}</p>
            <div className="pleasework">
              <p className="p-title">{volumeInfo?.title}</p>
            </div>
          </div>
        );
      })}
      {selectedBook && (
        <BookPreview book={selectedBook} onClose={handleClosePreview} />
      )}
    </div>
  );
};

export default Gallery;
