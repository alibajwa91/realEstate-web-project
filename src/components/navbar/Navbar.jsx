import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <ul className="navPages">
          <li className="navPage">Home</li>
          <li className="navPage">
            Avaliable <br />
            Properties
          </li>
          <li className="navPage">Contact Form</li>
          <li className="navPage">Site Map</li>
        </ul>
      </div>
    </div>
  );
}
