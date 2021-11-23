import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main-box py-5 text-center">
      <Container>
        <div className="pt-5">
          <Row>
            <Col lg={3} sm={12}>
              <div className="footer-location">
                <p className="text-start">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  H#1200,(19th,floor),
                  <br />
                  Road #22,Mirpur Dohs,Mahakhali,
                  <br />
                  Dhaka,Bangladesh.
                </p>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="footer-link">
                <h3 className="footer-title">Company</h3>
                <ul>
                  <li>About</li>
                  <li>Project</li>
                  <li>Our Team</li>
                  <li>Terms And Condition</li>
                  <li>Submit Listening</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="footer-link">
                <h3 className="footer-title">Qucik Links</h3>
                <ul>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>Rentals</li>
                  <li>Sales</li>
                  <li>Our Blog</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="footer-location">
                <h3 className="footer-title">About Us</h3>
                <p>
                  We give a qualityful service as your demand. We Make a team
                  for our salon to do good work and customer satisfiction our
                  main priority.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <i className="fab fa-facebook-square"></i>
                    </li>
                    <li>
                      <i className="fab fa-instagram-square"></i>
                    </li>
                    <li>
                      <i className="fab fa-linkedin"></i>
                    </li>
                    <li>
                      <i className="fab fa-youtube"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="text-center pt-5">
        <p className="m-0">&copy; All right reserved 2021 || Selim</p>
      </div>
    </footer>
  );
};

export default Footer;
