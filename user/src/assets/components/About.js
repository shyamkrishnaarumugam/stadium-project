import React from "react";
import NavItems from "./NavItems";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <NavItems />

      <div className="dark-mode">
        <Container>
          <Row>
            <Col className="spacer-about text-center">
              <h1 className="text-warning">About Us</h1>
              {/* <h5>Sportiq</h5> */}
              <h5 className="discover-para pt-4">
                Sportiq has made playing basketball a breeze. I always have a
                game to join and <br /> end up on the court more often!
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12} className="about-img">
              <img src={require("../images/nav-logo.png")} className="py-4 mx-auto " />
            </Col>
            <Col md={6} sm={12} className="about-para">
                <p>
              <span className="text-primary">Sportiq </span>turf is a surface of synthetic fibers made to look like
              natural grass, used in sports arenas, residential lawns and
              commercial applications that traditionally use grass. It is much
              more durable than grass and easily maintained without irrigation
              or trimming, although periodic cleaning is required. Stadiums that
              are substantially covered and/or at high latitudes often use
              artificial turf, as they typically lack enough sunlight for
              photosynthesis and substitutes for solar radiation are
              prohibitively expensive and energy-intensive. Disadvantages
              include increased risk of injury especially when used in athletic
              competition, as well as health and environmental concerns about
              the petroleum and toxic chemicals used in its manufacture.
              Artificial turf first gained substantial attention in 1966, when
              ChemGrass was installed in the year-old Astrodome, developed by
              Monsanto and rebranded as AstroTurf, now a generic trademark
              (registered to a new owner) for any artificial turf.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
