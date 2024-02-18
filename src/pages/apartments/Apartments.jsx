import "./apartments.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

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
              <li className="apartmentsListItem">
                <img
                  src="../../assets/appartments/appartment1.jpeg"
                  alt=""
                  className="apartmentImg"
                />
                <span className="apartmentDesc">
                  {" "}
                  <h4 className="DescTitle">
                    {" "}
                    unit 302, 3243 Burligton ave, North york, Toronto{" "}
                  </h4>
                  <ul className="DescList">
                    <li>Price: 355,900$</li>
                    <li>Bathrooms:2</li>
                    <li>Bedrooms:3 (contact for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="apartmentsListItem">
                <img
                  src="../../assets/appartments/appartment2.jpeg"
                  alt=""
                  className="apartmentImg"
                />
                <span className="apartmentDesc">
                  {" "}
                  <h4 className="DescTitle">
                    {" "}
                    unit 2302, 4332 cresent Road, North york, Toronto
                  </h4>
                  <ul className="DescList">
                    <li>Price = 253,400$</li>
                    <li>Bathrooms: 1</li>
                    <li>Bedrooms:2 (contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="apartmentsListItem">
                <img
                  src="../../assets/appartments/appartment3.jpeg"
                  alt=""
                  className="apartmentImg"
                />
                <span className="apartmentDesc">
                  {" "}
                  <h4 className="DescTitle">
                    unit 1020, 345 Hallway street, downtown, Toronto
                  </h4>
                  <ul className="DescList">
                    <li>Price: 744,500$</li>
                    <li>Bedrooms:3</li>
                    <li>Bathrooms:2 (contactus for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="apartmentsListItem">
                <img
                  src="../../assets/appartments/appartment4.jpeg"
                  alt=""
                  className="apartmentImg"
                />
                <span className="apartmentDesc">
                  {" "}
                  <h4 className="DescTitle">
                    unit: 901, 2019 Bessbrough drive, east york,Toronto
                  </h4>
                  <ul className="DescList">
                    <li>price: 534,000$</li>
                    <li>bedrooms: 2 </li>
                    <li>Bathrooms: 1 (Contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="apartmentsListItem">
                <img
                  src="../../assets/appartments/appartment5.jpeg"
                  alt=""
                  className="apartmentImg"
                />
                <span className="apartmentDesc">
                  {" "}
                  <h4 className="DescTitle">
                    unit: 405, 5434 Norway street, East york, Toronto
                  </h4>
                  <ul className="DescList">
                    <li>Price: 325300$</li>
                    <li>bedrooms: 3</li>
                    <li>bathrooms:2 (Contact us for more details)</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
