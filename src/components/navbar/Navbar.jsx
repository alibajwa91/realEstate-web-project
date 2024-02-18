import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <ul className="navPages">
          <Link to="/" className="link">
            <li className="navPage">Home</li>
          </Link>
          <Link to="/salepropertypage" className="link">
            <li className="navPage">
              Avaliable <br />
              Properties
            </li>
          </Link>
          <Link to="/contactuspage" className="link">
            <li className="navPage">Contact Form</li>
          </Link>
          <Link to="/sitemappage" className="link">
            <li className="navPage">Site Map</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
