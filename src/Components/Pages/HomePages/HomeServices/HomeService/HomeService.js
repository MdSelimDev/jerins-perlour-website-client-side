import React from "react";
import { Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./HomeService.css";

const HomeService = ({ service }) => {
  const { _id, title, img, price, description } = service;

  return (
    <Col lg={4} sm={12}>
      <div className="text-center px-4 py-5 rounded-3 single-services">
        <img src={img} alt="" />
        <h2 className="service-title pt-4 pb-2">{title}</h2>
        <h3 className="service-price py-2">${price}</h3>
        <p className="service-descrip">{description}</p>
        <Link className="buy-now-btn" to={`services/${_id}`}>
          Book Now <i className="fas fa-angle-right ms-2"></i>
        </Link>
        <Outlet />
      </div>
    </Col>
  );
};

export default HomeService;
