import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="footer-location">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                H#1200,(19th,floor),Road #22,Mirpur
                Dohs,Mahakhali,Dhaka,Bangladesh.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-link">
              <h3 className="footer-title">Company</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
