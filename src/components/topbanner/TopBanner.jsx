import "./topBanner.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function TopBanner() {
  return (
    <div className="topBannerContainer">
      <div className="topBannerTop">
        <div className="topBannerLeft">
          <Link to="/" className="link">
            <img
              src="../../assets/abmlogo.png"
              alt=""
              className="topBannerlogo"
            />
          </Link>
          <span className="TopBannerTxt">We Provides Luxury Life style</span>
        </div>
        <div className="topBannerRight">
          <span className="commonNav">Help</span>
          <span className="commonNav">Advertise</span>
          <span className="login">
            <Link to="/loginpage" className="link">
              <AccountCircleIcon className="profileIcon" />
              <span className="loginTxt">Log In</span>
            </Link>
          </span>
        </div>
      </div>
      <hr className="TopBottomDivision" />
      <div className="topBannerBottom">
        <div className="topBannerSearch">
          {" "}
          <div className="searchbar">
            <SearchIcon />
            <input
              type="text"
              className="searchInput"
              placeholder="Search for houses or apartments"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
