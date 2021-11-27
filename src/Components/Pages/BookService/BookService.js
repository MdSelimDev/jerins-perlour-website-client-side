import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import UseAuth from "../../Shared/context/UseAuth/UseAuth";
import Header from "../../Shared/Header/Header";
import "./BookService.css";

const BookService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const { user } = UseAuth();

  useEffect(() => {
    axios
      .get(`https://polar-meadow-40946.herokuapp.com/service/${id}`)
      .then((result) => {
        setService(result.data);
      });
  }, [id]);

  const HandleSubmitBooking = (d) => {
    console.log(d);
    d.orderdata = service;
    axios
      .post("https://polar-meadow-40946.herokuapp.com/order", d)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            title: "Successfully",
            text: "Order Submited",
            icon: "success",
          });
          navigate("/dashboard/bookinglist");
          reset();
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="py-5">
        <h1 className="all-head-title text-center pb-5">Book Your Order</h1>
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <div className="text-center p-5 rounded-3 single-services shadow-lg">
                <img src={service?.img} alt="" />
                <h2 className="service-title pt-4 pb-2">{service?.title}</h2>
                <h3 className="service-price py-2">${service?.price}</h3>
                <p className="service-descrip">{service?.description}</p>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div>
                <form
                  onSubmit={handleSubmit(HandleSubmitBooking)}
                  className="bookservice-form-box"
                >
                  <input
                    type="text"
                    {...register("name")}
                    defaultValue={user?.displayName}
                  />
                  <input
                    type="email"
                    {...register("email")}
                    defaultValue={user?.email}
                  />
                  <input
                    type="number"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    required
                  />
                  <input
                    type="text"
                    {...register("district")}
                    placeholder="Enter your district name"
                    required
                  />
                  <input
                    type="text"
                    {...register("zip")}
                    placeholder="Enter your zip name"
                    required
                  />
                  <input
                    type="number"
                    {...register("zipcode")}
                    placeholder="Enter your zip code"
                    required
                  />
                  <input
                    type="submit"
                    className="common-button border-0 text-white"
                    value="Booking Now"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BookService;
