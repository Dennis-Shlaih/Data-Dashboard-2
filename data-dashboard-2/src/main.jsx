import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./routes/Layout";
import BarChartOverview from "./routes/BarChartOverview";
import PieChartOverview from "./routes/PieChartOverview";
import DetailView from "./routes/DetailView";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="details/:id" element={<DetailView />} />
          <Route path="bar-chart" element={<BarChartOverview />} />
          <Route path="pie-chart" element={<PieChartOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
