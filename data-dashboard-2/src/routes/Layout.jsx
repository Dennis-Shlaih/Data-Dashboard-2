import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <nav className="sidebar">
        <ul>
          <li key="home-link">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li key="bar-chart-link">
            <Link to="/bar-chart" className="nav-link">Top Books</Link>
          </li>
          <li key="pie-chart-link">
            <Link to="/pie-chart" className="nav-link">Top Authors</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
