import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./HomeContact.css";

const HomeContact = () => {
  const { register, handleSubmit, reset } = useForm();

  const HandleContactSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="contact-form-main pt-5">
      <h1 className="main-title text-center py-5">
        Let Us Handle Your <br /> Project Professionally
      </h1>
      <div className="contact-form-box py-5">
        <form onSubmit={handleSubmit(HandleContactSubmit)}>
          <Row>
            <Col lg={6}>
              <input
                type="text"
                className="w-100 contact-input"
                placeholder="Enter your first name"
                {...register("first_name")}
                required
              />
            </Col>
            <Col lg={6}>
              <input
                type="text"
                className="w-100 contact-input"
                placeholder="Enter your last name"
                {...register("last_name")}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <input
                type="email"
                className="w-100 contact-input"
                placeholder="Enter your email"
                {...register("email")}
                required
              />
            </Col>
            <Col lg={6}>
              <input
                type="number"
                className="w-100 contact-input"
                placeholder="Enter your phone number"
                {...register("phone")}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <textarea
                className="w-100 contact-textarea"
                cols="15"
                rows="5"
                placeholder="Write your message contact-textarea"
                {...register("description")}
                required
              ></textarea>
            </Col>
          </Row>
          <div className="text-center">
            <input
              className="common-button border-0"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
