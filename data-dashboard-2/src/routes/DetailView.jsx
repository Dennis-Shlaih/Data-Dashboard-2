import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BookChart from "../components/BookChart";

function DetailView() {
  const { id } = useParams();
  const location = useLocation();
  const [book, setBook] = useState(location.state?.book || null);

  useEffect(() => {
    if (!book) {
      const fetchBook = async () => {
        try {
          const response = await fetch(
            "https://openlibrary.org/subjects/fiction.json?limit=100"
          );
          const data = await response.json();
          const foundBook = data.works.find(
            (b) => b.key.split("/").pop() === id
          );
          if (foundBook) {
            const normalized = {
              ...foundBook,
              author: foundBook.authors?.[0]?.name || "Unknown",
            };
            setBook(normalized);
          }
        } catch (error) {
          console.error("Failed to fetch book data:", error);
        }
      };

      fetchBook();
    }
  }, [book, id]);

  return (
    <div className="detail-view">
      {book ? (
        <>
          <h2 className="book-title">{book.title}</h2>
          <p><strong>Author:</strong> {book.authors?.[0]?.name || "Unknown"}</p>
          <p><strong>First Published:</strong> {book.first_publish_year}</p>
          <p><strong>Edition Count:</strong> {book.edition_count}</p>
          <BookChart books={[{ ...book, author: book.authors?.[0]?.name || "Unknown" }]} />
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default DetailView;
