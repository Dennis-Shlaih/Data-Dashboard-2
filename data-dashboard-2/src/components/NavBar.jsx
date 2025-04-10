import React from "react";
import "../App.css"

const NavBar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setCategory("fiction")}>Fiction</button>
      <button onClick={() => setCategory("history")}>History</button>
      <button onClick={() => setCategory("science")}>Science</button>
    </nav>
  );
};
export default NavBar;