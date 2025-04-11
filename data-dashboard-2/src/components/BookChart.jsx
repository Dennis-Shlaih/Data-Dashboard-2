import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BookBarChart({ books }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!books || books.length === 0) return;

    const data = books.map((book) => ({
      name: book.title,
      value: book.edition_count || 0,
    }));

    setChartData(data);
  }, [books]);

  return (
    <div className="book-chart">
      <h2>Edition Count per Book (Bar Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
        >
          <XAxis type="number" allowDecimals={false} />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookBarChart;
