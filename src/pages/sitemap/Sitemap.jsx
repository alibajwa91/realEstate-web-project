import "./sitemap.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

export default function Sitemap() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndHome">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="sitemap">
          <div className="sitemapWrapper"></div>
        </div>
      </div>
    </div>
  );
}
