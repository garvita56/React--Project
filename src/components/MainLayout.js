import { Outlet, Link } from "react-router-dom";
import './mainlayout.css';

export default function Mainlayout() {
  return (
    <div id="body">
      <div id="navi">
        <nav className="navbar">
          <div className="navbar-banner">
            <h1>HOME</h1>
          </div>
          <div id="li">
            <Link to="banner" style={{ textDecoration: 'none', color: 'inherit' }}>
              <li>Banner</li>
            </Link>
            <Link to="service" style={{ textDecoration: 'none', color: 'inherit' }}>
              <li>Service</li>
            </Link>

          </div>
        </nav>
      </div>

      <div id="outlet">
        <Outlet />
      </div>

      <div id="footer">
        <footer className="footer">
          <p>This is my footer</p>
        </footer>
      </div>
    </div>
  );
}


