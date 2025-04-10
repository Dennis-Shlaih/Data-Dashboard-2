import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import List from "./components/List";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("fiction");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://openlibrary.org/subjects/${category}.json?limit=100`
      );
      const data = await response.json();
      setBooks(data.works || []);
    };

    fetchBooks();
  }, [category]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalBooks = books.length;
  const averageTitleLength =
    totalBooks > 0
      ? books.reduce((sum, book) => sum + book.title.length, 0) / totalBooks
      : 0;

  const authorCount = books.reduce((acc, book) => {
    const author = book.authors?.[0]?.name || "Unknown";
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const mostCommonAuthor = Object.keys(authorCount).reduce(
    (a, b) => (authorCount[a] > authorCount[b] ? a : b),
    "Unknown"
  );

  return (
    <div className="App">
      <Header />
      <NavBar setCategory={setCategory} />

      <input
        className="search-bar"
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="stats-container">
        <div className="stat-card">Total Books: {totalBooks}</div>
        <div className="stat-card">Most Common Author: {mostCommonAuthor}</div>
        <div className="stat-card">
          Avg Title Length: {averageTitleLength.toFixed(2)} chars
        </div>
      </div>

      <List books={filteredBooks} />
    </div>
  );
}

export default App;