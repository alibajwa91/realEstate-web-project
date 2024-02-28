import "./houses.css";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS file
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";
import { HousesData } from "../../Data.js";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from "@mui/icons-material/Delete";

// function to add green color when save icon clicked
function SaveIcon() {
  // Define state variable to track click state
  const [clicked, setClicked] = useState(false);

  // Event handler function to toggle click state
  const handleClick = () => {
    setClicked(!clicked);
    if (clicked) {
      window.alert("Unsaved!");
    } else {
      window.alert("Saved!");
    }
  };

  return (
    // Apply green color based on click state
    <BookmarkIcon
      onClick={handleClick}
      style={{ color: clicked ? "limegreen" : "black" }}
    />
  );
}

export default function Houses() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndHouses">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="houses">
          <div className="housesWrapper">
            <ul className="housesList">
              {/* we have use map function to repeat li component below for every elment in HousesData obj in data.js */}
              {HousesData.map((u) => {
                const images = u.houseImg.map((img) => ({
                  original: img,
                  // thumbnail: img,
                }));

                return (
                  <li className="housesListItem">
                    <div className="houseImg">
                      <ImageGallery items={images} />
                      <div className="saveAndDelIcons">
                        <SaveIcon className="saveIcon" />
                        <DeleteIcon className="DeleteIcon" />
                      </div>
                    </div>
                    <span className="houseDesc">
                      {" "}
                      <h4 className="DescTitle"> {u.address}</h4>
                      <ul className="DescList">
                        <li>{u.Price}</li>
                        <li>Bathrooms:{u.bathrooms}</li>
                        <li>
                          Bedrooms:{u.Bedrooms} (contact for more details)
                        </li>
                      </ul>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
