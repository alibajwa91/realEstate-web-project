import "./houses.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";
import { HousesData } from "../../Data.js";

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
              {HousesData.map((u) => (
                <li className="housesListItem">
                  <img src={u.houseImg} alt="" className="houseImg" />
                  <span className="houseDesc">
                    {" "}
                    <h4 className="DescTitle"> {u.address}</h4>
                    <ul className="DescList">
                      <li>{u.Price}</li>
                      <li>Bathrooms:{u.bathrooms}</li>
                      <li>Bedrooms:{u.Bedrooms} (contact for more details)</li>
                    </ul>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
