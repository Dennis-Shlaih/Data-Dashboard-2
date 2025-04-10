import React from "react";
import "../App.css"
function Card ({title, author}) {
    return (
        <div className="card">
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
    );
};
export default Card;