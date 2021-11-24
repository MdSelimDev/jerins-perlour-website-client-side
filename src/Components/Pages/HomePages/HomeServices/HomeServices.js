import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeService from "./HomeService/HomeService";
import UseAuth from "../../../Shared/context/UseAuth/UseAuth";

const HomeServices = () => {
  const { service } = UseAuth();

  return (
    <div className="py-5">
      <h1 className="main-title text-center py-5">
        Our Awesome <span>Services</span>
      </h1>
      <div>
        <Container>
          <Row>
            {service.map((data) => (
              <HomeService key={data._id} service={data}></HomeService>
            ))}
          </Row>
          <div className="text-center py-5">
            <Link to="/" className="common-button">
              Explore More <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeServices;
