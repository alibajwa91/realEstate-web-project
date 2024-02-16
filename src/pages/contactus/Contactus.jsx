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
      </div>
    </div>
  );
}
