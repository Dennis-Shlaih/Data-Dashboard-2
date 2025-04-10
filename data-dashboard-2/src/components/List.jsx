import React from "react";
import "../App.css"

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
            <td>{book.title}</td>
            <td>{book.authors?.[0]?.name || "Unknown"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;