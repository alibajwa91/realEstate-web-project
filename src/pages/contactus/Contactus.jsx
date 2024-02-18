import "./contactus.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

export default function Contactus() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndContactus">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="contactus">
          <div className="contactusWrapper">
            <div className="formTitle">
              <h3>Fill the following form to reach us!!</h3>
            </div>
            <form
              action="abajwa22@my.centennnialcollege.ca"
              method="post"
              className="contactForm"
            >
              <h4 className="subTitle"> Personal Information</h4>
              <div className="formField">
                {" "}
                <label for="firstName" className="fieldLabel">
                  First Name:
                </label>
                <input
                  type="text"
                  class="firstName"
                  id="firstName"
                  name="firstName"
                  className="fieldInput"
                  required
                />
              </div>
              <div className="formField">
                <label for="lastName" className="fieldLabel">
                  Last Name:
                </label>
                <input
                  type="text"
                  class="lastName"
                  id="lastName"
                  name="lastName"
                  className="fieldInput"
                  required
                />
              </div>
              <div className="formField">
                {" "}
                <label for="phone" className="fieldLabel">
                  Phone:
                </label>
                <input
                  type="tel"
                  class="phone"
                  id="phone"
                  name="phone"
                  className="fieldInput"
                />
              </div>
              <div className="formField">
                {" "}
                <label for="email" className="fieldLabel">
                  Email:
                </label>
                <input
                  type="email"
                  class="email"
                  id="email"
                  name="email"
                  className="fieldInput"
                  required
                />
              </div>
              <h4 className="subTitle"> Property Information</h4>
              <div className="formFieldDescription">
                <label for="propertyType" className="fieldLabel">
                  What kind of Property would you like:
                </label>
                <br />
                <input
                  type="propertyType"
                  class="  "
                  name="propertyType"
                  className="fieldInputDescription"
                  required
                />
              </div>
              <div className="formField">
                <label for="bedrooms" className="fieldLabel">
                  No. of Bedrooms you want in your residence?:
                </label>
                <input
                  type="number"
                  class="bedrooms"
                  id="bedrooms"
                  name="bedrooms"
                  className="fieldInputDesc"
                  required
                />
              </div>
              <div className="formField">
                {" "}
                <label for="bathrooms" className="fieldLabel">
                  No. of Bathrooms you want in your residence?
                </label>
                <input
                  type="number"
                  class="bathrooms"
                  id="bathrooms"
                  name="bathrooms"
                  className="fieldInputDesc"
                  required
                />
              </div>
              <div className="formField">
                {" "}
                <label for="priceRange" className="fieldLabel">
                  Enter your Price Range:
                </label>
                <input
                  type="number"
                  class="priceRange"
                  id="priceRange"
                  name="priceRange"
                  className="fieldInputDesc"
                  required
                />
              </div>
              <div className="formFieldDescription">
                {" "}
                <label
                  for="comments"
                  rows="5"
                  cols=" auto"
                  className="fieldLabel"
                >
                  Any other requirment?:
                </label>
                <input
                  type="comments"
                  class="comments"
                  name="comments"
                  className="fieldInputDescription"
                  required
                />
              </div>
              <div className="buttons">
                <input
                  type="submit"
                  id="submit"
                  name="submit"
                  className="submitbtn"
                />
                <input
                  type="reset"
                  id="reset"
                  name="reset"
                  className="resetbtn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
