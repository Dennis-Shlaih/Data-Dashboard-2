import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1", "#d0ed57"];

function PieChartOverview() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=100");
      const data = await response.json();
      setBooks(data.works || []);
    };

    fetchBooks();
  }, []);

  const authorCount = books.reduce((acc, book) => {
    const author = book.authors?.[0]?.name || "Unknown";
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(authorCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6); 

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Top 6 Authors by Book Count (Pie Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartOverview;
