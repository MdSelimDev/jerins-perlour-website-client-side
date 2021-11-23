import React from "react";
import { Container, Row } from "react-bootstrap";
import TestimonialOne from "../../../image/testimonial-1.png";
import TestimonialTwo from "../../../image/testimonial-2.png";
import TestimonialThree from "../../../image/testimonial-3.png";
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Naspal Patrik",
      address: "CEO,Manpool",
      description:
        "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
      rating: 5.0,
      img: TestimonialOne,
    },
    {
      id: 2,
      name: "Naspal Patrik",
      address: "CEO,Manpool",
      description:
        "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
      rating: 5.0,
      img: TestimonialTwo,
    },
    {
      id: 3,
      name: "Naspal Patrik",
      address: "CEO,Manpool",
      description:
        "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
      rating: 5.0,
      img: TestimonialThree,
    },
  ];

  return (
    <div className="py-5">
      <h1 className="main-title text-center">
        Our <span>Testimonials</span>
      </h1>
      <div className="py-5">
        <Container>
          <Row>
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
              ></Testimonial>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
