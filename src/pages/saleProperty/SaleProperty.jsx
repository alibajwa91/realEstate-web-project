import "./saleproperty.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

export default function SaleProperty() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndSaleProperty">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="salesproperty">
          <div className="gallery">
            <ul>
              <li className="salePropertyListItem">
                <img
                  className="salePropertyImg"
                  src="../../assets/appartments/condo.jpeg"
                  alt=""
                />
                <span>
                  <img src="../../assets/appartments/condo.jpeg" alt="" />
                  <h3>
                    <br />
                    #1018 49-Thorncliffe Parkdrive Toronto, ON M3C 3A5
                  </h3>
                  <h3>C$80,000</h3>
                  <p>2 bedrooms | 1 bathroom </p>
                  <p>
                    Brand new appartment with all facilities include. you can
                    enjoy downtown view from this appartment.
                  </p>
                </span>
              </li>

              <li className="salePropertyListItem">
                <img
                  className="salePropertyImg"
                  src="../../assets/houses/newhouse.jpg"
                  alt=""
                />
                <span>
                  <img src="../../assets/houses/newhouse.jpg" alt="" />
                  <h3>1220,Eglinton ave East, Scarbrough, ON M1N 1B3</h3>
                  <h3>C$575,000/-</h3>
                  <p>3 bedrooms | 2 bathrooms</p>
                  <p>
                    This house is just near to the main shoping centers of town
                    and all other facilities are at walking distance
                  </p>
                </span>
              </li>
            </ul>
          </div>
          <hr className="divideTopBottom" />
          <div className="propertyBottom">
            <ul className="propertyLists">
              <li className="propertyListItem">Apartments</li>
              <li className="propertyListItem"> Houses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
