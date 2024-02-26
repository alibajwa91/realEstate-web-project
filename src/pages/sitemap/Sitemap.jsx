import "./sitemap.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";
import GoogleMap from "../../components/googlemap/GoogleMap";

export default function Sitemap() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndMap">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="sitemap">
          <div className="sitemapWrapper">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
}
