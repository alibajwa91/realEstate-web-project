import "./apartments.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";
import { Appartments } from "../../Data.js";

export default function Apartments() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndApartments">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="apartments">
          <div className="apartmentsWrapper">
            <ul className="apartmentsList">
              {/* we have use map function to repeat li component below for every elment in Appartments obj in data.js */}
              {Appartments.map((u) => (
                <li className="apartmentsListItem" key={u.id}>
                  <img src={u.appartmentImg} alt="" className="apartmentImg" />
                  <span className="apartmentDesc">
                    {" "}
                    <h4 className="DescTitle">{u.address}</h4>
                    <ul className="DescList">
                      <li>{u.Price}</li>
                      <li>Bathrooms: {u.bathrooms}</li>
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
