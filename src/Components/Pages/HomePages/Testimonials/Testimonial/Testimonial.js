import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  const { name, rating, img, address, description } = testimonial;

  return (
    <Col lg={4} sm={12}>
      <div className="p-4 text-center main-testi-box rounded-3">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <img className="testi-img me-3" src={img} alt="" />
          </div>
          <div>
            <h4 className="testi-name"> {name} </h4>
            <h6 className="testi-address"> {address} </h6>
          </div>
        </div>
        <p className="testi-description pb-2 pt-5"> {description} </p>
        <div>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
          />
        </div>
      </div>
    </Col>
  );
};

export default Testimonial;
