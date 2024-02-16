import "./houses.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

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
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL1.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle"> 2324 Ramsy Road , Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 475,900$</li>
                    <li>Bathrooms:1</li>
                    <li>Bedrooms:2 (contact for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL2.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">4953 Bannf Road, Toronto</h4>
                  <ul className="DescList">
                    <li>Price = 410,000$</li>
                    <li>Bathrooms: 2</li>
                    <li>Bedrooms:2 (contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL3.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">3234 Bayview ave, Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 644,500$</li>
                    <li>Bedrooms:4</li>
                    <li>Bathrooms:2 (contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL4.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">456 Mount pleasent Road,Toronto</h4>
                  <ul className="DescList">
                    <li>price: 774,000$</li>
                    <li>bedrooms: 4 </li>
                    <li>Bathrooms: 2 (Contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL5.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">312 Millwood road,Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 502,300$</li>
                    <li>bedrooms: 3</li>
                    <li>bathrooms:2 (Contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL6.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">432 pape ave , Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 554,900$</li>
                    <li>Bathrooms:1</li>
                    <li>Bedrooms:2 (contact for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL7.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">2334 Eglinton ave East, Toronto</h4>
                  <ul className="DescList">
                    <li>Price = 734,000$</li>
                    <li>Bathrooms: 2</li>
                    <li>Bedrooms:4 (contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL8.jpg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">342 Richard street, Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 600,000$</li>
                    <li>Bedrooms:3</li>
                    <li>Bathrooms:2 (contactus for mmore details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL9.jpg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">436 Danfroth ave,Toronto</h4>
                  <ul className="DescList">
                    <li>price: 700,000$</li>
                    <li>bedrooms: 4 </li>
                    <li>Bathrooms: 2 (Contact us for more details)</li>
                  </ul>
                </span>
              </li>
              <li className="housesListItem">
                <img
                  src="../../assets/houses/houseL10.jpeg"
                  alt=""
                  className="houseImg"
                />
                <span className="houseDesc">
                  {" "}
                  <h4 className="DescTitle">3654 Lawrence ave,Toronto</h4>
                  <ul className="DescList">
                    <li>Price: 605,300$</li>
                    <li>bedrooms: 4</li>
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
