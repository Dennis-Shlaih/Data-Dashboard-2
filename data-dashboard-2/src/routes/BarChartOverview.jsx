import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BarChartOverview() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=100");
      const data = await response.json();
      setBooks(data.works || []);
    };

    fetchBooks();
  }, []);

  const chartData = books.map(book => ({
    name: book.title,
    value: book.edition_count || 0
  })).slice(0, 10); 

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Top 10 Books by Edition Count (Bar Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          <XAxis type="number" allowDecimals={false} />
          <YAxis dataKey="name" type="category" width={200} />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartOverview;
