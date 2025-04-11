import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function List({ books }) {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>
              <Link
                to={`/details/${book.key.split("/").pop()}`}
                state={{ book }}
              >
                {book.title}
              </Link>
            </td>
            <td>{book.authors?.[0]?.name || "Unknown"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
