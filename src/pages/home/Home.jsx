import "./home.css";
import TopBanner from "../../components/topbanner/TopBanner";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <div className="NavAndHome">
        <div className="navBar">
          <Navbar />
        </div>
        <div className="home">
          <div className="homeWrapper">
            <div className="homeTop">
              <div className="homeLeft">
                <h2>About Me:)</h2>
                <h3 className="realtorName">Ali Maqsood Bajwa</h3>
                <p>
                  My professional opinion is that the first member of the team
                  in real estate is you! <br />
                  <br /> My objective is to always be your first and only choice
                  for a GTA Realtor when you need to buy or sell a home. I work
                  hard to get the greatest results for you and your family, and
                  I can assure you that you will be proud to recommend me to
                  everyone you know and will have faith in the job we perform to
                  buy, sell, or lease your properties.
                  <br />
                  <br />
                  As a resident of the GTA, a Muskoka cottager, I am aware of
                  how challenging life can be and how crucial it is for you to
                  have faith in your Realtor to keep you informed about your
                  property's status without you having to take additional time
                  away from your busy schedule to handle the most crucial
                  transactions in your life. I'm dedicated to making sure your
                  upcoming real estate venture is easy, uncomplicated, and
                  straightforward.
                </p>
              </div>
              <div className="homeRight">
                <img src="../../assets/ceo.jpg" alt="" className="realtorImg" />
              </div>
            </div>
            <hr className="divideFeedback" />
            <div className="homeBottom">
              <h3>Feedbacks from Our beloved Customers </h3>
              <div className="feedback">
                <b>Alex</b>
                <br />
                Pricing of appartments is very afforadle
              </div>
              <div className="feedback">
                <b>Balish</b> <br /> They have hundereds of well furnished
                houses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
