import dynamic from "next/dynamic";
import "./global.css";
import "./home.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});

const HomeHeader = dynamic(() => import("@/components/Carousel/HomeHeader"), {
  ssr: false,
});

const HomeRange = dynamic(() => import("@/components/Carousel/HomeRange"), {
  ssr: false,
});

const HomeSkinAnalysisSection = () => {
  return (
    <div className="homeSkinAnalysisGroup">
      <div className="HSAcontent">
        <div className="HSAleft">
          <div className="HSAoverlay"></div>
        </div>
        <div className="HSAright">
          <div className="HSAinfo">
            <h1>Get the right product for your skin</h1>
            <h5>
              Use our automated quiz that will give the perfect product for your
              skin condition
            </h5>
          </div>
          <button className="fancyGreenButton ">Skin analysis</button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="clientWebsiteContainerInside">
      <Navbar />
      <div className="clientWebsiteContent homepage ">
        <div>
          <Container className="homeContainer">
            {/* Header */}
            <Row>
              <HomeHeader />
            </Row>

            {/* Product categories */}
            <Row style={{ marginTop: "40px" }}>
              <div className="homeRangeWrapper">
                <div className="HomeRangeContainer">
                  <HomeRange />
                </div>
              </div>
            </Row>

            {/* Skin analysis */}
            <Row>
              <HomeSkinAnalysisSection />
            </Row>

            {/* Testimonials */}
            <Row>
              <h1>Testimonials</h1>
              <Row></Row>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
